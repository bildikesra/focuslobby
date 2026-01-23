import express from 'express';
import cors from 'cors' ;
import dotenv from 'dotenv';
import prisma from './prismaClient.js';

import roomRoutes from './routes/roomRoutes.js';
import userRoutes from './routes/userRoutes.js';

// ayarları yüklüyoruz (.env dosyasını okur)
dotenv.config();

// uygulamayı oluşturuyoruz
const app = express();

app.use(cors()); // Güvenlik : Herkese (web/mobil) giriş izni verir. (Test için böyle, production'da değiştiricez)
app.use(express.json()); // Tercüman: Gelen verileri JSON formatına çevirir.

const PORT = process.env.PORT || 3000;
 
// Endpointler
// Ana sayfa rotası
app.get('/', (req, res) => {
  // req(request): gelen istek
  // res(response): bizim vereceğimiz cevap
  res.send('FocusLobby sunucusu yayında');
});

// Test rotası : 
app.get('/test', (req,res) => {
  res.json({
    mesaj : "Harika! Backend ile iletişim kurdun.",
    durum : "Başarılı",
    tarih : new Date()
  });
});

// Oda rotaları:
// Artık "/api/rooms" ile başlayan her şey roomRoutes dosyasına gidicek.
app.use('/api/rooms', roomRoutes);

// kullanıcı rotaları:
app.use('api/users', userRoutes);

// Sunucuyu başlatma
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
    console.log('Test etmek için tarayıcıda açabilirsin');
});
