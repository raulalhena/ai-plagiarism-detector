export const textToVerify = [`O that this too solid flesh would melt,
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
But break my heart, — for I must hold my tongue!`, `once upon a dreary`, `El Evangelio empieza relatando que la creación del universo se debe al Monstruo de Espagueti Volador, que es invisible e indetectable.12​ El primer día, el Monstruo de Espagueti Volador separó las aguas de los cielos. El segundo día, como no podía caminar sobre el agua por mucho tiempo y se había cansado de volar, creó la tierra, completándola con un volcán de cerveza.20​ Satisfecho, el Monstruo de Espagueti se dio un capricho con la cerveza del volcán y se levantó resacoso.21​ Entre la noche de borrachera pasó el mediodía torpe y el Monstruo de Espagueti Volador creó los mares y la tierra (por segunda vez, porque se lo había olvidado el día anterior y con la borrachera explica los errores de la creación). Después creó el Cielo y a un enano, al que llamó Hombre.22​ El hombre y su igualmente baja mujer vivieron felices en el Huerto de los Olivos del Paraíso por algún tiempo, hasta que el Monstruo de Espagueti Volador causó una inundación global en un accidente de cocina.20​

Esta creación, según el libro, ocurrió hace solo 5.000 años, lo que sería irrisorio para los científicos.20​ Todas las pruebas que contradicen esto fueron puestas adrede por el Monstruo de Espagueti Volador para poner a prueba la fe de los pastafari.23​ Además, parodiando a ciertos literalistas bíblicos, Henderson usa este argumento imitando a los proponentes de diseño inteligente:20​ quien, desde su punto de vista, «primero definen su conclusión y entonces reúnen pruebas que la apoyen».`];

export const prompt = `Please check the following text for plagarism. Here is the text: "${textToVerify[2]}". Give detail on why you think this is plagarized or not. Respond with only valid json object in this format: {"verdict": "plagarized", "detail": "This is plagarized because..."}. If it is likely a quote, "verdict" should come back as "Plagarized". If it is likely unique, "verdict" should come back as "Not Plagarized.`; 