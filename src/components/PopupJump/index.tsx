import * as React from 'react';
import {View,Text,Image} from 'remax/one';
import {Swiper,SwiperItem} from 'remax/wechat';
import './index.css';
import {useState} from "react";

interface PopupJumpProps {

}

const options = {
    step_images:[
        {
            image:'1',
        },
        {
            image:'2',
        },
        {
            image:'3',
        },
    ],
    duration:10,
}

const PopupJump:React.FC<PopupJumpProps>= () => {

    const [currentIndex,setCurrentText] = useState<number>(0);

    return (
        <View className="column justify-content-center align-items-center popup popup-jump data-v-6fb396e0">
            <View className="column justify-content-between align-items-center px-2 popup-main data-v-6fb396e0">
                <Text className="font-18 font-bold mt-2 data-v-6fb396e0">试玩领体力</Text>
                <View className="font-14 py-1 w-100 data-v-6fb396e0">
                    <Swiper autoplay className="swiper data-v-6fb396e0" current={currentIndex} duration={300}>
                        {
                            options.step_images.map((item,index)=>(
                                <SwiperItem className="data-v-6fb396e0" key={index}>
                                    <Image
                                        className="data-v-6fb396e0"
                                        mode="aspectFill"
                                        src={item.image}
                                        style={{
                                            width:600,
                                            height:900
                                        }}
                                    />
                                </SwiperItem>
                            ))
                        }
                    </Swiper>
                </View>
                <View className="btn btn-red w-100 data-v-6fb396e0">{'根据要求，试玩'+options.duration + '秒'}</View>
                <View className="row justify-content-center align-items-center font-12 gray-7 mt-1 mb-2 data-v-6fb396e0">
                    <view className="iconfont icon-tips data-v-6fb396e0" />
                    不按照要求，将无法获得奖励
                </View>
                <View className="iconfont icon-close font-20 gray-6 p-1 close data-v-6fb396e0" />
            </View>
        </View>
    );
};

export default PopupJump;