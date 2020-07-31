import React, { useState, useContext } from 'react';
import './App.css';
import { AppProvider, AppContext } from './components/AppContext';
import { UserList } from './components/UserList';
import { UserPagination } from "./components/Pagination";
import { Container } from 'react-bootstrap';

function App() {

  return (
    <AppProvider>
      <Container>
        <h1>Regres.in User List</h1>
        <UserList />
      </Container>
    </AppProvider>
  );
}

export default App;
