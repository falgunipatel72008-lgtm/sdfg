import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, HelpCircle, LineChart, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type InfoPageProps = { kind: "how-it-works" | "statistics" | "help" };

const CONTENT = {
  "how-it-works": { title: "How GovScheme works", description: "Find the right support in three simple steps.", icon: Route, cards: [["1", "Tell us about yourself", "Share a few details about your needs and eligibility."], ["2", "Explore matching schemes", "Compare benefits, requirements and application details."], ["3", "Apply with confidence", "Follow the official application process and track your progress."]] },
  statistics: { title: "Scheme statistics", description: "A clear view of the support available across the portal.", icon: LineChart, cards: [["388", "Active schemes", "Verified programmes currently listed on GovScheme."], ["1.4B", "Citizens served", "People who can access public benefit information."], ["12.5%", "Annual growth", "Growth in registrations and disbursements this year."]] },
  help: { title: "Help & support", description: "Get answers and guidance while using GovScheme.", icon: HelpCircle, cards: [["Search", "Find a scheme", "Use the schemes directory to search by benefit, audience or category."], ["Track", "Monitor an application", "Visit your dashboard to review the latest application activity."], ["Call", "Talk to support", "Our toll-free helpline is available at 1800-123-4567."]] },
} as const;

export default function InfoPage({ kind }: InfoPageProps) {
  const content = CONTENT[kind];
  const Icon = content.icon;

  return <div className="bg-slate-50"><section className="bg-slate-900 py-16 text-white"><div className="container mx-auto px-4"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10"><Icon className="h-6 w-6 text-secondary" /></div><h1 className="text-4xl font-bold tracking-tight md:text-5xl">{content.title}</h1><p className="mt-4 max-w-2xl text-lg text-slate-300">{content.description}</p></div></section><main className="container mx-auto px-4 py-14"><div className="grid grid-cols-1 gap-6 md:grid-cols-3">{content.cards.map(([eyebrow, title, description]) => <Card key={title} className="border-slate-200 bg-white"><CardHeader><span className="text-sm font-bold text-secondary">{eyebrow}</span><CardTitle className="text-xl">{title}</CardTitle></CardHeader><CardContent><p className="text-sm leading-relaxed text-muted-foreground">{description}</p><CheckCircle2 className="mt-6 h-5 w-5 text-emerald-500" /></CardContent></Card>)}</div><div className="mt-10 text-center"><Button asChild className="bg-primary"><Link to="/schemes">Explore schemes <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></main></div>;
}