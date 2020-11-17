import * as React from 'react';
import {View,Text,Image} from 'remax/one';
import './index.css';
import {useState} from "react";
import {imageUrl} from "@/util/utils";

interface VideoRedEnvelopeProps {

}
const total_number = 20;
const current_number= 10;
const VideoRedEnvelope:React.FC<VideoRedEnvelopeProps>= ({}) => {
    const [sh,setSh] = useState<boolean>(false);
    const [g0,setG0] = useState<number>(30);
    return (
        <View className="column justify-content-center align-items-center popup data-v-30f8d678">
            <View className="popup-main data-v-30f8d678">
                <Image className="bg data-v-30f8d678" src={imageUrl('redEnvelope_bg')} />
                <View className="column justify-content-between align-items-center content data-v-30f8d678">
                    <View className="column font-write align-center data-v-30f8d678">
                        <Text className="font-30 mt-4 t1 data-v-30f8d678">100%可提现</Text>
                        <Text className="font-16 mt-1 t2 data-v-30f8d678">最高可获得
                            <Text className="font-22 mx-05 highlight data-v-30f8d678">100</Text>
                            元红包
                        </Text>
                    </View>
                    <Image
                        className="mt-2 data-v-30f8d678"
                        src={imageUrl('redEnvelope_icon_video')}
                        style={{
                            width:95,
                            height:71
                        }}
                    />
                    <View className="progress data-v-30f8d678">
                        <View className="progress-bar data-v-30f8d678" style={{width:`${g0}%`}} />
                        <View className="row justify-content-center align-items-center font-12 font-bold font-write progress-value data-v-30f8d678">{''+current_number + '/' + total_number + ''}</View>
                    </View>
                    <View className="font-12 count-tips data-v-30f8d678">{'观看'+total_number + '次视频可开启红包'}</View>
                    <View className="open data-v-30f8d678">
                        <Image className="{{['open-img data-v-30f8d678',opening?'spin':'']}}" src={imageUrl('redEnvelope_open')} />
                    </View>
                    {
                        sh ? (<Text className="font-12 font-write mb-2 t3 hb-tip data-v-30f8d678">观看完整视频领取红包</Text>) : (<Text className="font-12 font-write mb-2 t3 hb-tip data-v-30f8d678">可提现</Text>)
                    }
                    <View className="iconfont icon-close font-20 p-1 close data-v-30f8d678" />
                </View>
                <Image
                    className="light data-v-30f8d678"
                    src={imageUrl('redEnvelope_light')}
                    style={{
                        width:350,
                        height:350
                    }}
                />
            </View>
        </View>

    );
};

export default VideoRedEnvelope;