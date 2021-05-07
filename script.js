window.onload = init;
function init() {
    let images = document.getElementsByTagName("img"); // hämtar alla element som har tagName <img>
    for(let i = 0; i < images.length; i++) { // går igenom alla element
        images[i].onmouseover = showAnswer; 
        images[i].onmouseout = reblur; // här för varje element <img> kommer showAnswer function att köras 
    } 
} // när man trycker på bilden skapas det ett event det evenet skickas sedan till en function som är nedan 

// här sänds eventObject till den här functionen 
function showAnswer(eventObject) {
    let image = eventObject.target;

    let name = image.id; // varje img med id blir name
    name = name + ".jpg"; // name här är name blir id namn + sätts jpg på slutet
    image.src = name; // image src blir namn, som just nu är tex one.jpg och motsvarar en img som finns i mappen.

}

// samma sak här, functionen tar emot eventObjectet 
function reblur(eventObject) {
    let image = eventObject.target;
    let name = image.id; 
    name = name + "blur.jpg";
    image.src = name; 
}
