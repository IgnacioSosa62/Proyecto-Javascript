
async function  getCakes (){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '09bc356303mshf9b79b400cf1b41p129ea5jsn9cffe5e4ed2d',
            'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
        }
    };
    
    fetch('https://pizza-and-desserts.p.rapidapi.com/desserts', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
}


getCakes()