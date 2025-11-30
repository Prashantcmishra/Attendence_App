import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import AppHeader from "../../commonComponent/AppHeader";
import { palette } from "../../theme/palette";
import FeaturedEvents from "./FeaturedEvents";
import SafeAreaWrapper from "../../commonComponent/SafeAreaView";
import CheckWhatsLive from "./CheckWhatsLive";
import UpcomingEvents from "./UpcomingEvents";

const HomeScreen = () => {
  const [currentLocation, setCurrentLocation] = useState("Sonagachi, Kolkata");
  const [showLocationModal, setShowLocationModal] = useState(false);

  // Dummy locations - Replace with API data in future
  const [locations, setLocations] = useState([
    { id: 1, name: "Sonagachi, Kolkata" },
    { id: 2, name: "Park Street, Kolkata" },
    { id: 3, name: "Salt Lake, Kolkata" },
    { id: 4, name: "Howrah, Kolkata" },
    { id: 5, name: "Ballygunge, Kolkata" },
  ]);

  const handleLocationPress = () => {
    setShowLocationModal(true);
  };

  const handleSelectLocation = (location) => {
    setCurrentLocation(location.name);
    setShowLocationModal(false);
  };

  const renderLocationItem = ({ item }) => (
    <TouchableOpacity
      style={styles.locationItem}
      onPress={() => handleSelectLocation(item)}
    >
      <Text style={styles.locationItemText}>{item.name}</Text>
      {item.name === currentLocation && (
        <View style={styles.selectedIndicator} />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={palette.primary} />

      {/* Sticky Header */}
      <View style={styles.stickyHeaderContainer}>
        <AppHeader
          showLocationHeader={true}
          currentLocation={currentLocation}
          showSearch={true}
          showBack={false}
          onLocationPress={handleLocationPress}
          onSearchPress={() => {
            console.log("Search pressed");
            // Handle search navigation
          }}
        />
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <FeaturedEvents />
        <CheckWhatsLive />
        <UpcomingEvents />
      </ScrollView>

      {/* Location Selection Modal */}
      <Modal
        visible={showLocationModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowLocationModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Location</Text>
              <TouchableOpacity
                onPress={() => setShowLocationModal(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={locations}
              renderItem={renderLocationItem}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.locationList}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  stickyHeaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 10,
  },
  scrollView: {
    flex: 1,
    marginBottom: 100,
    marginTop: 120,
    backgroundColor: palette.white, // Adjust this based on your header height
  },
  title: {
    color: palette.white,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: palette.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 20,
    maxHeight: "70%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: palette.primary,
  },
  closeButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "#F0F0F0",
  },
  closeButtonText: {
    fontSize: 20,
    color: "#666",
  },
  locationList: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  locationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: "#F8F8F8",
  },
  locationItemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  selectedIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: palette.primary,
  },
});
