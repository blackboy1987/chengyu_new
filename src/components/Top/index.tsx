import * as React from 'react';
import { View, Text,Image } from 'remax/one';
import {Button} from 'remax/wechat';
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import {go, wxGetSystemInfoSync, wxLogin} from "@/util/wxUtils";
import {usePageEvent} from "remax/macro";
import {UserInfo} from "@/data";
import {imageUrl} from "@/util/utils";
import NoStamina from "@/components/NoStamina";
import {updateUserInfo} from "@/util/httpUtils";
import DailyTask from "@/components/DailyTask";

interface TopProps {
}

const Top:React.FC<TopProps>= ({}) => {
    const [systemInfo,setSystemInfo] = useState<{[key:string]:any}>(wxGetSystemInfoSync);
    const [sh,setSh] = useState<boolean>(false);
    const [forced,setForced] = useState<boolean>(false);
    const [hasUserInfo,setHasUserInfo] = useState<boolean>(false);
    const [canIUse,setCanIUse] = useState<boolean>(false);
    const [moneyChange,setMoneyChange] = useState<boolean>(true);
    const [userInfo,setUserInfo] = useState<UserInfo>({});
    const [showNoStamina,setShowNoStamina] = useState<boolean>(false);
    const [timer,setTimer] = useState<any>(null);
    const [showDailyTask,setShowDailyTask] = useState<boolean>(true);

    usePageEvent('onLoad',()=>{
        wxLogin((data:UserInfo)=>{
            setUserInfo(data);
        });
    });
    usePageEvent('onShow',()=>{
        if(timer){
            clearInterval(timer);
        }
        setTimer(setInterval(()=>{
            updateUserInfo(data=>{
                setUserInfo(data);
            })
        },3e3))
    });
    usePageEvent('onHide',()=>{
        if(timer){
            clearInterval(timer);
        }
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
                                src={imageUrl('common_icon_red_envelope')}
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
                    <View onTap={()=>setShowDailyTask(true)} className="column align-items-center p-1 float-task">
                        <View className="dot" />
                        <Text>每</Text>
                        <Text>日</Text>
                        <Text>提</Text>
                        <Text>现</Text>
                    </View>
                ) : null
            }
            {
                showNoStamina ? (<NoStamina onClose={()=>setShowNoStamina(false)}  />) : null
            }
            {
                showDailyTask ? (<DailyTask show />):null
            }
        </>
    );
};

export default Top;