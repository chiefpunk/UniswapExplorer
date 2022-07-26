import React, { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { formatEther, parseEther } from '@ethersproject/units'
import { Contract } from '@ethersproject/contracts'
import { WebSocketProvider } from '@ethersproject/providers'
import { SwapContractAddress } from '../../utils'
import ERC20ABI from '../../abi/ERC20.abi.json'
import Card from '../Card'

const API_KEY = process.env.REACT_APP_API_KEY

export default function TransactionHistory() {
  const { account, library } = useWeb3React()
  const [transactions, setTransactions] = useState([])
  const provider = new WebSocketProvider(
    `wss://eth-ropsten.alchemyapi.io/v2/${API_KEY}`
  )
  const contract = new Contract(SwapContractAddress, ERC20ABI, provider)
  contract.on('Transfer', (from, to, value, event) => {
    let info = {
      tx: event.transactionHash,
      from: from,
      to: to,
      value: formatEther(value),
    }
    setTransactions([...transactions, info])
  })

  return (
    <Card
      title="Transaction History"
      className="w-full text-center mb-8 lg:mx-8 lg:w-full"
    >
      <table class="table-fixed">
        <thead>
          <tr>
            <th>Tx Hash</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr>
              <td>{transaction.tx}</td>
              <td>{transaction.from}</td>
              <td>{transaction.to}</td>
              <td>{transaction.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
