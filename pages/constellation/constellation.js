// pages/constellation/constellation.js
Page({

  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange(e) {
    this.setData({
      dIndex: e.detail.value
    })
  },
  search() {
    var that = this
    that.setData({
      sw: true
    })
    setTimeout(() => {
      that.setData({
        loadSw: false
      })
      wx.request({
        url: 'https://www.tuling123.com/openapi/api',
        data: {
          key: '854c8d93815949f68bc63e90886c4ede',
          info: that.data.constellation[that.data.index] + that.data.date[that.data.dIndex] + '运势',
          userid: '547624'
        },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          var res = res.data.text
          console.log(that.data.sw)
          that.setData({
            res
          })
        }
      })
    }, 1000)

  },
  data: {
    sw: false,
    loadSw: true,
    res: '',
    date: [
      '请选择查询日期',
      '今日',
      '本月'
    ],
    constellation: [
      '请选择你的星座',
      '白羊座',
      '金牛座',
      '双子座',
      '巨蟹座',
      '狮子座',
      '处女座',
      '天秤座',
      '天蝎座',
      '射手座',
      '摩羯座',
      '水瓶座',
      '双鱼座',
    ],
    index: 0,
    dIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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