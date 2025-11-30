import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import ArrowRightSvg from "../../component/HomePageSvg/ArrowRightSvg";
import EyeIconSvg from "../../component/CommonSvg/EyeIconSvg";
import { palette } from "../../theme/palette";
import ArrowIcon from "../../component/CommonSvg/ArrowIcon";

const { width } = Dimensions.get("window");

const CheckWhatsLive = ({
  showHeader = true,
  horizontal = true,
  data = null,
  onSeeAllPress = null,
}) => {
  const [playingVideo, setPlayingVideo] = useState(null);

  // Default data if none provided
  const defaultData = [
    {
      id: 1,
      title: "Live Now | Durga Puja 2025 | Kolkata's Mega Festivals | SMPK",
      isLive: true,
      viewCount: "24.5K",
      thumbnailImage:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
      videoId: "dQw4w9WgXcQ",
      channelLogo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      channelName: "SMPK",
    },
    {
      id: 2,
      title: "Christmas Concert Live | Park Street Performance 2024",
      isLive: true,
      viewCount: "18.2K",
      thumbnailImage:
        "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80",
      videoId: "jNQXAC9IVRw",
      channelLogo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      channelName: "Events Kolkata",
    },
    {
      id: 3,
      title: "Live Music Concert at Victoria Memorial",
      isLive: true,
      viewCount: "32.1K",
      thumbnailImage:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      videoId: "9bZkp7q19f0",
      channelLogo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      channelName: "Live Events",
    },
    {
      id: 4,
      title: "Live Music Concert at Victoria Memorial",
      isLive: true,
      viewCount: "32.1K",
      thumbnailImage:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      videoId: "9bZkp7q19f0",
      channelLogo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      channelName: "Live Events",
    },
    {
      id: 5,
      title: "Live Music Concert at Victoria Memorial",
      isLive: true,
      viewCount: "32.1K",
      thumbnailImage:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      videoId: "9bZkp7q19f0",
      channelLogo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      channelName: "Live Events",
    },
  ];

  const videoData = data || defaultData;

  const handlePlayPress = (id) => {
    setPlayingVideo(id);
  };

  const renderItem = ({ item, index }) => {
    const isPlaying = playingVideo === item.id;

    return (
      <View
        style={[
          styles.card,
          index === 0 && horizontal && styles.firstCard,
          !horizontal && styles.verticalCard,
        ]}
      >
        {!isPlaying ? (
          <ImageBackground
            source={require("../../assets/Images/Videothumbnail.jpg")}
            style={styles.backgroundImage}
            imageStyle={styles.imageStyle}
            resizeMode="cover"
          >
            {/* Overlay */}
            <View style={styles.overlay} />

            {/* Live Badge and View Count */}
            <View style={styles.topBadgeContainer}>
              <View style={styles.liveBadge}>
                <View style={styles.liveIcon} />
                <Text style={styles.liveText}>LIVE</Text>
              </View>
              <View style={styles.viewCountBadge}>
                <Text style={styles.viewCountIcon}>
                  <EyeIconSvg />
                </Text>
                <Text style={styles.viewCountText}>{item.viewCount}</Text>
              </View>
            </View>

            {/* Play Button */}
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => handlePlayPress(item.id)}
              activeOpacity={0.7}
            >
              <View style={styles.playIconContainer}>
                <View style={styles.playIcon} />
              </View>
            </TouchableOpacity>

            {/* Bottom Info Card */}
            <View style={styles.bottomInfoCard}>
              <View style={styles.infoContent}>
                <Image
                  source={require("../../assets/Images/SMPLogo.png")}
                  style={styles.channelLogo}
                />
                <View style={styles.liveIndicatorContainer}>
                  <Text style={styles.liveIndicatorText}>Live</Text>
                </View>
                <View style={styles.titleWrapper}>
                  <Text style={styles.infoTitle} numberOfLines={2}>
                    {item.title}
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.arrowButton}>
                <ArrowIcon color={palette.red} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={styles.videoWrapper}>
            <YoutubePlayer
              height={400}
              width={horizontal ? width - 48 : width - 48}
              videoId={item.videoId}
              play={true}
              webViewProps={{
                androidLayerType: "hardware",
              }}
              onChangeState={(state) => {
                if (state === "ended") {
                  setPlayingVideo(null);
                }
              }}
              onError={() => {
                setPlayingVideo(null);
              }}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      {showHeader && (
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Check what's <Text style={styles.headerBold}>Live</Text>
          </Text>
          <TouchableOpacity style={styles.seeButton} onPress={onSeeAllPress}>
            <Text style={styles.seealltext}>See All</Text>
            <ArrowRightSvg />
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={videoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={!horizontal}
        snapToInterval={horizontal ? width - 48 : null}
        decelerationRate={horizontal ? "fast" : "normal"}
        contentContainerStyle={[
          horizontal ? styles.listContainer : styles.verticalListContainer,
        ]}
      />
    </View>
  );
};

export default CheckWhatsLive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "400",
    color: "#000",
  },
  seealltext: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0167B8",
  },
  seeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  headerBold: {
    fontWeight: "700",
  },
  listContainer: {
    paddingHorizontal: 24,
  },
  verticalListContainer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  card: {
    width: width - 48,
    height: 188,
    marginRight: 16,
    borderRadius: 24,
    overflow: "visible",
    marginBottom: 60,
  },
  verticalCard: {
    marginRight: 0,
    marginBottom: 70,
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
    backgroundColor: "rgba(0, 20, 40, 0.3)",
    borderRadius: 24,
  },
  topBadgeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: palette.red,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: palette.red,
    gap: 6,
  },
  liveIcon: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  liveText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  viewCountBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF1A",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  viewCountIcon: {
    fontSize: 14,
  },
  viewCountText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  playButton: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: [{ translateX: -40 }, { translateY: -40 }],
  },
  playIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFFFFF1A",
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
  bottomInfoCard: {
    position: "absolute",
    bottom: -50,
    left: 16,
    right: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  infoContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  channelLogo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E0E0E0",
    borderWidth: 1,
    borderColor: "#FF0000",
  },
  liveIndicatorContainer: {
    position: "absolute",
    left: 8,
    bottom: -13,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF0000",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    gap: 4,
  },
  liveIndicatorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#fff",
  },
  liveIndicatorText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },
  titleWrapper: {
    flex: 1,
    marginLeft: 8,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    lineHeight: 20,
  },
  arrowButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
