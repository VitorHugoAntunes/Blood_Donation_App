
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
    const { userId } = req.query;
    const userIdString = typeof userId === 'string' ? userId : userId?.[0]; // Verificacao pois a query pode ser um vetor de strings e o prisma nao aceita
    try {
        await connect();
        const currentUser = await prisma.user.findUnique({
            where: { id: userIdString },
            select: {
                id: true,
                name: true,
                email: true,
                city: true,
                state: true,
                mobileNumber: true,
                dateOfBirth: true,
                profilePicture: true,
                bloodType: true,
            }
        })

        console.debug('Get Unique User: success');
        console.log(userId + "----------------------------------")
        return res.json(currentUser);
    } catch (err) {
        console.log(err)
    }
}
