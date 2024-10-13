import React from 'react';
import ReactDOM from 'react-dom/client';
import { MDBHome } from './src/main';
import { OuterWrapper } from './index.styled.ts';

/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
ReactDOM.createRoot(document.getElementById('mdb-home')!).render(
    <OuterWrapper>
        <MDBHome />
    </OuterWrapper>,
);
