import * as React from 'react';
import './index.css';
import {useState} from "react";
import {SiteInfo} from "@/data";
import {getStorage} from "@/util/wxUtils";

interface PopupBottomAdProps {
    show:boolean;
}

const PopupBottomAd:React.FC<PopupBottomAdProps>= ({show}) => {
    const [g0,setG0] = useState<number>(-1);
    const [siteInfo,setSiteInfo] = useState<SiteInfo>(getStorage('siteInfo'));
    return (
        <>
            {
                show&&siteInfo.bannerAdId ? (
                    <view className="popup-ad bg-white" style={{marginBottom:g0!==-1 ? 40 : 0}}>
                        <ad unitId={siteInfo.bannerAdId} />
                    </view>
                ) : null
            }
        </>


    );
};

export default PopupBottomAd;