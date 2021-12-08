import React, { forwardRef } from 'react';
import { useUpload } from '../hooks/useUpload';

const FileUploaderButton = forwardRef((props, ref) => {

    const [ handleOnClick, handleInputFileChange ] = useUpload(ref)

    return (
        <div className="uploader__footer">
            <input type='file' className="uploader__hidden-input" accept="image/png,image/jpeg,image/jpg" ref={ ref } onChange={ handleInputFileChange } />
            <button 
                className="uploader__btn"
                onClick={ handleOnClick }
            >
                Choose a file
            </button>
        </div>
    )
})

export default FileUploaderButton;