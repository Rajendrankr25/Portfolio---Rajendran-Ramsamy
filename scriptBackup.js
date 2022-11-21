//Portfolio Rajendran Ramasamy

//Layout
const container = document.createElement("div");
container.setAttribute("class", "container");
const row = document.createElement("div");
row.setAttribute("class", "row");

//Navbar

const navBar = document.createElement("nav");
navBar.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-dark");
navBar.innerHTML = `<a class="navbar-brand" href="#">⭐⭐⭐Welcome to My Portfolio!!!⭐⭐⭐</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link active" href="#">About <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="#">Skills & Tools</a>
            <a class="nav-link" href="#">Projects</a>
            <a class="nav-link">Experiance</a>
            <a class="nav-link">Contact</a>
        </div>
    </div>`

//About

const aboutColumn = document.createElement("div");
aboutColumn.setAttribute("class", "col-md-6");
const welcome1 = document.createElement("h1");
welcome1.innerHTML = "Hi!!!, This is Rajendran Ramasamy..."
const aboutColumn2 = document.createElement("div");
aboutColumn2.setAttribute("class", "col-md-6")
const img =


    //Appending

    aboutColumn.append(welcome1);
container.append(row);
document.body.append(navBar, container);