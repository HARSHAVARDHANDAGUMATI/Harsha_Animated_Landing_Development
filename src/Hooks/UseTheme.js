import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContextValue';

export function useTheme() {
  return useContext(ThemeContext);
}
