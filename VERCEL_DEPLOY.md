# Guia de Deploy na Vercel

## Correções Aplicadas

1. **vercel.json** atualizado com configuração simplificada
2. **CI=false** adicionado para não tratar warnings como erros
3. **Node version** ajustada para `>=18.x` com `.node-version` configurado para `20`
4. **DevDependencies TypeScript** removidas (este é um projeto JavaScript)
5. **CSS responsivo** otimizado para evitar overflow

## Como fazer deploy na Vercel

### 1. Commit e Push das alterações
```bash
git add .
git commit -m "fix: vercel deployment configuration"
git push
```

### 2. Redeploy na Vercel
- Acesse seu dashboard da Vercel
- Vá para o projeto
- Clique em "Redeploy" no último deployment
- Ou aguarde o deploy automático se estiver conectado ao Git

### 3. Configurar Variáveis de Ambiente
Na Vercel, adicione as seguintes variáveis de ambiente (Settings > Environment Variables):

- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN`
- `REACT_APP_FIREBASE_PROJECT_ID`
- `REACT_APP_FIREBASE_STORAGE_BUCKET`
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
- `REACT_APP_FIREBASE_APP_ID`
- `REACT_APP_FIREBASE_MEASUREMENT_ID`

Use os valores do seu projeto Firebase.

### 4. Build Settings na Vercel (se necessário)
Se precisar configurar manualmente:
- **Framework Preset**: Create React App
- **Build Command**: `yarn build` ou `npm run build`
- **Output Directory**: `build`
- **Install Command**: `yarn install` ou `npm install`
- **Node Version**: 20.x (será detectado automaticamente do .node-version)

## Verificação

Após o deploy, verifique:
- ✅ Build passou sem erros
- ✅ Site carrega corretamente
- ✅ Responsivo funciona em diferentes telas
- ✅ Firebase está configurado e funcionando

## Troubleshooting

Se ainda houver problemas:
1. Verifique os logs de build na Vercel
2. Certifique-se que todas as variáveis de ambiente estão configuradas
3. Limpe o cache do build (Deployments > ... > Redeploy > Clear cache and redeploy)
