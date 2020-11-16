import * as React from 'react';
import { View, Image, Text} from 'remax/one';
import {ScrollView} from 'remax/wechat';
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import CustomNavigation from "@/components/CustomNavigation";
import {head, icon_red_envelope, stamina} from "@/components/ImageComponent";
import {imageUrl} from "@/util/utils";
const accountInfo= {
    key:3,
}
const question = {
    rightId:3,
}
const sh = 3;
const task = {
    max:8,
    current:5,
    is_complete:true,
}
const g2 = 20;
const testMode = true;
const AppList= () => {
    const [g0,setG0] = useState<number>(3);
    const [listData,setListData] = useState<any[]>([]);
    return (
        <View className="h-100 column bg-gray-2 page data-v-30b63fc7">
            <CustomNavigation />
            <View className="column flex-2 data-v-30b63fc7" style={{marginBottom: g0!==-1 ? 138:98}}>
                <View className="bg-white head data-v-30b63fc7">
                    <Image className="img data-v-30b63fc7" src={imageUrl('head')} />
                    <View className="row justify-content-center align-items-center my-1 font-14 data-v-30b63fc7">
                        <Image
                            className="mr-05 data-v-30b63fc7"
                            src={imageUrl('stamina')}
                            style={{
                                width:36,
                                height:46
                            }}
                        />
                        <Text className="data-v-30b63fc7">{'体力：'+accountInfo.key ? accountInfo.key : 0 + ''}
                            {
                                testMode? (<Text className="data-v-30b63fc7">{'-'+question.rightId}</Text>) : null
                            }
                        </Text>
                        <View className="btn btn-small btn-red no-animation no-shadow ml-2 data-v-30b63fc7">立即答题</View>
                    </View>
                </View>
                {
                    listData && listData.length ? (
                        <View className="column justify-content-center align-items-center position-relative mt-1 mx-1 title data-v-30b63fc7">
                            <View className="line data-v-30b63fc7" />
                            <Text className="font font-14 gray-6 data-v-30b63fc7">试玩以下小程序领奖励</Text>
                        </View>
                    ) : null
                }
                {
                    listData&&listData.length ? (
                        <ScrollView className="flex-2 scroll-wrap data-v-30b63fc7" scrollY>
                            <View className="row flex-wrap align-content-start px-1 list data-v-30b63fc7">
                                {
                                    listData.map(item=>(
                                        <View className={classNames(
                                            'column',
                                            'justify-content-start',
                                            'align-items-center',
                                            'mt-1',
                                            'font-14',
                                            'list-item',
                                            'data-v-30b63fc7',
                                            item.g1===-1?'':'mx-1'
                                        )}
                                              key={item.id}
                                        >
                                            <Image className="mt-1 thumbnail data-v-30b63fc7" src={item.image} />
                                            <View className="gray-8 mt-05 name data-v-30b63fc7">{item.appname}</View>
                                            <View className="gray-8 data-v-30b63fc7">{'试玩'+item.duration + '秒'}</View>
                                            <View className="row justify-content-center align-items-center my-1 data-v-30b63fc7">
                                                {
                                                    item.reward_type === 'key' ? (
                                                        <>
                                                            <Image
                                                                className="data-v-30b63fc7"
                                                                src={imageUrl('stamina')}
                                                                style={{
                                                                    width:30,
                                                                    height:33
                                                                }}
                                                            />
                                                            <Text className="font-14 ml-05 data-v-30b63fc7">{'+'+item.reward_num}</Text>
                                                        </>
                                                    ) : null
                                                }
                                                {
                                                    item.reward_type === 'money' ? (
                                                        <>
                                                            <Image
                                                                className="data-v-30b63fc7"
                                                                src={imageUrl('icon_red_envelope')}
                                                                style={{
                                                                    width:30,
                                                                    height:39
                                                                }}
                                                            />
                                                            <Text className="font-14 ml-05 data-v-30b63fc7">{'+'+item.reward_num + '元'}</Text>
                                                        </>
                                                    ) : null
                                                }
                                            </View>
                                        </View>
                                    ))
                                }
                            </View>
                        </ScrollView>
                    ) : (
                        <View className="flex-2 column justify-content-center align-items-center data-v-30b63fc7">
                            <View className="btn btn-red px-2 font-write data-v-30b63fc7">
                                <View className="iconfont icon-play data-v-30b63fc7" />
                                <View className="font-16 data-v-30b63fc7">观看视频获取体力</View>
                            </View>
                        </View>
                    )
                }
                {
                    task.max&&!sh ? (
                        <View className="row justify-content-center align-items-center px-2 task data-v-30b63fc7">
                            <View className="column align-items-start mr-2 flex-2 data-v-30b63fc7">
                                {
                                   task.is_complete ? (
                                       <>
                                           <View className="progress data-v-30b63fc7">
                                               <View className="progress-bar data-v-30b63fc7" style={{width:'100%'}} />
                                           </View>
                                           <View className="font-14 font-red mt-05 align-center data-v-30b63fc7">已提现，明日可再提现。</View>
                                       </>
                                   ) : (
                                       <>
                                           <View className="progress data-v-30b63fc7">
                                               <View
                                                   className="progress-bar data-v-30b63fc7"
                                                   style={{
                                                       width:g2+'%'
                                                   }}
                                               />
                                           </View>
                                           {
                                               task.current>=task.max ? (<View className="font-14 font-red mt-05 align-center data-v-30b63fc7">已完成试玩，可以提现了</View>) : null
                                           }
                                           <View className="font-14 gray-8 mt-05 align-center data-v-30b63fc7">完成试玩
                                               <Text className="font-red font-16 data-v-30b63fc7">{task.current}</Text>
                                               个，还差
                                               <Text className="font-red font-16 data-v-30b63fc7">{task.max - task.current}</Text>
                                               个提现
                                           </View>
                                       </>
                                   )
                                }
                            </View>
                            <View className="btn btn-green btn-small no-shadow data-v-30b63fc7">去提现</View>
                        </View>
                    ) : null
                }
            </View>
        </View>
    );
};

export default AppList;