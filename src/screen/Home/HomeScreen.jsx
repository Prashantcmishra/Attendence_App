import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppHeader from "../../commonComponent/AppHeader";
import { palette } from "../../theme/palette";

const HomeScreen = () => {
  console.log("HomeScreen is rendering");
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={palette.primary} />
      <AppHeader
        title="Home Page"
        titleStyle={styles.title}
        showSearch={true}
        showBack={false}
        onSearchPress={true}
      />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.gray,
  },
  title: {
    color: palette.white,
    // textAlign: "left",
  },
});
