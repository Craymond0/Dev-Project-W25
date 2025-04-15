import React from 'react';
import {
  WalletMultiButton,
  WalletDisconnectButton,
} from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

const WalletConnectButton = () => {
  const { publicKey } = useWallet();

  return (
    <div>
      <WalletMultiButton />
      <WalletDisconnectButton />
      {publicKey && <p>Connected wallet: {publicKey.toBase58()}</p>}
    </div>
  );
};

export default WalletConnectButton;