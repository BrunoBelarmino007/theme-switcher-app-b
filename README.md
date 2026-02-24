# 🌓 Aplicação de Tema Claro/Escuro

## 📚 Sobre o Projeto

Este projeto foi desenvolvido durante o curso de **CRIE UM SITE SIMPLES USANDO HTML, CSS e JAVASCRIPT** da **Fundação Bradesco**, com foco no aprendizado de **HTML**, **CSS** e **JavaScript**. A aplicação demonstra a implementação de um sistema de alternância entre temas claro e escuro, utilizando conceitos fundamentais de desenvolvimento front-end, com uma **estrutura modularizada e organizada por camadas**.

## 🎯 Objetivos de Aprendizado

Durante o desenvolvimento desta aplicação, foram abordados os seguintes conceitos:

### HTML
- ✅ Estrutura semântica de documentos
- ✅ Uso correto de tags e atributos
- ✅ Implementação de acessibilidade com `noscript`
- ✅ Organização hierárquica do conteúdo

### CSS
- ✅ **Variáveis CSS (Custom Properties)** - `:root` e `var()`
- ✅ **Separação por responsabilidades** - base, componentes e temas
- ✅ **Seletores avançados** - classes, pseudo-classes
- ✅ **Posicionamento** - `absolute`, `relative`
- ✅ **Temas dinâmicos** - alternância de esquemas de cores

### JavaScript
- ✅ **Manipulação do DOM** - `querySelector`
- ✅ **Event Listeners** - `addEventListener`
- ✅ **Condicionais** - `if/else`
- ✅ **Modularização da lógica**
- ✅ **Console** - `console.log` para debugging

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| HTML5 | - | Estruturação do conteúdo |
| CSS3 | - | Estilização e temas |
| JavaScript | ES6+ | Interatividade e lógica |

## 📁 Estrutura do Projeto
```
theme-switcher-app-b/
│
├── README.md
└── src/
├── index.html
├── css/
│ ├── base.css # Estilos globais e reset
│ ├── components.css # Componentes visuais (botão)
│ └── themes.css # Definição dos temas claro e escuro
└── js/
├── app.js # Inicialização da aplicação
└── themeSwitcher.js # Lógica de alternância de temas
```


## 🎨 Funcionalidades

### 1. **Sistema de Temas**
- **Tema Claro**: Fundo verde, texto preto
- **Tema Escuro**: Fundo preto, texto verde
- **Alternância suave** com transições CSS
- **Gerenciamento por variáveis CSS**

### 2. **Interface Interativa**
- Botão flutuante para alternar temas
- Feedback visual com hover effects
- Texto do botão muda dinamicamente

### 3. **Acessibilidade**
- Mensagem para usuários sem JavaScript
- Contraste adequado entre cores
- Transições suaves para melhor UX

## 🔧 Como Executar

1. **Clone ou baixe** este repositório
2. Acesse a pasta `src`
3. **Abra** o arquivo `index.html` em qualquer navegador
4. **Clique** no botão "Escuro/Claro" para alternar os temas

## 💡 Conceitos Técnicos Aprendidos

### 1. **Variáveis CSS (Custom Properties)**

```css
:root {
  --verde: #00ff00;
  --branco: #ffffff;
  --preto: #000000;
}

.tema-claro {
  --bg: var(--verde);
  --fontColor: var(--preto);
}
```

### 2. Manipulação de Classes com JavaScript

A alternância entre os temas é realizada dinamicamente através da manipulação de classes CSS no elemento <body>.

O JavaScript verifica qual tema está ativo e, com base nisso, remove a classe atual e adiciona a nova, promovendo a troca automática das cores definidas via CSS.

```js
if (document.body.classList.contains('tema-claro')) {
  document.body.classList.remove('tema-claro');
  document.body.classList.add('tema-escuro');
  this.textContent = 'Claro';
} else {
  document.body.classList.remove('tema-escuro');
  document.body.classList.add('tema-claro');
  this.textContent = 'Escuro';
}
```

**Conceitos aplicados:**

- classList.contains() → verifica se uma classe está presente

- classList.add() → adiciona uma nova classe

- classList.remove() → remove uma classe existente

- Manipulação do DOM → altera dinamicamente o comportamento da interface

- Event-driven programming → responde à interação do usuário em tempo real


Esse modelo garante simplicidade, clareza, controle total do estado visual da aplicação e excelente desempenho.

### 3. Organização Modular do Código

A aplicação foi estruturada seguindo o princípio da separação de responsabilidades, tornando o código:

 - Mais organizado

 - Mais fácil de manter

 - Mais escalável


#### 📂 Organização por camadas
##### HTML — Estrutura

Responsável apenas por definir o conteúdo e os elementos visuais da página.

```
src/index.html
```
---
##### CSS — Estilização

Dividido em três arquivos distintos, cada um com uma responsabilidade clara:

```
src/css/
├── base.css        → Reset, variáveis globais e estilos base
├── components.css → Estilos de componentes reutilizáveis (botões)
└── themes.css     → Definição dos temas claro e escuro
```

Benefícios dessa divisão:

 - Facilita manutenção

 - Evita repetição de código

 - Permite reutilização de componentes

 - Organiza visualmente o projeto

--- 

##### JavaScript — Lógica

Dividido em dois arquivos:

```
src/js/
├── app.js           → Inicialização da aplicação
└── themeSwitcher.js → Lógica de alternância de temas
app.js
```

Responsável apenas por inicializar a aplicação, garantindo que o código seja executado somente após o carregamento completo do DOM.

```js
window.addEventListener('DOMContentLoaded', function () {
  if (window.setupThemeSwitcher) {
    window.setupThemeSwitcher();
  }
});
```

```
themeSwitcher.js
```

Contém toda a lógica principal da troca de temas, isolando a responsabilidade da funcionalidade.

```js
function setupThemeSwitcher() {
  const switcher = document.querySelector('.btn');
  if (!switcher) return;

  switcher.addEventListener('click', function () {
    document.body.classList.toggle('tema-escuro');
  });
}
```
---

**🎯 Benefícios da modularização:**

 - Código mais limpo

 - Facilidade para testes

 - Facilidade para expansão futura

 - Melhor legibilidade

 - Aderência às boas práticas


## 🎓 Aprendizados do Curso - Fundação Bradesco

Este projeto consolidou conhecimentos fundamentais em:

### **Desenvolvimento Front-end**
- Estruturação semântica com HTML5
- Estilização avançada com CSS3
- Programação client-side com JavaScript

### **Boas Práticas**
- Separação de responsabilidades (HTML/CSS/JS)
- Código limpo e comentado
- Acessibilidade web
- Debugging com console
- Código reutilizável

### **Conceitos Avançados**
- Variáveis CSS para temas dinâmicos
- Manipulação do DOM
- Event-driven programming
- Transições e animações CSS
- Modularização de código
- Programação orientada a eventos


---

No princípio, era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. Ele estava no princípio com Deus. Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez. Nele, estava a vida e a vida era a luz dos homens; e a luz resplandece nas trevas, e as trevas não a compreenderam.

João 1:1-5
