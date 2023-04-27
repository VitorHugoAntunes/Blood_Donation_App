
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    corsMiddleware(req, res, async () => {
        try {
            await connect();

            // const user = await User.create({ name, email, mobileNumber, dateOfBirth });
            const users = await prisma.user.findMany();

            console.debug('GetAllUsers: success');
            return res.json(users);
        } catch (err) {

            console.log(err)
        }
    })
}
