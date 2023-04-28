import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next/types';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const secret = 'mysecret'; // Substitua por uma chave secreta forte em produção

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    const { email } = req.body;

    // Verifica se o usuário existe no banco de dados e se a senha está correta
    const userId = await prisma.user.findUnique({
        where: { email },
        select: { id: true }
    })
    console.log(userId)

    // Cria um token JWT
    const token = jwt.sign({ id: { userId } }, secret, { expiresIn: '1d' });

    // Define o token como um cookie seguro
    res.setHeader('Set-Cookie', cookie.serialize('token', token, {
        httpOnly: false,
        path: '/home',
        maxAge: 3600
    }));

    console.log(token, "Authenticated")
    res.status(200).json({ message: 'Authenticated' });
}