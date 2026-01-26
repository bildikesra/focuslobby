import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, TouchableOpacityProps } from "react-native";
import { colors, layout, spacing, typography } from "../theme";

// Butonun alabileceği özellikler
interface ButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: 'primary' | 'secondary'; // iki tip buton
    isLoading?: boolean;
}
export const Button:  React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  isLoading = false,
  className,
  ...props //(rest operator) : yukarıda aldıklarımız dışında geriye kalan her şey (onpress, style, disabled vs.)
  //  props adında bir torbaya doldurulur.  
         
}) => {
    // Tailwind sınıflarını birer string olarak birleştiriyoruz.
    // "w-full" : genişlik %100 genişlik
    // "py-4" : padding vertical 16px (4 birim x 4)
    // "rounded-2xl" : köşeleri yuvarla 


    // basestyle, butonun ne olursa olsun değişmeyen özellikleri (genişliği, yuvarlaklığı, ortalaması vb.)
    const baseStyle = "w-full py-4 px-6 rounded-2xl items-center justify-center active:opacity-80 shadow-sm"

    // varyasyona göre renk değişimi
    const variantStyle = variant === 'primary'
    ? "bg-primary" 
    : "bg-transparent border border-primary";

    const textStyle = variant === 'primary'
    ? "text-white font-sansBold text-base"
    : "text-primary font-sansBold text-base";

    return (
        <TouchableOpacity
        // sınıfları birleştir = temel + varyasyon + dışardan gelenler
        className={`${baseStyle} ${variantStyle} ${className || ''}`}
        // disabled : buton ne zaman tıklanamaz olsun demek
        // ya isloading olduğu zaman ya da dışardan disabled özelliği geldiyse tıklanılamaz olsun.
        disabled= {isLoading || props.disabled}
        // yukarda torbadaki her şeyi burada kullanıyoruz
        // kullanıcı onPress özelliğini kullanmak isterse, otomatik olarak ToucableOpacity'e geçer
        // elle onpress=.. yazmamıza gerek kalmaz.
        {...props}
        >
            {isLoading ? (
                <ActivityIndicator color="#FFF" />
            ) : (
                <Text className={textStyle}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};


