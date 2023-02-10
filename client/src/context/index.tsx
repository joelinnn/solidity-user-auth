import React, { useContext, createContext, ReactComponentElement } from 'react'
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'
import { ethers } from 'ethers'

const StateContext = createContext('');

export const StateContextProvider = ({ children } : { children: typeof React.Children }) => {
  const { contract } = useContract('')
  const address = useAddress()
  const connect = useMetamask()

  return (
    <></>
  )
}

export const useStateContext = () => useContext(StateContext)