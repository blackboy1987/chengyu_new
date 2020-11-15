Component({
    properties:{
        options: {
            type: Object,
            defaultValue: {
                inside:true,
            }
        },
        sh: {
            type: Boolean,
            defaultValue: !0
        }
    },
    data:{
        statusBarHeight: 20
    },
    pageLifetimes:{
        show() {
            console.log("wx.getSystemInfoSync().statusBarHeight",wx.getSystemInfoSync().statusBarHeight)
            this.setData({
                statusBarHeight:wx.getSystemInfoSync().statusBarHeight,
            });
        }
    }
})