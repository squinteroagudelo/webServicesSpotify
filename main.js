// url
let url = "https://api.spotify.com/v1/artists/60d24wfXkVzDSfLS6hyCjZ/top-tracks?country=us";

// objeto Ajax
let ajax = new XMLHttpRequest();

// Conexión
// Definir token
let token = "Bearer BQDKTsPAfyfWddgCnp3YjhyGbaZWjbpjfhuvNjzNK44Geu2y7hni9Ze6Z3-RAgBkq2Orqw7XF92zW3JGroHke-ibDFrQZ3EV11WEtw3f5YFZ_DPy_p_1WTr_nYxSyn_Yfkft8RDQYV3lUb4pDF50p_ea5j3dbts";
// Abrir la conexión
ajax.open('GET', url, true);

// Crear Header
ajax.setRequestHeader('Authorization', token);

// Cargar datos
ajax.onload = function () {
    let respond = JSON.parse(this.responseText);

    let row_cols = document.getElementById('row-cols');
    console.log(respond);

    // Crear los elementos HTML para mostrar la información en cards
    for (track of respond.tracks)
    {
        let col = document.createElement('div');
        col.classList = 'col mb-4';

        let card = document.createElement('div');
        card.classList = 'card h-100';

        let img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = track.album.images[0].url;

        let card_body = document.createElement('div');
        card_body.className = 'card-body';

        let p = document.createElement('p');
        p.classList = 'card-title';
        p.textContent = track.album.name;

        let audio = document.createElement('audio');
        audio.controls = true;
        audio.classList = 'card-deck';
        audio.src = track.preview_url;

        row_cols.appendChild(col);
        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(card_body);
        card_body.appendChild(p);
        card_body.appendChild(audio);
    }
}

// Enviar
ajax.send();

// Ejecutar un auio a la vez
document.addEventListener("play",function(e) {
        var audios = document.getElementsByTagName("audio");
        for (var i = 0, len = audios.length; i < len; i++) {
            if (audios[i] != e.target) {
                audios[i].pause();
                audios[i].currentTime = 0;
            }
        }
    },true
);

const profile_container = document.getElementById('profile-container');
const contact_container = document.getElementById('contact-container');

document.getElementById('link-profile')
    .addEventListener('click', function () {
        profile_container.classList.remove('active-view');
        contact_container.classList.add('active-view');
    });

document.getElementById('link-contact')
    .addEventListener('click', function () {
        contact_container.classList.remove('active-view');
        profile_container.classList.add('active-view');
    });