## Ejercicio Git Basics 2 (w1GitBasics2)

1. Inicializa un repositorio local
1. Copia las dos carpetas de este enunciado en tu nuevo proyecto.
1. Añade al stage todos los archivos y comprueba con `git status` que el stage tiene lo que quieres.
1. Crea un commit inicial con todos los archivos.
1. Abre el archivo `Lamp/Lamp.ts` y añade esta nueva propiedad a la clase. Guarda el archivo.

```typescript
    private hasBubble: boolean;
```

6. Abre el archivo `WashingMachine/WashingMachine.ts` y haz que el método `wash()` sea privado. Guarda el archivo.
1. Lanza `git status` e interpreta la información que te da.
1. Añade los cambios al stage, revisa con `git status` y haz un commit con ellos.
1. Abre el archivo `WashingMachine/WashingMachine.ts` y corrige la visibilidad del método `wash()`, hazlo público. Guarda el archivo.
1. Abre el archivo `Lamp/Lamp.ts` y añade este nuevo método. Guarda el archivo.

```typescript
    public switch(): void {
        this.isOn = !this.isOn;
    }
```

11. Anota el hash del último commit que has hecho.
1. Añade únicamente la corrección del punto 10 al último commit que has hecho (sin crear un commit nuevo). ¿Su hash ha cambiado? ¿Por qué?
1. Crea un nuevo commit con el cambio del punto 9.
1. Comprueba que te ha quedado un log con tres commits.
1. Comprueba que en el último commit has corregido bien la visibilidad del método `wash()` y ha quedado público.
1. Crea una carpeta que se llame `modules` y crea dentro un archivo `index.ts` con el contenido que quieras.
1. Lanza `git status`.
1. Configura el repositorio para que ignore la carpeta `modules`.
1. Lanza `git status` y comprueba la diferencia.
1. Elimina el archivo `Lamp/Lamp.ts`.
1. Revisa `git status`.
1. Haz un commit con la eliminación de Lamp.
1. Configura el repositorio para que ignore la carpeta `WashingMachine`.
1. Abre el archivo `WashingMachine/WashingMachine.ts` y corrige la visibilidad de la propiedad `isWorking`, hazla pública. Guarda el archivo.
1. Lanza `git status`. ¿El archivo `WashingMachine.ts` está siendo ignorado? ¿Por qué?
1. Desversiona el archivo `WashingMachine.ts`, es decir, bórralo del repositorio pero no del working directory.
1. Lanza `git status` y comprueba la diferencia.
1. Commitea todos los cambios (los del stage y los del working directory) en dos commits distintos.
1. Haz alguna modificación en el archivo `WashingMachine.ts` y comprueba que no está siendo versionado.
