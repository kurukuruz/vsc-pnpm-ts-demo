import { version } from "node:process"; // Node標準ライブラリ
import { getHello } from "./greet"; // 自分のモジュール

console.log(version);
console.log(getHello("world"));
