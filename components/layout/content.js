// References
import React from 'react';
import _ from 'underscore';

export default class Content extends React.Component {

	getCurrentContent() {
		var current = <div>Page not found</div>;		
		if(this.props.children)
		{
			var children = React.Children.toArray(this.props.children);
			current =  _.find(children, function(content) {
				return content.props.route == this.props.current;
			}.bind(this));
		}

		return current;
	}

	render() {
		return <article className='content'>
			<div className='content-block'>
				{this.getCurrentContent()}
			</div>
		</article>;
	}
}