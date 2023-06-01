const formatType = (type: string): string => {
  let color: string;
  
  switch (type) {
    case 'Feu': 
      color = '#fb8c00 orange darken-1'; 
      break; 
    case 'Eau': 
      color = '#42a5f5 blue lighten-1'; 
      break; 
    case 'Plante': 
      color = '#66bb6a green lighten-1'; 
      break; 
    case 'Insecte': 
      color = '#c5e1a5 light-green lighten-3'; 
      break; 
    case 'Normal': 
      color = '#efebe9 brown lighten-5'; 
      break; 
    case 'Vol': 
      color = '#c5cae9 indigo lighten-4'; 
      break; 
    case 'Poison': 
      color = '#ab47bc purple lighten-1'; 
      break; 
    case 'Fée': 
      color = '#f48fb1 pink lighten-3'; 
      break; 
    case 'Psy': 
      color = '#f06292 pink lighten-2'; 
      break; 
    case 'Electrik': 
      color = '#ffd54f amber lighten-2'; 
      break; 
    case 'Combat': 
      color = '#bf360c deep-orange darken-4'; 
      break; 
    case 'Roche': 
      color = '#bcaaa4 brown lighten-3'; 
      break; 
    case 'Sol': 
      color = '#fff8e1 amber lighten-5'; 
      break; 
    case 'Spectre': 
      color = '#4527a0 deep-purple darken-3'; 
      break; 
    case 'Ténèbre': 
      color = '#212121 grey darken-4'; 
      break; 
    case 'Acier': 
      color = '#cfd8dc blue-grey lighten-4'; 
      break; 
    case 'Dragon': 
      color = '#283593 indigo darken-3'; 
      break; 
    case 'Glace': 
      color = '#80d8ff light-blue accent-1'; 
      break; 
    default: 
      color = 'grey'; 
      break; 
  }
  
  return `chip ${color}`;
}

export default formatType