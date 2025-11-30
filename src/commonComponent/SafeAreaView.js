import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, StyleSheet, View, Platform } from "react-native";
import { palette } from "../theme/palette";

const SafeAreaWrapper = ({ children, style, ...rest }) => {
  return (
    <SafeAreaView style={[styles.safeareaStyle, style]} {...rest}>
      {/* Fake background for iOS */}
      {Platform.OS === "ios" && <View style={styles.statusBarBg} />}

      {Platform.OS === "android" && <View style={styles.statusBarBgAndroid} />}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeareaStyle: {
    flex: 1,
  },
  statusBarBg: {
    height: 95, // iOS status bar height (use `react-native-status-bar-height` for dynamic)
    backgroundColor: palette.primary,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  statusBarBgAndroid: {
    height: 80, // iOS status bar height (use `react-native-status-bar-height` for dynamic)
    backgroundColor: palette.primary,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
});

export default SafeAreaWrapper;
