"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import Link from "next/link";

export function ResidentAssistant() {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-rose text-white rounded-none shadow-2xl flex items-center justify-center hover:bg-plum transition-colors duration-700 ease-in-out"
                aria-label="Open Assistant"
            >
                <MessageSquare size={20} strokeWidth={1.5} />
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 w-[340px] bg-blush shadow-2xl border border-plum/10">
            <div className="p-4 border-b border-plum/10 flex justify-between items-center bg-plum text-white">
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-semibold text-rose">Assistant</span>
                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                    <X size={16} strokeWidth={1.5} />
                </button>
            </div>
            <div className="p-6">
                <p className="text-[14px] font-sans font-medium text-plum leading-relaxed mb-6">
                    "You can place one girl back in school today. Would you like to do that?"
                </p>
                <div className="flex flex-col gap-2">
                    <Link href="/partner#sponsor" onClick={() => setIsOpen(false)} className="inline-flex items-center justify-center text-[10px] uppercase font-semibold tracking-widest bg-rose text-white py-3 hover:bg-plum transition-colors duration-700 ease-in-out">
                        Yes, support a student
                    </Link>
                    <Link href="/impact" onClick={() => setIsOpen(false)} className="inline-flex items-center justify-center text-[10px] uppercase font-semibold tracking-widest border border-plum/15 text-plum py-3 hover:bg-warm-ivory transition-colors duration-700 ease-in-out">
                        Tell me more
                    </Link>
                </div>
            </div>
        </div>
    );
}
