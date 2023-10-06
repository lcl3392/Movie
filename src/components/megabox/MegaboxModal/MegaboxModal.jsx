import React, { useEffect, useState } from 'react';
import { MegaboxModalBox } from '../../styled/megaboxStyle';

const MegaboxModal = ( {onModal, item} ) => {
    const {rank, movieNm, openDt, audiAcc, showCnt, rankInten, imageURL, audiCnt, story, storyTitle, teaser } = item;

    const [count, setCount] = useState(0);
    const [showCount, setShowCount] = useState(0);
    // 누적 관객 - 당일 상영 카운트 할 값

    const goal = audiAcc / 100;
    const showGoal = showCnt / 100;
    // 카운팅 도달할 값

    useEffect(() => { // 카운팅
        const timer = setTimeout(() => {
            if (count <= audiAcc || showCount <= showCnt) {
                setCount(count + goal);
                setShowCount(showCount + showGoal);
            }
        }, 10)
        return() => {
            clearTimeout(timer);
        }
    },[count]);

    return (
        <MegaboxModalBox>
            <div className="bg"></div>
            <div className="popup">
                <div className="popbg" style={{backgroundImage: `url(${imageURL})`}}></div>
                    <strong>박스오피스 순위</strong>
                    <span>{rank}위</span>
                    <strong>예매율 {audiCnt}%</strong>
                    <em>전일 대비
                        <i className={rankInten === '0' ? 'xi-ellipsis-h' : rankInten > '0' ? 'xi-caret-up-min' : 'xi-caret-down-min'}>{rankInten === '0' || rankInten}</i>
                    </em>
                    <div className="popup-top">
                        <iframe src={teaser} volume="0.3" style={{width: "550px", height: "300px"}}></iframe>
                        <div>                            
                            <h3>{movieNm}</h3>
                            <em><strong>{openDt}</strong>개봉</em>
                            <em>누적 관객<strong>{Math.floor(count).toLocaleString()}</strong>명</em>
                            <em>당일 상영<strong>{Math.floor(showCount).toLocaleString()}</strong>회</em>
                        </div>
                    </div>
                    <div className="popup-bottom">
                        <h3>{storyTitle}</h3>
                        <p>{story}</p>
                    </div>
                <i className='close xi-close-circle' onClick={onModal}></i>
            </div>
        </MegaboxModalBox>
    );
};

export default MegaboxModal;