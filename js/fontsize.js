function changeFontSize(action) {
    var linedPaper = document.getElementById("lined-paper");
    var currentSize = parseFloat(window.getComputedStyle(linedPaper).fontSize); // Obtém o tamanho atual da fonte da div com id 'lined-paper'

    if (action === 'increase') {
        linedPaper.style.fontSize = (currentSize * 1.1) + 'px'; // Aumenta o tamanho da fonte em 10%
    } else if (action === 'decrease') {
        linedPaper.style.fontSize = (currentSize * 0.9) + 'px'; // Diminui o tamanho da fonte em 10%
    }
}
