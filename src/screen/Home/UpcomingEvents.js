import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React, { useState, useRef, useCallback } from "react";
import ArrowRightSvg from "../../component/HomePageSvg/ArrowRightSvg";
import LocationIcon from "../../component/CommonSvg/LocationIcon";
import BookmarkIcon from "../../component/CommonSvg/BookmarkIcon";
import { palette } from "../../theme/palette";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.7;
const CARD_MARGIN = 16;

const UpcomingEvents = ({ showHeader = true, horizontal = true }) => {
  // Add state to track active index
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      id: 1,
      title: "International Band Music Concert",
      date: "10",
      month: "JUNE",
      thumbnailImage:
        "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&q=80",
      location: "Sonagachi, Kolkata",
      attendees: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      ],
      goingCount: 20,
    },
    {
      id: 2,
      title: "Jo Malone Live Performance",
      date: "10",
      month: "JUNE",
      thumbnailImage:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
      location: "Sonagachi, Kolkata",
      attendees: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80",
      ],
      goingCount: 20,
    },
    {
      id: 3,
      title: "Rock Festival 2025",
      date: "15",
      month: "JUNE",
      thumbnailImage:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
      location: "Park Street, Kolkata",
      attendees: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80",
      ],
      goingCount: 35,
    },
  ];

  // Handle scroll to update active index
  const handleScroll = useCallback((event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / (CARD_WIDTH + CARD_MARGIN));
    setActiveIndex(index);
  }, []);

  const renderAttendees = (attendees, goingCount) => {
    return (
      <View style={styles.attendeesContainer}>
        {attendees.slice(0, 3).map((avatar, index) => (
          <Image
            key={index}
            source={require("../../assets/Images/PersonImage.png")}
            style={[styles.avatar, index > 0 && { marginLeft: -12 }]}
          />
        ))}
        <Text style={styles.goingText}>+{goingCount} Going</Text>
      </View>
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={[styles.card, index === 0 && styles.firstCard]}
        activeOpacity={0.9}
      >
        <ImageBackground
          source={require("../../assets/Images/Videothumbnail.jpg")}
          style={styles.backgroundImage}
          imageStyle={styles.imageStyle}
          resizeMode="cover"
        >
          {/* Overlay */}
          <View style={styles.overlay} />

          {/* Date Badge */}
          <View style={styles.dateBadge}>
            <Text style={styles.dateNumber}>{item.date}</Text>
            <Text style={styles.dateMonth}>{item.month}</Text>
          </View>

          {/* Bookmark Icon */}
          <TouchableOpacity style={styles.bookmarkButton}>
            <View style={styles.bookmarkIcon}>
              <Text style={styles.bookmarkIconText}>
                <BookmarkIcon />
              </Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>

        {/* Bottom Info Section */}
        <View style={styles.infoSection}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>

          {/* Attendees Row */}
          {renderAttendees(item.attendees, item.goingCount)}

          {/* Location Row */}
          <View style={styles.locationRow}>
            <Text style={styles.locationIcon}>
              <LocationIcon />
            </Text>
            <Text style={styles.locationText} numberOfLines={1}>
              {item.location}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      {showHeader && (
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Upcoming <Text style={styles.headerBold}>Events</Text>
          </Text>
          <TouchableOpacity style={styles.seeButton}>
            <Text style={styles.seealltext}>See All</Text>
            <ArrowRightSvg />
          </TouchableOpacity>
        </View>
      )}

      {/* Horizontal List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + CARD_MARGIN}
        decelerationRate="fast"
        contentContainerStyle={styles.listContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      {/* Pagination Dots - Now updates based on activeIndex */}
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activeIndex && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default UpcomingEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    marginBottom: 30,
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
    paddingBottom: 16,
  },
  card: {
    width: CARD_WIDTH,
    marginRight: CARD_MARGIN,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: "hidden",
  },
  firstCard: {
    marginLeft: 0,
  },
  backgroundImage: {
    width: "100%",
    height: 200,
    justifyContent: "space-between",
  },
  imageStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dateBadge: {
    position: "absolute",
    width: 60,
    height: 60,
    top: 16,
    left: 16,
    backgroundColor: "#FFFFFF1A",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
  },
  dateNumber: {
    fontSize: 14,
    fontWeight: "600",
    color: palette.white,
    lineHeight: 15,
  },
  dateMonth: {
    fontSize: 14,
    fontWeight: "400",
    color: palette.white,
  },
  bookmarkButton: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 44,
    height: 44,
    backgroundColor: "#FFFFFF1A",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  bookmarkIconText: {
    fontSize: 20,
  },
  infoSection: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },
  attendeesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#E0E0E0",
  },
  goingText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0167B8",
    marginLeft: 12,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  locationText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#666",
    flex: 1,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D0D0D0",
    marginHorizontal: 4,
  },
  activeDot: {
    width: 24,
    backgroundColor: "#0167B8",
  },
});
