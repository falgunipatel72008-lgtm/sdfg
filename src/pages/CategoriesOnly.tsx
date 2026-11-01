import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, HeartPulse, Home, Tractor } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CATEGORIES = [
  { name: "Education", description: "Scholarships, loans and learning support for students.", count: 142, icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Healthcare", description: "Coverage, treatment and family wellness programmes.", count: 89, icon: HeartPulse, color: "text-emerald-600", bg: "bg-emerald-50" },
  { name: "Agriculture", description: "Support for farmers, crops and rural workers.", count: 112, icon: Tractor, color: "text-orange-600", bg: "bg-orange-50" },
  { name: "Housing", description: "Affordable homes and rental assistance programmes.", count: 45, icon: Home, color: "text-purple-600", bg: "bg-purple-50" },
];

export default function CategoriesOnly() {
  return <div className="bg-slate-50"><section className="bg-slate-900 py-16 text-white"><div className="container mx-auto px-4"><Badge variant="outline" className="mb-5 border-secondary text-secondary">Browse sectors</Badge><h1 className="text-4xl font-bold tracking-tight md:text-5xl">Explore schemes by category</h1><p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">Choose a category to see all the government schemes available in that area.</p></div></section><main className="container mx-auto px-4 py-14"><div className="grid grid-cols-1 gap-6 md:grid-cols-2">{CATEGORIES.map((category) => { const Icon = category.icon; return <Card key={category.name} className="border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg"><CardContent className="p-8"><div className={`${category.bg} mb-6 flex h-16 w-16 items-center justify-center rounded-2xl`}><Icon className={`h-8 w-8 ${category.color}`} /></div><div className="flex items-start justify-between gap-5"><div><h2 className="text-2xl font-bold">{category.name}</h2><p className="mt-2 max-w-md text-muted-foreground">{category.description}</p></div><span className="whitespace-nowrap text-sm font-semibold text-muted-foreground">{category.count} schemes</span></div><Button asChild variant="outline" className="group mt-8 border-primary text-primary hover:bg-primary hover:text-white"><Link to={`/schemes?category=${category.name}`}>View schemes <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></Button></CardContent></Card>; })}</div></main></div>;
}