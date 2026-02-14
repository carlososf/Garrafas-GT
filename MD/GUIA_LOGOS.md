# 🎨 GUIA COMPLETO - LOGOS E AJUSTES

## 📸 Sistema de Duas Logos

O site agora usa **DUAS LOGOS DIFERENTES** que alternam automaticamente:

### Logo 1: BRANCA (para fundo verde)
**Arquivo:** `/public/logo-white.png`
- **Quando aparece:** No topo da página (fundo verde)
- **Cor:** Logo BRANCA ou em tons claros
- **Formato:** PNG com fundo transparente

### Logo 2: COLORIDA (para fundo branco)
**Arquivo:** `/public/logo-color.png`
- **Quando aparece:** Quando rola a página (fundo branco)
- **Cor:** Logo VERDE ou colorida (versão normal)
- **Formato:** PNG com fundo transparente

## 📏 Tamanho da Logo

### Tamanho Atual
- **Largura:** 240px
- **Altura:** 60px

### Como Ajustar o Tamanho

Abra o arquivo: `components/Header.tsx`

Procure pela linha 40 (aproximadamente):
```tsx
<div className="relative transform..." style={{ width: '240px', height: '60px' }}>
```

**Ajuste os valores:**
```tsx
// Exemplo: Logo maior
style={{ width: '300px', height: '75px' }}

// Exemplo: Logo menor
style={{ width: '180px', height: '45px' }}

// Exemplo: Logo muito grande
style={{ width: '400px', height: '100px' }}
```

### Proporções Recomendadas

Mantenha a proporção **4:1** (largura:altura):
- 200px x 50px
- 240px x 60px ✅ (atual)
- 280px x 70px
- 320px x 80px
- 360px x 90px
- 400px x 100px

## 🎯 Preparando as Logos

### Logo Branca (logo-white.png)
1. Abra sua logo no editor de imagens
2. Converta TODA a logo para BRANCO
3. Mantenha fundo TRANSPARENTE
4. Salve como PNG
5. Coloque em: `/public/logo-white.png`

### Logo Colorida (logo-color.png)
1. Use a logo NORMAL (verde/colorida)
2. Mantenha fundo TRANSPARENTE
3. Salve como PNG
4. Coloque em: `/public/logo-color.png`

## 📐 Especificações Técnicas

### Dimensões Recomendadas
- **Largura:** 800-1200 pixels
- **Altura:** 200-300 pixels
- **Proporção:** 4:1 (horizontal)
- **Resolução:** 72-150 DPI

### Formato
- **Tipo:** PNG
- **Fundo:** Transparente (obrigatório)
- **Tamanho:** Menor que 200KB

### Cores
**Logo Branca:**
- RGB: 255, 255, 255
- Hex: #FFFFFF
- Opacidade: 100%

**Logo Colorida:**
- Use as cores originais da marca
- Verde GT: #00a04e (se aplicável)

## 🔄 Como Funciona a Troca

```
┌─────────────────────────────────────┐
│  NO TOPO (Fundo Verde)              │
│  ═══════════════════                │
│  [LOGO BRANCA] ← Visível            │
│  [LOGO COLORIDA] ← Invisível        │
└─────────────────────────────────────┘

        ↓ USUÁRIO ROLA A PÁGINA ↓

┌─────────────────────────────────────┐
│  ROLADO (Fundo Branco)              │
│  ═══════════════════                │
│  [LOGO BRANCA] ← Invisível          │
│  [LOGO COLORIDA] ← Visível          │
└─────────────────────────────────────┘
```

## ✨ Transição Suave

A troca entre as logos é **SUAVE** com:
- Fade in/out (300ms)
- Sem "pulo" ou "flash"
- Sincronizado com a mudança de cor da navbar

## 🎨 Exemplo de Edição

### Photoshop/GIMP
1. Abra a logo original
2. Para logo branca:
   - Selecione toda a logo
   - Ajuste > Brilho/Contraste > Brilho: +100
   - Ou use Camada > Ajustes > Matiz/Saturação > Luminosidade: +100
3. Salve como PNG com transparência

### Canva
1. Faça upload da logo
2. Clique na logo
3. Para logo branca: Efeitos > Filtro > Monocromático (branco)
4. Baixe como PNG transparente

### Online (Remove.bg + Photopea)
1. Remove.bg - remover fundo
2. Photopea.com - converter para branco
3. Baixar PNG

## 📱 Responsividade

A logo se adapta automaticamente:
- **Desktop:** Tamanho completo (240px)
- **Tablet:** Mantém proporção
- **Mobile:** Reduz levemente se necessário

## ✅ Checklist

- [ ] Logo branca criada e salva em `/public/logo-white.png`
- [ ] Logo colorida criada e salva em `/public/logo-color.png`
- [ ] Ambas com fundo transparente
- [ ] Ambas na mesma proporção (4:1)
- [ ] Tamanho ajustado no código (se necessário)
- [ ] Testado no navegador (topo e rolagem)

## 🚀 Testando

1. Adicione as duas logos nas pastas corretas
2. Abra `http://localhost:3000`
3. Veja a logo BRANCA no topo (fundo verde)
4. Role a página para baixo
5. Veja a logo COLORIDA aparecer (fundo branco)
6. Role para cima novamente
7. Veja a logo BRANCA voltar

---

**Dica:** Se quiser ajustar o tamanho, edite apenas UMA linha no código! 🎯
