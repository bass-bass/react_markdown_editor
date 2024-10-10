import { useState, useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import SimpleMDE from 'react-simplemde-editor';
import hljs from 'highlight.js/lib/core';
import php from 'highlight.js/lib/languages/php';
import 'highlight.js/styles/github.css';
import 'easymde/dist/easymde.min.css';
import '../../styles/markdown.css'


import { Editor } from './Editor';
import { EditorProp } from '../types/EditorProp';
import { Options } from 'easymde';

const sample =`
# This is sample markdown

[![Build Status](https://travis-ci.com/user/repository.svg?branch=main)](https://travis-ci.com/user/repository)[![Known Vulnerabilities](https://snyk.io/test/github/user/repository/badge.svg)](https://snyk.io/test/github/user/repository)
[![codecov](https://codecov.io/gh/user/repository/branch/main/graph/badge.svg)](https://codecov.io/gh/user/repository)

> You're scared of a world where you're needed.

This is a demo for using markdown editor with **React**.

execute \`npm start\` and access \`http://localhost:3000\` to see this page.

## Todo List
1. [x] 🌞 wake up at 8:00
2. [ ] 💇 go get a hair cut
3. [ ] 💭 write a diary


## Code
\`\`\`
public class Sample {

    private static final String MESSAGE = "Hello World.";

    public static void main(String[] args) {
        System.out.println(MESSAGE);
    }
}
\`\`\`

## Table
|id|name|age|
|:--:|:--:|:--:|
|0|alice|21|
|1|bob|23|
|2|mike|25|

`

const options = {
    showIcons: ['strikethrough', 'code', 'redo', 'heading', 'undo', 'horizontal-rule'],
    hideIcons: ['image', 'preview', 'side-by-side']
} as Options


hljs.registerLanguage('php', php);

export function EditorHandler(prop : EditorProp) {
    const [rawText, setRawText] = useState(sample);
    const editor = new Editor(prop.type);
    useEffect(() => {
        hljs.initHighlighting();
    });
    return (
      <Container>
        <Row>
          <Col>
            {/* e : HTMLTextAreaElement */}
            <h3 className='my-3'>editor</h3>
            {/*<Form.Control id='editor' value={rawText} onChange={ e => setRawText(e.target.value)} as="textarea" aria-label="With textarea" rows={12}/>*/}
            <SimpleMDE value={rawText} onChange={(e) => setRawText(e)} options={options} />
          </Col>
          <Col>
            <h3 className='my-3'>preview</h3>
            {editor.render(rawText)}
          </Col>
        </Row>
      </Container>
    );
}
