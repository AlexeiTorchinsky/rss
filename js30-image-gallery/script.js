
const galleryContainer = document.getElementById('gallery-conatiner');



const url = 'https://api.unsplash.com/search/photos?query=car&per_page=30&orientation=landscape&client_id=ZIVZYc50_EDW342j99ztm9GD8eysuDudzTwr4Bgmi4c';


async function getData() {
	const res = await fetch(url);
	const data = await res.json();
	
	const showData = (data) => {
			const galleryContainer = document.getElementById('gallery-container');

			data.results.forEach((result, i) => {
					const img = `<img class="gallery-img" src="${result.urls.regular}" alt="image ${i + 1}">`;
					galleryContainer.insertAdjacentHTML('beforeend', img);
			});
	}

	showData(data);
}

getData();




