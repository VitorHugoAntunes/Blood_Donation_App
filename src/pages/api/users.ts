
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
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
            const {
                name, email, mobileNumber, profilePicture, dateOfBirth, city, state, password, bloodType
            } = req.body

            // Funcao para criptografar a senha enviada no corpo da requisicao ao criar usuario

            async function generateHash(password: string) {
                const hash = await new Promise<string>((resolve, reject) => {
                    bcrypt.hash(password, 10, (err, hash) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(hash);
                        }
                    });
                });
                return hash;
            }

            // Necessaria uma variavel auxiliar pois a funcao retorna uma Promise<String> e nao uma string diretamente

            const hashPassword = await generateHash(password)

            // const user = await User.create({ name, email, mobileNumber, dateOfBirth });
            const user = await prisma.user.create({
                data: {
                    id: v4(),
                    name,
                    email,
                    mobileNumber,
                    profilePicture,
                    dateOfBirth,
                    city,
                    state,
                    password: hashPassword,
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
