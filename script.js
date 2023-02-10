let loadingPage = document.getElementById("loadingPage")

for (let i = 0; i < 9; i++) {

    let ghosty = document.createElement("div");
    ghosty.classList.add("ghost");
    ghosty.setAttribute("id", `g${i}`)
    loadingPage.append(ghosty);

}