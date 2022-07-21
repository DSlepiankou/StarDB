import axios from 'axios';

function SwapiService() {
    const _apiBase = 'https://swapi.dev/api/';

    async function getResource(url) {
        const response = await axios.get(`${_apiBase}${url}`)
        console.log(response.data)
        return response.data;
    }

    function getAllPeople() {
        getResource('people/');
    }

    function getPerson(id) {
        getResource(`/people/${id}/`);
    }

    return (
        <div>
            {getAllPeople()}
        </div>
    )

}

export default SwapiService;