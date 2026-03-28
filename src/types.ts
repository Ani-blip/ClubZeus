export interface Player {
  id: string;
  name: string;
  points: number;
  status: 'Líder' | 'Estable' | 'Pendiente' | 'En desarrollo';
  position: number;
  created_at?: string;
}

export interface UserProfile {
  id: string;
  role: 'admin' | 'user';
  email: string;
}
