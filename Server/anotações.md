src = source (código fonte)

Dentro da src -> código fonte
Fora da src -> Arquivos de configuração

Conceito da arquitetura N-Layers

Camadas:
- Controlles: Controlar quem acessa e controlar as respostas de devolução

- Rotas: Quem vai fazer o apontamento de endereços para os controllers

- Model: Forma de entrada ou saída de dados do servidor

- Config: Configurações de outras aplicações e dados não sensíveis

- Configurações não enbarcadas (.env): serve para isolar dados sensíveis