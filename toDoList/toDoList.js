const jsForm = document.querySelector(".js-form"),
    jsToDoList = document.querySelector(".js-toDoList"),
    saveBtn = document.querySelector(".js-saveBtn"),
    jsInput = document.getElementById("js-input");

const lsArray = [];
const LS_NAME = 'toDoList';

saveToDos = (lsArray) => {
    // Array를 String으로 변환할 것
    localStorage.setItem(LS_NAME, JSON.stringify(lsArray));
}

eraseToDos = (e) => {
    e.preventDefault();
    // 클릭된 요소의 부모-부모 요소를 찾아간다. 
    const parentNode = e.target.parentNode.parentNode;
    // 클릭된 요소의 번호를 어떻게 알 수 있을까? 
    const deletedNum = parentNode.classList[0];
    // 해당 화면에서 삭제할 것이다. 
    jsToDoList.removeChild(parentNode);
    // 배열 안에서 해당 요소를 제거한다.
    lsArray.splice(Number(deletedNum), 1);
    // 다시 저장한다. 
    saveToDos(lsArray);
}

paintToDos = (inputValue) => {
    console.log("painted");
    const newNum = lsArray.length+1;
    // li 추가
    const li = document.createElement('li');
    // span 추가하기
    const span = document.createElement('span');
    // span 안에 텍스트 넣기 
    span.innerHTML = `${inputValue}`;
    // ul에 li 붙이기 
    jsToDoList.appendChild(li);
    // li에 span 붙이기
    li.appendChild(span);
    // li의 class에 Num 추가하기 
    li.classList.add(newNum-1);
    // btn 추가하기
    const removeBtn = document.createElement('button');
    // btn에 내용 추가하기
    removeBtn.innerHTML = '❌';
    // remove 이벤트 추가하기 
    removeBtn.addEventListener('click', eraseToDos);
    // span에 붙이기
    span.appendChild(removeBtn);
    // LS에 넣을 Obj 지정
    const toDoObj = {
        id : newNum,
        value : `${inputValue}`
    };
    // 해당 객체를 배열에 넣을 것 
    lsArray.push(toDoObj);
    // localStorage에 저장하기
    saveToDos(lsArray);
}

submitHandler = (e) => {
    console.log("submitted");
    // 화면전환 효과 없애기
    e.preventDefault();
    // input 태그 안의 텍스트 가져오기
    const inputValue = jsInput.value;
    // paintToDos에 색칠하기 
    paintToDos(inputValue);
    // Input칸 비우기 
    jsInput.value = '';
}

// 처음 시작할 때 로드된다.
loadToDos = () => {
    console.log("loaded");
    // LocalStorage에서 값 가져오기 
    const loadedToDos = localStorage.getItem(LS_NAME);
    const parsedToDos = JSON.parse(loadedToDos);
    // LocalStorage에 저장된 값이 있을 경우
    if(loadedToDos) {
    // String to Object로 바꿔주어야 한다. 
    parsedToDos.forEach((item)=> {
            paintToDos(item.value);
        })
    // LocalStorage에 저장된 값이 없을 경우
    } else {
    // okay 
        return;
    }
}

init = () => {
    loadToDos();
    jsForm.addEventListener("submit", submitHandler);
}

init();