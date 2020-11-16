import * as React from 'react';
import { View, Text, Image, } from 'remax/one';
import {Button} from 'remax/wechat';
import {usePageEvent} from 'remax/macro';
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import AppBanner from "@/components/AppBanner";
import {getStorage, go, wxGetSystemInfoSync} from "@/util/wxUtils";
import {game} from "@/util/httpUtils";
import {GameInfo, SiteInfo} from "@/data";
import AnswerResult from "@/components/AnswerResult";
import AnswerFailure from "@/components/AnswerFailure";
import Top from "@/components/Top";
import {imageUrl} from "@/util/utils";
import {createRewardedVideoAd} from "@/util/adUtils";

export default () => {
    const [systemInfo,setSystemInfo] = useState<{[key:string]:any}>(wxGetSystemInfoSync);
    const [sh,setSh] = useState<boolean>(false);
    const [g2,setG2] = useState<number>(-1);
    const [taskMoney,setTaskMoney] = useState<number>(3.33);
    const [answer,setAnswer] = useState<string>('');
    const [testMode,setTestMode] = useState<boolean>(false);
    const [gameInfo,setGameInfo] = useState<GameInfo>({
        idiom:[],
        answers:[],
        level:0,
        position:-1,
        continuous_count:2,
        continuous_max:10,
    });
    const [rewardedVideoAd,setRewardedVideoAd] = useState(null);

    const [success,setSuccess] = useState<boolean | null>(null);

    usePageEvent('onLoad',()=>{
        game((data:GameInfo)=>{
            setGameInfo({...data,continuous_count:2,continuous_max:10});
        });
        if(!rewardedVideoAd){
            console.log("1111")
            const siteInfo:SiteInfo = getStorage("siteInfo");
            if(siteInfo.rewardedVideoAdId){
                console.log("2222")
                setRewardedVideoAd(createRewardedVideoAd(siteInfo.rewardedVideoAdId.replace(/[\n\r]/g,''),{
                    onLoad:function () {
                        console.log("ok");
                    },
                    onError:function (err) {
                        console.log("err",err);
                    },
                    onClose:function (res) {
                        console.log("res",res);
                    }
                }))
            }
        }
    });

    const select=(text:string)=>{
        const {position,idiom,level} = gameInfo;
        if(text===answer){
            return;
        }
        setAnswer(text);
        if(idiom[position]===text){

        }else{

        }
    };

    const tip = () =>{
        if(rewardedVideoAd){
            rewardedVideoAd.show();
        }
    }

  return (
      <View className="page bg">
          <Top />
        <View className="column flex-2 justify-content-around align-items-center answer" style={{marginBottom:g2!==-1 ? 138 : 98}}>
              {
                  !sh ? (
                      <View className="row justify-content-center align-items-center px-2 answer-head">
                          <View className="column">
                              <View className="mt-1 progress">
                                  <View className="progress-bar" style={{width:(gameInfo.continuous_count*100/gameInfo.continuous_max)+'%'}} />
                                  <View
                                      className={classNames(
                                          'row',
                                          'justify-content-center',
                                          'align-items-center',
                                          'font-14',
                                          'font-bold',
                                          'font-write',
                                          'progress-value',
                                      )}>{gameInfo.continuous_count + '/' + gameInfo.continuous_max}</View>
                              </View>
                              <View className="font-14 gray-8 mt-05 align-center">连续答对红包
                                  <Text className="font-red">{gameInfo.continuous_count}</Text>
                                  个，还差
                                  <Text className="font-red">{gameInfo.continuous_max - gameInfo.continuous_count <= 0 ? 0 : gameInfo.continuous_max - gameInfo.continuous_count}</Text>
                                  个提现
                              </View>
                          </View>
                          <View className="column task">
                              {
                                  gameInfo.continuous_count===gameInfo.continuous_max ? (
                                      <Image
                                          src={imageUrl('task2')}
                                          style={{
                                              width:81,
                                              height:98
                                          }}
                                      />
                                  ) : (
                                      <Image
                                          src={imageUrl('task1')}
                                          style={{
                                              width:81,
                                              height:98
                                          }}
                                      />
                                  )
                              }
                              <View className="column justify-content-end align-items-center pb-05 font-bold font-12 font-write txt">{taskMoney}</View>
                          </View>
                          <Image
                              className="light"
                              src={imageUrl('light')}
                              style={{
                                  width:159,
                                  height:152
                              }}
                          />
                      </View>
                  ) : (<View className="mt-5" />)
              }
              <View className="column justify-content-between align-content-center wrapper question">
                  <View className="font18 align-center count">{'第 '+gameInfo.level + ' 关'}</View>
                  <View className="row justify-content-center align-items-center idiom">
                      {
                          (gameInfo.idiom||[]).map((item,index)=>(
                              <View
                                  className={classNames(
                                      'column',
                                      'justify-content-center',
                                      'align-items-center',
                                      'idiom-item',
                                      index===gameInfo.position ?'special':'',
                                  )}
                                  key={index}
                              >
                                  <Text>{index==gameInfo.position ? answer || '?':item}</Text>
                                  <View className="line line_horizontal line_top" />
                                  <View className="line line_vertical line_right" />
                                  <View className="line line_horizontal line_bottom" />
                                  <View className="line line_vertical line_left" />
                              </View>
                          ))
                      }

                  </View>
                  <View className="row justify-content-end align-items-center pr-4 mb-15 btn-group">
                      <View onTap={()=>go("/pages/index/index")} className="row px-1 py-05 ml-1 justify-content-center align-items-center btn-group-item">
                          <View className="iconfont icon-home font-20 mr-05" />
                          <Text className="font-14 ">首页</Text>
                      </View>
                      <View onTap={tip} className="row px-1 py-05 ml-1 justify-content-center align-items-center btn-group-item">
                          <View className="iconfont icon-play font-20 mr-05" />
                          <Text className="font-14 ">提示</Text>
                      </View>
                      <View className="row px-1 py-05 ml-1 justify-content-center align-items-center btn-group-item">
                          <View className="iconfont icon-share font-20 mr-05" />
                          <Text className="font-14 ">求助</Text>
                          <Button className="share" openType="share" />
                      </View>
                  </View>
              </View>
              <View
                  className={classNames(
                      'row',
                      'justify-content-between',
                      'align-items-center',
                      'words',
                      systemInfo.statusBarHeight>20?'mt-2':'',
                  )}>
                  {
                      (gameInfo.answers||[]).map((item,index)=>(
                          <View
                              className={classNames(
                                  'column',
                                  'justify-content-center',
                                  'align-items-center',
                                  'words-item',
                                  answer===item ? 'active' : '',
                              )}
                              key={index}
                              onTap={()=>select(item)}
                          >{item}</View>
                      ))
                  }
              </View>
              {
                  testMode ? (
                      <View
                          className="position-absolute"
                          style={{
                              left:100,
                              top:200,
                          }}
                      >{gameInfo.position+1}</View>
                  ) : null
              }
            <AppBanner />
          </View>
          {
              success&&answer ? (<AnswerResult />) : null
          }
          {
              !success&&answer ? (<AnswerFailure onClose={()=>{setAnswer('');setSuccess(null)}} />) : null
          }
      </View>
  );
};
