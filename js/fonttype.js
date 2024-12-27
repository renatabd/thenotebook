function changeFontFamily() {
    // Obtemos a fonte selecionada
    var selectedFont = document.getElementById("fontSelector").value;

    // Aplicamos a fonte à div
    document.getElementById("lined-paper").style.fontFamily = selectedFont;
}