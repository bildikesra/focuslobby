/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. ADIM: Tailwind nereyi tarasın?
  // app/ klasörü (sayfalarımız burada)
  // src/ klasörü (bileşenlerimiz burada)
content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  // **, alt klasörlerin hepsine gir demek
  // *, dosya adı ne olursa olsun demek
  theme: {
    // 2. ADIM: Mevcut temayı genişletiyoruz
    extend: {
      // ÖZEL RENKLERİMİZ
      // Kod içinde kullanımı: "bg-primary", "text-secondary", "border-error"
      colors: {
        background: '#FDFBF7', // sıcak krem rengi
        primary: '#8D6E63',    // Marka rengimiz (Kahve)
        secondary: '#AED581',  // Başarı/Odak rengi (Yeşil)
        text: '#3E3E3E',       // Tam siyah değil, göz yormayan gri
        textLight: '#8D8D8D',  // Yardımcı metinler
        error: '#EF5350',      // Hata durumu
      },
      // ÖZEL FONTLARIMIZ
      // Kod içinde kullanımı: "font-serif", "font-sansBold"
      // NOT: Buradaki isimler, _layout.tsx içinde yüklediğimiz isimlerle eşleşmeli
      fontFamily: {
        serif: ['PlayfairDisplay-Regular'], // Şık başlıklar için
        sans: ['Poppins-Regular'],          // Düz yazılar için
        sansBold: ['Poppins-Bold'],         // Kalın düz yazılar için
      }
    },
  },
  // 3. ADIM: Eklentiler (Şimdilik boş)
  plugins: [],
}

