import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        height: 100%;
        background: #1f1f1f;
        color: #efefef;
        font-family: sans-serif;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`