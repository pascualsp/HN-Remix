import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        background-color: hsl(20, 2%, 10%);
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: hsl(20, 2%, 15%);
        color: white;
        font-size: 19px;
        max-width: 1200px;
        margin: auto;
        padding: 5px 15px;
    }
`;

export const HeaderTitle = styled.h1`
    letter-spacing: 2px;
    margin: 8px 0 20px 0;
    border-bottom: 1px solid rgba(255, 102, 0, 1);

    .remix {
        color: hsl(24, 69%, 50%);
    }
`;

export const StorySection = styled.div`
    margin: 10px 0;
    padding-bottom: 5px;

    a {
        color: white;
        text-decoration: none;
    }

    a:visited {
        color: hsl(24, 2%, 50%);
    }

    .comments {
        max-width: max-content;
        color: hsl(24, 25%, 75%);
        margin: 0;
        font-size: 0.75em;
    }

    .comments:hover {
        cursor: pointer;
    }
`;

export const StoryMetaInfo = styled.p`
    color: hsl(24, 25%, 50%);
    font-size: 0.75em;
    margin: 0;
`;

export const LoadButton = styled.button`
    border: 1px solid rgba(255, 102, 0, 1);
    background-color: transparent;
    color: white;
    font-size: 20px;
    padding: 12px;
    margin: 10px 0 20px 0;
`;