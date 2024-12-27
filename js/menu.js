// Seleciona todos os itens de menu com submenu
const menuItems = document.querySelectorAll('.dropdown > a');

// Adiciona o evento de clique para mostrar/esconder o submenu
menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        const submenu = item.nextElementSibling; // O submenu é o próximo irmão do link

        // Verifica se o submenu existe e alterna sua visibilidade
        if (submenu && submenu.classList.contains('submenu')) {
            submenu.classList.toggle('active');
        }
    });
});
