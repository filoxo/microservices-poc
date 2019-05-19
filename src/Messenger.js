import React from 'react'
import styles from './Messenger.css'
import { Router } from "@reach/router"
import AllConversations from './AllConversations'
import Sidebar from './Sidebar'

export default function Messenger(props) {
    return (
        <div className={styles.MessengerContainer}>
            <Router>
                <Sidebar path="conversations">
                    <AllConversations default path="all/*"/>
                </Sidebar>
            </Router>
        </div>
    )
}