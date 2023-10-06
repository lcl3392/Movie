import React from 'react';
import { MegaboxListContainer } from '../../styled/megaboxStyle';
import MegaboxItem from './Megaboxltem';
import MegaboxTab from './MegaboxTab';

const MegaboxList = ( {data, onModal, onLike, onTab, tablist, onToggle, toggle} ) => {
    return (
        <MegaboxListContainer>
            {
                tablist.map(item => <MegaboxTab item={item} onTab={onTab} />)
            }
            <div class="checkbox-wrapper-3">
                <input type="checkbox" id="cbx-3" onClick={onToggle} checked={toggle} />
                <label for="cbx-3" class="toggle"><span></span></label>
                <p>상영작 모아보기</p>
            </div>
            <ul>
                {
                    data.map(item => <MegaboxItem item={item} onModal={onModal} onLike={onLike} />)
                }
            </ul>
        </MegaboxListContainer>
    );
};

export default MegaboxList;