import React from 'react'
import ContactsListItem from './ContactsListItem'
import contactsArray from './contactsArray'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import Message from './Message/Message'

const ContactsList = () => {
    return (
        <>
            <div className="container">
                <div className="left-part">
                    <div className="chat-header">
                        <img
                            className="contact-img"
                            src="/images/own-photo.jpg"
                        />
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
                                <input type="submit" value="Search" />
                                <input type="hidden" />
                            </div>
                        </form>
                    </div>

                    <p className="chats-title">Chats</p>
                    {contactsArray.map(
                        ({ id, name, image, text, time, data }) => (
                            <ContactsListItem
                                key={id}
                                name={name}
                                image={image}
                                text={text}
                                time={time}
                                data={data}
                            />
                        )
                    )}
                </div>
                <section className="right-part">
                    <div>на onClick виводити конкретний діалог</div>
                    <Message />
                </section>
            </div>
        </>
    )
}

ContactsList.propTypes = {
    shovChat: PropTypes.string,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default ContactsList
