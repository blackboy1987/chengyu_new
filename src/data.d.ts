export interface UserInfo {
    carIndex?: number;
    houseIndex?: number;
    id?: number;
    isAuth?: boolean;
    jobIndex?: number;
    level?: number;
    mobile?: string;
    money?: number;
    name?: string;
    nickName?: string;
    point?: number;
    ticket?: number;
    token?: string;
    wechat?: string;
}

export interface GameInfo {
    answers: string[];
    idiom: string[];
    level: number;
    position: number;
    continuous_count:number;
    continuous_max:number;
}

export interface SiteInfo {
    bannerAdId?: string;
    browseVideoRewardPoint?: number;
    deductionPoint?: number;
    deductionType?:number;
    deductionMoney?: number;
    everyLevelReward?: number;
    everyLevelRewardMoney?: number;
    firstLoginRewardMoney?: number;
    firstLoginRewardPoint?: number;
    gridAdId?: string;
    interstitialAdId?: string;
    isOpen?: boolean
    logo?: string;
    maxLevelRewardMoney?: number;
    name?: string;
    nativeAdId?: string;
    rewardedVideoAdId?: string;
    shareRewardPoint?: number;
    videoAdId?: string;
    videoFrontAdId?: string;
    sh?:boolean;
}