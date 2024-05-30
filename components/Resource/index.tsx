import React from 'react';
import ResourcesList from '../ResourceList';

export default function Resource() {
    return (
        <div className='flex flex-col justify-center items-start h-max w-full my-10 gap-10'>
            <ResourcesList />
            <ResourcesList />
        </div>
    )
}