import { timeZone } from "./config"; // 'Asia/Shanghai'

export async function getFooter() {
  return `
<p align="center">此文件 <i>README</i> <b>间隔 3 小时</b>自动刷新生成！
</br>
最近一次刷新于：${new Date().toLocaleString(undefined, {
    timeStyle: "medium",
    dateStyle: "short",
    timeZone,
  })}
</p>
  `;
}