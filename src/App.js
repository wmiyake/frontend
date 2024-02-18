import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // GET request
    axios.get('http://localhost:8080/api/exemplo')
      .then(response => {
        setData(response.data);
        console.log(response.data); // Exibir dados recebidos do backend
        alert('Um dado foi consultado com sucesso!'); // Exibir alerta
      })
      .catch(error => {
        console.error('Erro ao fazer a solicitação GET:', error);
      });

    // POST request
    const dadosPost = { key: 'value' }; // Definir os dados para a solicitação POST
    axios.post('http://localhost:8080/api/exemplo', dadosPost)
      .then(response => {
        // Manipular a resposta do backend
        console.log(response.data); // Exibir dados recebidos do backend
          alert('Novo dado incluído com sucesso!'); // Exibir alerta
        console.log(response.data);
      })
      .catch(error => {
        // Lidar com erros
        console.error('Erro ao fazer a solicitação POST:', error);
      });

    // PUT request
    const dadosPut = { key: 'value' }; // Definir os dados para a solicitação PUT
    axios.put('http://localhost:8080/api/exemplo/1', dadosPut)
      .then(response => {
        // Manipular a resposta do backend
        console.log(response.data); // Exibir dados recebidos do backend
        alert('Dado alterado com sucesso!'); // Exibir alerta
        console.log(response.data);
      })
      .catch(error => {
        // Lidar com erros
        console.error('Erro ao fazer a solicitação PUT:', error);
      });

    // DELETE request
    axios.delete('http://localhost:8080/api/exemplo/1')
      .then(response => {
        // Manipular a resposta do backend
        alert('Dado excluído com sucesso!'); // Exibir alerta
        toast.success('Dado excluído com sucesso!');
        console.log(response.data);
      })
      .catch(error => {
        // Lidar com erros
        console.error('Erro ao fazer a solicitação DELETE:', error);
      });

  }, []);

  return (
    <div>
      {/* Renderizar dados recebidos do backend */}
      {data && (
        <div>
          {/* Renderizar dados recebidos do backend */}
        </div>
      )}
    </div>
  );
}

export default App;