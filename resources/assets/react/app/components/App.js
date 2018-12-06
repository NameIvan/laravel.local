import React, {PureComponent} from 'react';
import ArticleList from "./ArticleList";
import 'bootstrap/dist/css/bootstrap.css'


class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            reverted: false
        };

        this.revert = this.revert.bind(this);
    }

    revert() {
        this.setState({
            reverted: !this.state.reverted
        });
    };

    render () {
        const articles = [
                {
                    'id': 1,
                    'title': 'Lorem Ipsum',
                    'date' : '2016-06-09T15:03:23.000Z',
                    'text' : 'Is simply dummy text of the printing and typesetting industry.' +
                        ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
                },
                {
                    'id': 2,
                    'title': 'Art',
                    'text' : 'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    'date' : '2016-06-11T15:03:23.000Z'
                }
        ];

        return <div className="container">
            <div className="jumbotron">
                <h1 className="display-3">
                    React
                    <button className="btn" onClick={this.revert}>Revert</button>
                </h1>
            </div>
            <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
        </div>
    }
}


export default App