import React, { useState } from 'react';

const Task = () => {
  const [fileSystem, setFileSystem] = useState({});
  const [fileContent, setFileContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const mkdir = (path) => {
    const directories = path.split('/');
    let curDir = fileSystem;

    for (const directory of directories) {
      if (directory === '') continue;

      if (!curDir[directory]) {
        curDir[directory] = {};
      }

      curDir = curDir[directory];
    }

    setFileSystem({ ...fileSystem });
  };

  const writeFile = (path) => {
    const directories = path.split('/');
    const filename = directories.pop();
    let curDir = fileSystem;

    for (const directory of directories) {
      if (directory === '') continue;

      if (!curDir[directory]) {
        setErrorMessage(`Error: Parent directory doesn't exist: ${directory}`);
        return;
      }

      curDir = curDir[directory];
    }

    const content = prompt('Enter file content:');
    curDir[filename] = content;
    setFileSystem({ ...fileSystem });
    setErrorMessage('');
    alert('File written successfully.');
  };

  const readFile = (path) => {
    const directories = path.split('/');
    const filename = directories.pop();
    let curDir = fileSystem;

    for (const directory of directories) {
      if (directory === '') continue;

      if (!curDir[directory]) {
        setErrorMessage(`Error: Parent directory doesn't exist: ${directory}`);
        return;
      }

      curDir = curDir[directory];
    }

    if (!curDir[filename]) {
      setErrorMessage(`Error: File not found: ${filename}`);
      return;
    }

    setFileContent(curDir[filename]);
    setErrorMessage('');
  };

  return (
    <div>
      <button onClick={() => mkdir('/foo/bar')}>Create Directory</button>
      <button onClick={() => writeFile('/foo/bar/file.txt')}>Write File</button>
      <button onClick={() => readFile('/foo/bar/file.txt')}>Read File</button>

      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {fileContent && (
        <div>
          <strong>File Content:</strong>
          <p>{fileContent}</p>
        </div>
      )}
    </div>
  );
};

export default Task;
