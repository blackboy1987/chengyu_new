import * as React from 'react';
import { View, Text,Image } from 'remax/one';
import {Button} from 'remax/wechat';
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import {getStorage, go, setStorage, wxGetSystemInfoSync, wxLogin} from "@/util/wxUtils";
import {usePageEvent} from "remax/macro";
import {useNativeEffect} from 'remax';
import {SiteInfo, UserInfo} from "@/data";
import {imageUrl} from "@/util/utils";
import NoStamina from "@/components/NoStamina";
import {updateUserInfo} from "@/util/httpUtils";
import DailyTask from "@/components/DailyTask";
import RedEnvelope from "@/components/RedEnvelope";
import ReceiveSuccess from "@/components/ReceiveSuccess";
import Award from "@/components/Award";

interface TopProps {
}
let oldMoney = 0;
let oldPoint = 0;
const systemInfo = wxGetSystemInfoSync();
const siteInfo:SiteInfo = getStorage('siteInfo');

const Top:React.FC<TopProps>= ({}) => {
    const [forced,setForced] = useState<boolean>(false);
    const [hasUserInfo,setHasUserInfo] = useState<boolean>(false);
    const [canIUse,setCanIUse] = useState<boolean>(false);
    const [money,setMoney] = useState<number>(0);
    const [moneyChange,setMoneyChange] = useState<boolean>(false);
    const [userInfo,setUserInfo] = useState<UserInfo>({});
    const [showNoStamina,setShowNoStamina] = useState<boolean>(false);
    const [timer,setTimer] = useState<any>(null);
    const [showDailyTask,setShowDailyTask] = useState<boolean>(false);
    const [showRedEnvelope,setShowRedEnvelope] = useState<boolean>(true);
    const [showReceiveSuccess,setShowReceiveSuccess] = useState<boolean>(false);
    const [showAward,setShowAward] = useState<boolean>(false);
    const [redEnvelopeMoney,setRedEnvelopeMoney] = useState<number>(0);

    usePageEvent('onLoad',()=>{
        setMoneyChange(false);
        wxLogin((data:UserInfo)=>{
            setStorage('userInfo',data);
            setMoney(data.money || 0);
            setUserInfo(data);
        });
    });
    usePageEvent('onShow',()=>{
        if(timer){
            clearInterval(timer);
        }
        setTimer(setInterval(()=>{
            setMoneyChange(false);
            const userInfo = getStorage('userInfo')
            setMoney(userInfo.money || 0);
            setUserInfo(userInfo);
        },1e3))
    });
    usePageEvent('onHide',()=>{
        if(timer){
            clearInterval(timer);
        }
    });

    useNativeEffect(() => {
        setMoneyChange(true);
    }, [money])

    return (
        <>
            {
                !siteInfo.sh&&forced ? (<Button className="btn-transparent" style={{zIndex:999}} />) : null
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
                    !siteInfo.sh ? (
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
                !siteInfo.sh ? (
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
            {
                showRedEnvelope ? (<RedEnvelope type='abc' onClose={(money:number)=>{setShowRedEnvelope(false);setShowAward(true);setRedEnvelopeMoney(money)}} />) : null
            }
            {
                showAward ? (<Award money={redEnvelopeMoney} onClose={(money?:number)=>setShowAward(false)} />) : null
            }

        </>
    );
};

export default Top;