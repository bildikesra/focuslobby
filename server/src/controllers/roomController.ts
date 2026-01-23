import type { Request, Response } from "express";
import prisma from "../prismaClient.js";

// Oda oluşturma mantığı
export const createRoom = async (req: Request, res: Response) => {
    try{
        const { name , description, ownerId } = req.body;
        const roomCode = Math.random().toString(36).substring(2,8).toUpperCase();

        const newRoom = await prisma.room.create({
            data : {
                name,
                description,
                code: roomCode,
                ownerId
            }
        });

        res.status(201).json({
            mesaj: "Oda başarıyla oluşturuldu",
            oda: newRoom
        });
    } catch (error) {
        console.error("Oda açma hatası: ", error);
        res.status(400).json({ error: "Oda oluşturulamadı." });
    }
};

// Odaları listeleme mantığı
export const getRooms = async (req: Request, res: Response) => {
    try {
        const rooms = await prisma.room.findMany({
            include: { owner: true }
        });
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ error: "Odalar getirilemedi."});
    }
};