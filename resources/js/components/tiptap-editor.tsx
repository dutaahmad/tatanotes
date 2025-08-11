import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { Button } from './ui/button';
import { Bold, Heading, Italic } from 'lucide-react';
import { forwardRef, useImperativeHandle } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export const HEADING_LEVELS:HeadingLevel[] = [1, 2, 3, 4, 5, 6] as const;

interface TiptapEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

/**
 * TiptapEditor component
 * 
 * @param {TiptapEditorProps} props - The props for the component
 * @returns {JSX.Element} - The rendered notes in component
 * 
 * @example
 * 
 * export const Page = () => {
 *   const [value, setValue] = useState('');
 * 
 *   const handleChange = (value: string) => {
 *     setValue(value);
 *   };
 * 
 *   editorRef = useRef<any>(null);
 * 
 * const reset = () => {
 *     setValue('');
 *     editorRef.current?.reset();
 *   };
 * 
 *   return (
 *     <TiptapEditor
 *       value={value}
 *       onChange={handleChange}
 *       placeholder="Start writing your note..."
 *       ref={editorRef}
 *     />
 *   );
 * };
 */
export const TiptapEditor = forwardRef(({ value, onChange, placeholder }: TiptapEditorProps, ref) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: HEADING_LEVELS,
        },
        bold: {},
        italic: {},
      }),
      Placeholder.configure({
        placeholder: placeholder || 'Start writing your note...',
      }),
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none w-full h-full focus:outline-none overflow-y-auto',
      },
    },
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    onDelete(props) {
      
    },
  });

  useImperativeHandle(ref, () => ({
    reset: () => editor?.chain().clearContent(true).unsetAllMarks().clearNodes().run()
  }));

  if (!editor) {
    return null;
  }

  return (
    <div className='flex flex-col flex-1 space-y-4 max-w-5xl mx-auto w-full '>
      <div className="flex gap-2 mb-2 w-full p-2">
        <Button
          type="button"
          variant={"ghost"}
          size={"icon"}
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1  ${editor.isActive('bold') ? 'bg-primary/30' : ''}`}
          aria-label="Bold"
        >
          <Bold className='w-4 h-4' />
        </Button>
        <Button
          type="button"
          variant={"ghost"}
          size={"icon"}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1  ${editor.isActive('italic') ? 'bg-primary/30' : ''}`}
          aria-label="Italic"
        >
          <Italic className='w-4 h-4' />
        </Button>
        {HEADING_LEVELS.map((level) => (
          <Button
            key={level}
            type="button"
            variant={"ghost"}
            size={"icon"}
            onClick={() => editor.chain().focus().toggleHeading({ level: level as HeadingLevel }).run()}
            className={`gap-0 text-end ${editor.isActive('heading', { level: level as HeadingLevel }) ? 'bg-primary/30' : ''}`}
            aria-label={`Heading ${level}`}
          >
            <Heading className='w-4 h-4' />
            <p className='text-xs'>{level}</p>
          </Button>
        ))}
      </div>
      <div className="border rounded-md p-2 flex-1 min-h-0 ">
        <EditorContent
          editor={editor}
          className="tiptap w-full h-full max-h-[calc(100vh-10rem)] "
        />
      </div>
    </div>
  );
});

export default TiptapEditor;