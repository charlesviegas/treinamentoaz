# Manual de instalação e configuração do ambiente

## Pré-requisitos

- Git, Maven, Node, Sonar Scanner
- Intellij 15
- PostgreSQL 9.3
- Nginx 1.9.6

------

## Conferindo a instalação

Execute os comandos abaixo para conferir se a sua instalação foi bem sucedida.

### Git
 
```bash
$ git --version
```
### Maven

```bash
$ mvn --version
```

### Node

```bash
$ node --version
$ npm --version
```

### Sonar Scaner

```bash
$ sonar-scanner --version
```

### Nginx

```bash
$ nginx -v
```

------

## Configuração

### Acessando o git.azi.com.br de fora da rede da az

Cria um arquivo na sua pasta de usuario /.ssh/config com o conteúdo abaixo:

```
Host *
	StrictHostKeyChecking no
```	

### Desligando Autocrlf

É preciso desabilitar o autocrlf das configurações padrões do git.

```bash
$ git config --global core.autocrlf false
```

### Criando chave SSH		

Siga as instruções contidas nas configurações em [http://git.azi.com.br/help/ssh/README](http://git.azi.com.br/help/ssh/README).

### Configurando o repositório NPM espelho 

Crie um arquivo com nome _.npmrc_ dentro da sua pasta de usuário. O arquivo deve ter o conteúdo:

```
registry = http://nexus.azi.com.br/content/groups/npm/
```

### Configurando o settings.xml 
			
Confira se o seu arquivo settings.xml está configurado adequadamente.

### Configurando o nginx para treinamento 
			
Dentro da pasta de configuração do nginx adicione os 3 arquivos abaixo:

- [nginx.conf](nginx.conf)
- [az.conf](az.conf)
- [local.conf](local.conf)

### Instalando os aplicativos do node

```bash
$ npm install -g grunt-cli
$ npm install -g bower
$ npm install -g less
$ npm install -g eslint
$ npm install -g karma
$ npm install -g yo
$ npm install -g protractor
$ webdriver-manager update
```

### Instalando o generator-spinal

O generator-spinal é um gerador de código usado no framework para criar templates de aplicações do zero.
Siga o seu processo de instalação em [http://git.azi.com.br/framework/generator-spinal](http://git.azi.com.br/framework/generator-spinal)

### Aumentando memória do Intellij

Acesse no diretório de instalação do Intellij. Edite o arquivo conf/idea.vmoptions.
Aumente para os valores sugeridos abaixo.

-Xms768m
-Xmx1536m
-XX:MaxPermSize=384m
-XX:ReservedCodeCacheSize=256m
-XX:+UseCompressedOops

### Instalando os plugins do Intellij

Instale os plugins:
- JavaScript Support
- Karma
- Terminal
- Grunt
- SonarQube Community Plugin
- AngularJS
- Markdown
- NodeJS
- LESS support

------

## Projetos frontend no Intellij

### Baixando um projeto de exemplo frontend

```bash
$ git clone git@git.azi.com.br:cviegas/treina.git
```

### Configurando pastas do projeto no Intellij

Abra o projeto no Intellij. Em seguida, acesse o menu.

```
File > Project Structure > Modules
```

Configure quais são as pastas de src, test, exclusões.

### Baixando dependencias do projeto

```bash
$ npm install
$ bower install
```

### Executando testes unitários via Intellij

Crie uma configuração disparar seus testes unitários através do Intellij.

```
Run > Edit Configurations > + > Karma
```

### Rodando comandos de construção (grunt)

```
Run > Edit Configurations > + > Grunt
```

### Autocomplete das libs (typescript)

```
File > Preferences : Pesquisa por `Javascript Library`
```

### Analisando a qualidade do código via Sonar e Eslint

```
Right click > Analyze > Inspect Code
```

### Operações do git dentro do Intellij


------

## Projetos backend no Intellij

### Baixando um projeto de exemplo backend

```bash
$ git clone git@git.azi.com.br:cviegas/treina-api.git
```

### Configurando uma hierarquia de projetos

```
Right click > Move Module to Group > New Top Level Group
```

### Configurando o maven no Intellij

```
File > Preferences : Pesquisa por `maven`
```

### Iniciando o spring boot via Intellij

```
Run > Edit Configurations > + > SpringBoot
```



