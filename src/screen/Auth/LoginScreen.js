import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { palette } from "../../theme/palette";

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleGetOTP = () => {
    console.log("Get OTP pressed with mobile:", mobileNumber);
    // Add your OTP logic here
    // navigation.navigate('OTPScreen', { mobile: mobileNumber });
  };

  const handleRegister = () => {
    console.log("Register pressed");
    // Add your registration navigation here
    // navigation.navigate('RegisterScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#e3f0ff" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header Image */}
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/Images/LoginPageImage.png")} // Replace with your image path
              style={styles.headerImage}
              resizeMode="stretch"
            />
          </View>

          {/* Login Form */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Login to your account</Text>

            {/* Mobile Number Input */}
            <Text style={styles.label}>Mobile Number*</Text>
            <View style={styles.inputContainer}>
              <View style={styles.countryCode}>
                <Text style={styles.countryCodeText}>+91</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter Mobile Number"
                placeholderTextColor="#B0B0B0"
                keyboardType="phone-pad"
                maxLength={10}
                value={mobileNumber}
                onChangeText={setMobileNumber}
              />
            </View>

            {/* OR Divider */}
            <View style={styles.dividerContainer}>
              {/* <View style={styles.dividerLine} /> */}
              <Text style={styles.dividerText}>OR</Text>
              {/* <View style={styles.dividerLine} /> */}
            </View>

            {/* Fingerprint/Biometric Button */}
            <TouchableOpacity style={styles.biometricButton}>
              <View style={styles.biometricCircle}>
                <Text style={styles.biometricIcon}>Login with face ID</Text>
              </View>
            </TouchableOpacity>

            {/* Register Link */}
            <View style={styles.registerContainer}>
              <Text style={styles.newUserText}>New to SMPK?</Text>
              <TouchableOpacity
                onPress={handleRegister}
                style={styles.registerButton}
              >
                <Text style={styles.registerText}>Register Now</Text>
              </TouchableOpacity>
            </View>

            {/* Get OTP Button */}
            <TouchableOpacity
              style={[
                styles.otpButton,
                !mobileNumber && styles.otpButtonDisabled,
              ]}
              onPress={handleGetOTP}
              disabled={!mobileNumber}
            >
              <Text style={styles.otpButtonText}>Get OTP</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  imageContainer: {
    width: "100%",
    height: 322,
    backgroundColor: "#E8F4FF",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1A1A1A",
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 4,
    height: 56,
    marginBottom: 32,
  },
  countryCode: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRightWidth: 1,
    borderRightColor: "#E0E0E0",
  },
  countryCodeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1A1A1A",
    paddingHorizontal: 16,
    height: "100%",
  },
  dividerContainer: {
    // flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    // font
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "##120D26",
    marginHorizontal: 16,
    lineHeight: 34,
  },
  biometricButton: {
    alignItems: "center",
    marginBottom: 40,
  },
  biometricCircle: {
    // width: 64,
    // height: 64,
    // borderRadius: 32,
    // backgroundColor: "#4A148C",
    justifyContent: "center",
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.3,
    // shadowRadius: 8,
    // elevation: 8,
  },
  biometricIcon: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 24,
    textDecorationLine: "underline",
  },
  registerContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  newUserText: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 8,
  },
  registerButton: {
    paddingVertical: 16,
    backgroundColor: "#2196F3",
    paddingHorizontal: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#2196F3",
    backgroundColor: "#FFFFFF",
    minWidth: 200,
    alignItems: "center",
  },
  registerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2196F3",
  },
  otpButton: {
    backgroundColor: palette.primary,
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: palette.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  otpButtonDisabled: {
    backgroundColor: "#B0BEC5",
    shadowOpacity: 0.1,
  },
  otpButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export default LoginScreen;
