import React from 'react';
import Markdown from 'react-markdown'
import { MdProp } from '../types/MdProp';

export const ReactMarkdownEditor : React.FC<MdProp> = (prop) => {
  return <Markdown>{prop.markdown}</Markdown>;
}
