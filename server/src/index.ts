import express from 'express';
import cors from 'cors' ;
import dotenv from 'dotenv';
import { createServer } from 'http'; // node.js kendi sunucusu
import { Server } from 'socket.io'; // socket.io kütüphanesi
import roomRoutes from './routes/roomRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { handleSocketEvents } from './sockets/socketHandler.js';

// ayarları yüklüyoruz (.env dosyasını okur)
dotenv.config();

// uygulamayı oluşturuyoruz
const app = express();
const PORT = process.env.PORT || 3000;

// HTTP sunucusu oluşturuyoruz (Express'i içine alarak)
const httpServer = createServer(app);

// Socket.io başlatıyoruz ve ayarlarını yapıyoruz
const io = new Server(httpServer, {
  cors: {
    origin: "*", // şimdilik herkese izin var (İLERDE KISITLANICAK)
    methods: ["GET", "POST"]
  }
});

handleSocketEvents(io);

app.use(cors()); // Güvenlik : Herkese (web/mobil) giriş izni verir. (Test için böyle, production'da değiştiricez)
app.use(express.json()); // Tercüman: Gelen verileri JSON formatına çevirir.


 
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

app.get('/', (req,res) => {
   res.send('Focuslobby API + Socket.io');
});

// Oda rotaları:
// Artık "/api/rooms" ile başlayan her şey roomRoutes dosyasına gidicek.
app.use('/api/rooms', roomRoutes);

// kullanıcı rotaları:
app.use('api/users', userRoutes);

// Sunucuyu başlatma 
// Artık "app.listen" yerine "httpServer.listen" kullanıyoruz
httpServer.listen(PORT, () => {
    console.log(`✅ Sunucu ve Socket.io http://localhost:${PORT} adresinde hazır!`);
    console.log('Test etmek için tarayıcıda açabilirsin');
});
