import React from "react";
import {useDrop} from "react-dnd";
import {Container} from "./style";

interface ColumnProps {
    title: string;
}

const Column: React.FC<ColumnProps> = ({children, title}) => {
    const [, drop] = useDrop({
        accept: "Our first type",
        drop: () => ({name: title}),
    });

    return (
        <Container ref={drop}>
            {title}
            {children}
        </Container>
    );
}

export default Column;
