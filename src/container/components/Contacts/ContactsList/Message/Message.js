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
    // запит на сервер
    // sendMessage = (e) => {
    //     e.preventDefault()
    //     axios
    // }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    borderBottom: '1px solid lightgray',
                    padding: '10px 10px 0px 10px',
                    backgroundColor: 'rgba(219, 219, 219, 0.4)',
                }}
            >
                <img className="contact-img" src="/images/Josefina.jpg" />
                <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{
                        color: 'green',
                        marginLeft: '-10px',
                        marginTop: '30px',
                    }}
                />
                <h4 style={{ marginLeft: '10px', fontSize: '16px' }}>
                    Josefina
                </h4>
            </div>
            <div
                style={{
                    position: 'absolute',
                    height: '78%',
                    overflowY: 'scroll',
                    backgroundColor: 'floralwhite',
                    width: '100%',
                }}
            >
                {message.map(({ image, text, data, time }, i) => (
                    <div
                        key={i}
                        style={{
                            // backgroundColor: 'floralwhite',
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
            <div
                style={{
                    width: '100%',
                    backgroundColor: 'rgba(219, 219, 219, 0.4)',
                    padding: '30px 3% 0px',
                    position: 'absolute',
                    top: '89.5%',
                    borderTop: '1px solid lightgray',
                }}
            >
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
