import * as React from 'react';
import { View, Text } from 'remax/one';
import './index.css';
import {wxGetSystemInfoSync} from "@/util/wxUtils";

const wdBottom = [22,33];
const number = 10;
const CountdownClick= () => {
    const systemInfo = wxGetSystemInfoSync();
    return (
        <View className="row justify-content-center align-items-center font-write component"
              style={{bottom:systemInfo.statusBarHeight>22?wdBottom[0]:wdBottom[1]}}>
            <View className="iconfont icon-close mr-1" />
            <View className="font-16 font-close">点击关闭
                {
                    number ? (<Text className="ml-05">{number}</Text>) : null
                }
            </View>
        </View>

    );
};

export default CountdownClick;