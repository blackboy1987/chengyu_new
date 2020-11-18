import * as React from 'react';
import {View,Text,Image} from 'remax/one';
import './index.css';
// @ts-ignore
import classNames from 'classnames';
import {imageUrl} from "@/util/utils";
import PopupBottomAd from "@/components/PopupBottomAd";
import {useState} from "react";
import {usePageEvent} from "remax/macro";
import {game} from "@/util/httpUtils";
import {GameInfo, SiteInfo} from "@/data";
import {getStorage} from "@/util/wxUtils";
import {createRewardedVideoAd} from "@/util/adUtils";

interface RedEnvelopeProps {
    type:string;
}
const sh = true;

const RedEnvelope:React.FC<RedEnvelopeProps>= ({type}) => {
    const [rewardedVideoAd,setRewardedVideoAd] = useState<{[key:string]:any}|null>(null);
    const [opening,setOpening] = useState<boolean>(false);
    const [redEnvelopeType,setRedEnvelopeType] = useState<number>(0);
    const [finish,setFinish] = useState<boolean>(false);
    usePageEvent('onLoad',()=>{
        createRewardedVideo();
    });

    const createRewardedVideo=()=>{
        if(!rewardedVideoAd){
            const siteInfo:SiteInfo = getStorage("siteInfo");
            if(siteInfo.rewardedVideoAdId){
                setRewardedVideoAd(createRewardedVideoAd(siteInfo.rewardedVideoAdId.replace(/[\n\r]/g,''),{
                    onClose:function (res) {
                        setRedEnvelopeType(1);
                        setFinish(true);
                    }
                }))
            }
        }
    }

    const openVideo = () =>{
        if(rewardedVideoAd){
            rewardedVideoAd.show()
        }
    }

    const open = () =>{
        if(finish){
            setOpening(true);
        }else{
            wx.showModal({
                title:'提醒',
                content:'观看完整视频，才能领取红包',
                showCancel:false,
            });
        }

    }

    return (
        <View className="column justify-content-center align-items-center popup">
            <View className="popup-main">
                <Image className="bg" src={imageUrl('redEnvelope_bg')} />
                <View className="column justify-content-between align-items-center content">
                    {
                        type==='new' ? (
                            <View className="column font-write align-center">
                                <Text className="font-16 mt-5 t2">新用户专享</Text>
                                <Text className="font-30 mt-1 t1">现金红包</Text>
                            </View>
                        ) : (
                            <View className="column font-write align-center">
                                <Text className="font-30 mt-5 t1">离线奖励</Text>
                                <Text className="font-16 mt-1 t2">最高可获得
                                    <Text className="font-22 mx-05 highlight">10</Text>
                                    元红包
                                </Text>
                            </View>
                        )
                    }

                    <View className="open" onTap={open}>
                        <Image
                            className={classNames(
                                'open-img',
                                opening?'spin':''
                            )}
                            src={imageUrl('redEnvelope_open')} />
                    </View>
                    {
                        sh ? (
                            <Text onTap={openVideo} className="font-12 font-write mb-2 t3 hb-tip">
                                观看完整视频领取红包
                            </Text>) : (
                                <Text className="font-12 font-write mb-2 t3 hb-tip">可提现</Text>
                        )
                    }
                    <View className="iconfont icon-close font-20 p-1 close" />
                </View>
                <Image
                    className="light"
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