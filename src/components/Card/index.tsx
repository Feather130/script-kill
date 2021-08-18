import React, { useState } from "react";
import classNames from "classnames";
import { View, Text, Image } from "@tarojs/components";
import { AtModal } from "taro-ui";
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
  author: String;
  issue: String;
  price: Number;
  rcType: "list" | "detail";
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
  author,
  issue,
  price,
  rcType,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View className='card'>
      <View className={classNames("card-img", `card-${rcType}-img`)}>
        {/*<View className="card-img-tag">{imageTag}</View>*/}
        {/*{recommend ? <View className="iconfont icon-tuijian card-img-recommend"></View> : null}*/}
        {/*{hasVideo ? <View className="card-img-video">video</View> : null}*/}
        <Image
          style={{ width: "100%", height: "100%", borderRadius: "4px" }}
          src={imageUrl}
        />
      </View>
      <View className='card-content'>
        <View className='card-content-top'>
          <View className='card-content-title-group'>
            <Text className='card-content-title'>{title}</Text>
            {rcType === "list" ? (
              <>
                {grade ? (
                  <Text className='card-content-grade'>（{grade}分）</Text>
                ) : null}
                {trait ? (
                  <Text className='card-content-trait'>{trait}</Text>
                ) : null}
                {isHot ? (
                  <Text className='iconfont icon-rehot card-content-isHot' />
                ) : null}
                {isNew ? (
                  <Text className='iconfont icon-xin card-content-xin' />
                ) : null}
              </>
            ) : null}
          </View>
          {rcType === "list" ? null : (
            <>
              <View className='card-content-tags'>
                <Text>作者：</Text>
                <Text>{author}</Text>
              </View>
              <View className='card-content-tags'>
                <Text>发行：</Text>
                <Text>{issue}</Text>
              </View>
              <View className='card-content-tags'>
                <Text>价格：</Text>
                <Text>￥ {price}每位</Text>
                <Text
                  className='iconfont icon-question card-content-question-icon'
                  onClick={() => setShowModal(true)}
                />
              </View>
            </>
          )}
          <View className='card-content-tags'>
            {rcType === "list" ? null : <Text>标签：</Text>}
            {tags.map((tag, index, array) => (
              <Text key={index} className='card-content-tag'>
                {tag}
                {index !== array.length ? "；" : ""}
              </Text>
            ))}
          </View>
          {trait ? (
            <View>
              <Text className='card-content-trait'>{trait}</Text>
            </View>
          ) : null}
          {rcType === "list" ? (
            <View className='card-content-describe'>{describe}</View>
          ) : null}
        </View>
        <View className='card-content-bottom'>
          <View className='card-content-bottom-view'>
            <Text className='iconfont icon-renshu card-content-bottom-icon' />
            <Text className='card-content-bottom-text'>{people}</Text>
          </View>
          <View className='card-content-bottom-view'>
            <Text className='iconfont icon-shijian card-content-bottom-icon' />
            <Text className='card-content-bottom-text'>{time}</Text>
          </View>
          <View>
            <Text className='iconfont icon-biaoqian2 card-content-bottom-icon' />
            <Text className='card-content-bottom-text'>{difficulty}</Text>
          </View>
        </View>
        <AtModal
          isOpened={showModal}
          title='关于价格'
          confirmText='知道啦'
          onClose={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
          onConfirm={() => setShowModal(false)}
          content='超过午夜12：00之后加收10元夜场费'
        />
      </View>
    </View>
  );
};

export default Card;
