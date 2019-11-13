import React, { Component } from 'react';
import Form from './Form'
import List from './List';

export default class App extends Component {
  // 初期化処理
  constructor(props) {
    super(props)
    this.state = {
      todo: []
    }
    // handleAddのthisを固定
    // thisはApp
    this.handleAdd = this.handleAdd.bind(this)
    // これがないとthisが呼び出し先になる。
    this.handleDelete = this.handleDelete.bind(this)
  }

  // 保存処理
  handleAdd(e) {
    // リダイレクト帽子
    e.preventDefault()

    // FormのonSubmit(送信されたら)でprops.handleAddして呼び出される
    // e.target→イベントが発火した要素→送信された要素→form要素
    // title→form(Formこんぽ)のname
    // value→input欄のテキスト
    this.state.todo.push({ title: e.target.title.value })// まだ保存されてない
    this.setState({ todo: this.state.todo })//保存完了
    e.target.title.value = ""// inputのvalueを空に
    console.dir(this.state.todo)
    console.dir(this.state.todo[0].title)
  }

  // 削除処理
  handleDelete(i) {
    // ary.splice(deleteがクリックされたli, 1)
    // ary → this.state.todo
    // this.state.todo.splice(hoge, 1)
    // hoge → deleteがクリックされたやつ
    this.state.todo.splice(i, 1)
    this.setState({ todo: this.state.todo })
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Todo</h1>
        {/* FormのonSubmit(送信されたら)でprops.handleAddして呼び出される */}
        <Form handleAdd={this.handleAdd} />
        <div className="siimple-rule"></div>
        <List todos={this.state.todo} handleDelete={this.handleDelete} />
        {/* <List /> */}
      </div>
    )
  }
}