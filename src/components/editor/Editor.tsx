import { MarkedEditor } from "./MarkedEditor";
import { MilkdownEditor } from "./MilkdownEditor";
import { ReactMarkdownEditor } from "./ReactMarkdoenEditor";
import { RemarkableEditor } from "./RemarkableEditor";

const EditorType = {
    Remarkable : "1",
    Marked : "2",
    ReactMarkdown : "3",
    Milkdown : "4",
} as const;

function getKeyByValue<T extends Record<string, string>>(obj: T, value: string): keyof T | undefined {
    return (Object.keys(obj) as Array<keyof T>).find(key => obj[key] === value);
}

export class Editor {
    type : string;
    name : string;

    constructor(type: string) {
        this.type = type;
        const key = getKeyByValue(EditorType, type);
        if (key === undefined) {
            throw new Error('unknown type : ' + this.type);
        } else {
            this.name = key;
        }
    }

    public render(markdown : string) {
        switch(this.type) {
            case EditorType.Remarkable:
                return <RemarkableEditor markdown={markdown} />;
            case EditorType.Marked:
                return <MarkedEditor markdown={markdown} />;
            case EditorType.ReactMarkdown:
                return <ReactMarkdownEditor markdown={markdown} />;
            case EditorType.Milkdown:
                return <MilkdownEditor markdown={markdown} />;
        }
    }
    
}