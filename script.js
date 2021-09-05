'use strict'


// filter for content with tag

// const article = {
//   title:'Title',
//   tag: 'art',
// }

// const tags = ['All', 'Art', 'Culture', 'Design']
// const showAll = function () { }
// const showArt = function () { }
// const showCulture = function () { }
// const showDesign = function () { }

let tags = document.querySelectorAll('.tags-filter');

const tagSelect = function (event) {
  //if tag has class selected - remove class selected
  //if tag has not class selected - add class selected

  const arr = Array.from(event.target.classList);

  if (arr.includes('tag--selected')) {
    event.target.classList.remove('tag--selected');
    event.target.classList.add('tag--bordered');
  }
  if (!arr.includes('tag--selected')) {
    event.target.classList.remove('tag--bordered');
    event.target.classList.add('tag--selected');
  }
};

const filterForTags = function () {
  tags.forEach(tag => {
    tag.addEventListener('click', tagSelect)
  })
}
filterForTags()


// 
'use strict'



