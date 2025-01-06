
document.addEventListener('DOMContentLoaded', () => {
    const renderMfeButton = document.getElementById('renderMfeButton');
    const mfeContainer = document.getElementById('mfeContainer');

    renderMfeButton.addEventListener('click', () => {
        mfeContainer.innerHTML = '';

        const helloWorld = document.createElement('hello-world');
        mfeContainer.appendChild(helloWorld);
    });
});
