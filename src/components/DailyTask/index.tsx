import * as React from 'react';
import {View,Text} from 'remax/one';
import {Button} from 'remax/wechat';
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import PopupBase from "@/components/PopupBase";

interface DailyTaskProps {
    show:boolean;
}

const listData = [
    {
        id:1,
        tag:'新人提现',
        description:'新人提现',
        money:3.25,
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
        g4:2,
        g5:3,
        condition_complete:true,
    }
]

const DailyTask:React.FC<DailyTaskProps>= ({show}) => {
    return (
        <PopupBase close={()=>console.log("close")}>
            <View className="column justify-content-center content">
                {
                    listData.map((item,index)=>{
                        <View
                            className={classNames(
                                'row',
                                'justify-content-between',
                                'align-items-center',
                                'p-1',
                                'bg-gray-2',
                                index?'mt-1':'',
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
                    })
                }
            </View>
        </PopupBase>
    );
};

export default DailyTask;