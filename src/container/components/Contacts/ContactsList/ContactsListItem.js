import PropTypes from 'prop-types'
import React from 'react'
import './ContactsListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ContactsListItem = ({ name, image, text, data }) => {
    return (
        <>
            <div className="container">
                <button className="contact-item-btn">
                    <div className="contact-item">
                        <img className="contact-img" src={image} />
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            style={{
                                marginTop: '30px',
                                color: 'green',
                                marginLeft: '-10px',
                            }}
                        />

                        <div className="contact-item-name">
                            {name}
                            <div style={{ fontWeight: 100 }}>{text}</div>
                        </div>
                        <span className="contact-item-data">{data}</span>
                    </div>
                </button>
            </div>
        </>
    )
}

ContactsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default ContactsListItem
