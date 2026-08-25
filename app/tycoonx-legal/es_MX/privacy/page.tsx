const sections = [
  {
    title: 'Información que tratamos',
    body: [
      'Datos de cuenta y perfil, como identificadores de inicio de sesión compatibles, correo electrónico, nombre visible, avatar, idioma, zona horaria, configuración y eventos del ciclo de vida de la cuenta.',
      'Datos de juego y economía necesarios para operar el mundo persistente de TycoonX, incluidos progreso, inventario, saldos de moneda virtual y Diamonds, empresas, producción, actividad de mercado, vivienda, empleos, contratos, préstamos, acciones, transacciones y estado de beneficios VIP.',
      'Datos de compra y beneficios digitales, como plataforma de pago, identificador de producto, identificadores de transacción, información firmada de transacción o recibo, estado de compra, activación o vencimiento, estado de reembolso, revocación o contracargo, e historial de entrega, restauración, migración o corrección. Por lo general no recibimos el número completo de tu tarjeta desde las tiendas de plataforma o procesadores de pago.',
      'Datos de seguridad y prevención de fraude, como registros de inicio de sesión y sesión, dirección IP, información del dispositivo o plataforma disponible para el Servicio, versión de la app, diagnósticos, patrones de acceso sospechosos, validaciones de compra inválidas, indicadores de exploits, señales antiabuso y registros de moderación o seguridad.',
      'Comunicaciones y contenido de comunidad, como chats públicos o privados, reportes, contenido de perfil o empresa, tickets de soporte, formularios de contacto, reportes de errores, apelaciones, archivos adjuntos, marcas de tiempo, identificadores de remitente o destinatario y estado de moderación.',
      'Información de uso y analítica, como uso de funciones, sesiones, retención, rendimiento, eventos de interacción y métricas agregadas de economía o balance.',
    ],
  },
  {
    title: 'De dónde obtenemos los datos',
    body: [
      'Recibimos información directamente de ti cuando creas o usas una cuenta, juegas TycoonX, contactas a Soporte, publicas contenido de comunidad o cambias tu configuración. También recibimos información limitada de servicios que eliges o utilizas con TycoonX, incluidos proveedores de autenticación compatibles y Apple, Google, Xsolla u otro proveedor de pago autorizado cuando nos envían información sobre compras, beneficios, reembolsos, revocaciones, fraude o estado de transacciones.',
      'Los proveedores de pago pueden tratar de forma independiente datos de tarjeta, cuenta bancaria, dirección de facturación, ubicación fiscal u otros datos de pago conforme a sus propios avisos de privacidad. CK-Labs normalmente recibe la información de transacción y beneficios necesaria para entregar y conciliar compras de TycoonX, no los datos completos del instrumento de pago.',
    ],
  },
  {
    title: 'Por qué tratamos la información',
    body: [
      'Tratamos información para crear y proteger cuentas, operar y sincronizar TycoonX, entregar y restaurar compras válidas, prevenir entregas duplicadas y fraude, detectar trampas o exploits, investigar incidentes, corregir estados inválidos del juego, brindar soporte, moderar funciones de comunidad, hacer cumplir los Términos y las Normas de la Comunidad, diagnosticar problemas técnicos, mejorar el Servicio, enviar avisos operativos o legales y cumplir obligaciones legales.',
    ],
  },
  {
    title: 'Bases legales',
    body: [
      'Cuando el RGPD u otra ley similar sea aplicable, usamos la base legal adecuada para cada tratamiento: ejecución de un contrato para jugabilidad, acceso a la cuenta, entrega de compras y soporte; intereses legítimos para seguridad, prevención de fraude, integridad del juego, diagnósticos, moderación proporcionada de la comunidad y defensa legal cuando esos intereses no prevalezcan sobre tus derechos; obligaciones legales para conservación exigida y solicitudes de autoridades; y consentimiento cuando la ley lo requiera para tratamientos opcionales.',
      'El simple uso de TycoonX no se considera consentimiento para tratamientos que legalmente requieren consentimiento. Cuando se necesite, lo solicitaremos por separado y podrás retirarlo para tratamientos futuros.',
    ],
  },
  {
    title: 'Datos necesarios para prestar TycoonX',
    body: [
      'Parte de la información es necesaria para cumplir el contrato de TycoonX o procesar una compra. Por ejemplo, necesitamos un identificador de cuenta para mantener el estado persistente del juego y necesitamos información válida de transacción o beneficio para entregar, restaurar, reembolsar, revocar o conciliar correctamente contenido de pago. Si la información necesaria no se proporciona o no puede verificarse, es posible que no podamos crear o autenticar una cuenta, entregar una compra, restaurar un beneficio o prestar la función afectada.',
      'La información o el tratamiento opcional que no sea necesario para el núcleo del Servicio se gestiona por separado cuando sea obligatorio, incluidos controles de consentimiento cuando corresponda.',
    ],
  },
  {
    title: 'Cómo compartimos la información',
    body: [
      'No vendemos datos personales. Podemos compartir únicamente lo razonablemente necesario con proveedores que apoyan hosting, bases de datos, autenticación, almacenamiento, analítica, diagnósticos, moderación, comunicaciones, notificaciones o seguridad; con socios de plataforma o pago como Apple, Google, Xsolla u otros proveedores autorizados para validar compras, restauraciones, reembolsos, revocaciones, fraude y disputas; con otros jugadores cuando usas de forma intencional funciones públicas o sociales; con autoridades cuando exista obligación legal; y con partes involucradas en una transferencia empresarial lícita.',
      'Apple, Google, Xsolla, bancos, redes de tarjetas u otros participantes del proceso de pago pueden actuar como responsables independientes respecto de parte de su propio tratamiento de pagos, fraude, impuestos, cuentas o plataforma. Sus propios avisos de privacidad y obligaciones legales se aplican a ese tratamiento independiente. TycoonX utiliza actualmente infraestructura como Supabase para partes de su backend, y los proveedores de servicios están sujetos a las garantías contractuales y legales aplicables.',
    ],
  },
  {
    title: 'Contenido público y privado de la comunidad',
    body: [
      'El contenido que decidas hacer público en TycoonX puede mostrarse a otros usuarios como parte del Servicio. Cuando los Términos y las Normas de la Comunidad permitan destacar contenido público generado por usuarios para fines de comunidad o promoción de TycoonX, CK-Labs utilizará una base legal adecuada y respetará el contexto en el que se compartió, la configuración aplicable, los derechos de terceros y la legislación obligatoria. Si un uso promocional específico requiere consentimiento, CK-Labs lo solicitará por separado.',
      'Los mensajes directos privados, las comunicaciones privadas con Soporte y los reportes no públicos se tratan cuando sea necesario para prestar, proteger, moderar, dar soporte, investigar o proteger legalmente el Servicio. No se hacen públicos ni se utilizan para promoción pública solo porque CK-Labs deba tratarlos para esos fines operativos.',
      'El acceso a comunicaciones privadas para moderación o revisión legal se limita a situaciones en las que sea razonablemente necesario y lícito, por ejemplo para responder a un reporte, proteger a usuarios, investigar abuso o fraude, cumplir la ley o formular, ejercer o defender reclamaciones.',
    ],
  },
  {
    title: 'Transferencias internacionales',
    body: [
      'TycoonX y algunos proveedores pueden tratar información fuera de tu país de residencia. Cuando se apliquen el RGPD u otras restricciones sobre transferencias internacionales, utilizamos cuando sea necesario un mecanismo legal adecuado, como una decisión de adecuación, Cláusulas Contractuales Tipo u otra garantía reconocida. Las transferencias internacionales no se basan simplemente en decir que usar TycoonX equivale a dar consentimiento.',
      'Cuando la ley te dé derecho a información sobre las garantías utilizadas para una transferencia internacional, puedes contactar a Soporte de TycoonX para solicitar más información o una copia disponible de las garantías relevantes, sujeta a redacciones legales y obligaciones de confidencialidad de terceros.',
    ],
  },
  {
    title: 'Conservación de datos',
    body: [
      'Conservamos datos personales solo durante el tiempo razonablemente necesario para su finalidad y durante periodos adicionales exigidos o permitidos por la ley. Los datos de cuenta y juego activos pueden conservarse mientras la cuenta esté activa; los registros de soporte durante periodos razonables de seguimiento y disputas; los registros de compras, reembolsos, beneficios, restauraciones, contabilidad e impuestos durante los periodos exigidos por ley o necesarios para cumplir el contrato, prevenir fraude o resolver disputas; y los registros de seguridad, antifraude, exploits, moderación y auditoría durante un periodo razonable para proteger el Servicio, investigar incidentes o defender reclamaciones.',
      'Las comunicaciones privadas no se conservan indefinidamente solo porque alguna vez hayan sido revisadas con fines de moderación. Cualquier conservación más larga debe tener otra necesidad lícita, como una disputa activa, investigación de seguridad, reclamación legal u obligación legal. Las copias de seguridad pueden permanecer durante un ciclo limitado antes de eliminarse o sobrescribirse. Los datos anonimizados o realmente agregados pueden conservarse cuando ya no identifiquen a una persona.',
    ],
  },
  {
    title: 'Tus derechos de privacidad',
    body: [
      'Dependiendo de la ley aplicable, puedes tener derechos de acceso, rectificación, eliminación, limitación, oposición, portabilidad de ciertos datos, retiro del consentimiento cuando el tratamiento se base en él y presentación de una queja ante una autoridad de protección de datos competente.',
      'Puedes solicitar la eliminación de tu cuenta desde TycoonX cuando esa opción esté disponible o contactar a Soporte de TycoonX. Podemos necesitar verificar tu identidad. Ciertos registros pueden seguir conservándose cuando sea exigido o permitido por razones legales, fiscales, contables, de cumplimiento contractual, prevención de fraude, seguridad, resolución de disputas, restauración de beneficios o defensa de reclamaciones.',
    ],
  },
  {
    title: 'Eliminación de cuenta y beneficios de pago',
    body: [
      'Eliminar tu cuenta de TycoonX es distinto de solicitar un reembolso. La eliminación de la cuenta puede borrar permanentemente progreso de juego, Diamonds, valor consumible, inventario, datos sociales y otros datos vinculados al perfil. No crea automáticamente un derecho a canje por dinero ni a un reembolso.',
      'Eliminar la cuenta de TycoonX no necesariamente borra o invalida un registro de transacción separado de Apple, Google, Xsolla u otro proveedor de pago. Cuando un Lifetime VIP válido u otro beneficio no consumible o restaurable siga asociado al comprador conforme a reglas de plataforma, registros del proveedor, contrato o legislación obligatoria, CK-Labs puede conservar la evidencia mínima de transacción y beneficio razonablemente necesaria para verificarlo y restaurarlo.',
      'Una restauración posterior puede requerir una prueba razonable de que el mismo comprador controla la cuenta de plataforma o pago correspondiente. Restaurar un beneficio de pago no recupera progreso eliminado, Diamonds consumidos, inventario, historial ni activos transferidos, salvo que la ley exija otra cosa. Los derechos de reembolso siguen sujetos al proceso del proveedor de pago y a la legislación obligatoria.',
    ],
  },
  {
    title: 'Menores y controles relacionados con la edad',
    body: [
      'TycoonX no está dirigido a menores por debajo de la edad mínima permitida para uso independiente en la jurisdicción del usuario. Cuando la autorización de padre, madre o tutor sea legalmente necesaria, el Servicio no debe utilizarse sin esa autorización. Si sabemos que se recopilaron datos personales de un menor en circunstancias que no cumplen la ley aplicable, podemos restringir la cuenta y eliminar información cuando sea obligatorio.',
      'CK-Labs puede tratar información limitada sobre edad, rango de edad, autorización parental o controles de edad de plataforma cuando sea razonablemente necesario para cumplir la ley, aplicar restricciones apropiadas a funciones sociales, cumplir requisitos de App Store o Google Play o proteger a menores. TycoonX puede restringir o desactivar funciones de comunidad para determinados grupos de edad aunque el juego principal siga disponible.',
    ],
  },
  {
    title: 'Seguridad',
    body: [
      'Utilizamos medidas técnicas y organizativas diseñadas para proteger los datos de TycoonX, como controles de acceso y autenticación, transporte de red cifrado cuando corresponda, monitoreo, límites de solicitudes, validación de compras, registros de auditoría, copias de seguridad y otras medidas apropiadas para el Servicio.',
      'Ningún servicio en línea puede garantizar seguridad absoluta. Si crees que tu cuenta fue comprometida o descubres una vulnerabilidad de seguridad, contacta a Soporte de TycoonX lo antes posible. Esto no reduce las obligaciones de CK-Labs respecto de las medidas de seguridad exigidas por la ley aplicable.',
    ],
  },
  {
    title: 'Seguridad y moderación automatizadas',
    body: [
      'TycoonX puede usar reglas, señales o sistemas automatizados para identificar actividad sospechosa, spam, fraude, contenido abusivo, patrones de exploits, compras inválidas u otras conductas que puedan poner en riesgo a usuarios o al Servicio. Las señales automatizadas pueden dar lugar a revisión, restricciones temporales, moderación o investigación.',
      'Cuando la ley aplicable limite decisiones exclusivamente automatizadas que produzcan efectos legales o de importancia similar, CK-Labs aplicará las garantías exigidas, incluida intervención o revisión humana cuando la ley lo requiera. Los derechos relacionados con esas decisiones permanecen intactos.',
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
      'Podemos actualizar esta Política para reflejar cambios en TycoonX, prácticas de datos, proveedores, medidas de seguridad, funciones de comunidad o requisitos legales. Actualizaremos la fecha de última revisión y proporcionaremos avisos adicionales cuando sean obligatorios. Si un cambio requiere consentimiento, lo solicitaremos en lugar de considerar que el uso continuado equivale a consentimiento.',
    ],
  },
];

export default function MexicanSpanishTycoonXPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="es-MX">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · Español (México)</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Política de Privacidad</h1>
          <p className="text-zinc-500 text-sm">Última actualización: 25 de agosto de 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            Esta Política de Privacidad explica cómo CK-Labs, operador de TycoonX, trata datos personales cuando utilizas las aplicaciones móviles o web de TycoonX, sus sitios, servicios de soporte, funciones de comunidad y demás servicios en línea relacionados.
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
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">CK-Labs es el responsable del tratamiento de TycoonX descrito en esta Política. Para solicitudes de privacidad, eliminación de cuenta, reportes de seguridad, dudas de privacidad relacionadas con compras, preguntas sobre datos de moderación u otras consultas de protección de datos, utiliza Soporte de TycoonX o escríbenos por correo electrónico.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Soporte de TycoonX</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tycoonx-legal/es_MX/terms" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Términos de Servicio</a>
            <a href="/tycoonx-community-standards" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Normas de la Comunidad</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">Los datos adicionales de identidad y domicilio del operador que sean legalmente obligatorios deben estar disponibles en el aviso legal o información equivalente aplicable al Servicio.</p>
        </section>
      </div>
    </main>
  );
}
