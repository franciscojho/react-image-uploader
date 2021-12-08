import React, { forwardRef, useEffect } from 'react';
import ImageSvg from '../assets/ImageSvg';
import { useUpload } from '../hooks/useUpload';

const FileUploaderDropArea = forwardRef((props, ref) => {

    const [ , , handleDragOver, handleDrop ] =  useUpload(ref);

    useEffect(() => {
        const element = ref.current;
        element.addEventListener('dragover', handleDragOver);
        element.addEventListener('drop', handleDrop);
        return () => {
            element.removeEventListener('dragover', handleDragOver);
            element.removeEventListener('drop', handleDrop);
        }
    }, [ref, handleDragOver, handleDrop]);  

    return (
        <div className="uploader__drop-area" ref={ ref }>
            <ImageSvg/>
            <p className="uploader__tooltip">Drag and drop your image here</p>
        </div>
    )
})

export default FileUploaderDropArea
