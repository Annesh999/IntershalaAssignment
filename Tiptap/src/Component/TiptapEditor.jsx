import React from 'react';
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline'
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import { FaBold,FaItalic,FaUnderline,FaStrikethrough,FaCode, FaParagraph, FaRedo, FaUndo, FaRulerHorizontal  } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { GoListOrdered } from "react-icons/go";
import { Highlight } from '../CustomExtention/Highlighter';
import EditTool from './EditTool';






const TiptapEditor = () => {

  const handleHighlight = (color) => {
    // Use setMark instead of setHighlight
    editor.chain().focus().toggleHighlight(color).run();
  };

  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Underline
    ],
  
  });
if (!editor){
  return null;
}
const handelSave=()=>{
    const html=editor.getHTML();
    showContent(html)
}
  return (
    <>
    <div className="editor "  >
      {/* <h2>Rich Text Editor</h2> */}
      <EditTool editor={editor}/>
            <div  className="border-slate-400	border border-t-0 ">     
         <EditorContent editor={editor} className='h-[30rem] overflow-y-scroll p-1 editor-content bg-black text-white'/>
      </div>

    {/* <button onClick={handelSave} className='bg-green-400 rounded-md p-2 w-16 mt-3 '>save</button>  */}
    </div>

  </>
  );
};

export default TiptapEditor;
