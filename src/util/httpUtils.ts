import request from "@/util/request";
import {GameInfo} from "@/data";
import {setStorage} from "@/util/wxUtils";
import {Constants} from "@/util/constants";

export const game=(callback:(res:GameInfo)=>void)=>{
    request("api/game",(response:{code:number,msg:string,data:GameInfo})=>{
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