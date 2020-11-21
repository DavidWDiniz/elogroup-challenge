import {useDrag} from "react-dnd";
import {Movable} from "./style";
import React from "react";

interface MovableItemProps {
    setIsFirstColumn: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovableItem: React.FC<MovableItemProps> = ({setIsFirstColumn}) => {
    const [{ isDragging }, drag] = useDrag({
        item: { name: 'Any custom name', type: 'Our first type' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if(dropResult && dropResult.name === 'Column 1'){
                setIsFirstColumn(true);
            } else {
                setIsFirstColumn(false);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <Movable ref={drag} dragOpacity={isDragging}>
            We will move this item
        </Movable>
    );
}

export default MovableItem;
