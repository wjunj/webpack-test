/**
 * Created by wjunj on 16/10/11.
 */

import React from 'react';

class WaitList extends React.Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }
    renderComment({content,createTime,isAide,price,hasAppend}){
        return (
            <a href="./hello">
                <div className="expertMobile-answer-content">
                    <p>{content}</p>
                    <div className="expertMobile-answer-tag">
                        <span className="expertMobile-answer-time">{createTime}</span>
                        {isAide&&'<span className="expertMobile-isAssistant">助理</span>'}
                        {hasAppend&&<span className="expertMobile-answer-add">追问</span>}
                        <span className="expertMobile-answer-money">￥{price}</span>
                    </div>
                </div>
            </a>
        )
    }
    render(){
        let _dataList = this.props.dataList;
            return (
            <div className="expertMobile-answer-body expertMobile-body">
                {_dataList&&_dataList.map(this.renderComment)}
            </div>
            )
    }
}

class Wait extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList:""
        }
    }
    json(response){
        return response.json();
    }
    componentDidMount(){
        fetch('http://localhost:8188/list.json')
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({dataList:data.data})
                }
            )
            .catch(e => console.log("Oops, error", e));
    }
    render() {
        return (
            <div className="expertMobile-answer expertMobile-main">
                <WaitList dataList={this.state.dataList}/>
                <div id="answer-noData">
                    <div className="answer-noData">
                        <i className="noData-icon"></i>
                        <p>暂时没有新提问</p>
                        <p className="noData-hint">有新提问会显示在这一页哦~</p>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Wait;

