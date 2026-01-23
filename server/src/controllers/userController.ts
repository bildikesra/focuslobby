import type { Request, Response } from "express";
import prisma from "../prismaClient.js";
import { error } from "console";

// Kayıt olma
export const registerUser = async (req: Request, res: Response) => {
    try {
        const { email, password, fullName } = req.body;

        if(!email || !password) {
            res.status(400).json({ error: "Email ve şifre zorunludur. "});
            return;
        }

        const newUser = await prisma.user.create({
            data: { email, password, fullName }
        });

        res.status(201).json({
            mesaj: "Tebrikler! Kullanıcı oluşturuldu.",
            kullanici: newUser
        });
    } catch (error) {
        console.error("Kayıt hatası: ", error);
        res.status(400).json({ error: "Kayıt başarısız."});
    }
};

// Kullanıcıları listeleme
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Kullanıclar getirilemedi" });
    }
};