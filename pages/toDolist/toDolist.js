// pages/toDolist/toDolist.js

Page({
  add() {
    this.setData({
      visible1: true
    })
  },
  handleAdd() {
    var that = this
    var list = this.data.list
    this.setData({
      visible1: false
    })
    var v = {
      msg: this.data.input,
      done:false
    }
    console.log(typeof list)
    list.push(v)
    wx.setStorage({
      key: 'list',
      data: list,
      success(res) {
        that.setData({
          list
        })
      }
    })
  },
  handleClose() {
    this.setData({
      visible1: false
    })
  },
  del(e){
    console.log(e.target.dataset.i)
    var that = this
    var list = that.data.list
    wx.showModal({
      title: '提示',
      content: '是否删除该事项？',
      success(res) {
        if (res.confirm) {
          list.splice(e.target.dataset.i, 1)
          that.setData({
            list
          })
          wx.setStorage({
            key: 'list',
            data: list,
            success(res) {
              that.setData({
                list
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  input(e) {
    this.setData({
      input: e.detail.detail.value
    })
  },
  handleThingsChange(e) {
    var that = this
    var list = this.data.list
    if (!list[e.target.dataset.i].done){
      list[e.target.dataset.i].done = true
      this.setData({
        list
      })
    }else{
      list[e.target.dataset.i].done = false
      this.setData({
        list
      })
    }
    wx.setStorage({
      key: 'list',
      data: list,
      success(res) {
        that.setData({
          list
        })
      }
    })
  },
  data: {
    checked: [],
    visible1: false,
    input: '',
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.getStorage({
      key: 'list',
      success(res) {
        var list = res.data
        that.setData({
          list
        })
        console.log(res.data)
      },
      fail() {
        var list = []
        that.setData({
          list
        })
        console.log(1)
      }
    })
    console.log(typeof this.data.list)
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
    var that = this
    wx.getStorage({
      key: 'list',
      success(res) {
        var list = res.data
        that.setData({
          list
        })
      },
      fail() {
        var list = []
        that.setData({
          list
        })
      }
    })
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