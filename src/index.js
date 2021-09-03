'use strict'

window.onload = function () {
  console.log('hello')

  addTagsClickHandler()

}

const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
      let clickedTag = e.target;
      removeSelectedTags();
      selectClickedTag(clickedTag);
      if (clickedTag.innerText === 'All') {

      } else {
        filterStrategyBySelectedTag();
      }
    }
  })
}

const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.strategies__tags .tag');
  tags.forEach(tag => {
    tag.classList.remove('tag--selected');
    tag.classList.add('tag--bordered');
  })
}

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.add('tag--selected')
  clickedTag.classList.remove('tag--bordered')
}


const showAllStrategies = () => { }

const filterStrategyBySelectedTag = (selectedTag) => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(strategy => {

  })
}
