window.addEventListener('load', () => {
    const url = 'https://restcountries.com/v3.1/'
    const token = ''
    const config = {
        method: "GET",
        Authorization: `Bearer ${token}`
    }
    const getCountries = async () => {
        try {
            const result = await fetch(`${url}/all`)
            const data = await result.json()
            return data.forEach(country => console.log(country.name.common))
            
        } catch (e) {
            console.log(e)
        }
    }
    getCountries()
});