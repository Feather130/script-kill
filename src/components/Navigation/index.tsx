import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";

interface NavigationProps {
  title?: string;
}

const Navigation: React.FC<NavigationProps> = ({ title }) => {
  const { navBarHeight } = window.globalData;

  return (
    <View style={{ height: navBarHeight }}>
      <Text className=''>{title || "N=1剧本杀演绎俱乐部"}</Text>
    </View>
  );
};

export default Navigation;
