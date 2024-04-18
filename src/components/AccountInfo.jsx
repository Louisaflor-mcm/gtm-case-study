import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { devices } from '../assets/CssBreakPoints'


export default function AccountInfo({acctInfo}) {
    const [toggle, setToggle] = useState(true)

    const toggleAccountInfo = () => {
        setToggle(!toggle)
    }

    return (
        <Container>
            <Wrap>
                <div>
                    <div>
                        <Title> Creditor: </Title>
                        <Description>{acctInfo.creditor}</Description>
                    </div>
                    {toggle ? 
                        <div onClick={toggleAccountInfo}>
                            <ToggleInfo>
                            <div>
                                <Title>Account:</Title>
                                <Description>{acctInfo.accountNum}</Description>
                            </div>
                            <div>
                                <Title>Merchant:</Title>
                                <Description>{acctInfo.merchant}</Description>
                            </div>
                            </ToggleInfo>
                            <ToggleButton>Hide Details</ToggleButton>
                        </div> 
                        : 
                        <div onClick={toggleAccountInfo}><ToggleButton>Show Details</ToggleButton></div>}
                    </div>

                    <BalanceWrap>
                        <BalanceAmount>${acctInfo.balance}</BalanceAmount>
                        <BalanceTitle>Balance </BalanceTitle>
                    </BalanceWrap>
            </Wrap>
        </Container>
      )
    }
    
    const Container = styled.div`
        padding: 10px 20px;
    
    `
    const BalanceWrap = styled.div`
        display: flex;
        flex-direction: column;
    `

    const Wrap = styled.div`
        padding: 5px 7px;
        display: flex;
        flex-direction: row;
        border: solid black 1px;
        border-radius: 7px;
        justify-content: space-between;
    `

    const ToggleInfo = styled.div`
        display: flex;
        flex-direction: column
    `

    const BalanceTitle = styled.p`
        font-size: 18px;
        margin: 0;
        text-align: right;
        font-weight: 600;

    `

    const BalanceAmount = styled.p`
        font-size: 24px;
        margin: 0;
        font-weight: 700;
    `

    const Title = styled.p`
        font-size: 14px;
        margin: 3px 3px 1px 5px;
        display:inline-block;
    `
    const Description = styled.p`
        font-size: 14px;
        margin: 3px 3px 1px 5px;
        display:inline-block;
        font-weight: 700;
        text-transform: uppercase
    `

    const ToggleButton = styled.div`
        font-size: 13px;
        margin: 5px;
        transition: color 0.3s;
        cursor: pointer;
        color: blue;
        &:hover {
            text-decoration: underline;
        }
    `
    

