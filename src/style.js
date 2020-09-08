import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        background-color: hsl(20, 2%, 10%);
    }

    body {
        font-family: 'Poppins', sans-serif;
        color: white;
        font-size: 19px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:visited {
        color: hsl(24, 2%, 50%);
    }

    .content-section {
        background-color: hsl(20, 2%, 15%);
        max-width: 1200px;
        margin: auto;
        margin-top: -8px;
        padding: 5px 15px;
    }

    .centered {
        display: flex;
        justify-content: center;
    }
`;

export const HeaderTitle = styled.h1`
    letter-spacing: 2px;
    line-height: 100%;
    margin: 18px 0 20px 0;
    padding-bottom: 9px;
    border-bottom: 1px solid rgba(255, 102, 0, 1);

    .remix {
        color: hsl(24, 69%, 50%);
    }
`;

export const StorySection = styled.div`
    margin: 10px 0;
    padding-bottom: 5px;

    .comments-button {
        max-width: max-content;
        color: hsl(24, 25%, 75%);
        margin: 0;
        font-size: 0.75em;
    }

    .comments-button:hover {
        cursor: pointer;
    }
`;

export const MetaInfo = styled.p`
    color: hsl(24, 25%, 50%);
    font-size: 0.75em;
    margin: 0;
`;

export const CommentModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsl(20, 2%, 10%);
    overflow-y: auto;

    .modal-main {
        max-width: 1280px;
        background-color: hsl(20, 2%, 15%);
        margin: auto auto 100px auto;
        padding: 5px 15px;
    }
`

export const CommentHeader = styled.div`
    border-bottom: 1px solid rgba(255, 102, 0, 1);
    margin: 17px 0 30px 0;
    padding-bottom: 10px;
`

export const CommentContent = styled.div`
    margin-bottom: 35px;
`

export const CommentText = styled.p`
    font-size: 0.9em;
    margin: 0;

    * {
        margin: 0 0 8px 0;
    }
`;

export const ReplyContent = styled.div`
    margin-top: 18px;
    margin-left: ${props => props.spacing * 42}px;
`

export const CloseButton = styled.button`
    position: fixed;
    top: 15px;
    right: 180px;
    border: 1px solid rgba(255, 102, 0, 1);
    background-color: transparent;
    color: rgba(255, 102, 0, 1);
    font-size: 19px;
    letter-spacing: 1px;
    padding: 12px;
`;

export const LoadButton = styled.button`
    border: 1px solid rgba(255, 102, 0, 1);
    background-color: transparent;
    color: rgba(255, 102, 0, 1);
    font-size: 19px;
    letter-spacing: 1px;
    padding: 12px;
    margin: 30px 0 30px 0;
`;