import styles from './styles/App.module.css';
import Form from './components/Form';
import FormInput from './components/FormInput';
import Button from './components/Button';
import { useEffect, useReducer, useRef, useState } from 'react';
import FormSelect from './components/FormSelect';
import { resetLocalStorage, saveValue } from './store/localStorage';
import { isValidReducer } from './reducers/isValidReducer';
import { initialState } from './store/store'
import { successToast, errorToast } from './components/Toasts';
import { ToastContainer } from 'react-toastify';



function App() {

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const countryRef = useRef();
  const [firstName, dispatchFN] = useReducer(isValidReducer, initialState);
  const [lastName, dispatchLN] = useReducer(isValidReducer, initialState);
  const [email, dispatchEmail] = useReducer(isValidReducer, initialState);
  const [country, setCountry] = useState('');
  const [submitted, setSubmitted] = useState(false);

  //Get items from localStorage when component is mounted
  useEffect(() => {
    dispatchFN({ value: localStorage.getItem("firstname"), type: 'name' });
    dispatchLN({ value: localStorage.getItem("lastname"), type: 'name' });
    dispatchEmail({ value: localStorage.getItem("email"), type: 'email' });
    setCountry(localStorage.getItem("country"));

  }, [])


  //Check if all inputs are valid and save them to the localStorage
  useEffect(() => {

    const areInputsValid = firstName?.isValid && lastName?.isValid && email?.isValid;

    //If user submitted  the form and inputs are valid
    if (submitted && areInputsValid) {

      saveValue("firstname", firstName.value);
      saveValue("lastname", lastName.value);
      saveValue("email", email.value);
      saveValue("country", country);

      setSubmitted(false);
      successToast()
      return;
    }
    else if (submitted && !areInputsValid) {
      setSubmitted(false);
      errorToast();
      return;
    }
  }, [firstName, lastName, email, country])



  //Check if the inputs are valid
  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatchFN({ value: firstNameRef?.current.value, type: 'name' });
    dispatchLN({ value: lastNameRef?.current.value, type: 'name' });
    dispatchEmail({ value: emailRef?.current.value, type: 'email' });
    setCountry(countryRef?.current.value)
    setSubmitted(true);


  }

  const resetForm = () => {
    dispatchEmail({type:'reset'})
    dispatchFN({type:'reset'})
    dispatchLN({type:'reset'})
    
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    emailRef.current.value = '';
    countryRef.current.value = '';
    resetLocalStorage();
  }

  return (
    <div className={styles.app}>
      <ToastContainer />
      <Button
        onClick={resetForm}
        type={'reset-btn'}
        name='Reset'></Button>
      <Form>
        <FormInput         
          isValid={firstName ? firstName?.isValid : true}
          defaultValue={firstName?.value}
          ref={firstNameRef}
          label='First Name *' />
        <FormInput
          isValid={lastName ? lastName?.isValid : true}
          defaultValue={lastName?.value}
          ref={lastNameRef}
          label='Last Name *' />
        <FormInput
          isValid={email ? email?.isValid : true}
          defaultValue={email?.value}
          ref={emailRef}
          label='Email *' />
        <FormSelect
          defaultValue={localStorage.getItem('country')}
          ref={countryRef}
          label='Country' />
        <Button id='submit-btn' type="submit" name='Submit' onClick={handleFormSubmit} />
      </Form>
    </div>
  );
}

export default App;
