
interface CallBack {
    onLoad?:()=>void;
    onError?:(err:any)=>void;
    onClose?:(res:any)=>void;
}

export const createRewardedVideoAd=function (adUnitId:string,callback:CallBack){
    if(wx.createRewardedVideoAd){
        const rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId });
        rewardedVideoAd.onLoad(() => {
            if(callback.onLoad){
                callback.onLoad();
            }
        });
        rewardedVideoAd.onError((err:any) => {
            if(callback.onError){
                callback.onError(err);
            }
        });
        rewardedVideoAd.onClose((res:any) => {
            if(callback.onClose){
                callback.onClose(res);
            }
        });
        return rewardedVideoAd;
    }
    return null;

}

export const createInterstitialAd=function (adUnitId:string,callback:CallBack){
    if(wx.createInterstitialAd){
        const interstitialAd = wx.createInterstitialAd({ adUnitId });
        interstitialAd.onLoad(() => {
            if(callback.onLoad){
                callback.onLoad();
            }
        });
        interstitialAd.onError((err:any) => {
            if(callback.onError){
                callback.onError(err);
            }
        });
        interstitialAd.onClose((res:any) => {
            if(callback.onClose){
                callback.onClose(res);
            }
        });
        return interstitialAd;
    }
}
