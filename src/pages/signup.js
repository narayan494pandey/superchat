import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';


export default function Singup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid =  firstName ===''  || password === '' || emailAddress === '';
    const handleSignup = (event) => {
        event.preventDefault();
    
        return firebase
          .auth()
          .signUpWithEmailAndPassword(emailAddress, password)
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
          .catch((error) => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
          });
      };

    return (
        <>
        <HeaderContainer>
          <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error data-testid="error">{error}</Form.Error>}
  
            <Form.Base onSubmit={handleSignup} method="POST">
                <Form.Input
                placeholder="First Name"
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
                />
             
              <Form.Input
                placeholder="Email address"
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
              />
              <Form.Input
                type="password"
                value={password}
                autoComplete="off"
                placeholder="Password"
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
                Sign Up
              </Form.Submit>
            </Form.Base>
          </Form>
        </HeaderContainer>
        <FooterContainer />
      </>
    )
}