import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message/Message'
import Contacts from './Contacts/Contacts'

// import { Route } from 'react-router-dom'
// import { Switch } from '@material-ui/core'

// import EllaPage from '../../pages/EllaPage/EllaPage'
// import JackPage from '../../pages/JackPage/JackPage'
// import JohnPage from '../../pages/JohnPage/JohnPage'

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
            {/* <Switch>
                <Route path="/" exact render={() => <Message />} />
                <Route path="/ella" component={EllaPage} />
                <Route path="/jack" component={JackPage} />
                <Route path="/john" component={JohnPage} />
            </Switch> */}
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
