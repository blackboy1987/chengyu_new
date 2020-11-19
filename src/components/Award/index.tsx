import * as React from 'react';
import {View,Text,Image} from 'remax/one';
import './index.css';
import {imageUrl} from "@/util/utils";
import PopupBottomAd from "@/components/PopupBottomAd";
import {useState} from "react";
import {usePageEvent} from "remax/macro";
import {createRewardedVideoAd} from "@/util/adUtils";
import {SiteInfo} from "@/data";
import {getStorage} from "@/util/wxUtils";

interface AwardProps {
    onClose:(money?:number)=>void;
    money:number;
}

const type = 'base1';
const siteInfo:SiteInfo = getStorage("siteInfo");

const Award:React.FC<AwardProps>= ({money,onClose}) => {
    const [rewardedVideoAd,setRewardedVideoAd] = useState<{[key:string]:any}|null>(null);
    usePageEvent('onLoad',()=>{
        createRewardedVideo();
    });
    const createRewardedVideo=()=>{
        if(!rewardedVideoAd){
            console.log("siteInfo",siteInfo);
            if(siteInfo.rewardedVideoAdId){
                setRewardedVideoAd(createRewardedVideoAd(siteInfo.rewardedVideoAdId.replace(/[\n\r]/g,''),{
                    onClose:function (res) {
                        console.log('完成')
                    }
                }))
            }
        }
    }

    const openVideo = () =>{
        if(rewardedVideoAd){
            rewardedVideoAd.show()
                .catch(() => {
                    rewardedVideoAd.load()
                        .then(() => rewardedVideoAd.show())
                        .catch(err => {
                            console.log('激励视频 广告显示失败',err);
                        })
                })
        }
    }
    return (
        <View className="column justify-content-center align-items-center popup">
            <View className="column justify-content-between align-items-center popup-main">
                <Image className="bg" src={imageUrl('award_bg')} />
                <Image
                    className="close"
                    src={imageUrl('award_close')}
                    style={{
                        width:44,
                        height:44
                    }}
                    onTap={()=>onClose()}
                />
                <View className="column align-items-center content">
                    <Text className="font-18 mt-140">恭喜你获得</Text>
                    <Text className="font-40 font-bold font-red mt-78">{money}
                        <Text className="font-12 font-normal small">元</Text>
                    </Text>
                    <Text className="font-12 font-red mt-05">可提现</Text>
                    {
                        type==='base' ? (
                            <View className="row justify-content-center align-items-center mt-5 btn btn-yellow">
                                <Text className="font-red font-bold" onTap={()=>onClose(money)}>领取红包</Text>
                            </View>
                        ) : (
                            <>
                                <View className="row justify-content-center align-items-center mt-4 pr-2 btn btn-yellow" onTap={openVideo}>
                                    <View className="iconfont icon-play" />
                                    <Text className="font-red font-bold">超级翻倍</Text>
                                    <View className="multiple font-12">2倍</View>
                                </View>
                                <View class="font-12 general mt-1" onTap={()=>onClose(money)}>直接领取</View>
                            </>
                        )
                    }
                </View>
            </View>
            <PopupBottomAd show />
        </View>


    );
};

export default Award;