# Como Adicionar Fotos da Empresa e Logos de Clientes

## 📸 Fotos da Empresa (Seção "Sobre Nós")

### Localização
As fotos da empresa aparecem na seção **"Sobre Nós"** (Institucional), no carrossel "Nossa Estrutura".

### Onde colocar as imagens
Crie a pasta e adicione as fotos:
```
public/images/
├── fabrica-1.jpg
├── fabrica-2.jpg
├── fabrica-3.jpg
└── fabrica-4.jpg
```

### Tipos de fotos recomendadas
1. **fabrica-1.jpg** - Vista externa da fábrica
2. **fabrica-2.jpg** - Linha de produção em funcionamento
3. **fabrica-3.jpg** - Ferramentaria/Equipamentos
4. **fabrica-4.jpg** - Equipe técnica ou produtos

### Especificações técnicas
- **Formato:** JPG, PNG ou WebP
- **Proporção:** 16:9 (landscape)
- **Resolução recomendada:** 1280x720px ou superior
- **Tamanho máximo:** 500KB por imagem (para melhor performance)

### Como otimizar as imagens
Use ferramentas online gratuitas:
- [TinyPNG](https://tinypng.com/) - Compressão sem perda de qualidade
- [Squoosh](https://squoosh.app/) - Conversor e otimizador

---

## 🏢 Logos de Clientes (Carrossel de Clientes)

### Localização
Os logos aparecem na seção **"Empresas que Confiam em Nós"**, após os Diferenciais.

### Onde colocar as imagens
Crie a pasta e adicione os logos:
```
public/images/clients/
├── client-1.png
├── client-2.png
├── client-3.png
├── client-4.png
├── client-5.png
├── client-6.png
├── client-7.png
└── client-8.png
```

### Especificações técnicas
- **Formato:** PNG (com fundo transparente) ou SVG
- **Proporção:** Horizontal (landscape)
- **Dimensões recomendadas:** 200x80px
- **Tamanho máximo:** 100KB por logo
- **Fundo:** Transparente (PNG) ou branco

### Dicas para logos
1. **Fundo transparente** é ideal para melhor integração
2. **Logos em preto/cinza** funcionam melhor (o site aplica grayscale)
3. **Qualidade vetorial** (SVG) é preferível quando possível
4. **Nomes descritivos** facilitam a organização

---

## 🔧 Como Adicionar Mais Fotos/Logos

### Adicionar mais fotos da empresa

Edite o arquivo: `components/Institutional.tsx`

Localize o array `companyPhotos` (linha ~9) e adicione:

```typescript
const companyPhotos = [
    { url: '/images/fabrica-1.jpg', alt: 'Fábrica Plásticos GT - Vista Externa' },
    { url: '/images/fabrica-2.jpg', alt: 'Linha de Produção' },
    { url: '/images/fabrica-3.jpg', alt: 'Ferramentaria' },
    { url: '/images/fabrica-4.jpg', alt: 'Equipe Técnica' },
    // Adicione mais aqui:
    { url: '/images/fabrica-5.jpg', alt: 'Descrição da foto 5' },
];
```

### Adicionar mais logos de clientes

Edite o arquivo: `components/ClientsCarousel.tsx`

Localize o array `clients` (linha ~10) e adicione:

```typescript
const clients = [
    { name: 'Cliente 1', logo: '/images/clients/client-1.png' },
    { name: 'Cliente 2', logo: '/images/clients/client-2.png' },
    // ... clientes existentes ...
    { name: 'Cliente 9', logo: '/images/clients/client-9.png' }, // Novo cliente
];
```

---

## 📁 Estrutura de Pastas Completa

```
public/
└── images/
    ├── fabrica-1.jpg          # Foto da empresa 1
    ├── fabrica-2.jpg          # Foto da empresa 2
    ├── fabrica-3.jpg          # Foto da empresa 3
    ├── fabrica-4.jpg          # Foto da empresa 4
    └── clients/
        ├── client-1.png       # Logo cliente 1
        ├── client-2.png       # Logo cliente 2
        ├── client-3.png       # Logo cliente 3
        ├── client-4.png       # Logo cliente 4
        ├── client-5.png       # Logo cliente 5
        ├── client-6.png       # Logo cliente 6
        ├── client-7.png       # Logo cliente 7
        └── client-8.png       # Logo cliente 8
```

---

## ✅ Checklist de Implementação

### Fotos da Empresa
- [ ] Criar pasta `public/images/`
- [ ] Adicionar 4 fotos da empresa (fabrica-1.jpg até fabrica-4.jpg)
- [ ] Otimizar imagens (reduzir tamanho)
- [ ] Testar carrossel no navegador

### Logos de Clientes
- [ ] Criar pasta `public/images/clients/`
- [ ] Adicionar 8 logos de clientes (client-1.png até client-8.png)
- [ ] Garantir fundo transparente nos PNGs
- [ ] Testar carrossel no navegador

---

## 🎨 Placeholder Temporário

Enquanto não tiver as imagens reais, o sistema usa **placeholders automáticos**:
- **Fotos da empresa:** Fundo verde com texto "Foto da Empresa"
- **Logos de clientes:** Fundo cinza com nome do cliente

Isso permite testar a funcionalidade antes de ter as imagens finais.

---

## 🚀 Testando

Após adicionar as imagens:

1. Salve os arquivos
2. Atualize o navegador (Ctrl + F5)
3. Navegue até a seção "Sobre Nós" para ver o carrossel de fotos
4. Role até "Empresas que Confiam em Nós" para ver os logos

---

**Desenvolvido para Plásticos GT** 💚
