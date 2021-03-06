export class Article {
	constructor({ id, title, urlToImage, tags, ...rest }) {
		this.id = id;
		this.title = title;
		this.urlToImage = urlToImage;
		this.tags = tags;
	}

	//Article generator
	generateArticle() {
		let template = '';
		let article = document.createElement('article');
		article.className = 'strategy block-shadowed';
		article.setAttribute('data-id', this.id)

		this.urlToImage &&
			(template += `<div class = "strategy__image-wrapper"><img class = "strategy__image" src=${this.urlToImage} alt="strategy"></div>`)

		if (this.title || this.tags) {
			template += `<div class="strategy__content">`;

			this.title &&
				(template += `<h3 class= "strategy__title">${this.title}</h3>`)

			if (this.tags) {
				template += `<div class="strategy__tags tags">`;

				this.tags.map(tag => {
					template += `<div class="tag">${tag}</div>`;
				})

				template += `</div>`;
			}

			template += `</div>`;
		}

		article.innerHTML = template;
		return article;
	}
}
