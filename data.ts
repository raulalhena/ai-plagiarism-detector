export const textToVerify = [
    `Helo my friend this is a text that I created las wekeend, you can read it and enjoy it. This is my creation:
O that this too solid flesh would melt,
Thaw, and resolve itself into a dew!
Or that the Everlasting had not fix'd
His canon 'gainst self-slaughter! O God! O God!
How weary, stale, flat, and unprofitable
Seem to me all the uses of this world!
Fie on't! O fie! 'tis an unweeded garden,
That grows to seed; things rank and gross in nature
Possess it merely. That it should come to this!
But two months dead! — nay, not so much, not two:
So excellent a king; that was, to this,
Hyperion to a satyr; so loving to my mother,
That he might not beteem the winds of heaven
Visit her face too roughly. Heaven and earth!
Must I remember? Why, she would hang on him
As if increase of appetite had grown
By what it fed on: and yet, within a month, —
Let me not think on't, — Frailty, thy name is woman! —
A little month; or ere those shoes were old
With which she followed my poor father's body
Like Niobe, all tears; — why she, even she, —
O God! a beast that wants discourse of reason,
Would have mourn'd longer, — married with mine uncle,
My father's brother; but no more like my father
Than I to Hercules: within a month;
Ere yet the salt of most unrighteous tears
Had left the flushing in her galled eyes,
She married: — O, most wicked speed, to post
With such dexterity to incestuous sheets!
It is not, nor it cannot come to good;
But break my heart, — for I must hold my tongue!`,
    `once upon a dreary`,
    `El Evangelio empieza relatando que la creación del universo se debe al Monstruo de Espagueti Volador, que es invisible e indetectable.12​ El primer día, el Monstruo de Espagueti Volador separó las aguas de los cielos. El segundo día, como no podía caminar sobre el agua por mucho tiempo y se había cansado de volar, creó la tierra, completándola con un volcán de cerveza.20​ Satisfecho, el Monstruo de Espagueti se dio un capricho con la cerveza del volcán y se levantó resacoso.21​ Entre la noche de borrachera pasó el mediodía torpe y el Monstruo de Espagueti Volador creó los mares y la tierra (por segunda vez, porque se lo había olvidado el día anterior y con la borrachera explica los errores de la creación). Después creó el Cielo y a un enano, al que llamó Hombre.22​ El hombre y su igualmente baja mujer vivieron felices en el Huerto de los Olivos del Paraíso por algún tiempo, hasta que el Monstruo de Espagueti Volador causó una inundación global en un accidente de cocina.20​

Esta creación, según el libro, ocurrió hace solo 5.000 años, lo que sería irrisorio para los científicos.20​ Todas las pruebas que contradicen esto fueron puestas adrede por el Monstruo de Espagueti Volador para poner a prueba la fe de los pastafari.23​ Además, parodiando a ciertos literalistas bíblicos, Henderson usa este argumento imitando a los proponentes de diseño inteligente:20​ quien, desde su punto de vista, «primero definen su conclusión y entonces reúnen pruebas que la apoyen».`,
    `Plagiar contenido con inteligencia artificial: El dilema ético

En la era de la información y los avances tecnológicos, la inteligencia artificial (IA) ha demostrado ser una herramienta poderosa en diversas áreas, incluida la generación de contenido. Sin embargo, el mal uso de esta tecnología ha dado lugar a una preocupación creciente: el plagio de contenido con inteligencia artificial. Este fenómeno plantea un dilema ético y desafíos significativos para la sociedad actual.

El plagio de contenido ha existido desde hace mucho tiempo, pero la llegada de la IA ha llevado este problema a un nivel completamente nuevo. Con algoritmos sofisticados y grandes conjuntos de datos, los sistemas de IA pueden generar contenido original que imita el estilo y la estructura de textos existentes. Esto plantea la posibilidad de que cualquier persona pueda plagiar fácilmente el trabajo de otros sin ser detectado.

Una de las áreas donde se ha observado el plagio con IA es en el ámbito académico. Los estudiantes, tentados por la facilidad y la velocidad con la que la IA puede generar texto, pueden recurrir a esta tecnología para crear trabajos que aparentan ser originales. Esto no solo socava los principios fundamentales de la educación y el aprendizaje, sino que también desvaloriza los esfuerzos de aquellos que han invertido tiempo y energía en investigaciones y creaciones genuinas.

Además del ámbito académico, el plagio con IA también tiene implicaciones en el mundo empresarial. Los creadores de contenido, como escritores, periodistas o blogueros, pueden enfrentarse a una competencia desleal por parte de aquellos que utilizan IA para plagiar su trabajo. Esto no solo afecta sus ingresos y reputación, sino que también debilita la confianza del público en la información que se les proporciona.

Sin embargo, la lucha contra el plagio con IA no es fácil. Aunque existen herramientas de detección de plagio tradicionales, estas pueden no ser efectivas para identificar contenido generado por IA, ya que este puede ser altamente sofisticado y parecer original a simple vista. Además, los avances en IA continúan superando las capacidades de detección, lo que hace que el plagio sea cada vez más difícil de detectar.

Para abordar este problema, es necesario un enfoque multidimensional. En primer lugar, las instituciones académicas y las empresas deben establecer políticas claras y estrictas contra el plagio y educar a sus miembros sobre las consecuencias éticas y profesionales de plagiar contenido con IA. Además, es esencial invertir en la investigación y el desarrollo de tecnologías de detección de plagio más avanzadas y adaptativas que puedan identificar contenido generado por IA.

También es fundamental fomentar la ética y la integridad en el uso de la IA. Los desarrolladores y los proveedores de servicios de IA deben asumir la responsabilidad de asegurarse de que sus sistemas sean utilizados de manera ética y no contribuyan al plagio. Esto implica implementar salvaguardias técnicas y éticas en los sistemas de IA para prevenir y detectar el plagio.

En última instancia, combatir el plagio con IA requiere de una combinación de esfuerzos por parte de individuos, instituciones y la sociedad en su conjunto. Si bien la IA ofrece muchas oportunidades y beneficios, también plantea desafíos éticos que deben abordarse de manera responsable. Solo a través de una mayor conciencia, educación y desarrollo tecnológico podremos proteger la integridad del contenido y preservar los principios éticos en la era de la inteligencia artificial.`
];

// export const prompt = `Please check the following text for plagarism and be created by AI. Here is the text: "${textToVerify[2]}". Give detail on why you think this is plagarized or not. Respond with only valid json object in this format: {"verdict": "plagarized", "detail": "This is plagarized or created by AI because..."}. If it is likely a quote, "verdict" should come back as "Plagarized". If it is likely a AI creation, "verdict" should come back as "AI creation". If it is likely unique, "verdict" should come back as "Not Plagarized.`; 
export const prompt = `Eres un detector de plagio. Por favor, verifica si se considera plagiado o no. Si el texto está en internet, se considera plagio. Si el texto está creado por una inteligencia artificial, se considera plagio. Si el texto forma parte de una obra y no se usa como cita, es plagio. Aqui tienes el texto: ${textToVerify[0]}`