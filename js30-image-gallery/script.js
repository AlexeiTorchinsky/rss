
const clientId = 'ZIVZYc50_EDW342j99ztm9GD8eysuDudzTwr4Bgmi4c';



let url = `https://api.unsplash.com/search/photos?query=car&per_page=30&orientation=landscape&client_id=${clientId}`;
const search = document.getElementById('search');
const searchBtn = document.querySelector('.search-btn');

async function getData() {
	const res = await fetch(url);
	const data = await res.json();
	
	

	const showData = (data) => {
			const galleryContainer = document.getElementById('gallery-container');

			data.results.forEach((result, i) => {
					const img = `<img class="gallery-img" src="${result.urls.regular}" alt="">`;
					galleryContainer.insertAdjacentHTML('beforeend', img);
			});
	}

	showData(data);
}

const searchImage = () => {
	const galleryContainer = document.getElementById('gallery-container');
  url = `https://api.unsplash.com/search/photos?query=${search.value}&per_page=30&orientation=landscape&client_id=ZIVZYc50_EDW342j99ztm9GD8eysuDudzTwr4Bgmi4c`;
	galleryContainer.innerHTML = '';
	getData();
}

searchBtn.addEventListener('click', searchImage
//  () => {
// 	const galleryContainer = document.getElementById('gallery-container');
//   url = `https://api.unsplash.com/search/photos?query=${search.value}&per_page=30&orientation=landscape&client_id=ZIVZYc50_EDW342j99ztm9GD8eysuDudzTwr4Bgmi4c`;
// 	galleryContainer.innerHTML = '';
// 	getData();
// }
);

getData();

document.addEventListener('keydown', event => {
  if( event.code === 'Enter' ){
		searchImage();
	};
});


