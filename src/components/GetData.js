
const GetData = async (url) => {
 
    try {
    let resp = await fetch(url);
    console.log('1. Got response', resp);
    let data = await resp.json();
    console.log('2. Got data', data);
    
    return data;
    }
    catch(error) {
    console.log(error);
    }
   
}

export default GetData;