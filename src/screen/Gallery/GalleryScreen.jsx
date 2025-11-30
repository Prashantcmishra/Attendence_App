import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { palette } from "../../theme/palette";
import AppHeader from "../../commonComponent/AppHeader";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const numColumns = 2;
const imageSize = (width - 48 - 16) / numColumns; // padding and gap

const GalleryScreen = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);

  // Dummy gallery data - Replace with API data
  const galleryData = [
    {
      id: 1,
      uri: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&q=80",
      type: "image",
    },
    {
      id: 2,
      uri: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      type: "image",
    },
    {
      id: 3,
      uri: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
      type: "image",
    },
    {
      id: 4,
      uri: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
      type: "image",
    },
    {
      id: 5,
      uri: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
      type: "image",
    },
    {
      id: 6,
      uri: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      type: "image",
    },
    {
      id: 7,
      uri: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
      type: "image",
    },
    {
      id: 8,
      uri: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80",
      type: "image",
    },
    {
      id: 9,
      uri: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
      type: "image",
    },
    {
      id: 10,
      uri: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=800&q=80",
      type: "image",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.imageContainer}
        activeOpacity={0.8}
        onPress={() => {
          console.log("Image pressed:", item.id);
          // Handle image press - open full screen view
        }}
      >
        <Image
          source={require("../../assets/Images/GalleryImage.jpeg")}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={palette.primary} />
      <AppHeader
        title="Gallery"
        titleStyle={styles.title}
        onBackPress={() => navigation.goBack()}
      />

      <FlatList
        data={galleryData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
      />
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
    // textAlign: "center",
    // left: 40,
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 100, // Space for bottom navigation
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  imageContainer: {
    width: imageSize,
    height: imageSize,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#F0F0F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
