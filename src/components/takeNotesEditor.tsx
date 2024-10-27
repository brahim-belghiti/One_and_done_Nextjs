'use client';

import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  AdmonitionDirectiveDescriptor,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  directivesPlugin,
  frontmatterPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  sandpackPlugin,
  tablePlugin,
  KitchenSinkToolbar,
  toolbarPlugin,
  InsertFrontmatter,
  Headings,
  UndoRedo,
  BoldItalicUnderlineToggles,
  ListsToggle,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

function MdxEditor() {
  return (
    <section className="flex w-full h-full border-2 border-orange-400">
        <MDXEditor
      markdown="Hello world"
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              {' '}
              <ListsToggle/>
              <BoldItalicUnderlineToggles />
            </>
          )
        })
      ]}
    />

    </section>
  );
}

export default MdxEditor;
