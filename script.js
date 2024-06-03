
let btn = document.getElementById("searchbtn");
let input = document.getElementsByTagName("input")[0];
let searchResults = document.getElementById("searchResults");
const apiKey = "9jWUPuCUkFP5t2m1Yap741kaOl9WX5sn";

btn.addEventListener("click" , function () {
        let q = input.value;
        getImagesUsingXHR (q);
        

})
function getImagesUsingXHR(q) {
    let images = [];

    let xhr = new XMLHttpRequest();
    let url = "https://api.giphy.com/v1/gifs/search?api_key="+ apiKey + "&q=" + q;
    
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            let respText = xhr.responseText;
            let resObj = JSON.parse(respText);

            for(let item of resObj.data){
                images.push(item.images.downsized_medium.url);
            }

         generateImgElements(images);
        }
    }
    xhr.open("GET" , url , true);
    xhr.send();
}

function generateImgElements(imageURLs){
    for(let imageUrl of imageURLs){
        let imgElement = document.createElement("img");
        imgElement.src= imageUrl;
        searchResults.appendChild(imgElement);



    }
}