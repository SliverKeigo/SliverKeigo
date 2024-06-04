import { timeZone } from "./config"; // 'Asia/Shanghai'

export async function getFooter() {
  return `
</br>
最近一次刷新于：${new Date().toLocaleString(undefined, {
    timeStyle: "medium",
    dateStyle: "short",
    timeZone,
  })}
</p>
  `;
}
