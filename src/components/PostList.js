import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Faça uma solicitação GET para obter os posts do backend
    axios.get('http://localhost:8080/api/exemplo')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Erro ao fazer a solicitação GET:', error);
      });
  }, []);

  return (
    <div className="post-list-container">
      <h2>Lista de Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index} className="post-item">
            <p>Index do Banco: {index + 1}</p>
            <p>Mensagem: {post.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;