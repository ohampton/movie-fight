const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', 
    {
        params: {
            apikey: 'c964f021',
            i: 'tt0848228'
        }
    }
    );

    console.log(response.data);
};

fetchData();