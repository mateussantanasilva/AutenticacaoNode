import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class ChangePasswordController{
    async handle(req: Request, res: Response){

        const { email, newPass, confirmPass } = req.body

        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if (user){
            if(user.password === newPass){
                return res.redirect('/?status=same-pass')
            }

            const userNewPass = await prismaClient.user.update({
                data: {
                    password: newPass
                },
                where:{
                    email: email
                }
            })

            return res.redirect('/?status=pass-changed-succ')
            
        }else{
            return res.redirect('/recuperar-senha?status=err-changing-pass')
        }

        return res.json(user)
    }
}