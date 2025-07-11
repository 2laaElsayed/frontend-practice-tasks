var Data = [];
async function getNews(category) {
    var response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=95bb02b56bae46e59dc3704259720de3`);
    var finalResult = await response.json();
    
    for (var j = 0; j < finalResult.articles.length; j++) {
        finalResult.articles[j].category = category;
        Data.push(finalResult.articles[j]);
    }
    displayItems();
    console.log(Data);
};
(async function () {
    await getNews('health');
    await getNews('sports');
    await getNews('science');
    await getNews('business');
})();

function displayItems() {
    var display = ``;
    for (var i = 0; i < Data.length; i++) {
        display += `
            <div class="card col-md-4 border text-center ">
                <h6>${'About '+ Data[i].category}</h6>
                <h6>${Data[i].title }</h6>
                <p>${Data[i].description}</p>
            </div>  
        `;
    }
    document.getElementById('rowData').innerHTML = display;
}

