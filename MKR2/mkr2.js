var collection = {
    1: {
        album: "Zemlya",
        artist: "Okean Elzy",
        tracks: [
            "Stina",
            "Rendez-Vous",
            "Obiymy",
            "Na nebi",
            "Striliay"
        ],
        releaseyear: 2013,
        URLobgortky: "https://ae01.alicdn.com/kf/U65c81ce582424b20aacf578fc529f236C/CD.jpg_Q90.jpg_.webp",
        kilkist_prosluh: 13350012

    },
    2: {
        album: "Gloria",
        artist: "Okean Elzy",
        tracks: [
            "Persha pisnya",
            "Ty i ya",
            "Vyshe neba",
            "Sonce sidaye",
            "Nikoly",
            "Bez boyu",
            "Vidchuvayu"
        ],
        releaseyear: 2005,
        URLobgortky: "https://m.media-amazon.com/images/I/81QVgcPfdEL._SL1226_.jpg",
        kilkist_prosluh: 20388180
    }
};

num.ToString(collection)

function ALbum(album, artist, tracks, releaseyear, URLobgortky, kilkist_prosluh) {

    this.album = album,
        this.tracks = tracks,
        this.releaseyear = releaseyear,
        this.URLobgortky = URLobgortky
    this.kilkist_prosluh = kilkist_prosluh
}