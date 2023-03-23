import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {

    const albumList = [
        {
            id: 1,
            name: "Anh yeu Em",
            url: 'https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/d/6/e/6/d6e6201323fed8fb16886a3f428fc4f7.jpg',
        },
        {
            id: 2,
            name: "Em co nho anh khong",
            url: 'https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/6/8/9/b/689b9f49c7ceb4ca4dc326571bba4e2a.jpg',
        },
        {
            id: 3,
            name: "minh yeu nhau nhe",
            url: 'https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/0/c/e/5/0ce507ca0dac1fbed87fd1bd1f88273a.jpg',
        }
    ]

    return (
        <div>
            <AlbumList albumList={albumList}></AlbumList>
        </div>
    );
}

export default AlbumFeature;