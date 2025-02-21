
import { motion } from "framer-motion";
import { Home, Wallet, Snowflake, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { toast } from "sonner";

const PaymentModeSelector = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [paymentMode, setPaymentMode] = useState("card");
  const [walletBalance] = useState(faker.finance.amount({ min: 1000, max: 10000, dec: 2 }));
  const [recentTransactions] = useState([
    {
      id: 1,
      name: faker.company.name(),
      amount: faker.finance.amount({ min: 10, max: 500, dec: 2 }),
      date: faker.date.recent().toLocaleDateString(),
    },
    {
      id: 2,
      name: faker.company.name(),
      amount: faker.finance.amount({ min: 10, max: 500, dec: 2 }),
      date: faker.date.recent().toLocaleDateString(),
    },
  ]);

  const handlePaymentModeChange = (mode: string) => {
    setPaymentMode(mode);
    toast.success(`Switched to ${mode} payment mode`);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "wallet") {
      toast.info(`Your wallet balance: $${walletBalance}`);
    } else if (tab === "ginie") {
      toast.info("AI assistant is here to help!");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-background p-6 pb-24"
    >
      <div className="pt-12">
        <h1 className="text-2xl font-bold mb-2">select payment mode</h1>
        <p className="text-sm opacity-60 mb-8">
          your wallet balance: ${walletBalance}
        </p>

        <div className="flex gap-4 mb-8">
          <button 
            className={`payment-mode-btn ${paymentMode === 'pay' ? 'active' : ''}`}
            onClick={() => handlePaymentModeChange('pay')}
          >
            pay
          </button>
          <button 
            className={`payment-mode-btn ${paymentMode === 'card' ? 'active' : ''}`}
            onClick={() => handlePaymentModeChange('card')}
          >
            card
          </button>
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

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {recentTransactions.map(transaction => (
              <div 
                key={transaction.id} 
                className="bg-secondary/50 p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-xs opacity-60">{transaction.date}</p>
                </div>
                <p className="text-accent">${transaction.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0">
        <div className="relative">
          <div className="absolute -top-6 left-0 right-0 h-6 bg-secondary/80 backdrop-blur-lg">
            <div className="h-full w-full bg-secondary/80" style={{
              borderTopLeftRadius: '24px',
              borderTopRightRadius: '24px'
            }} />
          </div>
          <div className="bg-secondary/80 backdrop-blur-lg border-t border-white/5 p-4">
            <div className="flex justify-around items-center max-w-md mx-auto">
              <button 
                className={`bottom-nav-item ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => handleTabChange('home')}
              >
                <Home size={20} />
                <span>home</span>
              </button>
              <button 
                className={`bottom-nav-item ${activeTab === 'wallet' ? 'active' : ''}`}
                onClick={() => handleTabChange('wallet')}
              >
                <Wallet size={20} />
                <span>yolo pay</span>
              </button>
              <button 
                className={`bottom-nav-item ${activeTab === 'ginie' ? 'active' : ''}`}
                onClick={() => handleTabChange('ginie')}
              >
                <Snowflake size={20} />
                <span>ginie</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default PaymentModeSelector;
