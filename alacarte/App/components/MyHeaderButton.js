import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Color from "../constants/color";

const MyHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={20}
      color={Platform.OS == "ios" ? Color.primary : Color.secondary}
    />
  );
};

export default MyHeaderButton;
