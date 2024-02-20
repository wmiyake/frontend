import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteList() {
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/exemplo');
                setItems(response.data);
            } catch (error) {
                console.error('Erro ao carregar os itens:', error);
            }
        };

        fetchItems();
    }, []);

    const handleCheckboxChange = (id) => {
        const selectedIndex = selectedItems.indexOf(id);
        if (selectedIndex === -1) {
            setSelectedItems([...selectedItems, id]);
        } else {
            setSelectedItems(selectedItems.filter(item => item !== id));
        }
    };

    const handleDeleteItems = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/exemplo/${selectedItems.join(',')}`);
            setItems(items.filter(item => !selectedItems.includes(item.id)));
            setSelectedItems([]);
        } catch (error) {
            console.error('Erro ao excluir os itens:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Itens a Serem Excluídos</h2>
            <button onClick={handleDeleteItems}>Excluir Itens Selecionados</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                            checked={selectedItems.includes(item.id)}
                            onChange={() => handleCheckboxChange(item.id)}
                        />
                        <span>ID: {item.id} - Índice do Banco: {items.indexOf(item)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DeleteList;
