
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentModeSelector from "./components/PaymentModeSelector";
import CardDetails from "./components/CardDetails";
import TransactionDetails from "./components/TransactionDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentModeSelector />} />
        <Route path="/card-details" element={<CardDetails />} />
        <Route path="/transaction-details" element={<TransactionDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
