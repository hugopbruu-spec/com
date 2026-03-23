# Portfolio Hugo Henrique

Projeto em React + Vite para apresentar servicos, estudos de caso, formacao e canais de contato do Hugo Henrique em uma experiencia multipagina.

## Stack

- React 19
- React Router 7
- Vite 8
- Tailwind CSS 4
- Lucide React

## Estrutura principal

- `src/App.jsx`: roteamento principal com lazy loading por pagina
- `src/layouts/PortfolioLayout.jsx`: cabecalho, navegacao, rodape e atalho de contato
- `src/pages/*.jsx`: paginas de sobre, servicos, certificados, projetos, contato e 404
- `src/components/PageMeta.jsx`: metadados dinamicos, canonical, Open Graph, Twitter e JSON-LD
- `src/components/CertificateArtwork.jsx`: preview visual para certificado oficial e registro em atualizacao
- `src/data/portfolioContent.js`: conteudo textual, estudos de caso, formacao e configuracoes de contato
- `public/social-cover.svg`: imagem social padrao para compartilhamento
- `public/robots.txt`: configuracao basica para indexacao

## Comandos

```bash
npm install
npm run dev
```

Host local usado neste projeto:

```bash
npm start
```

Validacao:

```bash
npm run lint
npm run build
```

Preview do build:

```bash
npm run preview:local
```

## Rotas

- `/sobre`
- `/servicos`
- `/certificados`
- `/projetos`
- `/contato`
- `*` retorna uma pagina 404 real

## Melhorias recentes

- Estudos de caso mais concretos na pagina de projetos
- Briefing funcional na pagina de contato com mensagem pronta para WhatsApp ou e-mail
- Separacao entre certificado oficial e trilha de formacao em atualizacao
- Lazy loading de rotas para reduzir o peso da carga inicial
- SEO tecnico com canonical, Open Graph, Twitter, JSON-LD e imagem social
- Pagina 404 real em vez de redirecionamento silencioso

## URLs locais padrao

- Desenvolvimento: `http://127.0.0.1:4173`
- Preview do build: `http://127.0.0.1:4174`
