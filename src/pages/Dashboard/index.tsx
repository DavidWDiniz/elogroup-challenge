import React, {useState} from "react";

import {Container} from "./style";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import Column from "../../components/Grid/Column";
import MovableItem from "../../components/Grid/MovableItem";

const Dashboard = () => {
    const [isFirstColumn, setIsFirstColumn] = useState(true);

    const Item = <MovableItem setIsFirstColumn={setIsFirstColumn} />

    return (
        <Container>
            <DndProvider backend={HTML5Backend}>
                <Column title="Column 1">
                    {isFirstColumn && Item}
                </Column>

                <Column title="Column 2">
                    {!isFirstColumn && Item}
                </Column>

            </DndProvider>
        </Container>
    );

}

export default Dashboard;
