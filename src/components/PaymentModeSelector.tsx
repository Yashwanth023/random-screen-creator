
import { motion } from "framer-motion";
import { Home, Wallet, Snowflake, Copy } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentModeSelector = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-background p-6"
    >
      <div className="pt-12">
        <h1 className="text-2xl font-bold mb-2">select payment mode</h1>
        <p className="text-sm opacity-60 mb-8">
          choose your preferred payment method to make payment.
        </p>

        <div className="flex gap-4 mb-8">
          <button className="payment-mode-btn">pay</button>
          <button className="payment-mode-btn active">card</button>
        </div>

        <p className="text-xs opacity-60 mb-4">YOUR DIGITAL DEBIT CARD</p>

        <motion.div 
          className="card-container"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/card-details">
            <div className="card relative aspect-[1.586/1] bg-gradient-to-br from-secondary to-black rounded-xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-[url('/lovable-uploads/ef68bb8a-5300-4470-8f8d-4b1bf722e0d8.png')] bg-cover bg-center opacity-30" />
              <div className="absolute bottom-4 right-4">
                <Snowflake className="text-accent" size={24} />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-secondary/80 backdrop-blur-lg border-t border-white/5 p-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button className="bottom-nav-item active">
            <Home size={20} />
            <span>home</span>
          </button>
          <button className="bottom-nav-item">
            <Wallet size={20} />
            <span>yolo pay</span>
          </button>
          <button className="bottom-nav-item">
            <Snowflake size={20} />
            <span>ginie</span>
          </button>
        </div>
      </nav>
    </motion.div>
  );
};

export default PaymentModeSelector;
