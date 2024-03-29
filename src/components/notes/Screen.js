import React from 'react';
import { Body } from './body/Body';
import { Header } from './header/Header';

export const Screen = () => {
    return (
        <div className='page-wrapper'>
            <Header />
            <Body />
        </div>
    )
}