import React from 'react';
import './App.css';
import { AppContext } from './components/AppContext';
import { UserList } from './components/UserList';

function App() {
  return (
    <AppContext>
      <div>
        <UserList>

        </UserList>

      </div>
    </AppContext>
  );
}

export default App;
