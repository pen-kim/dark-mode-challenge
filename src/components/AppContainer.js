import React from 'react';

export default class AppContainer extends React.Component {

    render() {
        const {children} = this.props;

        return (
            <div className="app-container">
                <div className = "dark-mode">
                {children}
                </div>
            </div>

        );
    }

}
