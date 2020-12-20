import * as React from "react";
import PropTypes from "prop-types";

export default class Loading extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			content: props.text,
		};
	}
	componentDidMount() {
		const { speed, text } = this.props;

		this.interval = window.setInterval(() => {
			this.state.content === text + "..."
				? this.setState({ content: text })
				: this.setState(({ content }) => ({ content: content + "." }));
		}, speed);
	}
	componentWillUnmount() {
		window.clearInterval(this.interval);
	}
	render() {
		return <p className="content-loading">{this.state.content}</p>;
	}
}

Loading.propTypes = {
	text: PropTypes.string.isRequired,
	speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
	text: "Loading",
	speed: 300,
};
