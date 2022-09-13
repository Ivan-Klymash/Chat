import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message/Message'
import Contacts from './Contacts/Contacts'

const ContactsList = ({ likeButtonState }, { changeLike }) => {
    return (
        <>
            <div className="container">
                <div className="left-part">
                    <Contacts
                        likeButtonState={likeButtonState}
                        changeLike={changeLike}
                    />
                </div>
                <div className="right-part">
                    <Message />
                </div>
            </div>
        </>
    )
}

ContactsList.propTypes = {
    shovChat: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    contactsArray: PropTypes.array,
}

export default ContactsList
