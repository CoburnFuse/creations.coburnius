function getAnswer(event){
    event.preventDefault();
    fetch('answers.json')
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const answer = data[randomIndex];

        document.getElementById('theAnswer').innerText = (answer);
        document.getElementById('theForm').reset();
    });
}