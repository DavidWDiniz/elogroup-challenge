import styled, {css} from "styled-components";

interface ContainerProps {
    isOver: boolean;
    canDrop: boolean;
}

const backgroundColor = {
    canDrop: css`
        background-color: #33576c;
    `,

    default: css`
        background-color: #1d313e;
    `,
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    height: available;
    min-height: 150px;
    width: 110px;
    margin: 2px;
    border-radius: 10px;
    ${props => props.isOver && props.canDrop ? backgroundColor["canDrop"] : backgroundColor["default"] };
    font-size: 11px;
    line-height: 64px;

     @media(min-width: 1028px) {
        width: 300px;
        margin: 20px;
        font-size: 18px;
    }
`;
