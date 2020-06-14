import React from 'react';
import axios from 'axios';

import PostContainer from './components/post-container/post-container-component'
import withLoading from './components/HOCs/withLoading'

import './App.css';

const PostContainerWithLoading = withLoading(PostContainer)

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts/').then(res => {
      this.setState({
        posts: res.data,
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="app-container">
        <PostContainerWithLoading posts={this.state.posts} isLoading={this.state.loading} />
      </div>
    )
  }
}

export default App