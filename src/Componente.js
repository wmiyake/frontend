// ExemploComponente.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Componente() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/exemplo')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao fazer a solicitação GET:', error);
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

export default Componente;
