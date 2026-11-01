import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Search, GraduationCap, HeartPulse, Tractor, Home, ArrowRight, CheckCircle2, Clock3, FileText, HelpCircle } from "lucide-react";

const CATEGORIES = [
  { id: 'education', name: 'Education', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50', count: 142 },
  { id: 'health', name: 'Healthcare', icon: HeartPulse, color: 'text-emerald-600', bg: 'bg-emerald-50', count: 89 },
  { id: 'agriculture', name: 'Agriculture', icon: Tractor, color: 'text-orange-600', bg: 'bg-orange-50', count: 112 },
  { id: 'housing', name: 'Housing', icon: Home, color: 'text-purple-600', bg: 'bg-purple-50', count: 45 },
];

const SCHEMES = [
  { title: "PM Scholarship Scheme", cat: "Education", benefit: "₹50,000 / year", status: "Active", applicants: "2.4M+" },
  { title: "National Health Mission", cat: "Healthcare", benefit: "Free Coverage", status: "Active", applicants: "15M+" },
  { title: "Kisan Samman Nidhi", cat: "Agriculture", benefit: "₹6,000 / year", status: "Open", applicants: "12M+" },
  { title: "Awas Yojana (Urban)", cat: "Housing", benefit: "Interest Subsidy", status: "Verified", applicants: "4.8M+" }
];

export default function Index() {
  const [income, setIncome] = useState([450000]);
  const [dependents, setDependents] = useState([2]);

  const estimatedBenefit = Math.max(0, Math.floor((income[0] < 800000 ? 50000 : 0) + (dependents[0] * 12000)));

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Government schemes, in one place</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Find support for you and your family.
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Search official government schemes by name, need or category. Each listing explains who can apply, what documents are needed and where to begin.
            </p>

            <div className="flex max-w-2xl flex-col gap-3 sm:flex-row">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  className="h-14 rounded-lg border-none bg-white pl-12 text-slate-900"
                  placeholder="Try “pension”, “farmer” or “scholarship”"
                />
              </div>
              <Button size="lg" className="h-14 rounded-lg bg-secondary px-8 text-lg font-semibold text-white hover:bg-secondary/90">
                Search schemes
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-primary-foreground/70">
              <span>Common searches:</span>
              <button className="underline decoration-primary-foreground/40 underline-offset-4 hover:text-white">pension</button>
              <button className="underline decoration-primary-foreground/40 underline-offset-4 hover:text-white">education</button>
              <button className="underline decoration-primary-foreground/40 underline-offset-4 hover:text-white">healthcare</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-3 tracking-tight">Browse by Category</h2>
              <p className="text-muted-foreground">Start with an area that matters to you.</p>
            </div>
            <Button variant="ghost" className="font-semibold text-primary hover:bg-primary/5">
              See all schemes <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Card key={cat.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-transparent hover:border-primary/10">
                <CardContent className="p-8">
                  <div className={`${cat.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                    <cat.icon className={`w-7 h-7 ${cat.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground">{cat.count} schemes available</p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">Browse {cat.name.toLowerCase()} <ArrowRight className="ml-1 h-4 w-4" /></span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practical tools */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefit Estimator */}
            <Card className="shadow-2xl shadow-slate-200 border-none overflow-hidden">
              <div className="bg-primary p-8 text-white">
                <CardTitle className="mb-2 text-2xl">A quick eligibility guide</CardTitle>
                <CardDescription className="text-primary-foreground/70">Use your household details to get a starting point. Final eligibility is decided by the scheme office.</CardDescription>
              </div>
              <CardContent className="p-8 space-y-10">
                <div className="space-y-6">
                  <div className="flex justify-between mb-4">
                    <Label className="text-base font-semibold">Annual Family Income</Label>
                    <span className="text-primary font-bold">₹{income[0].toLocaleString()}</span>
                  </div>
                  <Slider 
                    value={income} 
                    onValueChange={setIncome} 
                    max={2000000} 
                    step={10000} 
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹0</span>
                    <span>₹2,000,000</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between mb-4">
                    <Label className="text-base font-semibold">Number of Dependents</Label>
                    <span className="text-primary font-bold">{dependents[0]}</span>
                  </div>
                  <Slider 
                    value={dependents} 
                    onValueChange={setDependents} 
                    max={10} 
                    step={1} 
                    className="py-4"
                  />
                </div>

                <div className="bg-emerald-50 rounded-2xl p-6 flex items-center justify-between border border-emerald-100">
                  <div>
                    <p className="mb-1 text-sm font-medium uppercase tracking-wider text-emerald-800">Possible yearly support</p>
                    <p className="text-3xl font-black text-emerald-700">₹{estimatedBenefit.toLocaleString()}</p>
                  </div>
                  <CheckCircle2 className="h-10 w-10 text-emerald-500/50" />
                </div>
                
                <Button className="h-14 w-full bg-primary text-lg font-bold">View suitable schemes</Button>
              </CardContent>
            </Card>

            {/* Help people choose their next step */}
            <div className="flex flex-col gap-8">
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-5">
                  <div>
                    <CardTitle className="text-xl">Not sure where to start?</CardTitle>
                    <CardDescription>These simple guides can point you in the right direction.</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  <Button variant="outline" className="h-auto justify-start gap-3 whitespace-normal p-4 text-left"><FileText className="h-5 w-5 shrink-0 text-primary" /><span><strong className="block">Check documents</strong><small className="font-normal text-muted-foreground">Know what to keep ready</small></span></Button>
                  <Button variant="outline" className="h-auto justify-start gap-3 whitespace-normal p-4 text-left"><HelpCircle className="h-5 w-5 shrink-0 text-primary" /><span><strong className="block">Understand the process</strong><small className="font-normal text-muted-foreground">See how applications work</small></span></Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Application steps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-emerald-100 p-3">
                      <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-slate-800">Find a scheme</p>
                      <p className="text-sm text-muted-foreground">Use your needs and category to search.</p>
                    </div>
                    <span className="text-sm font-medium text-emerald-600">1</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-amber-100 p-3">
                      <Clock3 className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-slate-800">Check eligibility</p>
                      <p className="text-sm text-muted-foreground">Read the requirements and keep documents ready.</p>
                    </div>
                    <span className="text-sm font-medium text-amber-600">2</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-slate-100 p-3">
                      <ArrowRight className="h-6 w-6 text-slate-500" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-slate-800">Apply through the official channel</p>
                      <p className="text-sm text-muted-foreground">Submit online or visit the office listed.</p>
                    </div>
                    <span className="text-sm font-medium text-slate-500">3</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Schemes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4 text-3xl font-bold">Schemes people often look for</h2>
            <p className="text-muted-foreground">A few places to begin. Check each scheme’s details before applying.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCHEMES.map((scheme, i) => (
              <Card key={i} className="border-slate-200 hover:border-primary/50 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-none">{scheme.cat}</Badge>
                    <Badge className="bg-blue-50 text-blue-600 border-none hover:bg-blue-50">{scheme.status}</Badge>
                  </div>
                  <CardTitle className="text-lg leading-snug">{scheme.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Benefit</span>
                      <span className="font-bold text-primary">{scheme.benefit}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Applicants</span>
                      <span className="font-bold">{scheme.applicants}</span>
                    </div>
                    <Button variant="outline" className="w-full mt-2 group border-primary text-primary hover:bg-primary hover:text-white transition-all">
                      Check Eligibility <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}