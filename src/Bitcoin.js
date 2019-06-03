import React, { Component } from 'react';
import "./Bitcoin.css";

class Bitcoin extends Component {
  constructor(props) {
    super(props);      /* Appel du constructeur de Component */
    let delai=30000;   /* Délai entre Ajax de 30 secondes par défaut */
    if (props.delai) { /* Si la propriété delai est définie */
      delai=parseInt(props.delai, 10);
    }
    this.state = {
      delai: delai, 
      nbAjax: 0
    };
    console.log("Delai entre appels AJAX de "+this.state.delai+" ms");
  } 
  
  componentDidMount() { /* Déclenchée quand le composant est créé dans le DOM */
    this.callAjax(); /* Appel Ajax immédiat */
    setInterval(() => this.callAjax(), this.state.delai);  /* Appel récurrent */
  }
  
  componentDidUpdate(prevProps, prevState) { /* Déclenché quand le composant est modifié */
    console.log("Une propriété a été modifiée : nouveau render()");
    this.render();
  }
 
  formatMontant(m) { /* Méthode de formatage du montant */
    var intlN=new Intl.NumberFormat();
    return intlN.format(m);
  }
  
  callAjax() { /* Méthode pour l'appel Ajax au service externe */
    fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          EUR: result.EUR,
          nbAjax: this.state.nbAjax+1,
          dtMaj: (new Date()).getTime()
        });
      },
      (error) => {
      console.log("Erreur d'appel AJAX");
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }
  
  render() { /* Affichage dans le DOM */
    let cours="Recherche";
    if (typeof this.state.EUR !==undefined) {
      cours=this.state.EUR;
    }
    return (
      <div id="Bitcoin">{this.formatMontant(cours)} &euro;</div>
    );
  }
}

export default Bitcoin;