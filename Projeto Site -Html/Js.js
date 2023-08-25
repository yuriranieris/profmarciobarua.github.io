const products = {
    "notebooks": true,
    "computadores": true,
    "hardwares": true,
    "monitores": false,
    "periféricos": true,
    "games": false,
    "pc gamer": true,
    "ps5": false,
    "xbox": true,
    "teclado": true,
    "mouse": false,
};
function searchProduct() {
    const inputElement = document.getElementById("searchInput");
    const productName = inputElement.value.toLowerCase();

    const resultElement = document.getElementById("result");
    if (productName in products) {
        const isAvailable = products[productName];
        const availabilityText = isAvailable ? "disponível" : "indisponível";
        resultElement.textContent = `O produto "${productName}" está ${availabilityText}.`;
    } else {
        resultElement.textContent = `O produto "${productName}" não foi encontrado.`;
    }
}
