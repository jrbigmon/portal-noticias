window.addEventListener('load', () => {
    const baseURL = 'https://newsapi.org/v2'
    const token  = '8d7df186bd4f42cf8889135b051dc2a2'
    const config = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const listaDeNoticias = document.querySelector('#listaDeNoticias')
    const getTopNotices = async () => {
        
        try {
            const response = await fetch(`${baseURL}/top-headlines?country=br`, config)
            const data = await response.json()
            console.log(data)
            data.articles.forEach(article => {  
                const card = `<div class="col-3">
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
            console.log(e)
        }
    }
    getTopNotices()
})