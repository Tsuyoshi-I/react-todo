import React, { Component } from 'react'
import { toUnicode } from 'punycode'
let style = {
    maxWidth: '700px',
}

let btn = {
    cursor: 'pointer'
}

// const List = (props) => (
//     <ul className="siimple-list">
//         {/* めも */}
//         {/* props.todos
//         → todos → 親.state.todo
//         → todos → state = {
//             todo: [] ←配列！！！！！！！これがtodos。
//         }
//         todo:[]の中身↓
//         todo:[
//             {title: hoge},
//             {title: huga},
//         ]
//         */}
//         {props.todos.map((todo, i) => {
//             console.log(i)
//             console.log(todo)
//             // todoは配列ではなく『配列の要素』！つまり今回は{title: hoge}
//             return <li
//                 key={i}
//                 className="siimple-list-item siimple--bg-white"
//                 style={style}>
//                 {todo.title}
//                 <span
//                     className="siimple-tag siimple-tag--error siimple-hover"
//                     style={btn}
//                     onClick={() => props.handleDelete(i)}
//                 >
//                     Delete
//                 </span>
//             </li>
//         })}
//     </ul>
// )

// deleteをクリックしたら
// →背景色を変更
// →Listのstate.isDoneがtrueになる
// (もう一度クリックしたら戻る)

// これ↓をどこに実装するか
// deleteボタン(Form?)をクリックしたら
// →liの内state.isDoneがtrueのものを消す


class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDone: []
        }
    }
    render() {
        return (
            <ul className="siimple-list">
                {this.props.todos.map((todo, i) => {
                    console.log(i)
                    console.log(todo)
                    return <li
                        key={i}
                        className="siimple-list-item siimple--bg-white"
                        style={style}>
                        {todo.title}
                        <span
                            className="siimple-tag siimple-tag--error siimple-hover"
                            style={btn}
                            onClick={() => this.props.handleDelete(i)}
                        >
                            Delete
                        </span>
                    </li>
                })}
            </ul>
        )
    }
}

export default List