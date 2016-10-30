import React from 'react';
import ReactDOM from 'react-dom';
import Post from './post.jsx';

var DillyPressApp = React.createClass ({

	componentDidMount: function(){

		$.ajax({

			url: this.props.dataURL,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({posts: data});
				console.log(this.state)
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this)

		});

	},

	getInitialState(){

		// initialize posts as empty array
		return {posts: []}

	},

	render() {
		var posts = this.state.posts.map(function(postsObj, index){
		// On Render, map current post data to list of components
			console.log(postsObj);
			return <Post content={ postsObj.content.rendered } title={postsObj.title.rendered} key={index}/>;	

		})

		return (
			<div>
				<h1>Hello warudo</h1>
				{posts}
			</div>
		);
	}

})

ReactDOM.render(<DillyPressApp dataURL={test}/>, document.getElementById('app'));