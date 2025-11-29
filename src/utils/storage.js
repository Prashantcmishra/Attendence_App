import AsyncStorage from "@react-native-async-storage/async-storage";

const USERS_KEY = "@registered_users";
const CURRENT_USER_KEY = "@current_user";

// Hardcoded default user
const DEFAULT_USER = {
  username: "own123",
  password: "own123",
  email: "own123@example.com",
  fullName: "Default User",
  createdAt: new Date().toISOString(),
};

export const initializeStorage = async () => {
  try {
    const existingUsers = await AsyncStorage.getItem(USERS_KEY);
    if (!existingUsers) {
      await AsyncStorage.setItem(USERS_KEY, JSON.stringify([DEFAULT_USER]));
    }
  } catch (error) {
    console.error("Error initializing storage:", error);
  }
};

export const getRegisteredUsers = async () => {
  try {
    const users = await AsyncStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [DEFAULT_USER];
  } catch (error) {
    console.error("Error getting users:", error);
    return [DEFAULT_USER];
  }
};

export const registerUser = async (newUser) => {
  try {
    const users = await getRegisteredUsers();

    // Check if username already exists
    const userExists = users.find(
      (user) => user.username.toLowerCase() === newUser.username.toLowerCase()
    );

    if (userExists) {
      return { success: false, message: "Username already exists!" };
    }

    // Check if email already exists
    const emailExists = users.find(
      (user) => user.email.toLowerCase() === newUser.email.toLowerCase()
    );

    if (emailExists) {
      return { success: false, message: "Email already registered!" };
    }

    users.push({
      ...newUser,
      createdAt: new Date().toISOString(),
    });

    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { success: true, message: "Registration successful!" };
  } catch (error) {
    console.error("Error registering user:", error);
    return {
      success: false,
      message: "Registration failed. Please try again.",
    };
  }
};

export const loginUser = async (username, password) => {
  try {
    const users = await getRegisteredUsers();

    const user = users.find(
      (u) =>
        u.username.toLowerCase() === username.toLowerCase() &&
        u.password === password
    );

    if (user) {
      await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      return { success: true, user, message: "Login successful!" };
    }

    return { success: false, message: "Invalid username or password!" };
  } catch (error) {
    console.error("Error logging in:", error);
    return { success: false, message: "Login failed. Please try again." };
  }
};

export const getCurrentUser = async () => {
  try {
    const user = await AsyncStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
};

export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem(CURRENT_USER_KEY);
    return { success: true };
  } catch (error) {
    console.error("Error logging out:", error);
    return { success: false };
  }
};

export const getAllUsers = async () => {
  return await getRegisteredUsers();
};
