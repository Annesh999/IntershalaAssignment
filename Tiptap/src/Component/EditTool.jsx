import React from 'react';
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaCode, FaParagraph, FaRedo, FaUndo, FaRulerHorizontal } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { GoListOrdered } from "react-icons/go";
const EditTool = ({ editor}) => {
  if (!editor) {
    return null;
  }
  const handleHighlight = (color) => {
    editor.chain().focus().toggleHighlight(color).run();
  };
  return <>
  
  <div className="button-group bg-gray-600 flex gap-4 items-center  text-white p-5">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            className={`${editor.isActive('bold') ? 'bg-gray-500 rounded-sm' : ''} `}
          >
           <FaBold/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
            className={editor.isActive('italic') ? 'bg-gray-500 rounded-sm' : ''}
          >
           <FaItalic/>
          </button>
          <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive('underline') ? 'bg-gray-500 rounded-sm' : ''}
            >
            <FaUnderline/>
            </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
            className={editor.isActive('strike') ? 'bg-gray-500 rounded-sm' : ''}
          >
            <FaStrikethrough/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleCode()
                .run()
            }
            className={editor.isActive('code') ? 'bg-gray-500 rounded-sm' : ''}
          >
            <FaCode/>
          </button>
         
          
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive('paragraph') ? '' : ''}
          >
            <FaParagraph />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'bg-gray-500 rounded-sm' : ''}
          >
           <b>H1</b> 
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'bg-gray-500 rounded-sm' : ''}
          >
            <b>H2</b>
          </button>
          {/* <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? 'bg-gray-500 rounded-sm' : ''}
          >
        <b>H3</b>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            className={editor.isActive('heading', { level: 4 }) ? 'bg-gray-500 rounded-sm' : ''}
          >
       <b>H4</b>     
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
            className={editor.isActive('heading', { level: 5 }) ? 'bg-gray-500 rounded-sm' : ''}
          >
          <b>H5</b>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
            className={editor.isActive('heading', { level: 6 }) ? 'bg-gray-500 rounded-sm' : ''}
          >
           <b>H6</b>
          </button> */}
  
  
  
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'bg-gray-500 rounded-sm' : ''}
          >
          <MdFormatListBulleted/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'bg-gray-500 rounded-sm' : ''}
          >
            <GoListOrdered/>
          </button> 
  
          <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <FaRulerHorizontal  />
          </button>
  
          
          
  
  
          <button onClick={() => handleHighlight('pink')} className={`p-[10px] bg-pink-300 rounded-2xl hover:bg-pink-200 hover hover:rounded-2xl ${editor.isActive('pink') ? 'bg-gray-500 rounded-sm' : '' }`}>
            
          </button>
          <button onClick={() => handleHighlight('lightgreen')}className="p-[10px] bg-green-400 rounded-2xl  hover:bg-green-200 hover hover:rounded-2xl ">
          
          </button>
          <button onClick={() => handleHighlight('yellow')} className="p-[10px] bg-yellow-400 rounded-2xl  hover:bg-yellow-200 hover hover:rounded-2xl ">
          
          </button>
          <button onClick={() => handleHighlight('red')}className="p-[10px] bg-red-600 rounded-2xl  hover:bg-red-200 hover hover:rounded-2xl ">
          
          </button>
  
          <button onClick={() => editor.chain().focus().unsetMark('highlight').run()} className="p-[10px] bg-white rounded-2xl  hover:bg-slate-100 hover hover:rounded-2xl ">
          
          </button>
        
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .undo()
                .run()
            }
          >
            <FaUndo/>
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .redo()
                .run()
            }
          >
            <FaRedo />
          </button>
        
        </div>
  
  </>
    
}
export default EditTool;
