
import { motion } from "framer-motion";
import { faker } from "@faker-js/faker";
import { Home, Wallet, Snowflake, Copy, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const CardDetails = () => {
  const [cardData] = useState({
    number: faker.finance.creditCardNumber('####-####-####-####'),
    expiry: faker.date.future().toLocaleDateString('en-US', { month: '2-digit', year: '2-digit' }),
    cvv: faker.finance.creditCardCVV(),
    name: faker.person.fullName().toUpperCase(),
  });

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

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
          className="card-container mb-6"
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="card relative aspect-[1.586/1] bg-gradient-to-br from-secondary to-black rounded-xl overflow-hidden border border-white/10 p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-sm font-medium">{cardData.number}</p>
                <p className="text-xs opacity-60">valid thru {cardData.expiry}</p>
                <p className="text-xs opacity-60">cvv {cardData.cvv}</p>
              </div>
              <Snowflake className="text-accent" size={24} />
            </div>
            <div className="absolute bottom-6 left-6">
              <p className="text-sm font-medium">{cardData.name}</p>
            </div>
          </div>
        </motion.div>

        <button 
          onClick={() => copyToClipboard(cardData.number, 'Card number')}
          className="flex items-center gap-2 text-accent text-sm mb-4"
        >
          <Copy size={16} />
          <span>copy details</span>
        </button>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-secondary/80 backdrop-blur-lg border-t border-white/5 p-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button className="bottom-nav-item">
            <Home size={20} />
            <span>home</span>
          </button>
          <button className="bottom-nav-item active">
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

export default CardDetails;
