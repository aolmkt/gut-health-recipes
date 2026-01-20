export interface Recipe {
  id: string;
  title: string;
  description?: string;
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
  type: 'intro' | 'block' | 'part' | 'closing';
  content?: string;
  recipes?: Recipe[];
}

export const ebookSections: Section[] = [
  {
    id: 'introduccion',
    title: 'Introducción',
    type: 'intro',
    content: `Bienvenido a **Pan Sin Hinchazón**, tu manual completo para disfrutar del pan sin inflamación.

Este libro nace de una pregunta que muchos nos hacemos: ¿Por qué el pan me inflama? La respuesta no es simple, pero la solución sí puede serlo.

Durante años, el pan ha sido demonizado. Sin embargo, el problema no es el pan en sí mismo, sino cómo lo preparamos, qué ingredientes usamos y cómo lo combinamos con otros alimentos.

En este manual aprenderás:
- Los fundamentos de la digestión y por qué ciertos panes inflaman
- Técnicas de fermentación que transforman el gluten
- Harinas alternativas y sus beneficios
- Recetas probadas que nutren sin inflamar
- Un sistema de rotación para mantener tu cuerpo en equilibrio

**Tu viaje hacia un pan que nutre comienza aquí.**`
  },
  {
    id: 'bloque-1',
    title: 'Bloque 1: Fundamentos',
    type: 'block',
    content: `## Entendiendo la Inflamación

La inflamación digestiva ocurre cuando nuestro sistema no puede procesar correctamente ciertos componentes de los alimentos. En el caso del pan convencional, varios factores contribuyen:

### El problema del gluten moderno
El trigo actual ha sido modificado para contener más gluten, haciéndolo más difícil de digerir. La fermentación rápida industrial no permite que las enzimas descompongan estas proteínas.

### Fermentación: La clave olvidada
La fermentación lenta (12-24 horas) permite que las bacterias y levaduras predigieran el gluten, reduciendo significativamente su potencial inflamatorio.

### Señales de que el pan te inflama:
- Hinchazón abdominal después de comer
- Gases o malestar digestivo
- Fatiga post-comida
- Retención de líquidos

### La solución está en el proceso
No necesitas eliminar el pan de tu vida. Necesitas pan elaborado correctamente, con ingredientes de calidad y tiempo de fermentación adecuado.`
  },
  {
    id: 'bloque-2',
    title: 'Bloque 2: Harinas y Fermentos',
    type: 'block',
    content: `## Harinas que Nutren

No todas las harinas son iguales. Aquí exploramos las mejores opciones para un pan digestivo.

### Harinas recomendadas:

**Espelta integral**
Ancestro del trigo moderno, contiene gluten pero es más digerible. Rica en proteínas y minerales.

**Centeno**
Fermentación natural excepcional. Su gluten es diferente al del trigo, creando panes más densos pero muy nutritivos.

**Trigo sarraceno**
Sin gluten, sabor terroso. Perfecto para mezclas o panes específicos.

**Avena certificada sin gluten**
Suave y nutritiva. Excelente para panes suaves y húmedos.

### El arte del fermento madre

La masa madre es tu mejor aliada. Un fermento activo de 7-14 días transforma completamente las propiedades del pan:

- Reduce el índice glucémico
- Predigiere las proteínas
- Aumenta la biodisponibilidad de minerales
- Mejora la conservación natural

### Mantenimiento del fermento
Alimenta tu masa madre cada 24 horas a temperatura ambiente, o cada semana si la guardas refrigerada. Usa proporciones 1:1:1 (fermento:harina:agua).`
  },
  {
    id: 'bloque-3',
    title: 'Bloque 3: Técnicas Esenciales',
    type: 'block',
    content: `## Técnicas para Pan Digestivo

### Autólisis
Mezcla harina y agua, deja reposar 30-60 minutos antes de añadir sal y fermento. Esto hidrata la harina y comienza el desarrollo del gluten de forma suave.

### Fermentación en frío
Después del primer levado, refrigera la masa 12-48 horas. El frío ralentiza la fermentación, desarrollando sabores complejos y mejorando la digestibilidad.

### Plegados suaves
En lugar de amasar vigorosamente, realiza plegados suaves cada 30 minutos durante las primeras 2 horas. Esto desarrolla estructura sin estresar la masa.

### Horneado con vapor
Los primeros 15 minutos de horneado deben ser con vapor (una bandeja con agua caliente en el horno). Esto crea una corteza crujiente y permite la expansión adecuada.

### Reposo post-horneado
Nunca cortes el pan recién salido del horno. Espera al menos 1 hora para que complete su cocción interna y los almidones se estabilicen.

### Regla de oro
Cuanto más larga la fermentación, mejor la digestión. Planifica tus panes con tiempo y tu cuerpo te lo agradecerá.`
  },
  {
    id: 'parte-1-recetas',
    title: 'Parte 1: Recetas Esenciales',
    type: 'part',
    recipes: [
      {
        id: 'pan-espelta-basico',
        title: 'Pan de Espelta Básico',
        description: 'El pan fundamental para comenzar tu viaje. Fermentación larga, sabor suave y excelente digestibilidad.',
        ingredients: [
          '500g de harina de espelta integral',
          '350ml de agua filtrada tibia',
          '100g de masa madre activa',
          '10g de sal marina',
          '1 cucharada de aceite de oliva (opcional)'
        ],
        preparation: [
          'Mezcla la harina con el agua y deja reposar 30 minutos (autólisis).',
          'Añade la masa madre y mezcla bien con las manos durante 3 minutos.',
          'Incorpora la sal y el aceite, amasando suavemente hasta integrar.',
          'Realiza 4 plegados cada 30 minutos durante las siguientes 2 horas.',
          'Deja fermentar a temperatura ambiente 4-6 horas hasta que duplique.',
          'Forma una bola tensa y coloca en un banneton enharinado.',
          'Refrigera 12-24 horas.',
          'Hornea a 230°C con vapor los primeros 15 minutos, luego 20 minutos más a 210°C.',
          'Deja enfriar completamente antes de cortar (mínimo 1 hora).'
        ],
        bodyFeel: 'Este pan te dejará satisfecho sin pesadez. La fermentación larga hace que los nutrientes estén disponibles y la digestión sea suave. Ideal para el desayuno o como acompañamiento.',
        tips: [
          'Si no tienes masa madre, puedes usar 5g de levadura fresca, pero aumenta la fermentación en frío a 48 horas.',
          'La espelta absorbe menos agua que el trigo, ajusta si la masa está muy húmeda.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      },
      {
        id: 'pan-centeno-semillas',
        title: 'Pan de Centeno con Semillas',
        description: 'Denso, nutritivo y con un sabor profundo. Las semillas aportan textura y ácidos grasos esenciales.',
        ingredients: [
          '300g de harina de centeno integral',
          '200g de harina de espelta',
          '380ml de agua tibia',
          '120g de masa madre de centeno',
          '12g de sal marina',
          '50g de semillas de girasol',
          '30g de semillas de lino',
          '30g de semillas de calabaza'
        ],
        preparation: [
          'Tuesta ligeramente las semillas en una sartén seca.',
          'Mezcla las harinas con el agua y deja reposar 45 minutos.',
          'Añade la masa madre, mezcla 5 minutos.',
          'Incorpora la sal y las semillas, integrando bien.',
          'Este pan no necesita plegados. Deja fermentar 3-4 horas.',
          'Vuelca en un molde rectangular engrasado.',
          'Fermenta 2 horas más hasta que suba un tercio.',
          'Hornea a 220°C durante 50-60 minutos.',
          'Desmolda y deja enfriar sobre una rejilla al menos 4 horas.'
        ],
        bodyFeel: 'El centeno tiene un efecto saciante prolongado. Notarás energía estable durante horas, sin picos de azúcar. Excelente para quienes buscan control de peso.',
        tips: [
          'El pan de centeno mejora con el tiempo. Espera 24 horas antes de consumir para mejor sabor.',
          'Corta rebanadas finas, es muy nutritivo.',
          'Conserva envuelto en tela hasta una semana.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      },
      {
        id: 'focaccia-hierbas',
        title: 'Focaccia de Hierbas Mediterráneas',
        description: 'Esponjosa, aromática y festiva. Perfecta para compartir y disfrutar con aceite de oliva.',
        ingredients: [
          '400g de harina de espelta blanca',
          '100g de harina de trigo sarraceno',
          '380ml de agua tibia',
          '80g de masa madre',
          '10g de sal marina',
          '60ml de aceite de oliva virgen extra',
          'Romero fresco',
          'Tomillo fresco',
          'Escamas de sal marina',
          'Aceitunas negras (opcional)'
        ],
        preparation: [
          'Mezcla las harinas con el agua, reposa 30 minutos.',
          'Añade la masa madre y 30ml de aceite, mezcla bien.',
          'Incorpora la sal, amasa 4 minutos.',
          'Plegados cada 30 minutos durante 2 horas.',
          'Fermenta 4 horas a temperatura ambiente.',
          'Vuelca en una bandeja aceitada (30x40cm), estira con los dedos.',
          'Cubre con aceite restante, refrigera toda la noche.',
          'Retira del frío 2 horas antes de hornear.',
          'Haz hoyuelos con los dedos, añade hierbas, sal y aceitunas.',
          'Hornea a 220°C durante 25-30 minutos hasta dorar.'
        ],
        bodyFeel: 'Ligera a pesar de su apariencia generosa. El aceite de oliva facilita la digestión y las hierbas aportan propiedades digestivas. Te sentirás nutrido, no pesado.',
        tips: [
          'Usa el mejor aceite de oliva que tengas, marca la diferencia.',
          'Añade tomates cherry cortados para una versión de verano.',
          'Congela porciones para tener siempre pan festivo disponible.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      },
      {
        id: 'pan-avena-miel',
        title: 'Pan Suave de Avena y Miel',
        description: 'Tierno, ligeramente dulce y reconfortante. Ideal para quienes prefieren texturas suaves.',
        ingredients: [
          '350g de harina de espelta',
          '100g de copos de avena finos',
          '50g de avena molida',
          '320ml de leche de avena tibia',
          '80g de masa madre',
          '40g de miel cruda',
          '8g de sal marina',
          '30g de mantequilla sin sal (temperatura ambiente)'
        ],
        preparation: [
          'Hidrata los copos de avena en la leche tibia durante 20 minutos.',
          'Mezcla las harinas con la avena hidratada.',
          'Añade masa madre y miel, mezcla hasta homogeneizar.',
          'Incorpora sal y mantequilla, amasa 6 minutos hasta suavizar.',
          'Fermentación de 4-5 horas con plegados cada hora.',
          'Forma un óvalo y coloca en molde de pan engrasado.',
          'Fermenta 2-3 horas hasta que llegue al borde del molde.',
          'Hornea a 190°C durante 40-45 minutos.',
          'Retira del molde y enfría sobre rejilla.'
        ],
        bodyFeel: 'La avena regula el tránsito intestinal y estabiliza el azúcar en sangre. Este pan te dará una sensación de calidez y satisfacción, perfecto para empezar el día.',
        tips: [
          'Tuesta rebanadas y unta con mantequilla y más miel.',
          'Perfecto para sándwiches por su textura tierna.',
          'Añade pasas o nueces para versión más nutritiva.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      },
      {
        id: 'pan-sin-gluten',
        title: 'Pan Rústico Sin Gluten',
        description: 'Para los días de máximo cuidado digestivo. Textura sorprendente sin gluten.',
        ingredients: [
          '200g de harina de arroz integral',
          '100g de harina de trigo sarraceno',
          '100g de fécula de tapioca',
          '50g de harina de almendra',
          '350ml de agua tibia',
          '5g de levadura seca',
          '10g de psyllium en polvo',
          '8g de sal marina',
          '30ml de aceite de oliva',
          '1 cucharada de miel'
        ],
        preparation: [
          'Mezcla el psyllium con el agua y deja reposar 5 minutos hasta gelificar.',
          'Combina todas las harinas secas.',
          'Añade la levadura a las harinas y mezcla.',
          'Incorpora el gel de psyllium, aceite y miel.',
          'Mezcla vigorosamente 3 minutos (esta masa es más líquida).',
          'Vierte en molde engrasado y forrado.',
          'Deja fermentar 90 minutos cubierto.',
          'Hornea a 200°C durante 50-55 minutos.',
          'Deja enfriar completamente en el molde antes de desmoldar.'
        ],
        bodyFeel: 'Gentil con el sistema digestivo más sensible. Te sentirás ligero y con energía. Este pan es ideal cuando necesitas un descanso del gluten.',
        tips: [
          'El psyllium es esencial para la estructura, no lo omitas.',
          'Mejora en sabor al día siguiente, tuesta para disfrutar.',
          'Congela rebanado para tener siempre disponible.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      }
    ]
  },
  {
    id: 'parte-2-rotacion',
    title: 'Parte 2: Sistema de Rotación',
    type: 'part',
    content: `## El Sistema de Rotación

La clave para evitar sensibilidades alimentarias es la variedad. Nuestro cuerpo puede desarrollar intolerancia a cualquier alimento que consumamos en exceso.

### Principios del sistema:

**Regla de los 4 días**
No repitas la misma harina en menos de 4 días. Esto permite que tu sistema digestivo descanse y se recupere.

**Calendario semanal sugerido:**
- Lunes: Pan de espelta
- Martes: Sin pan (día de descanso)
- Miércoles: Pan de centeno
- Jueves: Pan sin gluten
- Viernes: Sin pan
- Sábado: Focaccia de espelta
- Domingo: Pan de avena

### Escucha tu cuerpo

Mantén un diario digestivo las primeras semanas:
- Qué pan comiste
- Cantidad consumida
- Cómo te sentiste después
- Calidad del sueño
- Nivel de energía

Esto te ayudará a identificar qué panes funcionan mejor para ti.

### Ajustes personales

Si notas molestias con algún pan específico:
1. Aumenta el tiempo de fermentación
2. Reduce la cantidad consumida
3. Prueba otra harina de la misma receta
4. Descansa esa receta durante 2 semanas`,
    recipes: [
      {
        id: 'pan-semana-1',
        title: 'Pan de Rotación Semana 1 - Espelta y Amapola',
        description: 'Ligero y aromático, perfecto para iniciar el ciclo de rotación.',
        ingredients: [
          '450g de harina de espelta integral',
          '50g de harina de arroz',
          '330ml de agua',
          '100g de masa madre',
          '10g de sal',
          '30g de semillas de amapola'
        ],
        preparation: [
          'Autólisis de harinas y agua por 40 minutos.',
          'Añade masa madre, mezcla 4 minutos.',
          'Incorpora sal y semillas de amapola.',
          'Cuatro plegados cada 30 minutos.',
          'Fermentación 5 horas a temperatura ambiente.',
          'Forma y coloca en banneton.',
          'Refrigera 12-18 horas.',
          'Hornea a 230°C con vapor 15 minutos, luego 200°C 25 minutos.',
          'Enfría 1 hora antes de cortar.'
        ],
        bodyFeel: 'Digestión fluida y saciedad duradera. Las semillas de amapola aportan calcio y las fibras de espelta alimentan tu microbiota.',
        section: 'parte-2-rotacion',
        block: 'Sistema de Rotación'
      },
      {
        id: 'pan-semana-2',
        title: 'Pan de Rotación Semana 2 - Centeno Oscuro',
        description: 'Intenso y profundo, para el día de centeno en tu rotación.',
        ingredients: [
          '400g de harina de centeno integral',
          '100g de harina de centeno blanca',
          '400ml de agua tibia',
          '150g de masa madre de centeno',
          '12g de sal',
          '1 cucharada de melaza',
          '1 cucharadita de alcaravea'
        ],
        preparation: [
          'Mezcla todos los ingredientes en un bowl grande.',
          'Bate vigorosamente 5 minutos (el centeno no desarrolla gluten igual).',
          'Vierte en molde de pan engrasado.',
          'Alisa la superficie con una espátula húmeda.',
          'Fermenta 3-4 horas hasta que crezca un tercio.',
          'Hornea a 200°C durante 60-70 minutos.',
          'Retira del molde y enfría al menos 12 horas antes de cortar.'
        ],
        bodyFeel: 'Saciedad profunda y energía constante. El centeno libera glucosa lentamente, evitando picos de insulina. Ideal para mantener el foco mental.',
        tips: [
          'Este pan DEBE reposar 12-24 horas para que el almidón se estabilice.',
          'Corta rebanadas muy finas, es muy nutritivo.'
        ],
        section: 'parte-2-rotacion',
        block: 'Sistema de Rotación'
      },
      {
        id: 'pan-semana-3',
        title: 'Pan de Rotación Semana 3 - Trigo Sarraceno y Nueces',
        description: 'Sin gluten, rico en proteínas y minerales. Sabor terroso con el crunch de las nueces.',
        ingredients: [
          '300g de harina de trigo sarraceno',
          '100g de fécula de patata',
          '50g de harina de arroz',
          '350ml de agua tibia',
          '5g de levadura seca',
          '10g de psyllium',
          '8g de sal',
          '100g de nueces troceadas',
          '2 cucharadas de aceite de nuez'
        ],
        preparation: [
          'Hidrata el psyllium en el agua por 5 minutos.',
          'Mezcla las harinas con la levadura.',
          'Combina el gel de psyllium con aceite.',
          'Une secos y líquidos, mezcla 3 minutos.',
          'Añade nueces y sal, integra bien.',
          'Vierte en molde engrasado.',
          'Fermenta 90 minutos tapado.',
          'Hornea a 200°C durante 50-55 minutos.',
          'Enfría completamente en el molde.'
        ],
        bodyFeel: 'Ligero pero sustancioso. El trigo sarraceno es rico en rutina, beneficiosa para la circulación. Las nueces aportan omega-3 para la salud cerebral.',
        section: 'parte-2-rotacion',
        block: 'Sistema de Rotación'
      }
    ]
  },
  {
    id: 'cierre',
    title: 'Cierre: Tu Nuevo Camino',
    type: 'closing',
    content: `## Has llegado al final del Manual

Pero esto es solo el comienzo de tu viaje.

### Lo que has aprendido:
- Por qué el pan convencional inflama
- Cómo la fermentación transforma el gluten
- Técnicas para panes digestivos
- Recetas fundamentales probadas
- Un sistema de rotación sostenible

### Próximos pasos:

**Semana 1-2:** Prepara tu masa madre y elabora el Pan de Espelta Básico.

**Semana 3-4:** Incorpora el Pan de Centeno con Semillas.

**Mes 2:** Implementa el sistema de rotación completo.

**Mes 3 en adelante:** Experimenta con tus propias variaciones.

### Recuerda siempre:
- El tiempo es tu ingrediente secreto
- Escucha a tu cuerpo
- La variedad previene sensibilidades
- El pan real nutre, no inflama

### Una última reflexión

El pan ha sido el alimento fundamental de la humanidad durante miles de años. Nuestros ancestros no tenían problemas digestivos con el pan porque lo elaboraban correctamente: fermentación lenta, harinas integrales, tiempo y paciencia.

Al recuperar estas técnicas, no solo mejoras tu digestión. Reconectas con una tradición milenaria de nutrición consciente.

**Que cada pan que hornees te acerque más a tu bienestar.**

---

*Gracias por confiar en Pan Sin Hinchazón.*
*Tu cuerpo merece pan de verdad.*`
  }
];

export const getAllRecipes = (): Recipe[] => {
  return ebookSections
    .filter(section => section.recipes)
    .flatMap(section => section.recipes || []);
};

export const getRecipeById = (id: string): Recipe | undefined => {
  return getAllRecipes().find(recipe => recipe.id === id);
};

export const getSectionById = (id: string): Section | undefined => {
  return ebookSections.find(section => section.id === id);
};

export const getNextRecipe = (currentId: string): Recipe | undefined => {
  const recipes = getAllRecipes();
  const currentIndex = recipes.findIndex(r => r.id === currentId);
  return recipes[currentIndex + 1];
};

export const getPreviousRecipe = (currentId: string): Recipe | undefined => {
  const recipes = getAllRecipes();
  const currentIndex = recipes.findIndex(r => r.id === currentId);
  return recipes[currentIndex - 1];
};
