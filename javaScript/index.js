function viewList() {
    var displayValue = document.getElementById('list').style.display;
    if (displayValue === "none")
        document.getElementById('list').style.display = "block";
    else
        document.getElementById('list').style.display = "none";
}