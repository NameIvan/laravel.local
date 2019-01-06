import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { getTracks, addTrack } from '../actions/tracks'

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.findTrack = this.findTrack.bind(this);
    }

    addTrack() {
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    findTrack() {
        this.props.onFindTrack(this.searchInput.value);
    }

    render () {
        return (
            <div>
                <div style={{ color: 'red' }}>
                    <ul>
                        {
                            Object.keys(this.props.errors).map((param, index) => {
                                return <li key={ param + '_' + index }>{param}: {this.props.errors[param][0]}</li>
                            })
                        }
                    </ul>
                </div>
                <div>
                    <input type="text" ref={(input) => { this.trackInput = input}} />
                    <button onClick={ this.addTrack }>Add track</button>
                </div>
                <div>
                    <input type="text" ref={(input) => { this.searchInput = input}} />
                    <button onClick={ this.findTrack }>Find track</button>
                </div>
                <div>
                    <button onClick={ this.props.onGetTracks }>Get tracks</button>
                </div>
                <ul>
                    {
                        this.props.tracks.map((track) => {
                            if (this.props.filter) {
                                if (track.name.indexOf(this.props.filter) > -1) {
                                    return <li key={ track.id }>{ track.name }</li>
                                }
                            } else {
                                return <li key={ track.id }>{ track.name }</li>
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default connect(
    state => ({
        tracks: state.tracks.tracks.list,
        errors: state.tracks.tracks.error,
        filter: state.filter
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            const payload = {
                name: trackName
            };
            dispatch(addTrack(payload));
        },
        onFindTrack: (searchText) => {
            dispatch({ type: 'FIND_TRACK', payload: searchText});
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);