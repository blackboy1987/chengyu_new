import * as React from 'react';
import { View, Text, Image, } from 'remax/one';
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import icon_red_envelope from '@/static//images/common/icon_red_envelope.png';
import btn_withdraw from '@/static/images/common/btn_withdraw.png';
import stamina from '@/static/images/common/stamina.png';
import btn_increase from '@/static/images/common/btn_increase.png';
import icon_invite from '@/static/images/home/icon_invite.png';
import icon_ranking from '@/static/images/home/icon_ranking.png';
import btn_start from '@/static/images/home/btn_start.png';
import role2 from '@/static/images/home/role2.png';
import role from '@/static/images/home/role.png'
import icon_msg from '@/static/images/common/icon_msg.png';
import {go, wxGetSystemInfoSync, wxLogin} from "@/util/wxUtils";
import {UserInfo} from "@/data";
import Top from "@/components/Top";
const logoUrl = 'https://bootx-chengyu.oss-cn-hangzhou.aliyuncs.com/chengyu/static/images/logo/slogan.png';

export default () => {
  const [sh,setSh] = useState<boolean>(false);

  const [broadcastData,setBroadcastData] = useState<string[]>(['*******获取奖励红包123.33 元'])
  const [g1,setG1] = useState<number>(-1);
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
                        src={icon_msg}
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
                  <Image className="role-img2" src={role2} />
              ) : (<Image className="role-img" src={role} />)
            }
          </View>
          <View className="start" onTap={toPlay}>
            <Image className="start-image" src={btn_start} />
          </View>
          <View className="position-absolute float-icon ranking">
            <Image className="w-100 h-100" src={icon_ranking} />
          </View>
          <View className="position-absolute float-icon invite">
            {
              !sh ? (<View className="icon-tips font-12 font-write">加粉丝</View>) : null
            }
            <Image className="w-100 h-100" src={icon_invite} />
          </View>
        </View>

      </View>
  );
};
