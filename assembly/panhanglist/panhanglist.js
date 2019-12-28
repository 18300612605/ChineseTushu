// assembly/panhanglist/panhanglist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:null,
    tiaozhuandingxiang:null
  },
  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dianji: function () {
      console.log(this.properties.tiaozhuandingxiang)
      wx.navigateTo({
        url: this.properties.tiaozhuandingxiang,
      })
    }
  }
})
