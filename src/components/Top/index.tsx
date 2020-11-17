import * as React from 'react';
import { View, Text,Image } from 'remax/one';
import {Button} from 'remax/wechat';

// @ts-ignore
import classNames from 'classnames';
import './index.css';
import {useState} from "react";

import {btn_increase, btn_withdraw, icon_red_envelope, stamina} from "@/components/ImageComponent";
import {go, wxGetSystemInfoSync, wxLogin} from "@/util/wxUtils";
import {usePageEvent} from "remax/macro";
import {UserInfo} from "@/data";
import {imageUrl} from "@/util/utils";
import NoStamina from "@/components/NoStamina";


const Top= () => {
    const [systemInfo,setSystemInfo] = useState<{[key:string]:any}>(wxGetSystemInfoSync);
    const [sh,setSh] = useState<boolean>(false);
    const [forced,setForced] = useState<boolean>(false);
    const [hasUserInfo,setHasUserInfo] = useState<boolean>(false);
    const [canIUse,setCanIUse] = useState<boolean>(false);
    const [moneyChange,setMoneyChange] = useState<boolean>(true);
    const [userInfo,setUserInfo] = useState<UserInfo>({});
    const [showNoStamina,setShowNoStamina] = useState<boolean>(false);

    usePageEvent('onLoad',()=>{
        wxLogin((data:UserInfo)=>{
            setUserInfo(data);
        });
    });
    return (
        <>
            {
                !sh&&forced ? (<Button className="btn-transparent" style={{zIndex:999}} />) : null
            }
            {
                !hasUserInfo&&canIUse? (<Button className="btn-transparent" openType='getUserInfo' />) : null
            }
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop:systemInfo.statusBarHeight*systemInfo.devicePixelRatio
                }}
            >
                {
                    !sh ? (
                        <View className="row align-items-center ml-15 head-item">
                            <Image
                                src={imageUrl('icon_red_envelope')}
                                style={{
                                    width:61,
                                    height:68
                                }}
                            />
                            <View className="row justify-content-between align-items-center head-item-value">
                                <View
                                    className={classNames(
                                        'font-14',
                                        'align-right',
                                        'money',
                                        moneyChange ? 'animation':'',
                                    )}>{userInfo.money ? userInfo.money + '元' : ''}</View>
                                <Image
                                    onTap={()=>go("/pages/account/index")}
                                    className="ml-05"
                                    src={imageUrl('btn_withdraw')}
                                    style={{
                                        width:99,
                                        height:52
                                    }}
                                />
                            </View>
                        </View>
                    ) : null
                }
                <View className="row align-items-center ml-15 head-item">
                    <Image
                        src={imageUrl('stamina')}
                        style={{
                            width:52,
                            height:67
                        }}
                    />
                    <View className="row justify-content-between align-items-center head-item-value2">
                        <Text className="font-14">{userInfo.point}</Text>
                        <Image
                            onTap={()=>setShowNoStamina(true)}
                            className="ml-05"
                            src={imageUrl('btn_increase')}
                            style={{
                                width:52,
                                height:52
                            }}
                        />
                    </View>
                </View>
            </View>
            {
                !sh ? (
                    <View className="column align-items-center p-1 float-task">
                        <View className="dot" />
                        <Text>每</Text>
                        <Text>日</Text>
                        <Text>提</Text>
                        <Text>现</Text>
                    </View>
                ) : null
            }
            {
                showNoStamina ? (<NoStamina close={()=>setShowNoStamina(false)}  />) : null
            }
        </>
    );
};

export default Top;