import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { devices } from '../assets/CssBreakPoints'

export default function Greetings({acctInfo, switchAcc, changeAccInfo}) {

    return (
        <Container>
            <Wrap>
                <Header className='header'>
                    Welcome User!
                </Header>
                <SubHeader className='identificationNum'>
                    ID #: {acctInfo.id}
                    </SubHeader>
                <CenterButton>
                    <Button onClick={changeAccInfo}> 
                       Swap Accounts
                    </Button>
                </CenterButton>
                
            </Wrap>
        </Container>
      )
    }
    
    const Container = styled.div`
        padding: 10px 20px;
    
    `
    
    const CenterButton = styled.div`
        
        display:block;
    `
    
    const Wrap = styled.div`
        display: flex;
        flex-direction: column
    `
    
    const Header = styled.h1`
        width: 100%;
        margin: 10px auto;
        text-align: left;
       

        @media only screen and ${devices.xs} {
           font-size: 2.8em;
        }  

        @media only screen and ${devices.lg} {
            font-size: 3.2em !important;
        }
        
    `
    const SubHeader = styled.h2`
        width: 100%;
        margin: 10px auto;
        text-align: left;
    `
    
    const Button = styled.button`
    background-color: #607d8b;
    color: white;
    
    `
