import * as React from 'react';
import { View, Text } from 'remax/one';
import './index.css';
import {useState} from "react";

const defaultItem={
        condition_complete:false,
        tag:'每日提现',
        fail_result:'条件未达到，连续答对3题目',
    };
const wdBottom = [22,33];
const number = 10;
const CountdownClick= () => {
    const [systemInfo,setSystemInfo] = useState<{[key:string]:any}>(wx.getSystemInfoSync());
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