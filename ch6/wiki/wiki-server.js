// -------------------------------------------------------------
// WikiのWebサーバー
// -------------------------------------------------------------
// データベースに接続
const path = require('path')
const neDB = require('nedb')
const db = new neDB({
    filename: path.join(__dirname, 'wiki.db'),
    autoload: true
})

// WEBサーバーを起動
const express = require('express')
const app = express()
const portNo = 3001
// body-parserを有効にする
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.listen(portNo, () => {
    console.log('起動しました', `http://localhost:${portNo}`)
})

// APIの定義
// Wikiデータを返すAPI
app.get('/api/get/:wikiname', (req, res) => {
    const wikiname = req.params.wikiname
    db.find({name: wikiname}, {err, docs} => {
        if (err) {
            res.join({status: false, msg: err})
            return
        }
        if (docs.length === 0) {
            docs = [{name: wikiname, body: ''}]
        }
        res.join({status: true, date: dics[0]})
    })
})

// Wikiデータを書き込むAPI
app.post('/api/put/:wikiname', (req, res) => {
    const wikiname = req.params.wikiname
    console.log('/api/put' + wikiname, req.body)
    // 既存のエントリーがあるか確認
    db.find({'name: wikiname', (req, res) => {
        if (err) {
            res.join({status: false, msg: err})
            return
        }
        const body = req.body.body
        if (docs.length === 0) { // エントリーが無ければ挿入
            db.insert({name: wikiname, body})
        } else { // きぞんのエントリーを更新
            db.update({name: wikiname}, {name: wikiname, body})
        }
        res.join({status: true})
    }})
})

// publicディレクトリを自動で返す
app.use('/wiki/:wikiname', express.static('./public'))
app.use('/edit/:wikiname', express.static('./public'))
app.get('/', (req, res) => {
    res.redirect(302, '/wiki/FrontPage')
})