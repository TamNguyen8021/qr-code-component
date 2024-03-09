import PropTypes from "prop-types";

export const Card = ({ imageUrl, imageDescription, title, content }) => {
	return (
		<div className="card">
			<img
				className="card-image"
				src={imageUrl}
				alt={imageDescription}
			/>
			<h1 className="card-title">{title}</h1>
			<p className="card-content">{content}</p>
		</div>
	);
};

Card.propTypes = {
	imageUrl: PropTypes.string,
	imageDescription: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
};
