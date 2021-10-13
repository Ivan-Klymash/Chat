import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ContactsListItem from '../ContactsListItem'
import contactsArray from '../contactsArray'

const Contacts = () => {
    return (
        <>
            <div className="chat-header">
                <img className="contact-img" src="/images/own-photo.jpg" />
                <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{
                        color: 'green',
                        marginLeft: '-10px',
                    }}
                />

                <form>
                    <div className="form-box">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            style={{
                                color: 'grey',
                                paddingRight: '10px',
                            }}
                        />
                        <input
                            className="chat-search"
                            type="search"
                            name="text"
                            title="Search"
                            placeholder="Search or start new chat"
                            autoComplete="off"
                            spellCheck="true"
                        />
                        <input type="hidden" />
                    </div>
                </form>
            </div>
            <p className="chats-title">Chats</p>
            {contactsArray.map(({ id, name, image, text, time, data }) => (
                <ContactsListItem
                    key={id}
                    name={name}
                    image={image}
                    text={text}
                    time={time}
                    data={data}
                />
            ))}
        </>
    )
}

export default Contacts
