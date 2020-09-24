
export const parseDate = (timestamp: number) => {
    const date = new Date(timestamp).toLocaleDateString('en-GB');
    return date
}