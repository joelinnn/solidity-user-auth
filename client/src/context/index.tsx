import React, { useContext, createContext, ReactComponentElement } from 'react'
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'
import { ethers } from 'ethers'

const StateContext = createContext('');

export const StateContextProvider = ({ children } : { children: typeof React.Children }) => {
  const { contract } = useContract('0x899aC2Ea8786c2a8874D59bde179D9abd8af0160')
  const { mutateAsync: login, isLoading } = useContractWrite( contract, 'login' )
  const address = useAddress()
  const connect = useMetamask()

  const UserLogin = async () => {
    const data = await login([ _address, _password ])
  }
  return (
    <></>
  )
}

export const useStateContext = () => useContext(StateContext)