import React, {useState} from "react"
import Card from "../UI/Card" 
import Button from "../UI/Button" 
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
    const [userName, setUserName] = useState("")
    const [userAge,setUserAge]=useState("")

    const addUserHandler = event => {
        event.preventDefault()

        if (userName.trim.length === 0 || userAge.trim.length === 0) {
            return;
        }
        if (+userAge < 1) {
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
    
    return (
        <div>
        <ErrorModal title="An error occured!" message="Something went wrong." />
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