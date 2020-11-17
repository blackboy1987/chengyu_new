import * as React from 'react';
import {View,Image,Text} from 'remax/one';
import {ScrollView} from 'remax/wechat';
import {usePageEvent} from 'remax/macro';
import './index.css';
import {imageUrl} from "@/util/utils";

const sh = false;

interface RankingProps {
    onClose:()=>void;
}

const rankData = {
    list:[{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    },{
        avatar:'https://storage.live.com/users/0x12c25e08c551271c/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=0149F14901D161753147FECC00926036&fofoff=1',
        nickname:'nickname',
        cash:'123',
        level:15,
    }],
    self:{
        rank:4,
        score:12.33,
        cash:123,
        level:55,
    }
}

interface RankingState {

}

class Ranking extends React.Component<RankingProps, RankingState> {

    componentDidMount() {
        console.log("1111111");
        // 接口拉取排名用户
    }

    render(){
        const {onClose} = this.props;
        return (
            <View className="column justify-content-center align-items-center popup data-v-56eb47b6">
                <View className="column justify-content-between px-1 popup-main data-v-56eb47b6">
                    <View className="mt-3 row justify-content-center data-v-56eb47b6">
                        <Image
                            className="data-v-56eb47b6"
                            src={imageUrl('ranking_title')}
                            style={{
                                width:327,
                                height:73
                            }}
                        />
                    </View>
                    <ScrollView className="column rank data-v-56eb47b6" scrollY style={{height:768}}>
                        {
                            rankData.list.map((item,index)=>(
                                <View className="row justify-content-between align-items-center mb-1 px-1 py-05 rank-item data-v-56eb47b6" key={index}>
                                    {
                                        index === 0 ? (
                                            <Image className="rank-icon data-v-56eb47b6" src={imageUrl('ranking_rank1')} />
                                        ) : null
                                    }
                                    {
                                        index === 1 ? <Image className="rank-icon data-v-56eb47b6" src={imageUrl('ranking_rank2')} /> : null
                                    }
                                    {
                                        index === 2 ? <Image className="rank-icon data-v-56eb47b6" src={imageUrl('ranking_rank3')} /> : null
                                    }
                                    {
                                        index > 2 ? (<Text className="font-14 number data-v-56eb47b6">{index + 1}</Text>) : null
                                    }
                                    <View className="row flex-2 justify-content-start align-items-center ml-15 data-v-56eb47b6">
                                        <Image className="avatar data-v-56eb47b6" src={item.avatar} />
                                        <View className="font-14 ml-1 name data-v-56eb47b6">{item.nickname}</View>
                                    </View>
                                    {
                                        !sh ? (
                                            <Text className="font-14 data-v-56eb47b6">分成
                                                <Text className="red data-v-56eb47b6">{item.cash + '元'}</Text>
                                            </Text>
                                        ) : (
                                            <Text className="font-14 data-v-56eb47b6">
                                                <Text className="data-v-56eb47b6">{item.level + '关'}</Text>
                                            </Text>
                                        )
                                    }
                                </View>
                            ))
                        }
                    </ScrollView>
                    <View className="rank data-v-56eb47b6">
                        <View className="row justify-content-between align-items-center mb-1 py-05 rank-item me data-v-56eb47b6">
                            {
                                rankData.self.rank == 1 ? (<Image className="ml-2 rank-icon data-v-56eb47b6" src={imageUrl('ranking_rank1')} />) : null
                            }
                            {
                                rankData.self.rank == 2 ? (<Image className="ml-2 rank-icon data-v-56eb47b6" src={imageUrl('ranking_rank2')} />) : null
                            }
                            {
                                rankData.self.rank == 3 ? (<Image className="ml-2 rank-icon data-v-56eb47b6" src={imageUrl('ranking_rank3')} />) : null
                            }
                            {
                                rankData.self.rank > 3 ? (<Text className="font-14 ml-2 data-v-56eb47b6">{rankData.self.rank}</Text>) : null
                            }
                            <View className="row flex-2 justify-content-start align-items-center ml-2 data-v-56eb47b6">
                                <View className="avatar data-v-56eb47b6" style={{overflow: 'hidden'}}>
                                    <open-data type="userAvatarUrl" lang="zh_CN" />
                                </View>
                                <Text className="font-14 ml-1 data-v-56eb47b6">自己</Text>
                            </View>
                            {
                                !sh ? (
                                    <Text className="font-14 mr-2 data-v-56eb47b6">分成
                                        <Text className="red data-v-56eb47b6">{rankData.self.score + '元'}</Text>
                                    </Text>
                                ) : (
                                    <Text className="font-14 mr-2 data-v-56eb47b6">
                                        <Text className="data-v-56eb47b6">{rankData.self.level + '关'}</Text>
                                    </Text>
                                )
                            }
                        </View>
                    </View>
                    <View className="iconfont icon-close font-20 gray-6 p-1 close data-v-56eb47b6" onTap={onClose} />
                </View>
            </View>
        );
    }
}
export default Ranking;