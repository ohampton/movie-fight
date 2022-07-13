const fetchData = async searchTerm => {
    const response = await axios.get('http://www.omdbapi.com/',
        {
            params: {
                apikey: 'c964f021',
                s: searchTerm
            }
        }
    );

    console.log(response.data);
};

const input = document.querySelector('input');

const debounce = (func) => {
    let timeoutID;
    return (...args) => {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            func.apply(null, args);
        }, 1000)
    };
};


const onInput = debounce(event => {
        fetchData(event.target.value)
    });
input.addEventListener('input', onInput);
