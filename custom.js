// custom.js script for Jupyter Notebook
// (C) Lilian Besson, 2018
// See https://github.com/Naereen/how-to-customize-title-of-jupyter-notebook/issues/1
// MIT License, https://lbesson.mit-license.org/
console.log("Initial title: ", window.document.title);
window.document.title = window.document.title + " — Jupyter Notebook";
console.log("New title: ", window.document.title);
