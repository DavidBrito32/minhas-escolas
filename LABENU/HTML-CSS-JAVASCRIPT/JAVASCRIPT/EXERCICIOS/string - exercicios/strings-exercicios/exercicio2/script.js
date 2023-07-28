/**
 * 
Observe a string abaixo:

```jsx
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
```

A partir dela, execute os passos abaixo:

a) **Remova** o excesso de espaços no final da string;

b) Imprima no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;

c) **Substitua** os traços `________` por “sticioso”.
 */


const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
//a) **Remova** o excesso de espaços no final da string;
console.log(minhaString.trim());


//b) Imprima no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;
console.log(minhaString.length);
console.log(minhaString.trim().length);

//c) **Substitua** os traços `________` por “sticioso”.

let novaMensagem = minhaString.replace("________", "sticioso");

console.log(novaMensagem);