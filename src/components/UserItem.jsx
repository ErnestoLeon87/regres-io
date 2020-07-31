import React from 'react'
import { Card } from 'react-bootstrap'

export const UserItem = ({ user }) => {

    return (
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={user.avatar} />
            <Card.Body>
                <Card.Title>
                    {user.first_name}
                </Card.Title>
                <Card.Subtitle>
                    <p>{user.email}</p>
                </Card.Subtitle>
            </Card.Body>
        </Card>

    )
}
