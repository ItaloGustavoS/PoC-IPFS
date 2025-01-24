import React, { useState } from "react";
const ipfs = require("./ipfsClient");

const IPFSUploader = () => {
  const [file, setFile] = useState(null); // Para o arquivo a ser enviado
  const [uploadedFiles, setUploadedFiles] = useState([]); // Lista de arquivos enviados

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) {
      alert("Por favor, selecione um arquivo antes de enviar.");
      return;
    }

    try {
      const added = await ipfs.add(file); // Adiciona o arquivo à rede IPFS
      const fileHash = added.path;

      setUploadedFiles((prevFiles) => [
        ...prevFiles,
        { name: file.name, hash: fileHash },
      ]);

      alert(`Arquivo enviado com sucesso! Hash: ${fileHash}`);
    } catch (error) {
      console.error("Erro ao fazer upload do arquivo:", error);
    }
  };

  return (
    <div>
      <h1>Uploader de Arquivos com IPFS</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>Enviar para IPFS</button>

      <h2>Arquivos Enviados</h2>
      <ul>
        {uploadedFiles.map((file, index) => (
          <li key={index}>
            <strong>{file.name}</strong>:
            <a
              href={`https://ipfs.io/ipfs/${file.hash}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar no IPFS
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IPFSUploader;
