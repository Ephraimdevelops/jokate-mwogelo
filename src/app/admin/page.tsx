"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Doc } from "../../../convex/_generated/dataModel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, FileText, Bookmark } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="space-y-12 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-brand-border pb-10">
                <div>
                    <h1 className="text-4xl font-display font-bold tracking-[0.1em] text-brand-black uppercase">Executive Overview</h1>
                    <p className="text-brand-muted font-sans text-sm mt-2 tracking-wide">Governance and content control for the Jokate Mwegelo impact platform.</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" className="font-sans text-[10px] uppercase tracking-widest border-brand-border hover:bg-brand-surface h-12 px-8">Settings</Button>
                    <Button className="font-sans text-[10px] uppercase tracking-widest bg-brand-black text-brand-white hover:bg-brand-accent h-12 px-8 transition-all duration-500 shadow-xl">Live Platform</Button>
                </div>
            </div>

            <OverviewTab />
        </div>
    );
}

function OverviewTab() {
    const subscribers = useQuery(api.newsletter.getRecentSubscribers, { count: 10 }) || [];
    const ideas = useQuery(api.ideas.getPosts) || [];
    const media = useQuery(api.media.getPublished) || [];

    return (
        <div className="space-y-10">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 font-sans">
                <StatCard title="Constituents" value={subscribers.length} icon={<Users />} />
                <StatCard title="Reflections" value={ideas.length} icon={<FileText />} />
                <StatCard title="Media Archive" value={media.length} icon={<Bookmark />} />
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-7 pt-4">
                <Card className="col-span-4 border border-brand-border shadow-sm bg-brand-white">
                    <CardHeader className="border-b border-brand-border/50 pb-6 mb-6">
                        <CardTitle className="font-display text-lg uppercase tracking-widest text-brand-black">Recent Subscribers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {subscribers.length === 0 ? (
                                <p className="text-[11px] text-brand-muted uppercase tracking-widest">No constituents registered yet.</p>
                            ) : (
                                subscribers.slice(0, 5).map((sub: Doc<"newsletterSubscribers">) => (
                                    <div key={sub._id} className="flex items-center justify-between border-b border-brand-border/50 pb-4 last:border-0 font-sans">
                                        <div className="space-y-1">
                                            <p className="text-sm font-bold leading-none text-brand-black tracking-tight">{sub.email}</p>
                                            <p className="text-[10px] text-brand-muted uppercase tracking-widest">{sub.name || "Anonymous Constituent"}</p>
                                        </div>
                                        <Badge variant="outline" className="uppercase font-bold text-brand-accent border-brand-accent/20 text-[9px] tracking-widest px-3 py-1 bg-brand-accent/5">
                                            {sub.status}
                                        </Badge>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3 border border-brand-border shadow-2xl bg-brand-black text-brand-white relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity group-hover:opacity-30" />
                    <CardHeader className="relative z-10 border-b border-brand-white/10 pb-6 mb-6">
                        <CardTitle className="font-display text-lg uppercase tracking-widest text-brand-white">Operational Integrity</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        <div className="space-y-8">
                            <div className="flex items-center gap-5">
                                <div className="h-2 w-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_12px_rgba(233,163,194,0.8)]" />
                                <p className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold text-brand-white/90">Core Architecture Synced</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="h-2 w-2 rounded-full bg-brand-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                                <p className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold text-brand-white/90">Communication Node Ready</p>
                            </div>
                            <div className="flex items-center gap-5 opacity-40">
                                <div className="h-2 w-2 rounded-full bg-brand-muted" />
                                <p className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold text-brand-white/90">Archive Redundancy Active</p>
                            </div>
                            <div className="mt-12 pt-8 border-t border-brand-white/10">
                                <p className="text-[9px] text-brand-accent uppercase tracking-[0.3em] font-bold">System Status: Optimal</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function StatCard({ title, value, icon }: { title: string; value: string | number; icon: React.ReactNode }) {
    return (
        <Card className="border border-brand-border shadow-sm bg-brand-white hover:border-brand-accent transition-all duration-500 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="font-bold uppercase text-[10px] tracking-[0.2em] text-brand-muted group-hover:text-brand-black transition-colors">{title}</CardTitle>
                <div className="h-4 w-4 text-brand-accent group-hover:scale-110 transition-transform">{icon}</div>
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-display font-bold text-brand-black tracking-tight">{value}</div>
            </CardContent>
        </Card>
    );
}
