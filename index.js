const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['https://images.unsplash.com/photo-1611356729645-45b97b8ec937?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1611348586755-53860f7ae57a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1611318836607-e7f5d1b1fc45?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1611258772963-983f2a2fedad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTQxfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' 
];

img.src = pictures[0];
let position = 0;

moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);