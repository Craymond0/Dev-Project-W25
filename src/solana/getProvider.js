// src/solana/getProvider.js
import { Connection } from "@solana/web3.js";
import { AnchorProvider } from "@coral-xyz/anchor";

export function getProvider(walletAdapter) {
  const connection = new Connection("https://api.devnet.solana.com", "processed");

  return new AnchorProvider(connection, walletAdapter, {
    preflightCommitment: "processed",
  });
}