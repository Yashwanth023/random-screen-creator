
import { motion } from "framer-motion";
import { Home, Wallet, Snowflake, Copy, WifiIcon, Battery, Signal } from "lucide-react";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const PaymentModeSelector = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [paymentMode, setPaymentMode] = useState("card");
  const [currentTime, setCurrentTime] = useState(new Date());
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
          {/* Status Bar */}
          <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-2 bg-background/5 backdrop-blur-sm">
            <span className="text-sm font-medium">
              {currentTime.toLocaleTimeString('en-US', { 
                hour: 'numeric', 
                minute: '2-digit',
                hour12: true 
              })}
            </span>
            <div className="flex items-center gap-2">
              <Signal size={16} />
              <WifiIcon size={16} />
              <Battery size={16} />
            </div>
          </div>

          {/* Curved Navigation */}
          <div className="absolute -top-12 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              className="w-full h-12 fill-secondary/80 backdrop-blur-lg"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"
              />
            </svg>
          </div>

          <div className="bg-secondary/80 backdrop-blur-lg border-t border-white/5 p-4">
            <div className="flex justify-around items-center max-w-md mx-auto gap-4">
              <button 
                className={`bottom-nav-item ${activeTab === 'home' ? 'active' : ''} bg-white shadow-lg rounded-full p-4 w-[60px] h-[60px]`}
                onClick={() => handleTabChange('home')}
              >
                <Home size={24} className="text-black" />
              </button>
              <button 
                className={`bottom-nav-item ${activeTab === 'wallet' ? 'active' : ''} bg-white shadow-lg rounded-full p-4 w-[60px] h-[60px]`}
                onClick={() => handleTabChange('wallet')}
              >
                <Wallet size={24} className="text-black" />
              </button>
              <button 
                className={`bottom-nav-item ${activeTab === 'ginie' ? 'active' : ''} bg-white shadow-lg rounded-full p-4 w-[60px] h-[60px]`}
                onClick={() => handleTabChange('ginie')}
              >
                <Snowflake size={24} className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default PaymentModeSelector;
