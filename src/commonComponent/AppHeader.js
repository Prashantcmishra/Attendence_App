import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { palette } from "../theme/palette";
import BackSvg from "../component/CommonSvg/BackSvg";
import SearchSvg from "../component/CommonSvg/SearchSvg";

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
  secondTitle = false,
  showLocationHeader = false, // New prop for home screen header
  currentLocation = "",
  onLocationPress, // New prop for location dropdown click
}) => {
  // Render right side content
  const renderRightContent = () => {
    if (showSearch && onSearchPress) {
      return (
        <TouchableOpacity
          onPress={onSearchPress}
          style={styles.iconContainersearch}
        >
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

  // Render location header for home screen
  if (showLocationHeader) {
    return (
      <View style={[styles.locationContainer, containerStyle]}>
        <View style={styles.locationContent}>
          <View style={{ flexDirection: "row", gap: 3 }}>
            <Text style={styles.locationLabel}>Current Location</Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </View>
          <View style={styles.locationRow}>
            <Text style={styles.locationText}>{currentLocation}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={onSearchPress}
          style={styles.searchIconContainer}
        >
          <SearchSvg />
        </TouchableOpacity>
      </View>
    );
  }

  // Default header for other screens
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
        {secondTitle && (
          <Text style={[styles.title, titleStyle]} numberOfLines={1}>
            {secondTitle}
          </Text>
        )}
      </View>

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
    borderWidth: 1,
    borderColor: palette.primary,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  locationContainer: {
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 24,
    backgroundColor: palette.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  locationContent: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 20,
    fontWeight: "600",
    color: palette.white,
    marginRight: 8,
  },
  dropdownIcon: {
    fontSize: 12,
    color: palette.white,
    marginTop: 2,
  },
  searchIconContainer: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  titleContainer: {
    flex: 1,
    // alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: palette.white,
    textAlign: "center",
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
    width: 60,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppHeader;
