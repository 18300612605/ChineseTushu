// pages/shouye/shouye.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    rexiao:"热销榜",
    rexiaolist: [
      { tu: "../../tu/paihang15.png", zi: "" },
      { tu: "../../tu/paihang15.png", zi: "" },
      { tu: "../../tu/paihang15.png", zi: "" },
      { tu: "../../tu/paihang15.png", zi: "" }
    ],
    remensousuo: "热门搜索",
    remenlist: [
      { zi: "2018排行版", se:"#f54d82"},
      { zi: "职场热门" ,se:"#59b080"},
      { zi: "都市言情", se:"#8d4148"},
      { zi: "哈弗大学经济管理类", se:"#7a55c3"},
      { zi: "领导才能", se:"#ded658"}
    ],
    xinfabu:"新发布",
    xinfabulist:[
      {
        hang:[
          { tu: "../../tu/paihang9.png", zi: "三体: 死神永生",zuo:"刘慈欣"},
          { tu: "../../tu/paihang10.png", zi: "人类简史",zuo:""},
          { tu: "../../tu/paihang11.png", zi: "许三观卖血记",zuo:""}
        ]
      },
      {
        hang:[
          { tu: "../../tu/paihang12.png", zi: "未来简史",zuo:""},
          { tu: "../../tu/paihang13.png", zi: "自私的基因",zuo:"理查德道金斯"},
          { tu: "../../tu/paihang14.png", zi: "百年孤独",zuo:"马尔克斯"}
        ]
      }
    ],
    zuozhepaihang:"作者排行",
    zuozhelist:[
      { tu: "../../tu/paihang5.png", zi: "刘慈欣" },
      { tu: "../../tu/paihang6.png", zi: "田小花" },
      { tu: "../../tu/paihang7.png", zi: "马尔克斯" },
      { tu: "../../tu/paihang8.png", zi: "余秋雨" },
      { tu: "../../tu/paihang8.png", zi: "余秋雨" },
      { tu: "../../tu/paihang8.png", zi: "余秋雨" },
      { tu: "../../tu/paihang8.png", zi: "余秋雨" }
    ],
    fenliepaihang:"分类排行",
    fenlielist: [
      { tu: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg", zi: "科幻" },
      { tu: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg", zi: "生活" },
      { tu: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg", zi: "露营" },
      { tu: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg", zi: "职场" },
      { tu: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg", zi: "职场" },
      { tu: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg", zi: "职场" },
      { tu: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg", zi: "职场" },
      ]
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