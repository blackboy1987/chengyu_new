import * as React from 'react';
import { View, Text, } from 'remax/one';
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import PopupBottomAd from "@/components/PopupBottomAd";

interface PopupBaseProps{
    className:string;
}

const PopupBase:React.FC<PopupBaseProps>= ({className,children}) => {

    const [options,setOptions] = useState<{[key:string]:any}>({
        title:'haha',
        width:600,
        btnText:'哈哈',
    });
    return (
        <View className={classNames(
            'column justify-content-center align-items-center popup popup-base data-v-164f936c',
            className
        )}>
            <View className="column justify-content-between align-items-center px-2 popup-main data-v-164f936c"
                  style={{width:options.width}}>
                <Text className="font-18 font-bold mt-2 data-v-164f936c">{options.title}</Text>
                <View className="py-2 font-14 w-100 data-v-164f936c">
                    {children}
                </View>
                {
                    options.button !=='custom' ? (
                        <View className="btn btn-red w-100 mb-2 data-v-164f936c">{options.btnText || '好的'}</View>
                    ) : null
                }
                <View className="iconfont icon-close font-20 gray-6 p-1 close data-v-164f936c" />
            </View>
            <PopupBottomAd />
        </View>

    );
};

export default PopupBase;