import * as React from 'react';
import { View, Text,Image, } from 'remax/one';
import {Button} from 'remax/wechat';
import './index.css';
import {useState} from "react";
import PopupBase from "@/components/PopupBase";
import {imageUrl} from "@/util/utils";
import {SiteInfo} from "@/data";
import {getStorage, setStorage} from "@/util/wxUtils";
import {usePageEvent} from "remax/macro";
import {addPoint} from "@/util/httpUtils";

const sh = false;

const bannerInterval = 10;
const showNoAd = true;
const showShare = false;

interface NoStaminaProps {
    onClose:()=>void;
}

const NoStamina:React.FC<NoStaminaProps>= ({onClose}) => {
    const siteInfo:SiteInfo = getStorage('siteInfo');
    const [options,setOptions] = useState<{[key:string]:any}>({
        middlePage:false,
    });
    const [countDown,setCountDown] = useState<number>(0);
    usePageEvent('onShow',()=>{
        const newCountDown= getStorage('countDown') || 0;
        setCountDown(newCountDown);
        if(newCountDown>=bannerInterval){
            // 达到观看时间
            addPoint({
                memo:'浏览广告，奖励'+siteInfo.browseVideoRewardPoint+"积分",
            },data=>{
                console.log("data",data);
            });
        }else if(newCountDown>0&&newCountDown<bannerInterval){
            // 未到观看时间
            // tips
            wx.showToast({
                icon: "none",
                title: "必须浏览"+bannerInterval+"秒以上！",
                duration: 2e3
            });
            setCountDown(0);
            setStorage('countDown',0);
        }
    });
    usePageEvent('onHide',()=>{
        setStorage('countDown',0);
        setInterval(()=>{
            setStorage('countDown',parseInt(getStorage('countDown')|| '0')+1);
        },1e3);
        console.log("onHide");
    });

    const close = () =>{
        if(onClose){
            onClose();
        }
    }



    return (
        <PopupBase className='popup-custom' title='积分不足' close={close}>
            <View className="column justify-content-center align-items-center mt-2">
                {
                    options.middlePage ? (
                        <>
                            <View className="w-100 column align-items-center">
                                <Image className="icon-img" src={imageUrl('stamina_icon')} />
                                <View className="font-20 mt-2 font-bold">无法答题，积分不足</View>
                                <View className="font-16 mt-05 gray-6">每次答题需消耗
                                    <Text className="font-red">-{siteInfo.deductionPoint}</Text>积分
                                </View>
                            </View>
                            <View className="px-2 w-100 mt-3">
                                <View className="btn btn-red w-100">免费领取积分</View>
                            </View>
                        </>
                    ) : (
                        <>
                            <View className="row align-items-end icon ml-05">
                                <Image className="icon-img" src={imageUrl('stamina_icon')}/>
                                <Text className="font-24 font-bold num">{siteInfo.browseVideoRewardPoint}</Text>
                            </View>
                            {
                                sh ? (
                                    <View
                                        className="row flex-nowrap justify-content-center align-items-center mt-1 banner-ad">
                                        <View className="row justify-content-center align-items-center no-ad">
                                            <View className="row justify-content-center align-items-center gray-8 no-ad-btn" >
                                                <View className="iconfont icon-play font-red font-22 mr-1" />
                                                <Text className="font-18 font-red">观看视频领取</Text>
                                            </View>
                                        </View>
                                    </View>
                                ) : (
                                    <>
                                        <View className="align-center font-14 mt-2 font-red">
                                            <Text className="data-v-06937e6b">{'↓↓点击下图体验 '+bannerInterval + '秒 即可领取↓↓'}</Text>
                                        </View>
                                        <View className="row flex-nowrap justify-content-center align-items-center banner-ad">
                                            {
                                                siteInfo.bannerAdId ? (
                                                    <View className="w-100 ad">
                                                        <ad className="data-v-06937e6b" unitId={siteInfo.bannerAdId} />
                                                    </View>
                                                ) : null
                                            }
                                            {
                                                showNoAd ? (
                                                    <View className="row justify-content-center align-items-center no-ad">
                                                        {
                                                            showShare  ? (
                                                                <View className="row justify-content-center align-items-center gray-8 no-ad-btn">
                                                                    <View className="iconfont icon-share font-red font-22 mr-1" />
                                                                    <Text className="font-18 font-red">分享到群或好友</Text>
                                                                    <Button className="btn-transparent" data-popup="showNoStamina" openType="share" />
                                                                </View>
                                                            ) : (
                                                                <View className="row justify-content-center align-items-center gray-8 no-ad-btn">
                                                                    <View className="iconfont icon-play font-red font-22 mr-1" />
                                                                    <Text className="font-18 font-red">观看视频领取</Text>
                                                                </View>
                                                            )
                                                        }
                                                    </View>
                                                ) : null
                                            }
                                        </View>
                                    </>
                                )
                            }
                        </>
                    )
                }
            </View>
        </PopupBase>
    );
};

export default NoStamina;