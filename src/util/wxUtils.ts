import request from "./request";
import {Constants} from "./constants";

/**
 * 设置缓存（同步）
 * @param key
 * @param value
 */
export const setStorage=(key:string,value:any)=>{
    wx.setStorageSync(key,value);
}

/**
 * 获取缓存（同步）
 * @param key
 */
export const getStorage=(key:string)=>{
    return wx.getStorageSync(key);
}

/**
 * 微信登录接口。同时会请求后端，获取用户最新信息
 * @param callback
 */
export const wxLogin=(callback:(res:any)=>void)=>{
    wx.login({
        success:(res:{code:string})=>{
            const {code} = res;
            request('api/login',(result:any)=>{
                const {data} = result;
                const {token,id} = data;
                setStorage("userId",id);
                setStorage("token",token);
                if(callback){
                    callback(data);
                }
            },{
                data:{
                    code,
                }
            })
        }
    });
}

/**
 * 获取设备信息
 * @param callback
 */
export const wxGetSystemInfo=(callback:(res:any)=>void)=>{
    wx.getSystemInfo({
        success:(result:any)=>{
            wx.setStorageSync("systemInfo",result);
            if(callback){
                callback(result);
            }
        }
    });
}

export const wxGetSystemInfoSync=()=>{
    return wx.getSystemInfoSync();
}
/**
 * 获取用户信息
 * @param callback
 */
export const getUserInfo = (callback:(res:any)=>void) =>{
    wx.getUserInfo({
        success:(data:any)=>{
            if(callback){
                callback(data);
            }
        }
    })
}


export const go = (url:string)=>{
    wx.navigateTo({
        url,
    })
}