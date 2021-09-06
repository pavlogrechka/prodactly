import { Article } from "./js/Article";
import { Modal } from "./js/Modal";
import { ArticleModal } from "./js/ArticleModal";

const data = [
  {
    id: '1',
    title: 'Increasing Prosperity With Positive Thinking With Positive Thinking',
    urlToImage: './src/img/strategies/strategy.jpg',
    tags: ['Design', 'Culture'],
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti beatae nesciunt repellendus commodi laudantium quibusdam voluptatum. Totam omnis dolorem numquam.',
    date: '11.11.2021',
  },
  {
    id: '2',
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/strategy2.jpg',
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
    urlToImage: './src/img/strategies/strategy4.jpg',
    tags: ['Art', 'Design'],
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti beatae nesciunt repellendus commodi laudantium quibusdam voluptatum. Totam omnis dolorem numquam.',
    date: '11.11.2021',
  },
  {
    id: '5',
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/strategy5.jpg',
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

  //Generate Base Modal from Modal Class
  addToolsClickHandler();
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

  addStrategyClickHandler();
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
  return articles;
}

const addToolsClickHandler = () => {
  document.querySelector('.tools__button button').addEventListener('click', () => {
    generateToolsModal();
  })
}

const generateToolsModal = () => {
  renderModalWindow('Test content for Tools Modal');
}

const renderModalWindow = (content) => {
  let modal = new Modal('tools-modal');
  modal.buildModal(content);
}

const addStrategyClickHandler = () => {
  document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {
    if (e.target.closest('.strategy')) {
      let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
      let clickedStrategyData = getClickedData(clickedStrategyId);

      renderArticleModalWindow(clickedStrategyData);

    }
  })
}

const getClickedData = (id) => {
  return data.find(article => article.id == id);
}

const renderArticleModalWindow = (article) => {
  let modal = new ArticleModal('article-modal', article)
  modal.renderModal();
}
