import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'
import { LoginController } from './LoginController'

export class CreateUserController {
    async handle(req: Request, res: Response) {
        type FormatedUser = {
            name: string
            email: string
            password: string
        }

        const { name, email, password } = req.body

        const existingEmail = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(existingEmail){
            return res.redirect('/cadastrar?status=err-existing-mail')
        }

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password
            }
        })

        return res.render('success')
    }
}