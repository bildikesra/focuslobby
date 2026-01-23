
// Renk paleti (Design Tokens)
export const colors = {
    background : '#FDFBF7', // Kırık beyaz
    primary : '#8D6E63',    // Sıcak kahve
    secondary : '#AED581',  // Adaçayı yeşili
    text : '#3E3E3E',       // Yumuşak siyah
    textLight : '#8D8D8D',  // Gri metin
    white : '#FFFFFF',      
    error : '#EF5350',      // Hata kırmızısı
    border : '#E0E0E0'      // İnce çizgiler
};

// 2. Tipografi (Font ve Boyutlar)
export const typography = {
    fontFamily: {
        serif: 'PlayfairDisplay-Regular', // Başlıklar için
        sans: 'Poppins-Regular',          // Metinler için
        sansBold: 'Poppins-Bold',
    },
    size: {
        xs: 12,
        s: 14,
        m: 16,
        l: 20,
        xl: 24,
        xxl: 32,
    }
};

// 3. Boşluklar (Spacing) - 4'ün katları kuralı
export const spacing = {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
};

// 4. Genel Stil Sabitleri
export const layout = {
    borderRadius: 16, // Yumuşak köşeler
};