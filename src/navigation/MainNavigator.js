import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../navigation/stacks/HomeStack";
import GalleryStack from "../navigation/stacks/GalleryStack";
import VideosStack from "../navigation/stacks/VideosStack";
import ProfileStack from "../navigation/stacks/ProfileStack";
import HomeSvg from "../component/HomePageSvg/HomeSvg";
import GallerySvg from "../component/GalleryPageSvg/GallerySvg";
import VideoSvg from "../component/VideoPageSvg/VideoSvg";
import AlertStack from "../navigation/stacks/AlertStack";
import AlertSvg from "../component/AlertPageSvg/AlertSvg";
import ProfileSvg from "../component/ProfileSvg/ProfileSvg";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Dimensions,
} from "react-native";
import { palette } from "../theme/palette";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MainNavigator() {
  const Tab = createBottomTabNavigator();
  console.log("Main Navigator is rendering");

  const CustomTabBar = ({ state, descriptors, navigation }) => {
    const insets = useSafeAreaInsets();

    return (
      <View
        style={[
          styles.tabBarContainer,
          { paddingBottom: insets.bottom > 0 ? insets.bottom : 10 },
        ]}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // Get icon with focused state
          const iconColor = isFocused ? palette.primary : palette.gray;
          const icon = options.tabBarIcon
            ? options.tabBarIcon({ color: iconColor, focused: isFocused })
            : null;

          // Special rendering for Video tab (center button)
          if (label === "Videos") {
            return (
              <View key={index} style={styles.centerButtonWrapper}>
                <TouchableOpacity
                  onPress={onPress}
                  style={styles.centerButton}
                  activeOpacity={0.8}
                >
                  <VideoSvg color="#FFFFFF" focused={true} size={28} />
                </TouchableOpacity>
                <Text style={styles.centerLabel}>{label}</Text>
              </View>
            );
          }

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tabItem}
              activeOpacity={0.7}
            >
              {icon}
              <Text
                style={[styles.label, isFocused && styles.focusedLabel]}
                numberOfLines={1}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Home Stack"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home Stack"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <HomeSvg color={color} focused={focused} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Gallery Stack"
        component={GalleryStack}
        options={{
          tabBarLabel: "Gallery",
          tabBarIcon: ({ color, focused }) => (
            <GallerySvg color={color} focused={focused} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Videos Stack"
        component={VideosStack}
        options={{
          tabBarLabel: "Videos",
          tabBarIcon: ({ color, focused }) => (
            <VideoSvg color={color} focused={focused} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Alert"
        component={AlertStack}
        options={{
          tabBarLabel: "Alerts",
          tabBarIcon: ({ color, focused }) => (
            <AlertSvg color={color} focused={focused} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <ProfileSvg color={color} focused={focused} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: palette.white,
    // borderTopLeftRadius: 24,
    // borderTopRightRadius: 24,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingTop: 8,
    shadowColor: "#000",
    borderColor: palette.white,
    borderRadius: 40,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 20,
    marginBottom: 25,
    width: "95%",
    left: 13,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  centerButtonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -30,
  },
  centerButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#8BC34A",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  centerLabel: {
    fontSize: 11,
    fontWeight: "500",
    color: palette.black,
    marginTop: 10,
  },
  label: {
    fontSize: 11,
    fontWeight: "500",
    color: palette.black,
    marginTop: 4,
  },
  focusedLabel: {
    color: palette.primary,
    fontWeight: "600",
  },
});
