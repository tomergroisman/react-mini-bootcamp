export interface Pokemon {
  name: string;
  id: number;
  img: string;
  base_experience: number;
  types: string[];
  height: number;
  weight: number;
  stats: Stat[];
}

interface Stat {
  name: string;
  base_stat: number;
}
