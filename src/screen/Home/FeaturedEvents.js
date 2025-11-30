import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

const { width } = Dimensions.get("window");

const FeaturedEvents = ({ showHeader = true }) => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const data = [
    {
      id: 1,
      title: "Biggest Christmas Party At Park Street, Kolkata",
      subTitle: "Starting in: 10hr 42min",
      thumbnailImage:
        "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "New Year Eve Celebration 2024",
      subTitle: "Starting in: 5hr 30min",
      thumbnailImage:
        "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80",
      videoId: "jNQXAC9IVRw",
    },
    {
      id: 3,
      title: "Live Music Concert at Victoria",
      subTitle: "Starting in: 2hr 15min",
      thumbnailImage:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      videoId: "9bZkp7q19f0",
    },
    {
      id: 4,
      title: "Diwali Festival Celebration 2024",
      subTitle: "Starting in: 1hr 20min",
      thumbnailImage:
        "https://images.unsplash.com/photo-1605207046168-f3f48ec56f54?w=800&q=80",
      videoId: "kJQP7kiw5Fk",
    },
    {
      id: 5,
      title: "Rock Band Live Performance",
      subTitle: "Starting in: 3hr 45min",
      thumbnailImage:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
      videoId: "eVTXPUF4Oz4",
    },
  ];

  const handlePlayPress = (id) => {
    setPlayingVideo(id);
  };

  const renderItem = ({ item, index }) => {
    const isPlaying = playingVideo === item.id;

    return (
      <View style={[styles.card, index === 0 && styles.firstCard]}>
        <ImageBackground
          source={require("../../assets/Images/Videothumbnailone.jpg")}
          style={styles.backgroundImage}
          imageStyle={styles.imageStyle}
        >
          {/* Overlay */}
          <View style={styles.overlay} />

          {/* Timer Badge */}
          <View style={styles.timerBadge}>
            <Text style={styles.timerText}>{item.subTitle}</Text>
          </View>

          {/* Play Button or Video */}
          {!isPlaying ? (
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => handlePlayPress(item.id)}
            >
              <View style={styles.playIconContainer}>
                <View style={styles.playIcon} />
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={480}
                videoId={item.videoId}
                play={true}
                onChangeState={(state) => {
                  if (state === "ended") {
                    setPlayingVideo(null);
                  }
                }}
              />
            </View>
          )}

          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>

          {/* Pagination Dots */}
          <View style={styles.pagination}>
            {data.map((_, idx) => (
              <View
                key={idx}
                style={[styles.dot, idx === index && styles.activeDot]}
              />
            ))}
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      {showHeader && (
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Featured <Text style={styles.headerBold}>Events</Text>
          </Text>
        </View>
      )}

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 48}
        decelerationRate="fast"
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default FeaturedEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "400",
    color: "#000",
  },
  headerBold: {
    fontWeight: "700",
  },
  listContainer: {
    paddingHorizontal: 24,
  },
  card: {
    width: width - 48,
    height: 375,
    marginRight: 16,
    borderRadius: 24,
    overflow: "hidden",
  },
  firstCard: {
    marginLeft: 0,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  imageStyle: {
    borderRadius: 24,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 20, 40, 0.4)",
    borderRadius: 24,
  },
  timerBadge: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(30, 60, 90, 0.9)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  timerText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -40 }, { translateY: -40 }],
  },
  playIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(100, 150, 180, 0.85)",
    justifyContent: "center",
    alignItems: "center",
  },
  playIcon: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderTopWidth: 12,
    borderBottomWidth: 12,
    borderLeftColor: "#fff",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    marginLeft: 6,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 24,
  },
  videoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 24,
    overflow: "hidden",
  },
  videoWrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    borderRadius: 24,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: "rgba(62, 76, 89, 0.75)",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 16,
    backdropFilter: "blur(10px)",
  },
  titleText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 26,
  },
  pagination: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    marginHorizontal: 4,
  },
  activeDot: {
    width: 32,
    backgroundColor: "#fff",
  },
});
