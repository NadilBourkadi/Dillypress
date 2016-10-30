import React from 'react';
import ReactDOM from 'react-dom';

var Post = React.createClass({

	render(){
		return (
			<div className="post">
				<h1>{this.props.title}</h1>
				<div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
			</div>
		);
	}

});

export default Post;