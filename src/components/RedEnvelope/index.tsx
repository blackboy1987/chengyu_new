import * as React from 'react';
import {View,Text,Image} from 'remax/one';
import './index.css';
// @ts-ignore
import classNames from 'classnames';
import {imageUrl} from "@/util/utils";
import PopupBottomAd from "@/components/PopupBottomAd";

interface RedEnvelopeProps {

}

const type='new';
const sh = true;
const opening = false;

const RedEnvelope:React.FC<RedEnvelopeProps>= () => {
    return (
        <View className="column justify-content-center align-items-center popup data-v-69815380">
            <View className="popup-main data-v-69815380">
                <Image className="bg data-v-69815380" src={imageUrl('redEnvelope_bg')} />
                <View className="column justify-content-between align-items-center content data-v-69815380">
                    {
                        type==='new' ? (
                            <View className="column font-write align-center data-v-69815380">
                                <Text className="font-16 mt-5 t2 data-v-69815380">新用户专享</Text>
                                <Text className="font-30 mt-1 t1 data-v-69815380">现金红包</Text>
                            </View>
                        ) : (
                            <View className="column font-write align-center data-v-69815380">
                                <Text className="font-30 mt-5 t1 data-v-69815380">离线奖励</Text>
                                <Text className="font-16 mt-1 t2 data-v-69815380">最高可获得
                                    <Text className="font-22 mx-05 highlight data-v-69815380">10</Text>
                                    元红包
                                </Text>
                            </View>
                        )
                    }

                    <View className="open data-v-69815380">
                        <Image
                            className={classNames(
                                'open-img',
                                'data-v-69815380',
                                opening?'spin':''
                            )}
                            src={imageUrl('redEnvelope_open')} />
                    </View>
                    {
                        sh ? (<Text className="font-12 font-write mb-2 t3 hb-tip data-v-69815380">观看完整视频领取红包</Text>) : (<Text className="font-12 font-write mb-2 t3 hb-tip data-v-69815380">可提现</Text>)
                    }
                    <View className="iconfont icon-close font-20 p-1 close data-v-69815380" />
                </View>
                <Image
                    className="light data-v-69815380"
                    src={imageUrl('redEnvelope_light')}
                    style={{
                        width:350,
                        height:350
                    }}
                />
            </View>
            <PopupBottomAd  show/>
        </View>
    );
};

export default RedEnvelope;