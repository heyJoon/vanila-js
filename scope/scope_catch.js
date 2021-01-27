try {
  throw new execption("fake exception");
} catch (err) {
  var test = "can you see me";
  console.log(err instanceof ReferenceError === true);
}

// 블록 내부에서 선언됐을 경우, 외부에서도 접근 가능하다!!
console.log(test === "can you see me");
console.log(test);
// 그러나 인자로 받아온 경우에는 불가능하다.
console.log(typeof err === "undefined");
// console.log(err); // 에러발생
