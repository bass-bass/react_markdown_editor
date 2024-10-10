import { useState } from 'react';
import { Container,Form } from 'react-bootstrap'
import { EditorHandler } from './components/editor/EditorHandler';
import './App.css';

export default function App() {
  const [type, setType] = useState('2');

  return (
    <Container>
      {/*
      <Form.Select className="my-2" onChange={e => setType(e.target.value)}>
        <option>select markdown editor type</option>
        <option value={1}>Remarkable editor</option>
        <option value={2}>Marked editor</option>
        <option value={3}>ReactMarkdown editor</option>
        <option value={4}>Milkdown editor</option>
      </Form.Select>
      */}
      <EditorHandler type={type}/>
    </Container>
  );
}
