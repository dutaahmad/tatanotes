import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { breadcrumbs } from '@/constants';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';
import TiptapEditor from '@/components/tiptap-editor';
import { SimpleAlertDialog } from '@/components/simple-alert-dialog';

interface Note {
    id: number;
    title: string;
    content: string;
}

export default function NoteEdit({ note }: { note: Note }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        title: note.title,
        content: note.content,
    });

    const editorRef = useRef<any>(null);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('notes.update', note.id));
    };

    const resetContent = () => {
        reset();
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Note: ${note.title}`} />
            <div className="flex h-[90vh] rounded-md m-4 overflow-hidden">
                <main className="flex-1 bg-secondary rounded-md p-6 overflow-y-hidden h-98/100">
                    <form onSubmit={submit} className="space-y-4 max-w-5xl mx-auto h-full">
                        <div className="flex items-center justify-end gap-4">
                            <Link href={route('notes.index')}>
                                <Button type="button" variant="outline">Cancel</Button>
                            </Link>
                            <SimpleAlertDialog
                                title="Are you sure?"
                                description="This will reset your note content to the latest saved version."
                                onConfirm={resetContent}
                                trigger="Reset"
                                cancelText="Cancel"
                                confirmText="Yes"
                            />
                            <Button type="submit" disabled={processing}>
                                Update Note
                            </Button>
                        </div>
                        <div>
                            <Label htmlFor="title" className="sr-only">Title</Label>
                            <Input
                                id="title"
                                type="text"
                                name="title"
                                value={data.title}
                                className="py-8 px-4 block w-full text-3xl md:text-4xl font-bold bg-transparent"
                                autoComplete="title"
                                onChange={(e) => setData('title', e.target.value)}
                                required
                                placeholder="Title"
                            />
                            <InputError message={errors.title} className="mt-2" />
                        </div>
                        <div className='flex flex-col flex-1 space-y-4 mx-auto w-full h-[80%] overflow-auto border-4 border-primary/20'>
                            <TiptapEditor
                                value={data.content}
                                onChange={(val) => setData('content', val)}
                                placeholder="Start writing your note..."
                                ref={editorRef}
                            />
                            <InputError message={errors.content} className="mt-2" />
                        </div>
                    </form>
                </main>
            </div>
        </AppLayout>
    );
}