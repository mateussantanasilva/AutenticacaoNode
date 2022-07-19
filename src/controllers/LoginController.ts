import { compare } from 'bcryptjs'
import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class LoginController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body

        const findUsers = await prismaClient.user.findFirst({
            where: {
                email
            }
        })

        
        if(findUsers){
            const passwordMatch = await compare(password, findUsers.password)

            if (passwordMatch) return res.render('success')
        }
        
        return res.redirect('/?status=err-login')
    }
}
