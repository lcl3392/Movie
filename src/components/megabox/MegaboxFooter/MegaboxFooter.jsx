import React from 'react';
import { MegaboxFooters } from '../../styled/megaboxStyle';

const MegaboxFooter = () => {
    return (
        <MegaboxFooters id="footer">
            <div className="inner">
                <p className="logo"><img src="https://i.pinimg.com/originals/7a/a9/e4/7aa9e44a93d5a0e99827f0f7db33a8a8.gif"/></p>
                <ul className='footer_menu'>
                    <li>대표자명 이초롱</li>
                    <li>사업자등록번호 322-82-99999</li>
                    <li>통신판매업신고번호 2023-미추홀구-9999</li>
                    <li>MegaBox</li>
                </ul>
                <copyright>COPYRIGHT ⓒ All rights RESERVED.</copyright>
            </div>
        </MegaboxFooters>
    );
};

export default MegaboxFooter;