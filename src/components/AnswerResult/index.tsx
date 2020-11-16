import * as React from 'react';
import { View, Text,Image } from 'remax/one';
import {Button} from 'remax/wechat';
import bg from '@/static/images/common/redEnvelope/bg.png';
import btn_hb from '@/static/images/common/redEnvelope/btn_hb.png'
import light from '@/static/images/common/redEnvelope/light.png';
import open_share from '@/static/images/common/redEnvelope/open_share.png';
import open from '@/static/images/common/redEnvelope/open.png';
import redEnvelopeBg from '@/static/images/account/redEnvelopeBg.png';
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import CustomNavigation from "@/components/CustomNavigation";
import PopupBase from "@/components/PopupBase";
import PopupBottomAd from "@/components/PopupBottomAd";
import CountdownClick from "@/components/CountdownClick";

const options = {
    isDeductMoney:true,
    deductMoney:true,
    banner:'video',
    receiveType:'grid'
}
const sh = true;
const opening=true;
const countdown = 3 ;
const bannerInterval = 12;
const bannerID = '1234';
const showNoAd = true;
const showShare = true;
const AnswerResult= () => {

    return (
        <View className="column justify-content-center align-items-center popup data-v-389d38fc">
            {
                options.receiveType === 'share' ? (
                    <View className="popup-main data-v-389d38fc">
                        <Image className="bg data-v-389d38fc" src={bg} />
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
                                            src={btn_hb}
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
                                                src={open_share}
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
                                !countdown ? (<View className="iconfont icon-close font-20 close data-v-389d38fc" />) : null
                            }

                        </View>
                        {
                            !sh ? (
                                <Image
                                    className="light data-v-389d38fc"
                                    src={light}
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
                        <Image className="bg data-v-389d38fc" src={bg} />
                        <View className="column justify-content-between align-items-center content data-v-389d38fc">
                            <View className="column font-write align-center data-v-389d38fc">
                                <Text className="font-22 mt-5 t2 data-v-389d38fc">现金红包 x1</Text>
                                <Text className="font-14 font-write t3 hb-tip data-v-389d38fc">可提现</Text>
                            </View>
                            {
                                sh ? (
                                    <>
                                        <Image className="mt-1 open2 data-v-389d38fc" src={btn_hb} style={{width:410,height:104}} />
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
                                            src={open}
                                        />
                                        <Text className="font-12 font-write mb-2 t3 hb-tip data-v-389d38fc">观看完整视频领取红包</Text>
                                    </>
                                )
                            }
                            {
                                !countdown ? (<View className="iconfont icon-close font-20 close data-v-389d38fc" />) : null
                            }

                        </View>
                        {
                            !sh ? (<Image className="light data-v-389d38fc" src={light} style={{width:350,height:350}} />) : null
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
                            <Image className="my-2 red-envelope data-v-389d38fc" src={redEnvelopeBg} style={{width:150,height:188}} />
                            <Image className="light data-v-389d38fc" src={light} />
                        </View>
                        <View className="align-center font-write font-18 t2 zoom data-v-389d38fc">
                            {
                                !sh ? (
                                    <Text className="data-v-389d38fc">{'↓↓点击下图体验 '+bannerInterval + '秒 即可领取↓↓'}</Text>
                                ) : null
                            }
                        </View>
                        <View
                            className="row flex-nowrap justify-content-center align-items-center banner-ad data-v-389d38fc">
                            <View className="w-100 px-1 ad data-v-389d38fc">
                                <ad className="data-v-389d38fc" unitId={bannerID} />
                            </View>
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
                            !countdown ? (<View className="iconfont icon-close font-20 close data-v-389d38fc" />) : null
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
                        <View className="row flex-nowrap justify-content-center align-items-center w-100 video-banner data-v-389d38fc">
                            <ad adTheme="white" adType="video" className="data-v-389d38fc" unitId="adunit-808fd06361778e76" />
                        </View>
                        {
                            !countdown ? (
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
                            <Image className="my-2 red-envelope data-v-389d38fc" src={redEnvelopeBg} style={{width:150,height:188}} />
                            <Image className="light data-v-389d38fc" src={{light}} />
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
                                    <ad adTheme="white" adType="grid" className="data-v-389d38fc" gridCount="5" gridOpacity="1" unitId="adunit-108924707d706392" />
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
                            !countdown ? (<View className="iconfont icon-close font-20 close data-v-389d38fc"/>) : null
                        }
                    </View>
                ) : null
            }
            <PopupBottomAd />
            <CountdownClick />
        </View>

    );
};

export default AnswerResult;