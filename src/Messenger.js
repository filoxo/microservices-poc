import React from 'react'
import styles from './Messenger.css'

export default function Messenger(props) {
    return (
        <div className={styles.MessengerContainer}>
            <nav className={styles.MessengerNav}>
                <h5>Customers</h5> 
                <button type="button">All</button>
                <button type="button">Unassigned</button>
                <button type="button">My Messages</button>
            </nav>
            <div>
                 
            </div>
            <div></div>
        </div>
    )
}