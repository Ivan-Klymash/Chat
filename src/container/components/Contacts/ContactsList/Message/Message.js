import React, { useState } from 'react'
import '../ContactsListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Message = () => {
    const arrMessage = [
        {
            image: <img className="contact-img" src="/images/Josefina.jpg" />,
            text: 'Quickly come to the meeting room 1B, we have a big server issue',
            data: '06/25/22',
            time: '14:00 AM',
        },
        {
            image: <img className="contact-img" src="/images/own-photo.jpg" />,
            text: "I'm having breakfast right now, cant you wait for 10 minutes?",
            data: '06/25/22',
            time: '14:05 AM',
        },
        {
            image: <img className="contact-img" src="/images/Josefina.jpg" />,
            text: 'We are losing money! Quick',
            data: '06/25/22',
            time: '14:06 AM',
        },
    ]

    const [message, setMessage] = useState(arrMessage)

    const [newMessage, setNewMessage] = useState({
        text: '',
    })

    const handleTextChange = (e) => {
        setNewMessage((value) => ({
            ...value,
            text: e.target.value,
        }))
    }

    const onSend = (e) => {
        e.preventDefault(), setNewMessage({ text: '' })
        setMessage((value) => {
            return [...value, newMessage]
        })
    }

    return (
        <>
            <div className="active-message-user">
                <img className="contact-img" src="/images/Josefina.jpg" />
                <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="active-message-icon"
                />
                <h4 style={{ marginLeft: '10px', fontSize: '16px' }}>
                    Josefina
                </h4>
            </div>
            <div className="active-message">
                {message.map(({ image, text, data, time }, i) => (
                    <div
                        key={i}
                        style={{
                            padding: '10px',
                        }}
                    >
                        <article
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <div>{image}</div>
                            <p className="form-box form-box-message">{text}</p>
                        </article>
                        <span
                            style={{
                                fontSize: 10,
                                marginLeft: '13%',
                            }}
                        >
                            {data}
                        </span>
                        <span style={{ fontSize: 10, marginLeft: 10 }}>
                            {time}
                        </span>
                    </div>
                ))}
            </div>
            <div className="send-message-area">
                <form className="send-box" onSubmit={onSend}>
                    <input
                        className="send-message"
                        value={newMessage.text}
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Type your message"
                    />
                    <button
                        className="send-icons"
                        type="submit"
                        value="Send"
                    ></button>
                </form>
            </div>
        </>
    )
}

export default Message
