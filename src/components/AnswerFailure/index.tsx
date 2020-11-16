import * as React from 'react';
import { View, Text,Image } from 'remax/one';

import './index.css';
import PopupBottomAd from "@/components/PopupBottomAd";
import {redEnvelope_bg, redEnvelope_failure} from "@/components/ImageComponent";
import {siteInfo} from "@/util/httpUtils";
import {SiteInfo} from "@/data";

interface AnswerFailureProps {
    onClose:()=>void;
}

interface AnswerFailureState {
    siteInfo:SiteInfo;
}

class AnswerFailure extends React.Component<AnswerFailureProps, AnswerFailureState> {

    state: AnswerFailureState = {
        siteInfo:{}
    }

    componentDidMount() {
        const root = this;
        siteInfo((res:SiteInfo)=>{
            root.setState({
                siteInfo:res
            });
        })
    }

    render(){
        const {onClose} = this.props;
        const {siteInfo} = this.state;
        return (
            <View className="column justify-content-center align-items-center popup">
                <View className="popup-main">
                    <Image className="bg" src={redEnvelope_bg} />
                    <View className="column justify-content-between align-items-center content">
                        <View className="column font-write align-center">
                            <Text className="font-22 mt-5 t2">答题失败</Text>
                            {
                                siteInfo.deductionType==1&&siteInfo.deductionMoney&&siteInfo.deductionMoney>0 ? (
                                    <Text className="font-14 t2">{'扣除金额 -'+siteInfo.deductionMoney + '元'}</Text>
                                ) : null
                            }
                            {
                                siteInfo.deductionType==0&&siteInfo.deductionPoint&&siteInfo.deductionPoint>0 ? (
                                    <Text className="font-14 t2">{'扣除积分 -'+siteInfo.deductionPoint}</Text>
                                ) : null
                            }
                        </View>
                        <View className="mt-1 failure">
                            <Image
                                src={redEnvelope_failure}
                                style={{
                                    width:166,
                                    height:166
                                }}
                            />
                        </View>
                        <View className="btn btn-yellow btn-again mb-2" onTap={onClose}>再次挑战</View>
                        <View className="iconfont icon-close font-20 p-1 close" onTap={onClose} />
                    </View>
                </View>
                <PopupBottomAd />
            </View>
        )
    }
}

export default AnswerFailure;