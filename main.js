console.log("JS TEST");

let songList = ["SONG-A", "SONG-B", "SONG-C", "SONG-D", "SONG-E", "SONG-F", "SONG-G", "SONG-H", "SONG-I", "SONG-J"];
let artistList = ["Artist-A", "Artist-B", "Artist-C", "Artist-D", "Artist-E", "Artist-F", "Artist-G", "Artist-H", "Artists-I", "Artists-J"];
let albumList = ["Album-A", "Album-B", "Album-C", "Album-D", "Album-E", "Album-F", "Album-G", "Album-H", "Album-I", "Album-J"];

for (i = 0; i < songList.length; i++) {
    document.getElementById("songOutput").innerHTML += `<div>${songList[i]}</div>`;
    document.getElementById("artistOutput").innerHTML += `<div>${artistList[i]}</div>`;
    document.getElementById("albumOutput").innerHTML += `<div>${albumList[i]}</div>`;
};

// === SONG BUTTON ===
function songSortFunc(){

    if (document.getElementById("sortSongA").checked) {
        let songA = songList.sort();
        document.getElementById("songOutput").innerHTML = "";

        for (i = 0; i < songA.length; i++) {
            document.getElementById("songOutput").innerHTML += `<div>${songA[i]}</div>`;
        };
    };

    if (document.getElementById("sortSongD").checked) {
        let songD = songList.sort().reverse();
        document.getElementById("songOutput").innerHTML = "";

        for (i = 0; i < songD.length; i++) {
            document.getElementById("songOutput").innerHTML += `<div>${songD[i]}</div>`;
        };
    }
};

let btnSongSort = document.getElementById("sortSong").addEventListener("click", songSortFunc);

// === ARTIST BUTTON ===
function artistSortFunc(){

    if (document.getElementById("sortArtistA").checked) {
        let artistA = artistList.sort();
        document.getElementById("artistOutput").innerHTML = "";

        for (i = 0; i < artistA.length; i++) {
            document.getElementById("artistOutput").innerHTML += `<div>${artistA[i]}</div>`;
        };
    };

    if (document.getElementById("sortArtistD").checked) {
        let artistD = artistList.sort().reverse();
        document.getElementById("artistOutput").innerHTML = "";

        for (i = 0; i < artistD.length; i++) {
            document.getElementById("artistOutput").innerHTML += `<div>${artistD[i]}</div>`;
        };
    }
};

let btnArtistSort = document.getElementById("sortArtist").addEventListener("click", artistSortFunc);

// === ALBUM BUTTON ===
function albumSortFunc(){

    if (document.getElementById("sortAlbumA").checked) {
        let albumA = albumList.sort();
        document.getElementById("albumOutput").innerHTML = "";

        for (i = 0; i < albumA.length; i++) {
            document.getElementById("albumOutput").innerHTML += `<div>${albumA[i]}</div>`;
        };
    };

    if (document.getElementById("sortAlbumD").checked) {
        let albumD = albumList.sort().reverse();
        document.getElementById("albumOutput").innerHTML = "";

        for (i = 0; i < albumD.length; i++) {
            document.getElementById("albumOutput").innerHTML += `<div>${albumD[i]}</div>`;
        };
    }
};

let btnAlbumSort = document.getElementById("sortAlbum").addEventListener("click", albumSortFunc);

// ===ENTER ITEM===
function enterItem() {
    console.log("TEST");
};

let btnEnter = document.getElementById("enter").addEventListener("click", enterItem);