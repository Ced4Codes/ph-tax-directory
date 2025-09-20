export type DirectorySection =
  | 'calculators'
  | 'taxpayer-categories'
  | 'forms-library'
  | 'filing-calendar'
  | 'tax-rates'
  | 'faqs';

export interface TaxpayerCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  subcategories: TaxpayerSubcategory[];
}

export interface TaxpayerSubcategory {
  id: string;
  name: string;
  description: string;
  obligations: TaxObligation[];
  forms: string[];
  deadlines: Deadline[];
  requirements: string[];
  examples: string[];
}

export interface TaxObligation {
  type: string;
  description: string;
  rate?: string;
  frequency: 'monthly' | 'quarterly' | 'annually' | 'as-needed';
  dueDate?: string;
}

export interface Deadline {
  description: string;
  date: string;
  frequency: 'monthly' | 'quarterly' | 'annually';
  form?: string;
}

export interface BIRForm {
  formNumber: string;
  title: string;
  description: string;
  category: 'individual' | 'business' | 'withholding' | 'registration' | 'other';
  frequency?: 'monthly' | 'quarterly' | 'annually' | 'as-needed';
  dueDate?: string;
  applicableTo: string[];
  instructions: string[];
  downloadUrl?: string;
  relatedForms?: string[];
}

export interface TaxRate {
  category: string;
  type: string;
  rates: RateBracket[];
  description: string;
  effectiveDate: string;
}

export interface RateBracket {
  min: number;
  max?: number;
  rate: number;
  baseAmount?: number;
  description?: string;
}

export interface FAQ {
  id: string;
  question: string;
  questionFil?: string;
  answer: string;
  answerFil?: string;
  category: string;
  tags: string[];
  relatedForms?: string[];
}