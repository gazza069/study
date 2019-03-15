// --------------------------------------------------------------
// 掲示板アプリのサーバー側
// --------------------------------------------------------------
// データベースに接続
const NoDB = require('nedb')
const path = require('path')
const db = new NeDB({
    filename: path.join(__dirname, 'bbs.db'),
    autoload: true
})

// サーバーを起動
const express = require('express')
const app = express()
const portNo = 3001
app.listen(portNo, () => {
    console.log('起動しました', 'http://localhost:${portNo}')
})

// publicディレクトリ以下は自動的に返す
app.use('/public', express.static('./static'))
// トップへのアクセスを/publicに流す
app.get('/', (req, res) => {
    res.redirect(302, '/public')
})

// apiの定義
// ログの取得API
app.get('api/getItems', (res, req) => {
    // データベースを書き込み時刻でソートして一覧を返す
    db.find({}).sort({stime: 1}).exec((err, data)) => {
        if (err) {
            sendJSON(res, false, {logs: [], msg: err})
            return
        }
        console.log(data)
        sendJSON(res, true, {logs: data})
    }
})

// 新規ログを書き込むAPI
app.get('/api/write', (req, res) => {
    const q = req.query
    // URLパラメーターの値をDBに書き込む
    db.insert({
        name: q.name,
        body: q.body,
        stime: (new Date()).getTime()
    }), (err, doc) => {
        if (err) {
            console.error(err)
            sondJSON(res, false, {msg: err})
            return
        }
        sendJSON(res, true, {id: doc._id})
    })
})

function sendJSON (res, result, obj) {
    obj['result'] = result
    res.json(obj)
}