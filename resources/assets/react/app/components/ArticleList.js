import React, {PureComponent} from 'react';
import Article from "./Article";

class ArticleList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            openArticleId: null
        };
    }

    handleClick(openArticleId) {
        this.setState({
            openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
        });
    };

    render() {
        const {articles} = this.props;
        const articleElement = articles.map((article, key) =>
            <li key={article.id} style={{listStyle: 'none'}}>
                <Article
                    article = {article}
                    isOpen = {this.state.openArticleId  === article.id}
                    onButtonClick={this.handleClick.bind(this, article.id)}
                />
            </li>
        );

        return (
            <ul>{articleElement}</ul>
        )
    }
}



export default ArticleList