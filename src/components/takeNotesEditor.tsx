'use client'

import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  codeBlockPlugin,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

function MdxEditor() {
  return (
    <div className="flex w-full h-full border-2 border-orange-400">
      <MDXEditor
        markdown="Start taking notes"
        plugins={[
          headingsPlugin({
            allowedHeadingLevels: [1, 2, 3, 4, 5, 6],
          }),
          listsPlugin(),
          codeBlockPlugin(),
        ]}
      />
    </div>
  );
}

export default MdxEditor;
