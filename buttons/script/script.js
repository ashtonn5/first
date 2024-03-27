window.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('keydown', function(event) {
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        const button = document.querySelector(`.button[data-key="${event.keyCode}"]`);
        button.classList.add('active');
        audio.play();
        setTimeout(function(){
            button.classList.remove('active');
        }, 100);
    });
    
});