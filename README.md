Au niveau de la partie backend j'ai choisi le framework Symphony. Egalement je viens d'utiliser lors de l'authentification avec Le token. Mon choix de Symphony se manifeste par le fait qu'il est basé sur le langagage PHP et personnellement j'estime que je suis bien familiarisée avec PHP.

Au niveau de la partie front j'ai choisi le framework Angular7 (utiliser les websockets ) en raison de la facilité de son usage et de sa richesse en terme de documentation.

 

Backend: 

-Configurer notre Base de Données a l'aide du  fichier .Env :  php bin/cosole docrtine:database:create 

    1. créer l'entité "User" et L'entité "message":php bin/cosole make:entity ensuite php bin/cosole doctrine:schema:create (pour modifier en utilise la commande php bin/cosole doctrine:schema:update --force)


Pour créer l'API Rest ,nous commençons par installer les ensembles nécessaires ( composer require "le nom du bundle ")

- Installer le : sensio/framework-extra-bundle

- Installer le :  jms/serializer-bundle (cet ensemble  aiderer à sérialiser ou désirialiser les ressources de notre application

- Installer le friendssymfony/reste-bundle: ce bundle nous aide à creer une API REST avec le fremework Symfony

1.       Configurer le Token

-Installer LexikJWTAuthenticationBundle : Cet ensemble fournit une authentification JWT (Json Web Token) pour votre API Symfony.

    Front:

-Installer les services(authService,ChatSocket,MessageService)

-Installer les components

-Installer et configurer le guard (implementer la methode CanActive)

-configurer l'interceptor (get le Token dans localStorage)

-Configurer le app-routing

Pour créer une application en temps réel  alors il faut : (npm install  "nom du package")

-Installer le socket.io-client et @types/socket.io-client

