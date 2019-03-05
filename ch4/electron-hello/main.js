// Electronの実行に必要なモジュールを取り込む
const electron = require('electron')
const path = require('path')
const url = require('url')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

// Electronのライフサイクルを定義
let mainWindow // メインウインドウを表す変数
app.on('ready', createWindow)
app.on('window-all-closed', function () {
    if (mainWindow === null) createWindow()
})

// ウインドウを作成してコンテンツを読み込む
function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600})
    mainWindow.loadURL(url.format({ // 読み込むコンテンツを指定
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))
    // ウインドウが閉じるときの処理
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}