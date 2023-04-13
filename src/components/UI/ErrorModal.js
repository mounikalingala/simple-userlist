import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}/>
}

const ModalOverlay = props => {
    return (
       <Card className={classes.modal} > 
            <header className={classes.header}>
                <h2 className={classes.header}>{props.title}</h2>
        </header>
        <div className={classes.content}>
                <p className={classes.message}>{props.message}</p>
        </div>
        <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
            </Card>
   )
}

const ErroeModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title}  message={props.title}  onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
        </>
    )
}

export default ErroeModal