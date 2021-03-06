// pages/home/home.js
Page({
  res() {
    var _this = this
    wx.request({
      url: 'https://www.tuling123.com/openapi/api',
      data: {
        key: '854c8d93815949f68bc63e90886c4ede',
        info: this.data.userInput,
        userid: '547624'
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        var msg = res.data.text
        var obj = {
          className: 'robot',
          img: '../../img/robot.jpg',
          msg
        }
        var list = _this.data.list
        list.push(obj)
        _this.setData({
          list,
          toLast: 'item' + _this.data.list.length
        })
      }
    })
  },
  userSend() {
    var obj = {
      className: 'user',
      img: this.data.userImg,
      msg: this.data.userInput
    }
    var list = this.data.list
    list.push(obj)
    this.setData({
      list,
      toLast: 'item' + this.data.list.length,
      userInput:''
    })
    this.res();
  },
  input(e) {
    var userInput = e.detail.value
    this.setData({
      userInput
    })
  },
  getUserInf(){
    var that = this
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              var userImg = res.userInfo.avatarUrl
              var user = false
              that.setData({
                user,
                userImg
              })
            }
          })
        }
        else{
          var user = true
          that.setData({
            user
          })
        }
      }
    })
  },
  data: {
    toLast: '',
    userInput: '',
    list: [],
    user: false,
    userImg:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      toLast: 'item' + this.data.list.length
    })
    var that = this
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              var userImg = res.userInfo.avatarUrl
              var user = false
              that.setData({
                user,
                userImg
              })
            }
          })
        }else{
          var user = true
          that.setData({
            user
          })
        }
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