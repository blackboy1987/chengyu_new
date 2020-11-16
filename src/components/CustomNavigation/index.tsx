import * as React from 'react';
import { View, Text, } from 'remax/one';
import './index.css';
import {useState} from "react";
const CustomNavigation= () => {
    const [systemInfo,setSystemInfo] = useState<{[key:string]:any}>(wx.getSystemInfoSync());
    const [options,setOptions] = useState<{[key:string]:any}>({
        inside:false,
        textColor:'red',
        title:'haha',
    })
    const [sh,setSh] = useState<boolean>(false);
    return (
        <View
            className="row justify-content-center align-items-center px-1 custom-navigation"
            style={{
                backgroundColor:options.bg,
                paddingTop:systemInfo.statusBarHeight+40
            }}
        >
            {
                options.inside ? (
                    <View className="row justify-content-start align-items-center pr-1 back">
                        <View className="iconfont icon-arrow-left font-24" style={{color:options.textColor}} />
                        <Text className="font-18 font-write" style={{color:options.textColor}}>返回</Text>
                    </View>
                ) : null
            }
            {
                sh ? (
                    <View className="font-182 font-write" style={{color:options.textColor}}>{options.title}</View>
                ) : (
                    <View className="font-18 font-write data-v-66344a77" style={{color:options.textColor}}>{options.title === '成语有财' ? '成语有财 - 100%提现' : options.title}</View>
                )
            }


        </View>
    );
};

export default CustomNavigation;