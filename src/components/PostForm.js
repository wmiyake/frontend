import React, { useState } from 'react';
import axios from 'axios';

function PostForm() {
  const [id, setId] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Envie os dados do formulário para o backend
      await axios.post('http://localhost:8080/api/exemplo', { id, descricao });
      // Limpe os campos após o envio bem-sucedido
      setId('');
      setDescricao('');
      // Adicione aqui qualquer ação adicional após o envio bem-sucedido
      alert('Post criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar post:', error);
      // Adicione aqui qualquer tratamento de erro necessário
      alert('Erro ao criar post. Por favor, tente novamente.');
    }
  };

  return (
    <div className="post-form-container">
      <h2>Criar Novo Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <input
            type="text"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <button type="submit">OK</button>
      </form>
    </div>
  );
}

export default PostForm;