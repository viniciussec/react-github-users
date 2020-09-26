import React, { useEffect, useState } from "react"
import '../styles/Users.css'
import api from '../services/api'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default function Users() {
    const [users, setUsers] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


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
                            <img onClick={toggle} src={user.avatar_url} alt={user.login} />
                            <h3 onClick={toggle} className="nickName">{user.login}</h3>
                        </div>
                        <Collapse isOpen={isOpen}>
                            <Card className="accordion">
                                <CardBody>
                                    User URL: {user.url}
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                </li>
            ))}
        </ul>
    )
}