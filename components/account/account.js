Page({
    data:{
        g0:-1,
        statusBarHeight:20,
        showWithdrawSuccess: !1,
        withdrawSuccessData: {
            title: "提现成功",
            btnText: "好的"
        },
        showWithdrawTip: !1,
        WithdrawTipData: {
            title: "提示",
            btnText: "朕知道了"
        },
        customOptions: {
            bg: "#fff",
            title: "提现",
            textColor: "#000",
            inside: !1
        },
        systemInfo: wx.getSystemInfoSync(),
        money: 0,
        isClick: !1,
        captchaOptions: {
            product: "popup",
            mode: "seq_select",
            organization: "VYZQmJxu6Yb8CPfJyMvo",
            tipsMessage: {}
        },
        listData:[
            {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }, {
                active:true,
                tag_bgcolor:'red',
                description:'连续答对6题',
                received:false,
                money:2.23,
                tag:'新人提现',
            }
        ],
        defaultItem:{
            condition_complete:false,
            tag:'每日提现',
            fail_result:'条件未达到，连续答对3题目',
        },
        invalid_user:true,
    },
    onLoad: function () {

    },
})