/**
 * Created by wjunj on 16/10/11.
 */

//组件类的第一个字母必须大写，否则会报错，比如HelloMessage不能写成helloMessage。另外，组件类只能包含一个顶层标签，否则也会报错。例如return <h1 className="mt10 ml10">chen</h1> <p>wang</p>
import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                hello word!
            </div>
         )
    }
}

module.exports = Hello;


//子节点通过props获取父节点数据 父节点通过ref控制子节点