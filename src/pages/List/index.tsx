import React, { ReactNode, useState, useEffect } from "react";
import classNames from "classnames";
import { View, Text } from "@tarojs/components";
import { AtSearchBar, AtDivider } from "taro-ui";
import Card from "../../components/Card/index";
import "./index.scss";

const filterOptions = {
  people: {
    title: "人数",
    list: [
      {
        lable: "≤4人",
        value: 4,
      },
      {
        lable: "5人",
        value: 5,
      },
      {
        lable: "6人",
        value: 6,
      },
      {
        lable: "7人",
        value: 7,
      },
      {
        lable: "8人",
        value: 8,
      },
      {
        lable: "≥9人",
        value: 9,
      },
    ],
  },
  duration: {
    title: "时长",
    list: [
      {
        lable: "入门",
        value: 0,
      },
      {
        lable: "进阶",
        value: 1,
      },
      {
        lable: "适中",
        value: 2,
      },
      {
        lable: "烧脑",
        value: 3,
      },
      {
        lable: "撕本",
        value: 4,
      },
    ],
  },
  theme: {
    title: "题材",
    list: [
      {
        lable: "入门",
        value: 0,
      },
      {
        lable: "进阶",
        value: 1,
      },
      {
        lable: "适中",
        value: 2,
      },
      {
        lable: "烧脑",
        value: 3,
      },
      {
        lable: "撕本",
        value: 4,
      },
    ],
  },
  difficulty: {
    title: "难度",
    list: [
      {
        lable: "入门",
        value: 0,
      },
      {
        lable: "进阶",
        value: 1,
      },
      {
        lable: "适中",
        value: 2,
      },
      {
        lable: "烧脑",
        value: 3,
      },
      {
        lable: "撕本",
        value: 4,
      },
    ],
  },
  sort: {
    title: "排序",
    list: [
      {
        lable: "入门",
        value: 0,
      },
      {
        lable: "进阶",
        value: 1,
      },
      {
        lable: "适中",
        value: 2,
      },
      {
        lable: "烧脑",
        value: 3,
      },
      {
        lable: "撕本",
        value: 4,
      },
    ],
  },
};

const data = [
  {
    id:'',
    imageUrl: "https://pic.qqtn.com/up/2019-9/15690311636958128.jpg",
    title: "天地学园",
    isHot: true,
    isNew: true,
    grade: "",
    trait: "",
    tags: [],
    describe: "",
    people: "",
    time: "",
    difficulty: "",
  },
];

const List: React.FC<{}> = () => {
  const [active, setActive] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const handleFilter = (e, key) => {
    if (e.target.dataset.value) {
      setActive({
        ...active,
        [key]: e.target.dataset.value,
      });
    }
  };

  const handleChange = (e) => {
    setSearchValue(e);
  };

  const handleSearch = () => {
    // TODO 搜索 并清空filter
  };

  const filterItem = (key, list: Array<object>): ReactNode => {
    return list.map((item) => (
      <Text
        key={item.value}
        data-value={item.value}
        className={classNames(
          "filter-item",
          active[key] === item.value ? "filter-item-active" : ""
        )}
      >
        {item.lable}
      </Text>
    ));
  };

  const filter = (options: object): ReactNode => {
    return Object.keys(options).map((option) => (
      <View key={option} onClick={(e) => handleFilter(e, option)}>
        <Text className="filter-title">{options[option].title}:</Text>
        <Text
          data-value="all"
          className={classNames(
            "filter-item",
            active[option] === "all" ? "filter-item-active" : ""
          )}
        >
          全部
        </Text>
        {filterItem(option, options[option].list)}
      </View>
    ));
  };

  useEffect(() => {
    const obj = Object.keys(filterOptions).reduce(
      (pre, current) => ({ ...pre, [current]: "all" }),
      {}
    );
    setActive(obj);
  }, []);

  return (
    <View className="List">
      <AtSearchBar
        placeholder="剧本名"
        value={searchValue}
        onChange={handleChange}
        onActionClick={handleSearch}
        onConfirm={handleSearch}
      />
      <View>{filter(filterOptions)}</View>
      <AtDivider />
      {
        data.map(item=>(

          <Card key={item.id} {...item}  />
        ))
      }
    </View>
  );
};

export default List;