export interface ProductCardProps {
  id: string;
  name: string;
  chemicalName: string;
  tagline: string;
  description: string;
  isFlagship?: boolean;
  buttonText: string;
  storeUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}
