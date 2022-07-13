import styles from '../styles/Form.module.css';

const Form = (props) => {
    return <>
        <form className={styles.form}>
            <h1 className={styles.header}>Contact Form</h1>
            {props.children}
            <footer className={styles.footer}> (*) Mandatory fields</footer>
        </form>
    </>
}


export default Form;