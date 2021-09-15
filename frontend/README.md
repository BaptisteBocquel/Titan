
# Titan

Bienvenue sur le projet Titan

## Pré-requis

- Vous devez avoir npm, wamp (ou mamp) d'installés sur votre ordinateur.

## Coté Backend

- Placez le dossier nommé "backend_titan" (reçu par mail) dans le dossier nommé "www" pour wamp et "htdocs" pour mamp.
- A l'aide de phpMyAdmin, importez le fichier titan.sql (reçu par mail), ce qui créera la base de données.
- Dans le fichier controller.php, remplacez les variables $databasename, $username et $password par vos identifiants.
- Lancez wamp ou mamp et votre backend est prêt.

## Coté Front-end

- Clonez ce repository, et ouvrez le dans votre éditeur de code.
- Renommez le fichier .env-example en .env et entre les guillemets ajouter l'adresse local du fichier controller.php qui devrait ressembler à http://localhost/backend_titan/controller.php
- Ensuite ouvrez votre terminal, sur VScode par exemple.
- Dirigez vous vers le dossier frontend avec la commande --> cd frontend
- Enfin utilisez la commande --> npm run serve

Le serveur est maintenant lancé, vous pouvez vous dirigez à cette adresse : 

http://localhost:8080/




