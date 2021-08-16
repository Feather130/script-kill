import React from "react";
import { View, Text, Image } from "@tarojs/components";
import { ImageProps } from "@tarojs/components/types/Image";
import "./index.scss";

interface CardProps {
  id: number;
  imageUrl: string;
  imageTag: string;
  title: string;
  grade?: string;
  trait?: string;
  isHot?: boolean;
  isNew?: boolean;
  tags: Array<string>;
  describe: string;
  people: string;
  time: string;
  difficulty: string;
  hasVideo: boolean;
  recommend: boolean;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  imageTag,
  title,
  isHot,
  isNew,
  grade,
  trait,
  tags,
  describe,
  people,
  time,
  difficulty,
  recommend,
  hasVideo,
}) => {
  return (
    <View className="card">
      <View className="card-img">
        <View className="card-img-tag">{imageTag}</View>
        {recommend ? <View className="iconfont icon-tuijian card-img-recommend"></View> : null}
        {hasVideo ? <View className="card-img-video">video</View> : null}
        <Image
          style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          src={imageUrl}
        />
      </View>
      <View className="card-content">
        <View className="card-content-top">
          <View className="card-content-title-group">
            <Text className="card-content-title">{title}</Text>
            {grade ? (
              <Text className="card-content-grade">（{grade}分）</Text>
            ) : null}
            {trait ? <Text className="card-content-trait">{trait}</Text> : null}
            {isHot ? (
              <Text className="iconfont icon-hot card-content-isHot" />
            ) : null}
            {isNew ? (
              <Text className="iconfont icon-xin card-content-xin" />
            ) : null}
          </View>
          <View className="card-content-tags">
            {tags.map((tag, index, array) => (
              <Text key={index} className="card-content-tag">
                {tag}
                {index !== array.length ? "；" : ""}
              </Text>
            ))}
          </View>
          <View className="card-content-describe">{describe}</View>
        </View>
        <View className="card-content-bottom">
          <View className="card-content-bottom-view">
            <Text className="iconfont icon-renshu card-content-bottom-icon" />
            <Text className="card-content-bottom-text">{people}</Text>
          </View>
          <View className="card-content-bottom-view">
            <Text className="iconfont icon-shijian card-content-bottom-icon" />
            <Text className="card-content-bottom-text">{time}</Text>
          </View>
          <View>
            <Text className="iconfont icon-biaoqian card-content-bottom-icon" />
            <Text className="card-content-bottom-text">{difficulty}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
