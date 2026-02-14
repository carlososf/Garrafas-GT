# 🎨 Como Adicionar o GIF da Garrafa 3D

## 📍 Localização do Arquivo

Adicione seu GIF animado da garrafa PET 3D no seguinte local:

```
c:\Users\acscc\Desktop\garoto de programa\GARRAFAS GT\public\bottle-3d.gif
```

## ✨ Especificações Recomendadas

### Formato
- **Tipo:** GIF animado ou MP4 (GIF preferido para compatibilidade)
- **Fundo:** Transparente (ideal) ou que combine com o verde

### Dimensões
- **Largura:** 600-800 pixels
- **Altura:** 800-1000 pixels
- **Proporção:** Vertical (retrato)
- **Orientação:** Garrafa centralizada, girando em 360°

### Tamanho do Arquivo
- **Ideal:** Menor que 2MB
- **Máximo:** 5MB
- **Otimização:** Use ferramentas como ezgif.com para comprimir

### Conteúdo Visual
- ✅ Garrafa PET em 3D
- ✅ Rotação 360° suave
- ✅ Boa iluminação
- ✅ Detalhes visíveis (tampa, rótulo, etc.)
- ✅ Loop contínuo

## 🎯 Onde Aparece

O GIF será exibido:
- **Posição:** Lado DIREITO da página inicial (Hero)
- **Tamanho:** 600px de altura
- **Efeito:** Animação de flutuação suave
- **Fundo:** Verde degradê da Plásticos GT

## 🔄 Alternativas ao GIF

Se preferir usar vídeo MP4 (melhor performance):

1. Renomeie o arquivo para `bottle-3d.mp4`
2. Atualize o código em `components/Hero.tsx`:
   - Linha 106: Troque `<img>` por `<video>`
   - Adicione: `autoPlay loop muted playsInline`

## 🎨 Sugestões de Criação

### Ferramentas Online
- **Spline** (spline.design) - Criar 3D no navegador
- **Blender** - Software 3D gratuito e profissional
- **Canva** - Templates prontos de garrafas

### Serviços de Animação 3D
- Fiverr (busque "3D bottle animation")
- Upwork
- 99designs

### Exemplo de Busca
Google: "3D PET bottle rotating GIF transparent background"

## 📱 Responsividade

O GIF se adapta automaticamente:
- **Desktop:** Lado direito, 600px altura
- **Tablet:** Abaixo do texto, centralizado
- **Mobile:** Reduzido, mantém proporção

## ✅ Testando

Após adicionar o GIF:

1. Salve o arquivo em `/public/bottle-3d.gif`
2. O site recarrega automaticamente
3. Veja o GIF girando no lado direito do Hero
4. Se não aparecer, pressione `Ctrl + F5`

## 🎭 Fallback

Se o GIF não for encontrado, aparecerá:
- Ícone de garrafa (🍾)
- Mensagem: "Adicione seu GIF em: /public/bottle-3d.gif"
- Fundo com efeito glass

---

**Dica:** Enquanto não tiver o GIF, o site mostrará um placeholder elegante! 🎨
