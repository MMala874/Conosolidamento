const prodotti = [
    { "nome": 'T-shirt', "prezzo": 30, "inStock": true }, 
    { "nome": 'Pantaloni', "prezzo": 120, "inStock": false }, 
    { "nome": 'Scarpe', "prezzo": 80, "inStock": true },
    { "nome": 'Giacca', "prezzo": 200, "inStock": true },
    { "nome": 'Cappello', "prezzo": 25, "inStock": false }
  ];
  /* 1)Creare un nuovo array di oggetti che includa il nome e una descrizione che indichi se il prodotto è "Disponibile" 
  o "Non disponibile" usando l'operatore ternario. */
  const prodottiFormattati = prodotti.map(prodotto => `${prodotto.nome} - €${prodotto.prezzo}`); 
  console.table(prodottiFormattati);
  const prodottiInfo = prodotti.map(prodotto => ({
    nome: prodotto.nome,
    descrizione: prodotto.inStock === true ? 'Disponibile' : 'Non disponibile'}));
  console.table(prodottiInfo);
  /* 2)Creare un array di oggetti che includa il nome del prodotto e il prezzo, applicando uno sconto del 20% ai prodotti 
  che costano più di 100€. */
  const prodottiScontati = prodotti.map(prodotto => ({
    nome: prodotto.nome,
    prezzo: prodotto.prezzo > 100 ? prodotto.prezzo-prodotto.prezzo*0.2 : prodotto.prezzo}));
  console.table(prodottiScontati);
  /* 3)Calcolare la somma dei prezzi di tutti i prodotti dopo avere applicato l'eventuale sconto del 20%. */
  const prezzoTot=0;
  const sommaProdottti = prodottiScontati.reduce((prezzoTot, prodotti) => prezzoTot + prodotti.prezzo, 0);
  console.log(sommaProdottti);
  /* 4)Ordinare i prodotti in ordine decrescente di prezzo. */
  const prodottiDecr = prodotti.reverse(prodotti.sort((prodotti1,prodotti2)=>prodotti1.prezzo-prodotti2.prezzo));
  console.log(prodottiDecr)
  /* 5)Separare l'array originale in due distinti array: uno per i prodotti inStock e uno per i prodotti outStock. 
Suggerimento: crea due nuovi array. */
  const prodottiInStock=[];
  const prodottiOutStock=[];
  prodotti.forEach(prodotto=>(
    prodotto.inStock === true ? prodottiInStock.push(prodotto) : prodottiOutStock.push(prodotto)
  ));
  console.table(prodottiInStock);
  console.table(prodottiOutStock);




  

  