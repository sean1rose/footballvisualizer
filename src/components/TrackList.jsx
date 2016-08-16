// stateless functional component
import React from 'react';
import Track from './Track';

const TrackList = (props) => {
	const tracks = props.tracks.map((track) => <Track key={track.id} track={track} />);

	return (
		<div className="col-md-3">
			<ul style={TrackList.styles.ul}>
				{tracks}
			</ul>
		</div>
	)
};

TrackList.propTypes = {
	tracks: React.PropTypes.array.isRequired,
};

TrackList.styles = {
	ul: {
		listStyle: 'none',
	},
};

export default TrackList;