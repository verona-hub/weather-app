import React, { Component, createContext } from 'react';


export const MainContext = createContext(undefined);

export class MainProvider extends Component {
    state = {
        isVisible: true
    }

    render(){
        return (
            <MainContext.Provider value={{ ...this.state }}>
                { this.props.children }
            </MainContext.Provider>
        )

    }
}

