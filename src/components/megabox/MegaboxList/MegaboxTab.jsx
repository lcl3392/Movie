import React from 'react';
import { MegaboxListContainer, MegaboxTabBox } from "../../styled/megaboxStyle";

const MegaboxTab = ({item, onTab, tab}) => {
    const {id, tname, ontab} = item;

    return (
        <MegaboxTabBox className='tab-list'>
            <button onClick={() => onTab(id)} className={ontab ? "on" : ""}>{tname}</button>
        </MegaboxTabBox>
    );
};

export default MegaboxTab;