import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
    album: PropTypes.array,
};

function Album(props) {

    const { album } = props
    return (
        <div className="album">
            <div className="album__url">
                <img src={album.url} alt={album.name}></img>
            </div>

            <p className="album__name">{album.name}</p>

        </div>
    );
}

export default Album;