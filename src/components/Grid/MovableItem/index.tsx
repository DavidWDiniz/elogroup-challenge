import {useDrag} from "react-dnd";
import {Movable} from "./style";
import React from "react";
import {COLUMN_NAMES} from "../../../services/GridData";
import {Leads} from "../index";

interface Item {
    name: string;
    type: string;
}

interface MovableItemProps {
    name: string;
    value: string;
    currentColumnName: string;
    setItems: React.Dispatch<React.SetStateAction<Leads[]>>;
}

const MovableItem: React.FC<MovableItemProps> = ({currentColumnName, name, value, setItems}) => {
    const changeItemColumn = (currentItem: Item | undefined, columnName: string) => {
        setItems((prevState) => {
            return prevState.map(e => {
                return {
                    ...e,
                    column: e.name === currentItem?.name ? columnName : e.column,
                };
            });
        });
    };

    const [{ isDragging }, drag] = useDrag({
        item: { name, currentColumnName, type: 'Our first type' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult) {
                const {name} = dropResult;
                const {FirstColumn, SecondColumn, ThirdColumn} = COLUMN_NAMES;
                switch (name) {
                    case FirstColumn:
                        changeItemColumn(item, FirstColumn);
                        break;
                    case SecondColumn:
                        changeItemColumn(item, SecondColumn);
                        break;
                    case ThirdColumn:
                        changeItemColumn(item, ThirdColumn);
                        break;
                    default:
                        break;
                }
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <Movable ref={drag} dragOpacity={isDragging}>
            {value}
        </Movable>
    );
}

export default MovableItem;
