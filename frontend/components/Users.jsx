import React, { useEffect, useState } from "react"
import '../styles/Users.css'
import api from '../services/api'
import { Collapse, CardBody, Card } from 'reactstrap';

export default function Users() {
    const [users, setUsers] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const toggle = (e) => {
        console.log(e.target.id)
        setIsOpen(!isOpen)
    }

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
                        <div className="closed-user">
                            <img onClick={toggle} src={user.avatar_url} alt={user.login} id={user.login}/>
                            <h3 onClick={toggle} className="nickName" id={user.login}>{user.login}</h3>
                        </div>
                        <Collapse isOpen={isOpen}>
                            <Card className="accordion">
                                <CardBody className="accordion-text">
                                    <label>User URL: {user.url}</label>
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                </li>
            ))}
        </ul>
    )
}