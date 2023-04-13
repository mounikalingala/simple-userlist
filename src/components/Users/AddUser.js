import React, {useState,useRef} from "react"
import Card from "../UI/Card" 
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()
    
    const [error, setError] = useState()

    const addUserHandler = event => {
        const enteredName = nameInputRef.current.value
        const enteredAge=ageInputRef.current.value
        event.preventDefault()

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Plase enter a valid name and age (non-emty values)"
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Plase enter a valid age (> 0)"
            })
            return;
        }
        props.onAddUser(enteredName, enteredAge)  
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
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
            <input ref={nameInputRef} id="username" type="text"/>
            <label htmlfor="age" >AGE</label>
            <input ref={ageInputRef} id="age" type="number" />
            <Button  type="submit">Add User</Button>
            </form>
            </Card>
        </div>
    )
}
export default AddUser






