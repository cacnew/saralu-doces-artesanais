# SaraLu Doces Artesanais — landing page

Landing page em Next.js (App Router), TypeScript e Tailwind CSS. O build gera arquivos estáticos em `out/`, prontos para GitHub Pages. Não há banco de dados nem checkout.

## Rodar no computador

```powershell
cd 'C:\OSM\CLICKUPCLAUDE\saralu\site'
npm ci
npm run dev
```

Abra `http://localhost:3000`.

Para gerar a versão de publicação:

```powershell
npm run build
```

## Publicar no GitHub Pages

O site usa [`saraludocesartesanais.com`](https://saraludocesartesanais.com). O repositório público é [`cacnew/saralu-doces-artesanais`](https://github.com/cacnew/saralu-doces-artesanais), e o GitHub Pages publica a pasta `docs/` da branch `main`.

Para publicar alterações, execute na raiz do projeto:

```powershell
npm run build
Get-ChildItem -LiteralPath docs -Force | Remove-Item -Recurse -Force
Copy-Item -Path out\* -Destination docs -Recurse -Force
Set-Content -LiteralPath docs\CNAME -Value 'saraludocesartesanais.com' -NoNewline
New-Item -Path docs\.nojekyll -ItemType File -Force | Out-Null
git add .
git commit -m 'Atualizar site'
git push
```

O build usa `basePath` vazio e metadados de `https://saraludocesartesanais.com`. A limpeza de `docs/` remove arquivos obsoletos; os comandos recriam `CNAME` e `.nojekyll` antes do commit. A publicação ocorre após o envio para `main`.

## Alterar conteúdo

- Dados da marca, textos, produtos, preços e mensagens do WhatsApp: `src/data/site.ts`.
- Cores, tipografia e layout: `src/app/globals.css`.
- Seções: `src/components/Sections.tsx`.
- Imagens: `public/images/`.

Os preços dos brigadeiros e a condição de 50% de pagamento antecipado vieram do documento de briefing fornecido. Os demais produtos não têm preços publicados.

## Imagens e pendências

- A logo oficial veio dos arquivos SaraLu.
- As quatro imagens na seção Instagram vieram das artes de campanha existentes; são uma galeria estática e não representam posts importados automaticamente.
- A imagem na seção “Sobre a Sara” é um recorte de uma arte de campanha fornecida, sem alteração do rosto. Se houver uma fotografia real da Sara, substitua `public/images/sara/sara-campanha.webp`.
- As fotos limpas da vitrine foram criadas como **imagens ilustrativas**. Antes de publicar, a Sara pode trocá-las por fotografias dos produtos reais mantendo os mesmos nomes de arquivo.

Não incluí depoimentos, endereço físico, CNPJ ou horários porque esses dados não foram fornecidos.
