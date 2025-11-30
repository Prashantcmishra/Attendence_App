import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { palette } from "../../theme/palette";
import { useNavigation } from "@react-navigation/native";
import AppHeader from "../../commonComponent/AppHeader";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={palette.primary} />
      <AppHeader
        title="Profile"
        titleStyle={styles.title}
        onBackPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
});
