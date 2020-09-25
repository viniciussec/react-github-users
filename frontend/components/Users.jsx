import React, { useEffect, useState } from "react"
import '../styles/Users.css'
import api from '../services/api'

export default function Users() {
    const [users, setUsers] = useState([])


    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/')

            setUsers(response.data)
        }

        loadUsers()
    }, [])

    return (
        <ul>
            {users.map(user => (
                <li>
                    <div className="user-space">
                        <img src={user.avatar_url} alt={user.login} />
                        <h3 className="nickName">{user.login}</h3>
                    </div>
                </li>
            ))}
        </ul>
    )
}