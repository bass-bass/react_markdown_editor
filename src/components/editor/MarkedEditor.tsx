import React from 'react';
import { marked } from 'marked';
import { MdProp } from '../types/MdProp';

export const MarkedEditor : React.FC<MdProp> = (prop) => {
  const renderedHTML = marked.parse(prop.markdown).toString();
  return <div dangerouslySetInnerHTML={{__html: renderedHTML}} />;
}
