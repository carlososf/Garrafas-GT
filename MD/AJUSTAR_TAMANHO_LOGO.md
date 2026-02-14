# 🎯 GUIA RÁPIDO - AJUSTAR TAMANHO DAS LOGOS

## ⚡ SUPER FÁCIL - Edite APENAS 1 Arquivo!

Abra o arquivo: **`app/globals.css`**

Procure pelas linhas 16-19 (no topo do arquivo):

```css
/* TAMANHOS DA LOGO - AJUSTE AQUI! */
--logo-navbar-width: 240px;    /* Tamanho da logo na navbar */
--logo-navbar-height: 60px;
--logo-hero-width: 500px;      /* Tamanho da logo GRANDE no Hero */
--logo-hero-height: 125px;
```

## 📏 Como Ajustar

### Logo da NAVBAR (topo da página)

**Tamanho atual:** 240px x 60px

**Para aumentar:**
```css
--logo-navbar-width: 300px;
--logo-navbar-height: 75px;
```

**Para diminuir:**
```css
--logo-navbar-width: 180px;
--logo-navbar-height: 45px;
```

### Logo GRANDE do HERO (centralizada no verde)

**Tamanho atual:** 500px x 125px

**Para aumentar:**
```css
--logo-hero-width: 600px;
--logo-hero-height: 150px;
```

**Para MUITO maior:**
```css
--logo-hero-width: 800px;
--logo-hero-height: 200px;
```

**Para diminuir:**
```css
--logo-hero-width: 400px;
--logo-hero-height: 100px;
```

## 🎨 Proporções Recomendadas

Mantenha sempre a proporção **4:1** (largura : altura):

| Largura | Altura | Tamanho |
|---------|--------|---------|
| 200px   | 50px   | Pequeno |
| 240px   | 60px   | Médio (navbar atual) |
| 300px   | 75px   | Grande |
| 400px   | 100px  | Muito Grande |
| 500px   | 125px  | Extra Grande (hero atual) |
| 600px   | 150px  | Gigante |
| 800px   | 200px  | Enorme |

## ✅ Exemplo Completo

Se você quiser:
- **Navbar:** Logo maior (300px)
- **Hero:** Logo GIGANTE (700px)

Edite assim:

```css
:root {
  --color-primary: #00a04e;
  --color-primary-dark: #008040;
  --color-primary-light: #1ab167;
  --color-white: #ffffff;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-900: #111827;
  
  /* TAMANHOS DA LOGO - AJUSTE AQUI! */
  --logo-navbar-width: 300px;    /* ← AUMENTEI */
  --logo-navbar-height: 75px;    /* ← AUMENTEI */
  --logo-hero-width: 700px;      /* ← AUMENTEI MUITO */
  --logo-hero-height: 175px;     /* ← AUMENTEI MUITO */
}
```

## 🚀 Salve e Veja!

1. Edite os valores em `app/globals.css`
2. Salve o arquivo (Ctrl + S)
3. O site recarrega automaticamente
4. Veja as logos no novo tamanho!

## 📍 Onde as Logos Aparecem

### Logo NAVBAR (pequena)
- **Localização:** Topo da página (header fixo)
- **Quando:** SEMPRE visível
- **Cores:** 
  - Branca no topo (fundo verde)
  - Colorida ao rolar (fundo branco)

### Logo HERO (grande)
- **Localização:** Centro da seção verde
- **Quando:** Só no TOPO da página
- **Efeito:** Desaparece ao rolar para baixo
- **Cor:** BRANCA (logo-white.png)

## 💡 Dicas

✅ **Navbar:** Não deixe muito grande (max 400px) senão não cabe no mobile
✅ **Hero:** Pode ser BEM grande! (até 1000px se quiser)
✅ **Proporção:** Sempre mantenha 4:1 para não distorcer
✅ **Mobile:** As logos se adaptam automaticamente

---

**É SÓ ISSO! Edite 4 números e pronto! 🎉**
