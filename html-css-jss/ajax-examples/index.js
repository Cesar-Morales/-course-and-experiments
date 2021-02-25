const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos")

function addNewDoggo(){
    const promise = fetch(DOG_URL);

    promise
        .then(function(response){
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processingResponse){
            const img = document.createElement('img');
            img.src = processingResponse.message;
            img.alt = 'Nice doggo';
            img.className = 'imgAPI';
            doggos.appendChild(img);
        })
}

document.querySelector('.add-doggo').addEventListener("click", addNewDoggo);