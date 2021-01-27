for (var i = 0; i < 10; i++) {
  var total = (total || 0) + i;
  var last = i;
  if (total > 16) {
    break;
  }
}

// for-loop 밖에서도 변수에 접근할 수 있다!! WTF!!
console.log(typeof total !== "undefined");
console.log(total);
console.log(typeof last !== "undefined");
console.log(last);
console.log(typeof i !== "undefined");
console.log(i);
console.log("total === " + total + " , last === " + last);
