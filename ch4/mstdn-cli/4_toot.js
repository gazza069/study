const Mastodon = require('mastodon-api')
const fs = require('fs')
const path = require('path')
const instanceUri = 'https://pawoo.net'

// ファイルから情報を読み込む
const token = fs.readFileSync(path.join(__dirname, 'token.json'))

// マストドンのAPIクライアントを作成
const M = new Mastodon({
    access_token: token,
    timeout_me: 60 * 1000,
    api_url: instanceUri + '/api/v1'
})

// 発言（Toot）する
M.post('statuses',
    {sutatus: 'TEST TEST by cli'},
    (err, data, res) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(res)
    })