import { Button } from '@/components/ui/button';
import { breadcrumbs } from '@/constants';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, usePage } from '@inertiajs/react';
import { Plus } from 'lucide-react';

interface Note {
    id: number;
    title: string;
    content: string;
    // Add other properties from your Note model as needed
}

type PageProps = {
    notes: Note[];
};

export default function Index() {
    const { notes } = usePage<PageProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Notes" />
            <div className='bg-secondary min-h-[90vh] rounded-md m-4 p-4 flex flex-col'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className="text-2xl font-bold text-center">My Notes</h1>
                    <Link href={route('notes.create')} >
                        <Button>
                            <Plus className="w-5 h-5" />
                            <p>Add Note</p>
                        </Button>
                    </Link>

                </div>
                <ul className="mt-4">
                    {notes.map(note => (
                        <li key={note.id} className="border-b py-2">
                            <Link href={route('notes.edit', note.id)}>{note.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </AppLayout>
    );
}
