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

paintToDos = (inputValue) => {
    const newNum = lsArray.length+1;
    // li 추가
    const li = document.createElement('li');
    // li 안에 텍스트 넣기 
    li.innerHTML = `✅${inputValue}`;
    // ul에 li 붙이기 
    jsToDoList.appendChild(li);    
    // 입력된 값들을 객체에 담을 것
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