import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  icon?: LucideIcon;
  id: string;
  subHeader?: boolean;
}

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeatureItemProps {
  text: string;
}

export interface RouteCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export type ItineraryCategory =
  | 'maternal'
  | 'fundamental1'
  | 'fundamental2'
  | 'ensinoMedio';

export interface ItineraryItem {
  id?: string;
  title: string;
  description: string;
  site: string;
  category: ItineraryCategory;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export const CATEGORY_LABELS: Record<ItineraryCategory, string> = {
  maternal: 'Maternal/Jd 1 & 2',
  fundamental1: 'Fundamental 1',
  fundamental2: 'Fundamental 2',
  ensinoMedio: 'Ensino Médio',
};