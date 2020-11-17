import * as React from 'react';
import { View, Text, } from 'remax/one';
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import PopupBottomAd from "@/components/PopupBottomAd";

interface PopupBaseProps{
    className?:string;
    close:()=>void;
    title:string;
    width?:number;
}

const PopupBase:React.FC<PopupBaseProps>= ({width=680,title,close,className,children}) => {

    const [options,setOptions] = useState<{[key:string]:any}>({
        btnText:'哈哈',
        button:'custom'
    });
    return (
        <View className={classNames(
            'column justify-content-center align-items-center popup popup-base data-v-164f936c',
            className
        )}>
            <View className="column justify-content-between align-items-center px-2 popup-main data-v-164f936c" style={{width:width}}>
                <Text className="font-18 font-bold mt-2 data-v-164f936c">{title}</Text>
                <View className="py-2 font-14 w-100 data-v-164f936c">
                    {children}
                </View>
                {
                    options.button !=='custom' ? (
                        <View className="btn btn-red w-100 mb-2 data-v-164f936c">{options.btnText || '好的'}</View>
                    ) : null
                }
                <View className="iconfont icon-close font-20 gray-6 p-1 close data-v-164f936c" onTap={close} />
            </View>
            <PopupBottomAd show />
        </View>

    );
};

export default PopupBase;