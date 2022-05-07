import * as marked from "./marked.mjs"

const getmeta = (n) => document.querySelector("meta[name=" + n)?.content;
const essaymeta = getmeta("essay");
if (essaymeta) {
  const content = document.getElementById("essay-content")
  fetch(essaymeta)
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then(m => {
      document.title = (m.name ?? "untitled essay") + " | bb00"
      document.documentElement.setAttribute("data-theme", m.theme ?? "def")
      fetch(m.file)
        .then(res => res.ok ? res.text() : Promise.reject(res.status))
        .then(t => { content.innerHTML = marked.parse(t) })
        .catch(e => {
          content.innerText = `Failed to load essay '${m.contentfile}'. Error: ${e}`
        })
     })
    .catch(e => { content.innerText = `Failed to load essay. Error: ${e}` })
}
