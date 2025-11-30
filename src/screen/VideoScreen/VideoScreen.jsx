import React, { useRef, useCallback, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { palette } from "../../theme/palette";
import AppHeader from "../../commonComponent/AppHeader";
import { useNavigation } from "@react-navigation/native";
import FilterSvg from "../../component/CommonSvg/FilterSvg";
import SimpleBottomSheet from "../../commonComponent/CustomBottomSheet";
import ButtonComponent from "../../commonComponent/ButtonComponent";
import CrossSvg from "../../component/CommonSvg/CrossSvg";
import CalendarSvg from "../../component/CommonSvg/CalendarSvg";
import FeaturedEvents from "../Home/FeaturedEvents";
import CheckWhatsLive from "../Home/CheckWhatsLive";
import UpcomingEvents from "../Home/UpcomingEvents";

const VideoScreen = () => {
  const bottomSheetRef = useRef(null);
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Past Events");

  // State for date filters
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [selectedQuickFilter, setSelectedQuickFilter] = useState("Today");

  // State for date picker modals
  const [isFromDatePickerVisible, setFromDatePickerVisible] = useState(false);
  const [isToDatePickerVisible, setToDatePickerVisible] = useState(false);

  // Format date to display
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleOpenFilter = useCallback(() => {
    console.log("Opening bottom sheet");
    bottomSheetRef.current?.present();
  }, []);

  const handleCancel = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  const handleClear = useCallback(() => {
    const today = new Date();
    setFromDate(today);
    setToDate(today);
    setSelectedQuickFilter("Today");
  }, []);

  const handleApply = useCallback(() => {
    // Apply your filter logic here
    console.log("Applying filters:", {
      fromDate: formatDate(fromDate),
      toDate: formatDate(toDate),
      selectedQuickFilter,
    });
    bottomSheetRef.current?.dismiss();
  }, [fromDate, toDate, selectedQuickFilter]);

  // Date Picker Handlers
  const showFromDatePicker = () => {
    setFromDatePickerVisible(true);
  };

  const hideFromDatePicker = () => {
    setFromDatePickerVisible(false);
  };

  const handleConfirmFromDate = (date) => {
    setFromDate(date);
    setSelectedQuickFilter(null); // Clear quick filter when manually selecting
    hideFromDatePicker();
  };

  const showToDatePicker = () => {
    setToDatePickerVisible(true);
  };

  const hideToDatePicker = () => {
    setToDatePickerVisible(false);
  };

  const handleConfirmToDate = (date) => {
    setToDate(date);
    setSelectedQuickFilter(null); // Clear quick filter when manually selecting
    hideToDatePicker();
  };

  const handleQuickFilter = useCallback((filter) => {
    setSelectedQuickFilter(filter);
    // Update dates based on quick filter
    const today = new Date();

    switch (filter) {
      case "Today":
        setFromDate(new Date(today));
        setToDate(new Date(today));
        break;
      case "This Week":
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());
        setFromDate(weekStart);
        setToDate(new Date());
        break;
      case "This Month":
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        setFromDate(monthStart);
        setToDate(new Date());
        break;
    }
  }, []);

  const renderContent = () => {
    switch (selectedTab) {
      case "Live Events":
        return (
          <ScrollView
            style={styles.videoList}
            showsVerticalScrollIndicator={false}
          >
            <CheckWhatsLive
              showHeader={false}
              horizontal={false}
              // data={pastEventsData} // Your past events data
            />
          </ScrollView>
        );
      case "Upcoming Events":
        return (
          <ScrollView
            style={styles.videoList}
            showsVerticalScrollIndicator={false}
          >
            <UpcomingEvents
              showHeader={false}
              horizontal={false}
              // data={pastEventsData} // Your past events data
            />
          </ScrollView>
        );
      case "Past Events":
        return (
          <ScrollView
            style={styles.videoList}
            showsVerticalScrollIndicator={false}
          >
            <CheckWhatsLive
              showHeader={false}
              horizontal={false}
              // data={pastEventsData} // Your past events data
            />
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={palette.primary} />
      <AppHeader
        title="Videos"
        titleStyle={styles.title}
        onBackPress={() => navigation.goBack()}
        rightIcon={<FilterSvg />}
        onRightPress={handleOpenFilter}
      />

      <View style={styles.tabsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContent}
        >
          {["Live Events", "Upcoming Events", "Past Events"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, selectedTab === tab && styles.tabActive]}
              onPress={() => setSelectedTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === tab && styles.tabTextActive,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Content */}
      {renderContent()}
      <View style={styles.content}>
        <Text style={styles.contentText}>Video Content Here</Text>
      </View>

      <SimpleBottomSheet ref={bottomSheetRef} snapPoints={["40%"]}>
        <View style={styles.bottomSheetContent}>
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity onPress={handleCancel}>
              <CrossSvg fillColor={palette.primary} />
            </TouchableOpacity>
          </View>
          {/* Header with Close Button */}
          <View style={styles.headerRow}>
            <Text style={styles.headText}>Created On</Text>
          </View>

          {/* Date Range Section */}
          <View style={styles.dateSection}>
            {/* From Date */}
            <View style={styles.dateInputWrapper}>
              <Text style={styles.dateLabel}>From</Text>
              <TouchableOpacity
                style={styles.dateInput}
                onPress={showFromDatePicker}
              >
                <View style={styles.calendarIcon}>
                  <Text style={styles.calendarEmoji}>
                    <CalendarSvg />
                  </Text>
                </View>
                <Text style={styles.dateText}>{formatDate(fromDate)}</Text>
              </TouchableOpacity>
            </View>

            {/* To Date */}
            <View style={styles.dateInputWrapper}>
              <Text style={styles.dateLabel}>To</Text>
              <TouchableOpacity
                style={styles.dateInput}
                onPress={showToDatePicker}
              >
                <View style={styles.calendarIcon}>
                  <Text style={styles.calendarEmoji}>
                    <CalendarSvg />
                  </Text>
                </View>
                <Text style={styles.dateText}>{formatDate(toDate)}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Date Picker Modals */}
          <DateTimePickerModal
            isVisible={isFromDatePickerVisible}
            mode="date"
            date={fromDate}
            onConfirm={handleConfirmFromDate}
            onCancel={hideFromDatePicker}
            maximumDate={toDate}
          />

          <DateTimePickerModal
            isVisible={isToDatePickerVisible}
            mode="date"
            date={toDate}
            onConfirm={handleConfirmToDate}
            onCancel={hideToDatePicker}
            minimumDate={fromDate}
            maximumDate={new Date()}
          />

          {/* Quick Filter Buttons */}
          <View style={styles.quickFilters}>
            <TouchableOpacity
              style={[
                styles.quickFilterBtn,
                selectedQuickFilter === "Today" && styles.quickFilterBtnActive,
              ]}
              onPress={() => handleQuickFilter("Today")}
            >
              <Text
                style={[
                  styles.quickFilterText,
                  selectedQuickFilter === "Today" &&
                    styles.quickFilterTextActive,
                ]}
              >
                Today
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.quickFilterBtn,
                selectedQuickFilter === "This Week" &&
                  styles.quickFilterBtnActive,
              ]}
              onPress={() => handleQuickFilter("This Week")}
            >
              <Text
                style={[
                  styles.quickFilterText,
                  selectedQuickFilter === "This Week" &&
                    styles.quickFilterTextActive,
                ]}
              >
                This Week
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.quickFilterBtn,
                selectedQuickFilter === "This Month" &&
                  styles.quickFilterBtnActive,
              ]}
              onPress={() => handleQuickFilter("This Month")}
            >
              <Text
                style={[
                  styles.quickFilterText,
                  selectedQuickFilter === "This Month" &&
                    styles.quickFilterTextActive,
                ]}
              >
                This Month
              </Text>
            </TouchableOpacity>
          </View>

          {/* Action Buttons */}
          <View style={styles.modalButtons}>
            <ButtonComponent
              title="Clear"
              style={styles.clearBtn}
              textStyle={styles.clearText}
              onPress={handleClear}
            />
            <ButtonComponent
              title="Apply"
              style={styles.applyButton}
              textStyle={styles.applyText}
              onPress={handleApply}
            />
          </View>
        </View>
      </SimpleBottomSheet>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  title: {
    color: palette.white,
    textAlign: "center",
    fontWeight: 600,
  },
  tabsContainer: {
    backgroundColor: palette.white,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  tabsContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
  },
  tabActive: {
    backgroundColor: palette.activetab,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  tabTextActive: {
    color: palette.primary,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 18,
    color: "#666",
  },
  bottomSheetContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  dateSection: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  dateInputWrapper: {
    flex: 1,
  },
  dateLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginBottom: 8,
  },
  dateInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    padding: 14,
    gap: 10,
  },
  calendarIcon: {
    width: 24,
    height: 24,
    // backgroundColor: palette.primary,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarEmoji: {
    fontSize: 14,
  },
  dateText: {
    fontSize: 15,
    color: "#000",
    fontWeight: "500",
  },
  quickFilters: {
    flexDirection: "row",
    gap: 25,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  quickFilterBtn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  quickFilterBtnActive: {
    backgroundColor: "#E3F2FD",
    borderColor: palette.primary,
  },
  quickFilterText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  quickFilterTextActive: {
    color: palette.primary,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },
  clearBtn: {
    flex: 1,
    padding: 16,
    backgroundColor: palette.white,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: palette.primary,
  },
  clearText: {
    color: palette.black,
    fontWeight: "600",
    fontSize: 16,
  },
  applyButton: {
    flex: 1,
    padding: 16,
    borderRadius: 100,
    backgroundColor: palette.primary,
  },
  applyText: {
    color: palette.white,
    fontWeight: "600",
    fontSize: 16,
  },
  videoList: {
    marginBottom: 100,
    marginTop: 10,
  },
});
