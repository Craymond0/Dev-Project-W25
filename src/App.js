import React from "react";
import WalletContextProvider from "./contexts/WalletContextProvider";
import WalletConnectButton from "./components/WalletConnectButton";
import CreatePredictionButton from "./createPredictionButton"; // ✅ import this

function App() {
  return (
    <WalletContextProvider>
      <div className="App">
        <h1>UMich Prediction Market</h1>
        <WalletConnectButton />
        
        {/* ✅ Add the new prediction button here */}
        <CreatePredictionButton />
      </div>
    </WalletContextProvider>
  );
}

export default App;
