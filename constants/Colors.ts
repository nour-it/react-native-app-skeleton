function getLighterColor(hexColor: string, lightenFactor = 0.5) {
  // Remove # if present
  hexColor = hexColor.replace('#', '');
  
  // Convert hex to RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);
  
  // Lighten each component
  const lighterR = Math.min(255, Math.floor(r + (255 - r) * lightenFactor));
  const lighterG = Math.min(255, Math.floor(g + (255 - g) * lightenFactor));
  const lighterB = Math.min(255, Math.floor(b + (255 - b) * lightenFactor));
  
  // Convert back to hex
  return `#${lighterR.toString(16).padStart(2, '0')}${lighterG.toString(16).padStart(2, '0')}${lighterB.toString(16).padStart(2, '0')}`;
}


function getDarkerColor(hexColor: string, darkenFactor = 0.7) {
  // Remove # if present
  hexColor = hexColor.replace('#', '');
  
  // Convert hex to RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);
  
  // Darken each component
  const darkerR = Math.floor(r * darkenFactor);
  const darkerG = Math.floor(g * darkenFactor);
  const darkerB = Math.floor(b * darkenFactor);
  
  // Convert back to hex
  return `#${darkerR.toString(16).padStart(2, '0')}${darkerG.toString(16).padStart(2, '0')}${darkerB.toString(16).padStart(2, '0')}`;
}

const colors = {
  white: "#FFFFFF",
  black: "#00022e",
  blue: "#0C6FCC",
  green: "#0bff80",
  yellow: "#ffcb00",
  pink: "#CC0C4F",

}

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export default {
  ...colors,    
  primary: colors.pink,
  primaryDark: getDarkerColor(colors.pink),
  primaryLight: getLighterColor(colors.pink),
  secondary: colors.yellow,
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    ripple: '#68707659',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    ripple: '#ECEDEE11',
  },
}

