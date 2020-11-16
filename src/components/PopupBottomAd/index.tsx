import * as React from 'react';
import './index.css';
import {useState} from "react";


const PopupBottomAd= () => {
    const [show,setShow] = useState<boolean>(true);
    const [g0,setG0] = useState<number>(-1);
    const [bannerID,setBannerID] = useState<string>('1234');
    return (
        <>
            {
                show ? (
                    <view className="popup-ad bg-white" style={{marginBottom:g0!==-1 ? 40 : 0}}>
                        <ad unitId={bannerID}></ad>
                    </view>
                ) : null
            }
        </>


    );
};

export default PopupBottomAd;