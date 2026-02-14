# Como Adicionar a Logo PNG da Empresa

## Passo a Passo

1. **Localize o arquivo da logo** que você enviou (a imagem verde com "GT Plásticos GT")

2. **Salve a logo** no seguinte local:
   ```
   c:\Users\acscc\Desktop\garoto de programa\GARRAFAS GT\public\logo.png
   ```

3. **Substitua** o arquivo vazio `logo.png` que está lá pela sua logo real

4. **Pronto!** O site irá carregar automaticamente a logo em:
   - Header (topo do site)
   - Footer (rodapé)

## Recomendações de Formato

Para melhor performance e qualidade:

- **Formato:** PNG com fundo transparente (recomendado) ou fundo branco/verde
- **Dimensões recomendadas:** 400x120 pixels (proporção 3:1)
- **Tamanho do arquivo:** Menor que 100KB
- **Resolução:** 72-150 DPI

## Onde a Logo Aparece

✅ **Header:** 
- Tamanho: 160px de largura x 48px de altura
- Posição: Canto superior esquerdo
- Efeito: Aumenta levemente ao passar o mouse

✅ **Footer:**
- Tamanho: 192px de largura x 56px de altura  
- Posição: Primeira coluna do rodapé
- Cor de fundo: Fundo escuro (gray-900)

## Otimização Automática

O Next.js irá automaticamente:
- Converter para WebP/AVIF (formatos modernos)
- Criar versões responsivas
- Fazer lazy loading quando apropriado
- Otimizar o tamanho do arquivo

## Testando

Após adicionar a logo:
1. O servidor dev já está rodando em `http://localhost:3000`
2. A página irá recarregar automaticamente
3. Você verá a logo aparecer no header e footer

---

**Nota:** Se a logo não aparecer imediatamente, pressione `Ctrl + F5` no navegador para forçar o recarregamento.
