import React,{useState, useContext} from 'react'
import {FirebaseContext} from '../context/firebase'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import {Form} from '../components'
export default function Signin() {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    //check form input element are valid or not
    const isInvalid = (password) ==''||emailAddress=='' ;
    const handleSignIn = (e) =>{
        e.preventDefault();

    }
    //email & password
    return (
        <>
        <HeaderContainer>
        <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignIn} method="POST">
                <Form.Input value={emailAddress} 
                    placeholder="Email address"
                    onChange= {({target}) => setEmailAddress(target.value)}
                />
                <Form.Input 
                   type="password"
                  value={password}
                  placeholder="Password"
                  onChange= {({target}) => setPassword(target.value)}
                  autoComplete="off"
                />
                <Form.Submit disabled={isInvalid} type="submit">
                    Sign In
                </Form.Submit>
            </Form.Base>
            <Form.Text>
                New to Netflix? <Form.Link to="/signup">Sign Up Now
                </Form.Link>
            </Form.Text>
            <Form.TextSmall>
               This page is protected by Google reCAPTCHA to ensure 
               you're not a bot. 
               <Form.Link to="/help"> Learn more.</Form.Link>
            </Form.TextSmall>

          

        
        
        </Form>
        
        </HeaderContainer>
        <FooterContainer />
       </>
    )
}