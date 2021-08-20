import React, { ReactNode, useState, useEffect } from "react";
import { AtDivider } from "taro-ui";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
import Card from "../../components/Card/index";
import Navigation from "../../components/Navigation/index";
import "./index.scss";

const data = {
  id: 2,
  imageUrl: "https://pic.qqtn.com/up/2019-9/15690311636958128.jpg",
  imageTag: "盒装",
  title: "天地学园",
  isHot: true,
  isNew: true,
  grade: "9.46",
  trait: "硬核必玩！",
  tags: ["推理", "硬核", "还原"],
  describe: "今天6名911事件的亲历者，将带领我们重温这段尘封已久的往事",
  people: "4男2女",
  time: "6小时",
  difficulty: "适中",
  recommend: false,
  hasVideo: true,
  author: "张三",
  issue: "千家顺",
  price: 178,
};

const Detail: React.FC<{}> = () => {
  const [current, setCurrent] = useState(1);
  const tabList = [{ id: 1, title: "剧本简介" }];

  const handleChange = (e) => {
    setCurrent(e);
  };

  return (
    <View
      className='detail'
      style={{
        backgroundImage: `url(${data.imageUrl})`,
      }}
    >
      <View className='detail-content'>
        <Navigation />
        <View className='detail-content-main'>
          <Card rcType='detail' {...data} />
          <AtDivider />
          <View>
            <View className='detail-tabs'>
              {tabList.map((item) => (
                <View
                  className={classNames(
                    "detail-tabs-item",
                    current === item.id ? "detail-tabs-item-active" : ""
                  )}
                  key={item.id}
                  onClick={() => handleChange(item.id)}
                >
                  {item.title}
                </View>
              ))}
            </View>
            <View>
              <View style={{ display: current === 1 ? "block" : "none" }}>
                1111
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detail;
