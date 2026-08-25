const sections = [
  {
    title: 'Información que tratamos',
    body: [
      'Datos de cuenta y perfil, como identificadores de inicio de sesión compatibles, dirección de correo electrónico, nombre visible, avatar, idioma, zona horaria, ajustes y eventos del ciclo de vida de la cuenta.',
      'Datos de juego y economía necesarios para operar el mundo persistente de TycoonX, incluidos progreso, inventario, saldos de moneda virtual y Diamonds, empresas, producción, actividad de mercado, vivienda, empleos, contratos, préstamos, acciones, transacciones y estado de derechos VIP.',
      'Datos de compra y derechos digitales, como plataforma de pago, identificador de producto, identificadores de transacción, información firmada de transacción o recibo, estado de compra, activación o caducidad, estado de reembolso, revocación o chargeback e historial de entrega, restauración, migración o corrección. Por regla general no recibimos el número completo de tu tarjeta de pago desde las tiendas o procesadores de pago.',
      'Datos de seguridad y fraude, como registros de inicio de sesión y sesión, dirección IP, información de dispositivo o plataforma disponible para el Servicio, versión de la app, diagnósticos, patrones de acceso sospechosos, validaciones de compra inválidas, indicadores de exploits, señales antiabuso y registros de moderación o seguridad.',
      'Comunicaciones y contenido de comunidad, como chats públicos o privados, denuncias, contenido de perfil o empresa, tickets de soporte, formularios de contacto, reportes de bugs, apelaciones, archivos adjuntos, marcas de tiempo, identificadores de remitente o destinatario y estado de moderación.',
      'Información de uso y analítica, como uso de funciones, sesiones, retención, rendimiento, eventos de interacción y métricas agregadas de economía o balance.',
    ],
  },
  {
    title: 'De dónde obtenemos los datos',
    body: [
      'Recibimos información directamente de ti cuando creas o utilizas una cuenta, juegas a TycoonX, contactas con Soporte, envías contenido a la comunidad o cambias ajustes. También recibimos información limitada de servicios que eliges o utilizas con TycoonX, incluidos proveedores de autenticación compatibles y Apple, Google, Xsolla u otro proveedor de pago autorizado cuando nos envían información sobre compras, derechos, reembolsos, revocaciones, fraude o estado de transacciones.',
      'Los proveedores de pago pueden tratar de forma independiente datos de tarjeta, banco, dirección de facturación, ubicación fiscal u otros datos de pago conforme a sus propios avisos de privacidad. CK-Labs normalmente recibe la información de transacción y derechos necesaria para entregar y reconciliar compras de TycoonX, no los datos completos del instrumento de pago.',
    ],
  },
  {
    title: 'Por qué tratamos la información',
    body: [
      'Tratamos información para crear y proteger cuentas, operar y sincronizar TycoonX, entregar y restaurar compras válidas, evitar entregas duplicadas y fraude, detectar trampas o exploits, investigar incidentes, corregir estados inválidos del juego, prestar soporte, moderar funciones de comunidad, hacer cumplir las Condiciones y Normas de la Comunidad, diagnosticar problemas técnicos, mejorar el Servicio, enviar avisos operativos o legales y cumplir obligaciones legales.',
    ],
  },
  {
    title: 'Bases jurídicas',
    body: [
      'Cuando se aplique el RGPD u otra normativa similar, utilizamos la base jurídica adecuada para cada tratamiento: ejecución del contrato para juego, acceso a la cuenta, entrega de compras y soporte; intereses legítimos para seguridad, antifraude, integridad del juego, diagnósticos, moderación proporcionada de la comunidad y defensa jurídica cuando esos intereses no prevalezcan sobre tus derechos; obligaciones legales para conservación exigida y solicitudes de autoridades; y consentimiento cuando la ley lo exija para tratamientos opcionales.',
      'El simple uso de TycoonX no se considera consentimiento para tratamientos que legalmente requieran consentimiento. Cuando sea necesario, lo solicitamos por separado y puede retirarse para el futuro.',
    ],
  },
  {
    title: 'Datos necesarios para prestar TycoonX',
    body: [
      'Parte de la información es necesaria para ejecutar el contrato de TycoonX o procesar una compra. Por ejemplo, se necesita un identificador de cuenta para mantener el estado persistente del juego y se necesita información válida de transacción o derecho para entregar, restaurar, reembolsar, revocar o reconciliar correctamente contenido de pago. Si la información necesaria no se facilita o no puede verificarse, es posible que no podamos crear o autenticar una cuenta, entregar una compra, restaurar un derecho o prestar la función afectada.',
      'La información o tratamiento opcional que no sea necesario para el núcleo del Servicio se gestiona por separado cuando sea obligatorio, incluidos controles de consentimiento cuando proceda.',
    ],
  },
  {
    title: 'Cómo compartimos la información',
    body: [
      'No vendemos datos personales. Podemos compartir únicamente lo razonablemente necesario con proveedores que apoyan hosting, bases de datos, autenticación, almacenamiento, analítica, diagnósticos, moderación, comunicaciones, notificaciones o seguridad; con socios de plataforma o pago como Apple, Google, Xsolla u otros proveedores autorizados para validar compras, restauraciones, reembolsos, revocaciones, fraude y disputas; con otros jugadores cuando utilizas intencionadamente funciones públicas o sociales; con autoridades cuando exista obligación legal; y con partes implicadas en una transferencia empresarial lícita.',
      'Apple, Google, Xsolla, bancos, redes de tarjetas u otros participantes de pago pueden actuar como responsables independientes para parte de su propio tratamiento de pagos, fraude, impuestos, cuentas o plataforma. Se aplican sus propios avisos de privacidad y obligaciones legales. TycoonX utiliza actualmente infraestructura como Supabase para partes de su backend, y los proveedores de servicios están sujetos a las garantías contractuales y legales aplicables.',
    ],
  },
  {
    title: 'Contenido público y privado de la comunidad',
    body: [
      'El contenido que hagas público de forma intencionada en TycoonX puede mostrarse a otros usuarios como parte del Servicio. Cuando las Condiciones y Normas de la Comunidad permitan destacar contenido público generado por usuarios para fines de comunidad o promoción de TycoonX, CK-Labs utilizará una base jurídica adecuada y respetará el contexto en el que se compartió, los ajustes aplicables, derechos de terceros y la ley obligatoria. Si un uso promocional concreto requiere consentimiento, CK-Labs lo solicitará por separado.',
      'Los mensajes directos privados, comunicaciones privadas con Soporte y denuncias no públicas se tratan cuando sea necesario para prestar, proteger, moderar, dar soporte, investigar o proteger jurídicamente el Servicio. No se hacen públicos ni se utilizan para promoción pública únicamente porque CK-Labs deba tratarlos para esos fines operativos.',
      'El acceso a comunicaciones privadas para moderación o revisión jurídica se limita a situaciones en las que sea razonablemente necesario y lícito, por ejemplo para responder a una denuncia, proteger a usuarios, investigar abusos o fraude, cumplir la ley o formular, ejercer o defender reclamaciones.',
    ],
  },
  {
    title: 'Transferencias internacionales',
    body: [
      'TycoonX y algunos proveedores pueden tratar información fuera de tu país de residencia. Cuando se apliquen el RGPD u otras restricciones de transferencias, utilizamos cuando sea necesario un mecanismo jurídico adecuado, como una decisión de adecuación, Cláusulas Contractuales Tipo u otra garantía reconocida. Las transferencias internacionales no se basan simplemente en afirmar que usar TycoonX equivale a consentimiento.',
      'Cuando la ley te dé derecho a información sobre las garantías utilizadas para una transferencia internacional, puedes contactar con el Soporte de TycoonX para solicitar más información o una copia disponible de las garantías relevantes, sujeta a redacciones legales y obligaciones de confidencialidad de terceros.',
    ],
  },
  {
    title: 'Conservación de datos',
    body: [
      'Conservamos datos personales únicamente durante el tiempo razonablemente necesario para su finalidad y durante periodos adicionales exigidos o permitidos por la ley. Los datos de cuenta y juego activos pueden conservarse mientras la cuenta esté activa; los registros de soporte durante periodos razonables de seguimiento y disputas; los registros de compras, reembolsos, derechos, restauraciones, contabilidad e impuestos durante los periodos exigidos por ley o necesarios para ejecutar el contrato, prevenir fraude o resolver disputas; y los registros de seguridad, antifraude, exploits, moderación y auditoría durante un periodo razonable para proteger el Servicio, investigar incidentes o defender reclamaciones.',
      'Las comunicaciones privadas no se conservan indefinidamente únicamente porque hayan sido revisadas una vez con fines de moderación. Cualquier conservación más larga necesita otra finalidad lícita, como una disputa activa, investigación de seguridad, reclamación jurídica u obligación legal. Las copias de seguridad pueden permanecer durante un ciclo limitado antes de ser eliminadas o sobrescritas. Los datos anonimizados o realmente agregados pueden conservarse cuando ya no identifiquen a una persona.',
    ],
  },
  {
    title: 'Tus derechos de privacidad',
    body: [
      'Según la ley aplicable, puedes tener derechos de acceso, rectificación, supresión, limitación, oposición, portabilidad de determinados datos, retirada del consentimiento cuando el tratamiento se base en él y reclamación ante una autoridad de protección de datos competente.',
      'Puedes solicitar la eliminación de tu cuenta desde TycoonX cuando esa opción esté disponible o contactar con el Soporte de TycoonX. Podemos necesitar verificar tu identidad. Determinados registros pueden seguir conservándose cuando sea exigido o permitido por razones legales, fiscales, contables, ejecución del contrato, prevención de fraude, seguridad, resolución de disputas, restauración de derechos o defensa de reclamaciones.',
    ],
  },
  {
    title: 'Eliminación de cuenta y derechos de pago',
    body: [
      'Eliminar tu cuenta de TycoonX es distinto de solicitar un reembolso de pago. La eliminación de la cuenta puede borrar permanentemente progreso, Diamonds, valor consumible, inventario, datos sociales y otros estados vinculados al perfil. No crea automáticamente derecho a canje por dinero ni a reembolso.',
      'Eliminar la cuenta de TycoonX no borra ni invalida necesariamente un registro de transacción separado de Apple, Google, Xsolla u otro proveedor de pago. Cuando un Lifetime VIP válido u otro derecho no consumible o restaurable siga asociado al comprador conforme a reglas de plataforma, registros del proveedor, contrato o ley obligatoria, CK-Labs puede conservar la evidencia mínima de transacción y derecho razonablemente necesaria para verificarlo y restaurarlo.',
      'Una restauración posterior puede requerir una prueba razonable de que el mismo comprador controla la cuenta de plataforma o pago correspondiente. Restaurar un derecho de pago no recupera progreso eliminado, Diamonds consumidos, inventario, historial ni activos transferidos salvo que la ley exija otra cosa. Los derechos de reembolso siguen sujetos al proceso del proveedor de pago y al derecho obligatorio.',
    ],
  },
  {
    title: 'Menores y controles relacionados con la edad',
    body: [
      'TycoonX no está dirigido a menores por debajo de la edad mínima permitida para uso independiente en la jurisdicción del usuario. Cuando sea legalmente necesario consentimiento parental, el Servicio no debe utilizarse sin la autorización requerida. Si sabemos que se recogieron datos personales de un menor en circunstancias que no cumplen la ley aplicable, podemos restringir la cuenta y eliminar información cuando sea obligatorio.',
      'CK-Labs puede tratar información limitada sobre edad, rango de edad, autorización parental o controles de edad de plataforma cuando sea razonablemente necesario para cumplir la ley, aplicar restricciones sociales apropiadas, cumplir requisitos del App Store o Google Play o proteger a menores. TycoonX puede restringir o desactivar funciones de comunidad para determinados grupos de edad aunque el juego principal siga disponible.',
    ],
  },
  {
    title: 'Seguridad',
    body: [
      'Utilizamos medidas técnicas y organizativas diseñadas para proteger los datos de TycoonX, como controles de acceso y autenticación, transporte de red cifrado cuando corresponda, supervisión, rate limiting, validación de compras, registros de auditoría, copias de seguridad y otras salvaguardas adecuadas al Servicio.',
      'Ningún servicio online puede garantizar seguridad absoluta. Si crees que tu cuenta ha sido comprometida o descubres una vulnerabilidad de seguridad, contacta cuanto antes con el Soporte de TycoonX. Esto no reduce las obligaciones de CK-Labs sobre medidas de seguridad exigidas por la ley aplicable.',
    ],
  },
  {
    title: 'Seguridad y moderación automatizadas',
    body: [
      'TycoonX puede utilizar reglas, señales o sistemas automatizados para identificar actividad sospechosa, spam, fraude, contenido abusivo, patrones de exploits, compras inválidas u otras conductas que puedan amenazar a usuarios o al Servicio. Las señales automatizadas pueden dar lugar a revisión, restricciones temporales, moderación o investigación.',
      'Cuando la ley aplicable limite decisiones exclusivamente automatizadas que produzcan efectos jurídicos o de importancia similar, CK-Labs aplicará las garantías exigidas, incluida intervención o revisión humana cuando la ley lo requiera. Los derechos relacionados con esas decisiones permanecen intactos.',
    ],
  },
  {
    title: 'Enlaces y servicios de terceros',
    body: [
      'TycoonX puede enlazar o interoperar con servicios de terceros. Esos terceros pueden tratar información conforme a sus propias políticas de privacidad. CK-Labs no es responsable de prácticas de privacidad independientes de terceros salvo en la medida en que la ley aplicable atribuya responsabilidad a CK-Labs.',
    ],
  },
  {
    title: 'Cambios en esta Política',
    body: [
      'Podemos actualizar esta Política para reflejar cambios en TycoonX, prácticas de datos, proveedores, medidas de seguridad, funciones de comunidad o requisitos legales. Actualizaremos la fecha de última revisión y daremos avisos adicionales cuando sean obligatorios. Si un cambio exige consentimiento, lo solicitaremos en lugar de considerar que el uso continuado equivale a consentimiento.',
    ],
  },
];

export default function SpanishTycoonXPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="es">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · Español</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Política de privacidad</h1>
          <p className="text-zinc-500 text-sm">Última actualización: 25 de agosto de 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            Esta Política explica cómo CK-Labs, operador de TycoonX, trata datos personales cuando utilizas las aplicaciones móviles o web de TycoonX, sus sitios web, soporte, funciones de comunidad y servicios online relacionados.
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
          <h2 className="text-white font-semibold mb-3">Responsable y contacto</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">CK-Labs es el responsable del tratamiento descrito en esta Política. Para solicitudes de privacidad, eliminación de cuenta, avisos de seguridad, preguntas de privacidad relacionadas con compras, dudas sobre datos de moderación u otras cuestiones de protección de datos, utiliza el Soporte de TycoonX o escríbenos.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Soporte de TycoonX</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tycoonx-legal/es/terms" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Condiciones de uso</a>
            <a href="/tycoonx-legal/es" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Centro legal en español</a>
            <a href="/tycoonx-community-standards" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Normas de la Comunidad</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">Los datos adicionales de identidad y dirección del operador exigidos legalmente deben estar disponibles en el aviso legal o información del operador correspondiente al Servicio.</p>
        </section>
      </div>
    </main>
  );
}
