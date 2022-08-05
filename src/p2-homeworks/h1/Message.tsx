import React from 'react'
import s from './Message.module.css'
type MessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessageProps) {
    return (
        <div className={s.message}>
            <img src={props.avatar}/>
            <div className={s.all}>
                <div>{props.name}</div>
                <div>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
