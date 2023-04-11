import Button from "./Button"
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErroeModal = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onconfirm} />
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
        </div>
    )
}

export default ErroeModal