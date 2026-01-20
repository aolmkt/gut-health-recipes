export interface Recipe {
  id: string;
  title: string;
  description?: string;
  idealFor?: string;
  ingredients: string[];
  preparation: string[];
  bodyFeel?: string;
  tips?: string[];
  section: string;
  block: string;
}

export interface Section {
  id: string;
  title: string;
  content?: string;
  recipes?: Recipe[];
}

export const ebookSections: Section[] = [
  {
    id: 'introduccion',
    title: 'Antes de Empezar',
    content: `# Esto no es tu culpa

No tienes un estómago delicado.
No exageras.
No estás imaginando cosas.

Tienes un cuerpo inteligente reaccionando a algo que no debería estar ahí.

¿Y si te dijera que el problema no eres tú, sino lo que te han hecho creer que era pan?

Lo que encuentras en el supermercado hoy no es pan. Es un producto diseñado para durar, no para nutrirte. Lleno de conservantes, azúcares ocultos, harinas ultraprocesadas y aditivos que tu cuerpo no reconoce.

Y cada vez que lo comes, tu cuerpo responde con hinchazón, gases, cansancio o pesadez. No porque seas débil. Sino porque está haciendo exactamente lo que debe hacer: protegerte.

Este libro no te va a obligar a dejar el pan.

Te va a enseñar a elegirlo, prepararlo y comerlo de una forma que te haga sentir bien. Ligera. Libre. Satisfecha.

Vas a entender qué está pasando en tu cuerpo, cómo identificar los panes que te inflaman, y cómo preparar alternativas reales, fáciles y deliciosas que puedes disfrutar sin culpa.

Porque el pan no es el enemigo.
El enemigo es el pan que te vendieron como real.

Y a partir de hoy, eso cambia.`
  },
  {
    id: 'bloque-1',
    title: 'Bloque 1: La Corrección',
    content: `# Por qué te hinchas (y no es lo que crees)

El problema no eres tú.
El problema no es el pan.
El problema es cómo se hace el pan hoy.

Durante miles de años, el pan se hizo de forma simple: harina, agua, sal y tiempo. Las culturas antiguas dejaban fermentar la masa durante horas, a veces días. Ese proceso no solo hacía que el pan supiera mejor, sino que también lo hacía digerible.

Hoy, la mayoría de los panes comerciales se hacen en menos de dos horas. Y para que eso funcione, se les agrega:

- Levaduras químicas de acción rápida
- Gluten extra para dar estructura
- Azúcares ocultos para acelerar el proceso
- Conservantes para que dure más en el estante

Tu cuerpo no fue diseñado para procesar eso.

Y cuando lo intentas, responde con lo único que puede hacer:
Inflamación. Gases. Hinchazón. Pesadez.

No eres intolerante. No estás rota.
Solo estás comiendo algo que no es realmente pan.

## La Regla Simple

Si un pan puede durar semanas sin ponerse malo, tu cuerpo tampoco puede procesarlo. Lo que no se descompone afuera, se descompone adentro. Y eso genera fermentación donde no debería haberla.

El pan real dura 2-3 días. No más.

## El Gluten No Es El Único Problema

Mucha gente cree que si evita el gluten, el problema desaparece. Pero incluso los panes "sin gluten" comerciales están llenos de almidones refinados, gomas y aditivos que pueden generar los mismos síntomas.

El problema no es solo el gluten.
Es todo lo que viene con él.

## Lo Que Vas a Aprender

En los siguientes bloques vas a descubrir:

1. Cómo identificar qué panes te inflaman (y cuáles no)
2. Cómo elegir el pan correcto según el momento del día
3. Recetas simples que puedes hacer en minutos, sin complicaciones

No necesitas ser chef. No necesitas ingredientes raros.
Solo necesitas entender cómo funciona tu cuerpo.

Y eso empieza ahora.`
  },
  {
    id: 'bloque-2',
    title: 'Bloque 2: El Criterio',
    content: `# El Semáforo del Pan

No todos los panes son iguales. Y tu cuerpo lo sabe.

Aquí tienes una guía simple para saber qué comer y qué evitar:

---

## 🔴 PAN ROJO — EVÍTALO

Estos panes te inflaman casi siempre:

- **Pan blanco comercial** — Hecho en menos de 2 horas, lleno de aditivos
- **Pan de molde** — Diseñado para durar, no para nutrirte
- **Pan "integral" de supermercado** — La mayoría solo tiene color marrón, no fibra real
- **Bollería industrial** — Azúcar, grasas trans y harinas refinadas
- **Pan congelado de hornear en casa** — Parece fresco, pero tiene los mismos problemas

**Señales de alerta:**
- Dura más de 5 días sin enmohecerse
- Tiene más de 5 ingredientes
- Contiene "jarabe de glucosa", "emulsificantes" o "mejorantes"

---

## 🟡 PAN AMARILLO — CUIDADO

Estos panes pueden funcionar para algunas personas, pero no para todas:

- **Pan de panadería artesanal** — Mejor que el industrial, pero revisa los ingredientes
- **Pan de centeno comercial** — A menudo mezclado con harina de trigo
- **Pan sin gluten de supermercado** — Revisa que no tenga almidones refinados
- **Tortillas de trigo** — Pueden contener grasas hidrogenadas

**Cómo probarlos:**
- Come una porción pequeña y observa tu cuerpo durante 2-3 horas
- Si sientes hinchazón, pesadez o gases, ese pan no es para ti

---

## 🟢 PAN VERDE — PAN REAL

Estos panes raramente causan problemas:

- **Pan de masa madre real** — Fermentado mínimo 12 horas
- **Pan casero con ingredientes simples** — Harina, agua, sal, tiempo
- **Los panes de este libro** — Diseñados para no inflamarte

**Características:**
- Ingredientes que puedes pronunciar
- Se pone duro en 2-3 días (señal de que es real)
- Te deja satisfecha, no hinchada

---

## La Regla de Oro

> Si después de comer pan te sientes pesada, hinchada o con sueño, ese pan no es para ti.

No importa lo que diga la etiqueta.
No importa si es "orgánico" o "artesanal".
Tu cuerpo es el único juez que importa.`
  },
  {
    id: 'bloque-3',
    title: 'Bloque 3: El Uso Real',
    content: `# El pan correcto para cada momento

Tu cuerpo cambia durante el día. Y el pan también debe adaptarse.

No es lo mismo lo que necesitas al despertar que lo que te sienta bien antes de dormir. Aquí tienes una guía para elegir el pan correcto según el momento:

---

## 🌅 MAÑANA — Ligero y Energético

Por la mañana, tu sistema digestivo está despertando. Necesita algo suave que no lo sobrecargue.

**Mejores opciones:**
- Pan Nube — Ultra ligero, fácil de digerir
- Pan de Linaza — Fibra suave que activa sin inflamar
- Pan de Espinaca — Nutrición sin pesadez

**Evita:** Panes densos o con muchas grasas. Tu cuerpo aún no está listo para procesarlos.

---

## ☀️ MEDIODÍA — Estructura y Saciedad

A mitad del día necesitas algo que te sostenga sin dejarte pesada para la tarde.

**Mejores opciones:**
- Pan de Almendras — Perfecto para sándwiches
- Pan de Garbanzos — Saciante y nutritivo
- Pan de Calabaza — Suave pero sustancioso

**Consejo:** Este es el mejor momento para panes con más proteína o fibra.

---

## 🌙 NOCHE — Suave y Reconfortante

Por la noche, tu digestión se ralentiza. Necesitas algo que no interfiera con tu descanso.

**Mejores opciones:**
- Pan de Plátano — Confort sin inflamación
- Pan de Queso — Satisface antojos sin consecuencias
- Pan Nube — Siempre seguro

**Evita:** Panes con mucha fibra o ingredientes difíciles de digerir. Pueden causar gases durante la noche.

---

## 🏃‍♀️ ANTES DE EJERCICIO

Si vas a moverte, necesitas energía rápida pero limpia.

**Mejores opciones:**
- Pan de Plátano — Energía natural
- Pan Nube — Ligero, no te pesará

---

## 📚 PARA LLEVAR AL TRABAJO

Necesitas algo que aguante bien y sea fácil de transportar.

**Mejores opciones:**
- Pan de Almendras — Mantiene su estructura
- Pan de Garbanzos — No se deshace fácilmente

---

## La Regla del Momento

> No hay un pan perfecto para todo el día. Hay un pan perfecto para cada momento.

Escucha a tu cuerpo. Observa cómo te sientes después de cada comida. Y ajusta según lo que funcione para ti.`
  },
  {
    id: 'parte-1-recetas',
    title: 'Parte 1: Recetas Esenciales',
    content: `# Las 8 Recetas Base

Estas son las recetas fundamentales que necesitas dominar. Son simples, rápidas y funcionan para casi cualquier persona.

Cada una está diseñada para:
- Prepararse en menos de 15 minutos
- Usar ingredientes fáciles de encontrar
- No causar hinchazón ni malestar

Empieza por la que más te llame la atención. No hay orden correcto.`,
    recipes: [
      {
        id: 'pan-nube',
        title: 'Pan Nube',
        description: 'Ligero, suave y fácil de digerir',
        idealFor: 'Desayuno ligero',
        ingredients: [
          '1 huevo',
          '1 cucharada de yogur griego o requesón',
          '½ cucharadita de polvo para hornear',
          '1 pizca de sal'
        ],
        preparation: [
          'Mezcla todos los ingredientes hasta integrar.',
          'Vierte en un molde apto para microondas.',
          'Cocina en microondas durante 90 segundos.',
          'Alternativa: hornea a 180°C durante 10-12 minutos.'
        ],
        bodyFeel: 'Liviano. Sin gases. Sin barriga dura. Como si no hubieras comido pan, pero satisfecha.',
        tips: [
          'Perfecto para quienes sienten que todo les cae pesado por la mañana.',
          'Puedes agregarle especias como canela o vainilla para versión dulce.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      },
      {
        id: 'pan-de-linaza',
        title: 'Pan de Linaza',
        description: 'Fibra suave para empezar el día',
        idealFor: 'Desayuno nutritivo',
        ingredients: [
          '3 cucharadas de harina de linaza',
          '1 huevo',
          '1 cucharada de agua',
          '½ cucharadita de polvo para hornear',
          '1 pizca de sal'
        ],
        preparation: [
          'Mezcla la harina de linaza con el polvo para hornear y la sal.',
          'Agrega el huevo y el agua. Mezcla bien.',
          'Cocina en microondas durante 90 segundos.',
          'Deja reposar 1 minuto antes de desmoldar.'
        ],
        bodyFeel: 'Activa tu digestión sin inflarte. Te sientes satisfecha, no pesada.',
        tips: [
          'La linaza es rica en omega-3 y fibra soluble.',
          'Ideal para quienes necesitan regularidad digestiva.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      },
      {
        id: 'pan-de-espinaca',
        title: 'Pan de Espinaca',
        description: 'Nutrición sin pesadez',
        idealFor: 'Almuerzo ligero',
        ingredients: [
          '1 taza de espinacas frescas (picadas)',
          '1 huevo',
          '2 cucharadas de harina de almendras',
          '½ cucharadita de polvo para hornear',
          'Sal y pimienta al gusto'
        ],
        preparation: [
          'Pica finamente las espinacas.',
          'Mezcla todos los ingredientes en un bowl.',
          'Vierte en molde apto para microondas.',
          'Cocina 2 minutos en microondas o 15 minutos en horno a 180°C.'
        ],
        bodyFeel: 'Ligero pero nutritivo. Te da energía sin pesarte.',
        tips: [
          'Puedes usar espinacas congeladas (descongela y escurre bien).',
          'Añade queso parmesano rallado para más sabor.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      },
      {
        id: 'pan-de-almendras',
        title: 'Pan de Almendras',
        description: 'Estructura real para sándwich',
        idealFor: 'Comida principal',
        ingredients: [
          '1 taza de harina de almendras',
          '2 huevos',
          '2 cucharadas de aceite de oliva',
          '½ cucharadita de polvo para hornear',
          '¼ cucharadita de sal'
        ],
        preparation: [
          'Precalienta el horno a 180°C.',
          'Mezcla todos los ingredientes secos.',
          'Añade los huevos y el aceite. Integra bien.',
          'Vierte en un molde pequeño engrasado.',
          'Hornea 20-25 minutos hasta que esté dorado.'
        ],
        bodyFeel: 'Sustancioso sin ser pesado. Te mantiene satisfecha por horas.',
        tips: [
          'Este pan tiene estructura real. Perfecto para sándwiches.',
          'Se conserva bien 3-4 días en refrigerador.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      },
      {
        id: 'pan-de-garbanzos',
        title: 'Pan de Garbanzos',
        description: 'Saciante sin pesadez',
        idealFor: 'Comida principal',
        ingredients: [
          '1 taza de harina de garbanzos',
          '1 huevo',
          '½ taza de agua',
          '2 cucharadas de aceite de oliva',
          '½ cucharadita de sal',
          'Hierbas al gusto (romero, tomillo)'
        ],
        preparation: [
          'Mezcla la harina de garbanzos con el agua hasta eliminar grumos.',
          'Añade el huevo, aceite, sal y hierbas.',
          'Vierte en sartén antiadherente caliente.',
          'Cocina a fuego medio-bajo 5 minutos por cada lado.'
        ],
        bodyFeel: 'Llena sin inflar. Energía sostenida sin picos.',
        tips: [
          'La harina de garbanzos es rica en proteína vegetal.',
          'Excelente para quienes buscan opciones más sustanciosas.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      },
      {
        id: 'pan-de-calabaza',
        title: 'Pan de Calabaza',
        description: 'Suave y amable con la digestión',
        idealFor: 'Cualquier momento',
        ingredients: [
          '½ taza de puré de calabaza',
          '1 huevo',
          '3 cucharadas de harina de almendras',
          '½ cucharadita de canela',
          '¼ cucharadita de polvo para hornear',
          '1 pizca de sal'
        ],
        preparation: [
          'Mezcla el puré de calabaza con el huevo.',
          'Añade los ingredientes secos y mezcla bien.',
          'Vierte en molde engrasado.',
          'Hornea a 180°C durante 20 minutos.'
        ],
        bodyFeel: 'Reconfortante sin consecuencias. Digestión suave.',
        tips: [
          'Puedes usar calabaza enlatada (sin azúcar añadida).',
          'La canela ayuda a regular el azúcar en sangre.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      },
      {
        id: 'pan-de-platano',
        title: 'Pan de Plátano',
        description: 'Confort sin castigo',
        idealFor: 'Snack o postre',
        ingredients: [
          '1 plátano maduro',
          '1 huevo',
          '2 cucharadas de harina de almendras',
          '¼ cucharadita de polvo para hornear',
          '1 pizca de canela'
        ],
        preparation: [
          'Machaca el plátano hasta hacer puré.',
          'Añade el huevo y mezcla bien.',
          'Incorpora la harina, polvo para hornear y canela.',
          'Cocina en microondas 2 minutos o en horno 15 minutos a 180°C.'
        ],
        bodyFeel: 'Dulce satisfacción sin hinchazón. Energía natural.',
        tips: [
          'Cuanto más maduro el plátano, más dulce el pan.',
          'Perfecto para satisfacer antojos de forma saludable.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      },
      {
        id: 'pan-de-queso',
        title: 'Pan de Queso',
        description: 'Placer real, sin inflamación',
        idealFor: 'Snack satisfactorio',
        ingredients: [
          '1 huevo',
          '¼ taza de queso mozzarella rallado',
          '2 cucharadas de queso crema',
          '2 cucharadas de harina de almendras',
          '¼ cucharadita de polvo para hornear'
        ],
        preparation: [
          'Derrite el queso mozzarella con el queso crema (microondas 30 seg).',
          'Añade el huevo y mezcla rápidamente.',
          'Incorpora la harina y el polvo para hornear.',
          'Forma bolitas y hornea a 200°C durante 12-15 minutos.'
        ],
        bodyFeel: 'Satisface el antojo de algo salado sin las consecuencias.',
        tips: [
          'Trabaja rápido mientras el queso está caliente.',
          'Puedes añadir ajo en polvo o hierbas italianas.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      }
    ]
  },
  {
    id: 'parte-2-rotacion',
    title: 'Parte 2: Rotación Sin Hinchazón',
    content: `# Variedad para Cada Día

La clave para una digestión feliz es la rotación. No comer lo mismo todos los días.

Estas 11 recetas adicionales te dan opciones para variar durante la semana. Algunas son versiones diferentes de las esenciales, otras son completamente nuevas.

Rota entre ellas para:
- Evitar sensibilidades por repetición
- Mantener tu alimentación interesante
- Descubrir qué funciona mejor para tu cuerpo`,
    recipes: [
      {
        id: 'pan-de-coliflor',
        title: 'Pan de Coliflor',
        description: 'Ultra bajo en carbohidratos',
        idealFor: 'Cena ligera',
        ingredients: [
          '2 tazas de coliflor rallada',
          '1 huevo',
          '¼ taza de queso parmesano',
          'Sal y pimienta al gusto',
          'Hierbas italianas (opcional)'
        ],
        preparation: [
          'Ralla la coliflor y cocínala en microondas 4 minutos.',
          'Escurre muy bien el exceso de agua (importante).',
          'Mezcla con el huevo, queso y condimentos.',
          'Forma una masa y aplánala en bandeja con papel pergamino.',
          'Hornea a 200°C durante 20 minutos hasta que esté dorada.'
        ],
        bodyFeel: 'Casi imperceptible. Como si no hubieras comido nada pesado.',
        tips: [
          'Escurrir bien la coliflor es el secreto del éxito.',
          'Perfecta como base para pizza saludable.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-de-zucchini',
        title: 'Pan de Zucchini',
        description: 'Fresco y digestivo',
        idealFor: 'Almuerzo de verano',
        ingredients: [
          '1 zucchini mediano rallado',
          '1 huevo',
          '3 cucharadas de harina de almendras',
          '¼ taza de queso feta desmenuzado',
          'Sal, pimienta y eneldo'
        ],
        preparation: [
          'Ralla el zucchini y escurre el exceso de agua.',
          'Mezcla con el huevo, harina y condimentos.',
          'Añade el queso feta.',
          'Cocina en sartén como tortitas, 3 minutos por lado.'
        ],
        bodyFeel: 'Refrescante. Ligero. Perfecto para días calurosos.',
        tips: [
          'El zucchini suelta mucha agua, escurre bien.',
          'Puedes sustituir el feta por cualquier queso que te guste.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-de-zanahoria',
        title: 'Pan de Zanahoria',
        description: 'Dulce natural sin azúcar',
        idealFor: 'Desayuno o merienda',
        ingredients: [
          '1 taza de zanahoria rallada',
          '1 huevo',
          '3 cucharadas de harina de almendras',
          '½ cucharadita de canela',
          '¼ cucharadita de jengibre molido',
          '¼ cucharadita de polvo para hornear'
        ],
        preparation: [
          'Mezcla la zanahoria rallada con el huevo.',
          'Añade los ingredientes secos.',
          'Vierte en molde engrasado.',
          'Hornea a 180°C durante 25 minutos.'
        ],
        bodyFeel: 'Dulce satisfacción sin picos de azúcar. Energía estable.',
        tips: [
          'La zanahoria aporta dulzor natural.',
          'Añade nueces picadas para más textura.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-de-espinaca-sarten',
        title: 'Pan de Espinaca (versión sartén)',
        description: 'Rápido y sin horno',
        idealFor: 'Cuando tienes prisa',
        ingredients: [
          '1 taza de espinacas picadas',
          '2 huevos',
          '2 cucharadas de queso parmesano',
          'Sal, pimienta y nuez moscada'
        ],
        preparation: [
          'Bate los huevos con el queso y condimentos.',
          'Añade las espinacas picadas.',
          'Vierte en sartén antiadherente caliente.',
          'Cocina a fuego bajo 3-4 minutos por lado.'
        ],
        bodyFeel: 'Rápido de hacer, rápido de digerir.',
        tips: [
          'Más parecido a una tortilla, pero funciona como pan.',
          'Lista en menos de 10 minutos.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-de-garbanzos-horno',
        title: 'Pan de Garbanzos (versión horno)',
        description: 'Más esponjoso y alto',
        idealFor: 'Comida principal',
        ingredients: [
          '1 taza de harina de garbanzos',
          '2 huevos',
          '¼ taza de aceite de oliva',
          '½ taza de agua',
          '1 cucharadita de polvo para hornear',
          'Sal y romero'
        ],
        preparation: [
          'Mezcla todos los ingredientes hasta obtener masa homogénea.',
          'Vierte en molde engrasado.',
          'Hornea a 180°C durante 25-30 minutos.',
          'Deja enfriar antes de cortar.'
        ],
        bodyFeel: 'Sustancioso y satisfactorio. Proteína vegetal que llena bien.',
        tips: [
          'Este pan sube más que la versión de sartén.',
          'Perfecto para cortar en rebanadas.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-de-platano-verde',
        title: 'Pan de Plátano Verde',
        description: 'Almidón resistente amigo del intestino',
        idealFor: 'Desayuno energético',
        ingredients: [
          '1 plátano verde',
          '1 huevo',
          '1 cucharada de aceite de coco',
          '¼ cucharadita de sal',
          'Canela al gusto'
        ],
        preparation: [
          'Pela y corta el plátano verde en trozos.',
          'Licúa con el huevo, aceite y condimentos.',
          'Vierte en sartén antiadherente.',
          'Cocina a fuego medio 4 minutos por lado.'
        ],
        bodyFeel: 'Energía sostenida. El almidón resistente alimenta tu microbiota.',
        tips: [
          'El plátano verde tiene almidón resistente, excelente para la flora intestinal.',
          'Sabe diferente al plátano maduro, más neutro.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-de-aguacate',
        title: 'Pan de Aguacate',
        description: 'Cremoso y nutritivo',
        idealFor: 'Desayuno completo',
        ingredients: [
          '½ aguacate maduro',
          '1 huevo',
          '2 cucharadas de harina de almendras',
          '¼ cucharadita de polvo para hornear',
          'Sal y pimienta'
        ],
        preparation: [
          'Machaca el aguacate hasta hacer puré.',
          'Mezcla con el huevo.',
          'Añade la harina, polvo para hornear y condimentos.',
          'Cocina en microondas 90 segundos o en sartén 3 minutos por lado.'
        ],
        bodyFeel: 'Cremoso y satisfactorio. Grasas buenas que sacian.',
        tips: [
          'Usa aguacate bien maduro para mejor textura.',
          'Rico en grasas saludables y potasio.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-de-queso-cottage',
        title: 'Pan de Queso Cottage',
        description: 'Alto en proteína',
        idealFor: 'Post-ejercicio',
        ingredients: [
          '½ taza de queso cottage',
          '1 huevo',
          '3 cucharadas de harina de almendras',
          '¼ cucharadita de polvo para hornear',
          'Sal al gusto'
        ],
        preparation: [
          'Mezcla el queso cottage con el huevo.',
          'Añade la harina, polvo para hornear y sal.',
          'Vierte en molde apto para microondas.',
          'Cocina 90 segundos en microondas.'
        ],
        bodyFeel: 'Proteína que construye, no que inflama.',
        tips: [
          'Excelente fuente de proteína de alta calidad.',
          'Perfecto después de entrenar.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-de-linaza-taza',
        title: 'Pan de Linaza en Taza',
        description: 'Individual y rápido',
        idealFor: 'Porción individual',
        ingredients: [
          '3 cucharadas de harina de linaza',
          '1 huevo',
          '1 cucharada de mantequilla derretida',
          '½ cucharadita de polvo para hornear',
          'Sal al gusto'
        ],
        preparation: [
          'Mezcla todos los ingredientes en una taza grande.',
          'Cocina en microondas 90 segundos.',
          'Deja reposar 30 segundos.',
          'Voltea la taza para desmoldar.'
        ],
        bodyFeel: 'Rápido, fácil, sin desastre. Digestión sin drama.',
        tips: [
          'Perfecto cuando solo quieres una porción.',
          'La taza debe ser grande para que no se desborde.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-de-tahini',
        title: 'Pan de Tahini y Nuez',
        description: 'Sabor intenso y nutritivo',
        idealFor: 'Merienda sofisticada',
        ingredients: [
          '2 cucharadas de tahini',
          '1 huevo',
          '1 cucharada de harina de almendras',
          '¼ cucharadita de polvo para hornear',
          '1 pizca de sal',
          'Nueces picadas (opcional)'
        ],
        preparation: [
          'Mezcla el tahini con el huevo hasta integrar.',
          'Añade la harina, polvo para hornear y sal.',
          'Incorpora las nueces si las usas.',
          'Cocina en microondas 90 segundos.'
        ],
        bodyFeel: 'Rico en minerales. Satisface sin excesos.',
        tips: [
          'El tahini es rico en calcio y hierro.',
          'Sabor a sésamo que combina con todo.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-de-claras',
        title: 'Pan de Claras de Huevo',
        description: 'Proteína pura y liviana',
        idealFor: 'Desayuno proteico',
        ingredients: [
          '½ taza de claras de huevo',
          '1 cucharada de almendras molidas',
          '¾ taza de harina de avena o de almendras',
          '1 cucharadita de bicarbonato',
          'Un chorrito de jugo de limón',
          'Sal y especias a gusto'
        ],
        preparation: [
          'Procesa todos los ingredientes hasta integrar.',
          'Cocina en sartén tapada a fuego bajo durante 15 minutos.'
        ],
        bodyFeel: 'Satisfecha. Sin inflamación prolongada.',
        tips: [
          'Usa claras de huevo frescas o pasteurizadas.',
          'Perfecto para dietas altas en proteína.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-nube-gourmet',
        title: 'Pan Nube Gourmet',
        description: 'La versión elevada',
        idealFor: 'Ocasiones especiales',
        ingredients: [
          '2 huevos (separados)',
          '2 cucharadas de queso crema',
          '¼ cucharadita de cremor tártaro',
          '1 pizca de sal'
        ],
        preparation: [
          'Separa las claras de las yemas.',
          'Bate las claras con el cremor tártaro hasta punto de nieve.',
          'Mezcla las yemas con el queso crema.',
          'Incorpora suavemente las claras a las yemas.',
          'Forma montoncitos en bandeja con papel pergamino.',
          'Hornea a 150°C durante 25-30 minutos.'
        ],
        bodyFeel: 'Aire puro. Como comer una nube de verdad.',
        tips: [
          'La técnica de separar huevos hace toda la diferencia.',
          'Estos panes son tan ligeros que casi flotan.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      }
    ]
  },
  {
    id: 'cierre',
    title: 'Cierre',
    content: `# El problema nunca fue tu cuerpo

Llegaste hasta aquí.

Y eso significa que ya no eres la misma persona que empezó a leer este libro.

Ahora sabes que la hinchazón no es tu culpa. Que tu cuerpo no está roto. Que no eres "demasiado sensible" ni "exagerada".

Simplemente estabas comiendo algo que no era realmente pan.

---

## Lo Que Has Aprendido

✓ Por qué el pan comercial te inflama (y no es el gluten)

✓ Cómo identificar los panes que te hacen daño

✓ Qué pan elegir según el momento del día

✓ 20 recetas que puedes hacer en minutos

✓ Cómo escuchar a tu cuerpo y ajustar según lo que funcione

---

## El Camino Adelante

No tienes que ser perfecta.

No tienes que hacer todas las recetas.

No tienes que renunciar al pan para siempre.

Solo tienes que elegir mejor. Y ahora sabes cómo.

---

## Mi Invitación

Empieza con una receta. La que más te llame la atención.

Prepárala mañana.

Y observa cómo te sientes.

Ese es el único experimento que importa.

Tu cuerpo te dirá la verdad. Solo tienes que escucharlo.

---

## Gracias

Por confiar en este proceso.
Por darte la oportunidad de sentirte mejor.
Por elegirte a ti misma.

El pan real existe.
Y ahora es tuyo.

---

*Con cariño,*

*Tu guía hacia el pan sin hinchazón*`
  }
];

// Utility functions
export const getAllRecipes = (): Recipe[] => {
  return ebookSections.reduce((acc: Recipe[], section) => {
    if (section.recipes) {
      return [...acc, ...section.recipes];
    }
    return acc;
  }, []);
};

export const getRecipeById = (id: string): Recipe | undefined => {
  return getAllRecipes().find(recipe => recipe.id === id);
};

export const getSectionById = (id: string): Section | undefined => {
  return ebookSections.find(section => section.id === id);
};

export const getNextRecipe = (currentId: string): Recipe | undefined => {
  const allRecipes = getAllRecipes();
  const currentIndex = allRecipes.findIndex(recipe => recipe.id === currentId);
  if (currentIndex !== -1 && currentIndex < allRecipes.length - 1) {
    return allRecipes[currentIndex + 1];
  }
  return undefined;
};

export const getPreviousRecipe = (currentId: string): Recipe | undefined => {
  const allRecipes = getAllRecipes();
  const currentIndex = allRecipes.findIndex(recipe => recipe.id === currentId);
  if (currentIndex > 0) {
    return allRecipes[currentIndex - 1];
  }
  return undefined;
};
