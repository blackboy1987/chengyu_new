import * as React from 'react';
import { View, Text, Image, } from 'remax/one';
import {Button,ScrollView} from 'remax/wechat';
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import icon_red_envelope from '@/static//images/common/icon_red_envelope.png';
import btn_withdraw from '@/static/images/common/btn_withdraw.png';
import stamina from '@/static/images/common/stamina.png';
import btn_increase from '@/static/images/common/btn_increase.png';
import light from '@/static/images/answer/light.png';
import task1 from '@/static/images/answer/task1.png';
import task2 from '@/static/images/answer/task2.png';
import AppBanner from "@/components/AppBanner";

export default () => {
  const [systemInfo,setSystemInfo] = useState<{[key:string]:any}>(wx.getSystemInfoSync());
  const [sh,setSh] = useState<boolean>(false);
  const [forced,setForced] = useState<boolean>(false);
  const [hasUserInfo,setHasUserInfo] = useState<boolean>(false);
  const [canIUse,setCanIUse] = useState<boolean>(false);
  const [money,setMoney] = useState<number>(3.33);
  const [moneyChange,setMoneyChange] = useState<boolean>(true);
  const [accountInfo,setAccountInfo] = useState({
    key:3,
  });
    const [g2,setG2] = useState<number>(-1);
    const [question,setQuestion] = useState<{[key:string]:any}>({
        continuous_count:3,
        continuous_max:10,
        rightId:3,

    });
    const [taskMoney,setTaskMoney] = useState<number>(3.33);
    const [level,setLevel] = useState<number>(123);
    const [idiomArray,setIdiomArray] = useState<string[]>(['天','涯','孩','脚']);
    const [answers,setAnswers] = useState<string[]>(['天','涯','孩','脚']);
    const [answer,setAnswer] = useState<string>('');
    const [testMode,setTestMode] = useState<boolean>(false);
  return (
      <View className="page bg">
        {
          !sh&&forced ? (<Button className="btn-transparent" style={{zIndex:999}} />) : null
        }
        {
          !hasUserInfo&&canIUse? (<Button className="btn-transparent" openType='getUserInfo' />) : null
        }
        <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop:systemInfo.statusBarHeight*systemInfo.devicePixelRatio
            }}
        >
          {
            !sh ? (
                <View className="row align-items-center ml-15 head-item">
                  <Image
                      src={icon_red_envelope}
                      style={{
                        width:61,
                        height:68
                      }}
                  />
                  <View className="row justify-content-between align-items-center head-item-value">
                    <View
                        className={classNames(
                            'font-14',
                            'align-right',
                            'money',
                            moneyChange ? 'animation':'',
                        )}>{money != null ? money + '元' : ''}</View>
                    <Image
                        className="ml-05"
                        src={btn_withdraw}
                        style={{
                          width:99,
                          height:52
                        }}
                    />
                  </View>
                </View>
            ) : null
          }
          <View className="row align-items-center ml-15 head-item">
            <Image
                src={stamina}
                style={{
                  width:52,
                  height:67
                }}
            />
            <View className="row justify-content-between align-items-center head-item-value2">
              <Text className="font-14">{accountInfo.key}</Text>
              <Image
                  className="ml-05"
                  src={btn_increase}
                  style={{
                    width:52,
                    height:52
                  }}
              />
            </View>
          </View>
        </View>
        {
          !sh ? (
              <View className="column align-items-center p-1 float-task">
                <View className="dot" />
                <Text>每</Text>
                <Text>日</Text>
                <Text>提</Text>
                <Text>现</Text>
              </View>
          ) : null
        }

        <View className="column flex-2 justify-content-around align-items-center answer" style={{marginBottom:g2!==-1 ? 138 : 98}}>
              {
                  !sh ? (
                      <View className="row justify-content-center align-items-center px-2 answer-head">
                          <View className="column">
                              <View className="mt-1 progress">
                                  <View className="progress-bar" style={{width:(question.continuous_count*100/question.continuous_max)+'%'}} />
                                  <View
                                      className={classNames(
                                          'row',
                                          'justify-content-center',
                                          'align-items-center',
                                          'font-14',
                                          'font-bold',
                                          'font-write',
                                          'progress-value',
                                      )}>{question.continuous_count + '/' + question.continuous_max}</View>
                              </View>
                              <View className="font-14 gray-8 mt-05 align-center">连续答对红包
                                  <Text className="font-red">{question.continuous_count}</Text>
                                  个，还差
                                  <Text className="font-red">{question.continuous_max - question.continuous_count <= 0 ? 0 : question.continuous_max - question.continuous_count}</Text>
                                  个提现
                              </View>
                          </View>
                          <View className="column task">
                              {
                                  question.continuous_count===question.continuous_max ? (
                                      <Image
                                          src={task2}
                                          style={{
                                              width:81,
                                              height:98
                                          }}
                                      />
                                  ) : (
                                      <Image
                                          src={task1}
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
                              src={light}
                              style={{
                                  width:159,
                                  height:152
                              }}
                          />
                      </View>
                  ) : (<View className="mt-5" />)
              }
              <View className="column justify-content-between align-content-center wrapper question">
                  <View className="font18 align-center count">{'第 '+level + ' 关'}</View>
                  <View className="row justify-content-center align-items-center idiom">
                      {
                          idiomArray.map((item,index)=>(
                              <View
                                  className={classNames(
                                      'column',
                                      'justify-content-center',
                                      'align-items-center',
                                      'idiom-item',
                                      item==='?' ?'special':'',
                                  )}
                                  key={index}
                              >
                                  <Text>{item}</Text>
                                  <View className="line line_horizontal line_top" />
                                  <View className="line line_vertical line_right" />
                                  <View className="line line_horizontal line_bottom" />
                                  <View className="line line_vertical line_left" />
                              </View>
                          ))
                      }

                  </View>
                  <View className="row justify-content-end align-items-center pr-4 mb-15 btn-group">
                      <View className="row px-1 py-05 ml-1 justify-content-center align-items-center btn-group-item">
                          <View className="iconfont icon-home font-20 mr-05" />
                          <Text className="font-14 ">首页</Text>
                      </View>
                      <View className="row px-1 py-05 ml-1 justify-content-center align-items-center btn-group-item">
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
                      answers.map((item,index)=>(
                          <View
                              className={classNames(
                                  'column',
                                  'justify-content-center',
                                  'align-items-center',
                                  'words-item',
                                  answer===item ? 'active' : '',
                              )}
                              key={index}
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
                      >{question.rightId}</View>
                  ) : null
              }
            <AppBanner />
          </View>
      </View>
  );
};
