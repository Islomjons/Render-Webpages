let elUniWrapper = document.querySelector(".uni__wrapper");
let elTempalteUni = document.querySelector("#uni__template").content;

function renderUniversities(array, wrapper) {
    wrapper.innerHTML = null;
    let fragment = document.createDocumentFragment();

    for (const item of array) {
        let uniItem = elTempalteUni.cloneNode(true);
        uniItem.querySelector(".uni__name").textContent = item.name;
        uniItem.querySelector(".uni__link").textContent = item.web_pages[0];
        uniItem.querySelector(".uni__link").href = item.web_pages[0]
        uniItem.querySelector(".uni__link").setAttribute("target", "_blank");
        fragment.appendChild(uniItem)
    }
    wrapper.appendChild(fragment)
}

fetch("http://universities.hipolabs.com/search?country=United States")
    .then(response => response.json())
    .then(data => {
        data.sort(function(a, b) {
           if(a.name > b.name){
               return 1
           }else if (a.name > b.name) {
               return -1
           }else{
               return 0
           }
        })
        renderUniversities(data, elUniWrapper)
    });













    // fetch("http://universities.hipolabs.com/search?country=Uzbekistan")
//     .then(function(response) {
//         return response.json()
//     }).then(function(data) {
//         console.log(data);
//     })

