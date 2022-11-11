import React from 'react'
import classes from './Message.module.css'

type messagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: messagePropsType) {
    return (

        <div className={classes.header}>
            <div className={classes.avatar}>
                <img src={props.avatar} alt="err"/>
            </div>

            <div className={classes.message}>

                <div className={classes.userName}>
                    <span>{props.name}</span>
                </div>

                <div className={classes.messageText}>
                    <span>{props.message}</span>
                    <span className={classes.time}>{props.time}</span>
                </div>

            </div>

        </div>
    )
}

export default Message
