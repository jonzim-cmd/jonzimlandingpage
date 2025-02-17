// Ladebalken-Berechnung
function calculateProgress() {
    const startDate = new Date("2025-02-15"); // 15. Februar 2025
    const endDate = new Date("2025-06-30"); // Enddatum
    const totalDuration = endDate - startDate;
    const elapsedDuration = new Date() - startDate;
    
    let progress = (elapsedDuration / totalDuration) * 100;
    if (progress > 100) progress = 100;
    document.getElementById("progress-bar").style.width = progress + "%";
    document.getElementById("progress-bar").textContent = Math.floor(progress) + "%";
    
    if (progress < 100) {
        setTimeout(calculateProgress, 86400000); // Update einmal pro Tag
    } else {
        document.getElementById("status-text").textContent = "Download completed. Antonia is back!";
    }
}
calculateProgress();

// Administrator-Prozess starten
function startAdminProcess() {
    const terminal = document.getElementById("terminal");
    terminal.style.display = "block";
    terminal.innerHTML = "<p>> Kontaktaufnahme mit Admin...</p>";
    
    const messages = [
        "> Pinging admin...",
        "> Keine Antwort. Versuche erneut...",
        "> Verbindung aufgebaut...",
        "> Fehler 504: Support ist ebenfalls offline.",
        "> Versuche alternative Methode...",
        "> Tipp: Warum nicht die Zeit nutzen und einen guten Kriegsfilm schauen?",
        "> Pinging admin erneut...",
        "> Der Admin hat wohl eine Nachricht hinterlassen... Es scheint, als ob er etwas vermisst. Wahrscheinlich sind Sie bald wieder verbunden."
    ];
    
    let index = 0;
    function showNextMessage() {
        if (index < messages.length) {
            terminal.innerHTML += `<p>${messages[index]}</p>`;
            index++;
            setTimeout(showNextMessage, 1500);
        }
    }
    showNextMessage();
}
