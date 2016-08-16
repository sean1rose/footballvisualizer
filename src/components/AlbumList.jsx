// functional, stateless component => pure function
// sole responsibility is to render an array of albums passed in through its props
import React from 'react';
import Album from './Album';

const AlbumList = (props) => {
  const albums = props.albums.map((album) => <Album key={album.id} album={album} />);

  return (
    <div className="col-md-4" style={AlbumList.styles.div}>
      <ul style={AlbumList.styles.ul}>
        {albums}
      </ul>
    </div>
  );
};

AlbumList.propTypes = {
  albums: React.PropTypes.array.isRequired,
};

AlbumList.styles = {
  div: {
    width: 370,
    marginLeft: 30,
    textAlign: 'right',
    maxHeight: '85vh',
    overflowY: 'auto',
  },
  ul: {
    listStyle: 'none',
  },
};

export default AlbumList;
