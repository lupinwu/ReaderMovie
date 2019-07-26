var postsData = require('../../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var postId = options.id;
    var postData = postsData.postList[postId];
    this.setData({
      postData: postData
    });

    var postsCollected = wx.getStorageInfoSync('postsCollected')
    if (postsCollected) {
      var postCollected = postsCollected[postId]
      if (postCollected) {
        this.setData({
          collected: postCollected
        })
      }
    } else {
      var postCollected = {}
      postsCollected[postId] = false;
      wx.setStorageSync('postsCollected', postsCollected)
    }
  },

  onCollectionTap: function(event) {
    var postsCollected = wx.getStorageSync('posts_collected');
    // var postCollected = postsCollected[]
  },

  onMusicTap: function(event) {
    var isPlayingMusic = this.data.isPlayingMusic;
    if (isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.data.isPlayingMusic = false;
    } else {
      wx.playBackgroundAudio({
        dataUrl: 'http://music.163.com/song/media/outer/url?id=152428.mp3',
        title: '夜夜夜夜-齐秦',
        coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000'
      })
      this.data.isPlayingMusic = true;
    }
  }
})