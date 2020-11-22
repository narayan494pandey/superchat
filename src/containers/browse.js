import React, { useContext, useState, useEffect } from 'react';
import {SelectProfileContainer} from './profiles'
import {FirebaseContext} from '../context/firebase'
import {Loading} from '../components';
import { Header } from '../components';
export function BrowseContainer({slides}){
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const {firebase} = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {};
    useEffect(() =>{
        setTimeout(() =>{
            setLoading(false);
        },3000);
    },[profile.displayName])
    return profile.displayName ? (
        <>
          {loading ?( <Loading src= {user.photoURL} />):(<Loading.ReleaseBody />)}
          <Header src="joker1">
          <Header.Feature>
          <Header.FeatureCallOut>
            Watch Joker Now
          </Header.FeatureCallOut>
          <Header.Text>
          What is Lorem Ipsum Lorem Ipsum is simply dummy text
           of the printing and typesetting industry Lorem Ipsum 
           has been the industry's standard dummy text ever since
           e 1500s when an unknown printer took a galley of type and
            scrambled it to make a type specimen book it has?
          
          </Header.Text>
          
          </Header.Feature>
          
          </Header>
          
        </>
        ):
        (<SelectProfileContainer user={user} setProfile={setProfile}/>)
        
        
    
}