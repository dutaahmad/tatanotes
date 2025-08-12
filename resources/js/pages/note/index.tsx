import { Button } from '@/components/ui/button';
import { breadcrumbs } from '@/constants';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, usePage, useForm, router } from '@inertiajs/react';
import { Plus, Trash2 } from 'lucide-react';
import { SimpleAlertDialog } from '@/components/simple-alert-dialog';
import { getPlainTextExcerpt } from '@/lib/utils';

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
    const { delete: inertiaDelete } = useForm();

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
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {notes.map(note => (
                        <div key={note.id} onClick={() => router.visit(route('notes.edit', note.id))} className="hover:cursor-pointer hover:transform-grow hover:scale-105 transition-all duration-200 border rounded-md p-4 flex flex-col justify-between">
                            <div>
                                <Link href={route('notes.edit', note.id)} className="text-lg font-semibold hover:underline">
                                    {note.title}
                                </Link>
                                <p className="text-sm text-white mt-2 line-clamp-3">
                                    {getPlainTextExcerpt(note.content)}
                                </p>
                            </div>
                            <div className="flex justify-end mt-4">
                                <SimpleAlertDialog
                                    title="Delete Note"
                                    description="Are you sure you want to delete this note? This action cannot be undone."
                                    onConfirm={() => {
                                        inertiaDelete(route('notes.destroy', note.id));
                                    }}
                                    trigger={<Button variant="destructive" size="icon"><Trash2 className="h-4 w-4" /></Button>}
                                    cancelText="Cancel"
                                    confirmText="Delete"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
