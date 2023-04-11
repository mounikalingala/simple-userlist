import React, {useState} from "react"
import Card from "../UI/Card" 
import Button from "../UI/Button" 
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
    const [userName, setUserName] = useState("")
    const [userAge, setUserAge] = useState("")
    const [error,setError]=useState()

    const addUserHandler = event => {
        event.preventDefault()

        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Plase enter a valid name and age (non-emty values)"
            })
            return;
        }
        if (+userAge < 1) {
            setError({
                title: "Invalid age",
                message: "Plase enter a valid age (> 0)"
            })
            return;
        }
        console.log(userName,userAge)
        props.onAddUser(userName, userAge)
        setUserName('')
        setUserAge('')
    }
    
    const onChageUserName = (event) => {
        setUserName(event.target.value)
    }

    const onChageAge = (event) => {
        setUserAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }
    
    return (
        <div>
       { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlfor="username">USERNAME</label>
            <input id="username" type="text" value={userName} onChange={onChageUserName}/>
            <label htmlfor="age" >AGE</label>
            <input id="age" type="number" value={userAge}  onChange={onChageAge}/>
            <Button type="submit">Add User</Button>
            </form>
            </Card>
        </div>
    )
}
export default AddUser