import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';


const API_KEY = 'AIzaSyDROgL5-tjYKVrv4Q_g2EGCSLHB89bGAPU';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('basketball');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // console.log(videos);
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 300)

        return (
            <div>
                <SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo=>this.setState({selectedVideo})} 
                    videos={this.state.videos} 
                />
            </div>
        );
    }
}
    


ReactDOM.render(<App/>, document.querySelector('.container'));
