import React, { useRef, useContext, useState } from 'react';
import FileUploaderDropArea from './FileUploaderDropArea';
import FileUploaderButton from './FileUploaderButton';
import BarLoader from "react-spinners/BarLoader";
import Context from '../context/context';
import { CopyToClipboard } from 'react-copy-to-clipboard';


export const ImageUploaderApp = () => {

    const inputElement = useRef(null);

    const dropElement = useRef(null);

    const { state } = useContext(Context);

    const { url, isLoading, isError } = state;

    const [copy, setCopy] = useState({ value: '', copied: false });

    const handleCopy = () => {
        setCopy({copied: true, value: url});
    }

    return (
        <>
            {
                !isLoading && !url ?
                <form className="uploader__container">
                    <div className="uploader__header">    
                        <h2 className="uploader__title">Upload your image</h2>
                        <p className="uploader__subtitle">File should be Jpg, Jpeg, or Png</p>
                        { isError && <span className="uploader--error">Only the above file types are allowed</span> }
                    </div>
                    <FileUploaderDropArea ref={ inputElement }/>
                    <p className="uploader__subtitle">Or</p>
                    <FileUploaderButton ref={ dropElement }/>
                </form>

                :
                
                <></>
            }
            {
                isLoading && !url ?
                <div className="uploader__container">
                    <p className="uploader__uploading-message">Uploading...</p>
                    <BarLoader color={'#1974d2'} loading={true} width={300} />
                </div>

                :

                <></>
            }

            {
                url &&
                <div className="uploader__container">
                    <div className="uploader__header">
                        <p className="uploader__title">Uploaded Successfully!</p>
                    </div>
                    <figure className="uploader__img-container">
                        <img className="uploader__img" src={ url } width="250px" height="150px" alt="" />
                    </figure>
                        <div className="uploader__clipboard-container">
                            <p className="uploader__url">{ url }</p>
                            <CopyToClipboard text={ url } onCopy={ handleCopy }>
                                <button className="uploader__copy-button">
                                    { !copy.copied ? 'Copy Link' : 'Copied!'}
                                </button>
                            </CopyToClipboard>
                        </div>
                </div>
            }
        </>
    )
}
