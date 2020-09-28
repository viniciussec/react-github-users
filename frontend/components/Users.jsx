import React, { useEffect, useState } from "react"
import '../styles/Users.css'
import api from '../services/api'
import { Collapse, CardBody, Card } from 'reactstrap';

export default function Users() {
    const [users, setUsers] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const toggle = (e) => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/')
            const userLogins = response.data.map(user => user.login)
            const userInfo = userLogins.map(function loadUsersInfo(login) {
                const responseInfo = api.get(`/${login}`)
                return responseInfo
            })
            
            const result = await Promise.all(userInfo)
            const resultArray = result.map(e => e.data)
            setUsers(resultArray)
        }

        loadUsers()
    }, [])

    return (
        <ul>
            {users.map(user => (
                <li>
                    <div className="user-space">
                        <div className="closed-user">
                            <img onClick={toggle} src={user.avatar_url} alt={user.login} id={user.login} />
                            <h3 onClick={toggle} className="nickName" id={user.login}>{user.login}</h3>
                        </div>
                        <Collapse isOpen={isOpen}>
                            <Card className="accordion">
                                <CardBody className="accordion-text">
                                    <label>User Name: {user.name}</label>
                                    <label>User Bio: {user.bio}</label>
                                    <label>User Location: {user.location}</label>
                                    <label>User Blog: {user.blog} </label>
                                    <label>Number of followers: {user.followers}</label>
                                    <label>Number of public repositories: {user.public_repos}</label>
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                </li>
            ))}
        </ul>
    )
}