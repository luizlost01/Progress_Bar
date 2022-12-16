addEventListener('DOMContentLoaded', () => {
    let progress = 1
    let progress_bar = document.getElementById('bar')

    const updater = setInterval(() => {
        progress_bar.value += progress
        if(progress_bar.value == 100) {
            clearInterval(updater)
            window.location.replace('login.html')
        }
    }, 100);
})

