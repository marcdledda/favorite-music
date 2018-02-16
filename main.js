console.log("JS TEST");

let songList = ["SONG-A", "SONG-B", "SONG-C", "SONG-D", "SONG-E", "SONG-F", "SONG-G", "SONG-H", "SONG-I", "SONG-J"];
let artistList = ["Artist-A", "Artist-B", "Artist-C", "Artist-D", "Artist-E", "Artist-F", "Artist-G", "Artist-H", "Artist-I", "Artist-J"];
let albumList = ["Album-A", "Album-B", "Album-C", "Album-D", "Album-E", "Album-F", "Album-G", "Album-H", "Album-I", "Album-J"];

let songListOG = ["SONG-A", "SONG-B", "SONG-C", "SONG-D", "SONG-E", "SONG-F", "SONG-G", "SONG-H", "SONG-I", "SONG-J"];
let artistListOG = ["Artist-A", "Artist-B", "Artist-C", "Artist-D", "Artist-E", "Artist-F", "Artist-G", "Artist-H", "Artist-I", "Artist-J"];
let albumListOG = ["Album-A", "Album-B", "Album-C", "Album-D", "Album-E", "Album-F", "Album-G", "Album-H", "Album-I", "Album-J"];

for (i = 0; i < songList.length; i++) {
    document.getElementById("songOutput").innerHTML += `<div>${songList[i]}</div>`;
    document.getElementById("artistOutput").innerHTML += `<div>${artistList[i]}</div>`;
    document.getElementById("albumOutput").innerHTML += `<div>${albumList[i]}</div>`;
};

let songFormat = "default";
let artistFormat = "default";
let albumFormat = "default";
//
// === SONG BUTTON ===
//
function songSortFunc(){

    //Sort Alphabet
    if (document.getElementById("sortSongA").checked) {
        let songA = songList.sort();
        document.getElementById("songOutput").innerHTML = "";

        for (i = 0; i < songA.length; i++) {
            document.getElementById("songOutput").innerHTML += `<div>${songA[i]}</div>`;
        };
        songFormat = "default";
    };

    if (document.getElementById("sortSongD").checked) {
        let songD = songList.sort().reverse();
        document.getElementById("songOutput").innerHTML = "";

        for (i = 0; i < songD.length; i++) {
            document.getElementById("songOutput").innerHTML += `<div>${songD[i]}</div>`;
        };
        songFormat = "default";
    };

    //Sort Date
    if (document.getElementById("sortSongDate").checked){
        if (songFormat !== "forward"){
            document.getElementById("songOutput").innerHTML = "";
            for (i = 0; i < songListOG.length; i++) {
                document.getElementById("songOutput").innerHTML += `<div>${songListOG[i]}</div>`;
            };
            songFormat = "forward";
            console.log(songFormat);
        };
    };

    if (document.getElementById("sortSongDateR").checked){
        if (songFormat !== "reverse"){
            let songDateR = songListOG.slice().reverse();
            document.getElementById("songOutput").innerHTML = "";
            for (i = 0; i < songDateR.length; i++) {
                document.getElementById("songOutput").innerHTML += `<div>${songDateR[i]}</div>`;
            };
            songFormat = "reverse";
            console.log(songFormat);
        };
    };
};

let btnSongSort = document.getElementById("sortSong").addEventListener("click", songSortFunc);

//
// === ARTIST BUTTON ===
//
function artistSortFunc(){

    //Sort Alphabet
    if (document.getElementById("sortArtistA").checked) {
        let artistA = artistList.sort();
        document.getElementById("artistOutput").innerHTML = "";

        for (i = 0; i < artistA.length; i++) {
            document.getElementById("artistOutput").innerHTML += `<div>${artistA[i]}</div>`;
        };
        artistFormat = "default";
    };

    if (document.getElementById("sortArtistD").checked) {
        let artistD = artistList.sort().reverse();
        document.getElementById("artistOutput").innerHTML = "";

        for (i = 0; i < artistD.length; i++) {
            document.getElementById("artistOutput").innerHTML += `<div>${artistD[i]}</div>`;
        };
        artistFormat = "default";
    };

    //Sort Date
    if (document.getElementById("sortArtistDate").checked){
        if (artistFormat !== "forward"){
            document.getElementById("artistOutput").innerHTML = "";
            for (i = 0; i < artistListOG.length; i++) {
                document.getElementById("artistOutput").innerHTML += `<div>${artistListOG[i]}</div>`;
            };
            artistFormat = "forward";
            console.log(artistFormat);
        };
    };

    if (document.getElementById("sortArtistDateR").checked){
        if (artistFormat !== "reverse"){
            let artistDateR = artistListOG.slice().reverse();
            document.getElementById("artistOutput").innerHTML = "";
            for (i = 0; i < artistDateR.length; i++) {
                document.getElementById("artistOutput").innerHTML += `<div>${artistDateR[i]}</div>`;
            };
            artistFormat = "reverse";
            console.log(artistFormat);
        };
    };
};

let btnArtistSort = document.getElementById("sortArtist").addEventListener("click", artistSortFunc);

//
// === ALBUM BUTTON ===
//
function albumSortFunc(){

    //Sort Alphabet
    if (document.getElementById("sortAlbumA").checked) {
        let albumA = albumList.sort();
        document.getElementById("albumOutput").innerHTML = "";

        for (i = 0; i < albumA.length; i++) {
            document.getElementById("albumOutput").innerHTML += `<div>${albumA[i]}</div>`;
        };
        albumFormat = "default";
    };

    if (document.getElementById("sortAlbumD").checked) {
        let albumD = albumList.sort().reverse();
        document.getElementById("albumOutput").innerHTML = "";

        for (i = 0; i < albumD.length; i++) {
            document.getElementById("albumOutput").innerHTML += `<div>${albumD[i]}</div>`;
        };
        albumFormat = "default";
    };
    
    //Sort Date
    if(document.getElementById("sortAlbumDate").checked){
        if (albumFormat !== "forward"){
            document.getElementById("albumOutput").innerHTML = "";
            for (i = 0; i < albumListOG.length; i++) {
                document.getElementById("albumOutput").innerHTML += `<div>${albumListOG[i]}</div>`;
            };
            albumFormat = "forward";
            console.log(albumFormat);
        };        
    };

    if (document.getElementById("sortAlbumDateR").checked){
        if (albumFormat !== "reverse"){
            let albumDateR = albumListOG.slice().reverse();
            document.getElementById("albumOutput").innerHTML = "";
            for (i = 0; i < albumDateR.length; i++) {
                document.getElementById("albumOutput").innerHTML += `<div>${albumDateR[i]}</div>`;
            };
            albumFormat = "reverse";
            console.log(albumFormat);
        };
    };
};

let btnAlbumSort = document.getElementById("sortAlbum").addEventListener("click", albumSortFunc);

//
// ===ENTER ITEM===
//
function enterItem() {
    songList.unshift(document.getElementById("songInput").value);
    songListOG.unshift(document.getElementById("songInput").value);
    document.getElementById("songOutput").innerHTML = "";
    for (i = 0; i < songList.length; i++) {
        document.getElementById("songOutput").innerHTML += `<div>${songList[i]}</div>`;
    };

    artistList.unshift(document.getElementById("artistInput").value);
    artistListOG.unshift(document.getElementById("artistInput").value);
    document.getElementById("artistOutput").innerHTML = "";
    for (i = 0; i < artistList.length; i++) {
        document.getElementById("artistOutput").innerHTML += `<div>${artistList[i]}</div>`;
    };

    albumList.unshift(document.getElementById("albumInput").value);
    albumListOG.unshift(document.getElementById("albumInput").value);
    document.getElementById("albumOutput").innerHTML = "";
    for (i = 0; i < albumList.length; i++) {
        document.getElementById("albumOutput").innerHTML += `<div>${albumList[i]}</div>`;
    };

    document.getElementById("songInput").value = "";
    document.getElementById("artistInput").value = "";
    document.getElementById("albumInput").value = "";
};

let btnEnter = document.getElementById("enter").addEventListener("click", enterItem);

