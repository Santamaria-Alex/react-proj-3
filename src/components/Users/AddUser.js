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

        //prevent submit if fields are empty
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return; //return statements finish the function execution
        }

        //adding a '+' turns enteredAge, which is a string, to a number
        //prevent submit if age is <1
        if (+enteredAge < 1) {
            return;
        }

        console.log(enteredUsername, enteredAge);

        //set input fields to blank once submitted
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
                    //set value to reset input fields
                    value={enteredUsername}
                    onChange={usernameChangeHandler} />

                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    //set value to reset input fields
                    value={enteredAge}
                    onChange={ageChangeHandler} />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;