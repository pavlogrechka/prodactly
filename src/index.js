import { Article } from "./js/Article";

const data = [
  {
    id: '1',
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/strategy.jpg',
    tags: ['Design', 'Culture'],
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti beatae nesciunt repellendus commodi laudantium quibusdam voluptatum. Totam omnis dolorem numquam.',
    date: '11.11.2021',
  },
  {
    id: '2',
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/strategy.jpg',
    tags: ['Art'],
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti beatae nesciunt repellendus commodi laudantium quibusdam voluptatum. Totam omnis dolorem numquam.',
    date: '11.11.2021',
  },
  {
    id: '3',
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/strategy3.jpg',
    tags: ['Art', 'Design', 'Culture'],
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti beatae nesciunt repellendus commodi laudantium quibusdam voluptatum. Totam omnis dolorem numquam.',
    date: '11.11.2021',
  },
  {
    id: '4',
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/strategy2.jpg',
    tags: ['Art', 'Design'],
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti beatae nesciunt repellendus commodi laudantium quibusdam voluptatum. Totam omnis dolorem numquam.',
    date: '11.11.2021',
  },
]

window.onload = function () {
  console.log('hello from src/js/index.js')

  //Render Articles

  if (data) {
    renderArticlesToDom();
  }

  //Tags
  addTagsClickHandler();
}

const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
      let clickedTag = e.target;
      removeSelectedTags();
      selectClickedTag(clickedTag);
      if (clickedTag.innerText === 'All') {
        showAllStrategies();
      } else {
        filterStrategyBySelectedTag(clickedTag.innerText);
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

const showAllStrategies = () => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(strategy => {
    strategy.classList.remove('strategy--hidden');
  })
}

const filterStrategyBySelectedTag = (selectedTag) => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(strategy => {
    strategy.classList.add('strategy--hidden');
    strategy.querySelectorAll('.tag').forEach(tag => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove('strategy--hidden');
      }
    })
  })
}

const renderArticlesToDom = () => {
  let strategiesWrapper = getStrategiesWrapper();
  generateArticles(data).forEach(article => {
    strategiesWrapper.append(article.generateArticle())
  });
}

const getStrategiesWrapper = () => {
  const strategiesContainer = document.querySelector('.strategy-wrapper');
  strategiesContainer.innerHTML = '';
  return strategiesContainer;
}

const generateArticles = (data) => {
  let articles = [];
  data.forEach(article => {
    articles.push(new Article(article))
  });
  console.log(articles)
  return articles;
}

