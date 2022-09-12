import React, { useState } from 'react'
import '../ContactsListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Message = () => {
    const arrMessage = [
        {
            text: 'Quickly come to the meeting room 1B, we have a big server issue',
            image: <img className="contact-img " src="/images/Josefina.jpg" />,
            data: '2022-06-25',
            time: '14:00',
        },
        {
            image: <img className="contact-img" src="/images/own-photo.jpg" />,
            text: "I'm having breakfast right now, cant you wait for 10 minutes?",
            data: '2022-06-25',
            time: '14:05',
        },
        {
            text: 'We are losing money! Quick',
            image: <img className="contact-img " src="/images/Josefina.jpg" />,
            data: '2022-06-25',
            time: '14:06',
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
    // для запису відповіді із сервера
    // const [answer, setAnswer] = useState({ text: '' })

    // const serverTextChange = (e) => {
    //     setAnswer((value) => ({
    //         ...value,
    //         text: e.target.value,
    //     }))
    // }

    // const onSave = (e) => {
    //     e.preventDefault(), setAnswer({ text: '' })
    //     setMessage((value) => {
    //         return [...value, answer]
    //     })
    // }

    return (
        <>
            <div className="active-message-user">
                <img className="contact-img " src="/images/Josefina.jpg" />
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
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <div>{image}</div>
                            <p className="form-box form-box-message">{text}</p>
                        </article>
                        <span
                            style={{
                                fontSize: 10,
                                marginLeft: '12%',
                            }}
                        >
                            {data}
                        </span>
                        <span style={{ fontSize: 10, marginLeft: 10 }}>
                            {time}
                        </span>
                    </div>
                ))}
                {/* відповідь із сервера */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end',
                    }}
                >
                    <p
                        id="new-joke"
                        className=" form-box form-box-message"
                        style={{
                            display: 'none',
                            marginLeft: '10px',
                        }}
                    ></p>
                    <img
                        id="josef-img"
                        className="contact-img"
                        src="/images/Josefina.jpg"
                        style={{
                            display: 'none',
                            marginLeft: '10px',
                            marginRight: '12px',
                        }}
                    />
                </div>
                <span
                    id="anser_date"
                    style={{ fontSize: '10px', marginLeft: '13%' }}
                ></span>
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
                        onClick={showText}
                    ></button>
                </form>
            </div>
            {/* форма для запису відповіді із сервера на сторінці */}
            {/* <div>
                <form onSubmit={onSave}>
                    <input
                        className="get-message"
                        value={answer.text}
                        onChange={serverTextChange}
                        type="text"
                    />
                </form>
            </div> */}
        </>
    )
}

function showText() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((res) => res.json())
        .then((data) => {
            let text = document.getElementById('new-joke')
            text.style.display = 'block'
            let img = document.getElementById('josef-img')
            img.style.display = 'block'
            let message = data.value
            text.textContent = message
            document.append(img)
            // document.append(text)
        })
        .catch(() => console.log('error'))
    let anserDate = document.getElementById('anser_date')
    anserDate.textContent = new Date().toISOString().slice(0, 16)
}

export default Message
