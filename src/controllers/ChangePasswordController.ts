import { compare, hash } from 'bcryptjs'
import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class ChangePasswordController{
    async handle(req: Request, res: Response){
        type FormatedUser = {
            email: string
            newPass: string
            confirmPass: string
        }

        const { email, newPass, confirmPass }: FormatedUser = req.body

        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if (user){
            const passwordMatch = await compare(newPass, user.password)

            if(passwordMatch){
                return res.redirect('/?status=same-pass')
            }

            const passwordHash = await hash(newPass, 8)

            const userNewPass = await prismaClient.user.update({
                data: {
                    password: passwordHash
                },
                where:{
                    email: email
                }
            })

            return res.redirect('/?status=pass-changed-succ')
        }
        return res.redirect('/recuperar-senha?status=err-changing-pass')
    }
}