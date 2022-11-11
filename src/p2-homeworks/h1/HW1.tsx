import React from 'react'
import classes from './HM1.module.css'
import Message from './Message'

// Прошу прощения за кривую и не адаптивную верстку))

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Samuil Prytchyn',
    message: 'Hello, props!',
    time: '15:45',
}


function HW1() {
    return (
        <div className={classes.background}>
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
