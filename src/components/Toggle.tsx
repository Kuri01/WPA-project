import React from 'react';

interface ToggleComponentState {
    isOn: boolean;
}

/**
 * Wzorzec projektowy Command
 * @returns Komponent, który pozwala na przełączanie stanu
 */

class ToggleCommand {
    private component: Toggle;

    constructor(component: Toggle) {
        this.component = component;
    }

    execute() {
        this.component.setState((state) => ({ isOn: !state.isOn }));
    }
}

/**
 * Komponent Toggle
 * @returns Komponent z przyciskiem, który pozwala na przełączanie stanu
 */

class Toggle extends React.Component<{}, ToggleComponentState> {
    private toggleCommand: ToggleCommand;

    constructor(props: {}) {
        super(props);
        this.state = { isOn: false };
        this.toggleCommand = new ToggleCommand(this);
    }

    render() {
        return (
            <div>
                <h1>Toggle example</h1>
                <button onClick={() => this.toggleCommand.execute()}>{this.state.isOn ? 'On' : 'Off'}</button>
            </div>
        );
    }
}

export default Toggle;
