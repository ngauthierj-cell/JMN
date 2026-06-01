# JMN — J'm'ennuie 🤙

App de suggestions d'activités générée par IA.

## Déploiement sur Vercel (10 min)

### 1. Crée un compte GitHub et pousse le projet
```bash
git init
git add .
git commit -m "JMN initial"
# Crée un repo sur github.com, puis :
git remote add origin https://github.com/TON_USER/jmn.git
git push -u origin main
```

### 2. Déploie sur Vercel
1. Va sur [vercel.com](https://vercel.com) → "Add New Project"
2. Importe ton repo GitHub `jmn`
3. Dans **Environment Variables**, ajoute :
   - **Name** : `ANTHROPIC_API_KEY`
   - **Value** : ta clé API (commence par `sk-ant-...`)
4. Clique **Deploy** ✅

### 3. Récupère ta clé API Anthropic
Va sur [console.anthropic.com](https://console.anthropic.com) → API Keys → Create Key

C'est tout ! Vercel te donne une URL publique type `jmn.vercel.app`.
