// Helper para adicionar basePath nas imagens
export function getImagePath(path: string): string {
    const basePath = process.env.NODE_ENV === 'production' ? '/GARRAFAS-GT' : '';
    return `${basePath}${path}`;
}
