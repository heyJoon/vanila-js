// 앞선 scope_func_fix.js와 다른 점은 이벤트 처리를 위한 별도의 스코프가 불필요하단 점이다.
function setDivClick(index) {
  document.getElementById("div " + index).addEventListener(
    "click",
    (function (index) {
      return function () {
        alert("You clicked div #" + index);
      };
    })(i),
    false
  );
}

var i,
  len = 3;
for (i = 0; i < len; i++) {
  setDivClick(i);
}
