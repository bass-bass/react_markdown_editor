import React, {useEffect} from 'react';
import { Editor, rootCtx, defaultValueCtx } from '@milkdown/kit/core';
import { nord } from '@milkdown/theme-nord';
import { Milkdown, MilkdownProvider, useEditor, useInstance } from '@milkdown/react';
import { commonmark } from '@milkdown/kit/preset/commonmark';
import { MdProp } from '../types/MdProp';

const MilkdownGenerator: React.FC<MdProp> = (prop) => {
    const { get } = useEditor((root) =>
      Editor.make()
        .config(nord)
        .config((ctx) => {
          ctx.set(rootCtx, document.querySelector('#editor'));
          ctx.set(defaultValueCtx, prop.markdown);
        })
        .use(commonmark),
    );

  return <Milkdown />;
};

export const MilkdownEditor: React.FC<MdProp> = (prop) => {
  return (
    <MilkdownProvider>
      <MilkdownGenerator markdown={prop.markdown}/>
    </MilkdownProvider>
  );
};

