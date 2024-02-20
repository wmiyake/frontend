import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PutForm() {
    const [formData, setFormData] = useState({ id: '', descricao: '' });
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState('');
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        // Faça uma solicitação GET para obter todas as mensagens
        axios.get('http://localhost:8080/api/exemplo')
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.error('Erro ao fazer a solicitação GET:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        if (name === 'id') {
            const selected = messages.find(message => message.id === parseInt(value));
            setSelectedMessage(selected ? selected.descricao : '');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer uma chamada PUT para enviar os dados atualizados para o servidor
        // Exemplo:
        axios.put(`http://localhost:8080/api/exemplo/${formData.id}`, { descricao: formData.descricao })
            .then(response => {
                setUpdated(true);
            })
            .catch(error => {
                console.error('Erro ao atualizar os dados:', error);
            });
    };

    return (
        <div className="put-form-container">
            <h2>Atualizar Mensagem</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id">Selecione o ID da Mensagem:</label>
                    <select name="id" value={formData.id} onChange={handleChange}>
                        <option value="">Selecione o ID</option>
                        {messages.map((message, index) => (
                            <option key={index} value={message.id}>{message.id}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Mensagem Selecionada:</label>
                    <p>{selectedMessage}</p>
                    <label htmlFor="nova-descricao">Nova Descrição:</label>
                    <input type="text" name="descricao" value={formData.descricao} onChange={handleChange} />
                </div>
                <button type="submit">Atualizar</button>
            </form>
            {updated && <p>Dados atualizados com sucesso!</p>}
        </div>
    );
}

export default PutForm;
