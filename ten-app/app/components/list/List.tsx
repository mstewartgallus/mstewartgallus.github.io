"use client";

import type { Key, ReactNode } from 'react';
import { createContext, useContext } from 'react';

import styles from './List.module.css';

const ItemContext = createContext<number>(0);
ItemContext.displayName = 'ItemContext';

interface ItemProps {
    readonly children: ReactNode;
}

export const Item = ({ children }: ItemProps) =>
    <li role="listitem" className={styles.item}>
        <div className={styles.tick}>—</div>
        <div>
            {children}
        </div>
    </li>;

export const useItem = () => useContext(ItemContext);

interface Props {
    children: ReactNode;
    length: number;
    keyOf: (index: number) => Key;
}

export const List = ({ children, keyOf, length }: Props) =>
    <ul role="list" className={styles.list}>
        {
            Array(length).fill(null).map((x, index) =>
                <ItemContext.Provider key={keyOf(index)} value={index}>
                    {children}
                </ItemContext.Provider>)
        }
    </ul>;
