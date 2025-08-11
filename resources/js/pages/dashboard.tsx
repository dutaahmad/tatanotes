import { breadcrumbs } from '@/constants';
import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';



export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Notes" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <Link href="/notes" className="absolute inset-0 size-full flex items-center justify-center hover:curoser-pointer">
                        <span className="text-2xl font-bold text-neutral-700 dark:text-neutral-300 hover:underline">Notes</span>
                    </Link>
                </div>
                {/* <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div> */}
            </div>
        </AppLayout>
    );
}
