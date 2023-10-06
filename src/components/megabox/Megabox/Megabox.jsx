import React, { useEffect, useState } from "react";
import { Container } from "../../styled/megaboxStyle";
import MegaboxForm from '../MegaboxForm/MegaboxForm'
import MegaboxList from '../MegaboxList/MegaboxList'
import MegaboxModal from '../MegaboxModal/MegaboxModal'
import axios from 'axios';
import MegaboxHeader from "../MegaboxHeader/MegaboxHeader";
import MegaboxFooter from "../MegaboxFooter/MegaboxFooter";

const Megabox = () => {
    const [data, setData] = useState([]);
    const [datalist, setDatalist] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [like, setLike] = useState(false);
    const [modalItem, setModalItem] = useState({});
    const [toggle, setToggle] = useState(false);
    const [tablist, setTablist] = useState([{ontab: true, id: 1, tname: '전체 영화'}, {ontab: false, id: 2, tname: '현재 상영 중'}, {ontab: false, id: 3, tname: '개봉 예정작'}]);

    useEffect(() => {
        const url = 'https://gist.githubusercontent.com/thecheeziest/9ff5d1a64e9348aaec63020bd6efdaed/raw/87ffe1017bef54cdbf6ee3861f1785ec8ee30935/megabox.json';
        // const url = 'http://localhost:3000/movies';
        axios.get(url)
             .then(res => {
                setData(res.data);
                setDatalist(res.data);
                setLoading(true);
                setError(null);
            })
            .catch( error => {
                setData([]);
                setLoading(false);
                setError('E R R O R')
             })
    },[]);

    // 검색창
    const onSearch = text => {
        setData(datalist.filter( item =>
            item.movieNm.toLowerCase().includes(text.toLowerCase())));
    }

    // 좋아요 누르기/해제하기
    const onLike = rnum => {
        setLike(!like);
        setData(data.map(item => item.rnum === rnum ?
            {...item, like: !like} : item ))
    }

    // 모달 띄우기/닫기
    const onModal = rnum => {
        setShowModal(!showModal);
        setModalItem(datalist.filter(item => item.rnum === rnum));
    }

    // 상영중 탭
    const onTab = id => {
        if (id === 2) { // 상영중
            setData(datalist.filter(item => item.openDt.replace(/-/g, "") < 20230605));
            setToggle(true);
        } else if (id === 3) { // 개봉예정작
            setData(datalist.filter(item => item.openDt.replace(/-/g, "") > 20230605));
            setToggle(false);
        } else {
            setData(datalist); // 전체
            setToggle(false);
        }
        setTablist(tablist.map(item => item.id === id ? {...item, ontab: true} : {...item, ontab: false} ))
    }

    // 토글
    const onToggle = () => {
            setToggle(!toggle);
            if (!toggle) {
                onTab(2);
            } else {
                onTab(1);
            }
    }

    return (
        <>
        <MegaboxHeader />
        {
            data && loading ?
            <Container>
            <h2 onClick={() => onTab(1)}>MEGABOX</h2>
            <MegaboxForm onSearch={onSearch} />
        
            <MegaboxList data={data} onModal={onModal} onLike={onLike} onTab={onTab} tablist={tablist} onToggle={onToggle} toggle={toggle} />
            {
                showModal &&
                modalItem.map(item => <MegaboxModal onModal={onModal} item={item} />)
            }
            </Container>
            : <h2>로딩 중..</h2>
        }
        <h3> {error ? error : null} </h3>

        <MegaboxFooter />
        </>
    );
};

export default React.memo(Megabox);