import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { palette } from "../theme/palette";
import BackSvg from "../component/CommonSvg/BackSvg";
import SearchSvg from "../component/CommonSvg/SearchSvg";
// import TitleIcon from "../component/SvgComponent/HomePageIcons/TitleIcon";

const AppHeader = ({
  title,
  showBack = true,
  onBackPress,
  showSearch = false,
  onSearchPress,
  rightIcon,
  onRightPress,
  containerStyle,
  titleStyle,
  showLogo = false,
  isIos = false,
}) => {
  // Render right side content
  const renderRightContent = () => {
    if (showSearch && onSearchPress) {
      return (
        <TouchableOpacity
          onPress={onSearchPress}
          style={styles.iconContainersearch}
        >
          {/* Replace with your SearchIcon component */}
          <SearchSvg />
        </TouchableOpacity>
      );
    }

    if (rightIcon) {
      return (
        <TouchableOpacity
          onPress={onRightPress}
          style={styles.iconContainersearch}
        >
          {rightIcon}
        </TouchableOpacity>
      );
    }

    return <View style={styles.iconContainer} />;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Left: Back Icon or Placeholder */}
      {showBack ? (
        <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
          <BackSvg />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconContainer} />
      )}

      <View style={styles.titleContainer}>
        <Text style={[styles.title, titleStyle]} numberOfLines={1}>
          {title}
        </Text>
      </View>
      {/* )} */}

      {/* Right: Search Icon / Custom Icon / Placeholder */}
      {renderRightContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: palette.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  titleContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginHorizontal: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: palette.white,
    textAlign: "left",
  },
  iconContainersearch: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: palette.white,
    borderRadius: 35,
    backgroundColor: palette.lightblue,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: palette.white,
  },
  searchIcon: {
    fontSize: 20,
  },
});

export default AppHeader;
