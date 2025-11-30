import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
} from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  PanResponder,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const SimpleBottomSheet = forwardRef(
  (
    {
      children,
      snapPoints = ["50%"],
      sheetColor = "white",
      onDismiss,
      disableClose = false,
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);
    const translateY = React.useRef(new Animated.Value(SCREEN_HEIGHT)).current;

    // Calculate height from snapPoints
    const getSheetHeight = () => {
      const point = snapPoints[0];
      if (typeof point === "string" && point.includes("%")) {
        return (parseFloat(point) / 100) * SCREEN_HEIGHT;
      }
      return point;
    };

    const sheetHeight = getSheetHeight();

    // Expose methods to parent
    useImperativeHandle(ref, () => ({
      present: () => {
        setVisible(true);
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          damping: 20,
          stiffness: 150,
        }).start();
      },
      dismiss: () => {
        Animated.timing(translateY, {
          toValue: SCREEN_HEIGHT,
          duration: 250,
          useNativeDriver: true,
        }).start(() => {
          setVisible(false);
          onDismiss?.();
        });
      },
      close: () => {
        Animated.timing(translateY, {
          toValue: SCREEN_HEIGHT,
          duration: 250,
          useNativeDriver: true,
        }).start(() => {
          setVisible(false);
          onDismiss?.();
        });
      },
    }));

    const handleClose = useCallback(() => {
      if (!disableClose) {
        ref.current?.dismiss();
      }
    }, [disableClose, ref]);

    // Pan responder for drag to close
    const panResponder = React.useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: (_, gestureState) => {
          return gestureState.dy > 5;
        },
        onPanResponderMove: (_, gestureState) => {
          if (gestureState.dy > 0) {
            translateY.setValue(gestureState.dy);
          }
        },
        onPanResponderRelease: (_, gestureState) => {
          if (gestureState.dy > 100 || gestureState.vy > 0.5) {
            handleClose();
          } else {
            Animated.spring(translateY, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          }
        },
      })
    ).current;

    if (!visible) return null;

    return (
      <Modal
        visible={visible}
        transparent
        animationType="none"
        onRequestClose={handleClose}
        statusBarTranslucent
      >
        <View style={styles.overlay}>
          {/* Backdrop */}
          <TouchableWithoutFeedback onPress={handleClose}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>

          {/* Sheet */}
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={styles.keyboardView}
          >
            <Animated.View
              style={[
                styles.sheet,
                {
                  height: sheetHeight,
                  backgroundColor: sheetColor,
                  transform: [{ translateY }],
                },
              ]}
              {...panResponder.panHandlers}
            >
              {/* Handle */}
              <View style={styles.handleContainer}>
                <View style={styles.handle} />
              </View>

              {/* Content */}
              <View style={styles.content}>{children}</View>
            </Animated.View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    );
  }
);

export default SimpleBottomSheet;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  keyboardView: {
    justifyContent: "flex-end",
  },
  sheet: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  handleContainer: {
    alignItems: "center",
    paddingVertical: 12,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#999",
    borderRadius: 2,
  },
  content: {
    flex: 1,
  },
});
