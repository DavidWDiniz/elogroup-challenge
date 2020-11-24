import React from "react";
import {useDrop} from "react-dnd";

import {COLUMN_NAMES} from "../../../services/GridData";

import {Container} from "./style";

interface ColumnProps {
    title: string;
}

const Column: React.FC<ColumnProps> = ({children, title}) => {

    const [{isOver, canDrop}, drop] = useDrop({
        accept: "Movable",
        drop: () => ({name: title}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        canDrop: (item: any) => {
            const {FirstColumn, SecondColumn, ThirdColumn} = COLUMN_NAMES;
            const {currentColumnName} = item;
            return (currentColumnName === title) ||
                (currentColumnName === FirstColumn && title === SecondColumn) ||
                (currentColumnName === SecondColumn && title === ThirdColumn)
        },
    });

    return (
        <Container ref={drop} isOver={isOver} canDrop={canDrop}>
            {title}
            {children}
        </Container>
    );
}

export default Column;
