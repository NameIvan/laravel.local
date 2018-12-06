import React, {PureComponent} from 'react';

class Article extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen ? <section className="card-text">{ article.text }</section> : '';
        return (
            <div className="card mx-auto" style={{width: '50%'}}>
                <div className="card-header">
                    <h2>
                        { article.title }
                        <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'close' : 'open'}
                        </button>
                     </h2>
                </div>
                <div className="card-body" style={{padding: '20px 0'}}>
                    <h6 className="card-subtitle text-muted">
                        Time: {(new Date(article.date)).toDateString()}
                    </h6>
                    { body }
                </div>
            </div>
        )
    }
}


export default Article