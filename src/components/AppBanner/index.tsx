import * as React from 'react';
import { View, Image, } from 'remax/one';
import {ScrollView} from 'remax/wechat';
import './index.css';
import {useState} from "react";
const AppBanner= () => {

    const [listData,setListData] = useState<any[]>([]);
    return (
        <ScrollView className="column scroll-view app-list" style={{height:170}}
                    scrollWithAnimation scrollX>
            <View className="row flex-nowrap py-1 content" style={{width:'200%'}}>
                {
                    listData.map((item,index)=>(
                        <View key={index} className="row justify-content-center align-items-center font-14 app-list-item" >
                            <View className="w-100 column justify-content-center align-items-center">
                                <Image className="thumbnail" src={item.image} />
                                <view className="mt-05 font-12 name">{item.appname}</view>
                            </View>
                        </View>
                    ))
                }

            </View>
        </ScrollView>
    );
};

export default AppBanner;