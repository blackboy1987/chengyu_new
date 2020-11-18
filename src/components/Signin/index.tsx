import * as React from 'react';
import {View,Text,Image} from 'remax/one';
// @ts-ignore
import classNames from 'classnames';
import './index.css';

import {imageUrl} from "@/util/utils";

interface SigninProps {

}

const options = {
    continuous_count:3,
    is_sign:false,
    awards:[
        {
            is_get:false,
            day:1,
            list:[{
                icon:'1',
                name:'哈哈'
            }],
            is_sign:false
        }
    ]
}

const Signin:React.FC<SigninProps>= ({}) => {
    return (
        <View className="column justify-content-center align-items-center popup data-v-0ef36cdb">
            <View className="column justify-content-between align-items-center popup-main data-v-0ef36cdb">
                <View className="position-relative head data-v-0ef36cdb">
                    <Image className="head-img data-v-0ef36cdb" src={imageUrl('signin_head_bg')} />
                    <View className="column justify-content-center align-items-center head-content data-v-0ef36cdb">
                        <View className="font-20 font-write font-bold data-v-0ef36cdb">每日签到</View>
                        <View className="row font-14 legend data-v-0ef36cdb">已连续签到
                            <Text className="font-bold font-16 highlight data-v-0ef36cdb">{options.continuous_count}</Text>天
                        </View>
                    </View>
                    <View className="iconfont icon-close font-20 p-1 close data-v-0ef36cdb" />
                </View>
                <View className="row flex-wrap justify-content-start align-items-center content data-v-0ef36cdb">
                    {
                        options.awards.map((item,index)=>(
                            <View
                                className={classNames(
                                    'day-item',
                                    'data-v-0ef36cdb',
                                    item.day==7||item.day==14||item.day==21||item.day==28?'super':'',
                                )}
                                key={item.day}
                            >
                                <Image className="gift data-v-0ef36cdb" src={item.list[0].icon} />
                                {
                                    item.is_get ? (<View className="border data-v-0ef36cdb" />) : null
                                }
                                <View
                                    className={classNames(
                                        'column',
                                        'justify-content-between',
                                        'txt',
                                        'data-v-0ef36cdb',
                                        item.day==7?'align-items-start pl-1':'align-items-center',
                                    )}
                                >
                                    <Text className="font-write font-12 t1 data-v-0ef36cdb">{'第'+item.day + '天'}</Text>
                                    <Text className="font-write font-12 t2 data-v-0ef36cdb">{item.list[0].name}</Text>
                                </View>
                                {
                                    item.is_get ? (<View className="mask data-v-0ef36cdb"/>) : null
                                }
                                {
                                    item.is_get? (<Image className="success data-v-0ef36cdb" src={imageUrl('signin_icon_success')} />) : null
                                }
                            </View>
                        ))
                    }

                </View>
                <View className="{{['row justify-content-center align-items-center mt-2 mb-2 btn btn-red data-v-0ef36cdb',options.is_sign?'disable':'animation']}}">
                    <Text className="data-v-0ef36cdb">{options.is_sign ? '已签到' : '立即签到'}</Text>
                </View>
            </View>
        </View>
    );
};

export default Signin;