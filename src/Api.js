
const Api = () => {

async function getData() {
 
    const movieApi = "popular"
    let url = `https://api.themoviedb.org/3/movie/${movieApi}?api_key=86f237d170416093156de7affa43927e`;
    
    try {
    let resp = await fetch(url);
    let data = await resp.json();
    
    return data;
    }
    catch(error) {
    console.log(error);
    }
   }
}

export default Api;