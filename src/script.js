addEventListener('DOMContentLoaded', () => {
    let progress = 1
    let progress_bar = document.getElementById('bar')

    setInterval(() => {
        progress_bar.value += progress
        if(progress_bar.value == 100) {
            console.log('yepp')
        }
    }, 100);
})

