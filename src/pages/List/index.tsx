import React, { ReactNode, useState, useEffect } from "react";
import classNames from "classnames";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtSearchBar, AtDivider } from "taro-ui";
import Card from "../../components/Card/index";
import Navigation from "../../components/Navigation/index";
import "./index.scss";
import api from "../../api/script";

const filterOptions = {
  people: {
    title: "人数",
    list: [
      {
        label: "≤4人",
        value: 4,
      },
      {
        label: "5人",
        value: 5,
      },
      {
        label: "6人",
        value: 6,
      },
      {
        label: "7人",
        value: 7,
      },
      {
        label: "8人",
        value: 8,
      },
      {
        label: "≥9人",
        value: 9,
      },
    ],
  },
  duration: {
    title: "时长",
    list: [
      {
        label: "入门",
        value: 0,
      },
      {
        label: "进阶",
        value: 1,
      },
      {
        label: "适中",
        value: 2,
      },
      {
        label: "烧脑",
        value: 3,
      },
      {
        label: "撕本",
        value: 4,
      },
    ],
  },
  theme: {
    title: "题材",
    list: [
      {
        label: "入门",
        value: 0,
      },
      {
        label: "进阶",
        value: 1,
      },
      {
        label: "适中",
        value: 2,
      },
      {
        label: "烧脑",
        value: 3,
      },
      {
        label: "撕本",
        value: 4,
      },
    ],
  },
  difficulty: {
    title: "难度",
    list: [
      {
        label: "入门",
        value: 0,
      },
      {
        label: "进阶",
        value: 1,
      },
      {
        label: "适中",
        value: 2,
      },
      {
        label: "烧脑",
        value: 3,
      },
      {
        label: "撕本",
        value: 4,
      },
    ],
  },
  sort: {
    title: "排序",
    list: [
      {
        label: "入门",
        value: 0,
      },
      {
        label: "进阶",
        value: 1,
      },
      {
        label: "适中",
        value: 2,
      },
      {
        label: "烧脑",
        value: 3,
      },
      {
        label: "撕本",
        value: 4,
      },
    ],
  },
};

const List: React.FC<{}> = () => {
  const [active, setActive] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const getList = (isReset = false) => {
    api.getList({}).then((res) => {
      if (isReset) {
        setData(res.data.data.data);
      } else {
        setData([...data, ...res.data.data.data]);
      }
    });
  };

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

  const jumpDetail = (id) => {
    Taro.navigateTo({
      url: `/pages/Detail/index?id=${id}`,
    });
  };

  const filterItem = (key, list: Array<object>): ReactNode => {
    return list.map(({ label, value }) => (
      <Text
        key={value}
        data-value={value}
        className={classNames(
          "list-warp-filter-item",
          active[key] === value ? "list-warp-filter-item-active" : ""
        )}
      >
        {label}
      </Text>
    ));
  };

  const filter = (options: object): ReactNode => {
    return Object.keys(options).map((option) => (
      <View
        key={option}
        onClick={(e) => handleFilter(e, option)}
        className='list-warp-filter'
      >
        <Text className='list-warp-filter-title'>
          {options[option].title}：
        </Text>
        <Text
          data-value='all'
          className={classNames(
            "list-warp-filter-item",
            active[option] === "all" ? "list-warp-filter-item-active" : ""
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

  useEffect(() => {
    getList();
  }, []);

  return (
    <View className='list-warp'>
      <Navigation background='#141a30' />
      <View className='list-warp-content'>
        <AtSearchBar
          placeholder='剧本名'
          value={searchValue}
          onChange={handleChange}
          onActionClick={handleSearch}
          onConfirm={handleSearch}
        />
        <View>{filter(filterOptions)}</View>
        <AtDivider />
        {[...data, ...data, ...data, ...data].map((item, index) => (
          <View
            className='list-warp-content-card'
            key={index}
            onClick={() => jumpDetail(item.id)}
          >
            <Card rcType='list' {...item} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default List;
