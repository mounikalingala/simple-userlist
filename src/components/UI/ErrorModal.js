import Button from "./Button"
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErroeModal = (props) => {
    return (
        <Card className={classes.modal} > 
            <header className={classes.header}>
                <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
                <p className={classes.message}>{props.message}</p>
        </div>
        <footer>
            <Button className={classes.actions}>Okay</Button>
        </footer>
        </Card>
    )
}

export default ErroeModal