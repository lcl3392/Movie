<h2>Movie<h2/>
 
- 영화목록 리스트, 영화 제목 검색을 통해 해당 영화 정보검색 기능 구현
- 상영예정, 상영중, 상영종료 영화 정보에 대해 알 수 있다.
- Vite ( React JS ) 로 작성
- styled components 이용
- Swiper-Slide 이용
  

<h2>구현 화면<h2/>
 
![영화_1](https://github.com/lcl3392/Movie/assets/133613544/fc44236d-d0c9-4baa-bc03-a3340f0af260)
![영화_2](https://github.com/lcl3392/Movie/assets/133613544/55064440-1243-447a-b611-904a6e5cf558)
![영화_3](https://github.com/lcl3392/Movie/assets/133613544/5b6ab12b-3195-4cf8-bb97-6336f223b654)

<h2>code 설명<h2/>

```
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
```
