import { ArrowRight, BriefcaseBusiness, CircleUserRound, IndianRupee, MapPin } from "lucide-react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const STATES = [
  "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

export default function Profile() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="bg-slate-50 px-4 py-12">
      <Card className="mx-auto w-full max-w-2xl border-none shadow-lg">
        <CardHeader className="border-b border-border pb-6">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <CircleUserRound className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Tell us a little about yourself</CardTitle>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            This helps us show schemes that are more relevant to you. You can update these details later.
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="name">Full name</Label>
                <div className="relative">
                  <CircleUserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="name" name="name" placeholder="Enter your full name" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" name="age" type="number" min="1" max="120" placeholder="Enter your age" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State or union territory</Label>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <select id="state" name="state" className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-10 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" defaultValue="" required>
                    <option value="" disabled>Select your state</option>
                    {STATES.map((state) => <option key={state} value={state}>{state}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="income">Annual household income</Label>
                <div className="relative">
                  <IndianRupee className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="income" name="income" type="number" min="0" placeholder="For example, 300000" className="pl-10" required />
                </div>
                <p className="text-xs text-muted-foreground">Enter the approximate amount in rupees.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation</Label>
                <div className="relative">
                  <BriefcaseBusiness className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <select id="occupation" name="occupation" className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-10 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" defaultValue="" required>
                    <option value="" disabled>Select your occupation</option>
                    <option value="student">Student</option>
                    <option value="farmer">Farmer</option>
                    <option value="self-employed">Self-employed</option>
                    <option value="salaried">Salaried employee</option>
                    <option value="business">Business owner</option>
                    <option value="homemaker">Homemaker</option>
                    <option value="retired">Retired</option>
                    <option value="looking-for-work">Looking for work</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <Button type="submit" className="h-12 w-full bg-primary text-white hover:bg-primary/90">
              Save profile and continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}