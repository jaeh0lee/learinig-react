import React from "react";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = ({ title, message, errorHandler }) => {
  return (
    <div>
      <div onClick={errorHandler} className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={errorHandler}>OKAY</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
