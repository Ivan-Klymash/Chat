import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ContactsListItem from '../ContactsListItem'
import contactsArray from '../contactsArray'
// import { Button } from '@material-ui/core'
// import { Link } from 'react-router-dom'

const Contacts = ({ likeButtonState }, { changeLike }) => {
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
                <span
                    style={{
                        position: 'absolute',
                        left: '18%',
                        top: '3%',
                        fontSize: '16px',
                    }}
                >
                    You
                </span>
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
            <br />
            {contactsArray.map(({ id, name, image, text, time, data }) => (
                <ContactsListItem
                    key={id}
                    name={name}
                    image={image}
                    text={text}
                    time={time}
                    data={data}
                    isLiked={likeButtonState}
                    changeLike={changeLike}
                />
            ))}

            {/* <Button>
                <Link to="/ella">ellas page</Link>
                <span>describe</span>
            </Button>
            <Button>
                <Link to="/jack">jacks page</Link>
                <span>describe</span>
            </Button>
            <Button>
                <Link to="/john">johns page</Link>
                <span>describe</span>
            </Button> */}
        </>
    )
}

export default Contacts
