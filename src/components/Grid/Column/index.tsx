import React from "react";
import {useDrop} from "react-dnd";
import {Container} from "./style";
import {COLUMN_NAMES} from "../../../services/GridData";

interface ColumnProps {
    title: string;
}

const Column: React.FC<ColumnProps> = ({children, title}) => {
    const [, drop] = useDrop({
        accept: "Our first type",
        drop: () => ({name: title}),
        canDrop: (item: any) => {
            const {FirstColumn, SecondColumn, ThirdColumn} = COLUMN_NAMES;
            const {currentColumnName} = item;
            return (currentColumnName === title) ||
                (currentColumnName === FirstColumn && title === SecondColumn) ||
                (currentColumnName === SecondColumn && title === ThirdColumn)
        },
    });

    return (
        <Container ref={drop}>
            {title}
            {children}
        </Container>
    );
}

export default Column;
