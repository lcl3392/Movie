import React from 'react';

const MegaboxItem = ( {item, onModal, onLike} ) => {
    const {rnum, movieNm, audiCnt, audiAcc, openDt, like, story, imageURL} = item;

    let audiK; // 누적 관객 수 M, K
    if (audiAcc >= 1000) {
        const num = Math.floor(audiAcc / 1000);
        audiK = num >= 1000 ? (num / 1000).toFixed(1) + 'M' : num + 'K';
    }

    return (
        <li>
            <div className="img">
                <img src={imageURL} alt={movieNm} />
                <div className="txt">
                    {story}
                </div>
            </div>
            <h3>{movieNm}</h3>
            <p>
                <span>예매율 {audiCnt}%</span>
                <span>개봉일 {openDt}</span>
            </p>
            <div className="btn">
                <button onClick={() => onLike(rnum)}><i className={like ? 'xi-heart' : 'xi-heart-o'}></i>{audiK}</button>
                <button onClick={() => onModal(rnum)}>예매</button>
            </div>
        </li>
    );
};

export default MegaboxItem;