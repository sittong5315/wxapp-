// pages/guess/guess.js
let timer = null;
let flag = true;
let victorynum = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    victorynum: 0,
    img: [
      "img/jiandao.png",
      "img/shitou.png",
      "img/bu.png"
    ],
    youimg: "img/jiandao.png",
    myimg: "img/wenhao.png",
    vicmsg: "看结果",
    youindex: 0
  },
  goback() {
    // wx.navigateBack({
    //   number: 1
    // })
    wx.showModal({
      title: '提示',
      content: '您确定要退出吗',
      cancelText:'继续游戏',
      cancelColor:'#00ff00',
      confirmText:'残忍离开',
      confirmColor:'#ff0000',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateBack({
            delta:1
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  changeYouImg() {
    if (timer) {
      clearInterval(timer)
    }
    timer = setInterval(() => {
      let youindex = Math.floor(Math.random() * 3);
      let youimg = this.data.img[youindex];
      this.setData({
        youindex,
        youimg
      })
    }, 50)
  },
  changeImg(e) {
    if (flag) { //flag判定当前书否已经出拳，已出拳不可再出
      flag = false;
      clearInterval(timer);
      console.log(e.mark.i)
      let myindex = e.mark.i;
      let youindex = this.data.youindex;
      let myimg = this.data.img[myindex];
      //判断平局|赢|输
      let result = ""
      if (myindex === youindex) {
        result = "平局了"
      } else if ((myindex === 0 && youindex == 2) || (myindex === 1 && youindex == 0) || (myindex === 2 && youindex == 1)) {
        result = "你赢了";
        victorynum++;
      } else {
        result = "你输了"
      }
      console.log(result)
      this.setData({
        myimg,
        vicmsg: result,
        victorynum
      })
    }
  },
  playagain() {
    this.changeYouImg();
    flag = true;
    this.setData({
      myimg: "img/wenhao.png",
      vicmsg: "看结果",
    })
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
    this.changeYouImg()
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