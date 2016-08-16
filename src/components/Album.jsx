// stateless functional component that receives explicit props

import React from 'react';

const Album = (props) => {
  return (
    <li>
      <img
        src={props.album.images[1].url}
        alt={props.album.name}
        style={Album.styles.img}
      />
    </li>
  )
};

Album.propTypes = {
  album: React.PropTypes.object.isRequired,
};

Album.styles = {
  img: {
    marginBottom: '1em',
  },
};

export default Album;