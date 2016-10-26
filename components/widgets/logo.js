// References
import React from 'react';

export default class Logo extends React.Component {
	render() {
		return <div className='logo'>
			<a href='/'>
				<h1>
					{this.props.url? 
						<img src={this.props.url} />:
						this.props.title}
				</h1>
			</a>
		</div>;
	}
}