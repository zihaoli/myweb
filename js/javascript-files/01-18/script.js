var beyond = {
    formedIn: '1983',
    foundedIn: '香港',
    artist: ['黄家驹', '黄家强', '黄贯中', '叶世荣']
};

beyond.showArtist = function () {
    for (var i = 0; i < this.artist.length; i++) {
        document.writeln(this.artist[i]);
    }
};

beyond.showArtist();

var property;
for (property in beyond) {
    if (typeof beyond[property] !== 'function') {
        console.log(property + '：' + beyond[property]);
    }
}

//console.log(beyond); 