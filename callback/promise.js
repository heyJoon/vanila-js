const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("1️⃣"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${hen} => 2️⃣`);
      reject(new Error("Error occured"));
    }, 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 3️⃣`), 1000);
  });

getHen()
  // '1' 전달
  .then((hen) => getEgg(hen))
  // '1' => '2' 전달 (hen = '1')
  .then((egg) => cook(egg))
  // '1' => '2' => '3' (egg = '1' => '2')
  .then((meal) => console.log(meal))
  // 결국 출력은 마지막에 한 번 하고, 다른 요소들은 전부 파라미터를 전달하는 역할만 진행한다.
  // (meal = '1' => '2' => '3')이 된다.
  .catch((err) => {
    console.log(err);
  });
