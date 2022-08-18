class Usuario {
    constructor(nombre, apellido, libros, mascota) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascota = mascota;
    }
    getFullName(nombre, apellido) {
      return `Nombre completo: ${nombre}, ${apellido}`;
    }
    addPet(nuevaMascota) {
      this.mascota.push(nuevaMascota);
    }
    countPets() {
      return this.mascota.length;
    }
    addBook(nombre, autor) {
      this.libros.push({ nombre, autor });
    }
    getBookNames() {
      return this.libros.map(({ nombre }) => nombre);
    }
  }
  
  let mascota = ["perro", "huron"];
  let libros = [
    {
      nombre: "La firma",
      autor: "John Grisham ",
    },
    {
      nombre: "El ingenioso caballero Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
    },
  ];
  
  let user = new Usuario ("Matias", "Moya", libros, mascota);
  
  user.addPet("gato"); 
  user.addBook("Poder sin limites", "Tony Robbins"); 
  
  
  console.log(user);
  console.log(`Cantidad de mascotas: ${user.countPets()}`) 
  console.log(user.getBookNames())