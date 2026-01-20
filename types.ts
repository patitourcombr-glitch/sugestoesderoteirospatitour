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