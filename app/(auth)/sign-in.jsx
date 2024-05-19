import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuraButton from "../../components/AuraButton";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {
    setIsSubmitting(true);
  };

  return (
    <SafeAreaView className="bg-primary h-full justify-center">
      <ScrollView>
        <View className="w-full justify-center h-[90vh] px-4 my-6 ">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-white text-2xl mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            placeholder={"Enter your email"}
            textContentType={"email"}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder={"Enter your password"}
            textContentType={"password"}
            keyboardType="password"
            secureContent
          />

          <Text className="mt-2 text-secondary text-right mr-4 text-sm">
            Forgot Password
          </Text>
          <AuraButton
            title={"Log In"}
            containerStyle={"w-full mt-7"}
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <Text className="mt-2 text-white text-center text-sm">
            Dont't have and account?{" "}
            <Link href={"/sign-up"} className="text-secondary">
              SignUp
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
