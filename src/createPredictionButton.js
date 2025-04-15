import { useWallet } from "@solana/wallet-adapter-react";
import { createPrediction } from "./solana/createPrediction";

const CreatePredictionButton = () => {
  const wallet = useWallet();

  const handleCreate = async () => {
    if (!wallet.connected) {
      alert("Connect your wallet first.");
      return;
    }

    const question = prompt("Enter your prediction question:");
    if (!question) return;

    try {
      await createPrediction(wallet, question);
      alert("✅ Prediction sent to the blockchain!");
    } catch (err) {
      console.error(err);
      alert("❌ Error creating prediction");
    }
  };

  return <button onClick={handleCreate}>📜 Create Prediction</button>;
};

export default CreatePredictionButton;