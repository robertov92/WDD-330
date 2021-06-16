document.addEventListener('DOMContentLoaded', () => {
    const player1 = '<p class="font-bold text-7xl text-green-700">X</p>';
    const player2 = '<p class="font-bold text-7xl text-yellow-700">O</p>';
    let player = player1;

    const board = document.getElementById('board');
    const blockArray = Array.from(board.children);

    blockArray.forEach(item => {
        item.addEventListener('click', () => {
            const markThis = document.getElementById(item.id);
            if (player == player1) {
                markThis.innerHTML = player1;
                player = player2;
            } else if (player == player2) {
                markThis.innerHTML = player2;
                player = player1;
            }
        });
    });

    const resetBtn = document.querySelector('button');
    resetBtn.addEventListener('click', () => {
        blockArray.forEach(item => {
            item.innerHTML = '';
        });
        player = player1;
    });
})