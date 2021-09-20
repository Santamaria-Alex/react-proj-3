import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //dont need useState if using useRef
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  //in this case, preventDefault prevents the page from refreshing when SUBMIT button is clicked.
  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    //prevent submit if fields are empty
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age.",
      });
      return; //return statements finish the function execution
    }

    //adding a '+' turns enteredAge, which is a string, to a number
    //prevent submit if age is <1
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age.",
      });
      return;
    }

    //calling this up on App.js
    props.onAddUser(enteredName, enteredUserAge);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    //set input fields to blank once submitted
    // setEnteredAge("");
    // /////don't need if using useRef instead of useState()
    // setEnteredUsername("");
    // /////don't need if using useRef instead of useState()
  };

  ///////// don't need these 2 handlers if we're using useRef()
  ///////// only if we're using useState() but it's more code.
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            //set value to the default reset input fields
            // value={enteredUsername} ///only required for useState
            // onChange={usernameChangeHandler} ///only requiered for useState()
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            //set value to reset input fields
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
