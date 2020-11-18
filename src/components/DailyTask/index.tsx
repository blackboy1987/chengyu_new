import * as React from 'react';
import {View,Text} from 'remax/one';
import {Button} from 'remax/wechat';
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import PopupBase from "@/components/PopupBase";
import {useState} from "react";

interface DailyTaskProps {
    show:boolean;
}

const defaultListData = [
    {
        id:1,
        tag:'连续答对20题目',
        description:'连续答对20题',
        money:0.3,
        g0:-1,
        g1:10,
        g2:10,
        g3:10,
        total_answer_true:5,
        current_answer_true:2,
        ad_click_num:3,
        current_ad_click_num:2,
        invite_number:2,
        current_invite_number:5,
        g4:-1,
        g5:-1,
        condition_complete:true,
    },
    {
        id:1,
        tag:'连续答对20题目',
        description:'每天邀请3位好友',
        money:0.6,
        g0:-1,
        g1:10,
        g2:10,
        g3:10,
        total_answer_true:3,
        current_answer_true:0,
        ad_click_num:3,
        current_ad_click_num:2,
        invite_number:2,
        current_invite_number:5,
        g4:-1,
        g5:0,
        condition_complete:false,
    },
    {
        id:1,
        tag:'连续答对20题目',
        description:'试玩15款小程序',
        money:0.3,
        g0:-1,
        g1:10,
        g2:10,
        g3:10,
        total_answer_true:3,
        current_answer_true:0,
        ad_click_num:3,
        current_ad_click_num:2,
        invite_number:2,
        current_invite_number:5,
        g4:-1,
        g5:0,
        condition_complete:false,
    },
    {
        id:1,
        tag:'连续答对20题目',
        description:'签到3天，共36题',
        money:0.3,
        g0:-1,
        g1:10,
        g2:10,
        g3:10,
        total_answer_true:3,
        current_answer_true:0,
        ad_click_num:3,
        current_ad_click_num:2,
        invite_number:2,
        current_invite_number:5,
        g4:-1,
        g5:-1,
        condition_complete:false,
    },
    {
        id:1,
        tag:'连续答对20题目',
        description:'签到7天，共100题',
        money:0.5,
        g0:-1,
        g1:10,
        g2:10,
        g3:10,
        total_answer_true:3,
        current_answer_true:0,
        ad_click_num:3,
        current_ad_click_num:2,
        invite_number:2,
        current_invite_number:5,
        g4:-1,
        g5:-1,
        condition_complete:false,
    }
]

const DailyTask:React.FC<DailyTaskProps>= ({show}) => {

    const [listData,setListData] = useState<any[]>(defaultListData);


    return (
        <PopupBase title='每日提现' button='custom' close={()=>console.log("close")}>
            <View className="column justify-content-center content">
                {
                    listData.map((item,index)=>(
                        <View
                            className={classNames(
                                'row',
                                'justify-content-between',
                                'align-items-center',
                                'p-1',
                                'bg-gray-2',
                                'mt-1'
                            )}
                            key={item.id}>
                            <View className="column justify-content-start flex-2 mr-2">
                                <Text className="font-16">{(item.tag === '新人提现' ? '新人提现' : item.description) + ''}
                                    <Text className="font-red ml-05">{item.money}</Text>
                                    元
                                </Text>
                                {
                                    item.g0 === -1 ? (
                                        <View className="row justify-content-between align-items-center mt-05">
                                            <View className="progress bg-gray-4">
                                                {
                                                    item.total_answer_true ? (<View className="progress-bar" style={{width:`${item.g1}%`}} />) : (
                                                        <>
                                                            {
                                                                item.ad_click_num ? (<View className="progress-bar" style={{width:`${item.g2}%`}} />) : (
                                                                    <>
                                                                        {
                                                                            item.invite_number ? (<View className="progress-bar" style={{width:`${item.g3}%`}} />  ) : null
                                                                        }
                                                                    </>
                                                                )
                                                            }
                                                        </>
                                                    )
                                                }
                                            </View>
                                            {
                                                item.total_answer_true ? (
                                                    <View className="font-12 ml-05 progress-value">{item.current_answer_true + '/' + item.total_answer_true}</View>
                                                ): (
                                                    <>
                                                        {
                                                            item.ad_click_num ? (<View className="font-12 ml-05 progress-value">{item.current_ad_click_num + '/' + item.ad_click_num}</View>) : (
                                                                <>
                                                                    {
                                                                        item.invite_number ? (<View className="font-12 ml-05 progress-value">{item.current_invite_number + '/' + item.invite_number}</View>): null
                                                                    }

                                                                </>
                                                            )
                                                        }
                                                    </>
                                                )
                                            }
                                        </View>
                                    ) : null
                                }
                            </View>
                            {
                                item.condition_complete ? (
                                    <View className="btn btn-small btn-red mt-05">提现</View>
                                ) : (
                                    <>
                                        {
                                            item.g4 !==-1 ? (
                                                <View className="btn btn-small btn-orange mt-05 position-relative" >邀请
                                                    <Button className="btn-transparent" openType="share" />
                                                </View>
                                            ) : (
                                                <>
                                                    {
                                                        item.g5!==-1 ? (
                                                            <View className="btn btn-small btn-green mt-05 position-relative">试玩</View>
                                                        ) : (
                                                            <View className="btn btn-small btn-red mt-05">答题</View>
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                    </>
                                )
                            }
                        </View>
                    ))
                }
            </View>
        </PopupBase>
    );
};

export default DailyTask;