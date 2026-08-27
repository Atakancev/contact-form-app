const sections = [
  {
    title: "उत्पाद के प्रकार",
    body: [
      "Diamonds गेम के भीतर की वर्चुअल मुद्रा हैं। खरीदे गए Diamonds केवल समय बीतने से समाप्त नहीं होते, केवल TycoonX के भीतर उपयोग के लिए हैं और जहाँ अनिवार्य कानून कुछ और न कहे, CK-Labs से नकद में भुनाए नहीं जा सकते।",
      "30-Day VIP एक बार मिलने वाला, स्वतः नवीनीकृत न होने वाला अधिकार है, जो सक्रिय होने या अकाउंट पर उपलब्ध कराए जाने से लगातार 30 दिनों तक चलता है, जब तक खरीद स्क्रीन स्पष्ट रूप से कुछ और न बताए।",
      "Lifetime VIP एक बार मिलने वाला अधिकार है जिसे केवल CK-Labs द्वारा चुनी गई सीमित प्रमोशनल बिक्री अवधि में पेश किया जा सकता है। यह स्थायी रूप से उपलब्ध उत्पाद नहीं है। CK-Labs किसी बिक्री अवधि को समाप्त या बंद कर सकता है और लागू कानून तथा उपभोक्ता को पहले से दिए गए किसी विशिष्ट ऑफ़र के अधीन, इसे फिर कभी न बेचने का निर्णय भी ले सकता है।",
      "Lifetime VIP की बिक्री अवधि समाप्त होने से केवल भविष्य की उपलब्धता प्रभावित होती है; इससे पहले से वैध खरीद स्वतः रद्द या छोटी नहीं होती। बिक्री बंद होने से पहले खरीद स्क्रीन खोलना, कार्ट में जोड़ना, checkout शुरू करना या भुगतान का pending होना अपने-आप Lifetime VIP या पुरानी कीमत आरक्षित नहीं करता। यदि अधिकृत प्रदाता बाद में अपने नियमों के तहत किसी वैध लेन-देन की पुष्टि करता है, तो CK-Labs लागू ऑफ़र और अनिवार्य कानून के अनुसार उस प्रदाता-पुष्ट लेन-देन का सम्मान करेगा।",
      "Lifetime VIP खरीदने वाले अकाउंट के लिए TycoonX सेवा की व्यावसायिक संचालन अवधि से जुड़ा है और यह वादा नहीं करता कि TycoonX हमेशा चलता रहेगा। इसकी व्यावसायिक-अवधि का अर्थ और सीमित समय की प्रकृति checkout पर या उससे तुरंत पहले स्पष्ट रूप से दिखाई जानी चाहिए।",
    ],
  },
  {
    title: "Apple App Store से खरीद",
    body: [
      "Apple, Apple In-App Purchase के माध्यम से की गई खरीद को प्रोसेस करता है और App Store refund-request प्रक्रिया संचालित करता है। CK-Labs डिलीवरी और अधिकार संबंधी समस्याओं की जाँच कर सकता है, लेकिन Apple के refund निर्णय को नियंत्रित नहीं करता।",
      "खरीदे गए Diamonds को consumable in-app purchase के रूप में रखा जाना है। Lifetime VIP को non-consumable खरीद के रूप में रखा जाना है और वैध रहते हुए restore किया जा सकता है। एक बार मिलने वाला 30-Day VIP non-renewing entitlement है, जहाँ आवश्यकता होने पर CK-Labs अकाउंट की आधिकारिक entitlement स्थिति बनाए रखता है।",
      "जब तक Apple किसी खरीद को valid completed transaction के रूप में रिपोर्ट नहीं करता, Apple द्वारा pending दिखाई गई खरीद TycoonX में भुगतान वाला अधिकार पैदा नहीं करती। यदि Apple बाद में उस pending transaction को पूरा करता है और वह वैध रूप से संबंधित ऑफ़र से जुड़ा है, तो TycoonX उस समय संबंधित entitlement दे सकता है, भले ही प्रमोशन तब तक समाप्त हो चुका हो।",
      "यदि Apple किसी transaction को refund, revoke, reverse या invalidate करता है, तो CK-Labs संबंधित TycoonX entitlement या वर्चुअल मूल्य को वापस ले या ठीक कर सकता है ताकि refund हुई खरीद का लाभ दो बार न रखा जाए।",
    ],
  },
  {
    title: "Google Play से खरीद",
    body: [
      "Google लागू Google Play billing व्यवस्था के माध्यम से transaction प्रोसेस करता है और खरीद सत्यापित करने के लिए transaction या order जानकारी देता है।",
      "जहाँ Google Play policy इन-app digital goods या services के लिए Google Play Billing की माँग करती है, वहाँ TycoonX उसी सिस्टम का उपयोग करेगा, जब तक कोई लागू regional program, platform rule या कानून किसी विकल्प की अनुमति न दे।",
      "Lifetime VIP को एक बार खरीदे जाने वाले non-consumable Google Play product के रूप में रखना है ताकि वैध खरीद खरीदने वाले Google Account से जुड़ी रहे। एक बार मिलने वाले 30-Day VIP को इस तरह कॉन्फ़िगर किया जाना चाहिए कि वह चुपचाप recurring billing शुरू न करे और, यदि दोबारा खरीद की अनुमति है, तो product configuration भविष्य की वैध 30-Day खरीद को स्थायी रूप से न रोके।",
      "Google Play में PENDING स्थिति वाली खरीद TycoonX का भुगतान वाला entitlement नहीं बनाती। Entitlement केवल तब दिया जाता है जब Google valid completed PURCHASED स्थिति रिपोर्ट करे और आवश्यक verification सफल हो। यदि pending खरीद बाद में valid completed purchase बनती है, तो TycoonX उस समय लागू entitlement दे सकता है, जिसमें वह स्थिति भी शामिल है जहाँ सीमित प्रमोशन बंद होने के बाद transaction पूरा हुआ लेकिन provider-confirmed transaction वैध रूप से उसी ऑफ़र से जुड़ा था।",
      "Google पात्र refund requests सीधे प्रोसेस कर सकता है। Google के नियम, CK-Labs policy और लागू कानून के अधीन, CK-Labs भी Google के developer tools के जरिए कुछ पात्र Google Play refunds प्रोसेस कर सकता है।",
      "यदि Google transaction को refund, reverse, chargeback, cancel या invalidate करता है, तो CK-Labs संबंधित entitlement या वर्चुअल मूल्य को revoke या correct कर सकता है।",
    ],
  },
  {
    title: "Xsolla द्वारा संचालित TycoonX वेब शॉप",
    body: [
      "आधिकारिक TycoonX वेब शॉप से की गई खरीद Xsolla द्वारा प्रोसेस की जा सकती है। लागू checkout व्यवस्था के अनुसार Xsolla group की कोई कंपनी merchant of record हो सकती है।",
      "जब Xsolla merchant of record होता है, checkout या receipt पर दिखाई गई Xsolla entity अपनी लागू शर्तों के तहत payment processing, transaction taxes या VAT, fraud screening, refunds, payment disputes और chargebacks की जिम्मेदारी ले सकती है।",
      "सटीक Xsolla entity, payment method, कीमत, taxes, refund policy और कानून द्वारा आवश्यक खरीद जानकारी उस transaction के checkout और receipt से तय होती है। उस transaction के लिए दिखाई गई Xsolla terms और refund policy अनिवार्य उपभोक्ता कानून के साथ लागू होती हैं।",
      "सफल भुगतान की वैध पुष्टि मिलने के बाद संबंधित TycoonX entitlement देना CK-Labs की जिम्मेदारी रहती है। Checkout से वापस आना, client-side success message दिखना या order बन जाना अपने-आप CK-Labs को valid provider confirmation से पहले paid value देने के लिए बाध्य नहीं करता।",
      "यदि processing delay के बाद किसी वैध Xsolla transaction की पुष्टि होती है, तो CK-Labs provider-confirmed transaction और लागू ऑफ़र के अनुसार पुष्टि के समय entitlement दे सकता है। यदि Xsolla transaction को refund, reverse, cancel, chargeback या invalidate करता है, तो CK-Labs संबंधित TycoonX entitlement या वर्चुअल मूल्य को revoke या correct कर सकता है।",
    ],
  },
  {
    title: "कीमतें, क्षेत्रीय मूल्य निर्धारण और भविष्य की कीमत में बदलाव",
    body: [
      "CK-Labs भविष्य की खरीदों के लिए कीमतें, bundle size, Diamond quantity, VIP prices, regional prices, currencies, availability और promotional offers बदल सकता है। वर्तमान कीमत इस बात का वादा नहीं है कि वही product, quantity, discount या price भविष्य में भी उपलब्ध रहेगा।",
      "कीमतें Apple App Store, Google Play, आधिकारिक TycoonX web shop, देशों, क्षेत्रों, currencies और अलग-अलग promotional sales windows में अलग हो सकती हैं। Platform pricing systems, taxes, VAT, currency conversion, foreign-exchange movements, local pricing conventions या payment-provider rules भी local prices बदल सकते हैं।",
      "उपयोगकर्ता के खरीद की पुष्टि करने से पहले लागू checkout पर दिखाई गई अंतिम कुल कीमत और currency उस transaction पर लागू होती है, जहाँ कानून अनुमति दे वहाँ स्पष्ट pricing error के correction के अधीन। Product page खोलना, checkout में जाना या confirmation से पहले cached या पुरानी कीमत देखना भविष्य के transaction के लिए उस कीमत को lock नहीं करता। Completed order के provider-confirmed transaction record और कानूनी रूप से binding checkout information, mandatory law के अधीन, नियंत्रक होंगे।",
      "जर्मनी और जहाँ अन्य कानून माँगता है, वहाँ mandatory taxes और unavoidable price components को लागू price-display law के अनुसार शामिल या प्रस्तुत किया जाएगा।",
      "एक बार पूरी हो चुकी खरीद को केवल इसलिए पिछली तारीख से repricing नहीं किया जाएगा क्योंकि CK-Labs बाद में कीमत बदल देता है। बाद की price decrease अपने-आप refund, credit, partial refund, price match या अतिरिक्त Diamonds/VIP time का अधिकार नहीं बनाती, और बाद की price increase पहले से completed one-time purchase पर अतिरिक्त charge नहीं बनाती, जब तक mandatory law कुछ और न माँगे।",
      "Lifetime VIP अलग-अलग वास्तविक promotional sales windows में अलग कीमतों पर बेचा जा सकता है। किसी एक sales window में खरीदने से भविष्य के कम promotional price का अधिकार नहीं बनता और भविष्य की बिक्री CK-Labs को पुरानी कीमत match करने के लिए बाध्य नहीं करती।",
      "Promotional claims, countdowns, crossed-out prices, stated savings, limited-time statements और अन्य price-advantage claims वास्तविक ऑफ़र को सही रूप में दिखाने चाहिए और भ्रामक नहीं होने चाहिए। जहाँ किसी jurisdiction में specific product या offer के लिए reference price, discount disclosure या price-history rule आवश्यक हो, वहाँ marketing और checkout को उस नियम का पालन करना होगा।",
      "यदि CK-Labs भविष्य में recurring subscription या recurring charges वाला कोई अन्य product पेश करता है, तो उसके लिए लागू price-change, notice, consent, cancellation और renewal rules अलग से लागू होंगे। ऊपर के one-time price-change rules किसी undisclosed recurring charge की अनुमति नहीं देते।",
    ],
  },
  {
    title: "Checkout जानकारी और भुगतान की पुष्टि",
    body: [
      "Consumer द्वारा paid order देने से पहले लागू checkout को कानून द्वारा आवश्यक pre-contract information स्पष्ट रूप से और आवश्यक स्थान पर दिखानी चाहिए। Transaction के अनुसार इसमें product की मुख्य विशेषताएँ, mandatory taxes और charges सहित कुल कीमत, duration या termination conditions, delivery information, महत्वपूर्ण functionality, compatibility/interoperability information और contracting trader की पहचान शामिल हो सकती है।",
      "जहाँ जर्मन कानून ऐसे online checkout पर लागू होता है जो payment obligation बनाता है, वहाँ ordering step को कानून के अनुसार भुगतान दायित्व स्पष्ट करना होगा। CK-Labs hidden wording, preselected paid extras या ambiguous final-order control के आधार पर payment obligation नहीं बनाएगा।",
      "यदि price automated decision-making के आधार पर personalized है और लागू कानून उस तथ्य के disclosure की माँग करता है, तो checkout या offer order से पहले इसका disclosure करेगा। केवल country, storefront, currency, tax या generally available regional pricing के कारण price अलग होने को अपने-आप personalized pricing नहीं माना जाएगा।",
    ],
  },
  {
    title: "जर्मन इलेक्ट्रॉनिक withdrawal function",
    body: [
      "19 जून 2026 से जर्मन कानून covered distance contracts के लिए, जो online user interface के जरिए किए जाते हैं और जिनकी statutory withdrawal period चल रही है, electronic withdrawal function की माँग करता है। जहाँ यह TycoonX transaction पर लागू है और CK-Labs contracting trader तथा relevant interface के लिए जिम्मेदार है, वहाँ CK-Labs clearly labelled, continuously available और prominently accessible withdrawal function तथा confirmation process प्रदान करेगा।",
      "जहाँ Apple, Google, Xsolla या कोई अन्य provider contracting merchant है या relevant purchase interface और withdrawal process नियंत्रित करता है, वहाँ provider का legally compliant withdrawal या refund flow लागू route हो सकता है। CK-Labs roles के इस विभाजन का उपयोग mandatory withdrawal right हटाने के लिए नहीं करेगा।",
      "कानून द्वारा आवश्यक electronic withdrawal function से भेजे गए withdrawal की, जहाँ कानून माँगे, durable medium पर पुष्टि की जाएगी। यह electronic route consumer के किसी अन्य legally valid withdrawal method को समाप्त नहीं करता।",
    ],
  },
  {
    title: "Restore और दूसरे डिवाइस पर recovery",
    body: [
      "Lifetime VIP वैध रहते हुए verification के बाद restorable या recoverable होना चाहिए। Valid 30-Day VIP को जहाँ आवश्यक हो, authoritative account या server records से restore किया जाना चाहिए।",
      "Diamonds consumable purchases हैं और consume होने के बाद दूसरी purchase की तरह restore नहीं किए जाते। लागू होने पर current TycoonX account balance TycoonX account/server state के जरिए सुरक्षित रहता है। Restore operation कभी duplicate paid value नहीं बनाता।",
      "TycoonX account delete करने से profile और gameplay state स्थायी रूप से हट सकती है, लेकिन अलग valid Apple, Google, Xsolla या अन्य payment-provider transaction अपने-आप cancel या erase नहीं होता। जहाँ valid Lifetime VIP या कोई अन्य restorable entitlement purchaser से जुड़ा रहता है, CK-Labs entitlement को eligible TycoonX account से जोड़ने से पहले उचित proof माँग सकता है कि वही purchaser संबंधित platform या payment account को नियंत्रित करता है।",
      "Account deletion के बाद paid entitlement restore होने से deleted gameplay progress, consumed Diamonds, inventory, social history या transferred assets फिर से नहीं बनते, जब तक applicable law कुछ और न माँगे।",
    ],
  },
  {
    title: "Entitlement मिलने में समस्या",
    body: [
      "यदि आपसे charge लिया गया लेकिन खरीदी गई content दिखाई नहीं देती, तो सही TycoonX account का उपयोग सुनिश्चित करें, जहाँ लागू हो Restore Purchases का उपयोग करें, pending provider transaction को पूरा होने के लिए उचित समय दें और समस्या बनी रहने पर order या transaction details के साथ TycoonX Support से संपर्क करें।",
      "CK-Labs entitlement grant, restore, change या refund करने से पहले Apple, Google, Xsolla या लागू provider से transaction validate कर सकता है।",
      "Pending purchase दूसरा entitlement reserve नहीं करती और duplicate grant नहीं बनाती। यदि provider बाद में पुष्टि करता है कि pending transaction valid completed purchase बन चुका है, तो CK-Labs उसे authoritative transaction और existing entitlement state के विरुद्ध reconcile करेगा।",
    ],
  },
  {
    title: "स्पष्ट त्रुटियाँ, विफल भुगतान और duplicate grants",
    body: [
      "यदि checkout, catalog, currency, tax, product, quantity या entitlement configuration में स्पष्ट error है, तो CK-Labs या applicable payment provider future transactions के लिए उसे ठीक कर सकता है और जहाँ कानून अनुमति देता है, unfulfilled erroneous transaction को cancel करके intended unintended value देने के बजाय वास्तव में paid amount refund कर सकता है। Mandatory rights और पहले से binding contract लागू कानून के अधीन रहेंगे।",
      "Screenshot, stale cached display, manipulated client, outdated app version, unofficial source या client-side display error valid final checkout record या विश्वसनीय authoritative server/payment-provider records को override नहीं करते।",
      "Retries, replayed webhooks, duplicate store notifications, race conditions, bugs, restore errors, compromised credentials या अन्य technical failures से बने duplicate entitlements या virtual value को हटाया या consolidate किया जा सकता है ताकि user को वही valid value मिले जो वास्तव में खरीदी गई थी।",
      "यदि payment pending, rejected, reversed, cancelled है, fraud review में fail होती है या कभी confirm नहीं होती, तो CK-Labs valid successful transaction की पुष्टि तक संबंधित entitlement को delay या withhold कर सकता है।",
    ],
  },
  {
    title: "Promotions, coupons और offer abuse",
    body: [
      "Promotions को समय, देश, platform, account, purchase history, eligibility, quantity, redemption count या अन्य स्पष्ट शर्तों के आधार पर सीमित किया जा सकता है। जब तक offer कुछ और न कहे, promotions combine नहीं किए जा सकते और future promotion का अधिकार नहीं बनाते।",
      "Users technical errors, duplicate coupon redemption, manipulated region या identity information, automated purchase abuse, refund cycling, account farming या अन्य तरीकों से genuine offer से अधिक promotional value प्राप्त नहीं कर सकते।",
      "यदि promotion या discount fraud, technical abuse, duplicate redemption या अन्य invalid method से प्राप्त हुआ है, तो CK-Labs जहाँ कानून अनुमति देता है purchase reject कर सकता है, केवल invalid promotional value revoke कर सकता है या affected transaction को refund और unwind कर सकता है। किसी दूसरे genuine purchase की unrelated value केवल इसलिए नहीं हटाई जाएगी क्योंकि कोई और promotion invalid था।",
      "Mandatory legal obligation से आगे दिया गया voluntary goodwill credit, free extension, discretionary refund, bonus या compensation अपने-आप liability की स्वीकृति या भविष्य में वही remedy देने का वादा नहीं है।",
    ],
  },
  {
    title: "Refunds, reversals और chargebacks",
    body: [
      "Refund या payment reversal user को returned money और उसी paid digital value दोनों रखने का अधिकार नहीं देता।",
      "यदि value credit होने के बाद payment refund, reverse, chargeback, cancel या invalid पाई जाती है, तो CK-Labs लागू कानून के अधीन related entitlement revoke कर सकता है, unused Diamonds या virtual value हटा सकता है, सीधे संबंधित invalid game transactions reverse कर सकता है, refunded value पहले consume या transfer हो चुकी हो तो equivalent balance correction कर सकता है, या payment dispute की जाँच के दौरान purchase/economy functions पर अस्थायी रोक लगा सकता है।",
      "CK-Labs इन corrections का उपयोग unrelated legitimately purchased value हटाने के लिए नहीं करेगा, सिवाय जहाँ किसी specific invalid transaction को reverse करने के लिए reasonably necessary हो या कानून अन्यथा अनुमति देता हो।",
      "Refund सामान्यतः उसी payment channel के माध्यम से process होते हैं जिसने purchase संभाली थी और जहाँ provider माँगे, original payment method पर लौटाए जाते हैं। Refund approval और funds दिखाई देने के समय में अंतर हो सकता है। Provider rules और mandatory law के अधीन, CK-Labs third-party settlement timing, currency conversion differences, bank fees, card-issuer fees या exchange-rate movements को नियंत्रित नहीं करता।",
      "जहाँ Apple, Google, Xsolla या कोई अन्य provider contracting merchant या transaction receipt/tax document का issuer है, वह provider अपने receipt या invoice के form और correction process को नियंत्रित करता है। CK-Labs TycoonX entitlement support और transaction-identification assistance दे सकता है, लेकिन third-party merchant के billing/tax document को बदलने या फिर जारी करने का वादा नहीं कर सकता। जहाँ CK-Labs खुद receipt, invoice, credit note या अन्य document जारी करने के लिए legally required है, वहाँ applicable law नियंत्रक रहेगा।",
    ],
  },
  {
    title: "Unauthorized या fraudulent purchases",
    body: [
      "Users को suspected unauthorized purchase की सूचना जल्दी से relevant payment provider और TycoonX Support को देनी चाहिए।",
      "Fraud और duplicate delivery रोकने के लिए CK-Labs receipts, transaction identifiers, entitlement records, server logs, account activity, device/session information, payment-provider events और संबंधित security records की जाँच कर सकता है।",
      "Fraudulent receipts, manipulated clients, payment abuse, जानबूझकर false fraud reports, abusive chargebacks या refunded digital value बनाए रखने के प्रयास TycoonX Terms और applicable law के अनुसार entitlement correction, purchase restrictions, account suspension या termination का कारण बन सकते हैं।",
    ],
  },
  {
    title: "EU और जर्मन withdrawal rights",
    body: [
      "इस Policy की कोई भी बात ऐसे statutory rights को समाप्त नहीं करती जिन्हें कानूनन waive नहीं किया जा सकता। German consumers के लिए BGB की Sections 327 et seq. paid digital content और digital services पर लागू हो सकती हैं।",
      "Diamond bundle जैसी तुरंत दी जाने वाली digital content के लिए statutory withdrawal right supply शुरू होने के बाद केवल तभी समाप्त हो सकती है जब सभी legal requirements पूरी हों, जिसमें जहाँ आवश्यक हो early performance के लिए transaction-specific express consent, withdrawal right खोने की acknowledgement और contractual confirmation शामिल हैं। General Terms स्वीकार करना वहाँ separate consent का विकल्प नहीं है जहाँ कानून separate consent माँगता है।",
      "30-Day VIP एक अवधि में supply होता है। केवल access शुरू हो जाने से immediate activation अपने-आप हर statutory withdrawal right समाप्त नहीं करता। जहाँ applicable law early performance की अनुमति देता है, checkout consumer से इसका express request माँग सकता है, और valid withdrawal के बाद देय किसी amount का निर्धारण केवल कानून की अनुमति के अनुसार होगा।",
      "Lifetime VIP भी समय के साथ supply होने वाला entitlement है। इसकी one-time purchase price और non-renewing nature अपने-आप statutory withdrawal rights या mandatory digital-service remedies समाप्त नहीं करती। Early-performance request, withdrawal right का expiry, withdrawal के बाद proportional payment या अन्य consequence केवल तब लागू होगी जब उस transaction की legal requirements पूरी हों।",
      "CK-Labs Diamonds, 30-Day VIP और Lifetime VIP के लिए एक ही blanket no-refunds या waive-all-withdrawal-rights clause का उपयोग नहीं करेगा, क्योंकि उनकी legal treatment अलग हो सकती है।",
    ],
  },
  {
    title: "आवश्यक updates और supported versions",
    body: [
      "Paid TycoonX content में यह वादा शामिल नहीं है कि हर historical app version, device, operating system, API या platform integration हमेशा supported रहेगा।",
      "जहाँ German digital-product law लागू होता है, CK-Labs legally relevant period के दौरान paid digital product को conformity में रखने के लिए आवश्यक updates, including security updates, उपलब्ध कराएगा और consumers को उनके बारे में सूचित करेगा।",
      "यदि required update उपलब्ध कराया गया है और user को उसकी availability तथा install न करने के परिणामों के बारे में स्पष्ट जानकारी दी गई है, तो reasonable time में update install न करने से missing update के कारण अकेले उत्पन्न non-conformity के claims पर लागू कानून के अनुसार असर पड़ सकता है। यह तभी लागू है जब CK-Labs ने पर्याप्त installation instructions दी हों और unrelated defect, non-supply या invalid entitlement से जुड़े अधिकार हटाता नहीं है।",
      "Valid paid entitlement purchaser से जुड़ा रहना चाहिए और supported versions पर वहाँ पहचाना जाना चाहिए जहाँ product terms, platform rules या mandatory law यह माँगते हैं। Update की आवश्यकता duplicate purchase लेने, valid restorable Lifetime VIP मिटाने या legally due remedy से बचने का आधार नहीं है।",
    ],
  },
  {
    title: "Cross-platform access, Family Sharing और duplicate entitlement records",
    body: [
      "Valid purchase किसी दूसरे supported TycoonX device या platform पर तभी पहचानी जा सकती है जब TycoonX वह access support करता हो और applicable store, payment-provider, country और platform rules इसकी अनुमति देते हों। Cross-platform recognition अपने-आप नया transaction या अतिरिक्त paid grant नहीं बनाता।",
      "एक ही underlying purchase को restore, account migration, cross-device use, cross-platform linking, webhook retries या duplicate provider records के जरिए multiply नहीं किया जा सकता। जब तक specific offer स्पष्ट रूप से कुछ और न कहे, एक ही Lifetime VIP को एक से अधिक बार recognize करने से multiple Lifetime VIP benefits नहीं बनते और एक ही 30-Day VIP को multiple records से recognize करने से उसकी original valid period नहीं बढ़ती।",
      "अलग-अलग completed valid purchases जो duplicate नहीं हैं, अलग transactions रहेंगी। CK-Labs distinct valid purchase को cancel किए बिना या mandatory refund, warranty या अन्य consumer remedy हटाए बिना technical entitlement records को consolidate कर सकता है।",
      "Apple Family Sharing केवल तभी लागू होती है जब CK-Labs ने relevant eligible In-App Purchase के लिए इसे enable किया हो और Apple purchase को shareable report करे। यदि Family Sharing offer की जाती है, तो family member का access original purchaser के valid shared entitlement पर निर्भर है और Apple के अनुसार sharing या underlying entitlement खत्म, revoke या refund होने पर समाप्त हो सकता है। Shared access Apple rules और mandatory law से आगे हर family member के लिए अलग purchase या refund right नहीं बनाता।",
      "यदि TycoonX किसी Apple product को स्पष्ट रूप से Family Shareable नहीं दिखाता, तो उस purchase में Family Sharing का promise शामिल नहीं है।",
    ],
  },
  {
    title: "सेवा का स्थायी बंद होना",
    body: [
      "यदि TycoonX स्थायी रूप से बंद किया जाता है, तो accounts, Diamonds, VIP, virtual items और game data तक online access भी समाप्त हो सकता है। केवल Service बंद होने से virtual items अपने-आप cash में redeemable नहीं बनते।",
      "Lifetime VIP खरीदने वाले account के लिए TycoonX की commercial operating lifetime से जुड़ा है, user की biological lifetime से नहीं और न ही यह unlimited promise है कि Service हमेशा मौजूद रहेगी। Mandatory refund, price reduction, termination, warranty या अन्य consumer remedies प्रभावित नहीं होतीं।",
    ],
  },
];

export default function HindiTycoonXPurchaseRefundPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="hi">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">खरीद और Refund Policy</h1>
          <p className="text-zinc-500 text-sm">अंतिम अपडेट: 27 अगस्त 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">यह Policy बताती है कि TycoonX में Diamonds, एक बार मिलने वाला 30-Day VIP, सीमित समय का Lifetime VIP और Apple App Store, Google Play तथा Xsolla द्वारा संचालित आधिकारिक TycoonX web shop से की गई अन्य paid purchases कैसे संभाली जाती हैं।</p>
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
          <h2 className="text-white font-semibold mb-3">कानूनी जानकारी और सहायता</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">TycoonX का संचालन CK-Labs करता है। Entitlement delivery, transaction questions, suspected fraud या entitlement disputes के लिए TycoonX Support का उपयोग करें या हमें email करें।</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tycoonx-legal/hi/terms" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">सेवा की शर्तें</a>
            <a href="/tycoonx-legal/hi/privacy" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Privacy Policy</a>
            <a href="/tyconx-support" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">TycoonX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
          </div>
        </section>
      </div>
    </main>
  );
}
