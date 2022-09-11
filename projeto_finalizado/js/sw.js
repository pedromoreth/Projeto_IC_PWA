const cacheName = 'v1'

const resourcesToPrecache = [
    '/',
    'index.html',
    '/img/Inicol.jpg',
    '/img/fundo10.png',
    '/img/Preto.jpg',
    '/img/inicio 2.jpg',
    '/img/reto.png',
    '/img/saia.png',
    '/img/meia_cana.png',
    '/img/meia_esquadria.png',
    '/mg/boleado.png',
    '/img/bisote.png  ',
    '/css/styles.css',
    '/css/barraNavegacao.css',
    '/css/responsive.css',
    '/css/destaques.css',
    '/css/servicos.css',
    '/css/sobreEmpresa.css'
];

self.addEventListener('install', (event) => {
    event.waitUtil(
        caches.open(cacheName)
        .then(cache => (cache.addAll(resourcesToPrecache))),
    );
})

self.addEventListener('fecth', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(cacheResponse => (cacheResponse || fetch(event.request))),
    )
})