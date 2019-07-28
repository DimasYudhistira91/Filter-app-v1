var rowDOM = document.getElementById('row1');

var judulDOM = document.getElementById('judul-film');
var tahunDOM = document.getElementById('tahun-film');
var genreDOM = document.getElementById('genre-film');
var reviewDOM = document.getElementById('review-film');

var allList = localStorage.getItem('daftar-film');
var allListJson = JSON.parse(allList);

console.log(allListJson);

for(i = 0; i < allListJson.length; i++) {
rowDOM.length = allListJson.length;
rowDOM.innerHTML += '<th id="judul-film" scope="row">' + allListJson[i].judul + '</th><td id="tahun-film">' + allListJson[i].tahun + '</td><td id="genre-film">' + allListJson[i].genre + '</td><td id="review-film">' + allListJson[i].review + '</td>';
}

