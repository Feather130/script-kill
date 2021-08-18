import { Component } from "react";
import Taro from "@tarojs/taro";
import "./app.scss";

class App extends Component {
  onLaunch() {
    window.globalData = this.setNavBarInfo();
  }

  setNavBarInfo() {
    // 获取系统信息
    const systemInfo = Taro.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();

    return {
      // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
      navBarHeight:
        (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 +
        menuButtonInfo.height +
        systemInfo.statusBarHeight, // 导航栏高度
      menuBotton: menuButtonInfo.top - systemInfo.statusBarHeight, // 胶囊距底部间距（保持底部间距一致）
      menuRight: systemInfo.screenWidth - menuButtonInfo.right, // 胶囊距右方间距（方保持左、右间距一致）
      menuHeight: menuButtonInfo.height, // 胶囊高度（自定义内容可与胶囊高度保证一致）
    };
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
