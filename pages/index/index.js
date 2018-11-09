const Util = require('../../utils/util.js')
Page({
    data: {
        searchKey: '' // 输入查询的关键字
    },
    // 检查输入内容
    checkData() {
        const key = this.data.searchKey
        if (key == '') {
            wx.showModal({
                content: '搜索关键词为空',
                showCancel: false,
                confirmText: '我知道了',
                confirmColor: '#888'
            })
            return false
        }
        return true
    },
    // 执行搜索
    searchTap() {
        if (!this.checkData()) return

        let key = this.data.searchKey

        const index1 = key.indexOf('梦到了')

        if (index1 != -1) key = key.substr(index1 + 3)

        const index2 = key.indexOf('梦到')

        if (index2 != -1) key = key.substr(index2 + 2)

        if(key == '我要修图'){
          wx.navigateTo({
            url: '../photo-edit/index/index'
          })
          return
        }

        wx.navigateTo({
            url: '../detail/detail?key=' + key
        })
    },
    // 搜索内容变动
    changeSearchKey(e) {
        const val = e.detail.value

        this.setData({
            searchKey: val
        })
    },
  menuHide() {
    if (this.data.hasPopped) {
      this.takeback()
      this.setData({
        hasPopped: false,
      })
    }
  },
  menuMain() {
    if (!this.data.hasPopped) {
      this.popp()
      this.setData({
        hasPopped: true,
      })
    } else {
      this.takeback()
      this.setData({
        hasPopped: false,
      })
    }
  },
  menuToPhotoEdit() {
    this.menuMain()
    wx.navigateTo({
      url: '/pages/photo-edit/index/index',
    })
  },
  menuToInfo() {
    this.menuMain()
    wx.navigateTo({
      url: '/pages/leo/leo',
    })
  },
  // menuToAbout() {
  //   this.menuMain()
  //   wx.navigateTo({
  //     url: '/pages/about/about',
  //   })
  // },
  popp() {
    let animationMain = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out'
    })
    let animationOne = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out'
    })
    let animationTwo = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out'
    })
    let animationThree = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out'
    })
    let animationFour = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out'
    })
    animationMain.rotateZ(180).step()
    animationOne.translate(0, -60).rotateZ(360).opacity(1).step()
    animationTwo.translate(-Math.sqrt(3600 - 400), -30).rotateZ(360).opacity(1).step()
    animationThree.translate(-Math.sqrt(3600 - 400), 30).rotateZ(360).opacity(1).step()
    animationFour.translate(0, 60).rotateZ(360).opacity(1).step()
    this.setData({
      animationMain: animationMain.export(),
      animationOne: animationOne.export(),
      animationTwo: animationTwo.export(),
      animationThree: animationThree.export(),
      animationFour: animationFour.export(),
    })
  },
  takeback() {
    let animationMain = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out'
    })
    let animationOne = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out'
    })
    let animationTwo = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out'
    })
    let animationThree = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out'
    })
    let animationFour = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out'
    })
    animationMain.rotateZ(0).step();
    animationOne.translate(0, 0).rotateZ(0).opacity(0).step()
    animationTwo.translate(0, 0).rotateZ(0).opacity(0).step()
    animationThree.translate(0, 0).rotateZ(0).opacity(0).step()
    animationFour.translate(0, 0).rotateZ(0).opacity(0).step()
    this.setData({
      animationMain: animationMain.export(),
      animationOne: animationOne.export(),
      animationTwo: animationTwo.export(),
      animationThree: animationThree.export(),
      animationFour: animationFour.export(),
    })
  },
    // 定义转发
    onShareAppMessage: Util.shareConfig
})