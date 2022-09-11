if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((reg) => {
                console.log('Registrado o service work', reg)
            }).catch((err) => {
                console.log('Deu erro ai.', err)
            })
    });
}