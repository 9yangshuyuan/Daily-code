// 实现逻辑：
// 通过形如 node todo add/delete something 的命令实现todo demo 小应用

// 获取命令行中的参数，使用process.argv
// 通过命令行传递参数是一个非常基本的编程任务，对于任何一个想要尝试编写命令行接口的人来说都是必要的。在 Node.js 以及和 C 相似的环境中，所有被shell
// 接收的命令行参数都被传递到了一个叫argv的数组中。（即参数值的意思）
// Node.js 以process.argv的形式把每一个运行中程序的该数组暴露出来。

// 程序内数组等形式无法持久保存添加的任务，需要引进文件系统的概念
let fs = require("fs");

// 获取命令行中除前面两项路径外的参数
let argus = process.argv.slice(2);

// 获取命令行的动作
const action = argus[0];

// 获取数据库中的内容
let readContent = fs.readFileSync(
  "F:\\Code\\Daily-code\\Demo\\todoDb",
  "utf-8"
);
// 如果不使用第二个参数即编码格式，可以通过对readContent toString获得，不然就是buffer格式。
// console.log(readContent);

// 用一个数组来保存添加的任务
let taskList = JSON.parse(readContent);

if (action === "add") {
  taskList.push(argus[1]);
  // 直接存入貌似会有编码上的问题
  // fs.writeFileSync("F:\\Code\\Daily-code\\Demo\\todoDb", argus[1]);
  fs.writeFileSync(
    "F:\\Code\\Daily-code\\Demo\\todoDb",
    JSON.stringify(taskList)
  );
  // 序列化，变成数组的样子
}
if (action === "delete") {
}
if (action !== "add" && argus[0] !== "delete") {
  console.log("oops, it seems the action is wrong");
}
console.log(taskList);
