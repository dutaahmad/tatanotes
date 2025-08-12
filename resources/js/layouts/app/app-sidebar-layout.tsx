import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren, useState, useEffect } from 'react';

export default function AppSidebarLayout({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        setTransitioning(true); // Start fade-in when component mounts or children change
        const timer = setTimeout(() => {
            setTransitioning(false); // End fade-in after a short delay
        }, 100); // Adjust duration as needed

        return () => clearTimeout(timer);
    }, [children]); // Re-run effect when children (page content) changes

    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                <div className={`transition-opacity duration-100 ease-in-out ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
                    {children}
                </div>
            </AppContent>
        </AppShell>
    );
}
