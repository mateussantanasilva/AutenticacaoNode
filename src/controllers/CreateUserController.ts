import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'
import { LoginController } from './LoginController'
import { hash } from 'bcryptjs'

export class CreateUserController {
    async handle(req: Request, res: Response) {
        type FormatedUser = {
            name: string
            email: string
            password: string
        }

        const { name, email, password }: FormatedUser = req.body

        const existingEmail = await prismaClient.user.findFirst({
            where:{
                email
            }
        })

        if(existingEmail) return res.redirect('/cadastrar?status=err-existing-mail')

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password: passwordHash
            }
        })

        return res.render('success')
    }
}