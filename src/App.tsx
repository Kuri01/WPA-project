import React from 'react';
import FakeStore from './components/FakeStore';
import Toggle from './components/Toggle';
import MFe from './components/MFe';

function App() {
    return (
        <div className='App'>
            <FakeStore />
            <Toggle />
            <MFe />
        </div>
    );
}

export default App;
