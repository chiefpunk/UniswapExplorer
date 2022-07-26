import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar'
import ConnectedAccount from '../ConnectedAccount'
import { getLibrary } from '../../functions'
import TransactionHistory from '../TransactionHistory'

function App() {
  const address = useSelector((state) => state.account.address)
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Navbar />
      {address && (
        <div className="h-screen p-5 bg-blue-secondary">
          <div className="flex flex-row justify-center items-center 2xl:flex-row">
            <TransactionHistory />
          </div>
        </div>
      )}
    </Web3ReactProvider>
  )
}

export default App
