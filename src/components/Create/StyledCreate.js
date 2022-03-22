import styled from 'styled-components';

export const FormContainer = styled.div`
margin-top: 3rem;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    form{
        padding-left: rem;
        display: flex;
        flex-flow: column nowrap;
    }

    input{
        height: 3rem;
        width: 15rem;
        background-color: #f5f5f5;
        border: none;
        border-radius: 10px;
        padding-left: 15px;
        font-size: 16px;

        &:focus{
            outline: none;
        }
    }

    div{
        margin: 5px 0;
    }

    select{
        text-align: center;
        font-size: 16px;
        margin-top: 5px;
        padding-left: 5px;
        height: 3rem;
        width: 10rem;
        border: none;
        border-radius: 20px;
        background-color: ${({theme}) => theme.colors.primary};
        color: #fff;
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.07);
        cursor: pointer;
    }

    button{
        border:none;
        font-size: 16px;
        background-color: ${({theme}) => theme.colors.primary};
        color: white;
        width: 10rem;
        height: 3rem;
        border-radius: 20px;
        cursor: pointer;
        letter-spacing: 1px;
    }

    .error{
        padding: 10px 0 0 0;
        margin: 0;
        color: red;
        font-weight: 500;
        font-size: 16px;
    }
`
