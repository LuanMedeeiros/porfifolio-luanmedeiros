document.addEventListener('DOMContentLoaded', function () {
    const acordeons = document.querySelectorAll('.acordeon');

    acordeons.forEach(acordeon => {
        const trigger = acordeon.querySelector('.trigger');

        // Certifique-se de que a classe 'open' não está presente inicialmente
        acordeon.classList.remove('open');

        // Adicione um evento de clique ao gatilho
        trigger.addEventListener('click', function () {
            // Alternar a classe 'open' no acordeon clicado
            acordeon.classList.toggle('open');
        });
    });
});
