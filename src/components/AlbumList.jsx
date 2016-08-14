// functional, stateless component => pure function
// sole responsibility is to render an array of albums passed in through its props
import React from 'react';

const AlbumList = (props) => {
  const albums = props.albums.map((album) => <li>{album.name}</li>);

  return (
    <ul>
      {albums}
    </ul>
  );
};

AlbumList.propTypes = {
  albums: React.PropTypes.array.isRequired,
};

export default AlbumList;
