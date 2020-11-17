import * as React from 'react';
import {View,Image} from 'remax/one';
import './index.css';
import {imageUrl} from "@/util/utils";

interface MoneyAnimationProps {

}

const MoneyAnimation:React.FC<MoneyAnimationProps>= () => {
    return (
        <View className="collect-money">
            <Image className="image i1" src={imageUrl('common_icon_red_envelope')} />
            <Image className="image i2" src={imageUrl('common_icon_red_envelope')} />
            <Image className="image i3" src={imageUrl('common_icon_red_envelope')} />
            <Image className="image i4" src={imageUrl('common_icon_red_envelope')} />
            <Image className="image i5" src={imageUrl('common_icon_red_envelope')} />
            <Image className="image i6" src={imageUrl('common_icon_red_envelope')} />
            <Image className="image i7" src={imageUrl('common_icon_red_envelope')} />
            <Image className="image i8" src={imageUrl('common_icon_red_envelope')} />
        </View>
    );
};

export default MoneyAnimation;