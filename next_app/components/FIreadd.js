import React, {Componet} from 'react';
import firebase from "firebase";
import Router from 'next/router';
import "firebase/storage";

class Fireadd extends Component {
    styles = {
        fontSize:"12pt",
        padding:"5px 10px"
    }

    // 初期化処理
    constructor(props) {
        super(props);
        this.state = {
            name_str:'',
            msg_srt:'',
            lastID:-1,
            data:[]
        }
        this.getLastID(); // 最後のIDのチェック
        this.doChangeName = this.doChangeName.bind(this);
        this.doChangeMsg = this.doChangeMsg.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChangeName(e){
        this.setState({
            msg_str:e.target.value
        })
    }
    doChangeMsg(e){
        this.setState({
            msg_str:e.target.value
        })
    }

    doAction(e){
        this.addFireData();
        Router.push('fire');
    }

    // 最後のIDを取得
    getLastID(){
        let db = firebase.database();
        let ref = db.ref('sample/');
        let self = this;
        ref.orderByKey()
            .limitToLast(1)
            .on('value', (snapshot)=>{
                let res = snapshot.val();
                for(let i in res){
                    self.setState({
                        lastID:i
                    });
                    return;
                }
            });
    }

    // データを追加する
    addFireData(){
        if (this.state.lastID == -1){
            return;
        }
        let id = this.state.lastID * 1 + 1;
        let db = firebase.database();
        let ref = db.ref('sample/' + id);
        ref.set({
            ID: id,
            message: this.state.msg_str,
            name: this.state.name_str
        });
    }

    // レンダリング
    render(){
        if (this.state.lastID == -1) {
            this.getLastID();
        }
        return (<div>
            {(this.state.lastID == -1)
            ?
            <p>please wait...</p>
            :
            <table>
            <tbody>
                <tr>
                    <th className="label">name</th>
                    <td><input ytpe="text" placeholder="your name." onChange={this.doChangeName} value={this.stae.name_str} /></td>
                </tr>
                <tr>
                    <th className="label">message</th>
                    <td><input type="text" size="40" placeholder="type message..." onChange={this.doChangeMsg} value={this.state.msg_str} /></td>
                </tr>
                <tr><th></th><td>
                <button onClick={this.doAction}>Add</button>
                </td></tr>
            </tbody>
            </table>
            }
        </div>)
    }
}
export default Fireadd;