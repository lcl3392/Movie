import React, { useState } from 'react';
import { MegaboxSearchForm } from '../../styled/megaboxStyle';

const MegaboxForm = ({onSearch}) => {
    const [text, setText] = useState('');
    
    const onSubmit = e => {
        e.preventDefault();
        onSearch(text);
        setText('');
    }

    return (
        <MegaboxSearchForm onSubmit={onSubmit}>
            <input type="text" value={text} placeholder='보고 싶은 영화를 검색해 주세요' onChange={e => setText(e.target.value)} />
        </MegaboxSearchForm>
    );
};

export default MegaboxForm;