        // Função para alterar o fundo para a imagem selecionada
        function changeBackgroundImage() {
            const imageUrl = document.getElementById('backgroundSelector').value;
            document.body.style.backgroundImage = imageUrl;
        }

        // Adiciona o evento de mudança ao seletor de imagem
        document.getElementById('backgroundSelector').addEventListener('change', changeBackgroundImage);