import * as React from 'react';
import { View, Text,Image } from 'remax/one';
import './index.css';
import {useState} from "react";
import PopupBottomAd from "@/components/PopupBottomAd";
import {imageUrl} from "@/util/utils";
import CountdownClick from "@/components/CountdownClick";

interface PopupBaseProps{
    close:()=>void;
}

const countdown = 3;

const ReceiveSuccess:React.FC<PopupBaseProps>= ({close}) => {

    const [options,setOptions] = useState<{[key:string]:any}>({
        value:2.33,
    });
    return (
        <View className="column justify-content-center align-items-center popup data-v-c995a346">
            <View className="popup-main data-v-c995a346">
                <Image className="bg data-v-c995a346" src={imageUrl('redEnvelope_bg')} />
                <View className="column justify-content-between align-items-center content data-v-c995a346">
                    <View className="column font-write align-center data-v-c995a346">
                        <Text className="font-22 mt-5 t2 data-v-c995a346">领取成功</Text>
                        <Text className="mt-1 ml-15 t1 data-v-c995a346">
                            <Text className="font-50 font-bold data-v-c995a346">{options.value}</Text>
                            <Text className="font-14 ml-05 data-v-c995a346">元</Text>
                        </Text>
                    </View>
                    <Image className="mt-1 open data-v-c995a346" src={imageUrl('redEnvelope_open')} />
                    <Text className="font-12 font-write mb-2 t3 hb-tip data-v-c995a346">可提现</Text>
                    <View className="iconfont icon-close font-20 p-1 close data-v-c995a346" onTap={close} />
                </View>
                <Image
                    className="light data-v-c995a346"
                    src={imageUrl('redEnvelope_light')}
                    style={{
                        width:350,
                        height:350
                    }}
                />
            </View>
            {
                countdown ? (<CountdownClick />) : null
            }
            <PopupBottomAd show />
        </View>
    );
};

export default ReceiveSuccess;