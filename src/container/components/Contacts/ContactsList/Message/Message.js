import React, { useState } from 'react'
import '../ContactsListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Message = () => {
    const arrMessage = [
        {
            image: <img className="contact-img" src="/images/Josefina.jpg" />,
            text: 'Quickly come to the meeting room 1B, we have a big server issue',
            data: '09/19/21',
            time: '4:00 AM',
        },
        {
            text: "I'm having breakfast right now, cant you wait for 10 minutes?",
            data: '09/19/21',
            time: '4:05 AM',
        },
        {
            image: <img className="contact-img" src="/images/Josefina.jpg" />,
            text: 'We are losing money! Quick',
            data: '09/19/21',
            time: '4:07 AM',
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
            <div style={{ display: 'flex' }}>
                <img className="contact-img" src="/images/Josefina.jpg" />
                <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{
                        color: 'green',
                        marginLeft: '-10px',
                        marginTop: '30px',
                    }}
                />
                <h4>Josefina</h4>
            </div>
            <hr />

            {message.map(({ image, text, data, time }, i) => (
                <div key={i}>
                    <article style={{ display: 'flex' }}>
                        <div>{image}</div>
                        <p
                            style={{
                                backgroundColor: 'grey',
                                marginLeft: 10,
                            }}
                        >
                            {text}
                        </p>
                    </article>
                    <span style={{ fontSize: 10 }}>{data}</span>
                    <span style={{ fontSize: 10, marginLeft: 10 }}>{time}</span>
                </div>
            ))}

            <form className="form-box" onSubmit={onSend}>
                <input
                    className="chat-search"
                    value={newMessage.text}
                    onChange={handleTextChange}
                    type="text"
                    placeholder="Type your message"
                />
                <button type="submit" value="Send">
                    Відпр.
                </button>
            </form>
        </>
    )
}

export default Message
