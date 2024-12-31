import { Mark } from '@tiptap/core';

export const Highlight = Mark.create({
  name: 'highlight',

  addAttributes() {
    return {
      color: {
        default: null,
        parseHTML: (element) => element.style.backgroundColor,
        renderHTML: (attributes) => {
          return attributes.color
            ? { style: `background-color: ${attributes.color}` }
            : {};
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'mark',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['mark', HTMLAttributes, 0];
  },

  addCommands() {
    return {
      toggleHighlight:
        (color) =>
        ({ commands, editor }) => {
          const currentColor = editor.getAttributes('highlight').color;
          if (currentColor === color) {
            return commands.unsetMark('highlight'); 
          } else {
          
            return commands.setMark('highlight', { color });
          }
        },
    };
  },
});
