import React from 'react';
import { Remarkable } from 'remarkable';
import { MdProp } from '../types/MdProp';

const md = new Remarkable();

export const RemarkableEditor : React.FC<MdProp> = (prop) => {
  const renderedHTML = md.render(prop.markdown);
  return <div dangerouslySetInnerHTML={{__html: renderedHTML}} />;
}
