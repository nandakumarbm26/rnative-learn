import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  otherStyles,
  keyboardType,
  textContentType,
  handleChangeText,
  secureContent = false,
  placeholder,
  ...props
}) => {
  const [hideContent, setHideContent] = useState(secureContent);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full flex-row h-16 px-4 bg-black-100 border-2 rounded-2xl focus:border-secondary items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base w-full h-full"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          textContentType={textContentType}
          onChangeText={handleChangeText}
          secureTextEntry={secureContent && hideContent}
        />
        {secureContent && (
          <TouchableOpacity onPress={() => setHideContent(!hideContent)}>
            <Image
              source={hideContent ? icons.eye : icons.eyeHide}
              className="w-[20px] h-[20px]"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
