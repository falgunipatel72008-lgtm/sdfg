import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Home,
  Search,
  Tractor,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type CategoryId = "all" | "education" | "health" | "agriculture" | "housing";

type Category = {
  id: Exclude<CategoryId, "all">;
  name: string;
  description: string;
  icon: typeof GraduationCap;
  color: string;
  bg: string;
  count: number;
};

type Scheme = {
  title: string;
  category: Exclude<CategoryId, "all">;
  categoryName: string;
  description: string;
  benefit: string;
  audience: string;
  status: string;
  updated: string;
};

const CATEGORIES: Category[] = [
  { id: "education", name: "Education", description: "Scholarships, loans and learning support", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50", count: 142 },
  { id: "health", name: "Healthcare", description: "Coverage, treatment and family wellness", icon: HeartPulse, color: "text-emerald-600", bg: "bg-emerald-50", count: 89 },
  { id: "agriculture", name: "Agriculture", description: "Support for farmers and rural workers", icon: Tractor, color: "text-orange-600", bg: "bg-orange-50", count: 112 },
  { id: "housing", name: "Housing", description: "Affordable homes and rental assistance", icon: Home, color: "text-purple-600", bg: "bg-purple-50", count: 45 },
];

// Kept as a local data source so it can be replaced by the categories API later.
const SCHEMES: Scheme[] = [
  { title: "PM Scholarship Scheme", category: "education", categoryName: "Education", description: "Financial support for the higher education of eligible students.", benefit: "Up to ₹50,000 / year", audience: "Students", status: "Active", updated: "Updated 2 days ago" },
  { title: "National Health Mission", category: "health", categoryName: "Healthcare", description: "Accessible and affordable healthcare services for families across Bharat.", benefit: "Free coverage", audience: "Families", status: "Active", updated: "Updated 5 days ago" },
  { title: "Kisan Samman Nidhi", category: "agriculture", categoryName: "Agriculture", description: "Income support for eligible landholding farmer families.", benefit: "₹6,000 / year", audience: "Farmers", status: "Open", updated: "Updated 1 week ago" },
  { title: "Awas Yojana (Urban)", category: "housing", categoryName: "Housing", description: "Interest subsidy and assistance to help urban families own a home.", benefit: "Interest subsidy", audience: "Home seekers", status: "Verified", updated: "Updated 1 week ago" },
  { title: "Post-Matric Scholarship", category: "education", categoryName: "Education", description: "Support for students continuing education after secondary school.", benefit: "Tuition assistance", audience: "Students", status: "Open", updated: "Updated 2 weeks ago" },
  { title: "Ayushman Bharat", category: "health", categoryName: "Healthcare", description: "Health insurance cover for secondary and tertiary hospitalisation.", benefit: "₹5 lakh cover", audience: "Eligible families", status: "Active", updated: "Updated 2 weeks ago" },
  { title: "Pradhan Mantri Fasal Bima", category: "agriculture", categoryName: "Agriculture", description: "Crop insurance protection against natural risks and losses.", benefit: "Crop protection", audience: "Farmers", status: "Active", updated: "Updated 3 weeks ago" },
  { title: "PM SVANidhi", category: "housing", categoryName: "Housing", description: "Working capital support for street vendors to restart their businesses.", benefit: "Loans from ₹10,000", audience: "Street vendors", status: "Open", updated: "Updated 3 weeks ago" },
];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSchemes = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return SCHEMES.filter((scheme) => {
      const matchesCategory = selectedCategory === "all" || scheme.category === selectedCategory;
      const matchesSearch = !query || [scheme.title, scheme.categoryName, scheme.description, scheme.audience].some((value) => value.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="flex flex-col">
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-5 border-secondary px-4 py-1 text-secondary">Government schemes directory</Badge>
            <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">Find support for every stage of life.</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">Explore verified government schemes by category and find the support that fits your needs.</p>
          </div>
          <div className="relative mt-10 max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <Input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} className="h-14 rounded-xl border-none bg-white pl-12 text-slate-900" placeholder="Search schemes, benefits or eligibility..." />
          </div>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-secondary">Browse sectors</p>
              <h2 className="text-3xl font-bold tracking-tight">Explore by category</h2>
            </div>
            <p className="hidden text-sm text-muted-foreground md:block">388 active schemes available</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <button key={category.id} type="button" onClick={() => setSelectedCategory(isSelected ? "all" : category.id)} className={`rounded-xl border bg-white p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lg ${isSelected ? "border-primary ring-2 ring-primary/10" : "border-slate-200"}`}>
                  <div className={`${category.bg} mb-5 flex h-12 w-12 items-center justify-center rounded-xl`}><Icon className={`h-6 w-6 ${category.color}`} /></div>
                  <div className="flex items-start justify-between gap-3"><h3 className="font-bold">{category.name}</h3><span className="text-xs font-semibold text-muted-foreground">{category.count}</span></div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><h2 className="text-3xl font-bold tracking-tight">All schemes</h2><p className="mt-2 text-muted-foreground">Showing {filteredSchemes.length} schemes matching your search.</p></div>
            <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }} disabled={!searchTerm && selectedCategory === "all"}>Clear filters</Button>
          </div>

          {filteredSchemes.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {filteredSchemes.map((scheme) => (
                <Card key={scheme.title} className="border-slate-200 transition-shadow hover:shadow-lg">
                  <CardHeader className="pb-4"><div className="mb-3 flex items-center justify-between gap-3"><Badge variant="secondary" className="bg-slate-100 text-slate-600">{scheme.categoryName}</Badge><Badge className="border-none bg-emerald-50 text-emerald-700 hover:bg-emerald-50"><CheckCircle2 className="mr-1 h-3 w-3" />{scheme.status}</Badge></div><CardTitle className="text-xl">{scheme.title}</CardTitle></CardHeader>
                  <CardContent><p className="mb-6 text-sm leading-relaxed text-muted-foreground">{scheme.description}</p><div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-4 text-sm"><div><p className="text-muted-foreground">Key benefit</p><p className="mt-1 font-bold text-primary">{scheme.benefit}</p></div><div><p className="text-muted-foreground">For</p><p className="mt-1 flex items-center gap-1 font-semibold"><Users className="h-4 w-4 text-secondary" />{scheme.audience}</p></div></div><div className="mt-5 flex items-center justify-between gap-4"><span className="text-xs text-muted-foreground">{scheme.updated}</span><Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-white">View details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button></div></CardContent>
                </Card>
              ))}
            </div>
          ) : <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center"><Search className="mx-auto mb-4 h-8 w-8 text-slate-400" /><h3 className="text-lg font-bold">No schemes found</h3><p className="mt-2 text-sm text-muted-foreground">Try a different search term or clear the selected category.</p></div>}
        </div>
      </section>

      <section className="bg-white py-12"><div className="container mx-auto flex flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center"><div><h2 className="text-xl font-bold">Need help finding the right scheme?</h2><p className="mt-1 text-sm text-muted-foreground">Answer a few questions to get personalised recommendations.</p></div><Button asChild className="bg-primary"><Link to="/">Check my eligibility <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></section>
    </div>
  );
}