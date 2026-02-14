# 🎥 Como Adicionar o Vídeo da Empresa

## 📍 Localização dos Arquivos

Você precisa adicionar 2 arquivos na pasta `public`:

```
c:\Users\acscc\Desktop\garoto de programa\GARRAFAS GT\public\
├── company-video.mp4      ← Vídeo principal (formato MP4)
├── company-video.webm     ← Vídeo alternativo (formato WebM) - OPCIONAL
└── video-thumbnail.jpg    ← Imagem de capa do vídeo
```

## 🎬 Especificações do Vídeo

### ⚡ IMPORTANTE: Vídeo em Loop Automático

O vídeo está configurado para:
- ✅ **Reproduzir automaticamente** quando a página carrega
- ✅ **Loop infinito** (repete continuamente)
- ✅ **SEM ÁUDIO** (muted)
- ✅ **Efeito de flutuação** suave
- ✅ **Design leve e minimalista**

### Vídeo Principal (MP4)

**Formato:** MP4 (H.264)
**Resolução recomendada:** 1920x1080 (Full HD)
**Proporção:** 16:9 (widescreen)
**Duração:** 1-3 minutos (ideal)
**Tamanho máximo:** 50MB (para melhor performance)
**Codec de vídeo:** H.264
**Codec de áudio:** AAC

### Thumbnail (Imagem de Capa)

**Formato:** JPG ou PNG
**Resolução:** 1920x1080 pixels
**Proporção:** 16:9
**Tamanho:** Menor que 500KB
**Conteúdo:** Frame representativo do vídeo ou design customizado

## 📝 Conteúdo Sugerido para o Vídeo

O vídeo deve mostrar:

1. **Fábrica e Instalações** (0-30s)
   - Vista externa da empresa
   - Área de produção
   - Maquinário moderno

2. **Processo de Fabricação** (30s-1:30min)
   - Sopro de garrafas PET
   - Injeção de tampas
   - Controle de qualidade
   - Ferramentaria própria

3. **Produtos e Aplicações** (1:30min-2:00min)
   - Showcase de produtos
   - Diferentes segmentos atendidos
   - Projetos especiais

4. **Equipe e Valores** (2:00min-2:30min)
   - Colaboradores trabalhando
   - Certificações
   - Compromisso com qualidade

5. **Call to Action** (2:30min-3:00min)
   - Informações de contato
   - Convite para visita

## 🎨 Dicas de Produção

### Se Você Ainda Não Tem o Vídeo:

1. **Grave com Smartphone:**
   - Use modo paisagem (horizontal)
   - Boa iluminação natural
   - Estabilize a câmera (tripé ou apoio)

2. **Edição Simples:**
   - Use apps gratuitos: CapCut, InShot, DaVinci Resolve
   - Adicione música de fundo (sem copyright)
   - Insira textos explicativos

3. **Música de Fundo:**
   - Sites gratuitos: YouTube Audio Library, Pixabay Music
   - Volume baixo (não deve sobrepor narração)

### Se Você Já Tem o Vídeo:

**Converter para MP4 (se necessário):**
- Use: HandBrake (gratuito)
- Preset: "Web" ou "Fast 1080p30"
- Formato: MP4 (H.264)

**Reduzir Tamanho (se muito grande):**
- Use: HandBrake ou CloudConvert
- Qualidade: RF 23-28 (menor = melhor qualidade)
- Resolução: Máximo 1920x1080

## 🖼️ Como Criar o Thumbnail

### Opção 1: Frame do Vídeo
1. Abra o vídeo no VLC ou Windows Media Player
2. Pause no melhor momento
3. Tire um screenshot (Print Screen)
4. Recorte e salve como JPG

### Opção 2: Design Customizado
1. Use Canva (gratuito)
2. Dimensões: 1920x1080 pixels
3. Adicione:
   - Logo da empresa
   - Texto: "Conheça Nossa Fábrica"
   - Ícone de play
   - Imagem da fábrica/produtos

## 📦 Passo a Passo para Adicionar

### 1. Prepare os Arquivos

```
✅ company-video.mp4  (vídeo principal)
✅ video-thumbnail.jpg (imagem de capa)
```

### 2. Copie para a Pasta Public

Coloque os arquivos em:
```
c:\Users\acscc\Desktop\garoto de programa\GARRAFAS GT\public\
```

### 3. Teste no Site

1. Acesse: `http://localhost:3000`
2. Role até a seção de vídeo
3. Clique no botão play
4. Verifique se o vídeo carrega e reproduz

## 🎯 Resultado Visual

A seção de vídeo terá:

```
┌──────────────────────────────────────────────┐
│                                              │
│  🎬 Conheça Nossa Empresa                    │
│                                              │
│  Veja Como Trabalhamos                       │
│  Descubra nossos processos...                │
│                                              │
│  ┌────────────────────────────────────┐     │
│  │                                    │     │
│  │     [VÍDEO COM PLAY BUTTON]        │     │
│  │                                    │     │
│  └────────────────────────────────────┘     │
│                                              │
│  🏭 5.000m²  ⚙️ 20+ Máquinas  👥 100+       │
│                                              │
│  [Agendar Visita]                            │
│                                              │
└──────────────────────────────────────────────┘
```

## ✨ Recursos da Seção

✅ **Player Nativo HTML5** - Funciona em todos os navegadores
✅ **Botão Play Customizado** - Design moderno e atraente
✅ **Thumbnail Automático** - Mostra capa antes de reproduzir
✅ **Controles Completos** - Play, pause, volume, fullscreen
✅ **Responsivo** - Adapta-se a mobile e desktop
✅ **Stats Animados** - Dados da empresa em cards flutuantes
✅ **Call to Action** - Botão para agendar visita

## 🚀 Formatos Alternativos (Opcional)

Se quiser máxima compatibilidade, adicione também:

**WebM (opcional):**
```
company-video.webm
```

Converter MP4 para WebM:
- Use: CloudConvert.com
- Formato: WebM
- Codec: VP9

## 📊 Checklist Final

Antes de publicar, verifique:

- [ ] Vídeo está em MP4 (H.264)
- [ ] Resolução é 1920x1080 ou menor
- [ ] Tamanho é menor que 50MB
- [ ] Thumbnail está em JPG/PNG
- [ ] Thumbnail tem proporção 16:9
- [ ] Vídeo tem boa qualidade de áudio
- [ ] Música de fundo não é muito alta
- [ ] Conteúdo está em português
- [ ] Duração é entre 1-3 minutos
- [ ] Vídeo mostra a empresa de forma profissional

## 💡 Dicas Extras

### Performance:
- Vídeos menores carregam mais rápido
- Use compressão sem perder qualidade
- Thumbnail pequeno (< 500KB)

### SEO:
- Nome do arquivo descritivo
- Adicione legendas (opcional)
- Otimize para mobile

### Engajamento:
- Primeiros 5 segundos são cruciais
- Mostre o melhor conteúdo no início
- Termine com call to action claro

---

## 🎬 Exemplo de Vídeo Placeholder

Enquanto você não tem o vídeo real, a seção já está funcionando!

Você pode testar com qualquer vídeo MP4 que tenha.

**Sugestão:** Grave um vídeo rápido com o celular mostrando:
- Entrada da empresa
- Área de produção
- Alguns produtos

Mesmo um vídeo simples já dá vida ao site! 🎥✨

---

**Precisa de ajuda para editar ou converter o vídeo? Me avise!**
