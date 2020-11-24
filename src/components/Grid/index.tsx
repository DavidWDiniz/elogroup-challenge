import React, {useCallback, useEffect, useState} from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {TouchBackend} from "react-dnd-touch-backend";
import { isMobile } from "react-device-detect";

import {COLUMN_NAMES, leads} from "../../services/GridData";
import Column from "./Column";
import MovableItem from "./MovableItem";

import {Container} from "./style";

export interface Leads {
    id: number;
    name: string;
    value: string;
    email: string;
    opportunities: string;
    phone: number;
    column: string;
}

const Grid = () => {
    const [items, setItems] = useState<Leads[]>(leads);
    const {FirstColumn, SecondColumn, ThirdColumn} = COLUMN_NAMES;

    useEffect(() => {
        const data = localStorage.getItem("@Leads");
        if (data) {
            setItems(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("@Leads", JSON.stringify(items));
    }, [items]);

    const returnItemsForColumn = useCallback((columnName: string) => {
        return items
            ?.filter((item) => item.column === columnName)
            .map((item) => (
                <MovableItem
                    key={item.id}
                    name={item.name}
                    value={item.value}
                    currentColumnName={item.column}
                    setItems={setItems}
                />
            ))}, [items]);

    return (
        <Container>
            <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
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
