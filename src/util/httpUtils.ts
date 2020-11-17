import request from "@/util/request";
import {GameInfo} from "@/data";
import {setStorage} from "@/util/wxUtils";
import {Constants} from "@/util/constants";

export const game=(callback:(res:GameInfo)=>void)=>{
    request("api1/game",(response:{code:number,msg:string,data:GameInfo})=>{
        const {data,code,msg} = response;
        if(callback){
            callback(data);
        }
    })
}

export const siteInfo=(callback:(res:any)=>void)=>{
    request("api/site",(result:any)=>{
        const {data} = result;
        setStorage("siteInfo",data);
        callback(data);
    },{
        data:{
            siteInfoId:Constants.siteInfoId,
        }
    });
}

export const discount=(params:{[key:string]:any},callback:(res:any)=>void)=>{
    request("api1/discount",(result:any)=>{
        const {data} = result;
        callback(data);
    },{
        data:params
    });
}

export const addPoint=(params:{[key:string]:any},callback:(res:any)=>void)=>{
    request("api1/addPoint",(result:any)=>{
        const {data} = result;
        callback(data);
    },{
        data:params
    });
}

export const check=(callback:(res:any)=>void)=>{
    request("api1/check",(result:any)=>{
        callback(result);
    });
}

export const updateUserInfo=(callback:(res:any)=>void)=>{
    request("api1/userInfo",(result:any)=>{
        callback(result.data);
    });
}