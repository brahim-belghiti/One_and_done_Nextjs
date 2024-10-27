'use client';

import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  codeBlockPlugin,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

function MdxEditor() {
  return (
    <section className="flex w-full h-full border-2 border-orange-400">
      <MDXEditor
        markdown="Hello world"
        plugins={[
          headingsPlugin({
            allowedHeadingLevels: [1, 2, 3, 4, 5, 6],
          }),
          listsPlugin(),
          codeBlockPlugin(),
        ]}
      />
    </section>
  );
}

export default MdxEditor;
