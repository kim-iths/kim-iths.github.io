
const Api = () => {

async function getData() {
 
    let url = `https://api.themoviedb.org/3/movie/550?api_key=86f237d170416093156de7affa43927e`;
    
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