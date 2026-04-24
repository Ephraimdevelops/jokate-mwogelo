"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, LayoutDashboard, FileText, Bookmark, Mail, BookOpen, Award, FolderArchive, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navigation = [
        { name: 'Executive Overview', href: '/admin', icon: LayoutDashboard },
        { name: 'Blogs & Reflections', href: '/admin/ideas', icon: FileText },
        { name: 'Media Archive', href: '/admin/media', icon: Bookmark },
        { name: 'The Library', href: '/admin/books', icon: BookOpen },
        { name: 'Milestones', href: '/admin/milestones', icon: Award },
        { name: 'Pink Circle Community', href: '/admin/newsletter', icon: Mail },
        { name: 'Public Inquiries', href: '/admin/inquiries', icon: MessageSquare },
        { name: 'Media Kit', href: '/admin/media-kit', icon: FolderArchive },
    ];


    return (
        <div className="flex h-screen bg-[#FAFAFA] text-foreground transition-colors duration-300 overflow-hidden font-sans">
            {/* Sidebar Navigation */}
            <aside className="w-72 border-r border-brand-border bg-brand-white flex flex-col justify-between hidden md:flex flex-shrink-0">
                <div>
                    <div className="h-24 flex items-center px-8 border-b border-brand-border">
                        <Link href="/admin" className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-brand-black flex items-center justify-center text-brand-white font-display text-lg tracking-widest">
                                JM
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-display font-bold tracking-[0.2em] text-brand-black leading-none uppercase">
                                    Command
                                </span>
                                <span className="text-[10px] font-sans text-brand-accent tracking-[0.3em] uppercase mt-1">
                                    Centre
                                </span>
                            </div>
                        </Link>
                    </div>

                    <nav className="p-6 space-y-2">
                        <div className="text-[10px] font-bold text-brand-muted uppercase tracking-[0.2em] px-2 mb-6 mt-4">Content Repository</div>
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                                <Link key={item.name} href={item.href}>
                                    <span className={`flex items-center gap-4 px-4 py-3 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${isActive ? 'bg-brand-black text-brand-white shadow-xl translate-x-2' : 'text-brand-muted hover:text-brand-black hover:translate-x-1'}`}>
                                        <Icon className={`w-4 h-4 ${isActive ? 'text-brand-accent' : 'text-brand-muted'}`} />
                                        {item.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="p-6 border-t border-brand-border bg-brand-surface">
                    <div className="flex items-center gap-4 px-2 mb-6">
                        <div className="w-12 h-12 rounded-full bg-brand-black border-2 border-brand-accent/20 overflow-hidden relative">
                            <img src="/images/jokate-black-suit.png" alt="Admin User" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-brand-black leading-tight uppercase tracking-wider">JM Office</span>
                            <span className="text-[9px] text-brand-accent font-bold uppercase tracking-[0.2em] mt-1">Executive Access</span>
                        </div>
                    </div>
                    <Button variant="ghost" className="w-full justify-start text-brand-muted hover:text-brand-rose hover:bg-brand-rose/5 text-[10px] font-bold uppercase tracking-[0.2em] h-12 border border-transparent hover:border-brand-rose/20 transition-all duration-300">
                        <LogOut className="w-4 h-4 mr-3" />
                        Terminate Session
                    </Button>
                </div>
            </aside>

            {/* Mobile Header (Fallback) */}
            <div className="md:hidden flex flex-col w-full h-full">
                <header className="border-b border-brand-border bg-brand-white sticky top-0 z-50">
                    <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                        <Link href="/admin" className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-brand-black flex items-center justify-center text-brand-white font-display text-sm tracking-widest">
                                JM
                            </div>
                            <span className="text-sm font-display font-bold tracking-[0.2em] uppercase">
                                Command Centre
                            </span>
                        </Link>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto w-full p-6">
                    {children}
                </main>
            </div>

            {/* Main Content (Desktop) */}
            <main className="flex-1 overflow-y-auto w-full hidden md:block bg-brand-surface/30">
                <div className="max-w-6xl mx-auto p-12 lg:p-16">
                    {children}
                </div>
            </main>
        </div>
    );
}
