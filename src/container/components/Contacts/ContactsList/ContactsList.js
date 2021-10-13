import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message/Message'
import Contacts from './Contacts/Contacts'
// import { connect } from 'react-redux'

const ContactsList = () => {
    return (
        <>
            <div className="container">
                <div className="left-part">
                    <Contacts />
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

// const mapStateToProps = (state) => ({
//     contactsArray: state.message,
// })

export default ContactsList
