import { useState } from "react";

const fileStructure = {
  children: [
    {
      name: "desktop",
      children: [
        {
          name: "myFiles",
          children: [
            {
              name: "report.pdf",
            },
            {
              name: "notes.txt",
            },
          ],
        },
      ],
    },
    {
      name: "documents",
      children: [
        {
          name: "temp",
          children: [
            {
              name: "image.pdf",
            },
          ],
        },
      ],
    },
    {
      name: "resume.pdf",
    },
    {
      name: "GTAV",
    },
  ],
};
type FileStructure = {
  name: string;
  children?: FileStructure[];
};

function Explorer({ file, depth }: { file: FileStructure; depth: number }) {
  const [hasChild, setHasChild] = useState<boolean>(false);
  return (
    <div className="file">
      {file.children ? (
        <button onClick={() => setHasChild(!hasChild)}>
          {hasChild ? "-" : "+"} {file.name}
        </button>
      ) : (
        <div>{file.name}</div>
      )}
      {hasChild &&
        file.children?.map((child) => (
          <div style={{ paddingLeft: `${depth * 15}px` }}>
            <Explorer file={child} depth={depth + 1} />
          </div>
        ))}
    </div>
  );
}

export default function FileXplorer() {
  return (
    <div className="fileExplorer">
      {fileStructure.children.map((child, filInd) => (
        <Explorer key={filInd} file={child} depth={1} />
      ))}
    </div>
  );
}
