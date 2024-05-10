
interface FormatCurrencyOptions {
    number?: number;
    locale?: string;
    style?: string;
    currency?: string;
  }
  
  export const formatCurrency = ({
    number = 0,
    locale = 'fr-FR',
    style = 'currency',
    currency = 'EUR',
  }: FormatCurrencyOptions) => {
    return new Intl.NumberFormat(locale, {style, currency}).format(number);
  };
  