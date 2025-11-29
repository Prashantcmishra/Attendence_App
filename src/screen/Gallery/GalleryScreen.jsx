import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { palette } from "../../theme/palette";
import AppHeader from "../../commonComponent/AppHeader";
const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={palette.primary} />
      <AppHeader
        title="Gallery"
        titleStyle={styles.title}
        showSearch={true}
        rightIcon={true}
      />
      <Text>GallertScreen</Text>
    </View>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  title: {
    color: palette.white,
  },
});
