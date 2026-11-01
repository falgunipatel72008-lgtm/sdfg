import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Search, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const CATEGORIES = ["All categories", "Education", "Healthcare", "Agriculture", "Housing"];
const SCHEMES = [
  { title: "PM Scholarship Scheme", category: "Education", description: "Financial support for the higher education of eligible students.", benefit: "Up to ₹50,000 / year", audience: "Students", status: "Active" },
  { title: "National Health Mission", category: "Healthcare", description: "Accessible and affordable healthcare services for families across Bharat.", benefit: "Free coverage", audience: "Families", status: "Active" },
  { title: "Kisan Samman Nidhi", category: "Agriculture", description: "Income support for eligible landholding farmer families.", benefit: "₹6,000 / year", audience: "Farmers", status: "Open" },
  { title: "Awas Yojana (Urban)", category: "Housing", description: "Interest subsidy and assistance to help urban families own a home.", benefit: "Interest subsidy", audience: "Home seekers", status: "Verified" },
  { title: "Post-Matric Scholarship", category: "Education", description: "Support for students continuing education after secondary school.", benefit: "Tuition assistance", audience: "Students", status: "Open" },
  { title: "Ayushman Bharat", category: "Healthcare", description: "Health insurance cover for secondary and tertiary hospitalisation.", benefit: "₹5 lakh cover", audience: "Eligible families", status: "Active" },
  { title: "Pradhan Mantri Fasal Bima", category: "Agriculture", description: "Crop insurance protection against natural risks and losses.", benefit: "Crop protection", audience: "Farmers", status: "Active" },
  { title: "PM SVANidhi", category: "Housing", description: "Working capital support for street vendors to restart their businesses.", benefit: "Loans from ₹10,000", audience: "Street vendors", status: "Open" },
];

export default function Schemes() {
  const [searchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const [category, setCategory] = useState(requestedCategory && CATEGORIES.includes(requestedCategory) ? requestedCategory : CATEGORIES[0]);
  const [query, setQuery] = useState("");
  const visibleSchemes = useMemo(() => SCHEMES.filter((scheme) => {
    const matchesCategory = category === CATEGORIES[0] || scheme.category === category;
    const searchText = `${scheme.title} ${scheme.category} ${scheme.description} ${scheme.audience}`.toLowerCase();
    return matchesCategory && searchText.includes(query.trim().toLowerCase());
  }), [category, query]);

  return <div className="bg-slate-50"><section className="bg-slate-900 py-14 text-white"><div className="container mx-auto px-4"><Badge variant="outline" className="mb-4 border-secondary text-secondary">Scheme directory</Badge><h1 className="text-4xl font-bold tracking-tight md:text-5xl">All government schemes</h1><p className="mt-4 max-w-2xl text-lg text-slate-300">Browse verified support programmes and find benefits that match your needs.</p><div className="relative mt-8 max-w-2xl"><Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" /><Input value={query} onChange={(event) => setQuery(event.target.value)} className="h-14 rounded-xl border-none bg-white pl-12 text-slate-900" placeholder="Search by scheme, benefit or audience..." /></div></div></section><main className="container mx-auto px-4 py-12"><div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><h2 className="text-2xl font-bold">Browse schemes</h2><p className="mt-1 text-sm text-muted-foreground">Showing {visibleSchemes.length} of {SCHEMES.length} schemes</p></div><div className="flex flex-wrap gap-2">{CATEGORIES.map((item) => <Button key={item} variant={category === item ? "default" : "outline"} onClick={() => setCategory(item)} className={category === item ? "bg-primary" : "bg-white"}>{item}</Button>)}</div></div>{visibleSchemes.length > 0 ? <div className="grid grid-cols-1 gap-5 md:grid-cols-2">{visibleSchemes.map((scheme) => <Card key={scheme.title} className="border-slate-200 bg-white transition-shadow hover:shadow-lg"><CardHeader className="pb-4"><div className="mb-3 flex items-center justify-between gap-3"><Badge variant="secondary" className="bg-slate-100 text-slate-600">{scheme.category}</Badge><Badge className="border-none bg-emerald-50 text-emerald-700 hover:bg-emerald-50"><CheckCircle2 className="mr-1 h-3 w-3" />{scheme.status}</Badge></div><CardTitle className="text-xl">{scheme.title}</CardTitle></CardHeader><CardContent><p className="mb-6 text-sm leading-relaxed text-muted-foreground">{scheme.description}</p><div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-4 text-sm"><div><p className="text-muted-foreground">Key benefit</p><p className="mt-1 font-bold text-primary">{scheme.benefit}</p></div><div><p className="text-muted-foreground">For</p><p className="mt-1 flex items-center gap-1 font-semibold"><Users className="h-4 w-4 text-secondary" />{scheme.audience}</p></div></div><Button variant="outline" className="group mt-5 w-full border-primary text-primary hover:bg-primary hover:text-white">View details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button></CardContent></Card>)}</div> : <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center"><Search className="mx-auto mb-4 h-8 w-8 text-slate-400" /><h3 className="text-lg font-bold">No schemes found</h3><p className="mt-2 text-sm text-muted-foreground">Try a different search term or category.</p></div>}</main></div>;
}