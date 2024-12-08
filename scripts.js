document.getElementById('form-commande').addEventListener('submit', function(event) {
    event.preventDefault();

    const quantite = document.getElementById('quantite').value;
    const stockActuel = parseInt(document.getElementById('stock-actuel').textContent.replace('L', '').trim());
    
    // Met à jour le stock après l'ajout
    const nouveauStock = stockActuel + parseInt(quantite);
    document.getElementById('stock-actuel').textContent = `${nouveauStock}L`;
    
    // Réinitialise le formulaire
    this.reset();
    alert('Commande ajoutée avec succès !');
});
