// 分割代入
const list = ["a", "b"];
const item0 = list[0];
const item1 = list[1];
console.log({ item0, item1 }); // a b

const [item2, item3] = list;
console.log({ item2, item3 });

const userInfo = {
  name: "テッくん",
  age: 20
};
const userName = userInfo.name;
const userAge = `${userInfo.age}歳`;
console.log({ userName, userAge });

const { name, age } = userInfo;
console.log({ name, age });

const { name: newName, age: newAge } = userInfo;
console.log({ newName, newAge });

// デフォルト値
const userInfo2 = {
  age2: 20
};
const { name2 = "ゲスト", age2 } = userInfo2;
console.log({ name2, age2 });

const welcomeMessage = (username = "ゲスト") => {
  const message = `こんにちは、${username}さん`;
  console.log(message);
};
welcomeMessage(40 + 6); //46 (文字列以外に数字も入る)
welcomeMessage(); // ゲスト(デフォルト値)
welcomeMessage(""); //「空文字列」
welcomeMessage(+""); // 0
welcomeMessage(+"a"); // NaN
welcomeMessage(+"2"); // 2
welcomeMessage(-""); // 0
welcomeMessage(-"ゲスト"); // NaN
welcomeMessage(-"3"); // -3
welcomeMessage(null); //null
welcomeMessage(NaN); // NaN
welcomeMessage(undefined); // ゲスト(デフォルト値)

/* スプレッド構文
   展開 */
console.log(list);
console.log(...list);

//  一部を新たな配列としてまとめる
const list2 = [1, 2, 3, 4, 5];
const [num1, num2, ...sublist] = list2;
console.log(num1, num2, sublist);

//　コピー・結合
const list3 = [1, 2];
const list4 = [3, 4];
const list5 = ["a", "b", "5"];

const list6 = [...list3];
console.log(list6);

const list7 = [...list3, ...list4];
console.log(list7);
const list8 = [...list5, ...list7];
console.log(list8);
const list9 = [...list7, ...list5];
console.log(list9);
console.log({ ...list9 });

const obj1 = {
  title: "t1",
  content: "c1"
};
const obj2 = { ...obj1 };
console.log(obj2);

// オブジェクトの省略記法
const name3 = "ひよこ";
const age3 = 1;
const userInfo3 = {
  name3: name3,
  age3: age3
};
console.log(userInfo3);

const userInfo4 = {
  name3,
  age3
};
console.log(userInfo4);
// userInfo3 == userInfo4 省略しても同じ内容

// 配列の処理 map関数
const list10 = list2.map((item, index) => {
  console.log(`要素${item}`, `index:${index}`);
  return item * 2;
});
console.log(list10);

// map関数と同様のfor文
const list11 = [];
for (let index = 0; index < list2.length; index++) {
  const item = list2[index] * 2;
  list11.push(item);
}
console.log(list11);

// 配列の処理 filter関数
const list12 = [10, 59, 60, -60, 100, 0];
const list13 = list12.filter((item, index) => {
  console.log(`要素${item}`, `index:${index}`);
  return item >= 60;
});
console.log(list13);

// filter関数と同様のfor文
const list14 = [];
for (let index = 0; index < list12.length; index++) {
  const item = list12[index];
  if (item >= 60) {
    list14.push(item);
  }
}
console.log(list14);

// Null合体演算死子
let defaultMessage = "エラーなし";
let errorMessage1 = null;
let message1 = errorMessage1 ?? defaultMessage;
console.log({ message1 });

let errorMessage2 = undefined;
let message2 = errorMessage2 ?? defaultMessage;
console.log({ message2 });

let errorMessage3 = "";
let message3 = errorMessage3 ?? defaultMessage;
console.log({ message3 });

const emptyStr = "";
const zero = 0;
const emptyArr = [];
const nullVal = null;
const undefinedVal = undefined;

emptyStr ?? console.log("A");
emptyStr || console.log("B");
zero ?? console.log("C");
zero || console.log("D");
emptyArr ?? console.log("E");
emptyArr || console.log("F");
nullVal ?? console.log("G");
nullVal || console.log("H");
undefinedVal ?? console.log("I");
undefinedVal || console.log("J");
// B,D,G,H,I,Jがコンソールに表示

// クラス構文
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`こんにちは！${this.name}です～`);
  }
}

const user = new User("テッくん", 20);
// 「new クラス(引数)」でクラス(設計図)からインスタンス(実際のデータ)を生成する
console.log(user.age);
user.greet();