import request from "./request";
import {Constants} from "./constants";
interface BaseOptions<R = any, E = any> {
    /** 接口调用成功的回调函数 */
    success?(res: R): void;
    /** 接口调用失败的回调函数 */
    fail?(res: E): void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?(res: any): void;
}

interface ModalOptions extends BaseOptions {
    /**
     * 提示的标题
     */
    title: string;
    /**
     * 提示的内容
     */
    content: string;
    /**
     * 是否显示取消按钮，默认为 true
     */
    showCancel?: boolean;
    /**
     * 取消按钮的文字，默认为"取消"，最多 4 个字符
     */
    cancelText?: string;
    /**
     * 取消按钮的文字颜色，默认为"#000000"
     */
    cancelColor?: string;
    /**
     * 确定按钮的文字，默认为"确定"，最多 4 个字符
     */
    confirmText?: string;
    /**
     * 确定按钮的文字颜色，默认为"#3CC51F"
     */
    confirmColor?: string;
    success?(res: {
        /**
         * 为 true 时，表示用户点击了确定按钮
         */
        confirm: boolean;
        /**
         * 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
         */
        cancel: boolean;
    }): void;
}
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

export const showModal = (options:{}) =>{
    wx.showModal(options);
}