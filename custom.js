// custom.js script for Jupyter Notebook
// (C) Lilian Besson, 2018
// See https://github.com/Naereen/how-to-customize-title-of-jupyter-notebook/issues/1
// MIT License, https://lbesson.mit-license.org/

// First try? works first, but as soon as the title is changed, our tweak is lost
console.log("Initial title: ", window.document.title);
window.document.title = window.document.title + " — Jupyter Notebook";
console.log("New title: ", window.document.title);

// // Second try? just forbid any future change in the title?
// // Too brutal, if we rename the notebook for instance...
// // Cf. https://stackoverflow.com/a/27847787/
// Object.defineProperty(document, 'title', {
//    enumerable: false,
//    configurable: false,
//    writable: false,
//    value: document.title
//});


// // Third try?, real solution?, cf. https://stackoverflow.com/a/29540461/
//var target = document.querySelector('title');
//var observer = new MutationObserver(function(mutations) 
//    console.log(mutations[0].target.nodeValue);
//});
//var config = { subtree: true, characterData: true, childList: true };
//observer.observe(target, config);

// Fourth solution, using deprecated __defineSetter__ method...
// simple and pretty!
document.__defineSetter__('title', function(val) {
    // document.title = val + " — Jupyter Notebook";   // WARNING Would be recursive!
    console.log("Setting window's title to:", val);
    document.querySelector('title').childNodes[0].nodeValue = val + " — Jupyter Notebook";
});
