
export const parseDate = (timestamp: number) => {
    const date = new Date(timestamp).toLocaleDateString('pt-BR');
    return date
}