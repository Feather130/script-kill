export default {
  pages: [
    "pages/Home/index",
    "pages/List/index",
    "pages/Rank/index",
    "pages/Zone/index",
    "pages/Detail/index",
  ],
  tabBar: {
    list: [
      {
        pagePath: "pages/Home/index",
        text: "首页",
        iconPath: "assets/tabbar/home.png",
        selectedIconPath: "assets/tabbar/home_select.png",
      },
      {
        pagePath: "pages/List/index",
        text: "剧本",
        iconPath: "assets/tabbar/list.png",
        selectedIconPath: "assets/tabbar/list_select.png",
      },
      {
        pagePath: "pages/Rank/index",
        text: "排行",
        iconPath: "assets/tabbar/rank.png",
        selectedIconPath: "assets/tabbar/rank_select.png",
      },
      {
        pagePath: "pages/Zone/index",
        text: "我的",
        iconPath: "assets/tabbar/zone.png",
        selectedIconPath: "assets/tabbar/zone_select.png",
      },
    ],
    color: "#8a90a6",
    selectedColor: "#fac618",
    backgroundColor: "#141a30",
  },
  window: {
    navigationBarTextStyle:'white',
    navigationStyle: "custom",
  },
};
