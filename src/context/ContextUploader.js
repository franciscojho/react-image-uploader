import React, { useReducer } from 'react';
import Context from '../context/context';
import * as UploaderReducer from '../context/uploaderReducer';

const ContextUploader = ({ children, className }) => {

    const [state, dispatch] = useReducer(
        UploaderReducer.uploaderReducer, 
        UploaderReducer.uploaderInitialState
    );

    return (
        <Context.Provider
            value={{ state, dispatch }}
        >
            <div
                className={`${className}`}
            >
                { children }
            </div>
        </Context.Provider>
    )
}

export default ContextUploader;
