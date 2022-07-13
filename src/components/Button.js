import styles from '../styles/Button.module.css';

const Button = (props) => {
    const { onClick, name, type } = props;
    
    return <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
        {name}
    </button>
}

export default Button;