import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class LoginController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body

        const findUsers = await prismaClient.user.findFirst({
            where: {
                email: email,
                password: password
            }
        })

        const existingRecord = findUsers != null ? true : false

        if(existingRecord){
            return res.render('success')
        }else{
            return res.render('error')
        }

    }
}
