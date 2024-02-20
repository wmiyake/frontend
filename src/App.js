import logo from './logo.svg';
import './App.css';
import './PostForm.css';
import './PostList.css';
import './PutForm.css';
import './DeleteList.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PutForm from './components/PutForm';
import DeleteList from './components/DeleteList';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Bem Vindo ao React</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a>
        </header>
        <Switch>
          {/* Rota para o formulário de criação de post */}
          <Route exact path="/post" component={PostForm} />
          <Route exact path="/get" component={PostList} />
          <Route exact path="/put" component={PutForm} />
          <Route exact path="/delete" component={DeleteList} />
          {/* Outras rotas, se houver */}
        </Switch>
      </Router>
    </div>
  );
} export default App;