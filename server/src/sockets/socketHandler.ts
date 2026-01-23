// src/sockets/socketHandler.ts
import { Server, Socket } from 'socket.io';

export const handleSocketEvents = (io: Server) => {
    
    io.on('connection', (socket: Socket) => {
        console.log(`⚡ Kullanıcı bağlandı: ${socket.id}`);

        // 1. Odaya Katılma
        socket.on('join_room', (roomCode) => {
            socket.join(roomCode);
            console.log(`Üye (${socket.id}) -> Oda (${roomCode}) katıldı.`);
        });

        // 2. Mesaj Gönderme
        socket.on('send_message', (data) => {
            const { roomCode, message } = data;
            console.log(`Mesaj: "${message}" -> Oda: ${roomCode}`);
            
            // Gönderen hariç diğerlerine ilet
            socket.to(roomCode).emit('receive_message', message);
        });

        // 3. Ayrılma
        socket.on('disconnect', () => {
            console.log(`🔌 Kullanıcı ayrıldı: ${socket.id}`);
        });
    });
};