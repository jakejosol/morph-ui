// References
import React from 'react';
import _ from 'underscore';

export default class Content extends React.Component {

	getCurrentContent() {
		var current = React.createElement(
			'div',
			null,
			'Page not found'
		);
		if (this.props.children) {
			var children = React.Children.toArray(this.props.children);
			current = _.find(children, function (content) {
				return content.props.route == this.props.current;
			}.bind(this));
		}

		return current;
	}

	render() {
		return React.createElement(
			'article',
			{ className: 'content' },
			React.createElement(
				'div',
				{ className: 'content-block' },
				this.getCurrentContent()
			)
		);
	}
}