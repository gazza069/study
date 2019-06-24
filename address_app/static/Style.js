import css from 'styled-jsx/css';

export default <style>{`
    body {
        margin:10px;
        padding:5px;
        color:#669;
    }
    header {
        font-size:64pt;
        font-weight:bold;
        text-align:right;
        letter-spacing:-8px;
        color:ddddff;
        margin:-32px 5px
    }
    footer {
        color:#99c;
        font-size:12pt;
        text-align:right;
        border-bottom:1px solid #99c;
        margin:50px 0 10px 0;
        position: relative;
        bottom: 10px;
        right: 10px;
        left:10px;
    }
    h1 {
        font-size:22pt;
        font-weight:bold;
        text-align:left;
        letter-spacing:0;
        color:#77a;
        margin:-50px 0 50px 0;
     }
    p {
        margin:0;
        color:#669;
        font-size:16pt;
    }
    hr {
        margin:25px 0;
    }
    tr {
        margin:0;
    }
    th {
        font-size:14pt;
        font-weight:plain;
        text-align:left;
        padding:0 20px;
        margin:0;
    }
    td {
        font-size:14pt;
        font-weight:plain;
        text-align:left;
        padding:0 20px;
        margin:0;
    }
    .label {
        font-size:14pt;
        margin:20px 5px;
    }
    .login {
        text-align:right;
    }
    .account {
        cursor:pointer;
        font-size:12pt;
        padding:5px 10px;
        color:gray;
        border:2px solid lightgray;
    }
    fieldset {
        margin: 0 0 30px 0;
    }
    input {
        border: 0 solid white;
        border-bottom:1px solid gray;
        font-size:14pt;
    }
    button {
        font-size:14pt;
        cursor:pointer;
    }
    li {
        font-size:14pt;
        cursor:pointer;
    }
`}</style>;