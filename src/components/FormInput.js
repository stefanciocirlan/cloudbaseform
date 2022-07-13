import React, { useEffect, useState } from 'react';
import styles from '../styles/Form.module.css'

const FormGroup = React.forwardRef((props, ref) => {

    const { label, isValid, defaultValue } = props;
    
   
    return <div className={styles['form-group']}>
        <label className={styles['form-label']}>{label}</label>
        <input
       
            defaultValue={defaultValue}
            ref={ref}
            className={`${isValid ? styles.valid : styles.invalid} ${styles['form-input']}`} />
    </div>
});


export default FormGroup;