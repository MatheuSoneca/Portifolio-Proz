document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Verifica se o usuário já tem uma preferência salva
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.remove("dark-mode", "light-mode");
        body.classList.add(savedTheme);
    } else {
        body.classList.add("dark-mode"); // Tema escuro por padrão
    }

    // Atualiza o texto do botão
    updateButtonText();

    themeToggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        // Salva a preferência do usuário
        const newTheme = body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
        localStorage.setItem("theme", newTheme);

        updateButtonText();
    });

    function updateButtonText() {
        themeToggleButton.textContent = body.classList.contains("dark-mode") 
            ? "Modo Claro" 
            : "Modo Escuro";
    }
});