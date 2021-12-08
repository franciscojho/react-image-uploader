import { useState, useContext } from 'react';
import Context from '../context/context';
import sendToCloudinary from '../utils/sendToCloudinary';

const onUpload = async files => {

    const file = files[0];

    if( file && file.type.includes('image') ) {
        console.log('files...', file);
        const resp = await sendToCloudinary(file);
        return await resp.json();
    }

}

export const useUpload = ( initialRef = {} ) => {

    const { dispatch } = useContext(Context);

    const [ ref ] = useState(initialRef);  

    const handleOnClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        ref.current.click();
    }
    
    const handleInputFileChange = async (e) => {
        const { files } = e.target;
        dispatch({ type: 'UPLOADING' });
        const data = await onUpload(files);
        dispatch({ type: 'UPLOADED', payload: data.secure_url });

    }

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDrop = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { files } = e.dataTransfer;
        dispatch({ type: 'UPLOADING' });
        const data = await onUpload(files);
        data ?
            dispatch({ type: 'UPLOADED', payload: data.secure_url }) :
            dispatch({ type: 'ON_ERROR' })
    }


    return [ handleOnClick, handleInputFileChange, handleDragOver, handleDrop ];
}

