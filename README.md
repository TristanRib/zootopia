# zootopia

### Structure du projet

Pour tenter de comprendre et exercer l'architecture hexagonale, nous avons mis en place les dossiers [Server](./server)
et [Domain](./domain).

* **[Domain](./domain)** : Contient le code utile au métier. Ce dernier est composé des services qui appliquent les règles métiers ainsi que des interfaces qui
  lient notre architecture.
* **[Server](./server)** : Contient les classes, types et les adapters qui viennent faire le travail côté back.