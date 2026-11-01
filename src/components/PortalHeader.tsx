import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Globe, Menu, Search, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Schemes", to: "/schemes" },
  { label: "Categories", to: "/categories" },
  { label: "How it Works", to: "/how-it-works" },
  { label: "Statistics", to: "/statistics" },
  { label: "Help & Support", to: "/help" },
];

export default function PortalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header id="header" className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="bg-primary py-1 text-xs text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4">
          <span className="flex items-center gap-2"><Globe className="h-3 w-3" /> Government services portal</span>
          <div className="hidden items-center gap-4 sm:flex">
            <button className="hover:underline">Screen Reader Access</button>
            <div className="flex gap-2"><button className="border border-primary-foreground/30 px-1 hover:bg-white/10">A-</button><button className="border border-primary-foreground/30 px-1 hover:bg-white/10">A</button><button className="border border-primary-foreground/30 px-1 hover:bg-white/10">A+</button></div>
          </div>
        </div>
      </div>
      <nav className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3"><div className="rounded-lg bg-primary/10 p-2"><Globe className="h-8 w-8 text-primary" /></div><div><h1 className="text-xl font-bold leading-none tracking-tight text-primary">GovScheme</h1><p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Find public support</p></div></Link>
        <div className="hidden items-center gap-6 text-sm font-medium lg:flex">{NAV_ITEMS.map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? "border-b-2 border-primary py-7 text-primary" : "py-7 text-muted transition-colors hover:text-primary"}>{item.label}</NavLink>)}</div>
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon" className="hidden sm:flex"><Link to="/schemes" aria-label="Search schemes"><Search className="h-5 w-5 text-muted" /></Link></Button>
          <Button asChild variant="outline" className="hidden gap-2 border-primary/20 sm:flex"><Link to="/login"><User className="h-4 w-4" /> Sign In</Link></Button>
          <Button asChild className="bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90"><Link to="/schemes">Find a scheme</Link></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen((open) => !open)} aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}>{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</Button>
        </div>
      </nav>
      {isMenuOpen && <div className="border-t border-border bg-white px-4 py-4 shadow-lg lg:hidden"><div className="container mx-auto flex flex-col gap-1">{NAV_ITEMS.map((item) => <NavLink key={item.to} to={item.to} onClick={closeMenu} className={({ isActive }) => `rounded-lg px-4 py-3 text-sm font-medium ${isActive ? "bg-primary/5 text-primary" : "text-muted hover:bg-slate-50 hover:text-primary"}`}>{item.label}</NavLink>)}</div></div>}
    </header>
  );
}