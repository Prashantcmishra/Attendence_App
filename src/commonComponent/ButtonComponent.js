import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { palette } from "../theme/palette";

const ButtonComponent = ({ onPress, title, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.primary,
    padding: 2,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: palette.white,
    fontWeight: "bold",
  },
});

export default ButtonComponent;
