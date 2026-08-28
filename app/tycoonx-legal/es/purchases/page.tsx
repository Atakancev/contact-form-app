const sections = [
  {
    title: 'Tipos de producto',
    body: [
      'Los Diamonds son moneda virtual del juego. Los Diamonds comprados no caducan únicamente por el paso del tiempo, solo pueden usarse dentro de TycoonX y no pueden canjearse con CK-Labs por dinero salvo que una norma obligatoria exija otra cosa.',
      '30-Day VIP es un derecho de pago único y sin renovación automática que dura 30 días consecutivos desde su activación o desde que se pone a disposición de la cuenta, salvo que la pantalla de compra indique expresamente otra cosa.',
      'Lifetime VIP es un derecho de pago único que puede ofrecerse únicamente durante campañas promocionales seleccionadas y de duración limitada. No es un producto permanentemente disponible. CK-Labs puede finalizar o retirar una campaña y puede decidir no volver a ofrecer Lifetime VIP, respetando la ley aplicable y cualquier oferta concreta ya realizada al consumidor.',
      'Cerrar una campaña de Lifetime VIP solo afecta a la disponibilidad futura y no cancela ni acorta por sí mismo una compra ya válida. Abrir la pantalla de compra, añadir el producto al carrito, iniciar el checkout o entrar en un estado de pago pendiente antes del cierre no reserva por sí solo Lifetime VIP ni un precio anterior. Si un proveedor autorizado confirma después una transacción válida conforme a sus reglas, CK-Labs respetará la transacción confirmada de acuerdo con la oferta aplicable y el derecho obligatorio.',
      'Lifetime VIP está pensado para la vida comercial del Servicio TycoonX para la cuenta compradora y no promete que TycoonX vaya a existir para siempre. El significado de vida comercial y la naturaleza temporal de la oferta deben mostrarse claramente en el checkout o inmediatamente antes.',
    ],
  },
  {
    title: 'Compras en Apple App Store',
    body: [
      'Apple procesa las compras realizadas mediante Apple In-App Purchase y gestiona el proceso de solicitud de reembolso del App Store. CK-Labs puede investigar problemas de entrega o derechos digitales, pero no controla la decisión de reembolso de Apple.',
      'Los Diamonds comprados están pensados como compras consumibles dentro de la app. Lifetime VIP está pensado como una compra no consumible y restaurable mientras siga siendo válida. El VIP de 30 días de pago único está pensado como un derecho sin renovación automática, manteniendo CK-Labs el estado autoritativo de la cuenta cuando sea necesario.',
      'Una compra que Apple siga marcando como pendiente no crea un derecho de pago de TycoonX hasta que Apple informe de una transacción válida y completada. Si Apple completa más tarde una transacción pendiente aprobada por el proveedor, TycoonX puede conceder el derecho correspondiente en ese momento incluso si la promoción original ya terminó, siempre que la transacción de Apple pertenezca válidamente a esa oferta.',
      'Si Apple reembolsa, revoca, revierte o invalida una transacción, CK-Labs puede revocar o corregir el derecho de TycoonX o el valor virtual correspondiente para evitar conservar dos veces el valor de una compra reembolsada.',
    ],
  },
  {
    title: 'Compras en Google Play',
    body: [
      'Google procesa la transacción mediante el sistema de facturación de Google Play aplicable y proporciona información de pedido o transacción utilizada para validarla.',
      'Cuando las reglas de Google Play exijan Google Play Billing para bienes o servicios digitales dentro de la app, TycoonX utilizará ese sistema salvo que un programa regional aplicable, una regla de plataforma o una ley permita una alternativa.',
      'Lifetime VIP está pensado como un producto no consumible de pago único en Google Play, de modo que una compra válida permanezca asociada a la cuenta de Google compradora. Un VIP de 30 días de pago único debe configurarse de forma que no genere cobros recurrentes de manera silenciosa y, si se permiten compras repetidas, de forma que la configuración no bloquee permanentemente una compra legítima posterior de otros 30 días.',
      'Una compra de Google Play en estado PENDING no crea un derecho de pago de TycoonX. El derecho solo se concede cuando Google informa de un estado PURCHASED válido y completado y la verificación necesaria tiene éxito. Si una compra pendiente pasa después a ser una compra válida completada, TycoonX puede conceder el derecho correspondiente entonces, incluso si la promoción limitada ya cerró pero la transacción confirmada por el proveedor pertenece válidamente a esa oferta.',
      'Google puede tramitar directamente determinadas solicitudes de reembolso. CK-Labs también puede disponer de herramientas de desarrollador de Google para procesar reembolsos elegibles, sujeto a las reglas de Google, la política de CK-Labs y la ley aplicable.',
      'Si Google reembolsa, revierte, hace chargeback, cancela o invalida una transacción, CK-Labs puede revocar o corregir el derecho o valor virtual correspondiente.',
    ],
  },
  {
    title: 'Tienda web de TycoonX con Xsolla',
    body: [
      'Las compras realizadas en la tienda web oficial de TycoonX pueden ser procesadas por Xsolla. Según la configuración concreta del checkout, una empresa del grupo Xsolla puede actuar como merchant of record.',
      'Cuando Xsolla actúa como merchant of record, la entidad Xsolla indicada en el checkout o recibo puede ser responsable, conforme a sus propias condiciones, del procesamiento del pago, impuestos o IVA de la transacción, controles antifraude, reembolsos, disputas de pago y chargebacks.',
      'La entidad Xsolla concreta, método de pago, precio, impuestos, política de reembolso e información legal de compra se determinan por el checkout y recibo de esa transacción. Las condiciones y política de reembolso de Xsolla mostradas para esa compra se aplican junto con el derecho obligatorio del consumidor.',
      'CK-Labs sigue siendo responsable de entregar el derecho correspondiente dentro de TycoonX una vez recibida una confirmación válida de pago exitoso. Volver desde el checkout, mostrar un mensaje local de éxito o crear un pedido no obliga por sí solo a CK-Labs a conceder valor de pago antes de recibir la confirmación válida del proveedor.',
      'Si una transacción válida de Xsolla se confirma después de un retraso de procesamiento, CK-Labs puede conceder el derecho correspondiente en el momento de la confirmación conforme a la transacción confirmada y a la oferta aplicable. Si Xsolla reembolsa, revierte, cancela, hace chargeback o invalida una transacción, CK-Labs puede revocar o corregir el derecho o valor virtual relacionado.',
    ],
  },
  {
    title: 'Precios, precios regionales y cambios futuros',
    body: [
      'CK-Labs puede cambiar para compras futuras los precios, tamaños de paquetes, cantidades de Diamonds, precios VIP, precios regionales, monedas, disponibilidad y promociones. Un precio actual no es una promesa de que el mismo producto, cantidad, descuento o precio vaya a seguir disponible más adelante.',
      'Los precios pueden variar entre Apple App Store, Google Play, la tienda web oficial de TycoonX, países, regiones, monedas y campañas promocionales distintas. Los sistemas de precios de las plataformas, impuestos, IVA, conversión de moneda, movimientos de divisas, prácticas locales de precios o reglas del proveedor de pago también pueden modificar el precio local.',
      'El precio total final y la moneda mostrados por el checkout aplicable antes de que el usuario confirme la compra rigen esa transacción, sujeto a la corrección de errores evidentes de precio cuando la ley lo permita. Abrir una página de producto, entrar en checkout o ver un precio anterior o almacenado en caché antes de confirmar no bloquea por sí solo ese precio para una compra futura. El registro de transacción confirmado por el proveedor y la información jurídicamente vinculante del checkout del pedido completado prevalecen, sujeto al derecho obligatorio.',
      'Para consumidores en Alemania y en otros lugares donde sea obligatorio, los impuestos y componentes inevitables del precio se incluirán o mostrarán como exija la normativa aplicable sobre precios.',
      'Una compra de pago único completada no se recalcula retroactivamente porque CK-Labs cambie más tarde el precio. Una bajada posterior no crea automáticamente derecho a reembolso, crédito, reembolso parcial, igualación de precio ni Diamonds o tiempo VIP adicionales; una subida posterior no crea un cargo adicional sobre una compra única ya completada, salvo cuando una norma obligatoria disponga otra cosa.',
      'Lifetime VIP puede venderse a precios diferentes en distintas campañas promocionales reales. Comprar en una campaña no crea derecho a un precio promocional más bajo en otra posterior, y una campaña futura no obliga a CK-Labs a igualar un precio anterior.',
      'Las afirmaciones promocionales, cuentas atrás, precios tachados, ahorros anunciados, mensajes de tiempo limitado y otras ventajas de precio deben corresponder a la oferta real y no ser engañosas. Si una jurisdicción exige un precio de referencia, información específica sobre descuentos o historial de precios para ese producto u oferta, el marketing y checkout deberán cumplir esa regla.',
      'Si CK-Labs introduce en el futuro una suscripción u otro producto con cobros recurrentes, se aplicarán por separado las reglas exigidas sobre cambios de precio, aviso, consentimiento, cancelación y renovación. Las reglas anteriores sobre compras únicas no autorizan cobros recurrentes no informados.',
    ],
  },
  {
    title: 'Información de checkout y confirmación de pago',
    body: [
      'Antes de que un consumidor envíe un pedido de pago, el checkout aplicable debe mostrar claramente y en el lugar exigido la información precontractual obligatoria. Según la transacción, esto puede incluir las características principales del producto, precio total con impuestos y cargos obligatorios, duración o condiciones de terminación, información sobre entrega, funcionalidades importantes, compatibilidad o interoperabilidad e identidad del comerciante contratante.',
      'Cuando las normas de protección de consumidores de la UE/EEE se apliquen a la moneda virtual del juego que puede comprarse, TycoonX mostrará de forma clara y comprensible la información obligatoria sobre el precio en dinero real tanto de los Diamonds de pago como de los contenidos o servicios digitales del juego ofrecidos a cambio de Diamonds comprables. CK-Labs no utilizará capas de moneda virtual ni diseños de paquetes para ocultar el coste real o para obligar al consumidor a adquirir una cantidad sobrante de moneda virtual que no desee de forma significativa cuando la ley aplicable prohíba esa práctica.',
      'Cuando se aplique el derecho alemán a un checkout online que cree una obligación de pago, el paso de pedido debe dejar clara esa obligación de la forma exigida por la ley. CK-Labs no se basará en textos ocultos, extras de pago premarcados ni controles de pedido final ambiguos para crear una obligación de pago.',
      'Si un precio se personaliza mediante decisiones automatizadas y la ley exige informar de ello, el checkout u oferta deberá hacerlo antes de realizar el pedido. Los precios por país, tienda, moneda, impuestos o región disponibles de forma general no se consideran personalizados únicamente porque varíen entre regiones.',
    ],
  },
  {
    title: 'Función electrónica de desistimiento en Alemania',
    body: [
      'Desde el 19 de junio de 2026, el derecho alemán exige una función electrónica de desistimiento para determinados contratos a distancia celebrados mediante una interfaz online mientras siga abierto un plazo legal de desistimiento. Cuando este requisito se aplique a una transacción de TycoonX y CK-Labs sea el comerciante contratante responsable de la interfaz, CK-Labs deberá facilitar la función claramente etiquetada, continuamente disponible y destacada, junto con el proceso de confirmación exigido.',
      'Cuando Apple, Google, Xsolla u otro proveedor sea el comerciante contratante o controle la interfaz de compra y el proceso de desistimiento relevantes, el flujo legalmente conforme de ese proveedor puede ser la vía aplicable. CK-Labs no utilizará esta distribución de funciones para eliminar un derecho de desistimiento obligatorio.',
      'Cuando la ley lo exija, el envío de un desistimiento mediante la función electrónica deberá confirmarse en un soporte duradero. Esta vía electrónica no elimina ninguna otra forma legalmente válida de ejercer el derecho de desistimiento.',
    ],
  },
  {
    title: 'Restauración y recuperación entre dispositivos',
    body: [
      'Lifetime VIP debe poder restaurarse o recuperarse tras verificación mientras siga siendo válido. Un VIP de 30 días todavía válido debe restaurarse desde registros autoritativos de cuenta o servidor cuando sea necesario.',
      'Los Diamonds son compras consumibles y no se restauran como una segunda compra después de haber sido consumidos. El saldo actual de la cuenta de TycoonX se conserva mediante el estado autoritativo de la cuenta o servidor cuando corresponda. Una restauración nunca crea valor de pago duplicado.',
      'Eliminar una cuenta de TycoonX puede borrar permanentemente el perfil y estado del juego, pero no necesariamente cancela ni elimina una transacción válida separada de Apple, Google, Xsolla u otro proveedor de pago. Cuando un Lifetime VIP válido u otro derecho restaurable siga asociado al comprador, CK-Labs puede pedir una prueba razonable de que el mismo comprador controla la cuenta de plataforma o pago correspondiente antes de vincularlo a una cuenta de TycoonX elegible.',
      'Restaurar un derecho de pago tras eliminar la cuenta no recupera progreso borrado, Diamonds consumidos, inventario, historial social ni activos transferidos salvo cuando la ley exija otra cosa.',
    ],
  },
  {
    title: 'Problemas de entrega',
    body: [
      'Si se te ha cobrado pero el contenido comprado no aparece, confirma que estás usando la cuenta correcta de TycoonX, utiliza Restaurar compras cuando corresponda, deja un tiempo razonable para que termine una transacción pendiente del proveedor y contacta con el Soporte de TycoonX aportando los datos del pedido o transacción si el problema continúa.',
      'CK-Labs puede validar la transacción con Apple, Google, Xsolla o el proveedor aplicable antes de conceder, restaurar, modificar o reembolsar un derecho.',
      'Una compra pendiente no reserva un segundo derecho ni crea una concesión duplicada. Si el proveedor confirma más tarde que una transacción pendiente pasó a ser una compra válida completada, CK-Labs la reconciliará con la transacción autoritativa y el estado de derechos ya existente.',
    ],
  },
  {
    title: 'Errores evidentes, pagos fallidos y concesiones duplicadas',
    body: [
      'Si un checkout, catálogo, moneda, impuesto, producto, cantidad o configuración de derechos contiene un error evidente, CK-Labs o el proveedor de pago aplicable puede corregirlo para transacciones futuras y, cuando la ley lo permita, cancelar una transacción errónea todavía no cumplida y devolver la cantidad realmente pagada en lugar de entregar un valor no previsto. Los derechos obligatorios y cualquier contrato ya vinculante siguen sujetos a la ley aplicable.',
      'Una captura de pantalla, una pantalla almacenada en caché, un cliente manipulado, una versión antigua de la app, una fuente no oficial o un error de visualización local no prevalecen sobre un registro final válido del checkout o registros autoritativos y fiables del servidor y del proveedor de pago.',
      'Los derechos o valores virtuales duplicados creados por reintentos, webhooks repetidos, notificaciones duplicadas de tienda, condiciones de carrera, bugs, errores de restauración, credenciales comprometidas u otros fallos técnicos pueden retirarse o consolidarse para que el usuario reciba únicamente el valor válido realmente comprado.',
      'Si un pago está pendiente, es rechazado, revertido, cancelado, no supera el control antifraude o nunca se confirma, CK-Labs puede retrasar o retener el derecho correspondiente hasta que exista una transacción válida y confirmada.',
    ],
  },
  {
    title: 'Promociones, cupones y abuso de ofertas',
    body: [
      'Las promociones pueden limitarse por tiempo, país, plataforma, cuenta, historial de compras, elegibilidad, cantidad, número de canjes u otras condiciones explicadas claramente. Salvo que la oferta diga otra cosa, no pueden combinarse ni crean derecho a futuras promociones.',
      'No puedes explotar errores técnicos, canjes duplicados de cupones, información manipulada de región o identidad, automatización abusiva de compras, ciclos de compra y reembolso, creación masiva de cuentas u otros métodos para obtener valor promocional más allá de la oferta real.',
      'Si una promoción o descuento se obtuvo mediante fraude, abuso técnico, canje duplicado u otro método inválido, CK-Labs puede rechazar la compra, retirar solo el valor promocional inválido o reembolsar y deshacer la transacción afectada cuando la ley lo permita. No se eliminará valor legítimamente adquirido y no relacionado únicamente porque otra promoción haya sido inválida.',
      'Un crédito de cortesía, extensión gratuita, reembolso discrecional, bonus o compensación concedidos por encima de una obligación legal no implican por sí mismos una admisión de responsabilidad ni una promesa de ofrecer la misma solución en otro caso.',
    ],
  },
  {
    title: 'Reembolsos, anulaciones y chargebacks',
    body: [
      'Un reembolso o reversión de pago no permite conservar a la vez el dinero devuelto y el valor digital de pago correspondiente.',
      'Si un pago se reembolsa, revierte, hace chargeback, cancela o resulta inválido después de haberse acreditado valor, CK-Labs puede, conforme a la ley aplicable, revocar el derecho relacionado, retirar Diamonds no utilizados o valor virtual, revertir transacciones inválidas directamente vinculadas, aplicar una corrección equivalente del saldo cuando el valor reembolsado ya se haya consumido o transferido, o restringir temporalmente funciones de compra o economía mientras se investiga la disputa de pago.',
      'CK-Labs no utilizará estas correcciones para retirar valor legítimamente comprado y no relacionado salvo cuando sea razonablemente necesario para deshacer una transacción inválida concreta o cuando la ley permita otra cosa.',
      'Los reembolsos se procesan normalmente mediante el canal que gestionó la compra y, cuando el proveedor lo exija, al método de pago original. La aprobación y el momento en que los fondos aparecen realmente pueden ser diferentes. CK-Labs no controla tiempos de liquidación de terceros, diferencias de conversión, comisiones bancarias o del emisor de tarjeta ni movimientos de tipo de cambio, sujeto a las reglas del proveedor y al derecho obligatorio.',
      'Cuando Apple, Google, Xsolla u otro proveedor sea el comerciante contratante o emisor del recibo o documento fiscal, ese proveedor controla el formato y proceso de corrección de su recibo o factura. CK-Labs puede prestar soporte sobre derechos de TycoonX y ayudar a identificar la transacción, pero no puede prometer modificar o volver a emitir el documento de facturación o fiscal de un tercero. Cuando sea CK-Labs quien legalmente deba emitir un recibo, factura, abono u otro documento, prevalece la ley aplicable.',
    ],
  },
  {
    title: 'Compras no autorizadas o fraudulentas',
    body: [
      'Las compras presuntamente no autorizadas deben comunicarse cuanto antes al proveedor de pago correspondiente y al Soporte de TycoonX.',
      'CK-Labs puede investigar recibos, identificadores de transacción, registros de derechos, logs de servidor, actividad de cuenta, información de dispositivo o sesión, eventos del proveedor de pago y registros de seguridad relacionados para prevenir fraude y entregas duplicadas.',
      'Recibos fraudulentos, clientes manipulados, abuso de pagos, denuncias de fraude deliberadamente falsas, chargebacks abusivos o intentos de conservar valor digital ya reembolsado pueden dar lugar a correcciones de derechos, restricciones de compra, suspensión o terminación de la cuenta conforme a las Condiciones de TycoonX y la ley aplicable.',
    ],
  },
  {
    title: 'Derecho de desistimiento en la UE y Alemania',
    body: [
      'Nada de esta Política excluye derechos legales que no puedan renunciarse. Para consumidores alemanes, los artículos 327 y siguientes del BGB pueden aplicarse a contenidos digitales y servicios digitales de pago.',
      'Para consumidores de la UE/EEE, CK-Labs no considera que la mera acreditación de Diamonds comprados sea por sí sola suministro inmediato de contenido digital que extinga automáticamente el derecho legal de desistimiento. Cuando la compra de moneda virtual del juego esté sujeta a un derecho legal de desistimiento de 14 días, los Diamonds comprados que no se hayan utilizado seguirán cubiertos por ese derecho durante el plazo legal. Si los Diamonds ya se han gastado, transferido o canjeado por contenidos o servicios digitales, las consecuencias del desistimiento se determinarán conforme al derecho obligatorio y a la transacción concreta, y no mediante una regla general de «sin reembolsos». El comerciante contratante o el canal de pago aplicable puede determinar cómo se presenta o tramita una solicitud de desistimiento, pero esa distribución de funciones no elimina ningún derecho obligatorio.',
      'Un VIP de 30 días se presta durante un periodo de tiempo. La activación inmediata no elimina automáticamente todo derecho legal de desistimiento solo porque haya comenzado el acceso. Cuando la ley permita una prestación anticipada, el checkout puede solicitar la petición expresa del consumidor y cualquier cantidad debida tras un desistimiento válido se determinará únicamente como permita la ley.',
      'Lifetime VIP también es un derecho prestado a lo largo del tiempo. Su precio único y carácter no renovable no eliminan por sí solos derechos legales de desistimiento ni remedios obligatorios de servicios digitales. Cualquier solicitud de prestación anticipada, extinción del derecho, pago proporcional tras el desistimiento u otra consecuencia solo se aplica si se cumplen los requisitos legales de esa transacción.',
      'CK-Labs no utilizará una cláusula única de “sin reembolsos” o de renuncia general al desistimiento para Diamonds, VIP de 30 días y Lifetime VIP, porque su tratamiento legal puede ser diferente.',
    ],
  },
  {
    title: 'Actualizaciones necesarias y versiones compatibles',
    body: [
      'El contenido de pago de TycoonX no incluye una promesa de que todas las versiones históricas de la app, dispositivos, sistemas operativos, APIs o integraciones de plataforma vayan a seguir siendo compatibles indefinidamente.',
      'Cuando se aplique el derecho alemán sobre productos digitales, CK-Labs facilitará e informará sobre las actualizaciones necesarias para mantener la conformidad del producto digital de pago durante el periodo legalmente relevante, incluidas las actualizaciones de seguridad necesarias.',
      'Si se ha proporcionado una actualización obligatoria y se ha informado claramente al usuario de su disponibilidad y de las consecuencias de no instalarla, no instalarla en un plazo razonable puede afectar a reclamaciones por falta de conformidad causada exclusivamente por la ausencia de esa actualización, en la medida prevista por la ley. Esto solo se aplica si CK-Labs proporcionó instrucciones adecuadas y no elimina derechos relativos a un defecto independiente, falta de suministro o derecho inválido.',
      'Un derecho de pago válido debe seguir asociado al comprador y reconocerse en versiones compatibles cuando lo exijan las condiciones del producto, las reglas de plataforma o el derecho obligatorio. Exigir una actualización no es motivo para duplicar una compra, borrar un Lifetime VIP restaurable válido ni evitar un remedio legalmente debido.',
    ],
  },
  {
    title: 'Acceso multiplataforma, Family Sharing y registros duplicados',
    body: [
      'Una compra válida puede reconocerse en otro dispositivo o plataforma compatible de TycoonX únicamente cuando TycoonX admita ese acceso y las reglas aplicables de tienda, proveedor de pago, país y plataforma lo permitan. Reconocerla en otra plataforma no crea por sí solo una nueva transacción ni una concesión de pago adicional.',
      'La misma compra subyacente no debe multiplicarse mediante restauración, migración de cuenta, uso entre dispositivos, vinculación multiplataforma, reintentos de webhook o registros duplicados del proveedor. Salvo que una oferta concreta diga expresamente otra cosa, reconocer el mismo Lifetime VIP más de una vez no crea múltiples beneficios Lifetime VIP, y reconocer varias veces el mismo VIP de 30 días no amplía su periodo válido original.',
      'Las compras válidas realizadas por separado y que no sean duplicadas siguen siendo transacciones independientes. CK-Labs puede consolidar registros técnicos de derechos sin cancelar una compra válida distinta ni eliminar un derecho obligatorio de reembolso, garantía u otro remedio del consumidor.',
      'Apple Family Sharing solo se aplica cuando CK-Labs lo haya activado para la compra dentro de la app elegible y Apple informe de que la compra puede compartirse. Si se ofrece Family Sharing, el acceso de un familiar depende del derecho compartido válido del comprador original y puede finalizar si Apple informa de que el uso compartido o derecho subyacente ha terminado, sido revocado o reembolsado. El acceso compartido no crea una compra ni un derecho de reembolso independiente para cada familiar más allá de las reglas de Apple y del derecho obligatorio.',
      'Si TycoonX no muestra expresamente un producto de Apple como compatible con Family Sharing, la compra no incluye una promesa de Family Sharing.',
    ],
  },
  {
    title: 'Cierre del Servicio',
    body: [
      'Si TycoonX se cierra de forma permanente, también pueden terminar el acceso online a cuentas, Diamonds, VIP, objetos virtuales y datos del juego. Los objetos virtuales no se vuelven automáticamente canjeables por dinero solo porque cierre el Servicio.',
      'Lifetime VIP está vinculado a la vida comercial de TycoonX para la cuenta compradora, no a la vida biológica del usuario ni a una promesa ilimitada de que el Servicio existirá para siempre. Permanecen intactos los derechos obligatorios de reembolso, reducción de precio, resolución, garantía u otros remedios del consumidor.',
    ],
  },
];

export default function SpanishTycoonXPurchasesRefunds() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="es">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · Español</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Compras y reembolsos</h1>
          <p className="text-zinc-500 text-sm">Versión en español: 28 de agosto de 2026 · Versión canónica en inglés: 28 de agosto de 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            Esta política cubre Diamonds, VIP de 30 días de pago único, ofertas Lifetime VIP por tiempo limitado, cambios de precio, compras en Apple App Store, Google Play y la tienda web oficial de TycoonX con Xsolla. Complementa las Condiciones de uso y no reduce derechos obligatorios del consumidor.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-2">
        {sections.map((section, i) => (
          <section key={section.title} className="rounded-xl p-6 hover:bg-white/[0.03] transition">
            <div className="flex gap-4">
              <span className="text-xs text-zinc-600 font-mono mt-1 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="text-white font-semibold mb-3">{section.title}</h2>
                <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-white/10 bg-[#111111] p-6 mt-8">
          <h2 className="text-white font-semibold mb-3">Información legal y soporte</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">TycoonX está operado por CK-Labs. Para problemas de entrega, dudas sobre compras, sospechas de fraude o disputas sobre derechos digitales, utiliza el Soporte de TycoonX o escríbenos.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tycoonx-legal/es/terms" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Condiciones de uso</a>
            <a href="/tycoonx-legal/es" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Centro legal en español</a>
            <a href="/tyconx-privacy-policy" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Privacidad</a>
            <a href="/tyconx-support" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Soporte de TycoonX</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
          </div>
        </section>
      </div>
    </main>
  );
}