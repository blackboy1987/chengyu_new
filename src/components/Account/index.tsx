import * as React from 'react';
import { View, Text,Image } from 'remax/one';
import {ScrollView} from 'remax/wechat';
import redEnvelopeBg from '@/static/images/account/redEnvelopeBg.png';
import light from '../../static/images/common/redEnvelope/light.png'
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import CustomNavigation from "@/components/CustomNavigation";
import PopupBase from "@/components/PopupBase";

const defaultItem={
        condition_complete:false,
        tag:'每日提现',
        fail_result:'条件未达到，连续答对3题目',
    };

const Account= () => {
    const [systemInfo,setSystemInfo] = useState<{[key:string]:any}>(wx.getSystemInfoSync());
    const [g0,setG0] = useState<number>(-1);
    const [money,setMoney] = useState<number>(2.33);
    const [listData,setListData] = useState<any[]>([
        {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }, {
            active:true,
            tag_bgcolor:'red',
            description:'连续答对6题',
            received:false,
            money:2.23,
            tag:'新人提现',
        }
    ]);
    const [defaultItem,setDefaultItem] = useState<{[key:string]:any}>({
        condition_complete:false,
        tag:'每日提现',
        fail_result:'条件未达到，连续答对3题目',
    })
    const [invalid_user,setInvalid_user] = useState<boolean>(false);
    const [showWithdrawTip,setShowWithdrawTip] = useState<boolean>(true);
    return (
        <View className="h-100 column page data-v-acc4b046">
            <CustomNavigation />
            <View className="column flex-2 align-items-center px-15 data-v-acc4b046" style={{marginBottom: g0!==-1?138:98}}>
                <View className="row justify-content-between align-items-end px-2 py-2 w-100 summary data-v-acc4b046">
                    <View className="column font-write data-v-acc4b046">
                        <Text className="font-14 title data-v-acc4b046">可提现金额</Text>
                        <View className="row align-items-end font-30 font-bold data-v-acc4b046">{money}
                            <Text className="font-14 ml-05 font-normal data-v-acc4b046" style={{marginBottom:14}}>元</Text>
                        </View>
                    </View>
                    <View className="data-v-acc4b046">
                        <View className="btn btn-small btn-record mb-05 data-v-acc4b046">现金记录</View>
                    </View>
                </View>
                <ScrollView className=" flex-2 money data-v-acc4b046" style={{height:(listData.length/2)*84}} scrollY>
                    <View className="row flex-wrap justify-content-between data-v-acc4b046">
                        {
                            systemInfo.statusBarHeight>20 ? (
                                <>
                                    {
                                        listData.map((item,index)=>{
                                            if(!item.received){
                                                return (
                                                    <View
                                                        className={classNames(
                                                            'money-item',
                                                            'mt-15',
                                                            'data-v-acc4b046',
                                                            item.active&&item.tag_bgcolor?'active2':item.active&&!item.tag_bgcolor?'active':''
                                                        )}
                                                        data-des={item.description} key={index}
                                                    >
                                                        <View className="font-20 font-bold data-v-acc4b046">{item.money + '元'}</View>
                                                        <View className="font-12 gray-6 des align-center data-v-acc4b046">{item.description}</View>
                                                        <View className="slogan data-v-acc4b046" style={{backgroundColor:item.tag_bgcolor}}>{item.tag}</View>
                                                    </View>
                                                )
                                            }
                                            return null
                                        })
                                    }
                                </>
                            ) : (
                                <>
                                    {
                                        listData.map((item,index)=>{
                                            if(!item.received){
                                                return (
                                                    <View
                                                        className={classNames(
                                                            'money-item',
                                                            'mt-1',
                                                            'data-v-acc4b046',
                                                            item.active&&item.tag_bgcolor?'active2':item.active&&!item.tag_bgcolor?'active':''
                                                        )}
                                                        data-des="{{item.description}}" key={index}
                                                    >
                                                        <View className="font-20 font-bold data-v-acc4b046">{item.money + '元'}</View>
                                                        <View className="font-12 gray-6 des align-center data-v-acc4b046">{item.description}</View>
                                                        <View className="slogan data-v-acc4b046" style={{backgroundColor:item.tag_bgcolor}}>{item.tag}</View>
                                                    </View>
                                                )
                                            }
                                            return null
                                        })
                                    }
                                </>
                            )
                        }
                    </View>
                </ScrollView>
                {
                    invalid_user&&defaultItem.tag==='每日提' ? (
                        <View className="py-1 money-des font-16 w-100 align-center mt-1 data-v-acc4b046">每日答题红包已抢完，明日再来！</View>
                    ) : (
                        <View className="py-1 money-des font-16 w-100 align-center mt-1 data-v-acc4b046">{defaultItem.fail_result}</View>
                    )
                }
                <View className="data-v-acc4b046" style={{marginBottom:138}}>
                {
                    defaultItem.condition_complete&&!invalid_user ? (
                        <View className="btn btn-withdraw btn-green data-v-acc4b046">立即提现</View>
                    ) : (
                        <View className="btn btn-withdraw btn-green disabled data-v-acc4b046">立即提现</View>
                    )
                }
                </View>
            </View>
            <PopupBase className="popup-success data-v-acc4b046">
                <View className="column justify-content-center align-items-center my-4 data-v-acc4b046">
                    <View className="column align-items-end position-relative red-envelope data-v-acc4b046">
                        <Image className="red-envelope-bg data-v-acc4b046" src={redEnvelopeBg} />
                        {
                            defaultItem.money ? (
                                <View
                                    className="column justify-content-end align-items-center pb-1 font-16 font-write font-bold num data-v-acc4b046" >{defaultItem.money + '元'}</View>
                            ) : null
                        }

                    </View>
                </View>
                <Image
                    className="light data-v-acc4b046"
                    src={light}
                    style={{
                        width:350,
                        height:350
                    }}
                />
            </PopupBase>
            {
                showWithdrawTip ? (
                    <PopupBase className="popup-success data-v-acc4b046">
                        <View className="justify-content-center align-items-center my-4 data-v-acc4b046">
                            {
                                invalid_user&&defaultItem.tag==='每日提' ? (
                                    <View className="column justify-content-center align-items-center pb-1 font-16 data-v-acc4b046">每日答题红包已抢完，明日再来！</View>
                                ) : (
                                    <View className="column justify-content-center align-items-center pb-1 font-16 data-v-acc4b046">{defaultItem.fail_result}</View>
                                )
                            }
                        </View>
                    </PopupBase>
                ) : null
            }

        </View>
    );
};

export default Account;