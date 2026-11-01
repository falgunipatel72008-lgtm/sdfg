import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock3, FileText, Search, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OutreachChart from "@/components/OutreachChart";

const STATS = [
  { label: "Active schemes", value: "388", detail: "+24 this month", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Citizens supported", value: "1.4B", detail: "+12.5% this year", icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Applications tracked", value: "24.8K", detail: "Across all states", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50" },
];

export default function Dashboard() {
  return (
    <div className="bg-slate-50">
      <section className="bg-primary py-14 text-white">
        <div className="container mx-auto flex flex-col justify-between gap-8 px-4 md:flex-row md:items-end">
          <div><Badge variant="outline" className="mb-4 border-secondary text-secondary">Citizen dashboard</Badge><h1 className="text-4xl font-bold tracking-tight">Good morning, citizen.</h1><p className="mt-3 max-w-xl text-primary-foreground/75">Find support, track your applications and stay informed about government benefits.</p></div>
          <Button asChild className="bg-secondary text-white hover:bg-secondary/90"><Link to="/schemes">Find a scheme <Search className="ml-2 h-4 w-4" /></Link></Button>
        </div>
      </section>

      <main className="container mx-auto space-y-8 px-4 py-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {STATS.map((stat) => { const Icon = stat.icon; return <Card key={stat.label} className="border-none shadow-sm"><CardContent className="flex items-center gap-4 p-6"><div className={`${stat.bg} flex h-12 w-12 shrink-0 items-center justify-center rounded-xl`}><Icon className={`h-6 w-6 ${stat.color}`} /></div><div><p className="text-sm text-muted-foreground">{stat.label}</p><p className="mt-1 text-2xl font-bold">{stat.value}</p><p className="mt-1 text-xs text-emerald-600">{stat.detail}</p></div></CardContent></Card>; })}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Card className="border-none shadow-sm"><CardHeader className="flex flex-row items-center justify-between space-y-0"><div><CardTitle className="text-xl">Outreach overview</CardTitle><p className="mt-1 text-sm text-muted-foreground">Registrations and disbursements over the last six months</p></div><Badge className="border-none bg-emerald-50 text-emerald-700 hover:bg-emerald-50">+12.5%</Badge></CardHeader><CardContent><OutreachChart /></CardContent></Card>
          <Card className="border-none shadow-sm"><CardHeader><CardTitle className="text-xl">Application activity</CardTitle></CardHeader><CardContent className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-full bg-emerald-100 p-2.5"><CheckCircle2 className="h-5 w-5 text-emerald-600" /></div><div><p className="font-semibold">Application submitted</p><p className="mt-1 text-sm text-muted-foreground">PM Scholarship Scheme</p><p className="mt-1 text-xs text-muted-foreground">Jan 12, 2024 · GS-88219</p></div></div><div className="flex items-start gap-4"><div className="rounded-full bg-amber-100 p-2.5"><Clock3 className="h-5 w-5 text-amber-600" /></div><div><p className="font-semibold">Verification in progress</p><p className="mt-1 text-sm text-muted-foreground">Officer assigned: Rajesh Kumar</p><p className="mt-1 text-xs text-muted-foreground">Expected response in 3 days</p></div></div><Button asChild variant="outline" className="w-full"><Link to="/schemes">Explore more schemes <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></CardContent></Card>
        </div>
      </main>
    </div>
  );
}