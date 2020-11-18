import * as React from 'react';
import { View, Text, Image, } from 'remax/one';
import './index.css';
import {useState} from "react";
import {go} from "@/util/wxUtils";

import Top from "@/components/Top";
import {imageUrl} from "@/util/utils";
import Ranking from "@/components/Ranking";
import RedEnvelope from "@/components/RedEnvelope";
import Signin from "@/components/Signin";
import VideoRedEnvelope from "@/components/VideoRedEnvelope";
import DailyTask from "@/components/DailyTask";
const logoUrl = 'https://bootx-chengyu.oss-cn-hangzhou.aliyuncs.com/chengyu/static/images/logo/slogan.png';

export default () => {
  const [sh,setSh] = useState<boolean>(false);
  const [broadcastData,setBroadcastData] = useState<string[]>(['*******获取奖励红包123.33 元'])
  const [g1,setG1] = useState<number>(-1);
  const [showRanking,setShowRanking] = useState<boolean>(false);
    const toPlay=()=>{
        go('/pages/answer/index');
    };

  return (
      <View className="page bg">
        <Top />
        <View className="column flex-2 justify-content-around align-items-center home" style={{marginBottom:g1===-1 ? 138 : 98}}>
          <View className="column align-items-center">
            <Image
                className="logo"
                src={logoUrl}
                style={{
                  width:585,
                  height:134
                }}
            />
            {
              broadcastData&&!sh ? (
                  <View className="row justify-content-center align-items-center px-2 mt-1 msg">
                    <Image
                        className="mr-05"
                        src={imageUrl('icon_msg')}
                        style={{
                          width:32,
                          height:26
                        }}
                    />
                    <Text className="font-12">{broadcastData[0]}</Text>
                  </View>
              ) : null
            }
          </View>
          <View className="role">
            {
              sh ? (
                  <Image className="role-img2" src={imageUrl('home_role2')} />
              ) : (<Image className="role-img" src={imageUrl('home_role')} />)
            }
          </View>
          <View className="start" onTap={toPlay}>
            <Image className="start-image" src={imageUrl('home_btn_start')} />
          </View>
          <View className="position-absolute float-icon ranking" onTap={()=>setShowRanking(true)}>
            <Image className="w-100 h-100" src={imageUrl('home_icon_ranking')} />
          </View>
          <View className="position-absolute float-icon invite">
            {
              !sh ? (<View className="icon-tips font-12 font-write">加粉丝</View>) : null
            }
            <Image className="w-100 h-100" src={imageUrl('home_icon_invite')} />
          </View>
        </View>
          {
              showRanking ? (<Ranking onClose={()=>setShowRanking(false)} />) : null
          }
          <Signin />
      </View>
  );
};
