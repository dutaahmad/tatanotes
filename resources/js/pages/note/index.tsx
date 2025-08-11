import { Link, usePage } from '@inertiajs/react';

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
        <div>
            <h1 className="text-2xl font-bold mb-4">My Notes</h1>
            <Link href={route('notes.create')} className="text-blue-500">+ Add Note</Link>
            <ul className="mt-4">
                {notes.map(note => (
                    <li key={note.id} className="border-b py-2">
                        <Link href={route('notes.edit', note.id)}>{note.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
