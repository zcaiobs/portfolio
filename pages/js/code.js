const search = async () => {
    return await fetch('https://api.github.com/users/zcaiobs/repos').then(res => res.json())
        .catch(err => console.log('Erro', err));
}

const elemento = document.getElementById('repos');

search().then(res => {
    res.map(item => {
        let date = new Date(item.created_at);
        elemento.insertAdjacentHTML('beforeend', `<div class="tiles"><a href="${item.svn_url}">
        <div class="repo"><h1>Project: ${item.name}</h1>
        <li>Language: ${item.language}</li>
        <li>★: ${item.forks}</li>
        <li>Created: ${date.getDate()}/${date.getMonth() + 1 < 10 ?
                '0' + (date.getMonth() + 1)
                : date.getMonth() + 1}/${+date.getFullYear()}</li>
        <li>Repository: zcaiobs/${item.name}</li></div>
        </a></div>`);

    });
});


