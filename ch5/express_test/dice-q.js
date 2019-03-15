// Expressのモジュールを取り込んで生成
const express = require('express')
const app = express()
const portNo = 3000

// URLに応じた処理を行う
// ルートへのアクセス
app.get('/', (req, res) => {
    if (!req.query.q) {}
        res.send(
            '<p><a href="?q=6">6面体のサイコロ</a><br />' +
            '<a href="?q=12">12面体のサイコロ<a></a>')
    } else {
        const q = parseInt(req.query.q, 10)
        res.send(
            '今回の値は...' + dice(q))
    }
})

function dice(n) {
    return Math.floor(Math.random() * n) + 1
}

app.listen(portNo, () => {
    console.log('起動しました', `http://localhost:${portNo}`)
})