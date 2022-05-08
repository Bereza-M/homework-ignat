import React from 'react'
import s from './Message.module.css'

type propsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
};

function Message(props: propsType) {
    return (
        <div className={s.field}>
            <span>
                <img className={s.avatar} src={props.avatar} alt='ava'/>
            </span>
            <div className={s.block}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message

// <div className={s.message}>
//     <img src={props.avatar} alt='ava' />
//     <div className={s.field}>
//     <div className={s.name}>
//     {props.name}
// </div>
// <div className={s.message}>
//     {props.message}
// </div>
// <div className={s.time}>
//     {props.time}
// </div>
// </div>
//
// </div>