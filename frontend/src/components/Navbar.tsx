import { Link } from "react-router-dom";
import { ShoppingBag, User, Search, Menu } from "lucide-react";
import { useAuth } from "../lib/AuthContext";
import { useCart } from "../lib/CartContext";
import { STORE_INFO } from "../lib/constants";

export default function Navbar() {
  const { user, login } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border h-[70px] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-[22px] serif font-bold tracking-tight text-primary">
              {STORE_INFO.name}
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-[30px] text-sm font-medium uppercase tracking-[0.5px] text-primary">
            <Link to="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <Link to="/shop" className="hover:opacity-60 transition-opacity">Shop</Link>
            <Link to="/blogs" className="hover:opacity-60 transition-opacity">Technical Blog</Link>
            <Link to="/admin" className="hover:opacity-60 transition-opacity">Wholesale</Link>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center bg-[#F3F3F1] border border-transparent rounded-[20px] px-4 py-2 w-[200px] text-[13px] text-muted">
              <Search size={14} className="mr-2" />
              <span>Search artisan goods...</span>
            </div>
            
            <Link to="/cart" className="relative text-primary flex items-center gap-1 font-bold">
              <span className="text-sm">Cart</span>
              <span className="text-sm">({cart.length})</span>
            </Link>
            
            {user ? (
              <Link to="/profile" className="text-primary">
                <User size={18} />
              </Link>
            ) : (
              <button 
                onClick={() => login()}
                className="text-sm font-medium text-primary hover:opacity-60 transition-opacity"
              >
                Account
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
