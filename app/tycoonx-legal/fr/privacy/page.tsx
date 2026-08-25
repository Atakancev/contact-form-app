const sections = [
  {
    title: 'Informations que nous traitons',
    body: [
      'Données de compte et de profil, par exemple les identifiants de connexion pris en charge, l’adresse e-mail, le nom affiché, l’avatar, la langue, le fuseau horaire, les paramètres et les événements liés au cycle de vie du compte.',
      'Données de jeu et d’économie nécessaires au fonctionnement de l’univers persistant TycoonX, notamment la progression, l’inventaire, les soldes de monnaie virtuelle et de Diamonds, les entreprises, la production, l’activité de marché, le logement, les emplois, contrats, prêts, actions, transactions et l’état des droits VIP.',
      'Données relatives aux achats et aux droits numériques, par exemple la plateforme de paiement, l’identifiant du produit, les identifiants de transaction, les informations signées de transaction ou de reçu, l’état de l’achat, de l’activation ou de l’expiration, l’état d’un remboursement, d’une révocation ou d’une rétrofacturation, ainsi que l’historique de livraison, restauration, migration ou correction. En règle générale, CK-Labs ne reçoit pas le numéro complet de votre carte de paiement de la part des boutiques ou prestataires de paiement.',
      'Données de sécurité et de lutte contre la fraude, par exemple les journaux de connexion et de session, l’adresse IP, les informations d’appareil ou de plateforme mises à disposition du Service, la version de l’application, les diagnostics, les schémas d’accès suspects, les validations d’achat invalides, les indicateurs d’exploit, les signaux anti-abus et les journaux de modération ou de sécurité.',
      'Communications et contenus communautaires, notamment les discussions publiques ou privées, signalements, contenus de profil ou d’entreprise, tickets de support, formulaires de contact, rapports de bug, recours, pièces jointes, horodatages, identifiants d’expéditeur ou de destinataire et état de modération.',
      'Informations d’utilisation et d’analyse, par exemple l’usage des fonctionnalités, les sessions, la rétention, les performances, les événements d’interaction et les métriques agrégées utilisées pour l’équilibrage ou l’analyse de l’économie du jeu.',
    ],
  },
  {
    title: 'Sources des données',
    body: [
      'Nous recevons des informations directement de votre part lorsque vous créez ou utilisez un compte, jouez à TycoonX, contactez le Support, publiez du contenu communautaire ou modifiez vos paramètres. Nous recevons également des informations limitées de services que vous choisissez ou utilisez avec TycoonX, notamment les fournisseurs d’authentification pris en charge ainsi qu’Apple, Google, Xsolla ou un autre prestataire de paiement autorisé lorsqu’ils nous transmettent des informations sur un achat, un droit, un remboursement, une révocation, une fraude ou l’état d’une transaction.',
      'Les prestataires de paiement peuvent traiter de manière indépendante les données de carte, données bancaires, adresses de facturation, informations de localisation fiscale ou autres informations de paiement conformément à leurs propres politiques de confidentialité. CK-Labs reçoit généralement les données de transaction et de droit nécessaires pour délivrer et rapprocher les achats TycoonX plutôt que les informations complètes de l’instrument de paiement.',
    ],
  },
  {
    title: 'Pourquoi nous traitons ces informations',
    body: [
      'Nous traitons les informations afin de créer et sécuriser les comptes, faire fonctionner et synchroniser TycoonX, livrer et restaurer les achats valides, empêcher les attributions en double et la fraude, détecter la triche ou les exploits, enquêter sur les incidents, corriger un état de jeu invalide, fournir le support, modérer les fonctions communautaires, faire respecter les Conditions d’utilisation et les Règles communautaires, diagnostiquer les problèmes techniques, améliorer le Service, envoyer des informations opérationnelles ou juridiques et respecter nos obligations légales.',
    ],
  },
  {
    title: 'Bases juridiques',
    body: [
      'Lorsque le RGPD ou une règle similaire s’applique, nous utilisons la base juridique adaptée au traitement concerné : exécution du contrat pour le gameplay, l’accès au compte, la livraison des achats et le support ; intérêts légitimes pour la sécurité, la lutte contre la fraude, l’intégrité du jeu, les diagnostics, une modération proportionnée et la défense de droits lorsque ces intérêts ne sont pas supplantés par les droits des personnes ; obligations légales pour les enregistrements obligatoires ou demandes d’autorités ; et consentement lorsque la loi l’exige pour un traitement facultatif.',
      'Le simple fait d’utiliser TycoonX n’est pas considéré comme un consentement à un traitement qui nécessite légalement un consentement. Lorsque celui-ci est requis, nous le demandons séparément et il peut être retiré pour l’avenir.',
    ],
  },
  {
    title: 'Données nécessaires pour fournir TycoonX',
    body: [
      'Certaines informations sont nécessaires à l’exécution du contrat TycoonX ou au traitement d’un achat. Par exemple, un identifiant de compte est nécessaire pour conserver l’état persistant du jeu, et des données valides de transaction ou de droit sont nécessaires pour livrer, restaurer, rembourser, révoquer ou rapprocher correctement un contenu payant. Si une information nécessaire n’est pas fournie ou ne peut pas être vérifiée, nous pouvons être dans l’impossibilité de créer ou authentifier un compte, livrer un achat, restaurer un droit ou fournir la fonctionnalité concernée.',
      'Les informations ou traitements facultatifs qui ne sont pas nécessaires au Service principal sont gérés séparément lorsque cela est requis, notamment au moyen de contrôles de consentement lorsqu’ils s’appliquent.',
    ],
  },
  {
    title: 'Comment nous partageons les informations',
    body: [
      'Nous ne vendons pas les données personnelles. Nous pouvons partager uniquement ce qui est raisonnablement nécessaire avec des prestataires qui prennent en charge l’hébergement, les bases de données, l’authentification, le stockage, l’analyse, les diagnostics, la modération, les communications, les notifications ou la sécurité ; avec des partenaires de plateforme ou de paiement tels qu’Apple, Google, Xsolla ou d’autres prestataires autorisés pour la validation des achats, la restauration, les remboursements, les révocations, la fraude et les litiges ; avec d’autres joueurs lorsque vous utilisez volontairement des fonctions publiques ou sociales ; avec les autorités lorsque la loi l’impose ; et avec les parties concernées par un transfert d’activité légal.',
      'Apple, Google, Xsolla, des banques, réseaux de cartes ou autres participants au paiement peuvent agir comme responsables du traitement indépendants pour certaines de leurs propres opérations de paiement, lutte contre la fraude, fiscalité, gestion de compte ou de plateforme. Leurs propres politiques de confidentialité et obligations légales s’appliquent alors à ces traitements indépendants. TycoonX utilise actuellement notamment une infrastructure telle que Supabase pour certaines parties de son backend, et les prestataires sont soumis aux garanties contractuelles et légales applicables.',
    ],
  },
  {
    title: 'Contenus communautaires publics et privés',
    body: [
      'Le contenu que vous rendez volontairement public dans TycoonX peut être affiché aux autres utilisateurs dans le cadre du Service. Lorsque les Conditions d’utilisation et les Règles communautaires autorisent la mise en avant d’un contenu public créé par un utilisateur à des fins communautaires ou promotionnelles liées à TycoonX, CK-Labs utilise une base juridique appropriée et respecte le contexte dans lequel le contenu a été partagé, les paramètres applicables, les droits des tiers et le droit impératif. Si un consentement est requis pour une utilisation promotionnelle particulière, CK-Labs le demandera séparément.',
      'Les messages privés, échanges privés avec le Support et signalements non publics sont traités dans la mesure nécessaire pour fournir, sécuriser, modérer, assister, enquêter ou protéger juridiquement le Service. Ils ne deviennent pas publics et ne sont pas utilisés à des fins promotionnelles publiques du seul fait que CK-Labs doit les traiter pour ces besoins opérationnels.',
      'L’accès à des communications privées à des fins de modération ou d’examen juridique est limité aux situations où ce traitement est raisonnablement nécessaire et licite, par exemple pour répondre à un signalement, protéger des utilisateurs, enquêter sur un abus ou une fraude, respecter une obligation légale ou établir, exercer ou défendre un droit en justice.',
    ],
  },
  {
    title: 'Transferts internationaux',
    body: [
      'TycoonX et certains prestataires peuvent traiter des informations en dehors de votre pays de résidence. Lorsque le RGPD ou une autre règle limite ces transferts, nous utilisons un mécanisme juridique approprié lorsque cela est nécessaire, par exemple une décision d’adéquation, les clauses contractuelles types ou une autre garantie reconnue. Un transfert international n’est pas fondé uniquement sur l’idée que l’utilisation de TycoonX vaudrait consentement.',
      'Lorsque le droit applicable vous donne le droit d’obtenir des informations sur les garanties utilisées pour un transfert international, vous pouvez contacter le Support TycoonX afin de demander des informations complémentaires ou une copie disponible des garanties pertinentes, sous réserve des occultations légales et obligations de confidentialité envers des tiers.',
    ],
  },
  {
    title: 'Durée de conservation',
    body: [
      'Nous conservons les données personnelles uniquement pendant la durée raisonnablement nécessaire à leur finalité ainsi que pendant les périodes supplémentaires exigées ou autorisées par la loi. Les données de compte et de jeu actives peuvent être conservées tant que le compte est actif ; les dossiers de support pendant une durée raisonnable permettant le suivi et le traitement des litiges ; les données d’achat, remboursement, droit, restauration, comptabilité et fiscalité pendant les périodes nécessaires au respect de la loi, à l’exécution du contrat, à la prévention de la fraude ou à la gestion d’un litige ; et les journaux de sécurité, lutte contre la fraude, exploits, modération et audit pendant une durée raisonnable nécessaire à la protection du Service, l’enquête sur un incident ou la défense de droits.',
      'Les communications privées ne sont pas conservées indéfiniment simplement parce qu’elles ont été examinées une fois dans le cadre d’une modération. Une conservation plus longue doit reposer sur un besoin licite distinct, par exemple un litige en cours, une enquête de sécurité, une réclamation juridique ou une obligation légale. Les sauvegardes peuvent subsister pendant un cycle de sauvegarde limité avant suppression ou écrasement. Les données anonymisées ou véritablement agrégées peuvent être conservées lorsqu’elles ne permettent plus d’identifier une personne.',
    ],
  },
  {
    title: 'Vos droits en matière de données personnelles',
    body: [
      'Selon le droit applicable, vous pouvez disposer de droits d’accès, de rectification, d’effacement, de limitation, d’opposition, de portabilité de certaines données, de retrait du consentement lorsque le traitement repose sur celui-ci, ainsi que du droit d’introduire une réclamation auprès d’une autorité de contrôle compétente.',
      'Vous pouvez demander la suppression de votre compte via TycoonX lorsque cette option est disponible ou contacter le Support TycoonX. Nous pouvons devoir vérifier votre identité. Certains enregistrements peuvent néanmoins être conservés lorsque la loi l’exige ou l’autorise pour des raisons juridiques, fiscales, comptables, d’exécution du contrat, de prévention de la fraude, de sécurité, de règlement des litiges, de restauration de droits ou de défense de droits en justice.',
    ],
  },
  {
    title: 'Suppression du compte et droits payants',
    body: [
      'La suppression de votre compte TycoonX est distincte d’une demande de remboursement. Elle peut supprimer définitivement la progression liée au compte, les Diamonds, la valeur consommable, l’inventaire, les données sociales et d’autres éléments du profil. Elle ne crée pas automatiquement un droit à une conversion en argent ou à un remboursement.',
      'La suppression du compte TycoonX n’efface ni n’invalide nécessairement une transaction distincte enregistrée par Apple, Google, Xsolla ou un autre prestataire de paiement. Lorsqu’un Lifetime VIP valide ou un autre droit non consommable ou restaurable reste associé à l’acheteur en vertu des règles de plateforme, des enregistrements du prestataire, du contrat ou du droit impératif, CK-Labs peut conserver le minimum d’éléments de transaction et de droit raisonnablement nécessaire pour vérifier et restaurer ce droit.',
      'Une restauration ultérieure peut nécessiter une preuve raisonnable que le même acheteur contrôle le compte de plateforme ou de paiement concerné. Restaurer un droit payant ne recrée pas la progression supprimée, les Diamonds consommés, l’inventaire, l’historique ou les actifs transférés, sauf obligation légale contraire. Les droits à remboursement restent régis par le processus du prestataire de paiement et le droit impératif.',
    ],
  },
  {
    title: 'Mineurs et contrôles liés à l’âge',
    body: [
      'TycoonX ne s’adresse pas aux enfants qui n’ont pas atteint l’âge minimum requis pour utiliser le Service de manière autonome dans leur pays. Lorsqu’un consentement parental est exigé par la loi, le Service ne doit pas être utilisé sans l’autorisation nécessaire. Si nous apprenons que des données personnelles ont été collectées auprès d’un enfant dans des conditions non conformes au droit applicable, nous pouvons restreindre le compte et supprimer les informations lorsque la loi l’exige.',
      'CK-Labs peut traiter des informations limitées sur l’âge, la tranche d’âge, l’autorisation parentale ou les contrôles d’âge fournis par une plateforme lorsque cela est raisonnablement nécessaire pour respecter la loi, appliquer des restrictions adaptées aux mineurs dans les fonctions sociales, respecter les exigences de l’App Store ou de Google Play ou protéger les mineurs. TycoonX peut restreindre ou désactiver certaines fonctions communautaires pour certaines tranches d’âge même lorsque le jeu principal reste disponible.',
    ],
  },
  {
    title: 'Sécurité',
    body: [
      'Nous utilisons des mesures techniques et organisationnelles conçues pour protéger les données TycoonX, par exemple des contrôles d’accès et d’authentification, le chiffrement des communications réseau lorsque cela s’applique, la surveillance, la limitation de débit, la validation des achats, la journalisation d’audit, les sauvegardes et d’autres mesures adaptées au Service.',
      'Aucun service en ligne ne peut garantir une sécurité absolue. Si vous pensez que votre compte a été compromis ou si vous découvrez une vulnérabilité de sécurité, contactez rapidement le Support TycoonX. Cela ne réduit pas les obligations de CK-Labs concernant les mesures de sécurité imposées par le droit applicable.',
    ],
  },
  {
    title: 'Sécurité et modération automatisées',
    body: [
      'TycoonX peut utiliser des règles, signaux ou systèmes automatisés afin d’identifier une activité suspecte, du spam, une fraude, du contenu abusif, des schémas d’exploit, des achats invalides ou d’autres comportements susceptibles de menacer les utilisateurs ou le Service. Ces signaux automatisés peuvent conduire à une vérification, une restriction temporaire, une modération ou une enquête.',
      'Lorsque le droit applicable limite les décisions prises exclusivement de manière automatisée qui produisent des effets juridiques ou des effets similaires importants, CK-Labs applique les garanties requises, notamment une intervention ou un examen humain lorsque la loi l’impose. Les droits liés à ce type de décision restent inchangés.',
    ],
  },
  {
    title: 'Liens et services tiers',
    body: [
      'TycoonX peut contenir des liens vers des services tiers ou interagir avec eux. Ces tiers peuvent traiter des informations conformément à leurs propres politiques de confidentialité. CK-Labs n’est pas responsable de leurs pratiques indépendantes, sauf dans la mesure où le droit applicable rend CK-Labs responsable.',
    ],
  },
  {
    title: 'Modifications de la présente Politique',
    body: [
      'Nous pouvons mettre à jour la présente Politique afin de refléter des changements concernant TycoonX, nos pratiques de traitement, nos prestataires, nos mesures de sécurité, nos fonctions communautaires ou les exigences légales. Nous mettrons à jour la date de dernière modification et fournirons toute information supplémentaire lorsque la loi l’exige. Si une modification nécessite un consentement, nous demanderons ce consentement au lieu de considérer que la poursuite de l’utilisation vaut consentement.',
    ],
  },
];

export default function FrenchTycoonXPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="fr">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · Français</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Politique de confidentialité</h1>
          <p className="text-zinc-500 text-sm">Dernière mise à jour : 25 août 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            La présente Politique explique comment CK-Labs, exploitant de TycoonX, traite les données personnelles lorsque vous utilisez les applications mobiles ou web TycoonX, les sites web, le support, les fonctions communautaires et les services en ligne associés.
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
          <h2 className="text-white font-semibold mb-3">Responsable du traitement et contact</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">CK-Labs est responsable du traitement pour les opérations TycoonX décrites dans la présente Politique. Pour exercer un droit, demander la suppression du compte, signaler un problème de sécurité, poser une question de confidentialité liée à un achat ou à la modération, ou pour toute autre question relative aux données personnelles, utilisez le Support TycoonX ou contactez-nous par e-mail.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Support TycoonX</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tycoonx-legal/fr/terms" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Conditions d’utilisation</a>
            <a href="/tycoonx-legal/fr/purchases" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Achats et remboursements</a>
            <a href="/tycoonx-community-standards" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Règles communautaires</a>
            <a href="/tycoonx-legal/fr" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Portail juridique français</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">Les informations supplémentaires légalement requises sur l’identité et l’adresse de l’exploitant doivent être mises à disposition dans les mentions légales ou l’impressum applicable au Service.</p>
        </section>
      </div>
    </main>
  );
}
