/*Change button on click*/
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.assoc-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
        });
    });
});


/* Initialize function to load content*/
function loadContent(paragraphKey) {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            /* Change the text and title of the page */
            document.getElementById('text').innerText = data[paragraphKey[text]];
            document.getElementById('title').innerText = data[paragraphKey[title]];

            /* Change the image and alt text */
            document.getElementById('image').src = data[paragraphKey[image]];
            document.getElementById('image').alt = data[paragraphKey[alt]];
        })
        .catch(error => console.error('Error loading JSON file:', error));
}