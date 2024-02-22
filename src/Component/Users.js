import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Users = ({ user }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/originals/a0/6a/32/a06a32443f89f07daebf18ddb361b46a.png"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{user.email}</ListGroup.Item>
          <ListGroup.Item>{user.address.city}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button>
            <Link style={{ color: 'white' }} to={`/user/${user.id}`}>
              Profile
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Users