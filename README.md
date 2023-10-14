# Movie
 
- 영화목록 리스트, 영화 제목 검색을 통해 해당 영화 정보검색 기능 구현
- 상영예정, 상영중, 상영종료 영화 정보에 대해 알 수 있다.
- Vite ( React JS ) 로 작성
- styled components 이용
- Swiper-Slide 이용
*** 

## 구현 화면
 
![영화_1](https://github.com/lcl3392/Movie/assets/133613544/fc44236d-d0c9-4baa-bc03-a3340f0af260)
![영화_2](https://github.com/lcl3392/Movie/assets/133613544/55064440-1243-447a-b611-904a6e5cf558)
![영화_3](https://github.com/lcl3392/Movie/assets/133613544/5b6ab12b-3195-4cf8-bb97-6336f223b654)
***
## code 설명

- useState 훅을 사용하여 여러 가지 상태 변수를 초기화하는 부분입니다.
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


- useEffect로 데이터 가져오기
   + useEffect 훅을 사용하여 컴포넌트가 처음 렌더링될 때 데이터를 가져오는 로직을 수행합니다. Axios를 사용하여 특정 URL에서 데이터를 가져와 data와 datalist 상태를 업데이트하고, 로딩 상태를 설정하며, 오류가 발생한 경우 오류 메시지를 저장합니다.
```
useEffect(() => {
        const url = 'https://gist.githubusercontent.com/thecheeziest/9ff5d1a64e9348aaec63020bd6efdaed/raw/87ffe1017bef54cdbf6ee3861f1785ec8ee30935/megabox.json';
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
```


- 검색 기능 (onSearch 함수)
   + onSearch 함수는 텍스트를 입력받아 데이터 목록을 해당 텍스트로 필터링하여 검색 기능을 제공합니다.
```
const onSearch = text => {
        setData(datalist.filter( item =>
            item.movieNm.toLowerCase().includes(text.toLowerCase())));
    }
```


- 좋아요 기능 (onLike 함수)
  + onLike 함수는 영화 아이템의 좋아요 상태를 토글합니다. 영화 아이템의 like 속성을 변경하고 상태를 업데이트합니다.
```
const onLike = rnum => {
        setLike(!like);
        setData(data.map(item => item.rnum === rnum ?
            {...item, like: !like} : item ))
    }
```


- 모달 기능 (onModal 함수)
  + onModal 함수는 영화 아이템을 모달로 표시하거나 닫는 데 사용됩니다. 모달을 표시하거나 숨기기 위해 showModal 상태를 업데이트하며, 모달에 표시할 아이템을 선택하여 modalItem 상태를 업데이트합니다.
```
const onModal = rnum => {
        setShowModal(!showModal);
        setModalItem(datalist.filter(item => item.rnum === rnum));
    }
```


- 탭 변경 기능 (onTab 함수)
  + onTab 함수는 탭을 변경할 때 호출됩니다. 선택한 탭에 따라 데이터를 필터링하고, 탭 상태를 업데이트하여 활성 탭을 표시합니다.
```
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
```


- 토글 기능 (onToggle 함수)
  + onToggle 함수는 데이터 목록을 전체 영화와 현재 상영 중 영화 사이에서 전환합니다.
```
const onToggle = () => {
            setToggle(!toggle);
            if (!toggle) {
                onTab(2);
            } else {
                onTab(1);
            }
    }
```


- 렌더링
  + 컴포넌트의 렌더링 부분은 상태와 데이터를 기반으로 UI를 생성합니다. loading 상태에 따라 로딩 중 메시지 또는 실제 데이터가 표시되며, 오류 메시지도 표시됩니다. 각각의 서브 컴포넌트 (MegaboxForm, MegaboxList, MegaboxModal, MegaboxHeader, MegaboxFooter)은 해당 기능을 수행하고 렌더링됩니다.
```
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
```

