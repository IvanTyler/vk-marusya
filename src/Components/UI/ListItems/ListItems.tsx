import { ReactNode } from 'react';

interface ListItemsProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
}

export function ListItems<T>({ items, renderItem }: ListItemsProps<T>) {
    return (
        <>
            {items.map((item, index) => renderItem(item, index))}
        </>
    );
}
