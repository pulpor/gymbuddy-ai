# 🏋️ GymBuddy AI

Seu assistente inteligente de treino pessoal. GymBuddy AI é uma aplicação web moderna que ajuda você a criar, acompanhar e otimizar seus treinos de forma inteligente.

## 🚀 Tecnologias

Este projeto foi construído com:

- **[React 18](https://react.dev/)** - Biblioteca UI
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool ultrarrápido
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizáveis
- **[Supabase](https://supabase.com/)** - Backend e autenticação
- **[React Router](https://reactrouter.com/)** - Roteamento
- **[React Query](https://tanstack.com/query)** - Gerenciamento de estado assíncrono
- **[React Hook Form](https://react-hook-form.com/)** - Formulários performáticos
- **[Zod](https://zod.dev/)** - Validação de schemas

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js 18+** ([Baixar aqui](https://nodejs.org/) ou usar [nvm](https://github.com/nvm-sh/nvm))
- **npm** ou **bun** (o projeto suporta ambos)
- Conta no [Supabase](https://supabase.com/) (gratuita)

## 🛠️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/pulppor/gymbuddy-ai.git
cd gymbuddy-ai
```

### 2. Instale as dependências

Com npm:
```bash
npm install
```

Ou com Bun (mais rápido):
```bash
bun install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sua-chave-publica-anon
```

**Onde encontrar essas credenciais:**
1. Acesse o [Dashboard do Supabase](https://supabase.com/dashboard)
2. Selecione seu projeto
3. Vá em **Settings** → **API**
4. Copie a **Project URL** e a **anon public key**

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em: **http://localhost:8080**

## 📁 Estrutura do Projeto

```
gymbuddy-ai/
├── src/
│   ├── assets/              # Imagens e recursos estáticos
│   ├── components/          # Componentes React
│   │   ├── ui/             # Componentes shadcn/ui
│   │   └── NavLink.tsx     # Componentes customizados
│   ├── hooks/              # React hooks customizados
│   ├── integrations/       # Integrações externas
│   │   └── supabase/       # Cliente e tipos Supabase
│   ├── lib/                # Utilitários e helpers
│   ├── pages/              # Páginas da aplicação
│   │   ├── Auth.tsx        # Autenticação
│   │   ├── Dashboard.tsx   # Dashboard principal
│   │   ├── Landing.tsx     # Landing page
│   │   ├── Onboarding.tsx  # Onboarding de novos usuários
│   │   ├── Personal.tsx    # Perfil pessoal
│   │   └── Workout.tsx     # Página de treinos
│   ├── App.tsx             # Componente raiz
│   └── main.tsx            # Entry point
├── supabase/
│   ├── config.toml         # Configuração Supabase
│   └── migrations/         # Migrações do banco de dados
├── public/                 # Arquivos públicos estáticos
└── package.json            # Dependências e scripts
```

## 🎯 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento na porta 8080 |
| `npm run build` | Cria build otimizado para produção |
| `npm run build:dev` | Cria build em modo desenvolvimento |
| `npm run preview` | Pré-visualiza o build de produção |
| `npm run lint` | Executa o ESLint para checar código |

## 🗄️ Banco de Dados (Supabase)

### Configuração Local (Opcional)

Para rodar o Supabase localmente:

```bash
# Instale o Supabase CLI
npx supabase init

# Faça login
npx supabase login

# Vincule ao projeto
npx supabase link --project-ref flxwsboenozvqckkrmzz

# Inicie containers locais
npx supabase start

# Aplique migrações
npx supabase db push
```

### Migrações

As migrações estão em `supabase/migrations/`. Para criar novas:

```bash
npx supabase migration new nome_da_migracao
```

## 🚀 Deploy

### Opção 1: Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pulppor/gymbuddy-ai)

### Opção 2: Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pulppor/gymbuddy-ai)

### Opção 3: Build Manual

```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`. Faça upload para qualquer servidor estático.

**⚠️ Importante:** Configure as variáveis de ambiente no seu provedor de hospedagem:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

## 🎨 Personalização

### Temas e Cores

Edite `tailwind.config.ts` para customizar a paleta de cores:

```typescript
theme: {
  extend: {
    colors: {
      primary: {...},
      secondary: {...}
    }
  }
}
```

### Componentes

Todos os componentes UI estão em `src/components/ui/` e podem ser customizados individualmente.

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🐛 Problemas Comuns

### Porta 8080 já em uso

```bash
# Use outra porta
npm run dev -- --port 3000
```

### Erro de conexão Supabase

- Verifique se `.env.local` existe e está configurado corretamente
- Confirme que as credenciais estão corretas no Dashboard do Supabase
- Certifique-se de que o projeto Supabase está ativo

### Erro de build

```bash
# Limpe cache e reinstale
rm -rf node_modules bun.lockb package-lock.json
npm install
npm run build
```
## 🙏 Agradecimentos

- [shadcn](https://twitter.com/shadcn) pelos componentes incríveis
- Comunidade [Supabase](https://supabase.com/) pelo backend excelente
- Todos os contribuidores do projeto

---

Feito com 💪 por [pulpor](https://github.com/pulpor)
