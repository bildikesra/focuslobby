import React, {ReactNode} from "react";
import { View } from "react-native";

interface CardProps{
    // reactnode, bir bileşenin içine konabilecek her şeyi temsil eder.
    // (text, view, component, fragment vb.)
    children: ReactNode;
    variant?: 'outline' | 'elevated'
    className?: string;
}

// React.FC<CardProps> : component'in hangi props'ları aldığını TypeScript'e söyler
export const Card: React.FC<CardProps> = ({
    children,
    variant = 'elevated',
    className
}) => {
    const baseStyle = "rounded-2xl p-4";

    const variantStyle = variant === 'outline'
    ? "bg-transparent border border-gray-300" // outline ise şeffaf kenarlıklı
    : "bg-white shadow-sm"; // elevated ise beyaz ve gölgeli
    return(
        <View className={`${baseStyle} ${variantStyle} ${className || ''}`}>
            {children}
        </View>
    );
};