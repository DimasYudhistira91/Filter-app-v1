var rowDOM = document.getElementById('row1');


var judulDOM = document.getElementById('judul-film');
var tahunDOM = document.getElementById('tahun-film');
var genreDOM = document.getElementById('genre-film');
var reviewDOM = document.getElementById('review-film');

var allList = localStorage.getItem('daftar-film');
var allListJson = JSON.parse(allList);

console.log(allListJson[0].judul);

rowDOM = allListJson.length;

for(i = 0; i < allListJson.length; i++) {
  judulDOM.innerHTML = allListJson[i].judul;
  tahunDOM.innerHTML = allListJson[i].tahun;
  genreDOM.innerHTML = allListJson[i].genre;
  reviewDOM.innerHTML = allListJson[i].review;
}