// src/components/mounting-provider.tsx
"use client";

import { useEffect, useState } from "react";

export function MountingProvider({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <div className={isMounted ? "block" : "hidden"}>{children}</div>
            {!isMounted && (
                <div className="min-h-screen flex items-center justify-center">
                    {/* Vous pouvez ajouter un loader ici si vous le souhaitez */}
                </div>
            )}
        </>
    );
}