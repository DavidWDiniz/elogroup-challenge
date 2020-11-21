import styled from "styled-components";

interface MovableProps {
    dragOpacity: boolean;
}

export const Movable = styled.div<MovableProps>`
    border-radius: 10px;
    background-color: #B14A3B;
    height: 100px;
    width: 250px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: ${props => props.dragOpacity ? 0.4 : 1};
    cursor: pointer;
`;
