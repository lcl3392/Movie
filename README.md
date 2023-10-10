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


