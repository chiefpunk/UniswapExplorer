import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import { Contract } from '@ethersproject/contracts'
import {
  updateWalletAddress,
  disconnectWallet,
  addToken,
} from '../../store/account/accountSlice'
import { injectedConnector } from '../../connectors'
import metamaskIcon from '../../assets/metamask-fox.svg'
import Button from '../Button'

export default function Navbar(props) {
  const { chainId, account, activate, deactivate, library } = useWeb3React()
  const dispatch = useDispatch()

  useEffect(() => {
    if (chainId && chainId !== 3) {
      alert('We only use the Ropsten Test Network')
      deactivate()
    } else if (account && library) {
      dispatch(updateWalletAddress(account))
    }
  }, [account, chainId, deactivate, dispatch])

  const onConnectMetaMask = () => {
    activate(injectedConnector)
  }

  const onDisConnectMetaMask = () => {
    dispatch(disconnectWallet)
    dispatch(disconnectWallet())
    deactivate()
  }

  return (
    <div className="flex justify-end px-8 py-4 bg-blue-primary">
      {!account ? (
        <Button
          title="Connect Wallet"
          icon={metamaskIcon}
          onClick={onConnectMetaMask}
        />
      ) : (
        <Button
          title={account}
          icon={metamaskIcon}
          onClick={onDisConnectMetaMask}
        />
      )}
    </div>
  )
}
