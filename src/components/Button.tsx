import styled from 'styled-components';

const Button = styled.button`
    position: relative;
    overflow: hidden;
    display: inline-block;
    box-sizing: border-box;
    margin: 4px;
    padding: 10px 24px;
    border-radius: 2px;
    border: 1px solid white;
    color: inherit;
    background: gray;
    font-family: inherit;
    font-size: 13px;
    font-weight: normal;
    line-height: 1.231;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`;

export const ButtonSecondary = styled(Button)`
    color: white;
    border-color: white;
    background-color: black;
`

interface ButtonVariantProps {
    correct: boolean
    userClicked: boolean
}

export const ButtonVariant = styled(Button)<ButtonVariantProps>`
    background-color: ${(props) => props.correct ? 'red' : !props.correct && props.userClicked ? 'green' : 'inherit'}
`

export default Button;