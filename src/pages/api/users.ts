
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import connect from '../../../mongoose'
const prisma = new PrismaClient();


import cors from 'cors'

const corsMiddleware = cors({
    origin: '*', // permite qualquer origem
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // permite qualquer método HTTP
    preflightContinue: false,
});

import { v4 } from 'uuid'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    corsMiddleware(req, res, async () => {
        try {
            await connect();
            const { name, email, mobileNumber, dateOfBirth, bloodType } = req.body
            // const user = await User.create({ name, email, mobileNumber, dateOfBirth });
            const user = await prisma.user.create({
                data: {
                    id: v4(),
                    name,
                    email,
                    mobileNumber,
                    dateOfBirth,
                    bloodType,
                }
            })

            console.log('success', user);
            return res.send(user);
        } catch (err) {

            console.log(err)
        }
    })
}
