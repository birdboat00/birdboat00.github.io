import * as marked from "./marked.mjs"

export function essay(meta) {
  document.title = (meta.name ?? "untitled essay") + " | bb00"
  const content = document.getElementById("essay-content")

  fetch(meta.contentfile)
    .catch(error => {
      content.innerText = `Failed to load essay '${meta.contentfile}'. Error: ${error}`
    })
    .then(res => res.text())
    .then(text => {
      content.innerHTML = marked.parse(text)
    })
}