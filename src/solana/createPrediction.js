// src/solana/createPrediction.js
import { AnchorProvider, Program, web3, Idl } from "@coral-xyz/anchor";
import idl from "../idl/umich_predictions.json"; 

import { getProvider } from "./getProvider";

const programID = new web3.PublicKey("eioYwjxzGasyXTBJQ6aRJFFczARqj6yXPxMvFr56swK"); // 👈 use your real one here
const { SystemProgram } = web3;

export async function createPrediction(wallet, questionText) {
  const provider = getProvider(wallet.adapter);
  const program = new Program(idl, programID, provider);

  const predictionKeypair = web3.Keypair.generate();

  await program.methods
    .createPrediction(questionText)
    .accounts({
      prediction: predictionKeypair.publicKey,
      creator: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .signers([predictionKeypair])
    .rpc();

  console.log("✅ Created prediction at:", predictionKeypair.publicKey.toBase58());
}