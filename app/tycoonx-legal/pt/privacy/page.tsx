const sections = [
  {
    title: "Informação que tratamos",
    body: [
      "Dados de conta e perfil, como identificadores de início de sessão suportados, endereço de email, nome apresentado, avatar, idioma, fuso horário, definições e eventos do ciclo de vida da conta.",
      "Dados de jogo e da economia necessários para operar o mundo persistente de TycoonX, incluindo progressão, inventário, saldos de moeda virtual e Diamonds, empresas, produção, atividade de mercado, habitação, empregos, contratos, empréstimos, ações, transações e estado dos direitos VIP.",
      "Dados de compras e direitos digitais, como plataforma de pagamento, identificador do produto, identificadores de transação, informação assinada da transação ou do recibo, estado de compra, ativação ou validade, estado de reembolso, revogação ou chargeback e histórico de entrega, restauro, migração ou correção. Em geral, a CK-Labs não recebe das lojas de plataforma ou dos fornecedores de pagamento o número completo do teu cartão de pagamento.",
      "Dados de segurança e antifraude, como registos de início de sessão e sessão, endereço IP, informação sobre o dispositivo ou plataforma disponibilizada ao Serviço, versão da aplicação, diagnósticos, padrões de acesso suspeitos, validações de compra inválidas, indicadores de exploit, sinais antiabuso e registos de moderação ou segurança.",
      "Comunicações e conteúdos da comunidade, como conversas públicas ou privadas, denúncias, conteúdos de perfil ou empresa, pedidos ao Suporte, envios através do formulário de contacto, relatórios de erros, recursos, anexos, datas e horas, identificadores de remetente ou destinatário e estado de moderação.",
      "Dados de utilização e análise, como utilização de funcionalidades, sessões, retenção, desempenho, eventos de interação e métricas agregadas da economia e do equilíbrio do jogo.",
    ],
  },
  {
    title: "De onde vêm os dados",
    body: [
      "Recebemos dados diretamente de ti quando crias ou utilizas uma conta, jogas TycoonX, contactas o Suporte, publicas conteúdos na comunidade ou alteras definições. Também recebemos informação limitada dos serviços que escolhes ou utilizas com TycoonX, incluindo fornecedores de autenticação suportados e Apple, Google, Xsolla ou outro fornecedor de pagamentos autorizado quando nos enviam informação sobre compras, direitos digitais, reembolsos, revogações, fraude ou estado de transações.",
      "Os fornecedores de pagamento podem tratar autonomamente dados de cartão, dados bancários, morada de faturação, localização fiscal ou outros dados de pagamento ao abrigo das respetivas políticas de privacidade. A CK-Labs recebe normalmente a informação de transação e de direitos necessária para entregar e reconciliar compras TycoonX, e não os dados completos do instrumento de pagamento.",
    ],
  },
  {
    title: "Porque tratamos esta informação",
    body: [
      "Tratamos informação para criar e proteger contas, operar e sincronizar TycoonX, entregar e restaurar compras válidas, evitar entregas duplicadas e fraude, detetar batota ou exploits, investigar incidentes, corrigir estados de jogo inválidos, prestar suporte, moderar funcionalidades da comunidade, aplicar os Termos de Serviço e as Normas da Comunidade, diagnosticar problemas técnicos, melhorar o Serviço, enviar avisos operacionais ou legais e cumprir obrigações legais.",
    ],
  },
  {
    title: "Fundamentos jurídicos",
    body: [
      "Quando o RGPD ou legislação semelhante seja aplicável, utilizamos o fundamento jurídico adequado a cada tratamento: execução do contrato para jogo, acesso à conta, entrega de compras e suporte; interesses legítimos para segurança, prevenção de fraude, integridade do jogo, diagnóstico, moderação proporcional da comunidade e defesa jurídica quando esses interesses não prevaleçam sobre os teus direitos; obrigação legal para conservação obrigatória de registos e pedidos de autoridades; e consentimento quando a lei o exigir para tratamentos facultativos.",
      "A simples utilização de TycoonX não é tratada como consentimento para operações que, por lei, exigem consentimento. Quando o consentimento for necessário, pedimo-lo separadamente e pode ser retirado para o futuro.",
    ],
  },
  {
    title: "Dados necessários para disponibilizar TycoonX",
    body: [
      "Alguma informação é necessária para executar o contrato TycoonX ou processar uma compra. Por exemplo, é necessário um identificador de conta para manter o estado persistente do jogo, e informação válida sobre a transação ou o direito digital é necessária para entregar, restaurar, reembolsar, revogar ou reconciliar corretamente conteúdos pagos. Se a informação necessária não for fornecida ou não puder ser verificada, poderemos não conseguir criar ou autenticar uma conta, entregar uma compra, restaurar um direito ou disponibilizar a funcionalidade afetada.",
      "A informação ou o tratamento facultativo que não seja necessário ao Serviço principal é gerido separadamente quando exigido, incluindo controlos de consentimento quando aplicável.",
    ],
  },
  {
    title: "Como partilhamos informação",
    body: [
      "Não vendemos dados pessoais. Podemos partilhar apenas o que for razoavelmente necessário com fornecedores que suportem alojamento, bases de dados, autenticação, armazenamento, análise, diagnósticos, moderação, comunicações, notificações ou segurança; parceiros de plataforma ou pagamento como Apple, Google, Xsolla ou outros fornecedores autorizados para validação de compras, restauro, reembolsos, revogações, fraude e disputas; outros jogadores quando escolhes utilizar funcionalidades públicas ou sociais do jogo; autoridades quando a lei o exigir; e partes envolvidas numa transferência empresarial legítima.",
      "Apple, Google, Xsolla, bancos, redes de cartões ou outros intervenientes no pagamento podem atuar como responsáveis pelo tratamento independentes relativamente a partes do respetivo processamento de pagamentos, fraude, impostos, contas ou plataformas. Aplicam-se a esse tratamento independente as respetivas políticas de privacidade e obrigações legais. TycoonX utiliza atualmente infraestrutura como a Supabase para partes do backend, e os prestadores de serviços estão sujeitos às salvaguardas contratuais e legais aplicáveis.",
      "Quando as regras de uma plataforma o exijam, os terceiros com quem a CK-Labs partilha dados de utilizadores devem assegurar aos dados recebidos da CK-Labs uma proteção igual ou equivalente à prevista nesta Política e nas regras aplicáveis da plataforma.",
    ],
  },
  {
    title: "Conteúdos públicos e privados da comunidade",
    body: [
      "Os conteúdos que escolhas tornar públicos em TycoonX podem ser mostrados a outros utilizadores como parte do Serviço. Quando os Termos de Serviço e as Normas da Comunidade permitirem destacar conteúdos públicos gerados por utilizadores para fins relacionados com a comunidade ou promoção de TycoonX, a CK-Labs utilizará um fundamento jurídico adequado e respeitará o contexto em que o conteúdo foi partilhado, as definições aplicáveis, direitos de terceiros e a lei imperativa. Se um uso promocional específico exigir consentimento, a CK-Labs pedi-lo-á separadamente.",
      "Mensagens diretas privadas, comunicações privadas com o Suporte e denúncias não públicas são tratadas na medida necessária para prestar, proteger, moderar, apoiar, investigar ou defender juridicamente o Serviço. Não são tornadas públicas nem usadas em promoção pública apenas porque a CK-Labs tenha de as tratar para essas finalidades operacionais.",
      "O acesso a comunicações privadas para moderação ou revisão jurídica limita-se a situações em que o tratamento seja razoavelmente necessário e lícito, por exemplo para responder a uma denúncia, proteger utilizadores, investigar abuso ou fraude, cumprir a lei ou exercer ou defender direitos em processos legais.",
    ],
  },
  {
    title: "Transferências internacionais",
    body: [
      "TycoonX e alguns fornecedores podem tratar informação fora do teu país de residência. Quando o RGPD ou regras semelhantes sobre transferências forem aplicáveis, utilizamos, quando necessário, um mecanismo jurídico adequado, como uma decisão de adequação, Cláusulas Contratuais-Tipo ou outra salvaguarda reconhecida. As transferências internacionais não se baseiam simplesmente na ideia de que utilizar TycoonX equivale a prestar consentimento.",
      "Quando a lei aplicável te conceda o direito de receber informação sobre as salvaguardas usadas numa transferência internacional, podes contactar o Suporte TycoonX para pedir mais informação ou uma cópia disponível das salvaguardas relevantes, sujeita a ocultações permitidas por lei e a deveres de confidencialidade perante terceiros.",
    ],
  },
  {
    title: "Conservação dos dados",
    body: [
      "Conservamos dados pessoais apenas durante o período razoavelmente necessário para a finalidade respetiva e durante períodos adicionais exigidos ou permitidos por lei. Dados de conta e jogo ativos podem ser conservados enquanto a conta estiver ativa; registos de suporte durante períodos razoáveis de acompanhamento e disputa; registos de compras, reembolsos, direitos, restauros, contabilidade e impostos durante os períodos legalmente exigidos ou necessários à execução do contrato, prevenção de fraude ou resolução de disputas; e registos de segurança, antifraude, exploits, moderação e auditoria durante um período razoável necessário para proteger o Serviço, investigar incidentes ou defender direitos.",
      "As comunicações privadas não são conservadas indefinidamente apenas por terem sido anteriormente revistas para moderação. Qualquer conservação mais longa deve ter uma necessidade lícita distinta, como uma disputa em curso, investigação de segurança, ação judicial ou obrigação legal. As cópias de segurança podem permanecer durante um ciclo de backup limitado antes de serem apagadas ou substituídas. Dados anonimizados ou verdadeiramente agregados podem ser conservados quando já não identificarem uma pessoa.",
    ],
  },
  {
    title: "Os teus direitos de privacidade",
    body: [
      "Consoante a lei aplicável, podes ter direitos de acesso, retificação, apagamento, limitação do tratamento, oposição, portabilidade de determinados dados, retirada do consentimento quando o tratamento se baseie em consentimento e apresentação de reclamação perante uma autoridade de proteção de dados competente.",
      "Podes pedir a eliminação da conta através de TycoonX quando essa opção estiver disponível ou contactar o Suporte TycoonX. Podemos ter de confirmar a tua identidade. Alguns registos podem continuar a ser conservados quando isso seja exigido ou permitido por motivos legais, fiscais, contabilísticos, de execução do contrato, prevenção de fraude, segurança, resolução de disputas, restauro de direitos ou defesa de pretensões jurídicas.",
    ],
  },
  {
    title: "Eliminação da conta e direitos pagos",
    body: [
      "Eliminar a tua conta TycoonX é diferente de pedir o reembolso de uma compra. A eliminação da conta pode apagar definitivamente progresso de jogo associado à conta, Diamonds, valor consumível, inventário, dados sociais e outros elementos do perfil. Não cria automaticamente um direito a conversão em dinheiro ou a reembolso.",
      "Eliminar a conta TycoonX não apaga nem invalida necessariamente um registo de transação separado da Apple, Google, Xsolla ou outro fornecedor de pagamentos. Quando um Lifetime VIP válido ou outro direito não consumível ou restaurável continue associado ao comprador segundo as regras da plataforma, registos do fornecedor, contrato ou lei imperativa, a CK-Labs pode conservar o mínimo de prova de transação e do direito razoavelmente necessário para o verificar e restaurar.",
      "Um restauro posterior pode exigir prova razoável de que o mesmo comprador controla a conta de plataforma ou de pagamento relevante. Restaurar um direito pago não recria progresso apagado, Diamonds consumidos, inventário, histórico ou bens transferidos, salvo quando a lei imponha o contrário. Os direitos a reembolso continuam sujeitos ao processo do fornecedor de pagamento e à lei imperativa aplicável.",
    ],
  },
  {
    title: "Menores e controlos relacionados com a idade",
    body: [
      "TycoonX não se destina a crianças abaixo da idade mínima permitida para utilização autónoma na jurisdição do utilizador. Quando a lei exigir consentimento parental, o Serviço não deve ser utilizado sem a autorização necessária. Se soubermos que foram recolhidos dados pessoais de uma criança em circunstâncias que não cumprem a lei aplicável, podemos limitar a conta e apagar informação conforme exigido.",
      "A CK-Labs pode tratar informação limitada sobre idade, faixa etária, autorização parental ou controlos de idade da plataforma quando isso seja razoavelmente necessário para cumprir a lei, aplicar restrições adequadas à idade em funcionalidades sociais, cumprir requisitos da App Store ou Google Play ou proteger menores. TycoonX pode limitar ou desativar funcionalidades da comunidade para determinados grupos etários mesmo quando o jogo principal continue disponível.",
    ],
  },
  {
    title: "Segurança",
    body: [
      "Utilizamos medidas técnicas e organizativas concebidas para proteger os dados TycoonX, como controlos de acesso, controlos de autenticação, transporte de rede encriptado quando aplicável, monitorização, rate limiting, validação de compras, registos de auditoria, cópias de segurança e outras salvaguardas adequadas ao Serviço.",
      "Nenhum serviço online pode garantir segurança absoluta. Se acreditares que a tua conta foi comprometida ou descobrires uma vulnerabilidade de segurança, contacta rapidamente o Suporte TycoonX. Isto não reduz as obrigações da CK-Labs quanto às medidas de segurança exigidas pela lei aplicável.",
    ],
  },
  {
    title: "Segurança e moderação automatizadas",
    body: [
      "TycoonX pode utilizar regras, sinais ou sistemas automatizados para identificar atividade suspeita, spam, fraude, conteúdo abusivo, padrões de exploit, compras inválidas ou outras condutas que possam ameaçar utilizadores ou o Serviço. Os sinais automatizados podem originar revisão, restrições temporárias, moderação ou investigação.",
      "Quando a lei aplicável limitar decisões exclusivamente automatizadas que produzam efeitos jurídicos ou de impacto semelhante, a CK-Labs aplicará as salvaguardas exigidas, incluindo intervenção ou revisão humana quando a lei o imponha. Os direitos relativos a essas decisões mantêm-se intactos.",
    ],
  },
  {
    title: "Ligações e serviços de terceiros",
    body: [
      "TycoonX pode incluir ligações ou interoperar com serviços de terceiros. Esses terceiros podem tratar informação segundo as respetivas políticas de privacidade. A CK-Labs não é responsável por práticas de privacidade independentes de terceiros, salvo na medida em que a lei aplicável atribua essa responsabilidade à CK-Labs.",
    ],
  },
  {
    title: "Alterações a esta Política",
    body: [
      "Podemos atualizar esta Política para refletir alterações em TycoonX, práticas de tratamento de dados, fornecedores, medidas de segurança, funcionalidades da comunidade ou requisitos legais. Atualizaremos a data de última atualização e daremos aviso adicional quando exigido. Se uma alteração exigir consentimento, pediremos esse consentimento em vez de tratar a continuação da utilização como consentimento.",
    ],
  },
];

export default function TycoonXPortuguesePrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="pt-PT">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · Português</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Política de Privacidade</h1>
          <p className="text-zinc-500 text-sm">Última atualização: 26 de agosto de 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            Esta Política de Privacidade explica como a CK-Labs, operadora de TycoonX, trata dados pessoais quando utilizas as aplicações móveis ou web de TycoonX, os sites, o suporte, as funcionalidades da comunidade e os serviços online relacionados.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-2">
        {sections.map((section, i) => (
          <section key={section.title} className="rounded-xl p-6 hover:bg-white/[0.03] transition">
            <div className="flex gap-4">
              <span className="text-xs text-zinc-600 font-mono mt-1 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
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
          <h2 className="text-white font-semibold mb-3">Responsável pelo tratamento e contacto</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">A CK-Labs é responsável pelo tratamento descrito nesta Política relativamente a TycoonX. Para pedidos de privacidade, eliminação de conta, relatórios de segurança, questões de privacidade relacionadas com compras, questões sobre dados de moderação ou outras matérias de proteção de dados, utiliza o Suporte TycoonX ou envia-nos um email.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Suporte TycoonX</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tycoonx-legal/pt/terms" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Termos de Serviço</a>
            <a href="/tycoonx-community-standards" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Normas da Comunidade</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">Os restantes dados de identificação e morada do operador legalmente exigidos devem ser disponibilizados no aviso legal ou Impressum aplicável ao Serviço.</p>
        </section>
      </div>
    </main>
  );
}
