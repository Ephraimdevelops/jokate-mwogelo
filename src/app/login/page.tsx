"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck, Lock } from "lucide-react";

import { Suspense } from "react";

function LoginContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin";
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0" />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-rose/10 blur-[120px] rounded-full z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="border-brand-white/10 shadow-2xl bg-brand-black/40 backdrop-blur-xl">
          <CardHeader className="text-center space-y-6 pt-12">
            <div className="mx-auto w-16 h-16 bg-brand-white flex items-center justify-center group hover:bg-brand-accent transition-all duration-700 cursor-default">
              <span className="text-brand-black font-display text-2xl font-bold tracking-[0.2em] group-hover:scale-110 transition-transform">JM</span>
            </div>
            <div className="space-y-3">
              <CardTitle className="text-2xl font-display font-bold tracking-[0.2em] text-brand-white uppercase">Command Centre</CardTitle>
              <CardDescription className="font-sans text-brand-muted text-[10px] uppercase tracking-[0.3em]">Executive Access Only</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="px-10 pb-12">
            <form action={formAction} className="space-y-8">
              <input type="hidden" name="from" value={from} />
              
              <div className="space-y-4">
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted group-focus-within:text-brand-accent transition-colors" />
                  <Input 
                    name="password" 
                    type="password" 
                    placeholder="ENTER PASSPHRASE" 
                    className="pl-12 font-sans h-14 bg-brand-white/5 border-brand-white/10 text-brand-white focus:border-brand-accent/50 focus:ring-0 transition-all tracking-[0.2em] text-[11px]"
                    required 
                  />
                </div>
              </div>

              {state?.error && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[10px] text-brand-rose text-center font-bold uppercase tracking-widest"
                >
                  {state.error}
                </motion.p>
              )}

              <Button 
                  type="submit" 
                  className="w-full bg-brand-white text-brand-black h-14 text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-brand-accent hover:text-brand-white transition-all duration-500 shadow-2xl group"
                  disabled={isPending}
              >
                {isPending ? "AUTHORIZING..." : "INITIATE ACCESS"}
              </Button>
            </form>
            
            <p className="mt-12 text-[8px] text-center text-brand-muted uppercase font-bold tracking-[0.4em] opacity-30">
              Impact & Leadership Protocol v2.0
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center p-6 paper-texture"><p className="font-sans text-muted-foreground animate-pulse">Initializing Security...</p></div>}>
      <LoginContent />
    </Suspense>
  );
}

