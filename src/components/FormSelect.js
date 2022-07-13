import React, { useEffect, useState } from "react";
import { countries } from "../store/store"
import styles from '../styles/Form.module.css'

const FormSelect = React.forwardRef((props, ref) => {
    const { label, defaultValue } = props;
    
    
    const renderCities = () => {
        return countries?.map((country) => {
            return <option className={styles.option} value={country} id={country} key={country}>{country}</option>
        })
    }

    return <div className={styles['form-group']}>
        <label className={styles['form-label']}>{label}</label>
        <select ref={ref} defaultValue={defaultValue} className={`${styles['form-input']}`}>
            <option value={null} hidden></option>
            {renderCities()};
        </select>

    </div>
})

export default FormSelect;