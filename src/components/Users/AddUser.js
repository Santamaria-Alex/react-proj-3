import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    //in this case, preventDefault prevents the page from refreshing when SUBMIT button is clicked. 
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return; //return statements finish the function execution
        }

        //adding a '+' turns enteredAge, which is a string, to a number
        if (+enteredAge < 1) {
            return;
        }

        console.log(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={enteredUsername}
                    onChange={usernameChangeHandler} />

                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    value={enteredAge}
                    onChange={ageChangeHandler} />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;