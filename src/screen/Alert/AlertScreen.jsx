import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { palette } from "../../theme/palette";
import AppHeader from "../../commonComponent/AppHeader";
import { useNavigation } from "@react-navigation/native";

const AlertScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={palette.primary} />
      <AppHeader
        title="Alerts"
        titleStyle={styles.title}
        onBackPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default AlertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  title: {},
});
