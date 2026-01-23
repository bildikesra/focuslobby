// src/prismaClient.ts
import { PrismaClient } from '@prisma/client';

// Veritabanı istemcisini oluşturuyoruz
const prisma = new PrismaClient();

// Bunu dışarıya açıyoruz ki diğer dosyalardan kullanabilelim
export default prisma;