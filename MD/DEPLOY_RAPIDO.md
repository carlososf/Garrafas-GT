# 🚀 Deploy Rápido - GitHub Pages

## ⚡ Comandos Essenciais

### 1️⃣ Primeira vez (Configuração Inicial)

```bash
# 1. Criar repositório no GitHub (https://github.com/new)
#    Nome: GARRAFAS-GT (ou outro nome)

# 2. Inicializar Git
git init
git add .
git commit -m "Initial commit"
git branch -M main

# 3. Conectar ao GitHub (SUBSTITUA SEU-USUARIO!)
git remote add origin https://github.com/SEU-USUARIO/GARRAFAS-GT.git
git push -u origin main

# 4. Configurar GitHub Pages
#    - Vá em Settings → Pages
#    - Source: GitHub Actions
```

---

### 2️⃣ Atualizações (Após mudanças)

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

**OU use o script automático:**
```bash
deploy.bat
```

---

## 🌐 URL do Site

```
https://SEU-USUARIO.github.io/GARRAFAS-GT/
```

---

## ⚙️ Arquivos Importantes

- ✅ `.github/workflows/deploy.yml` - Deploy automático
- ✅ `next.config.mjs` - Configuração Next.js
- ✅ `public/.nojekyll` - Compatibilidade GitHub Pages
- ✅ `DEPLOY_GITHUB_PAGES.md` - Guia completo

---

## 🔧 Ajustar Nome do Repositório

Se seu repositório tiver **outro nome**, edite `next.config.mjs`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/SEU-REPO' : '',
```

---

## 📞 Problemas?

Leia o guia completo: `DEPLOY_GITHUB_PAGES.md`
