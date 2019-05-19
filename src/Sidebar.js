import React from 'react'
import { Link } from "@reach/router"
import styles from './Sidebar.css'

export default function Sidebar({children}) {
    return (
        <div className={styles.Container} >
            <nav className={styles.Sidebar}>
                <h5>Customers</h5>
                <Link to="all">All</Link>
                <Link to="unassigned">Unassigned</Link>
                <Link to="my-messages">My Messages</Link>
            </nav>
            <div>{children}</div>
        </div>
        
    )
}