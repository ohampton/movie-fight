const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', 
    {
        params: {
            apikey: 'c964f021',
            s: 'avengers'
        }
    }
    );

    console.log(response.data);
};

fetchData();