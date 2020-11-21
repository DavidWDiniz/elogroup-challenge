import React, {useState} from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Column from "./Column";
import {COLUMN_NAMES, leads} from "../../services/GridData";
import MovableItem from "./MovableItem";
import {Container} from "./style";

const Grid = () => {
    const [items, setItems] = useState(leads);
    const {FirstColumn, SecondColumn, ThirdColumn} = COLUMN_NAMES;

    const returnItemsForColumn = (columnName: string) => {
        return items
            .filter((item) => item.column === columnName)
            .map((item) => (
                <MovableItem
                    key={item.id}
                    name={item.name}
                    currentColumnName={item.column}
                    setItems={setItems}
                />
            ));
    }

    return (
        <Container>
            <DndProvider backend={HTML5Backend}>
                <Column title={FirstColumn}>
                    {returnItemsForColumn(FirstColumn)}
                </Column>

                <Column title={SecondColumn}>
                    {returnItemsForColumn(SecondColumn)}
                </Column>

                <Column title={ThirdColumn}>
                    {returnItemsForColumn(ThirdColumn)}
                </Column>

            </DndProvider>
        </Container>
    );
}

export default Grid;
