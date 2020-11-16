import * as React from 'react';
import { View, Text,Image } from 'remax/one';
import bg from '@/static/images/common/redEnvelope/bg.png';
import failure from '@/static/images/common/redEnvelope/failure.png'
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import CustomNavigation from "@/components/CustomNavigation";
import PopupBase from "@/components/PopupBase";
import PopupBottomAd from "@/components/PopupBottomAd";

const options = {
    isDeductMoney:true,
    deductMoney:true,
}
const sh = true;
const g0 = 0.1;

const AnswerFailure= () => {

    return (
        <View className="column justify-content-center align-items-center popup">
            <View className="popup-main">
                <Image className="bg" src={bg} />
                <View className="column justify-content-between align-items-center content">
                    <View className="column font-write align-center">
                        <Text className="font-22 mt-5 t2">答题失败</Text>
                        {
                            options.isDeductMoney&&options.deductMoney&&!sh ? (
                                <Text className="font-14 t2">{'扣除金额 -'+g0 + '元'}</Text>
                            ) : null
                        }

                    </View>
                    <View className="mt-1 failure">
                        <Image src={failure} style={{width:166,height:166}} />
                    </View>
                    <View className="btn btn-yellow btn-again mb-2">再次挑战</View>
                    <View className="iconfont icon-close font-20 p-1 close" />
                </View>
            </View>
            <PopupBottomAd />
        </View>

    );
};

export default AnswerFailure;