function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs...
    resolve("Ellie");
  });
}

async function fetchUserAsync() {
  return "Ellie";
}

const user = fetchUser();
// user.then(console.log);

const asyncUser = fetchUserAsync();
console.log(asyncUser);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

function getBanana() {
  return delay(1000).then(() => "banana");
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

async function pickFruit() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruit();
pickFruits().then(console.log);
