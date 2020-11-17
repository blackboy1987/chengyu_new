import * as React from 'react';
import {View,Image} from 'remax/one';
// @ts-ignore
import classNames from 'classnames';
import './index.css';
import {imageUrl} from "@/util/utils";
import {useState} from "react";

interface TabbarProps {
 
}

const Tabbar:React.FC<TabbarProps>= ({}) => {
    const [index,setIndex] = useState<number>(0);
    const [g0,setG0] = useState<number>(0);
    return (
        <View className="d-flex row justify-content-between align-items-center tabbar data-v-488d4e90" style={{paddingBottom:g0!==-1 ? 40:0}}>
            <View className="d-flex align-items-center ml-3 tabbar-item data-v-488d4e90">
                {
                    index === 0 ? (
                        <Image className="image-treasure data-v-488d4e90" src={imageUrl('common_tabbar_applist_active')} />
                    ) : (
                        <Image className="image-treasure data-v-488d4e90" src={imageUrl('common_tabbar_applist.png')} />
                    )
                }
                {
                    index === 0 ? (<View className={classNames('font-10','data-v-488d4e90',index===0?'red':'')}>领体力</View>) : null
                }
            </View>
            <View className="d-flex align-items-center tabbar-home data-v-488d4e90">
                {
                    index === 1 ? (<Image className="Image-home data-v-488d4e90" src={imageUrl('common_tabbar_home_active')} />) : (<Image className="Image-home data-v-488d4e90" src={imageUrl('common_tabbar_home')} />)
                }
                <View className={classNames('font-10','data-v-488d4e90',index===1?'red':'')}>开始答题</View>
            </View>
            <View className="d-flex align-items-center mr-3 tabbar-item data-v-488d4e90">
                {
                    index === 2 ? (
                        <Image className="tabbar_account data-v-488d4e90" src={imageUrl('common_tabbar_account_active')} />
                    ):(
                        <Image className="tabbar_account data-v-488d4e90" src={imageUrl('common/tabbar_account')} />
                    )
                }
                <View
                    className={classNames(
                        'font-10',
                        'data-v-488d4e90',
                        index===2?'red':'',
                    )}
                >提现</View>
            </View>
        </View>
    );
};

export default Tabbar;