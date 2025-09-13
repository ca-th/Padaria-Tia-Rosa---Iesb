document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();

    const navButtons = document.querySelectorAll('.nav-button');
    const screens = document.querySelectorAll('.screen');
    const contentArea = document.querySelector('.app-content');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            navButtons.forEach(btn => btn.classList.remove('active'));
            screens.forEach(screen => screen.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(targetId).classList.add('active');
            contentArea.scrollTop = 0;
        });
    });

    const formPedido = document.getElementById('form-pedido');
    const modal = document.getElementById('confirmation-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    formPedido.addEventListener('submit', function(event) {
        event.preventDefault();
        modal.classList.add('visible');
        formPedido.reset();
    });

    function closeModal() {
        modal.classList.remove('visible');
    }

    closeModalBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});

