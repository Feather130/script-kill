import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

interface NavigationProps {
  title?: string;
  background?: string;
}

const Navigation: React.FC<NavigationProps> = ({ title, background }) => {
  const [showReturn, setShowReturn] = useState(false);
  const { navBarHeight, menuHeight, menuBotton } = window.globalData;

  const handleReturn = () => {
    Taro.navigateBack();
  };

  useEffect(() => {
    const len = Taro.getCurrentPages().length;
    if (len > 1) {
      setShowReturn(true);
    }
  }, []);

  return (
    <View
      className='navigation'
      style={{ height: navBarHeight, background: background || "transparent" }}
    >
      <View
        className='navigation-content'
        style={{
          height: menuHeight,
          lineHeight: `${menuHeight}px`,
          bottom: menuBotton,
        }}
      >
        <View className='navigation-content-options'>
          {showReturn ? (
            <Text
              className='iconfont icon-fanhui navigation-content-options-return'
              onClick={handleReturn}
            />
          ) : null}
        </View>
        <View className='navigation-content-title'>
          <Text>{title || "N=1剧本杀演绎俱乐部"}</Text>
        </View>
      </View>
    </View>
  );
};

export default Navigation;
