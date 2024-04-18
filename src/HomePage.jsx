import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Greetings from './components/Greetings'
import AccountInfo from './components/AccountInfo'
import Offers from './components/Offers'
import {TestAccInfo, TestOffers, ControlAccInfo, ControlOffers} from './Data'
import { devices } from './assets/CssBreakPoints'


export default function HomePage() {
	const [acctInfo, setAcctInfo] = useState()
	const [offers, setOffers] = useState()
	const [switchAcc, setSwitchAcc] = useState('test')

	//create function where we grab new information in the local storage when the user clicks on swap accounts 
	//check what accounts 


	const getAccInfo = () => {
		//get data in local storage
			try {
				let getAcctInfo = localStorage.getItem('acctInfo')
				let getOffers = localStorage.getItem('offers')
				setAcctInfo(JSON.parse(getAcctInfo)[0])
				setOffers(JSON.parse(getOffers))
	
			} catch(err) {
				console.error('there was an error when getting items in local storage: ', err)
			}
		
		

	}
	const changeAccInfo = () => {
		//update the data in local storage 
		if (switchAcc === 'test') {
			//we switch the local storage to the control 
			try {
				localStorage.setItem('acctInfo',  JSON.stringify(ControlAccInfo))
				localStorage.setItem('offers',  JSON.stringify(ControlOffers))
	
			} catch(err) {
				console.error('error when setting up local storage: ', err)
				return;
			}
			setSwitchAcc('control')
			getAccInfo()

		} else {

			try {
				localStorage.setItem('acctInfo',  JSON.stringify(TestAccInfo))
				localStorage.setItem('offers',  JSON.stringify(TestOffers))
	
			} catch(err) {
				console.error('error when setting up local storage: ', err)
				return;
			}
			setSwitchAcc('test')
			getAccInfo()
		}
	}

	
	useEffect(() => {
		//add data in local storage
		//call the get Acc Info 
		try {
			if (localStorage.hasOwnProperty('acctInfo')  && localStorage.hasOwnProperty('offers')) {
				let acctInfo = localStorage.getItem('acctInfo')
				let id = JSON.parse(acctInfo)[0]['id']
				if (id === '1234567890') {
					setSwitchAcc('test')
				} else {
					setSwitchAcc('control')
				}

			} else {
			localStorage.setItem('acctInfo',  JSON.stringify(TestAccInfo))
			localStorage.setItem('offers',  JSON.stringify(TestOffers))
			}
			

		} catch(err) {
			console.error('error when setting up local storage: ', err)
			return;
		}

		getAccInfo()


	}, [] )

    return (
        <>
		{(acctInfo && offers) && 
			<Container> 
				<Greetings acctInfo={acctInfo} switchAcc={switchAcc} changeAccInfo={changeAccInfo} />
				<AccountInfo acctInfo={acctInfo}  />
				<Offers offers={offers} />
			</Container>
		}
           
        </>
    )
    
}


const Container = styled.div`
	
	@media only screen and ${devices.xs} {
		width: 100%;
	  }  
	
	  @media only screen and ${devices.md} {
		width: 65% !important;
		}
`