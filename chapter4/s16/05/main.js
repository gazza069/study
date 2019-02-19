
var app = new Vue({
    el: '#app',
    data: {
      // フォームの入力と紐付けるデータ
      budget: 300,
      // 表示件数
      limit: 2,
      // もとになるリスト
      list: [
        { id: 1, name: 'りんご', price: 100 },
        { id: 2, name: 'ばなな', price: 200 },
        { id: 3, name: 'いちご', price: 400 },
        { id: 4, name: 'おれんじ', price: 300 },
        { id: 5, name: 'めろん', price: 500 }
      ]
    },
    computed: {
      // budget以下のリストを返す算出プロパティ
      matched: function () {
        return this.list.filter(function (el) {
          return el.price <= this.budget
        }, this)
      },
      // matchedで返ったデータをlimit件返す算出プロパティ
      limited: function () {
        return this.matched.slice(0, this.limit)
      }
    }
})
