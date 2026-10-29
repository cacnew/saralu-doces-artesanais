# Continuidade do site SaraLu

Atualizado em 28/10/2026.

## Estado atual

- Site: https://saraludocesartesanais.com/
- Repositório: https://github.com/cacnew/saralu-doces-artesanais
- Branch de origem: `main`; GitHub Pages publica `/docs` com `CNAME` para `saraludocesartesanais.com`.
- Aplicação Next.js 16 com App Router, TypeScript, Tailwind CSS, exportação estática e sem banco de dados.
- A exportação estática em `docs/` usa caminhos a partir da raiz do domínio, sem `basePath`.

## Onde editar

| Conteúdo | Arquivo |
| --- | --- |
| Marca, telefone comercial, Instagram, produtos, cardápio e mensagens | `src/data/site.ts` |
| Cores, fontes e estilos | `src/app/globals.css` |
| Seções e estrutura | `src/components/Sections.tsx` |
| Cabeçalho e menu móvel | `src/components/Header.tsx` |
| Imagens | `public/images/` |
| Metadados | `src/app/layout.tsx` |

O uso local e o procedimento de publicação estão em [README.md](README.md). O prompt original está fora deste repositório, em `C:\Users\Carlos Costa\Pictures\saralu\Novo(a) Documento de Texto.txt`.

## Cuidados para a próxima edição

- A vitrine contém fotos ilustrativas. Troque por fotos reais da SaraLu quando disponíveis.
- Confirme com a Sara preços, disponibilidade e condições antes de mudar o cardápio. Os preços de brigadeiros e a entrada de 50% vieram do briefing; os demais produtos não exibem preço.
- O repositório é público. Não inclua senhas, códigos, dados pessoais de cadastro ou arquivos de sessão.
- A conexão atual com o GitHub não permite enviar arquivos de workflow. A publicação usa `docs/` na branch `main`; não espere deploy automático a partir dos arquivos-fonte.
