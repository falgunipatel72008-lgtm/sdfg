import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Schemes from "./pages/Schemes";
import Categories from "./pages/CategoriesOnly";
import InfoPage from "./pages/InfoPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PortalHeader from "./components/PortalHeader";
import { Button } from "@/components/ui/button";
import { Globe, Phone } from "lucide-react";

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen">
        <PortalHeader />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/how-it-works" element={<InfoPage kind="how-it-works" />} />
            <Route path="/statistics" element={<InfoPage kind="statistics" />} />
            <Route path="/help" element={<InfoPage kind="help" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer id="footer" className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-white" />
                  <span className="text-2xl font-bold text-white tracking-tight">GovScheme</span>
                </div>
                <p className="text-sm leading-relaxed mb-6">
                  A centralized platform for citizens to discover and apply for government schemes efficiently. Empowerment through direct digital access.
                </p>
                <div className="flex gap-4">
                  <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-white/10 text-white rounded-full">
                    <i className="fa-brands fa-x-twitter"></i>
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-white/10 text-white rounded-full">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-white/10 text-white rounded-full">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-4 text-sm">
                  <li><Link to="#" className="hover:text-white transition-colors">About Portal</Link></li>
                  <li><Link to="#" className="hover:text-white transition-colors">Central Schemes</Link></li>
                  <li><Link to="#" className="hover:text-white transition-colors">State Schemes</Link></li>
                  <li><Link to="#" className="hover:text-white transition-colors">UT Schemes</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-6">Resources</h4>
                <ul className="space-y-4 text-sm">
                  <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link to="#" className="hover:text-white transition-colors">User Manual</Link></li>
                  <li><Link to="#" className="hover:text-white transition-colors">FAQs</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-6">Support</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-secondary mt-1" />
                    <div>
                      <p className="text-white font-medium">Toll Free Helpline</p>
                      <p>1800-123-4567</p>
                    </div>
                  </div>
                  <p>National Portal of Bharat, MeitY, New Delhi - 110003</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
              <p>&copy; 2024 National e-Governance Division. All Rights Reserved.</p>
              <div className="flex gap-6">
                <Link to="#" className="hover:text-white">Accessibility Statement</Link>
                <Link to="#" className="hover:text-white">Site Map</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;