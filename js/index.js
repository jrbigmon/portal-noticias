const baseURL = 'https://newsapi.org/v2'
const token  = '8d7df186bd4f42cf8889135b051dc2a2'
const config = {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${token}`
    }
}

window.addEventListener('load', () => {
    const listaDeNoticias = document.querySelector('#listaDeNoticias')
    const noticesBrasil = document.querySelector('#brasil')
    const noticesEUA = document.querySelector('#estadosUnidos')

    const getTopNotices = async (endPoint) => {  
        try {
            const response = await fetch(`${baseURL}/${endPoint}`, config)
            const data = await response.json()
            data.articles.forEach(article => {  
                const card = `<div class="col-3 cards">
                    <div class="card">
                    <img src="${article.urlToImage || 'Imagem não encontrada'}" class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">
                            ${article.description || ''}
                        </p>
                        <a href="${article.url}" class="btn btn-primary">${article.source.name}</a>
                    </div>
                    </div>
                    </div>`
                listaDeNoticias.insertAdjacentHTML('beforeend', card)
            })

        } catch (e) {
            const mainSelector = document.querySelector('main')
            imageNotAccess = `<div style="width:100%; height:100%; align-content:center; display: flex; justify-content: center;"> 
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhSyQxYjddjjdqzn_TpJqNeL6hWwpe91I2A3sd0rLMA&s" 
                                    style="width: 50%; height: 40% "/>
                            </div>`

            mainSelector.insertAdjacentHTML('beforeend', imageNotAccess)
        }       
    }

    const endPoints = [
        'top-headlines?country=br', 
        'top-headlines?country=us'
    ]

})