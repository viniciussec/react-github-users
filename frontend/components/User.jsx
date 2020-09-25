import React from "react"
import '../styles/User.css'

export default function User() {
    return (
        <li className="user-space">
            <img src="https://avatars1.githubusercontent.com/u/59098583?v=4" alt="avatar"/>
            <h3 className="nickName">Nickname</h3>
        </li>
    )
}