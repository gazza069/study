// httpモジュールを読み込む
const http = require('http')

// ウェブサーバーを実行
const svr = http.createServer(handler)
svr.listen(8081)

// サーバーにアクセスがあった時の処理
function handler (req, res) {
    console.log('url:', req.url)
    console.log('method:', req.method)
    // httpヘッダーを出力
    res.writeHead(200, {'Content-Type': 'text/html'})
    // レスポンスの本体を出力
    res.end('<h1>Hello, World!</h1>\n')
}