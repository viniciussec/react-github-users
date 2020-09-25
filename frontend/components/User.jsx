import React, { useEffect, useState } from "react"
import '../styles/User.css'
import api from '../services/api'

export default function User() {
    const [users, setUsers] = useState([])


    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/')

            setUsers(response.data)
        }

        loadUsers()
    }, [])

    return (
        <ul className="user-space">
            {users.map(user => (
                <li>
                <img src={user.avatar_url} alt={user.login} />
            <h3 className="nickName">{user.name}</h3>
            </li>
            ))}
        </ul>
    )
}