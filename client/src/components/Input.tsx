import React from "react";
import { TextInput, View, Text, TextInputProps } from "react-native";
import { colors } from "../theme";

interface InputProps extends TextInputProps {
    label? : string;
    error? : string;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    className,
    style,
    ...props
}) => {
     return (
        <View className={`w-full mb-4 ${className || ''}`}>
         {label && (
            <Text className="font-sans text-sm text-text mb-2 ml-1">
                {label}
            </Text>
         )}
         <TextInput
         className={`
            bg-white
            rounded-2xl
            p-4
            font-sans
            text-base
            text-text
            border
            ${error ? 'border-error' : 'border-gray-200'}
            `}
            placeholderTextColor="#8D8D8D"
            {...props}
            />

            {error && (
                <Text className="text-error text-xs mt-1 ml-1">
                    {error}
                </Text>
            )}
        </View>
  );
};