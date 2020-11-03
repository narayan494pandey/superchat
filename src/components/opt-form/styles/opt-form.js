import styled from 'styled-components/macro'

export const Container = styled.div`
    display:flex;
    height:100%;
    margin-top:20px;
    flex-wrap:wrap;

    @media(max-width:1000px){
        flex-driction:column;
    }
`;


export const Input = styled.input`
    max-width:450px;
    width:100%;
    border:0;
    padding:10px;
    height:70px;
    box-sizing:border-box;
    @media(max-width:700px){
        max-width:250px;
    }
`;

export const Button = styled.button`
    display:flex;
   align-items:center;
    height:70px;
    background:#e50914;
    color:white;
    text-transform:uppercase;
    padding : 0 32px;
    forn-size: 26px;
    border:0;
    cursor:pointer;

    img{
        margin-left:10px;
        filter: brightness(0) invert(1);
        width:24px;
        @media (max-width: 1000px){
            width:16px;
        }
    }
    @media(max-width:700px){
        width:250px;
    }
`;

export const Text = styled.p`
    color:white;
    font-size:24px;
    font-weight:bold;
    @media(max-width:700px){
        font-size:16px;
    }



`;
export const Break = styled.div`
    flex-basis:100%;
    height:0;
`;