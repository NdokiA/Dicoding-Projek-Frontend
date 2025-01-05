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


/*Replace title*/
function replaceTitle(title){
    document.getElementById('assoc-title').innerHTML = title;
}

function replaceImage(imagePath, altText){
    let imageElement = document.getElementById('assoc-image');
    imageElement.src = imagePath;
    imageElement.alt = altText;
}

function replaceText(textPath){
    fetch(textPath)
        .then(response => response.text())
        .then(text => {
            const formattedText = text.replace(/\n/g, '<br>');
            document.getElementById('assoc-texts').innerHTML = formattedText;
        })
        .catch(error => console.error(error));
}

/*Replace All Content*/
function replaceAllContent(paragraphKey){
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            const content = data[paragraphKey];
            replaceTitle(content.title);
            replaceImage(content.image, content.alt);
            replaceText(content.text);
        })
        .catch(error => console.error(error));
}