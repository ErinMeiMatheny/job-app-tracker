import React, { useState } from 'react'
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../Context/AuthContext"
import { Link, useHistory } from "react-router-dom"





export default function Home() {

    const [error, setError] = useState("")
    const { currentUser, signOut } = useAuth()
    const { history } = useHistory()

    async function handleLogout() {

        setError("")

        try {
            await signOut()
            history.push("/signin")
        } catch (error) {
            setError("Failed signout")
        }
    }
    


    return (

        <>
        <Card>
            <Card.Body>
            <h3 className="text-center mb-4"> Your Profile </h3>
            {error && <Alert varient="danger">{error}</Alert>}
            
            
            </Card.Body>
        </Card>
        <div className="w-110 text-center mt3">
        <Button varient="link" onClick={handleLogout}>Log out</Button>
        </div>
        </>

    )
}


