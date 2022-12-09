/**
 * const,letの変数宣言
 */

// var vall = "var変数";
// console.log(vall);

// // var変数は上書き可能

// vall = "var変数の上書き";
// console.log(vall);

// var vall = "var変数を再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "letを再宣言"；
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";

// const val3 = "const変数の再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ミノル",
//   age: 18
// };
// // console.log(val4);
// val4.name = "minoru";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "ミノル";
// const age = 18;
// // 『私の名前はミノルです。年齢は18歳です。』

// // 従来の方法
// const message = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です。"));

// // アロー関数
// // => が矢印のように見えるからアロー関数
// // 処理が一行で終わる場合は、ブラケット{}とreturnを省略できる
// const func2 = (str) => str
// console.log(func2("func2です。"));

// // ただし、{}を使う場合はreturnを使わないと処理として機能しない

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "ミノル",
//   age: 18
// };

// // 分割代入なしの場合(読みづらい)
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// // 分割代入を使う場合(スッキリする)
// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 配列で分割代入を使わない場合
// const myProfile = ["ミノル", 18];

// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// // 配列で分割代入を使う場合
// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、　引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
// sayHello();
// // 何もない場合は、undefindedになる(バグの温床)
// // 変数の宣言ともにデフォルト値を入れることができる

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// ...を書いてから配列名を指定すると配列を展開した状態で表示してくれる

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // 二つは同じことをしている。
// sumFunc(arr1[0], arr1[1]);
// // arr1の中にある要素をスプレッド構文で順番に取り出している。(配列名の展開)
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// //配列のコピー
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// 配列の結合

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// 配列のコピーでスプレッド構文を使う理由は、新しい値として作ってくれるから。

// = で配列をコピーすると元の値を参照しているので、値を変更した際に元の値も変わってしまう。（バグの温床）

/**
 * mapやfilterを使った配列の処理
 */
// for文を使った場合
// const nameArr = ["佐々木", "富田", "ミノル"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}`);
// }

// // mapを使った場合
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// mapで繰り返して配列に入れる処理を一行で書く
// nameArr.map((name) => console.log(name));

// // filterは条件式を書いて条件に一致するものだけを配列として返すもの
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// 自分の名前以外にさんをつけるプログラム

// const newNameArr = nameArr.map((name) => {
//   if (name === "ミノル") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// // ある条件 ?　trueの時 : 条件がfalseの時;
// const val1 = 1 > 0 ? "tureです。" : "falseです。";
// console.log(val1);

// const num = 1300;
// toLocalestringは数字を三桁ごとに,で区切ってくれる
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です。";
// };
// console.log(checkSum(60, 50));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtureになります。");
// }

// if (flag1 && flag2) {
//   console.log("1も2はtureになります。");
// }

// || は 左側がfalseなら右側を返す
// JSはnullはfalse判定
// const num = null;
// const fee = num || "金額未設定です。";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました。";
// console.log(fee2);
