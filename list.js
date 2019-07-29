var rowDOM = document.getElementById('tbody');

var judulDOM = document.getElementById('judul-film');
var tahunDOM = document.getElementById('tahun-film');
var genreDOM = document.getElementById('genre-film');
var reviewDOM = document.getElementById('review-film');

var allList = localStorage.getItem('daftar-film');

var allListJson = JSON.parse(allList);

console.log(allListJson);

if(allListJson.length > 0) {

for(i in allListJson) {
  rowDOM.innerHTML += '<tr><th id="judul-film" scope="row">' + allListJson[i].judul + '</th><td id="tahun-film">' + allListJson[i].tahun + '</td><td id="genre-film">' + allListJson[i].genre + '</td><td id="review-film">' + allListJson[i].review + '</td></tr>';
}

}