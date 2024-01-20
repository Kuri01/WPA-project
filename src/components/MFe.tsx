import React from 'react';
import withDynamicImport from '../utils/withDynamicImport';

const RemoteApp = withDynamicImport(() => new Promise((resolve) => setTimeout(() => resolve(import('remote/App')), 1000)));

/**
 * Komponent Microfrontend (Wzorzec projektowy Microfrontend)
 * @returns Komponent z dynamicznie importowanym komponentem z innego projektu
 */

const MFe = () => {
    return (
        <div>
            <h1>Microfrontend</h1>
            <RemoteApp />
        </div>
    );
};

export default MFe;
