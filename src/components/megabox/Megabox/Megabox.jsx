import React, { useEffect, useState } from "react";
import { Container } from "../../styled/megaboxStyle";
import MegaboxForm from '../MegaboxForm/MegaboxForm'
import MegaboxList from '../MegaboxList/MegaboxList'
import MegaboxModal from '../MegaboxModal/MegaboxModal'
import axios from 'axios';
import MegaboxHeader from "../MegaboxHeader/MegaboxHeader";
import MegaboxFooter from "../MegaboxFooter/MegaboxFooter";
// import movieData from '../../../../public/movieData'; 

const Megabox = () => {
    // const [data, setData] = useState(movieData.movies); // JSON 데이터를 사용 가능한 형태로 설정
    const [data, setData] = useState([]);             // 영화 데이터 배열
    const [datalist, setDatalist] = useState([]);     // 영화 데이터 배열의 복사본, 검색 기능에서 원본 데이터 보존존
    const [loading, setLoading] = useState(false);    // 데이터 로딩 상태, 초기값 로딩 중이 아님
    const [error, setError] = useState('');           // 오류 메세지
    const [showModal, setShowModal] = useState(false);// 모달 표시 상태
    const [like, setLike] = useState(false);          // 좋아요 상태
    const [modalItem, setModalItem] = useState({});   // 모달에 표시될 항목
    const [toggle, setToggle] = useState(false);      // 토글 상태, 초기값 전체 영화 활성화
    const [tablist, setTablist] = useState([{ontab: true, id: 1, tname: '전체 영화'}, 
            {ontab: false, id: 2, tname: '현재 상영 중'}, {ontab: false, id: 3, tname: '개봉 예정작'}]); //탭 목록

            useEffect(() => {
                const url = '/data.json'; 
                axios.get(url)
                  .then(res => {
                    setData(res.data.movies);
                    setDatalist(res.data.movies);
                    setLoading(true);
                    setError(null);
                  })
                  .catch(error => {
                    setData([]);
                    setLoading(false);
                    setError('ERROR');
                  });
              }, []);


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