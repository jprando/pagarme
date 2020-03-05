# Executando o projeto

### Depurando no VSCode

Para depurar esta aplicação utilizando o [vscode](https://code.visualstudio.com/) como IDE, crie uma pasta chamada `.vscode` e dentro dessa pasta crie um arquivo com o nome `launch.json` com o seguinte conteúdo:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Development Mode",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "program": "${workspaceFolder}/server.js",
      "skipFiles": [
          "<node_internals>/**"
      ],
      "env": {
          "NODE_ENV": "development"
      }
    }
  ]
}
```

Em seguida vá na aba `Run and Debug` do app vscode, escolha a opção `Development Mode` e click no botão `Start Debugging` ( que tem um ícone de play verde ) ou pressione **F5**.

A API será carregada e na aba `DEBUG CONSOLE` você verá a saída do sistema e poderá utilizar `breakpoints` nos arquivos `.js` do projeto para depurar a execução da API em um determinado ponto e entender melhor o que esta acontecendo no seu ambiente de desenvolvimento local.

Algumas teclas de atalhos, do `vscode`, úteis para a depuração:

| Atalho            | Descrição             |
|-------------------|-----------------------|
| **F5**            | inicia a depuração.   |
| **SHIFT+F5**      | para a depuração.     |
| **CTRL+SHIFT+F5** | reinicia a depuração. |

**Próximo: [Projeto - Executar - Start](/docs/projeto/executar-producao-start.md)**

**Anterior: [Projeto - Ambiente de Desenvolvimento](/docs/projeto/executar-desenvolvimento.md)**

[voltar para o índice](/README.md#lista-de-conteúdo)
