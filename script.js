document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamisches Jahr im Footer / Impressum setzen
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Modal schließen & Raute (#) aus der URL entfernen
    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Verhindert das Standard-Anspringen

            // 1. URL kurz auf einen nicht existierenden Anker setzen, damit CSS :target verliert
            window.location.hash = '_';

            // 2. Sofort danach die Raute komplett & sauber aus der Adresszeile entfernen
            history.pushState("", document.title, window.location.pathname + window.location.search);
        });
    });

});