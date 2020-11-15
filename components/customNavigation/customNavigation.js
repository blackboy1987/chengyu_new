Page({
    props: {
        options: {
            type: Object,
            defaultValue: {}
        },
        sh: {
            type: Boolean,
            defaultValue: !0
        }
    },
    data:{
        statusBarHeight: 20
    },
    onLoad: function () {
        this.setData({
            statusBarHeight:wx.getSystemInfoSync().statusBarHeight
        })
    },
})