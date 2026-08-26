const sections = [
  {
    title: "Informações que tratamos",
    body: [
      "Dados de conta e perfil, como identificadores compatíveis de login, endereço de e-mail, nome de exibição, avatar, idioma, fuso horário, preferências, configurações e eventos do ciclo de vida da conta.",
      "Dados de jogo e da economia necessários para operar o mundo persistente de TycoonX, incluindo progressão, inventário, saldos de moeda virtual e Diamonds, empresas, produção, atividade de mercado, imóveis, empregos, contratos, empréstimos, ações, transações e estado dos direitos VIP.",
      "Dados de compras e direitos digitais, como plataforma de pagamento, identificador do produto, identificadores de transação, informações assinadas da transação ou do recibo, estado de compra, ativação ou validade, estado de reembolso, revogação ou chargeback e histórico de entrega, restauração, migração ou correção. Em geral, a CK-Labs não recebe das lojas de plataforma ou dos processadores de pagamento o número completo do seu cartão.",
      "Dados de segurança e prevenção a fraudes, como registros de login e sessão, endereço IP, informações sobre dispositivo ou plataforma disponibilizadas ao Serviço, versão do aplicativo, diagnósticos, padrões de acesso suspeitos, validações de compra inválidas, indícios de exploração de falhas, sinais de abuso e registros de moderação ou segurança.",
      "Comunicações e conteúdo da comunidade, como chats públicos ou privados, denúncias, conteúdo de perfil ou empresa, chamados ao Suporte, formulários de contato, relatórios de bugs, recursos, anexos, datas e horários, identificadores de remetente e destinatário e estado de moderação.",
      "Informações de uso e análise, como uso de recursos, sessões, retenção, desempenho, eventos de interação e métricas agregadas da economia e do balanceamento do jogo.",
    ],
  },
  {
    title: "De onde vêm os dados",
    body: [
      "Recebemos dados diretamente de você quando cria ou usa uma conta, joga TycoonX, entra em contato com o Suporte, publica conteúdo na comunidade ou altera configurações. Também recebemos informações limitadas de serviços que você escolhe ou usa com TycoonX, incluindo provedores de autenticação compatíveis e Apple, Google, Xsolla ou outro provedor de pagamento autorizado quando eles enviam informações sobre compras, direitos digitais, reembolsos, revogações, fraude ou estado de transações.",
      "Provedores de pagamento podem tratar dados de cartão, informações bancárias, endereço de cobrança, localização fiscal ou outros dados de pagamento de forma independente, conforme suas próprias políticas de privacidade. A CK-Labs normalmente recebe os dados de transação e de direito digital necessários para entregar e reconciliar compras de TycoonX, e não os dados completos do instrumento de pagamento.",
    ],
  },
  {
    title: "Por que tratamos essas informações",
    body: [
      "Tratamos informações para criar e proteger contas, operar e sincronizar TycoonX, entregar e restaurar compras válidas, evitar entregas duplicadas e fraudes, detectar trapaças ou exploração de falhas, investigar incidentes, corrigir estados inválidos do jogo, prestar suporte, moderar recursos da comunidade, aplicar os Termos de Uso e as Normas da Comunidade, diagnosticar problemas técnicos, melhorar o Serviço, enviar avisos operacionais ou legais e cumprir obrigações legais.",
    ],
  },
  {
    title: "Bases legais",
    body: [
      "Quando o GDPR, a LGPD ou legislação semelhante se aplicar, usamos a base legal adequada ao tratamento específico. Isso pode incluir execução de contrato para funcionamento do jogo, acesso à conta, entrega de compras e suporte; legítimo interesse para segurança, prevenção a fraudes, integridade do jogo, diagnósticos, moderação proporcional e defesa de direitos, quando esses interesses não prevalecerem sobre os direitos do usuário; cumprimento de obrigação legal para registros obrigatórios e solicitações de autoridades; e consentimento quando a lei exigir para tratamentos opcionais.",
      "O simples uso de TycoonX não é tratado como consentimento para um tratamento que, por lei, exija consentimento. Quando o consentimento for necessário, ele será solicitado separadamente e poderá ser retirado para tratamentos futuros, sem afetar a licitude do tratamento realizado antes da retirada.",
    ],
  },
  {
    title: "Dados necessários para fornecer TycoonX",
    body: [
      "Algumas informações são necessárias para executar o contrato de TycoonX ou processar uma compra. Por exemplo, um identificador de conta é necessário para manter o estado persistente do jogo, e informações válidas sobre transação ou direito digital são necessárias para entregar, restaurar, reembolsar, revogar ou reconciliar corretamente conteúdo pago. Se as informações necessárias não forem fornecidas ou não puderem ser verificadas, talvez não seja possível criar ou autenticar uma conta, entregar uma compra, restaurar um direito ou disponibilizar o recurso afetado.",
      "Informações ou tratamentos opcionais que não sejam necessários ao Serviço principal são tratados separadamente quando exigido, incluindo controles de consentimento quando aplicáveis.",
    ],
  },
  {
    title: "Como compartilhamos informações",
    body: [
      "Não vendemos dados pessoais. Podemos compartilhar somente o que for razoavelmente necessário com prestadores que apoiem hospedagem, bancos de dados, autenticação, armazenamento, análises, diagnósticos, moderação, comunicações, notificações ou segurança; parceiros de plataforma ou pagamento, como Apple, Google, Xsolla ou outros provedores autorizados, para validação de compras, restauração, reembolsos, revogações, fraude e disputas; outros jogadores quando você usar intencionalmente recursos públicos ou sociais do jogo; autoridades quando a lei exigir; e partes envolvidas em uma transferência empresarial legítima.",
      "Apple, Google, Xsolla, bancos, bandeiras ou redes de cartões e outros participantes de pagamento podem atuar como controladores independentes em partes do próprio tratamento relacionado a pagamento, fraude, tributos, conta ou plataforma. As políticas de privacidade e obrigações legais desses terceiros se aplicam ao tratamento independente realizado por eles. TycoonX atualmente utiliza infraestrutura como Supabase para partes do backend, e os prestadores de serviço estão sujeitos às salvaguardas contratuais e legais aplicáveis.",
      "Quando as regras de uma plataforma exigirem, terceiros com quem a CK-Labs compartilhar dados de usuários deverão oferecer aos dados recebidos da CK-Labs o mesmo nível ou um nível equivalente de proteção ao descrito nesta Política e exigido pelas regras aplicáveis da plataforma.",
      "Serviços de inteligência artificial de terceiros não ficam fora dessas regras. Se TycoonX usar um serviço de IA de terceiros de forma que envolva o compartilhamento de dados pessoais, a CK-Labs informará esse compartilhamento e obterá permissão expressa antes de transmitir ou compartilhar os dados quando as regras aplicáveis da plataforma ou a legislação exigirem. Qualquer provedor desse tipo deverá ficar limitado às finalidades autorizadas e sujeito a salvaguardas adequadas de privacidade e segurança.",
    ],
  },
  {
    title: "Conteúdo público e privado da comunidade",
    body: [
      "Conteúdo que você escolher tornar público em TycoonX pode ser exibido a outros usuários como parte do Serviço. Quando os Termos de Uso e as Normas da Comunidade permitirem destacar conteúdo público gerado por usuários para fins relacionados à comunidade ou à promoção de TycoonX, a CK-Labs usará uma base legal adequada e respeitará o contexto em que o conteúdo foi compartilhado, as configurações aplicáveis, direitos de terceiros e a legislação obrigatória. Se um uso promocional específico exigir consentimento, a CK-Labs solicitará esse consentimento separadamente.",
      "Mensagens diretas privadas, comunicações privadas com o Suporte e denúncias não públicas são tratadas na medida necessária para fornecer, proteger, moderar, apoiar, investigar ou defender juridicamente o Serviço. Elas não são tornadas públicas nem usadas em promoção pública apenas porque a CK-Labs precise tratá-las para essas finalidades operacionais.",
      "O acesso a comunicações privadas para moderação ou análise jurídica é limitado a situações em que o tratamento seja razoavelmente necessário e lícito, por exemplo para responder a uma denúncia, proteger usuários, investigar abuso ou fraude, cumprir a lei ou exercer e defender direitos em processos ou disputas.",
    ],
  },
  {
    title: "Transferências internacionais",
    body: [
      "TycoonX e alguns prestadores podem tratar informações fora do seu país de residência. Quando o GDPR, a LGPD ou outras regras aplicáveis sobre transferências internacionais exigirem salvaguardas específicas, usaremos o mecanismo jurídico adequado quando necessário, como decisão de adequação, Cláusulas Contratuais Padrão, cláusulas ou mecanismos reconhecidos pela autoridade competente ou outra salvaguarda legalmente aceita. Transferências internacionais não se baseiam simplesmente na ideia de que usar TycoonX equivale a consentir com qualquer transferência.",
      "Quando a legislação aplicável der a você o direito de obter informações sobre as salvaguardas usadas em uma transferência internacional, você poderá entrar em contato com o Suporte TycoonX para solicitar mais informações ou uma cópia disponível das salvaguardas relevantes, sujeita a ocultações permitidas por lei e a obrigações de confidencialidade de terceiros.",
    ],
  },
  {
    title: "Retenção de dados",
    body: [
      "Mantemos dados pessoais somente pelo período razoavelmente necessário para cada finalidade e por períodos adicionais exigidos ou permitidos por lei. Dados ativos de conta e jogo podem ser mantidos enquanto a conta estiver ativa; registros de suporte por períodos razoáveis de acompanhamento e disputa; registros de compra, reembolso, direito digital, restauração, contabilidade e tributos pelos períodos legalmente exigidos ou necessários para execução do contrato, prevenção a fraudes ou resolução de disputas; e registros de segurança, antifraude, exploração de falhas, moderação e auditoria pelo período razoável necessário para proteger o Serviço, investigar incidentes ou defender direitos.",
      "Comunicações privadas não são mantidas indefinidamente apenas porque já tenham sido analisadas para moderação. Qualquer retenção mais longa deve ter uma necessidade legal própria, como disputa em andamento, investigação de segurança, processo, defesa de direitos ou obrigação legal. Backups podem permanecer por um ciclo limitado antes de serem excluídos ou sobrescritos. Dados anonimizados ou realmente agregados podem ser mantidos quando não identificarem mais uma pessoa.",
    ],
  },
  {
    title: "Seus direitos de privacidade",
    body: [
      "Dependendo da legislação aplicável, você pode ter direitos de acesso ou confirmação do tratamento, correção, exclusão, anonimização, bloqueio ou restrição, oposição, portabilidade de determinados dados, informação sobre compartilhamentos, revisão de certas decisões automatizadas, retirada de consentimento quando o tratamento for baseado em consentimento e reclamação perante uma autoridade de proteção de dados competente, inclusive a ANPD quando aplicável.",
      "Você pode solicitar a exclusão da conta por meio de TycoonX quando essa opção estiver disponível ou entrar em contato com o Suporte TycoonX. Podemos precisar confirmar sua identidade. Certos registros ainda podem ser mantidos quando isso for exigido ou permitido por razões legais, fiscais, contábeis, de execução de contrato, prevenção a fraudes, segurança, resolução de disputas, restauração de direitos digitais ou defesa de direitos.",
    ],
  },
  {
    title: "Exclusão da conta e direitos pagos",
    body: [
      "Excluir sua conta TycoonX é diferente de solicitar reembolso de uma compra. A exclusão da conta pode apagar permanentemente progresso de jogo vinculado à conta, Diamonds, valor consumível, inventário, dados sociais e outros dados de perfil. Isso não cria automaticamente direito a conversão em dinheiro ou reembolso.",
      "Excluir a conta TycoonX não apaga nem invalida necessariamente um registro de transação separado da Apple, Google, Xsolla ou outro provedor de pagamento. Quando um Lifetime VIP válido ou outro direito não consumível ou restaurável permanecer associado ao comprador conforme as regras da plataforma, os registros do provedor, o contrato ou a legislação obrigatória, a CK-Labs poderá manter o mínimo de evidência de transação e de direito razoavelmente necessário para verificar e restaurar esse direito.",
      "Uma restauração posterior pode exigir comprovação razoável de que o mesmo comprador controla a conta de plataforma ou pagamento relevante. Restaurar um direito pago não recria progresso apagado, Diamonds consumidos, inventário, histórico ou ativos transferidos, salvo quando a legislação aplicável exigir o contrário. Direitos de reembolso continuam sujeitos ao processo do provedor de pagamento e à legislação obrigatória.",
    ],
  },
  {
    title: "Crianças, adolescentes e controles de idade",
    body: [
      "TycoonX não é direcionado a crianças abaixo da idade mínima permitida para uso independente na jurisdição do usuário. Quando a lei exigir autorização de responsável, o Serviço não deve ser utilizado sem a autorização necessária. Se soubermos que dados pessoais foram coletados de uma criança ou adolescente em circunstâncias que não atendam à legislação aplicável, poderemos restringir a conta e excluir informações conforme exigido por lei.",
      "A CK-Labs pode tratar informações limitadas sobre idade, faixa etária, autorização do responsável ou controles etários da plataforma quando isso for razoavelmente necessário para cumprir a lei, aplicar restrições adequadas à idade em recursos sociais, atender requisitos da App Store ou Google Play ou proteger menores. TycoonX pode restringir ou desativar recursos da comunidade para determinadas faixas etárias mesmo quando o jogo principal continuar disponível.",
    ],
  },
  {
    title: "Segurança",
    body: [
      "Usamos medidas técnicas e organizacionais destinadas a proteger os dados de TycoonX, como controles de acesso e autenticação, transporte de rede criptografado quando aplicável, monitoramento, limitação de requisições, validação de compras, registros de auditoria, backups e outras salvaguardas adequadas ao Serviço.",
      "Nenhum serviço online pode garantir segurança absoluta. Se você acreditar que sua conta foi comprometida ou descobrir uma vulnerabilidade de segurança, entre em contato rapidamente com o Suporte TycoonX. Isso não reduz as obrigações da CK-Labs quanto às medidas de segurança exigidas pela legislação aplicável.",
    ],
  },
  {
    title: "Segurança e moderação automatizadas",
    body: [
      "TycoonX pode usar regras, sinais ou sistemas automatizados para identificar atividade suspeita, spam, fraude, conteúdo abusivo, padrões de exploração de falhas, compras inválidas ou outras condutas que possam ameaçar usuários ou o Serviço. Sinais automatizados podem levar a análise, restrições temporárias, moderação ou investigação.",
      "Quando a legislação aplicável limitar decisões exclusivamente automatizadas que produzam efeitos jurídicos ou efeitos igualmente relevantes, a CK-Labs aplicará as salvaguardas exigidas, inclusive intervenção ou revisão humana quando a lei determinar. Direitos relacionados a essas decisões permanecem preservados.",
    ],
  },
  {
    title: "Links e serviços de terceiros",
    body: [
      "TycoonX pode conter links para serviços de terceiros ou interoperar com eles. Esses terceiros podem tratar informações de acordo com suas próprias políticas de privacidade. A CK-Labs não é responsável por práticas independentes de privacidade de terceiros, exceto na medida em que a legislação aplicável atribua responsabilidade à CK-Labs.",
    ],
  },
  {
    title: "Alterações nesta Política",
    body: [
      "Podemos atualizar esta Política para refletir mudanças em TycoonX, nas práticas de dados, nos prestadores, nas medidas de segurança, nos recursos da comunidade ou nas exigências legais. Atualizaremos a data de última revisão e forneceremos aviso adicional quando exigido. Se uma alteração exigir consentimento, solicitaremos esse consentimento em vez de tratar a continuidade do uso como consentimento por si só.",
    ],
  },
];

export default function TycoonXPrivacyPolicyPtBR() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="pt-BR">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · Português (Brasil)</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Política de Privacidade</h1>
          <p className="text-zinc-500 text-sm">Última atualização: 26 de agosto de 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            Esta Política de Privacidade explica como a CK-Labs, operadora de TycoonX, trata dados pessoais quando você usa os aplicativos móveis ou web de TycoonX, sites, serviços de suporte, recursos da comunidade e serviços online relacionados.
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
          <h2 className="text-white font-semibold mb-3">Controladora e contato</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">A CK-Labs é a controladora do tratamento de TycoonX descrito nesta Política. Para solicitações de privacidade, exclusão de conta, relatos de segurança, dúvidas de privacidade relacionadas a compras, questões sobre dados de moderação ou outras solicitações de proteção de dados, use o Suporte TycoonX ou envie um e-mail.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Suporte TycoonX</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tycoonx-legal/pt_BR/terms" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Termos de Uso</a>
            <a href="/tycoonx-community-standards" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Normas da Comunidade</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">Dados adicionais de identificação da operadora e endereço exigidos por lei devem ser disponibilizados no aviso legal aplicável ao Serviço.</p>
        </section>
      </div>
    </main>
  );
}
