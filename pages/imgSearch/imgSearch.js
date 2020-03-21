// pages/imgSearch/imgSearch.js
Page({

  input(e){
    var input = e.detail.value
    this.setData({
      input
    })
  },
  search(){
    var that = this
    wx.request({
      url: 'https://www.tuling123.com/openapi/api',
      data: {
        key: '854c8d93815949f68bc63e90886c4ede',
        info: '查快递'+this.data.res,
        userid: '547624'
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res)
        var res = res.data.text
        that.setData({
          res
        })
      }
    })
  },
  data: {
    input:'',
    res:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})