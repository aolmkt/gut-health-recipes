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

- No tienes un estómago "delicado".
- No exageras.
- No estás imaginando cosas.

Tienes un cuerpo inteligente reaccionando a algo que no debería estar ahí.

Durante años te hicieron creer que hincharte después de comer pan era normal. Que amar el pan tenía un precio. Que si querías sentirte bien, tenías que renunciar.

Este manual existe para corregir esa mentira.

Aquí no vas a encontrar dietas, reglas estrictas ni promesas imposibles. Vas a encontrar algo mucho más simple: alivio.

Comer pan sin sentir que tu abdomen se infla. Sin pesadez. Sin culpa. Sin tener que desabrocharte el pantalón antes del mediodía.

Si alguna vez pensaste: "¿por qué a mí me pasa esto?", este manual es para ti.`
  },
  {
    id: 'bloque-1',
    title: 'Bloque 1: La Corrección',
    content: `# Por qué te hinchas

El problema no eres tú. El problema no es el pan.

El problema es cómo se hace el pan hoy.

El pan moderno fue diseñado para durar semanas en una bolsa. Para ser blando siempre. Para producir en masa.

No fue diseñado para ser digerido con facilidad.

Por eso pasa esto: comes pan, al principio todo parece normal, y poco después tu vientre se endurece, se inflama y se llena de aire.

Eso no es debilidad. Es tu cuerpo avisando.

Hincharse no es normal. Lo que pasa es que normalizamos lo incorrecto durante demasiado tiempo.

Cuando el pan está hecho con ingredientes simples, reales y bien combinados, el cuerpo no lucha. Digiere. Acepta. Sigue.

Eso es lo que vamos a recuperar aquí.`
  },
  {
    id: 'bloque-2',
    title: 'Bloque 2: El Criterio',
    content: `# El Semáforo del Pan

No necesitas saber de nutrición. Solo necesitas saber qué pan te inflama y cuál no.

## 🔴 PAN ROJO — EVÍTALO

Pan de paquete. Pan que dura meses. Pan muy blanco, muy blando, muy perfecto.

**Cómo se siente tu cuerpo:** Barriga dura. Gases. Pesadez inmediata.

## 🟡 PAN AMARILLO — CUIDADO

Pan integral industrial. Pan "fitness" lleno de ingredientes raros.

**Cómo se siente tu cuerpo:** No explota, pero molesta. Inflamación lenta y constante.

## 🟢 PAN VERDE — PAN REAL

Pan hecho con huevos. Harinas simples y densas. Preparaciones caseras.

**Cómo se siente tu cuerpo:** Comes. Te sientes satisfecha. Sigues tu día.`
  },
  {
    id: 'bloque-3',
    title: 'Bloque 3: El Uso Real',
    content: `# El pan correcto para cada momento

El cuerpo cambia durante el día. Y el pan también debe adaptarse.

- 🟢 **DESAYUNO LIGERO:** Para empezar el día sin peso.
- 🟡 **COMIDA / SÁNDWICH:** Para sostenerte sin inflamación.
- 🟢 **ANTOJO Y CONFORT:** Para el placer sin castigo.`
  },
  {
    id: 'parte-1-recetas',
    title: 'Parte 1: Recetas Esenciales',
    content: `# Empieza aquí

Estas son las recetas base. No necesitas más para dejar de hincharte.

Úsalas primero. Domínalas. Confía en tu cuerpo.`,
    recipes: [
      {
        id: 'pan-nube',
        title: 'Pan Nube',
        description: 'Ligero, suave y fácil de digerir',
        idealFor: 'Desayuno ligero',
        ingredients: [
          '1 huevo grande',
          '1 cucharada de yogur griego o requesón (15g)',
          '½ cucharadita de polvo para hornear (2g)',
          '1 pizca de sal'
        ],
        preparation: [
          'Mezcla todos los ingredientes hasta integrar completamente.',
          'Engrasa un envase pequeño de cristal apto para microondas.',
          'Cocina en microondas durante 3 minutos o en horno a 180 °C (350 °F) durante 12 minutos.',
          'Deja enfriar antes de consumir.'
        ],
        bodyFeel: 'Liviano. Sin gases. Sin barriga dura.',
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
        idealFor: 'Desayuno ligero',
        ingredients: [
          '2 cucharadas de linaza molida (14g)',
          '1 huevo grande',
          '1 cucharada de requesón o yogur griego sin azúcar (15g)',
          '½ cucharadita de polvo para hornear (2.5g)'
        ],
        preparation: [
          'En un tazón pequeño, combina la linaza molida, el huevo, el requesón (o yogur griego) y el polvo para hornear. Mezcla bien hasta que los ingredientes estén completamente integrados y tengas una masa homogénea.',
          'Engrasa ligeramente una taza pequeña apta para microondas con un poco de aceite de oliva o mantequilla. Vierte la mezcla en la taza, asegurándote de que no sobrepase las tres cuartas partes de su capacidad, ya que crecerá durante la cocción.',
          'Cocina en el microondas durante 3 minutos a máxima potencia.',
          'Retira la taza del microondas y deja enfriar unos minutos antes de desmoldar. Sirve como está o córtalo en rodajas.',
          'Opción horno: Precalienta el horno a 180 °C (355 °F). Usa un ramekin o molde pequeño y engrásalo ligeramente. Hornea durante 15 minutos o hasta que al insertar un palillo, este salga limpio.'
        ],
        bodyFeel: 'Digestión tranquila. Menos inflamación intestinal.',
        tips: [
          'La linaza es rica en omega-3 y fibra soluble.',
          'Puedes tostarlo ligeramente si lo prefieres crujiente.',
          'Ideal para quienes necesitan regularidad digestiva.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      },
      {
        id: 'pan-de-espinaca',
        title: 'Pan de Espinaca',
        description: 'Nutrición sin pesadez',
        idealFor: 'Desayuno o comida ligera',
        ingredients: [
          '2½ tazas de espinaca fresca (70g)',
          '1 cucharada de almendras (10g)',
          '½ taza de claras de huevo (130ml)',
          '1 cucharadita de yogur griego (5g)',
          '¾ taza de harina de avena (80g) — puedes reemplazarla con harina de almendras o coco',
          '1 cucharadita de bicarbonato de sodio (4g)',
          '1 cucharadita de jugo de limón (5ml)',
          'Especias a gusto (sal, pimienta, orégano, pimentón, etc.)'
        ],
        preparation: [
          'Mezclar los ingredientes líquidos y sólidos (espinaca, almendras, claras de huevo, yogur griego) en una licuadora o procesadora de alimentos. Procesa hasta obtener una mezcla homogénea y bien licuada.',
          'Agregar los ingredientes secos (harina de avena, bicarbonato de sodio, jugo de limón) a la mezcla y mezcla bien hasta que todos los ingredientes estén integrados. Agrega las especias que prefieras y mezcla de nuevo.',
          'Precalienta una sartén antiadherente de 10-12 cm de diámetro (o lo que tengas en casa). Cocina la mezcla a fuego bajo durante unos 15 minutos con tapa, vigilando para evitar que se queme. Puedes verificar el punto de cocción insertando un palillo en el centro del pan; si sale limpio, está listo.',
          'Deja que el pan se enfríe completamente antes de cortarlo.',
          'Corta el pan a la mitad o en varias capas y rellénalo con lo que prefieras (puedes usar queso, hummus, aguacate, etc.).'
        ],
        bodyFeel: 'Alimentada. Ligera. Sin hinchazón.',
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
        idealFor: 'Comida o cena',
        ingredients: [
          '2 tazas de harina de almendras (aprox. 200g)',
          '1 cucharada de polvo para hornear (aprox. 4g)',
          '1 cucharadita de sal',
          '4 huevos orgánicos (a temperatura ambiente)',
          '3 cucharadas de semillas de lino molidas (aprox. 30g)',
          '½ taza de agua (aprox. 120ml)',
          '½ taza de mantequilla derretida (aprox. 113g) o aceite de oliva (aprox. 120ml)',
          'Opcional: Semillas adicionales de lino, chía o sésamo para decorar'
        ],
        preparation: [
          'Precalienta el horno a 350 °F (180 °C).',
          'Muele las semillas de lino en un procesador o molino, si no están ya trituradas.',
          'En un tazón grande, mezcla los ingredientes secos: harina de almendra, sal y polvo para hornear. Revuelve bien para que se combinen de manera uniforme.',
          'En otro tazón o con una batidora de mano, combina los ingredientes húmedos: mantequilla derretida o aceite de oliva, semillas de lino molidas, huevos y agua. Bate hasta que la mezcla esté bien integrada.',
          'Une las mezclas seca y húmeda. Incorpora los ingredientes secos a la mezcla húmeda y bate hasta obtener una masa homogénea y uniforme.',
          'Prepara el molde: engrasa un molde para pan con aceite de oliva o mantequilla, o fórralo con papel para hornear.',
          'Vierte la mezcla en el molde preparado y, si lo deseas, decora la superficie con semillas adicionales.',
          'Hornea por 30-45 minutos o hasta que al insertar un palillo en el centro, éste salga limpio.',
          'Deja enfriar antes de desmoldar y cortar para evitar que se desmorone. Rinde aproximadamente 8 rebanadas.'
        ],
        bodyFeel: 'Saciedad sin sueño. Estabilidad.',
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
          '4 cucharadas de garbanzos cocidos (60g)',
          '1 huevo grande',
          '½ cucharadita de levadura (polvo de hornear) (2g)',
          '1 pizca de sal'
        ],
        preparation: [
          'Mezclar los ingredientes y procesa todo hasta obtener una mezcla homogénea y cremosa.',
          'Engrasa un envase pequeño de cristal apto para microondas o una bandeja pequeña para horno con un poco de aceite o mantequilla.',
          'Cocina en el microondas de 3-4 minutos, o hasta que el pan esté firme y cocido. El tiempo puede variar según la potencia de tu microondas.',
          'Cocción en el horno (opcional): Hornea a 350 °F (175 °C) de 12-15 minutos, o hasta que esté dorado y firme al tacto.',
          'Una vez listo, deja enfriar antes de consumir.'
        ],
        bodyFeel: 'Satisfecha. Energía estable. Sin gases.',
        tips: [
          'Puedes usar garbanzos cocidos de lata, siempre y cuando los enjuagues bien para eliminar el exceso de sodio.',
          'Si prefieres una textura más suave, puedes agregar una cucharada de yogur griego para hacer la mezcla más cremosa.'
        ],
        section: 'parte-1-recetas',
        block: 'Recetas Esenciales'
      },
      {
        id: 'pan-de-calabaza',
        title: 'Pan de Calabaza',
        description: 'Suave y amable con la digestión',
        idealFor: 'Merienda o comida ligera',
        ingredients: [
          '½ taza de puré de calabaza cocida (100g)',
          '1 huevo grande',
          '½ cucharadita de levadura (polvo de hornear) (2g)',
          '1 pizca de sal',
          '1 cucharada de fécula de maíz o harina de arroz (opcional, solo si la mezcla está muy líquida) (10g)'
        ],
        preparation: [
          'Procesa el puré de calabaza, huevo, la levadura y sal en una procesadora de alimentos hasta obtener una mezcla homogénea. Si notas que la mezcla está demasiado líquida, agrega la fécula de maíz/harina de coco o almendras para espesar.',
          'Engrasa un envase pequeño de cristal apto para microondas o una bandeja pequeña para horno con un poco de aceite o mantequilla.',
          'Cocina en el microondas durante 3-4 minutos, o hasta que el pan esté firme y cocido. Vigila la cocción para evitar que se seque demasiado.',
          'Cocción en el horno: Hornea a 350 °F (175 °C) durante 12-15 minutos.',
          'Una vez cocido, deja enfriar antes de consumir.'
        ],
        bodyFeel: 'Confort.',
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
        idealFor: 'Antojo',
        ingredients: [
          '2 plátanos maduros (300g)',
          '3 huevos',
          'Leche de almendra: ⅓ taza (80ml)',
          'Polvo para hornear: 1 cucharada (12g)',
          'Vainilla: 1 cucharada (15ml)',
          'Sal: Una pizca (1g)',
          'Lascas de almendras (para decorar): 2 cucharadas (15g)',
          'Opcional: Para un toque extra, puedes añadir una pizca de canela o nuez moscada a la mezcla'
        ],
        preparation: [
          'Precalienta el horno a 350 °F (175 °C).',
          'Engrasa un molde para pan o cúbrelo con papel para hornear.',
          'En una procesadora de alimentos, coloca los plátanos pelados, los huevos, la leche de almendra, el polvo para hornear, la vainilla y la pizca de sal. Procesa hasta obtener una mezcla suave y homogénea.',
          'Vierte la mezcla en el molde preparado y alisa la superficie con una espátula. Decora con lascas de almendras esparciéndolas uniformemente por encima.',
          'Hornea durante 35-40 minutos o hasta que un palillo insertado en el centro salga limpio.',
          'Deja enfriar completamente antes de desmoldar y cortar.'
        ],
        bodyFeel: 'Satisfecha emocionalmente. Sin culpa.',
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
        idealFor: 'Antojo y confort',
        ingredients: [
          'Queso cottage: ½ taza (100g)',
          '2 huevos',
          'Sal y pimienta: a gusto'
        ],
        preparation: [
          'Enciende la waflera para que esté caliente al momento de agregar la mezcla.',
          'En un tazón, mezcla el queso cottage, los huevos, la sal y la pimienta hasta que quede una masa uniforme. Si deseas, puedes mezclar ligeramente con un tenedor o batidor manual para integrar bien los ingredientes.',
          'Rocía la waflera con un poco de spray antiadherente o aceite, si es necesario. Vierte la mezcla en la waflera caliente, distribuyéndola de manera uniforme.',
          'Cierra la waflera y cocina durante 3-5 minutos o hasta que el pan esté firme y dorado al gusto.',
          'Retira con cuidado el pan de queso cottage de la waflera y sirve caliente. Puedes usarlo como base para un sándwich o acompañarlo con una ensalada.'
        ],
        bodyFeel: 'Confort inmediato. Cero arrepentimiento.',
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
    content: `# Más opciones cuando ya estás cómoda

No necesitas usar esta parte ahora. Úsala cuando quieras variar sin volver a inflamarte.`,
    recipes: [
      {
        id: 'pan-de-coliflor',
        title: 'Pan de Coliflor',
        description: 'Ligero, pero estructurado',
        idealFor: 'Comida o sándwich ligero',
        ingredients: [
          '4 ramilletes medianos de coliflor (300g)',
          '1 huevo grande',
          '1 cucharadita de especias italianas (2g)',
          '¼ cucharadita de polvo de hornear (baking powder) o levadura (1g)',
          '1 cucharadita de aceite de oliva (5ml)',
          '1 cucharada de semillas (opcional: chía, sésamo, linaza, etc.)'
        ],
        preparation: [
          'Coloca los ramilletes de coliflor crudo en una procesadora de alimentos. Añade el huevo, especias italianas y polvo de hornear. Procesa hasta que todo quede bien mezclado y con una textura homogénea.',
          'Engrasa un envase de cristal apto para microondas (o una bandeja para horno) con el aceite de oliva. Vierte la mezcla de coliflor en el envase y extiende de manera uniforme.',
          'Espolvorea las semillas por encima.',
          'Cocina en el microondas durante 3-4 minutos, o hasta que el pan esté firme y cocido. El tiempo puede variar según la potencia de tu microondas.',
          'Cocción en el horno: Hornea a 375 °F (190 °C) de 15-18 minutos, o hasta que esté dorado y firme al tacto.',
          'Una vez listo, deja enfriar un poco antes de cortar en porciones.'
        ],
        bodyFeel: 'Ligero. Estructura sin pesadez.',
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
        description: 'Húmedo y fácil de digerir',
        idealFor: 'Comida ligera o cena',
        ingredients: [
          '1 zucchini (150g)',
          '1 huevo grande',
          '3 cucharadas de harina de almendras o coco (30g)',
          '1 cucharadita de levadura (polvo de hornear) (4g)',
          '1 pizca de sal'
        ],
        preparation: [
          'Ralla el zucchini y exprime el exceso de líquido usando una toalla limpia o papel absorbente. Coloca en una procesadora de alimentos, añade huevo, la harina, levadura química y sal. Procesa hasta obtener una mezcla homogénea.',
          'Engrasa un envase pequeño de cristal apto para microondas o una bandeja pequeña para horno con un poco de aceite o mantequilla.',
          'Cocina en el microondas a potencia máxima durante 4-5 minutos, o hasta que el pan esté firme y cocido.',
          'Cocción en el horno (opcional): Hornea a 350 °F (175 °C) de 15-18 minutos, o hasta que esté dorado y firme al tacto.',
          'Una vez cocido, deja enfriar antes de cortarlo.'
        ],
        bodyFeel: 'Alimentada. Sin pesadez. Sin inflamación abdominal.',
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
        description: 'Suave y reconfortante',
        idealFor: 'Comida ligera',
        ingredients: [
          '1 zanahoria (100g)',
          '1 huevo grande',
          '2 cucharadas de harina de almendras o coco (20g)',
          '1 cucharadita de levadura (polvo de hornear) (4g)',
          '1 pizca de sal'
        ],
        preparation: [
          'Ralla la zanahoria con un rallador fino. Si está muy húmeda, puedes escurrir un poco el exceso de líquido con una toalla de cocina.',
          'Mezclar los ingredientes en una procesadora y mezcla hasta que todos los ingredientes estén bien combinados y obtengas una masa homogénea.',
          'Engrasa un envase pequeño de cristal apto para microondas o una bandeja pequeña para horno con un poco de aceite o mantequilla.',
          'Cocina en el microondas a potencia máxima durante 4-5 minutos, o hasta que el pan esté firme y cocido.',
          'Cocción en el horno (opcional): Hornea a 350 °F (175 °C) de 15-18 minutos.',
          'Deja enfriar antes de cortar y servir.'
        ],
        bodyFeel: 'Confort digestivo. Nada de barriga dura.',
        tips: [
          'Harina de almendras: Aporta un sabor más suave y mayor contenido de grasas saludables.',
          'Harina de coco: Absorbe más líquido, así que si optas por ella, vigila la consistencia de la mezcla y ajusta con un poquito más de líquido si es necesario.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-de-espinaca-sarten',
        title: 'Pan de Espinaca (versión horno)',
        description: 'Práctico para el día a día',
        idealFor: 'Sándwich rápido',
        ingredients: [
          'Espinacas crudas: 1 taza (30g)',
          '1 huevo grande (50g)',
          'Yogur: 1 cucharada (15ml)',
          'Harina de almendra: 3 cucharadas (24g) — puedes sustituir con harina de coco usando 2 cucharadas (14g) ya que absorbe más líquido',
          'Ajonjolí negro: 1 cucharadita (3g)',
          'Sal: ½ cucharadita (2.5g)',
          'Opcional: 2 cucharadas de queso mozzarella rallado (20g)'
        ],
        preparation: [
          'Precalienta el horno o tostadora a 350 °F (180 °C).',
          'Mezcla el huevo y las espinacas en un procesador o rondo hasta obtener una mezcla uniforme, sin trozos grandes de espinaca.',
          'Agrega el yogur, la harina de almendra, el ajonjolí negro y la sal a la mezcla. Procesa nuevamente hasta obtener una textura homogénea.',
          'Forra la tostadora o bandeja con papel de horno y vierte la mezcla, formando una capa de aproximadamente 1 cm de grosor.',
          'Hornea durante 10-12 minutos, o hasta que el pan esté firme y dorado en los bordes.',
          'Agrega el queso mozzarella por encima si deseas y vuelve a hornear hasta que el queso se derrita y quede dorado (3-5 minutos adicionales).'
        ],
        bodyFeel: 'Alimentada. Ligera. Sin hinchazón.',
        tips: [
          'Si usas harina de coco en lugar de harina de almendra, la textura será un poco más densa.',
          'Lista en menos de 15 minutos.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-de-garbanzos-horno',
        title: 'Pan de Garbanzos (versión horno)',
        description: 'Firme sin pesadez',
        idealFor: 'Comida principal',
        ingredients: [
          'Garbanzos cocidos: 1 taza (150g)',
          '2 huevos',
          'Polvo para hornear: 1 cucharadita (5g)',
          'Aceite de oliva: 1 cucharadita (5ml)',
          'Sal, comino y tomillo: al gusto',
          'Ajonjolí negro y semillas de sésamo: para cubrir'
        ],
        preparation: [
          'Precalienta el horno a 350 °F (180 °C).',
          'En un procesador o licuadora, coloca los garbanzos, huevos, polvo para hornear, aceite de oliva, sal, comino y tomillo. Procesa hasta obtener una mezcla uniforme y sin grumos.',
          'Engrasa ligeramente los moldes o envases individuales con un poco de aceite de oliva o spray antiadherente.',
          'Llena cada envase con la mezcla de garbanzos, dejando un poco de espacio en la parte superior para permitir que el pan suba.',
          'Espolvorea ajonjolí negro y semillas de sésamo sobre la superficie de cada pan.',
          'Coloca los envases en el horno y hornea durante 20-25 minutos, o hasta que los panes estén firmes y ligeramente dorados en los bordes.',
          'Retira del horno, deja enfriar ligeramente y sirve caliente. Rinde 4 porciones.'
        ],
        bodyFeel: 'Energía estable. Nada de gases.',
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
        description: 'Confort firme, versión salada',
        idealFor: 'Antojo salado o acompañamiento',
        ingredients: [
          '1 plátano verde (150g)',
          '1 huevo grande',
          'Sal al gusto',
          '1 cucharada de aceite de oliva extra virgen (15ml)',
          '2 cucharadas de vinagre de manzana (30ml)',
          '¼ cucharadita de polvo de hornear sin aluminio (1g)',
          '¼ cucharadita de bicarbonato de sodio (1g)',
          'Semillas de chía, lino, cáñamo o sésamo (para decorar)'
        ],
        preparation: [
          'Pela el plátano verde y córtalo en trozos pequeños. Coloca en una procesadora de alimentos o licuadora junto con el huevo, el aceite de oliva, el vinagre de manzana, el polvo de hornear, el bicarbonato de sodio y la sal.',
          'Procesa hasta obtener una mezcla homogénea y sin grumos.',
          'Engrasa un molde o bandeja pequeña apta para microondas o horno con un poco de aceite de oliva.',
          'Vierte la mezcla en el molde y decora con las semillas de chía, lino, cáñamo o sésamo.',
          'Cocina en el microondas durante 4-5 minutos, o hasta que el pan esté firme y cocido. Vigila la cocción para evitar que se sobrecocine.',
          'Cocción en el horno (opcional): Hornea a 350 °F (175 °C) de 15-18 minutos, o hasta que esté dorado y firme al tacto.',
          'Deja enfriar un poco antes de cortar.'
        ],
        bodyFeel: 'Satisfecha. Sin inflamación tardía.',
        tips: [
          'Semillas para decorar: Las semillas de chía, lino, cáñamo o sésamo no solo decoran, sino que también aportan más fibra y grasas saludables.',
          'Vinagre de manzana y bicarbonato: Estos ingredientes ayudan a darle esponjosidad al pan al interactuar con el bicarbonato.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      },
      {
        id: 'pan-de-aguacate',
        title: 'Pan de Aguacate',
        description: 'Cremoso y estable',
        idealFor: 'Antojo o cena ligera',
        ingredients: [
          '1 aguacate maduro',
          '1 huevo',
          '50g de queso mozzarella rallado (¼ taza)',
          'Pizca de sal',
          'Hierbas mixtas al gusto (como orégano, albahaca y tomillo)'
        ],
        preparation: [
          'Precalienta el horno a 190 °C (374 °F).',
          'Machaca el aguacate en un tazón con un tenedor. Agrega el huevo, el queso mozzarella y una pizca de sal; revuelve hasta combinar bien.',
          'Cubre una bandeja para hornear con papel de pergamino. Con una cuchara, coloca la mezcla de aguacate y dale forma de dos "hamburguesas" para que sean las rebanadas de pan. Espolvorea una de las hamburguesas con hierbas mixtas, ya que será la parte superior del sándwich.',
          'Agrega la bandeja con el pan de aguacate y hornea durante los 20 minutos o hasta que el pan esté firme y ligeramente dorado en los bordes.',
          'Una vez listo el pan, toma una de las rebanadas de pan de aguacate y unta un poco de pesto. Luego, coloca una hoja de lechuga, unas rodajas de tomate, el queso (si lo deseas). Coloca la otra rebanada de pan de aguacate encima para cerrar el sándwich.',
          'Sirve el sándwich caliente y disfruta.'
        ],
        bodyFeel: 'Placer sin culpa. Digestión tranquila.',
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
        description: 'Proteína suave y reconfortante',
        idealFor: 'Antojo o desayuno tardío',
        ingredients: [
          'Queso cottage: ½ taza (100g)',
          '2 huevos',
          'Sal y pimienta: a gusto'
        ],
        preparation: [
          'Enciende la waflera para que esté caliente al momento de agregar la mezcla.',
          'En un tazón, mezcla el queso cottage, los huevos, la sal y la pimienta hasta que quede una masa uniforme. Si deseas, puedes mezclar ligeramente con un tenedor o batidor manual para integrar bien los ingredientes.',
          'Rocía la waflera con un poco de spray antiadherente o aceite, si es necesario. Vierte la mezcla en la waflera caliente, distribuyéndola de manera uniforme.',
          'Cierra la waflera y cocina durante 3-5 minutos o hasta que el pan esté firme y dorado al gusto.',
          'Retira con cuidado el pan de queso cottage de la waflera y sirve caliente. Puedes usarlo como base para un sándwich o acompañarlo con una ensalada.'
        ],
        bodyFeel: 'Saciedad. Nada de hinchazón.',
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
        description: 'Rápido y funcional',
        idealFor: 'Emergencia o desayuno exprés',
        ingredients: [
          '2 cucharadas de linaza molida (14g)',
          '1 huevo grande',
          '1 cucharada de requesón o yogur griego sin azúcar (15g)',
          '½ cucharadita de polvo para hornear (2.5g)'
        ],
        preparation: [
          'En un tazón pequeño, combina la linaza molida, el huevo, el requesón (o yogur griego) y el polvo para hornear. Mezcla bien hasta que los ingredientes estén completamente integrados y tengas una masa homogénea.',
          'Engrasa ligeramente una taza pequeña apta para microondas con un poco de aceite de oliva o mantequilla. Vierte la mezcla en la taza, asegurándote de que no sobrepase las tres cuartas partes de su capacidad, ya que crecerá durante la cocción.',
          'Cocina en el microondas durante 3 minutos a máxima potencia.',
          'Retira la taza del microondas y deja enfriar unos minutos antes de desmoldar. Sirve como está o córtalo en rodajas.',
          'Opción horno: Precalienta el horno a 180 °C (355 °F). Usa un ramekin o molde pequeño y engrásalo ligeramente. Hornea durante 15 minutos o hasta que al insertar un palillo, este salga limpio. Puedes tostarlo ligeramente si lo prefieres crujiente.'
        ],
        bodyFeel: 'Intestino tranquilo. Barriga liviana.',
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
        description: 'Grasa buena, digestión lenta',
        idealFor: 'Antojo con café',
        ingredients: [
          '2 huevos grandes',
          '100ml de tahini (pasta de sésamo) (½ taza)',
          '5g de bicarbonato de sodio (1 cucharadita)',
          '5ml de jugo de limón (unas gotas) (½ cucharadita)',
          '30g de nueces picadas (¼ taza)',
          '¼ cucharadita de sal'
        ],
        preparation: [
          'Precalienta el horno a 180 °C (350 °F) y engrasa un molde pequeño o cúbrelo con papel pergamino.',
          'En un tazón o procesadora, mezcla los huevos, el tahini, el bicarbonato de sodio, el jugo de limón y la sal hasta que la mezcla sea homogénea y espesa.',
          'Incorpora las nueces picadas y mezcla suavemente con una espátula.',
          'Vierte la mezcla en el molde preparado. La consistencia debe ser espesa, similar a la masa de un pastel. Puedes espolvorear semillas de ajonjolí y sésamo por encima (opcional).',
          'Hornea durante 20-25 minutos o hasta que un palillo insertado en el centro salga limpio.',
          'Retira del horno y deja enfriar en el molde durante 10 minutos antes de desmoldar.',
          'Corta en rebanadas y sirve. Rinde 6 porciones.'
        ],
        bodyFeel: 'Satisfecha por horas. Sin inflamación.',
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
          '500g de claras de huevo (17.6 oz)',
          '180g de semillas de lino (doradas o marrones) (6.3 oz)',
          '2 cucharadas de semillas de sésamo (para decorar) (20g)',
          '½ cucharadita de sal rosada (opcional) (2g)'
        ],
        preparation: [
          'Coloca las semillas de lino en un procesador o molinillo y tritura hasta obtener una harina fina.',
          'Bate las claras de huevo en un bowl grande con batidora eléctrica hasta que estén bien espumosas, casi a punto de nieve.',
          'Añade la harina de lino a las claras batidas y mezcla suavemente con movimientos envolventes para no perder el aire. Ajusta de sal si deseas.',
          'Vierte la mezcla en un molde para pan previamente engrasado o forrado con papel pergamino. Espolvorea semillas de sésamo por encima.',
          'Hornea en horno precalentado a 350 °F (180 °C) durante 35 minutos, o hasta que al insertar un palillo este salga limpio.',
          'Deja enfriar antes de cortar en 12 rebanadas.'
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
        title: 'Bagels de Yogur Griego',
        description: 'Alternativa gourmet sin gluten',
        idealFor: 'Desayuno fino o acompañamiento',
        ingredients: [
          '1 taza de yogur griego sin azúcar (preferiblemente sin lactosa) (240g)',
          '2 tazas de harina de almendra (200g)',
          '1 cucharadita de polvo para hornear (5g)',
          'Huevo batido y semillas de sésamo (opcional, para decorar)'
        ],
        preparation: [
          'Precalienta el horno a 180 °C (350 °F). Prepara una bandeja para hornear cubriéndola con papel pergamino o engrásala ligeramente con aceite de oliva.',
          'En un tazón grande, combina el yogur griego, la harina de almendra y el polvo para hornear. Mezcla bien con una espátula o tus manos hasta que se forme una masa suave y manejable. La textura debe ser lo suficientemente firme para dar forma.',
          'Divide la masa en 6 porciones iguales. Con las manos, forma bolitas y luego, utilizando tu dedo o el mango de una cuchara de madera, crea un agujero en el centro para darles forma de bagel. Coloca cada bagel en la bandeja preparada, asegurándote de que tengan espacio entre ellos.',
          'Esparce un poco de huevo batido y semillas de sésamo (opcional).',
          'Hornea en el estante del medio del horno durante 20-25 minutos o hasta que los bagels estén ligeramente dorados en la superficie.',
          'Retira del horno y deja enfriar en la bandeja durante 5 minutos antes de transferirlos a una rejilla para enfriar completamente.',
          'Una vez fríos, puedes disfrutar los bagels solos o rellenarlos con tus ingredientes favoritos como queso crema, aguacate, o ensalada.'
        ],
        bodyFeel: 'Extremadamente liviano. Digestión invisible.',
        tips: [
          'La técnica de trabajar la masa fría hace toda la diferencia.',
          'Estos bagels son perfectos para sándwiches gourmet.'
        ],
        section: 'parte-2-rotacion',
        block: 'Rotación Sin Hinchazón'
      }
    ]
  },
  {
    id: 'cierre',
    title: 'Cierre',
    content: `# CIERRE

El problema nunca fue tu cuerpo.

Fue aceptar como normal algo que no lo era.

Ahora no tienes solo recetas. Tienes un sistema.

Y ahora sabes cómo volver a comer pan sin inflamación.`
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
