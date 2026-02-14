# 🚀 Deploy no GitHub Pages - Guia Completo

## 📋 Pré-requisitos

- ✅ Conta no GitHub
- ✅ Git instalado no seu computador
- ✅ Projeto funcionando localmente

---

## 🔧 Passo 1: Criar Repositório no GitHub

1. **Acesse:** https://github.com/new
2. **Nome do repositório:** `GARRAFAS-GT` (ou outro nome de sua preferência)
3. **Visibilidade:** Public (necessário para GitHub Pages gratuito)
4. **NÃO marque:** "Add a README file", "Add .gitignore", "Choose a license"
5. **Clique em:** "Create repository"

---

## 📦 Passo 2: Inicializar Git Localmente

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - Plásticos GT Website"

# Renomear branch para 'main' (se necessário)
git branch -M main

# Conectar ao repositório remoto (SUBSTITUA 'SEU-USUARIO' pelo seu username do GitHub)
git remote add origin https://github.com/SEU-USUARIO/GARRAFAS-GT.git

# Enviar para o GitHub
git push -u origin main
```

**⚠️ IMPORTANTE:** Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub!

---

## ⚙️ Passo 3: Configurar GitHub Pages

1. **Acesse seu repositório** no GitHub
2. Vá em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - **Source:** GitHub Actions
5. **Salve as configurações**

---

## 🎯 Passo 4: Ajustar basePath (se necessário)

Se o nome do seu repositório for **diferente** de `GARRAFAS-GT`, você precisa atualizar o `next.config.mjs`:

1. Abra `next.config.mjs`
2. Encontre a linha:
   ```javascript
   basePath: process.env.NODE_ENV === 'production' ? '/GARRAFAS-GT' : '',
   ```
3. Substitua `GARRAFAS-GT` pelo nome do seu repositório

**Exemplo:** Se seu repositório se chama `meu-site`, mude para:
```javascript
basePath: process.env.NODE_ENV === 'production' ? '/meu-site' : '',
```

---

## 🚀 Passo 5: Deploy Automático

Após fazer o push para o GitHub, o deploy acontece **automaticamente**!

1. Vá em **Actions** no seu repositório
2. Você verá o workflow "Deploy Next.js to GitHub Pages" rodando
3. Aguarde ~2-5 minutos para o build completar
4. Quando aparecer ✅ verde, seu site está no ar!

---

## 🌐 Passo 6: Acessar seu Site

Seu site estará disponível em:

```
https://SEU-USUARIO.github.io/GARRAFAS-GT/
```

**Substitua:**
- `SEU-USUARIO` → Seu username do GitHub
- `GARRAFAS-GT` → Nome do seu repositório

---

## 🔄 Atualizações Futuras

Para atualizar o site após fazer mudanças:

```bash
# Adicionar arquivos modificados
git add .

# Fazer commit com mensagem descritiva
git commit -m "Descrição das mudanças"

# Enviar para o GitHub
git push
```

O deploy acontece **automaticamente** após cada push! 🎉

---

## 📁 Arquivos Criados para Deploy

- ✅ `.github/workflows/deploy.yml` - Workflow do GitHub Actions
- ✅ `next.config.mjs` - Configurações do Next.js (atualizado)
- ✅ `public/.nojekyll` - Desabilita Jekyll no GitHub Pages

---

## ⚠️ Problemas Comuns

### 1. **Erro 404 ao acessar o site**
- Verifique se o `basePath` no `next.config.mjs` está correto
- Confirme que GitHub Pages está configurado para "GitHub Actions"

### 2. **Imagens não aparecem**
- Certifique-se de que `unoptimized: true` está no `next.config.mjs`
- Verifique se as imagens estão na pasta `public/`

### 3. **Build falha no GitHub Actions**
- Vá em "Actions" → Clique no workflow com erro
- Leia os logs para identificar o problema
- Geralmente é falta de dependências ou erro de sintaxe

### 4. **Site não atualiza após push**
- Aguarde alguns minutos (cache do GitHub)
- Force refresh: `Ctrl + Shift + R` (Windows) ou `Cmd + Shift + R` (Mac)
- Limpe o cache do navegador

---

## 🎨 Domínio Personalizado (Opcional)

Se você tiver um domínio próprio:

1. Vá em **Settings** → **Pages**
2. Em **Custom domain**, digite seu domínio
3. Configure o DNS do seu domínio:
   - Tipo: `CNAME`
   - Nome: `www` (ou `@` para domínio raiz)
   - Valor: `SEU-USUARIO.github.io`

---

## 📞 Suporte

Se tiver problemas:
1. Verifique os logs em "Actions"
2. Revise este guia passo a passo
3. Consulte a documentação oficial: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports

---

## ✅ Checklist Final

Antes de fazer o deploy, confirme:

- [ ] Repositório criado no GitHub
- [ ] Git inicializado localmente
- [ ] Código enviado para o GitHub (`git push`)
- [ ] GitHub Pages configurado para "GitHub Actions"
- [ ] `basePath` correto no `next.config.mjs`
- [ ] Workflow rodando em "Actions"
- [ ] Site acessível em `https://SEU-USUARIO.github.io/GARRAFAS-GT/`

---

🎉 **Parabéns! Seu site está no ar!** 🎉
