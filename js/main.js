let album = document.querySelectorAll('.album');
let players = document.querySelectorAll('.audio-player');

let audioTracks = document.querySelectorAll('audio');
    players.forEach(function (player) {
        player.style.display = 'none';
    });

    audioTracks.forEach(function (el) {
        el.pause();
    el.currentTime = 0;
    });

album.forEach(function (el) {
    el.onclick = (e) => {
    players.forEach(function (player) {
    player.style.display = 'none';
    });

audioTracks.forEach(function (track) {
    track.pause();
    track.currentTime = 0;
});

switch (e.target.getAttribute('id')) {
case 'mess':
    document.querySelector('#mess-player').style.display = 'block';
    document.querySelector('#mess-player audio').play();
    break;
case 'feels':
    document.querySelector('#feels-player').style.display = 'block';
    document.querySelector('#feels-player audio').play();
    break;
case 'know':
    document.querySelector('#know-player').style.display = 'block';
    document.querySelector('#know-player audio').play();
    break;
case 'true':
    document.querySelector('#true-player').style.display = 'block';
    document.querySelector('#true-player audio').play();
    break;
}
};
});