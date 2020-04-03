import { NativeModules } from "react-native";

const { Openapp } = NativeModules;

export const openApp = packageId => {
  if (!packageId || typeof packageId !== String)
    throw new Error("Invalid package id");

  try {
    Openapp.openApp(packageId);
    return true;
  } catch (e) {
    throw new Error(e);
    return false;
  }
};
