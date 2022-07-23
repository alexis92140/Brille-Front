const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'EUR',
  style: 'currency',
});

export const formatCurrency = (number: number | any) => {
  return CURRENCY_FORMATTER.format(number);
};
