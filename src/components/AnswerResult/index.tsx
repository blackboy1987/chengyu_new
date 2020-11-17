import * as React from 'react';
import { View, Text,Image } from 'remax/one';
import {Button} from 'remax/wechat';
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import {usePageEvent} from 'remax/macro';
import PopupBottomAd from "@/components/PopupBottomAd";
import CountdownClick from "@/components/CountdownClick";
import {imageUrl} from "@/util/utils";
import {getStorage, setStorage} from "@/util/wxUtils";
import {SiteInfo} from "@/data";

const options = {
    isDeductMoney:true,
    deductMoney:true,
    banner:'video',
    receiveType:'banner'
}
const sh = false;
const opening=true;
const showNoAd = false;
const showShare = false;

interface AnswerResultProps{
    onClose:()=>void;
    onSuccess:()=>void;
}

const AnswerResult:React.FC<AnswerResultProps>= ({onClose,onSuccess}) => {
    const [siteInfo,setSiteInfo] = useState<SiteInfo>(getStorage('siteInfo'));
    const [bannerInterval,setBannerInterval] = useState<number>(10);
    const [countDown,setCountDown] = useState<number>(0);
    usePageEvent('onShow',()=>{
        console.log("onShow");
        const newCountDown= getStorage('countDown') || 0;
        setCountDown(newCountDown);
        console.log(newCountDown,bannerInterval);
        if(newCountDown>=bannerInterval){
            // open
            onSuccess();
        }else{
            // tips
            wx.showToast({
                icon: "none",
                title: "必须浏览"+bannerInterval+"秒以上！",
                duration: 2e3
            });
            setCountDown(0);
            setStorage('countDown',0);
            onClose();
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
        wx.showToast({
            icon: "none",
            title: "观看广告领取红包，才算连续答题哦！",
            duration: 2e3
        })
        wx.showModal({
            content: "观看广告领取红包，才算连续答题哦！",
            showCancel: false
        })
        if(onClose){
            onClose();
        }
    }

    return (
        <View className="column justify-content-center align-items-center popup data-v-389d38fc">
            {
                options.receiveType === 'share' ? (
                    <View className="popup-main data-v-389d38fc">
                        <Image className="bg data-v-389d38fc" src={imageUrl('bg')} />
                        <View className="column justify-content-between align-items-center content data-v-389d38fc">
                            <View className="column font-write align-center data-v-389d38fc">
                                <Text className="font-22 mt-5 t2 data-v-389d38fc">现金红包 x1</Text>
                                <Text className="font-14 font-write t3 hb-tip data-v-389d38fc">可提现</Text>
                            </View>
                            {
                                sh ? (
                                    <>
                                        <Image
                                            className="mt-1 open2 data-v-389d38fc"
                                            src={imageUrl('btn_hb')}
                                            style={{
                                                width:410,
                                                height:104
                                            }}
                                        />
                                        <Text className="font-12 font-write mb-4 t3 hb-tip data-v-389d38fc">观看完整视频领取红包</Text>
                                    </>
                                ) : (
                                    <>
                                        <View className="mt-1 share data-v-389d38fc">
                                            <Image
                                                className="data-v-389d38fc"
                                                src={imageUrl('open_share')}
                                                style={{
                                                    width:182,
                                                    height:182
                                                }}
                                            />
                                            <Button className="btn-transparent data-v-389d38fc" openType="share" />
                                        </View>
                                        <Text className="font-12 font-write mb-2 t3 hb-tip data-v-389d38fc">请分享到群或者好友</Text>
                                    </>
                                )
                            }
                            {
                                !countDown ? (<View className="iconfont icon-close font-20 close data-v-389d38fc" />) : null
                            }

                        </View>
                        {
                            !sh ? (
                                <Image
                                    className="light data-v-389d38fc"
                                    src={imageUrl('light')}
                                    style={{
                                        width:350,
                                        height:350
                                    }}
                                />
                            ) : null
                        }
                    </View>
                ) : null
            }
            {
                options.receiveType==='video' ? (
                    <View className="popup-main data-v-389d38fc">
                        <Image className="bg data-v-389d38fc" src={imageUrl('bg')} />
                        <View className="column justify-content-between align-items-center content data-v-389d38fc">
                            <View className="column font-write align-center data-v-389d38fc">
                                <Text className="font-22 mt-5 t2 data-v-389d38fc">现金红包 x1</Text>
                                <Text className="font-14 font-write t3 hb-tip data-v-389d38fc">可提现</Text>
                            </View>
                            {
                                sh ? (
                                    <>
                                        <Image className="mt-1 open2 data-v-389d38fc" src={imageUrl('btn_hb')} style={{width:410,height:104}} />
                                        <Text className="font-12 font-write mb-4 t3 hb-tip data-v-389d38fc">观看完整视频领取红包</Text>
                                    </>
                                ) : (
                                    <>
                                        <Image
                                            className={classNames(
                                                'mt-1',
                                                'open',
                                                'data-v-389d38fc',
                                                opening?'spin':''
                                            )}
                                            src={imageUrl('open')}
                                        />
                                        <Text className="font-12 font-write mb-2 t3 hb-tip data-v-389d38fc">观看完整视频领取红包</Text>
                                    </>
                                )
                            }
                            {
                                !countDown ? (<View className="iconfont icon-close font-20 close data-v-389d38fc" />) : null
                            }
                        </View>
                        {
                            !sh ? (<Image className="light data-v-389d38fc" src={imageUrl('light')} style={{width:350,height:350}} />) : null
                        }

                    </View>
                ) : null
            }
            {
                options.receiveType === 'banner' ? (
                    <View className="popup-main banner data-v-389d38fc">
                        <View className="column font-write align-center data-v-389d38fc">
                            <Text className="font-22 mt-3 t2 data-v-389d38fc">现金红包 x1</Text>
                            <Text className="font-14 font-write t3 hb-tip data-v-389d38fc">可提现</Text>
                        </View>
                        <View
                            className="column justify-content-center align-items-center banner-content data-v-389d38fc">
                            <Image className="my-2 red-envelope data-v-389d38fc" src={imageUrl('redEnvelopeBg')} style={{width:150,height:188}} />
                            <Image className="light data-v-389d38fc" src={imageUrl('light')} />
                        </View>
                        <View className="align-center font-write font-18 t2 zoom data-v-389d38fc">
                            {
                                !sh ? (
                                    <Text className="data-v-389d38fc">{'↓↓点击下图体验 '+bannerInterval + '秒 即可领取↓↓'}</Text>
                                ) : null
                            }
                        </View>
                        <View className="row flex-nowrap justify-content-center align-items-center banner-ad data-v-389d38fc">
                            {
                                siteInfo.bannerAdId ? (
                                    <View className="w-100 px-1 ad data-v-389d38fc">
                                        <ad className="data-v-389d38fc" unitId={siteInfo.bannerAdId} />
                                    </View>
                                ) : null
                            }
                            {
                                showNoAd ? (
                                    <View className="row justify-content-center align-items-center no-ad data-v-389d38fc">
                                        {
                                            showShare ? (
                                                <View
                                                    className="row justify-content-center align-items-center gray-8 no-ad-btn data-v-389d38fc">
                                                    <View className="iconfont icon-share font-red font-22 mr-1 data-v-389d38fc" />
                                                    <Text className="font-18 font-red data-v-389d38fc">分享到群或好友</Text>
                                                    <Button className="btn-transparent data-v-389d38fc" openType="share" />
                                                </View>
                                            ) : (
                                                <View className="row justify-content-center align-items-center gray-8 no-ad-btn data-v-389d38fc">
                                                    <View className="iconfont icon-play font-red font-22 mr-1 data-v-389d38fc" />
                                                    <Text className="font-18 font-red data-v-389d38fc">观看视频领取</Text>
                                                </View>
                                            )
                                        }
                                    </View>
                                ) : null
                            }
                        </View>
                        {
                            !countDown ? (<View className="iconfont icon-close font-20 close data-v-389d38fc" onTap={close} />) : (<View className="iconfont icon-close font-20 close data-v-389d38fc" onTap={close} />)
                        }
                    </View>
                ) : null
            }
            {
                options.receiveType === 'videoBanner' ? (
                    <View className="popup-main videoBanner data-v-389d38fc">
                        <View className="column font-write align-center data-v-389d38fc">
                            <Text className="font-22 mt-3 t2 data-v-389d38fc">现金红包 x1</Text>
                            <Text className="font-14 font-write t3 hb-tip data-v-389d38fc">可提现</Text>
                        </View>
                        <View className="align-center font-write font-18 mt-2 t2 zoom data-v-389d38fc">
                            {
                                !sh ? (
                                    <Text className="data-v-389d38fc">{'↓↓点击下图体验 '+bannerInterval + '秒 即可领取↓↓'}</Text>
                                ) : null
                            }
                        </View>
                        {
                            siteInfo.videoAdId ? (
                                <View className="row flex-nowrap justify-content-center align-items-center w-100 video-banner data-v-389d38fc">
                                    <ad adTheme="white" adType="video" className="data-v-389d38fc" unitId={siteInfo.videoAdId} />
                                </View>
                            ) : null
                        }

                        {
                            !countDown ? (
                                <View className="iconfont icon-close font-20 close data-v-389d38fc"  />
                            ) : null
                        }

                    </View>
                ) : null
            }
            {
                options.receiveType === 'grid' ? (
                    <View className="popup-main gridAd data-v-389d38fc">
                        <View className="column font-write align-center data-v-389d38fc">
                            <Text className="font-22 mt-3 t2 data-v-389d38fc">现金红包 x1</Text>
                            <Text className="font-14 font-write t3 hb-tip data-v-389d38fc">可提现</Text>
                        </View>
                        <View className="column justify-content-center align-items-center banner-content data-v-389d38fc">
                            <Image className="my-2 red-envelope data-v-389d38fc" src={imageUrl('redEnvelopeBg')} style={{width:150,height:188}} />
                            <Image className="light data-v-389d38fc" src={imageUrl('light')} />
                        </View>
                        <View className="align-center font-write font-18 mt-2 t2 zoom data-v-389d38fc">
                            {
                                !sh ? (
                                    <Text className="data-v-389d38fc">{'↓↓点击下图体验 '+bannerInterval + '秒 即可领取↓↓'}</Text>
                                ) : null
                            }
                        </View>
                        <View className="row flex-nowrap justify-content-center align-items-center w-100 bg-white pt-1 grid data-v-389d38fc">
                            <View className="w-100 grid-wrap position-relative data-v-389d38fc">
                                <View className="w-100  data-v-389d38fc" style={{marginTop:-60,zIndex:2,position:'absolute',left:0,top:0}}>
                                    {
                                        siteInfo.gridAdId ? (<ad adTheme="white" adType="grid" className="data-v-389d38fc" gridCount="5" gridOpacity="1" unitId={siteInfo.gridAdId} />) : null
                                    }
                                </View>
                                {
                                    showNoAd ? (
                                        <View className="row justify-content-center align-items-center no-ad data-v-389d38fc" style={{top:-30}}>
                                            {
                                                showShare ? (
                                                    <View className="row justify-content-center align-items-center gray-8 no-ad-btn data-v-389d38fc">
                                                        <View className="iconfont icon-share font-red font-22 mr-1 data-v-389d38fc" />
                                                        <Text className="font-18 font-red data-v-389d38fc">分享到群或好友</Text>
                                                        <Button className="btn-transparent data-v-389d38fc" data-popup="noAd" openType="share" />
                                                    </View>
                                                ) : (
                                                    <View className="row justify-content-center align-items-center gray-8 no-ad-btn data-v-389d38fc">
                                                        <View className="iconfont icon-play font-red font-22 mr-1 data-v-389d38fc" />
                                                        <Text className="font-18 font-red data-v-389d38fc">观看视频领取</Text>
                                                    </View>
                                                )
                                            }
                                        </View>
                                    ) : null
                                }
                            </View>
                        </View>
                        {
                            !countDown ? (<View className="iconfont icon-close font-20 close data-v-389d38fc"/>) : null
                        }
                    </View>
                ) : null
            }
            <PopupBottomAd show={true} />
            <CountdownClick />
        </View>

    );
};

export default AnswerResult;