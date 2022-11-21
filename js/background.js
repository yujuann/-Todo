const images = [
  "image-01.jpeg",
  "가영퇴사짤.jpg",
  "뚱이고백.jpg",
  "짱구개네들.jpg",
  "파리저녁.jpg",
  "야옹.png",
  "피.jpeg",
];
// 이미지들 사진 배열 안에 객체로 담아 오기

const chosenImgs = images[Math.floor(Math.random() * images.length)];
// 담아온 이미지 랜덤으로 만들어주기 그것 새로운 변수로 담아내기

// 배경사진 경로 만들어주기 변수로 img src /

// 1. 이미지 태그 생성
// createElement html안에 img 태그 새로운 생성 만들어줌

const background = document.createElement("img");

// 2. 이미지 태그 안에 경로 속성값 추가 {안에가 랜덤사진}
background.src = `img/${chosenImgs}`;

// 3. 자이렇게 해서 만든 이미지 태그를 바디에 추가한다.
document.body.appendChild(background);
