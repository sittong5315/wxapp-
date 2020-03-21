// pages/detail/detail.js
import * as echarts from '../../ec-canvas/echarts';
var that = null
const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  console.log(that.data.list)
  
  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['40%', '60%'],
      data: [
        {
          value: that.data.list.cities[0].currentConfirmedCount,
          name: that.data.list.cities[0].cityName
        },
        {
          value: that.data.list.cities[1].currentConfirmedCount,
          name: that.data.list.cities[1].cityName
        },
        {
          value: that.data.list.cities[2].currentConfirmedCount,
          name: that.data.list.cities[2].cityName
        },
        {
          value: that.data.list.cities[3].currentConfirmedCount,
          name: that.data.list.cities[3].cityName
        },
        {
          value: that.data.list.cities[4].currentConfirmedCount,
          name: that.data.list.cities[4].cityName
        },
        {
          value: that.data.list.cities[5].currentConfirmedCount,
          name: that.data.list.cities[5].cityName
        },
        {
          value: that.data.list.cities[6].currentConfirmedCount,
          name: that.data.list.cities[6].cityName
        },
        {
          value: that.data.list.cities[7].currentConfirmedCount,
          name: that.data.list.cities[7].cityName
        },
        {
          value: that.data.list.cities[8].currentConfirmedCount,
          name: that.data.list.cities[8].cityName
        },
        {
          value: that.data.list.cities[9].currentConfirmedCount,
          name: that.data.list.cities[9].cityName
        }
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}
Page({
  data: {
    ec: {
      onInit: initChart
    },
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
    this.setData({
      i: options.i
    })
    wx.request({
      url: 'https://api.tianapi.com/txapi/ncovcity/index',
      data: {
        key: '4576f51aa11fa1d11d45606868044bd1'
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        that.setData({
            list: res.data.newslist[that.data.i]
        })
        console.log(that.data.list)
        
      }

    })
    
},

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function() {

},

/**
 * 生命周期函数--监听页面显示
 */
onShow: function() {

},

/**
 * 生命周期函数--监听页面隐藏
 */
onHide: function() {

},

/**
 * 生命周期函数--监听页面卸载
 */
onUnload: function() {
  that = null
},

/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function() {

},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function() {

},

/**
 * 用户点击右上角分享
 */
onShareAppMessage: function() {

}
})