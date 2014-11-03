# HTML5 Boilerplate with Compass

* Repositório - https://github.com/hebertsilva/html5-boilerplate-compass

## Instalação

Siga os passos abaixo para instalação e configuração.

### Iniciando um novo Projeto


Faça um clone do html5-boilerplate-compass:

```shell
git clone https://github.com/hebertsilva/html5-boilerplate-compass.git
```

Faça um clone do repositório vázio para seu novo projeto:

```shell
git clone https://github.com/seu-repositorio/projeto.git
```

Exporte o html5-boilerplate-compass para seu novo projeto:

```shell
cd path/novo-projeto
cp ~/path/html5-boilerplate-compass -n .git ~/path/novo-projeto
git add .
git commit -am "commit inicial"
git push origin nome-branch
```

### Compass e Grunt

#### Instalando as dependências

Para compilar o CSS é necessário ter o **ruby** e o [bundler](http://www.bundler.io/) instalado:

```shell
gem install bundler
```

Instale também o [NodeJS](http://nodejs.org/)

Em seguida o pacote do [Grunt](http://gruntjs.com/getting-started)

```shell
npm install -g grunt-cli
```

Instale as dependências do Grunt para o seu projeto

```shell
npm install
```

Instale as dependências do Compass

**Opção 1**:

```
cd compass
bundle install --path .bundle
```

**Opção 2** (usando o atalho do Grunt):

```shell
grunt bundler
```

#### Compilando CSS

**Opção 1**:

```shell
cd compass
bundle exec compass compile
```

**Opção 2**:

```shell
grunt css
```

#### Monitorando alterações no SCSS

**Opção 1**:

```shell
cd compass
bundle exec compass watch
```

**Opção 2**:

```shell
grunt
```

#### Otimização de imagens

```shell
grunt imagemin
```

Otimiza as imagens JPG e PNG utilizando o plugin [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)


#### Contribuindo 

Toda e qualquer pessoa é bem-vinda para contribuir.
