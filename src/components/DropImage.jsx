import React from 'react'
import { useDropzone } from 'react-dropzone';
import {IoMdPhotos} from 'react-icons/io';

export default function DropImage({onDrop, accept,open}) {
    const {getRootProps,getInputProps,acceptedFiles,isDragActive}=useDropzone({onDrop, accept});
  return (
    <div>
        <div {...getRootProps({className:"dropzone border rounded-lg border-dashed border-primary dark:border-secondary_2 py-4 px-4 mx-auto cursor-pointer transition-all duration-300 ease-in"})} >
            <input className="input-zone" {...getInputProps()} />
            <div className="text-center py-4 block text-opacity-20 text-dark_secondary dark:text-secondary_2 dark:text-opacity-10">
                <IoMdPhotos size={30} className="mx-auto"/>
                {isDragActive?(
                    <p className="dropzone-content font-bold text-md capitalize">
                        Release photo
                    </p>
                ):(
                    <p className="dropzone-content font-bold text-md capitalize">
                        Add photo
                    </p>
                )}
                
            </div>
        </div>
    </div>
  )
}
