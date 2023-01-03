$(document).ready(function () {
  if ($(".language-mermaid").length >= 1) {
    mermaid.initialize({
      startOnLoad: true,
      theme: "default", //default neutral dark forest
    })
    mermaid.init({noteMargin: 10}, ".language-mermaid")
  }
})
