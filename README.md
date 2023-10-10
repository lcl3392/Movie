#Movie
 
- 영화목록 리스트, 영화 제목 검색을 통해 해당 영화 정보검색 기능 구현
- 상영예정, 상영중, 상영종료 영화 정보에 대해 알 수 있다.
- Vite ( React JS ) 로 작성
- styled components 이용
- Swiper-Slide 이용
*** 

##구현 화면
 
![영화_1](https://github.com/lcl3392/Movie/assets/133613544/fc44236d-d0c9-4baa-bc03-a3340f0af260)
![영화_2](https://github.com/lcl3392/Movie/assets/133613544/55064440-1243-447a-b611-904a6e5cf558)
![영화_3](https://github.com/lcl3392/Movie/assets/133613544/5b6ab12b-3195-4cf8-bb97-6336f223b654)
***
##code 설명

```
   const [data, setData] = useState([]);             // 영화 데이터 배열

