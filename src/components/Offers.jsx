import React from 'react'
import styled from 'styled-components'
import { devices } from '../assets/CssBreakPoints'
import { Link } from 'react-router-dom'


export default function Offers({offers}) {
  const offerTitles = ['Current balance', 'Offer discount', 'Amount after discount', 'Number of payments', 'Payment date']

  return (
    <OffersContainer className='marketing-offers'>
      {offers.map((data, index) => (
        <EachOffer key={index} className={`offerType-save-${data.offerPercent}`}>
          <OfferHeader>
            <OfferTitle>{data.offerPercent === '10%' ? 'LUMPSUM' : 'PAYMENT PLAN'}</OfferTitle>
            <OfferTitle>SAVE {data.offerPercent}</OfferTitle>
          </OfferHeader>
          <Table>
            <TableRow>
              <TableData>
                <Title>Current Balance: </Title>
              </TableData>
              <TableData>
                <Description>{data.balance}</Description>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                <Title>Offer discount: </Title>
              </TableData>
              <TableData>
                <Description>{data.discount}</Description>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                <Title>Amount after discount: </Title>
              </TableData>
              <TableData>
                <Description>{data.amtAfterDiscount}</Description>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                <Title>Number of payments: </Title>
              </TableData>
              <TableData>
                <Description>{data.numOfPayments}</Description>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                <Title>Payment date: </Title>
              </TableData>
              <TableData>
                <Description>{data.paymentDate}</Description>
              </TableData>
            </TableRow>
          </Table>
            <Link to='/acceptOffer'> <Button>Accept Offer</Button> </Link>
          
        </EachOffer>
      ))}
    
    </OffersContainer>
  )
}

const OffersContainer = styled.div`

  @media only screen and ${devices.xs} {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
  }  

  @media only screen and ${devices.md} {
      flex-direction: row !important;
      width: 100% !important;
    }
  
`

const Title = styled.p`
    margin: 0;
    padding: 0;
    display:inline-block;
    text-align: left;
    width: 100%;
`

const Description = styled.p`
    margin: 0;
    padding: 0;
    display:inline-block;
    text-align: right;
    width: 100%;
`

const EachOffer = styled.div`
    border: 1.5px solid #e6e6e6;
    border-radius: 6px !important;
    margin: 10px 20px;
    padding: 10px;
    box-shadow: 0 0 20px #00000008;
`

const OfferHeader = styled.div`

`
const OfferTitle = styled.p`
    text-align: center;
    margin: 2px;
    padding: 2px;
`

const Table = styled.table`
    width: 100%;

    @media only screen and ${devices.xs} {
      margin: auto;
      padding: 5px;
    } 

    @media only screen and ${devices.lg} {
      margin: 10px 5px 5px 5px !important;
      
    }

   
`

const TableRow = styled.tr`
`

const TableData = styled.td`
`
const WrapButton = styled.div`
  width: 100%;
  margin: auto;
`
const Button = styled.button`
  margin:0 auto;
  display:block;
  background-color: #9e9e9e70;
`
