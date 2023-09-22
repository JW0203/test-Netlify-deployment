
// index 에 있는 <button id="generateBtn">이미지 만들기!</button> 에 있는
// generateBtn 이라는 id를 선택한다는 의미 = 이벤트 대상선택
const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');
const numberImage =  5

generateBtn.addEventListener('click', () => {
    // console.log('버튼이 클릭되었습니다.')

    // gridContainer.innerHTML = ''; // 기존 이미지들을 지웁니다.
    // for (let i = 0; i < 30; i++) {
    //     let img = document.createElement('img');
    //     img.src = "https://picsum.photos/500?random=" + Math.random(); // 200x200 크기의 랜덤 이미지를 가져옵니다.
    //     gridContainer.appendChild(img);
    // }

    // const randomNumber = Math.floor(Math.random() * 1000) + 1;
    // const imgUrl = `https://picsum.photos/500?random=${randomNumber}`;
    // const img = document.createElement('img')
    // img.src = imgUrl

    // gridContainer.appendChild(img)

    if(gridContainer.children.length >= numberImage){
        const confirmMessage = confirm(`${numberImage}개의 이미지가 생성되었습니다. 모든 이미지를 모두 지우시겠습니까?`);
        if(confirmMessage){
            gridContainer.innerHTML = ''; // 기존 이미지들을 지웁니다.
        }
    }
    else{
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        const imgUrl = `https://picsum.photos/500?random=${randomNumber}`;
        const img = document.createElement('img')
        img.src = imgUrl

        gridContainer.appendChild(img)
    }
})

// generateBtn.addEventListener('click', () => {
//     //var button = document.querySelector('#generateBtn');

//     var button = document.getElementById('generateBtn');

//     button.addEventListener('click', ()=> {
//         alert('버튼이 클릭되었습니다!');
//     });
// });
