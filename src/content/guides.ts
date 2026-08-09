import { locales, t, type Locale, type Localized } from "@/lib/i18n";

/**
 * Guides — the site's only non-brand, non-legal surface.
 *
 * Everything else on cubi.family ranks for "Cubi" and nothing more. These
 * answer the questions Vietnamese parents actually type ("gửi ảnh con cho ông
 * bà", "widget ảnh màn hình chính", "lưu ảnh con ở đâu"), and they are written
 * to be genuinely useful whether or not the reader installs Cubi — a comparison
 * that only flatters us would be worth nothing to a reader or an answer engine.
 *
 * Slugs are localized: the Vietnamese URL is what a Vietnamese reader sees in
 * search results. hreflang pairs the languages through `guideSlug()`, so a
 * language whose slug is not translated yet still resolves (to the English
 * one) instead of 404-ing.
 */
export interface Guide {
  id: string;
  slug: Localized;
  title: Localized;
  /** Meta description + the card blurb on the index. */
  description: Localized;
  /** ISO date, used for `dateModified` and the sitemap. */
  updated: string;
  intro: Localized;
  sections: { heading: Localized; body: Localized }[];
  faq: { q: Localized; a: Localized }[];
}

export const guides: Guide[] = [
  {
    id: "share-with-grandparents",
    slug: {
      vi: "gui-anh-con-cho-ong-ba-o-xa",
      en: "share-baby-photos-with-grandparents",
      fr: "partager-les-photos-de-bebe-avec-les-grands-parents",
      de: "babyfotos-mit-grosseltern-teilen",
    },
    title: {
      vi: "Gửi ảnh con cho ông bà ở xa: 5 cách và ưu nhược điểm",
      en: "Sharing baby photos with faraway grandparents: 5 ways compared",
      fr: "Partager les photos de bébé avec des grands-parents éloignés : 5 méthodes comparées",
      de: "Babyfotos mit weit entfernten Großeltern teilen: 5 Wege im Vergleich",
    },
    description: {
      vi: "So sánh Zalo, Facebook, Google Photos, album chia sẻ iCloud và app nhật ký riêng — cách nào hợp với ông bà không rành công nghệ nhất.",
      en: "Zalo, Facebook, Google Photos, iCloud Shared Albums and a private diary app compared — which suits grandparents who find phones fiddly.",
      fr: "Zalo, Facebook, Google Photos, les albums partagés iCloud et une app de journal privé comparés — lequel convient aux grands-parents que le téléphone rebute.",
      de: "Zalo, Facebook, Google Fotos, geteilte iCloud-Alben und eine private Tagebuch-App im Vergleich — was passt für Großeltern, denen das Handy schwerfällt.",
    },
    updated: "2026-07-26",
    intro: {
      vi: "Bé lớn từng ngày, mà ông bà thì ở xa. Dưới đây là năm cách bố mẹ Việt hay dùng để gửi ảnh con về cho ông bà, kèm ưu nhược điểm thật của từng cách. Không có cách nào đúng cho mọi nhà — điều quan trọng là chọn cách mà ông bà mở lên được mà không cần ai chỉ.",
      en: "Babies grow every day, and grandparents live far away. Here are five ways Vietnamese parents share photos home, with the honest trade-offs of each. None is right for every family — what matters is picking the one grandparents can open without being taught.",
      fr: "Les bébés grandissent chaque jour, et les grands-parents habitent loin. Voici cinq façons de faire parvenir les photos à la maison, avec les compromis réels de chacune. Aucune n'est bonne pour toutes les familles — l'essentiel est de choisir celle que les grands-parents savent ouvrir sans qu'on leur explique.",
      de: "Babys wachsen jeden Tag, und die Großeltern wohnen weit weg. Hier sind fünf Wege, Fotos nach Hause zu schicken, mit den ehrlichen Vor- und Nachteilen. Keiner passt für jede Familie — entscheidend ist, den zu wählen, den die Großeltern ohne Erklärung öffnen können.",
    },
    sections: [
      {
        heading: { vi: "1. Gửi qua Zalo", en: "1. Send it over Zalo", fr: "1. Envoyer par Zalo", de: "1. Über Zalo schicken" },
        body: {
          vi: "Đây là cách phổ biến nhất ở Việt Nam, vì gần như ông bà nào cũng đã có Zalo và đã biết dùng.\n\n- Ưu: không phải cài thêm gì, ông bà đã quen, gửi là thấy ngay.\n- Nhược: ảnh trôi rất nhanh giữa những tin nhắn khác. Vài tháng sau muốn tìm lại tấm ảnh bé cười hôm ấy thì phải cuộn rất lâu. Ảnh gửi qua khung chat thường được nén lại, và nếu ông bà đổi điện thoại thì lịch sử ảnh có thể không còn.\n\nHợp khi: cả nhà chỉ cần khoe nhanh vài tấm trong ngày, không đặt nặng chuyện lưu giữ lâu dài.",
          en: "This is the default in Vietnam, because nearly every grandparent already has Zalo and already knows how to use it.\n\n- Upside: nothing new to install, they already know it, and they see the photo immediately.\n- Downside: photos drift away between other messages fast. Months later, finding that one photo means scrolling a very long way. Photos sent through a chat window are usually compressed, and if a grandparent changes phone the history may not follow.\n\nGood when: you just want to show a few photos today, and long-term keeping is not the point.",
          fr: "C'est le réflexe au Vietnam, car presque tous les grands-parents ont déjà Zalo et savent s'en servir.\n\n- Avantage : rien à installer, ils connaissent déjà, et ils voient la photo tout de suite.\n- Inconvénient : les photos s'éloignent vite entre les autres messages. Des mois plus tard, retrouver une photo demande de faire défiler très longtemps. Les photos envoyées dans une conversation sont généralement compressées, et si un grand-parent change de téléphone, l'historique peut ne pas suivre.\n\nBien quand : vous voulez juste montrer quelques photos aujourd'hui, sans chercher à les conserver.",
          de: "In Vietnam ist das der Normalfall, weil fast alle Großeltern Zalo schon haben und bedienen können.\n\n- Vorteil: nichts Neues zu installieren, sie kennen es bereits und sehen das Foto sofort.\n- Nachteil: Fotos rutschen schnell zwischen anderen Nachrichten weg. Monate später bedeutet Wiederfinden sehr langes Scrollen. Fotos aus dem Chatfenster sind meist komprimiert, und beim Handywechsel kommt der Verlauf womöglich nicht mit.\n\nGut, wenn: du heute einfach ein paar Fotos zeigen willst und es nicht ums Aufbewahren geht.",
        },
      },
      {
        heading: { vi: "2. Đăng lên Facebook", en: "2. Post to Facebook", fr: "2. Publier sur Facebook", de: "2. Auf Facebook posten" },
        body: {
          vi: "Nhiều bố mẹ đăng ảnh con lên Facebook cho cả họ cùng xem.\n\n- Ưu: người thân vào xem dễ, có chỗ để mọi người bình luận chúc mừng.\n- Nhược: đây là không gian bán công khai. Ảnh của bé có thể lọt ra ngoài vòng gia đình tùy cài đặt, thuật toán quyết định ai thấy gì, và giữa những khoảnh khắc của bé sẽ có quảng cáo. Nhiều bố mẹ về sau thấy không thoải mái khi con lớn lên với một dấu vết công khai từ lúc còn đỏ hỏn.\n\nHợp khi: bố mẹ thoải mái với việc chia sẻ rộng và đã kiểm soát kỹ phần cài đặt riêng tư.",
          en: "Plenty of parents post to Facebook so the whole extended family can see.\n\n- Upside: relatives find it easily, and there is room for everyone to comment.\n- Downside: it is a semi-public space. Depending on your settings the photos can travel beyond the family, an algorithm decides who sees what, and ads sit between your child's moments. Many parents later feel uneasy that their child grew up with a public trail from birth.\n\nGood when: you are comfortable sharing broadly and have your privacy settings well in hand.",
          fr: "Beaucoup de parents publient sur Facebook pour que toute la famille élargie puisse voir.\n\n- Avantage : les proches trouvent facilement, et chacun peut commenter.\n- Inconvénient : c'est un espace semi-public. Selon vos réglages, les photos peuvent circuler au-delà de la famille, un algorithme décide qui voit quoi, et des publicités s'intercalent entre les instants de votre enfant. Bien des parents finissent par regretter que leur enfant ait grandi avec une trace publique depuis sa naissance.\n\nBien quand : partager largement ne vous dérange pas et vous maîtrisez vos réglages de confidentialité.",
          de: "Viele Eltern posten auf Facebook, damit die ganze weitere Familie mitsieht.\n\n- Vorteil: Verwandte finden es leicht, und alle können kommentieren.\n- Nachteil: Es ist ein halb öffentlicher Raum. Je nach Einstellungen wandern die Fotos über die Familie hinaus, ein Algorithmus entscheidet, wer was sieht, und zwischen den Momenten des Kindes steht Werbung. Vielen Eltern ist im Nachhinein unwohl dabei, dass ihr Kind mit einer öffentlichen Spur von Geburt an aufgewachsen ist.\n\nGut, wenn: du breites Teilen in Ordnung findest und deine Privatsphäre-Einstellungen im Griff hast.",
        },
      },
      {
        heading: { vi: "3. Album chia sẻ trên Google Photos", en: "3. A Google Photos shared album", fr: "3. Un album partagé Google Photos", de: "3. Ein geteiltes Album in Google Fotos" },
        body: {
          vi: "Tạo một album chia sẻ rồi gửi link cho ông bà.\n\n- Ưu: giữ ảnh gọn một nơi, chất lượng tốt, tìm lại theo ngày tháng dễ.\n- Nhược: để xem thuận tiện và để thả cảm xúc thì ông bà thường cần có tài khoản Google và biết đăng nhập. Giao diện có nhiều thứ ngoài ảnh của cháu, nên người lớn tuổi dễ bấm nhầm. Dung lượng miễn phí cũng có giới hạn.\n\nHợp khi: bố mẹ muốn một kho ảnh chỉn chu và ông bà tương đối rành điện thoại.",
          en: "Create a shared album and send grandparents the link.\n\n- Upside: everything in one tidy place, good quality, easy to find by date.\n- Downside: to view comfortably and to react, grandparents usually need a Google account and need to know how to sign in. The interface holds a lot more than their grandchild's photos, so it is easy for an older person to tap the wrong thing. Free storage is capped.\n\nGood when: you want a proper archive and grandparents are reasonably confident with phones.",
          fr: "Créez un album partagé et envoyez le lien aux grands-parents.\n\n- Avantage : tout est rangé au même endroit, de bonne qualité, facile à retrouver par date.\n- Inconvénient : pour consulter confortablement et réagir, les grands-parents ont généralement besoin d'un compte Google et doivent savoir s'y connecter. L'interface contient bien plus que les photos de leur petit-enfant : il est facile pour une personne âgée de toucher au mauvais endroit. Le stockage gratuit est limité.\n\nBien quand : vous voulez une vraie archive et les grands-parents sont assez à l'aise avec un téléphone.",
          de: "Lege ein geteiltes Album an und schick den Großeltern den Link.\n\n- Vorteil: alles ordentlich an einem Ort, gute Qualität, leicht nach Datum zu finden.\n- Nachteil: Zum bequemen Ansehen und Reagieren brauchen Großeltern meist ein Google-Konto und müssen sich anmelden können. Die Oberfläche enthält viel mehr als die Fotos des Enkelkinds, da tippt ein älterer Mensch schnell aufs Falsche. Der kostenlose Speicher ist begrenzt.\n\nGut, wenn: du ein richtiges Archiv willst und die Großeltern einigermaßen sicher mit dem Handy umgehen.",
        },
      },
      {
        heading: { vi: "4. Album chia sẻ của iCloud", en: "4. iCloud Shared Albums", fr: "4. Les albums partagés iCloud", de: "4. Geteilte iCloud-Alben" },
        body: {
          vi: "Nếu cả nhà đều dùng iPhone thì đây là cách gọn nhất trong hệ Apple.\n\n- Ưu: gắn sẵn trong ứng dụng Ảnh, không phải cài gì thêm, ảnh mới tự về máy ông bà.\n- Nhược: chỉ mượt khi mọi người đều dùng thiết bị Apple. Người thân dùng Android sẽ khó tham gia. Trong nhà Việt, chuyện mỗi người một hệ máy là rất bình thường.\n\nHợp khi: cả nhà đều dùng iPhone hoặc iPad.",
          en: "If everyone in the family is on iPhone, this is the neatest option inside Apple's world.\n\n- Upside: built into the Photos app, nothing to install, new photos arrive on their device by themselves.\n- Downside: it only flows well when everyone is on Apple hardware. Relatives on Android struggle to take part — and mixed households are completely normal in Vietnam.\n\nGood when: the whole family is on iPhone or iPad.",
          fr: "Si toute la famille est sur iPhone, c'est l'option la plus soignée dans l'univers Apple.\n\n- Avantage : intégré à l'app Photos, rien à installer, les nouvelles photos arrivent d'elles-mêmes sur leur appareil.\n- Inconvénient : cela ne coule de source que si tout le monde a du matériel Apple. Les proches sous Android peinent à participer — et les familles mixtes sont tout à fait courantes.\n\nBien quand : toute la famille est sur iPhone ou iPad.",
          de: "Wenn alle in der Familie ein iPhone haben, ist das die sauberste Lösung in Apples Welt.\n\n- Vorteil: in der Fotos-App eingebaut, nichts zu installieren, neue Fotos landen von allein auf dem Gerät.\n- Nachteil: Es läuft nur rund, wenn alle Apple-Geräte haben. Verwandte mit Android tun sich schwer — und gemischte Familien sind ganz normal.\n\nGut, wenn: die ganze Familie iPhone oder iPad nutzt.",
        },
      },
      {
        heading: {
          vi: "5. Một cuốn nhật ký riêng cho cả nhà",
          en: "5. A private family diary app",
          fr: "5. Une app de journal familial privé",
          de: "5. Eine private Familien-Tagebuch-App",
        },
        body: {
          vi: "Đây là cách Cubi làm. Bố mẹ lưu khoảnh khắc vào một cuốn nhật ký riêng, mời ông bà bằng một mã hoặc một đường link, và ảnh mới nhất của bé tự hiện lên widget ở màn hình chính máy ông bà.\n\n- Ưu: ông bà không cần lập tài khoản, không cần mật khẩu — mở link hoặc nhập mã là vào. Không có bảng tin công khai, không người lạ, không quảng cáo. Mỗi khoảnh khắc gắn sẵn tuổi của bé hôm ấy, nên vài năm sau mở lại vẫn biết đó là lúc bé mấy tháng. Ông bà không cần nhớ mở app, vì ảnh tự hiện ngay màn hình chính.\n- Nhược: cả nhà phải cài thêm một ứng dụng nữa. Và vì đây là không gian riêng, nó không thay thế được chỗ để khoe rộng với bạn bè như mạng xã hội.\n\nHợp khi: bố mẹ muốn giữ lại hành trình lớn lên của con một cách lâu dài và riêng tư, mà ông bà vẫn xem được dễ dàng.",
          en: "This is what Cubi does. Parents keep moments in a private diary, invite grandparents with a code or a link, and the baby's latest photo appears on a home-screen widget on the grandparents' phone.\n\n- Upside: grandparents need no account and no password — open the link or type the code and they are in. There is no public feed, no strangers, no ads. Every moment carries the baby's age that day, so years later you still know how old they were. And nobody has to remember to open an app, because the photo is already on the home screen.\n- Downside: it is one more app for the family to install. And because it is a private space, it does not replace social media for showing friends.\n\nGood when: you want your child's growing-up kept for the long run and kept private, while grandparents can still see it easily.",
          fr: "C'est ce que fait Cubi. Les parents gardent les instants dans un journal privé, invitent les grands-parents avec un code ou un lien, et la dernière photo du bébé apparaît sur un widget de l'écran d'accueil, sur le téléphone des grands-parents.\n\n- Avantage : les grands-parents n'ont besoin ni de compte ni de mot de passe — ils ouvrent le lien ou saisissent le code, et les voilà entrés. Aucun fil public, aucun inconnu, aucune publicité. Chaque instant porte l'âge du bébé ce jour-là : des années plus tard, vous saurez encore quel âge il avait. Et personne n'a à penser à ouvrir une application, puisque la photo est déjà sur l'écran d'accueil.\n- Inconvénient : c'est une application de plus à installer. Et comme c'est un espace privé, elle ne remplace pas les réseaux sociaux pour montrer les photos à des amis.\n\nBien quand : vous voulez garder les années où votre enfant grandit, sur la durée et à l'abri, tout en laissant les grands-parents voir facilement.",
          de: "Genau das macht Cubi. Eltern bewahren Momente in einem privaten Tagebuch, laden die Großeltern mit einem Code oder Link ein, und das neueste Foto des Babys erscheint auf einem Homescreen-Widget auf deren Handy.\n\n- Vorteil: Großeltern brauchen weder Konto noch Passwort — Link öffnen oder Code eingeben, fertig. Es gibt keinen öffentlichen Feed, keine Fremden, keine Werbung. Jeder Moment trägt das Alter des Babys von diesem Tag, sodass du auch Jahre später weißt, wie alt es war. Und niemand muss daran denken, eine App zu öffnen, denn das Foto ist schon auf dem Homescreen.\n- Nachteil: Es ist eine App mehr, die installiert werden will. Und weil es ein privater Raum ist, ersetzt sie soziale Netzwerke nicht, wenn du Freunden etwas zeigen willst.\n\nGut, wenn: du das Aufwachsen deines Kindes langfristig und privat bewahren willst und die Großeltern es trotzdem leicht sehen sollen.",
        },
      },
      {
        heading: { vi: "Vậy nên chọn cách nào?", en: "So which should you choose?", fr: "Alors, laquelle choisir ?", de: "Was also nehmen?" },
        body: {
          vi: "Một cách chọn nhanh:\n\n- Ông bà chỉ cần thấy ảnh hôm nay, không cần lưu lâu: Zalo là đủ.\n- Cả nhà đều dùng iPhone: album chia sẻ iCloud.\n- Muốn một kho ảnh chỉn chu, ông bà rành máy: Google Photos.\n- Muốn giữ lại cả hành trình, riêng tư, và ông bà mở lên được mà không cần ai chỉ: một cuốn nhật ký riêng như Cubi.\n\nNhiều nhà dùng hai cách song song cũng không sao: gửi nhanh vài tấm qua Zalo trong ngày, còn nơi lưu giữ lâu dài thì để riêng một chỗ.",
          en: "A quick way to decide:\n\n- Grandparents just need today's photo, nothing kept: Zalo is enough.\n- Everyone is on iPhone: iCloud Shared Albums.\n- You want a tidy archive and grandparents are confident: Google Photos.\n- You want the whole journey kept, kept private, and openable without being taught: a private diary like Cubi.\n\nPlenty of families run two in parallel: a few quick photos over Zalo today, and a separate place for what they mean to keep.",
          fr: "Pour décider vite :\n\n- Les grands-parents veulent seulement la photo du jour, sans rien conserver : Zalo suffit.\n- Tout le monde est sur iPhone : les albums partagés iCloud.\n- Vous voulez une archive bien rangée et les grands-parents sont à l'aise : Google Photos.\n- Vous voulez garder tout le parcours, à l'abri, et qu'on puisse l'ouvrir sans explication : un journal privé comme Cubi.\n\nBeaucoup de familles en utilisent deux à la fois : quelques photos rapides par Zalo aujourd'hui, et un endroit à part pour ce qu'elles veulent garder.",
          de: "Kurz entschieden:\n\n- Die Großeltern wollen nur das Foto von heute, nichts aufbewahren: Zalo reicht.\n- Alle haben ein iPhone: geteilte iCloud-Alben.\n- Du willst ein aufgeräumtes Archiv und die Großeltern kommen zurecht: Google Fotos.\n- Du willst den ganzen Weg bewahren, privat, und ohne Erklärung zu öffnen: ein privates Tagebuch wie Cubi.\n\nViele Familien nutzen zwei Wege parallel: heute ein paar schnelle Fotos über Zalo — und einen eigenen Ort für das, was bleiben soll.",
        },
      },
    ],
    faq: [
      {
        q: {
          vi: "Ông bà không rành công nghệ thì nên dùng cách nào?",
          en: "Which option is best for grandparents who find phones hard?",
          fr: "Quelle option convient le mieux aux grands-parents que le téléphone rebute ?",
          de: "Was eignet sich am besten für Großeltern, denen das Handy schwerfällt?",
        },
        a: {
          vi: "Cách ít bước nhất là cách không bắt ông bà đăng nhập. Zalo hợp vì ông bà đã quen sẵn; còn nếu muốn ảnh tự hiện mà ông bà không phải mở gì cả, hãy chọn ứng dụng có widget màn hình chính và cho phép tham gia bằng mã mời, không cần tài khoản.",
          en: "The fewest steps means not asking them to sign in at all. Zalo works because they already know it; if you want photos to appear without them opening anything, choose an app with a home-screen widget that lets people join by invite code rather than an account.",
          fr: "Le moins d'étapes possible, c'est ne pas leur demander de se connecter du tout. Zalo fonctionne parce qu'ils le connaissent déjà ; si vous voulez que les photos apparaissent sans qu'ils ouvrent quoi que ce soit, choisissez une application avec un widget d'écran d'accueil, où l'on entre avec un code d'invitation plutôt qu'un compte.",
          de: "Die wenigsten Schritte heißt: sie gar nicht erst anmelden lassen. Zalo funktioniert, weil sie es schon kennen; sollen die Fotos erscheinen, ohne dass sie etwas öffnen, nimm eine App mit Homescreen-Widget, bei der man per Einladungscode statt per Konto dazukommt.",
        },
      },
      {
        q: {
          vi: "Gửi ảnh con qua nhóm chat có bị giảm chất lượng không?",
          en: "Do photos lose quality when sent in a group chat?",
          fr: "Les photos perdent-elles en qualité quand on les envoie dans un groupe ?",
          de: "Verlieren Fotos in einem Gruppenchat an Qualität?",
        },
        a: {
          vi: "Thường là có. Hầu hết ứng dụng nhắn tin nén ảnh lại để gửi cho nhanh và nhẹ. Nếu bố mẹ muốn giữ ảnh gốc rõ nét, nên lưu bản chính ở một nơi khác ngoài khung chat.",
          en: "Usually yes. Most messaging apps compress photos so they send quickly. If you want to keep the sharp version, keep an original somewhere other than the chat window.",
          fr: "En général oui. La plupart des messageries compressent les photos pour les envoyer vite. Si vous voulez garder la version nette, conservez un original ailleurs que dans la conversation.",
          de: "Meist ja. Die meisten Messenger komprimieren Fotos, damit sie schnell verschickt sind. Wenn du die scharfe Fassung behalten willst, bewahre ein Original außerhalb des Chats auf.",
        },
      },
    ],
  },

  {
    id: "photo-widget",
    slug: {
      vi: "widget-anh-con-man-hinh-chinh",
      en: "baby-photo-widget-home-screen",
      fr: "widget-photo-de-bebe-ecran-accueil",
      de: "babyfoto-widget-homescreen",
    },
    title: {
      vi: "Widget ảnh con trên màn hình chính: cách cài trên iPhone và Android",
      en: "A baby photo widget on the home screen: iPhone and Android",
      fr: "Un widget photo de bébé sur l'écran d'accueil : iPhone et Android",
      de: "Ein Babyfoto-Widget auf dem Homescreen: iPhone und Android",
    },
    description: {
      vi: "Hướng dẫn từng bước đặt widget ảnh con lên màn hình chính iPhone và Android, để mở máy lên là thấy bé — kể cả với ông bà không rành công nghệ.",
      en: "Step-by-step: put a baby photo widget on an iPhone or Android home screen, so the little one is there every time the phone lights up.",
      fr: "Pas à pas : placer un widget photo de bébé sur l'écran d'accueil d'un iPhone ou d'un Android, pour que le petit soit là à chaque fois que le téléphone s'allume.",
      de: "Schritt für Schritt: ein Babyfoto-Widget auf den Homescreen von iPhone oder Android legen, damit das Kleine da ist, sobald das Handy aufleuchtet.",
    },
    updated: "2026-07-26",
    intro: {
      vi: "Widget là ô nội dung nằm ngay trên màn hình chính, cạnh các biểu tượng ứng dụng. Với ông bà, đây là cách xem ảnh cháu nhẹ nhàng nhất: không phải nhớ mở app nào, chỉ cần mở khóa điện thoại là thấy cháu. Dưới đây là cách đặt widget trên cả hai hệ.",
      en: "A widget is a panel that lives on the home screen, next to the app icons. For grandparents it is the gentlest way to see a grandchild: no app to remember, just unlock the phone and there they are. Here is how to add one on both platforms.",
      fr: "Un widget est un panneau qui vit sur l'écran d'accueil, à côté des icônes. Pour les grands-parents, c'est la façon la plus douce de voir leur petit-enfant : aucune application à retenir, il suffit de déverrouiller le téléphone. Voici comment en ajouter un sur les deux plateformes.",
      de: "Ein Widget ist eine Fläche auf dem Homescreen, neben den App-Symbolen. Für Großeltern ist es der sanfteste Weg, das Enkelkind zu sehen: keine App zum Merken, einfach das Handy entsperren — und da ist es. So fügst du eines auf beiden Systemen hinzu.",
    },
    sections: [
      {
        heading: { vi: "Trên iPhone (iOS 17 trở lên)", en: "On iPhone (iOS 17 or later)", fr: "Sur iPhone (iOS 17 ou plus récent)", de: "Auf dem iPhone (ab iOS 17)" },
        body: {
          vi: "- Chạm và giữ vào một khoảng trống trên màn hình chính cho đến khi các biểu tượng rung lên.\n- Chạm dấu cộng ở góc trên bên trái.\n- Kéo xuống tìm tên ứng dụng trong danh sách, hoặc gõ tên vào ô tìm kiếm.\n- Vuốt ngang để chọn cỡ widget muốn dùng, rồi chạm \"Thêm Widget\".\n- Kéo widget tới chỗ mong muốn, rồi chạm \"Xong\" ở góc trên bên phải.\n\nMẹo cho ông bà: đặt widget ở màn hình chính đầu tiên, cỡ vừa hoặc lớn, để không phải vuốt tìm.",
          en: "- Touch and hold an empty part of the home screen until the icons jiggle.\n- Tap the plus button at the top left.\n- Scroll to find the app in the list, or type its name in the search box.\n- Swipe sideways to pick the widget size you want, then tap \"Add Widget\".\n- Drag it where you want it, then tap \"Done\" at the top right.\n\nTip for grandparents: put it on the very first home screen, in the medium or large size, so there is nothing to swipe for.",
          fr: "- Appuyez longuement sur une zone vide de l'écran d'accueil jusqu'à ce que les icônes frémissent.\n- Touchez le bouton plus en haut à gauche.\n- Faites défiler pour trouver l'application dans la liste, ou tapez son nom dans la recherche.\n- Balayez sur le côté pour choisir la taille du widget, puis touchez « Ajouter le widget ».\n- Faites-le glisser où vous voulez, puis touchez « OK » en haut à droite.\n\nAstuce pour les grands-parents : placez-le sur le tout premier écran d'accueil, en taille moyenne ou grande, pour n'avoir rien à balayer.",
          de: "- Halte eine freie Stelle auf dem Homescreen gedrückt, bis die Symbole wackeln.\n- Tippe oben links auf das Plus.\n- Scrolle zur App in der Liste oder tippe ihren Namen in die Suche.\n- Wische zur Seite, um die gewünschte Widget-Größe zu wählen, und tippe auf „Widget hinzufügen“.\n- Zieh es an die gewünschte Stelle und tippe oben rechts auf „Fertig“.\n\nTipp für Großeltern: Leg es auf den allerersten Homescreen, in mittlerer oder großer Größe — dann muss niemand wischen.",
        },
      },
      {
        heading: { vi: "Trên Android", en: "On Android", fr: "Sur Android", de: "Auf Android" },
        body: {
          vi: "Các bước có thể khác đôi chút tùy hãng máy (Samsung, Xiaomi, OPPO…), nhưng nhìn chung là:\n\n- Chạm và giữ vào khoảng trống trên màn hình chính.\n- Chọn mục \"Widget\" (một số máy ghi là \"Tiện ích\").\n- Tìm tên ứng dụng trong danh sách.\n- Chạm giữ widget rồi kéo thả vào chỗ trống trên màn hình chính.\n\nMột số dòng máy Xiaomi và OPPO yêu cầu bật thêm quyền trước khi ứng dụng được phép tự thêm widget. Nếu chạm nút \"thêm widget\" trong app mà không thấy gì xảy ra, hãy thêm thủ công theo các bước trên.",
          en: "Steps vary a little by manufacturer (Samsung, Xiaomi, OPPO…), but broadly:\n\n- Touch and hold an empty part of the home screen.\n- Choose \"Widgets\".\n- Find the app in the list.\n- Press and hold its widget, then drag it onto a free spot.\n\nSome Xiaomi and OPPO phones need an extra permission before an app may place a widget for you. If tapping \"add widget\" inside an app appears to do nothing, add it by hand using the steps above.",
          fr: "Les étapes varient un peu selon le fabricant (Samsung, Xiaomi, OPPO…), mais en gros :\n\n- Appuyez longuement sur une zone vide de l'écran d'accueil.\n- Choisissez « Widgets ».\n- Trouvez l'application dans la liste.\n- Appuyez longuement sur son widget, puis faites-le glisser sur un emplacement libre.\n\nCertains téléphones Xiaomi et OPPO exigent une autorisation supplémentaire pour qu'une application puisse poser un widget à votre place. Si toucher « ajouter le widget » dans une application ne semble rien faire, ajoutez-le à la main en suivant les étapes ci-dessus.",
          de: "Die Schritte unterscheiden sich je nach Hersteller (Samsung, Xiaomi, OPPO …) etwas, im Groben aber so:\n\n- Halte eine freie Stelle auf dem Homescreen gedrückt.\n- Wähle „Widgets“.\n- Suche die App in der Liste.\n- Halte ihr Widget gedrückt und zieh es auf einen freien Platz.\n\nManche Xiaomi- und OPPO-Handys brauchen eine zusätzliche Berechtigung, damit eine App ein Widget für dich platzieren darf. Wenn „Widget hinzufügen“ in der App scheinbar nichts bewirkt, füge es von Hand nach den Schritten oben hinzu.",
        },
      },
      {
        heading: {
          vi: "Widget ảnh có tốn pin không?",
          en: "Does a photo widget drain the battery?",
          fr: "Un widget photo vide-t-il la batterie ?",
          de: "Zieht ein Foto-Widget den Akku leer?",
        },
        body: {
          vi: "Rất ít. Widget không chạy liên tục như một ứng dụng đang mở; hệ điều hành chỉ đánh thức nó theo lịch để làm mới nội dung. Ảnh cũng đã được nén sẵn trước khi tải về, nên phần lớn thời gian widget chỉ đứng yên hiển thị.",
          en: "Very little. A widget does not run continuously the way an open app does; the operating system wakes it on a schedule to refresh. Photos are already compressed before download, so most of the time the widget simply sits there showing what it has.",
          fr: "Très peu. Un widget ne tourne pas en continu comme une application ouverte ; le système le réveille à intervalles pour l'actualiser. Les photos sont déjà compressées avant d'être téléchargées : la plupart du temps, le widget se contente d'afficher ce qu'il a.",
          de: "Kaum. Ein Widget läuft nicht dauerhaft wie eine geöffnete App; das Betriebssystem weckt es in Abständen zum Aktualisieren. Fotos sind schon vor dem Laden komprimiert, und die meiste Zeit zeigt das Widget einfach, was es hat.",
        },
      },
      {
        heading: {
          vi: "Widget của Cubi hiện gì?",
          en: "What does the Cubi widget show?",
          fr: "Qu'affiche le widget Cubi ?",
          de: "Was zeigt das Cubi-Widget?",
        },
        body: {
          vi: "Cubi hiện tấm ảnh mới nhất mà bố mẹ đã chọn cho widget, kèm tuổi của bé tính đến hôm đó — ví dụ \"3 tháng 5 ngày tuổi\". Nội dung tự đổi trong ngày, nên ông bà mở máy lúc nào cũng có thể thấy điều mới. Widget có trên cả iPhone và Android, và người thân được mời cũng thấy được widget như bố mẹ.",
          en: "Cubi shows the latest photo the parents marked for the widget, with the baby's age on that day — for example \"3 months 5 days old\". It changes through the day, so there is often something new when the phone lights up. The widget works on both iPhone and Android, and invited family see it just as the parents do.",
          fr: "Cubi affiche la dernière photo que les parents ont destinée au widget, avec l'âge du bébé ce jour-là — par exemple « 3 mois 5 jours ». Elle change au fil de la journée : il y a souvent du nouveau quand le téléphone s'allume. Le widget fonctionne sur iPhone comme sur Android, et la famille invitée le voit tout comme les parents.",
          de: "Cubi zeigt das neueste Foto, das die Eltern für das Widget vorgesehen haben, mit dem Alter des Babys an diesem Tag — zum Beispiel „3 Monate 5 Tage“. Es wechselt im Lauf des Tages, sodass oft etwas Neues da ist, wenn das Handy aufleuchtet. Das Widget läuft auf iPhone und Android, und die eingeladene Familie sieht es genau wie die Eltern.",
        },
      },
    ],
    faq: [
      {
        q: {
          vi: "Ông bà có cần tài khoản để thấy widget không?",
          en: "Do grandparents need an account to get the widget?",
          fr: "Les grands-parents ont-ils besoin d'un compte pour avoir le widget ?",
          de: "Brauchen Großeltern für das Widget ein Konto?",
        },
        a: {
          vi: "Với Cubi thì không. Ông bà vào bằng mã mời 7 ký tự hoặc đường link bố mẹ gửi, rồi đặt widget lên màn hình chính như bình thường.",
          en: "Not with Cubi. Grandparents join with the 7-character invite code or the link you send, then add the widget to their home screen as usual.",
          fr: "Pas avec Cubi. Les grands-parents entrent avec le code d'invitation de 7 caractères ou le lien que vous envoyez, puis ajoutent le widget à leur écran d'accueil comme d'habitude.",
          de: "Bei Cubi nicht. Die Großeltern kommen mit dem 7-stelligen Einladungscode oder dem Link dazu, den du schickst, und legen das Widget dann wie gewohnt auf ihren Homescreen.",
        },
      },
      {
        q: {
          vi: "Widget bao lâu mới cập nhật ảnh mới?",
          en: "How often does the widget refresh?",
          fr: "À quelle fréquence le widget se met-il à jour ?",
          de: "Wie oft aktualisiert sich das Widget?",
        },
        a: {
          vi: "Hệ điều hành quyết định thời điểm làm mới widget, nên ảnh mới thường xuất hiện sau một khoảng ngắn chứ không tức thì. Mở ứng dụng lên một lần sẽ giúp widget cập nhật ngay.",
          en: "The operating system decides when widgets refresh, so a new photo usually appears after a short delay rather than instantly. Opening the app once nudges it to update straight away.",
          fr: "C'est le système qui décide quand les widgets se rafraîchissent : une nouvelle photo apparaît donc généralement après un court délai, pas instantanément. Ouvrir l'application une fois l'incite à se mettre à jour tout de suite.",
          de: "Wann Widgets aktualisiert werden, entscheidet das Betriebssystem — ein neues Foto erscheint deshalb meist mit kurzer Verzögerung statt sofort. Einmal die App zu öffnen stößt die Aktualisierung direkt an.",
        },
      },
    ],
  },

  {
    id: "where-to-keep-photos",
    slug: {
      vi: "luu-anh-con-o-dau-an-toan",
      en: "where-to-keep-baby-photos-safely",
      fr: "ou-conserver-les-photos-de-son-enfant",
      de: "wo-kinderfotos-sicher-aufbewahren",
    },
    title: {
      vi: "Lưu ảnh con ở đâu cho riêng tư và an toàn?",
      en: "Where should you keep your child's photos?",
      fr: "Où conserver les photos de votre enfant ?",
      de: "Wo solltest du die Fotos deines Kindes aufbewahren?",
    },
    description: {
      vi: "Những điều nên cân nhắc trước khi chọn nơi lưu ảnh con: ai xem được, ảnh có bị nén không, dữ liệu vị trí trong ảnh, và cách xóa khi muốn dừng.",
      en: "What to weigh before choosing where your child's photos live: who can see them, compression, location data hidden in photos, and how to delete it all.",
      fr: "Ce qu'il faut peser avant de choisir où vivront les photos de votre enfant : qui peut les voir, la compression, les données de localisation cachées dans les images, et comment tout supprimer.",
      de: "Was du abwägen solltest, bevor du entscheidest, wo die Fotos deines Kindes liegen: wer sie sehen kann, Komprimierung, versteckte Standortdaten in Bildern und wie sich alles löschen lässt.",
    },
    updated: "2026-07-26",
    intro: {
      vi: "Ảnh của con là thứ bố mẹ muốn giữ lâu nhất, nhưng cũng là thứ nhạy cảm nhất. Trước khi chọn một nơi để lưu, có vài câu hỏi đáng hỏi — bất kể bố mẹ chọn dịch vụ nào.",
      en: "Your child's photos are what you most want to keep, and also the most sensitive thing you hold. Before choosing where they live, a few questions are worth asking — whatever service you end up with.",
      fr: "Les photos de votre enfant sont ce que vous voulez le plus garder, et aussi ce que vous détenez de plus sensible. Avant de choisir où elles vivront, quelques questions méritent d'être posées — quel que soit le service retenu.",
      de: "Die Fotos deines Kindes willst du am meisten bewahren — und sie sind zugleich das Sensibelste, was du hast. Bevor du entscheidest, wo sie liegen, lohnen sich ein paar Fragen — egal, für welchen Dienst du dich am Ende entscheidest.",
    },
    sections: [
      {
        heading: { vi: "Ai thực sự xem được?", en: "Who can actually see them?", fr: "Qui peut réellement les voir ?", de: "Wer kann sie tatsächlich sehen?" },
        body: {
          vi: "Câu hỏi đầu tiên và quan trọng nhất. Hãy phân biệt ba mức:\n\n- Công khai: bất kỳ ai có link, hoặc bất kỳ ai trên mạng, đều xem được.\n- Bán công khai: bạn bè của bạn bè, hoặc do thuật toán quyết định.\n- Riêng tư: chỉ những người bố mẹ chủ động mời.\n\nNhiều dịch vụ mặc định ở mức bán công khai. Nếu chọn nơi lưu ảnh con, nên ưu tiên nơi mà mặc định là riêng tư và bố mẹ là người quyết định từng lần chia sẻ.",
          en: "The first and most important question. There are three levels:\n\n- Public: anyone with the link, or anyone on the internet.\n- Semi-public: friends of friends, or whatever an algorithm decides.\n- Private: only the people you actively invite.\n\nPlenty of services default to semi-public. For a child's photos, prefer somewhere private by default, where you decide each time.",
          fr: "La première question, et la plus importante. Il y a trois niveaux :\n\n- Public : toute personne ayant le lien, ou n'importe qui sur internet.\n- Semi-public : les amis d'amis, ou ce qu'un algorithme décide.\n- Privé : uniquement les personnes que vous invitez vous-même.\n\nBeaucoup de services sont semi-publics par défaut. Pour les photos d'un enfant, préférez un endroit privé par défaut, où vous décidez à chaque fois.",
          de: "Die erste und wichtigste Frage. Es gibt drei Stufen:\n\n- Öffentlich: jeder mit dem Link oder jeder im Internet.\n- Halb öffentlich: Freunde von Freunden — oder was ein Algorithmus entscheidet.\n- Privat: nur die Menschen, die du selbst einlädst.\n\nViele Dienste sind standardmäßig halb öffentlich. Für Kinderfotos nimm lieber einen Ort, der von Haus aus privat ist und bei dem du jedes Mal entscheidest.",
        },
      },
      {
        heading: {
          vi: "Ảnh có bị nén không, và nén tới đâu?",
          en: "Are photos compressed, and how far?",
          fr: "Les photos sont-elles compressées, et jusqu'où ?",
          de: "Werden Fotos komprimiert — und wie stark?",
        },
        body: {
          vi: "Gần như dịch vụ nào cũng nén ảnh ở mức nào đó để tiết kiệm dung lượng và tải nhanh. Điều đáng quan tâm là mức nén có được nói rõ không.\n\nVí dụ, Cubi nén ảnh về cạnh dài 1920px và không giữ bản gốc độ phân giải đầy đủ — điều này được ghi rõ trong chính sách quyền riêng tư. Nếu bố mẹ muốn giữ file gốc chất lượng cao nhất (để in ảnh, làm album giấy), nên giữ thêm một bản sao ở nơi khác, ví dụ ổ cứng ngoài hoặc dịch vụ sao lưu ảnh gốc.",
          en: "Almost every service compresses to some degree, to save space and load quickly. What matters is whether they say so plainly.\n\nCubi, for example, compresses to a 1920px long edge and does not keep full-resolution originals — that is stated in its privacy policy. If you want the highest-quality originals (for printing, or a paper album), keep a second copy elsewhere, such as an external drive or a service that stores originals.",
          fr: "Presque tous les services compressent un peu, pour économiser de l'espace et charger vite. Ce qui compte, c'est qu'ils le disent clairement.\n\nCubi, par exemple, compresse à 1920 px sur le grand côté et ne conserve pas les originaux en pleine résolution — c'est écrit dans sa politique de confidentialité. Si vous voulez les originaux de meilleure qualité (pour imprimer ou faire un album papier), gardez une seconde copie ailleurs : un disque externe, ou un service qui conserve les originaux.",
          de: "Fast jeder Dienst komprimiert ein Stück weit, um Platz zu sparen und schnell zu laden. Entscheidend ist, ob er das offen sagt.\n\nCubi zum Beispiel komprimiert auf eine lange Kante von 1920 px und behält keine Originale in voller Auflösung — das steht in der Datenschutzerklärung. Wenn du die bestmöglichen Originale willst (zum Drucken oder für ein Fotoalbum), bewahre eine zweite Kopie anderswo auf, etwa auf einer externen Festplatte oder bei einem Dienst, der Originale speichert.",
        },
      },
      {
        heading: {
          vi: "Trong ảnh có sẵn thông tin vị trí",
          en: "Photos carry hidden location data",
          fr: "Les photos contiennent des données de localisation cachées",
          de: "Fotos tragen versteckte Standortdaten",
        },
        body: {
          vi: "Điện thoại thường gắn tọa độ GPS vào file ảnh khi chụp. Nghĩa là một tấm ảnh bé chơi trước nhà có thể mang theo địa chỉ nhà mình mà bố mẹ không để ý.\n\nTrước khi chia sẻ ảnh con ra ngoài, đáng để kiểm tra xem dịch vụ có gỡ dữ liệu này không. Cubi gỡ thông tin GPS khỏi file ảnh được lưu và chia sẻ, và không dùng vị trí cho bất kỳ tính năng nào. Nếu dùng dịch vụ khác, bố mẹ có thể tự tắt gắn vị trí trong phần cài đặt máy ảnh của điện thoại.",
          en: "Phones usually write GPS coordinates into a photo file. That means a picture of your child in front of your house can carry your home address without you noticing.\n\nBefore sharing a child's photos, it is worth checking whether the service strips this. Cubi removes GPS data from the stored and shared image file, and does not use location for any feature. With other services, you can turn location tagging off in your phone's camera settings.",
          fr: "Les téléphones inscrivent généralement des coordonnées GPS dans le fichier photo. Autrement dit, une image de votre enfant devant chez vous peut porter votre adresse sans que vous le remarquiez.\n\nAvant de partager des photos d'enfant, il vaut la peine de vérifier si le service les retire. Cubi supprime les données GPS du fichier image stocké et partagé, et n'utilise la localisation pour aucune fonction. Avec d'autres services, vous pouvez désactiver la localisation dans les réglages de l'appareil photo de votre téléphone.",
          de: "Handys schreiben meist GPS-Koordinaten in die Fotodatei. Ein Bild deines Kindes vor eurem Haus kann also unbemerkt eure Adresse enthalten.\n\nBevor du Kinderfotos teilst, lohnt der Blick, ob der Dienst diese Daten entfernt. Cubi löscht GPS-Daten aus der gespeicherten und geteilten Bilddatei und nutzt den Standort für keine Funktion. Bei anderen Diensten kannst du die Standortmarkierung in den Kameraeinstellungen deines Handys ausschalten.",
        },
      },
      {
        heading: {
          vi: "Có xóa được hết không, và mất bao lâu?",
          en: "Can you delete everything, and how long does it take?",
          fr: "Peut-on tout supprimer, et en combien de temps ?",
          de: "Kann man alles löschen — und wie lange dauert es?",
        },
        body: {
          vi: "Một nơi lưu ảnh tử tế phải cho bố mẹ đường ra rõ ràng: xóa được tài khoản ngay trong ứng dụng, xóa cả ảnh và video đã lưu, và nói rõ mất bao lâu thì dữ liệu biến mất khỏi hệ thống.\n\nNếu một dịch vụ không nói rõ chuyện này, hoặc bắt phải viết thư xin xóa rồi chờ vô thời hạn, đó là dấu hiệu đáng cân nhắc.",
          en: "A decent home for photos gives you a clear way out: delete the account from inside the app, delete the photos and videos with it, and say plainly how long it takes to disappear from their systems.\n\nIf a service is vague about this, or makes you write in and wait indefinitely, treat that as a signal.",
          fr: "Un bon endroit pour vos photos vous laisse une porte de sortie claire : supprimer le compte depuis l'application, effacer avec lui les photos et vidéos, et dire clairement combien de temps il faut pour que tout disparaisse de leurs systèmes.\n\nSi un service reste vague là-dessus, ou vous oblige à écrire puis à attendre indéfiniment, prenez-le comme un signal.",
          de: "Ein guter Ort für Fotos lässt dir einen klaren Ausgang: das Konto in der App löschen, Fotos und Videos gleich mit — und offen sagen, wie lange es dauert, bis alles aus ihren Systemen verschwunden ist.\n\nWenn ein Dienst dazu vage bleibt oder dich schreiben und dann endlos warten lässt, nimm das als Warnzeichen.",
        },
      },
      {
        heading: {
          vi: "Nguyên tắc an toàn: luôn có bản sao thứ hai",
          en: "One safety rule: always keep a second copy",
          fr: "Une règle de sécurité : gardez toujours une seconde copie",
          de: "Eine Sicherheitsregel: immer eine zweite Kopie",
        },
        body: {
          vi: "Dù chọn dịch vụ nào, đừng để những tấm ảnh quý nhất chỉ tồn tại ở một nơi. Dịch vụ có thể đóng cửa, tài khoản có thể mất, điện thoại có thể hỏng.\n\nMột cách đơn giản: mỗi vài tháng, chép những ảnh quan trọng nhất của con sang một ổ cứng ngoài hoặc một dịch vụ sao lưu khác. Mất mười lăm phút, nhưng yên tâm được nhiều năm.",
          en: "Whatever you choose, do not let the most precious photos exist in only one place. Services close, accounts get lost, phones break.\n\nA simple habit: every few months, copy your child's most important photos to an external drive or a second backup service. Fifteen minutes of work for years of peace of mind.",
          fr: "Quel que soit votre choix, ne laissez pas les photos les plus précieuses n'exister qu'à un seul endroit. Des services ferment, des comptes se perdent, des téléphones cassent.\n\nUne habitude toute simple : tous les quelques mois, copiez les photos les plus importantes de votre enfant sur un disque externe ou un second service de sauvegarde. Un quart d'heure de travail pour des années de tranquillité.",
          de: "Was du auch wählst: Lass die kostbarsten Fotos nicht an nur einem Ort liegen. Dienste schließen, Konten gehen verloren, Handys gehen kaputt.\n\nEine einfache Gewohnheit: Kopiere alle paar Monate die wichtigsten Fotos deines Kindes auf eine externe Festplatte oder zu einem zweiten Backup-Dienst. Eine Viertelstunde Arbeit für jahrelange Ruhe.",
        },
      },
    ],
    faq: [
      {
        q: {
          vi: "Có nên đăng ảnh con lên mạng xã hội không?",
          en: "Should I post my child's photos on social media?",
          fr: "Faut-il publier les photos de son enfant sur les réseaux sociaux ?",
          de: "Sollte ich Fotos meines Kindes in sozialen Netzwerken posten?",
        },
        a: {
          vi: "Đây là lựa chọn riêng của mỗi nhà. Điều đáng cân nhắc là con sẽ lớn lên và có thể không muốn hình ảnh lúc nhỏ của mình còn ở đó. Nhiều bố mẹ chọn cách giữ ảnh con trong một không gian riêng chỉ có người thân, và chỉ chia sẻ rộng khi thật sự muốn.",
          en: "That is each family's own call. What is worth weighing is that your child will grow up and may not want those pictures still there. Many parents keep their child's photos in a private space for family only, and share widely only when they truly mean to.",
          fr: "C'est le choix de chaque famille. Ce qui mérite réflexion, c'est que votre enfant grandira et ne voudra peut-être pas que ces images soient encore là. Beaucoup de parents gardent les photos de leur enfant dans un espace privé réservé à la famille, et ne partagent largement que lorsqu'ils le veulent vraiment.",
          de: "Das entscheidet jede Familie für sich. Bedenkenswert ist: Dein Kind wird erwachsen und will diese Bilder vielleicht nicht mehr dort haben. Viele Eltern bewahren die Fotos ihres Kindes in einem privaten Raum nur für die Familie auf und teilen breit nur, wenn sie es wirklich wollen.",
        },
      },
      {
        q: {
          vi: "Ảnh của bé lưu ở đâu khi dùng Cubi?",
          en: "Where are photos stored when using Cubi?",
          fr: "Où les photos sont-elles stockées avec Cubi ?",
          de: "Wo werden Fotos bei Cubi gespeichert?",
        },
        a: {
          vi: "Ảnh, video và dữ liệu tài khoản được lưu trên máy chủ đám mây đặt tại Singapore, nghĩa là thông tin có thể được lưu trữ và xử lý bên ngoài Việt Nam. Chính sách quyền riêng tư của Cubi nêu rõ từng bên tham gia vận hành và họ xử lý những gì.",
          en: "Photos, videos and account data sit on cloud servers located in Singapore, which means the information may be stored and processed outside Vietnam. Cubi's privacy policy names every provider involved and what each one handles.",
          fr: "Les photos, vidéos et données de compte se trouvent sur des serveurs cloud situés à Singapour, ce qui signifie que les informations peuvent être stockées et traitées hors du Vietnam. La politique de confidentialité de Cubi nomme chaque prestataire concerné et ce dont il s'occupe.",
          de: "Fotos, Videos und Kontodaten liegen auf Cloud-Servern in Singapur, das heißt, die Informationen können außerhalb Vietnams gespeichert und verarbeitet werden. Cubis Datenschutzerklärung nennt jeden beteiligten Anbieter und wofür er zuständig ist.",
        },
      },
    ],
  },
];

/** The URL slug this guide uses in a language (English slug as fallback). */
export function guideSlug(guide: Guide, locale: Locale): string {
  return t(guide.slug, locale);
}

export function guideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => locales.some((l) => guideSlug(g, l) === slug));
}
