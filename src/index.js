// Create new component produce some html component gets put in the DOM

import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Searchbar from './components/Searchbar'
import VideoList from './components/VideoList'
import ytsearch from 'youtube-api-search'
import VideoDetail from './components/VideoDetail'
import _ from 'lodash'
const API_KEY = 'AIzaSyBTB--WSUyuwsavQLD4D37FE6wPXCAyh30';


class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
      this.videoSearch('Баста')
  }

  videoSearch(term) {
    ytsearch({
      key: API_KEY,
      term: term
    }, (videos) => {
      this.setState({videos: videos, selectedVideo: videos[0]})
    })
  }
  render = () => {
    const VideoSearch = _.debounce((term) =>{this.videoSearch(term)},300 )

    return <div>
      <Searchbar onSearchTermChange = {VideoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect=
        {selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
    </div>;
  }
  componentDidMount() {}
}

export default App;

ReactDOM.render(
  <App/>, document.querySelector('.container'));
