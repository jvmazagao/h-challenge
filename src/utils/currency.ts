
export const formatCurrency = (value: number, currency: string) => {
    const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: currency});
    
    return formatter.format(value);
}