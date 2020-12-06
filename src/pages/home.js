import React from 'react'
import {JumbotronContainer} from "../containers/jumbotron";
import {FooterContainer} from '../containers/footer';
import {FaqsContainer} from '../containers/faqs';
import {HeaderContainer} from '../containers/header'
import {Feature, OptForm } from '../components';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films,TV Programes and more</Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="Email Address"/>
                        <OptForm.Button>
                            Try It Now
                        </OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
            
        </>
    )
}


