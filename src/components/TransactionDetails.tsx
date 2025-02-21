
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const TransactionDetails = () => {
  const location = useLocation();
  const transaction = location.state?.transaction;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen bg-background p-6"
    >
      <div className="pt-12">
        <Link to="/" className="inline-block mb-6">
          <ArrowLeft className="text-foreground" size={24} />
        </Link>

        <h1 className="text-2xl font-bold mb-6">Transaction Details</h1>

        {transaction ? (
          <div className="bg-secondary/50 p-6 rounded-xl space-y-4">
            <div>
              <p className="text-sm opacity-60">Merchant</p>
              <p className="text-xl font-semibold">{transaction.name}</p>
            </div>
            <div>
              <p className="text-sm opacity-60">Amount</p>
              <p className="text-2xl font-bold text-accent">${transaction.amount}</p>
            </div>
            <div>
              <p className="text-sm opacity-60">Date</p>
              <p className="text-lg">{transaction.date}</p>
            </div>
            <div>
              <p className="text-sm opacity-60">Status</p>
              <p className="text-lg text-green-500">Completed</p>
            </div>
          </div>
        ) : (
          <p>No transaction details available</p>
        )}
      </div>
    </motion.div>
  );
};

export default TransactionDetails;
