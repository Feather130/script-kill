import React from "react";
import { View, Text, Image } from "@tarojs/components";
import { ImageProps } from "@tarojs/components/types/Image";
import "./index.scss";

interface CardProps {
  id: string;
  imageUrl: string;
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
}

const Card: React.FC<CardProps> = ({
  imageUrl,
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
}) => {
  return (
    <View className="card">
      <View className="card-img">
        <Image
          style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          src={imageUrl}
        />
      </View>
      <View className="card-content">
        <View className="card-content-top">
          <View className="card-content-title-group">
            <Text className="card-content-title">{title}</Text>
            {grade ? <Text>分数</Text> : null}
            {trait ? <Text>特点</Text> : null}
            {isHot ? <Text>hot</Text> : null}
            {isNew ? <Text>新本</Text> : null}
          </View>
          <View className="card-content-tags">
            {tags.map((tag, index) => (
              <Text key={index}>{tag}</Text>
            ))}
          </View>
          <View className="card-content-describe">{describe}</View>
        </View>
        <View className="card-content-bottom">
          <View>
            <Text>图标</Text>
            <Text>{people}</Text>
          </View>
          <View>
            <Text>图标</Text>
            <Text>{time}</Text>
          </View>
          <View>
            <Text>图标</Text>
            <Text>{difficulty}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
