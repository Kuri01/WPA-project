import React, { Component } from 'react';

/**
 * HOC do dynamicznego importowania komponentów (Wzorzec projektowy HOC)
 * @param importFunction Funkcja, która zwraca Promise z komponentem
 * @returns Komponent, który pozwala na dynamiczne importowanie innych komponentów
 */

const withDynamicImport = (importFunction: () => Promise<any>) => {
    return class extends Component {
        state: { component: any; error: boolean };
        constructor(props: {} | Readonly<{}>) {
            super(props);

            this.state = {
                component: null,
                error: false,
            };
        }

        componentDidMount() {
            importFunction()
                .then((mod: { default: any }) => this.setState({ component: mod.default }))
                .catch((err) => {
                    console.log(err);
                    this.setState({ error: true });
                });
        }

        render() {
            const { component: ImportedComponent, error } = this.state;

            if (error) {
                return <div>ERROR: The component failed to load.</div>;
            }

            return ImportedComponent ? <ImportedComponent {...this.props} /> : <div>component is loading</div>;
        }
    };
};

export default withDynamicImport;
