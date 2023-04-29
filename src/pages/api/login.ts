import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next/types';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const secret = 'mysecret';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    const { email, password } = req.body;

    try {
        // Verifica se o usuário existe no banco de dados
        const userId = await prisma.user.findUnique({
            where: { email },
            select: { id: true, password: true }
        })

        // Verificando se a senha e valida com a do usuario encontrado no banco

        const isPasswordValid = await bcrypt.compare(password, userId?.password!)

        if (!userId || !isPasswordValid || userId === null || userId === undefined) {
            return res.status(401).json({ error: 'Email or password is incorrect' });
        } else {
            // Cria um token JWT
            const token = jwt.sign({ id: userId?.id }, secret, { expiresIn: '1d' });

            // Define o token como um cookie seguro
            res.setHeader('Set-Cookie', cookie.serialize('token', token, {
                httpOnly: false,
                path: '/home',
                maxAge: 36000
            }));

            console.log(userId)
            console.log(token, "Authenticated")
            res.json({ message: 'Authenticated', id: userId?.id })
        }

    } catch (err) {
        console.log(err)
    }
}