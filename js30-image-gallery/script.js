
const galleryContainer = document.getElementById('gallery-conatiner');



const url = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=ZIVZYc50_EDW342j99ztm9GD8eysuDudzTwr4Bgmi4c';


async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    
    console.log(data);
    const showData = (data1) => {
			data1 = data;
			const img = `<img class="gallery-img" src="${data.results[0].urls.regular}" alt="image">`;
      galleryContainer.insertAdjacentHTML('beforeend', img);
			
      // img.src = `${data.results[0].urls.regular}`
    } 
    showData();
}
getData();


