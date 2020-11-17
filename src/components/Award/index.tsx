import * as React from 'react';
import {View,Text,Image} from 'remax/one';
import './index.css';
import {imageUrl} from "@/util/utils";
import PopupBottomAd from "@/components/PopupBottomAd";

interface PopupBottomAdProps {

}

const options = {
    value:3
}
const type = 'base';

const Award:React.FC<PopupBottomAdProps>= () => {
    return (
        <View className="column justify-content-center align-items-center popup data-v-1210abe0">
            <View className="column justify-content-between align-items-center popup-main data-v-1210abe0">
                <Image className="bg data-v-1210abe0" src={imageUrl('award_bg')} />
                <Image className="close data-v-1210abe0" src={imageUrl('award_close')} style={{width:44,height:44}} />
                <View className="column align-items-center content data-v-1210abe0">
                    <Text className="font-18 mt-140 data-v-1210abe0">恭喜你获得</Text>
                    <Text className="font-40 font-bold font-red mt-78 data-v-1210abe0">{options.value}
                        <Text className="font-12 font-normal small data-v-1210abe0">元</Text>
                    </Text>
                    <Text className="font-12 font-red mt-05 data-v-1210abe0">可提现</Text>
                    {
                        type==='base' ? (
                            <View className="row justify-content-center align-items-center mt-5 btn btn-yellow data-v-1210abe0">
                                <Text className="font-red font-bold data-v-1210abe0">领取红包</Text>
                            </View>
                        ) : (
                            <>
                                <View className="row justify-content-center align-items-center mt-4 pr-2 btn btn-yellow data-v-1210abe0">
                                    <View className="iconfont icon-play data-v-1210abe0" />
                                    <Text className="font-red font-bold data-v-1210abe0">超级翻倍</Text>
                                    <View className="multiple font-12 data-v-1210abe0">2倍</View>
                                </View>
                                <View >直接领取</View>
                            </>
                        )
                    }
                </View>
            </View>
            <PopupBottomAd show />
        </View>


    );
};

export default Award;