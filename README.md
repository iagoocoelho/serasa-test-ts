# Start Project

npm run dev

# Start Storybook

npm run storybook

# Resposta exercicio 3

Notei que utilizam nextJs, css in Js, Tag Manager.

Falta melhorar a navegação via TAB, alguns componentes e tags estão com css outline none e/ou com cor sem destaque. E a própria cor do outline é um rosa claro que não da destaque na visualização.

Em testes com lighthouse, para desktop, não enxerguei muitos ajustes a serem feitos visto a nota e relatório.

Já para mobile, o teste aponta uma nota médiana de 79, e pelo resultado demonstra-se que pode ser reduzido o tamnho do build talvez parcionando com incluindo lazy load em alguma ponta, imagens que podem ser redimensionadas para um tamanho menor.