import type { SiteContent } from "./types";

/**
 * Localized site content (Vietnamese primary, English mirror).
 * Marketing = emotional storytelling; legal docs kept accurate + complete for
 * BOTH App Store and Google Play (incl. web-reachable account deletion).
 * Effective date: 2026-06-09.
 */
export const siteContent: SiteContent = {
  "marketing": {
    "tagline": {
      "chosen": {
        "vi": "Bé lớn từng ngày, thương đầy vòng tay.",
        "en": "Tiny moments, kept forever.",
        "fr": "Les petits jours, gardés pour toujours.",
        "de": "Jeder Tag zählt — für immer erzählt."
      },
      "alternatives": [
        {
          "vi": "Bé lớn từng ngày, thương đầy vòng tay.",
          "en": "Tiny moments, kept forever.",
          "note": "Proven, locked tagline. Van lung ngay/day, nhip 4-4 can doi, doi vong tay voi tung ngay. Recommended — keep this as the page spine."
        },
        {
          "vi": "Giữ ngày bé thơ, trước khi vụt qua.",
          "en": "Hold these small days before they slip past.",
          "note": "Leans hardest into the fleeting-time ache (tho/qua). Beautiful and true, but a touch melancholic for a hero; better grafted into body copy and the final CTA."
        },
        {
          "vi": "Bé ở rất gần, dù nhà rất xa.",
          "en": "Close to the baby, however far the miles.",
          "note": "Bam sat throughline khoang cach (gan/xa doi nhau dep), but thieu van chan va am kieu nhat ky; hop lam sub/pullQuote hon tagline."
        },
        {
          "vi": "Mỗi ngày bé lớn, cả nhà thấy ngay.",
          "en": "Every day baby grows, the whole family knows.",
          "note": "The welcome-screen line already shipping in-app (ngay/ngay, grows/knows). Strong van, ties page to the live product, but more functional than tender."
        }
      ]
    },
    "hero": {
      "eyebrow": {
        "vi": "Nhật ký của bé, cho cả nhà",
        "en": "A baby diary for the whole family",
        "fr": "Le journal de bébé, pour toute la famille",
        "de": "Das Babytagebuch für die ganze Familie"
      },
      "headline": {
        "vi": "Cùng nhìn bé lớn lên mỗi ngày",
        "en": "Watch the baby grow, together",
        "fr": "Voir bébé grandir, tous ensemble",
        "de": "Gemeinsam sehen, wie das Baby wächst"
      },
      "sub": {
        "vi": "Cubi giữ lại những khoảnh khắc bé cười, bé tập đi, đôi bàn tay nhỏ xíu, rồi đưa bé về ngay màn hình của cả nhà mỗi ngày. Hôm nay bé đã khác hôm qua, và ông bà ở xa vẫn thấy cháu lớn lên từng chút một.",
        "en": "Cubi keeps the little moments — the first smile, the tiny hand — and brings the baby's latest photo to the home screen each day. Today's baby is already different from yesterday's, and even the family far away watches the little one grow.",
        "fr": "Cubi garde les tout petits instants — le premier sourire, la petite main — et amène chaque jour la dernière photo du bébé sur l'écran d'accueil de la famille. Le bébé d'aujourd'hui n'est déjà plus celui d'hier, et même les proches les plus éloignés le voient grandir.",
        "de": "Cubi bewahrt die kleinen Momente — das erste Lächeln, die winzige Hand — und bringt das neueste Foto des Babys jeden Tag auf den Homescreen der Familie. Das Baby von heute ist schon nicht mehr das von gestern, und auch die Familie in der Ferne sieht das Kleine wachsen."
      },
      "subShort": {
        "vi": "Cubi giữ lại từng ngày bé lớn, rồi đưa bé về ngay màn hình của cả nhà — để ông bà ở xa vẫn thấy cháu mỗi ngày.",
        "en": "Cubi keeps every day your baby grows and brings them to the whole family's home screen — so faraway grandparents see the little one each day.",
        "fr": "Cubi garde chaque jour où votre bébé grandit et l'amène sur l'écran d'accueil de toute la famille — pour que les grands-parents éloignés le voient chaque jour.",
        "de": "Cubi bewahrt jeden Tag, an dem dein Baby wächst, und bringt es auf den Homescreen der ganzen Familie — damit weit entfernte Großeltern das Kleine jeden Tag sehen."
      },
      "primaryCta": {
        "vi": "Tải Cubi",
        "en": "Download Cubi",
        "fr": "Télécharger Cubi",
        "de": "Cubi herunterladen"
      },
      "secondaryCta": {
        "vi": "Xem Cubi hoạt động thế nào",
        "en": "See how Cubi works",
        "fr": "Voir comment Cubi fonctionne",
        "de": "Sieh dir an, wie Cubi funktioniert"
      }
    },
    "problem": {
      "title": {
        "vi": "Bé lớn nhanh quá, mà ông bà thì ở xa",
        "en": "The baby grows so fast, and family is far away",
        "fr": "Bébé grandit si vite, et la famille est si loin",
        "de": "Das Baby wächst so schnell — und die Familie ist so weit weg"
      },
      "body": {
        "vi": "Tấm ảnh bé cười nằm lẫn trong hàng nghìn tấm khác, đoạn video bé tập đi trôi mất giữa những dòng tin ồn ào. Ông bà ở quê ngóng từng tấm ảnh cháu, người thân ở xa chỉ thỉnh thoảng mới thấy bé một lần. Cubi là một nơi yên tĩnh, ấm áp, chỉ dành cho cả nhà, nơi từng ngày bé thơ được giữ lại trước khi trôi qua, và ai thương bé cũng được nhìn thấy.",
        "en": "The photo of that first smile gets buried under thousands of others, the video of those first steps drifts away in noisy feeds. Grandparents wait for each new photo, family far away sees the baby only now and then. Cubi is one quiet, warm place just for the family — where these small days are kept before they slip past, and everyone who loves the little one gets to see.",
        "fr": "La photo du premier sourire se perd sous des milliers d'autres, la vidéo des premiers pas s'efface dans le bruit des fils d'actualité. Les grands-parents guettent chaque nouvelle photo, et les proches éloignés ne voient le bébé que de temps en temps. Cubi est un endroit calme et chaleureux, rien que pour la famille — où ces petits jours sont gardés avant de s'envoler, et où tous ceux qui aiment le petit peuvent le voir.",
        "de": "Das Foto vom ersten Lächeln verschwindet unter tausend anderen, das Video der ersten Schritte geht im Lärm der Feeds unter. Großeltern warten auf jedes neue Bild, und wer weit weg wohnt, sieht das Baby nur ab und zu. Cubi ist ein stiller, warmer Ort nur für die Familie — hier werden diese kleinen Tage bewahrt, bevor sie vorbeiziehen, und alle, die das Kleine lieben, dürfen zusehen."
      }
    },
    "features": [
      {
        "icon": "journal",
        "title": {
          "vi": "Cuốn nhật ký lớn cùng bé",
          "en": "A diary that grows with the baby",
          "fr": "Un journal qui grandit avec bébé",
          "de": "Ein Tagebuch, das mit dem Baby wächst"
        },
        "body": {
          "vi": "Mỗi tấm ảnh, mỗi đoạn video ngắn, mỗi dòng mẹ viết là một trang trong nhật ký của bé. Mẹ lưu lại khoảnh khắc bé cười, bé lẫy, bé gọi tiếng đầu tiên, để theo thời gian những trang ấy thành cả một câu chuyện bé thơ cho cả nhà mở lại.",
          "en": "Each photo, each short video, each line you write becomes a page in the baby's diary. Keep the first laugh, the first roll, the first word — and over time those pages become a whole story of the early days the family can open again.",
          "fr": "Chaque photo, chaque petite vidéo, chaque ligne écrite devient une page du journal de bébé. Gardez le premier rire, le premier retournement, le premier mot — et peu à peu ces pages forment toute l'histoire des premiers jours, que la famille pourra rouvrir.",
          "de": "Jedes Foto, jedes kurze Video, jede Zeile wird zu einer Seite im Tagebuch des Babys. Halte das erste Lachen fest, das erste Drehen, das erste Wort — und mit der Zeit erzählen diese Seiten die ganze Geschichte der ersten Tage, die die Familie wieder aufschlagen kann."
        }
      },
      {
        "icon": "widget",
        "title": {
          "vi": "Bé trên màn hình chính, suốt cả ngày",
          "en": "The baby on the home screen, all day",
          "fr": "Bébé sur l'écran d'accueil, toute la journée",
          "de": "Das Baby auf dem Homescreen, den ganzen Tag"
        },
        "body": {
          "vi": "Widget trên màn hình chính hiện tấm ảnh mới nhất của bé cùng số tuổi của bé, và lặng lẽ đổi theo thời gian trong ngày. Mẹ mở điện thoại lên là thấy bé, ông bà ở xa mở máy lên cũng thấy cháu, trên cả iPhone và Android.",
          "en": "The home-screen widget shows the baby's latest photo and the baby's age, quietly changing through the day. Open your phone and the baby is there; grandparents far away open theirs and the little one is there too — on both iPhone and Android.",
          "fr": "Le widget de l'écran d'accueil montre la dernière photo du bébé et son âge, et change doucement au fil de la journée. Vous allumez votre téléphone : bébé est là. Les grands-parents allument le leur : le petit y est aussi — sur iPhone comme sur Android.",
          "de": "Das Homescreen-Widget zeigt das neueste Foto des Babys und sein Alter und wechselt still im Lauf des Tages. Du schaltest dein Handy ein — da ist das Baby. Die Großeltern schalten ihres ein — da ist das Kleine auch. Auf iPhone und Android."
        }
      },
      {
        "icon": "invite",
        "title": {
          "vi": "Mời cả nhà bằng một mã",
          "en": "Invite the whole family with one code",
          "fr": "Invitez toute la famille avec un seul code",
          "de": "Lade die ganze Familie mit einem Code ein"
        },
        "body": {
          "vi": "Gửi một mã hoặc một đường link, ông bà cô dì chú bác chỉ cần mở ra là cùng xem bé lớn. Không cần lập tài khoản, không cần mật khẩu, không có gì rườm rà, ông bà ngại công nghệ cũng vào được nhẹ nhàng nhé.",
          "en": "Share a code or a link, and grandparents, aunts, and uncles just open it to watch the baby grow. No account, no password, nothing complicated — even the family who finds phones fiddly can come in gently.",
          "fr": "Partagez un code ou un lien : les grands-parents, les tantes et les oncles n'ont qu'à l'ouvrir pour voir bébé grandir. Sans compte, sans mot de passe, sans rien de compliqué — même ceux qui trouvent les téléphones difficiles entrent sans peine.",
          "de": "Teile einen Code oder einen Link — Großeltern, Tanten und Onkel öffnen ihn einfach und sehen das Baby wachsen. Kein Konto, kein Passwort, nichts Kompliziertes: Auch wer sich mit Handys schwertut, findet mühelos hinein."
        }
      },
      {
        "icon": "reaction",
        "title": {
          "vi": "Một trái tim, thay cho lời bình",
          "en": "A heart, instead of a reply",
          "fr": "Un cœur, plutôt qu'une réponse",
          "de": "Ein Herz statt einer Antwort"
        },
        "body": {
          "vi": "Cả nhà thả một emoji khi thấy bé đáng yêu, chỉ vậy thôi. Không có ô bình luận, không có áp lực phải trả lời. Một trái tim của bà ngoại đôi khi đã đủ ấm cho cả ngày của mẹ rồi.",
          "en": "The family taps a single emoji when the baby melts their heart — that's all. There are no comments, no pressure to reply. One heart from grandma is sometimes warm enough for the whole day.",
          "fr": "La famille touche un simple emoji quand bébé lui fait fondre le cœur — c'est tout. Pas de commentaires, aucune obligation de répondre. Un cœur de mamie suffit parfois à réchauffer toute la journée.",
          "de": "Die Familie tippt ein einziges Emoji, wenn das Baby ihr das Herz aufgehen lässt — mehr nicht. Keine Kommentare, kein Zwang zu antworten. Ein Herz von der Oma wärmt manchmal den ganzen Tag."
        }
      },
      {
        "icon": "privacy",
        "title": {
          "vi": "Bé chỉ thuộc về cả nhà",
          "en": "The baby belongs to the family alone",
          "fr": "Bébé n'appartient qu'à sa famille",
          "de": "Das Baby gehört allein der Familie"
        },
        "body": {
          "vi": "Không có bảng tin công khai, không người lạ, không người theo dõi, không quảng cáo. Mẹ chọn ai được nhìn thấy từng khoảnh khắc của bé. Đây là một góc riêng, yên tĩnh, chỉ của những người thương bé thật lòng.",
          "en": "No public feed, no strangers, no followers, no ads. You choose who sees each moment of the baby. This is a quiet, private corner just for the people who truly love the little one.",
          "fr": "Aucun fil public, aucun inconnu, aucun abonné, aucune publicité. C'est vous qui choisissez qui voit chaque instant du bébé. Un coin calme et privé, réservé à ceux qui aiment vraiment le petit.",
          "de": "Kein öffentlicher Feed, keine Fremden, keine Follower, keine Werbung. Du entscheidest, wer jeden Moment des Babys sieht. Eine stille, private Ecke nur für die Menschen, die das Kleine wirklich lieben."
        }
      },
      {
        "icon": "age",
        "title": {
          "vi": "Tuổi của bé tự hiện lên",
          "en": "The baby's age appears on its own",
          "fr": "L'âge de bébé s'affiche tout seul",
          "de": "Das Alter des Babys erscheint von allein"
        },
        "body": {
          "vi": "Bé được sáu tháng mười hai ngày, Cubi tự tính và hiện tuổi của bé, không cần mẹ nhớ. Mỗi khoảnh khắc xếp theo một dòng thời gian dịu dàng, để cả nhà thấy bé lớn lên từng chút một.",
          "en": "Six months and twelve days old — Cubi works out the baby's age and shows it on its own, so you never have to count. Each moment sits along a gentle timeline, so the family can see the little one growing bit by bit.",
          "fr": "Six mois et douze jours — Cubi calcule l'âge du bébé et l'affiche tout seul, vous n'avez jamais à compter. Chaque instant se range sur une douce ligne du temps, où la famille voit le petit grandir peu à peu.",
          "de": "Sechs Monate und zwölf Tage — Cubi rechnet das Alter des Babys aus und zeigt es von allein, du musst nie nachzählen. Jeder Moment reiht sich auf einer sanften Zeitlinie ein, auf der die Familie das Kleine Stück für Stück wachsen sieht."
        }
      },
      {
        "icon": "film",
        "title": {
          "vi": "Kỉ niệm thành thước phim có nhạc",
          "en": "Memories become a little film",
          "fr": "Les souvenirs deviennent un petit film",
          "de": "Erinnerungen werden zu einem kleinen Film"
        },
        "body": {
          "vi": "Chọn 5–30 ảnh trong nhật ký và một mẫu phim. Cubi ghép thành video có nhạc để bố mẹ lưu về máy hoặc gửi cho cả nhà.",
          "en": "Pick 5–30 diary photos and a style. Cubi turns them into a keepsake video with music to save or share with the family.",
          "fr": "Choisissez de 5 à 30 photos du journal et un style. Cubi en fait une vidéo souvenir en musique, à garder ou à partager avec la famille.",
          "de": "Wähle 5 bis 30 Fotos aus dem Tagebuch und einen Stil. Cubi macht daraus ein Erinnerungsvideo mit Musik — zum Behalten oder Teilen mit der Familie."
        }
      },
      {
        "icon": "family",
        "title": {
          "vi": "Một nhà, mấy bé cũng vừa",
          "en": "One family, every little one",
          "fr": "Une famille, tous ses petits",
          "de": "Eine Familie, alle Kleinen"
        },
        "body": {
          "vi": "Theo dõi nhiều bé trong một dòng nhật ký gọn gàng. Mỗi mã mời có thể mở đúng nhật ký của một hoặc nhiều bé cho người thân.",
          "en": "Follow more than one child in one calm timeline. Each invitation can open exactly one or several children's diaries for family.",
          "fr": "Suivez plusieurs enfants dans une même ligne du temps paisible. Chaque invitation peut ouvrir le journal d'un seul enfant ou de plusieurs.",
          "de": "Begleite mehrere Kinder in einer ruhigen Zeitlinie. Jede Einladung kann genau ein Tagebuch öffnen — oder mehrere."
        }
      },
      {
        "icon": "measure",
        "title": {
          "vi": "Theo dõi hành trình lớn lên",
          "en": "Follow every growing step",
          "fr": "Suivez chaque étape de sa croissance",
          "de": "Begleite jeden Wachstumsschritt"
        },
        "body": {
          "vi": "Lưu cân nặng, chiều cao và những điều bé đang thích bên cạnh ảnh, video và các cột mốc tuổi của bé.",
          "en": "Keep height, weight and the things your child loves beside their photos, videos and age milestones.",
          "fr": "Gardez la taille, le poids et ce que votre enfant aime, à côté de ses photos, de ses vidéos et de ses âges marquants.",
          "de": "Halte Größe, Gewicht und die Lieblingsdinge deines Kindes neben seinen Fotos, Videos und Meilensteinen fest."
        }
      }
    ],
    "howItWorks": [
      {
        "title": {
          "vi": "Mẹ lưu một khoảnh khắc",
          "en": "Mom keeps a moment",
          "fr": "Maman garde un instant",
          "de": "Mama hält einen Moment fest"
        },
        "body": {
          "vi": "Một tấm ảnh bé cười, một đoạn video ngắn, một dòng mẹ muốn nhớ, mẹ lưu lại trong vài giây thôi.",
          "en": "A photo of the baby smiling, a short video, a line worth remembering — keep it in just a few seconds.",
          "fr": "Une photo de bébé qui sourit, une courte vidéo, une phrase à ne pas oublier — c'est gardé en quelques secondes.",
          "de": "Ein Foto vom lachenden Baby, ein kurzes Video, ein Satz, den man behalten will — in wenigen Sekunden festgehalten."
        }
      },
      {
        "title": {
          "vi": "Mời cả nhà cùng vào",
          "en": "Invite the whole family in",
          "fr": "Faites entrer toute la famille",
          "de": "Hol die ganze Familie dazu"
        },
        "body": {
          "vi": "Gửi mã hoặc link cho ông bà, người thân ở xa. Mọi người mở ra là vào được, không cần tài khoản nhé.",
          "en": "Send a code or link to grandparents and family far away. They open it and they are in — no account needed.",
          "fr": "Envoyez un code ou un lien aux grands-parents et aux proches éloignés. Ils l'ouvrent et les voilà entrés — sans créer de compte.",
          "de": "Schick den Großeltern und der Familie in der Ferne einen Code oder Link. Sie öffnen ihn und sind dabei — ganz ohne Konto."
        }
      },
      {
        "title": {
          "vi": "Cả nhà cùng nhìn bé lớn",
          "en": "The family watches the baby grow",
          "fr": "La famille voit bébé grandir",
          "de": "Die Familie sieht das Baby wachsen"
        },
        "body": {
          "vi": "Ảnh mới nhất của bé hiện ngay trên màn hình chính của cả nhà, đổi theo từng ngày. Bé ở xa mà như ở rất gần.",
          "en": "The baby's latest photo shows right on everyone's home screen, changing day by day. The baby feels close, however far apart you are.",
          "fr": "La dernière photo du bébé s'affiche sur l'écran d'accueil de chacun et change jour après jour. Bébé reste tout près, même quand les kilomètres sont nombreux.",
          "de": "Das neueste Foto des Babys erscheint auf dem Homescreen aller und wechselt Tag für Tag. Das Baby bleibt nah, wie weit ihr auch auseinander seid."
        }
      }
    ],
    "philosophy": {
      "eyebrow": {
        "vi": "Vì sao có Cubi",
        "en": "Why Cubi exists",
        "fr": "Pourquoi Cubi existe",
        "de": "Warum es Cubi gibt"
      },
      "title": {
        "vi": "Một góc yên tĩnh, không phải một bảng tin",
        "en": "A quiet space, not a feed",
        "fr": "Un espace calme, pas un fil d'actualité",
        "de": "Ein stiller Raum, kein Feed"
      },
      "body": {
        "vi": "Cubi sinh ra cho những ngày bé lớn quá nhanh, và cho những người thương bé ở quá xa. Ở đây không có lượt thích để chạy theo, không có bình luận để phải trả lời, chỉ có một trái tim nhỏ gửi cho bé. Cubi lùi lại thật khẽ, để cả nhà cảm thấy thân thuộc và riêng tư, chứ không thấy mình đang bị nhìn ngó. Tất cả những gì còn lại, là bé và những người thương bé.",
        "en": "Cubi was made for days when the baby grows too fast, and for the people who love the little one from too far away. There are no likes to chase, no comments to answer — just one small heart sent to the baby. Cubi steps back quietly, so the family feels close and private, never watched. What is left is simply the baby, and the people who love them.",
        "fr": "Cubi est né pour ces jours où bébé grandit trop vite, et pour ceux qui l'aiment de trop loin. Pas de likes à courir après, pas de commentaires à honorer — juste un petit cœur envoyé au bébé. Cubi s'efface doucement, pour que la famille se sente proche et à l'abri, jamais observée. Ne restent que le bébé, et ceux qui l'aiment.",
        "de": "Cubi ist für die Tage gemacht, an denen das Baby zu schnell wächst — und für die Menschen, die es aus zu großer Ferne lieben. Keine Likes, denen man nachjagt, keine Kommentare, die beantwortet werden wollen — nur ein kleines Herz für das Baby. Cubi tritt leise zurück, damit sich die Familie nah und geborgen fühlt und nie beobachtet. Übrig bleiben einfach das Baby und die Menschen, die es lieben."
      },
      "pullQuote": {
        "vi": "Bé ở xa mà như ở rất gần.",
        "en": "Far away, yet close enough to hold.",
        "fr": "Si loin, et pourtant à portée de bras.",
        "de": "Weit weg — und doch zum Greifen nah."
      }
    },
    "audience": {
      "title": {
        "vi": "Dành cho cả nhà thương bé",
        "en": "For the whole family who loves the baby",
        "fr": "Pour toute la famille qui aime bébé",
        "de": "Für die ganze Familie, die das Baby liebt"
      },
      "parents": {
        "vi": "Bố mẹ trẻ muốn giữ lại từng ngày bé lớn ở một nơi ấm áp, riêng tư, thay vì để ảnh của bé trôi đi giữa những dòng tin ồn ào.",
        "en": "Young parents who want to keep every day of the baby growing up somewhere warm and private — instead of letting the baby's photos drift away in noisy feeds.",
        "fr": "Les jeunes parents qui veulent garder chaque jour de bébé dans un endroit chaleureux et privé — plutôt que de laisser ses photos se perdre dans le bruit des réseaux.",
        "de": "Junge Eltern, die jeden Tag des Babys an einem warmen, privaten Ort bewahren wollen — statt seine Fotos im Lärm der Feeds verschwinden zu lassen."
      },
      "family": {
        "vi": "Ông bà, cô dì chú bác ở xa, ngóng từng tấm ảnh cháu. Chỉ cần mở Cubi là thấy bé lớn lên mỗi ngày, gần gũi như đang ở ngay bên cạnh.",
        "en": "Grandparents, aunts, and uncles far away, longing for each photo of the little one. They open Cubi and there the baby is, growing each day, close as if right beside them.",
        "fr": "Les grands-parents, les tantes et les oncles éloignés, qui attendent chaque photo du petit. Ils ouvrent Cubi et bébé est là, grandissant jour après jour, aussi proche que s'il était à côté d'eux.",
        "de": "Großeltern, Tanten und Onkel in der Ferne, die auf jedes Foto des Kleinen warten. Sie öffnen Cubi — und da ist das Baby, wächst Tag für Tag, so nah, als säße es neben ihnen."
      }
    },
    "privacy": {
      "title": {
        "vi": "Bé chỉ thuộc về cả nhà",
        "en": "The baby belongs to the family alone",
        "fr": "Bébé n'appartient qu'à sa famille",
        "de": "Das Baby gehört allein der Familie"
      },
      "body": {
        "vi": "Những khoảnh khắc của bé là của riêng cả nhà, không phải để ai cũng xem. Mẹ chọn ai được nhìn thấy bé, và chỉ những người mẹ mời mới vào được. Cubi giữ góc riêng ấy yên tĩnh và ấm áp, để mẹ thấy an tâm mỗi lần lưu lại một khoảnh khắc của bé.",
        "en": "The baby's moments are the family's alone, not for everyone to see. You choose who gets to see the baby, and only the people you invite can come in. Cubi keeps that private corner quiet and warm, so you feel at ease every time you keep a moment of the little one.",
        "fr": "Les instants du bébé n'appartiennent qu'à sa famille, pas au monde entier. Vous choisissez qui peut le voir, et seules les personnes invitées peuvent entrer. Cubi garde ce coin privé calme et chaleureux, pour que vous soyez tranquille chaque fois que vous gardez un instant du petit.",
        "de": "Die Momente des Babys gehören allein der Familie, nicht aller Welt. Du entscheidest, wer das Baby sehen darf, und nur eingeladene Menschen kommen herein. Cubi hält diese private Ecke still und warm, damit du jedes Mal ruhig bist, wenn du einen Moment des Kleinen bewahrst."
      },
      "bullets": [
        {
          "vi": "Không có bảng tin công khai, không người lạ, không người theo dõi.",
          "en": "No public feed, no strangers, no followers.",
          "fr": "Aucun fil public, aucun inconnu, aucun abonné.",
          "de": "Kein öffentlicher Feed, keine Fremden, keine Follower."
        },
        {
          "vi": "Không quảng cáo xen vào khoảnh khắc của bé.",
          "en": "No ads in the baby's moments.",
          "fr": "Aucune publicité dans les instants du bébé.",
          "de": "Keine Werbung zwischen den Momenten des Babys."
        },
        {
          "vi": "Mẹ chọn ai được nhìn thấy từng khoảnh khắc của bé.",
          "en": "You choose who sees each of the baby's moments.",
          "fr": "Vous choisissez qui voit chaque instant du bébé.",
          "de": "Du entscheidest, wer jeden Moment des Babys sieht."
        },
        {
          "vi": "Bé chỉ thuộc về những người thương bé thật lòng.",
          "en": "The baby belongs only to the people who truly love them.",
          "fr": "Bébé n'appartient qu'à ceux qui l'aiment vraiment.",
          "de": "Das Baby gehört nur den Menschen, die es wirklich lieben."
        },
        {
          "vi": "Làm tại Việt Nam, cho cả nhà người Việt.",
          "en": "Made in Vietnam, for Vietnamese families.",
          "fr": "Fait au Vietnam, d'abord pour les familles vietnamiennes.",
          "de": "Gemacht in Vietnam, zuerst für vietnamesische Familien."
        }
      ]
    },
    "faq": [
      {
        "q": {
          "vi": "Cubi có miễn phí không?",
          "en": "Is Cubi free?",
          "fr": "Cubi est-il gratuit ?",
          "de": "Ist Cubi kostenlos?"
        },
        "a": {
          "vi": "Cả nhà dùng Cubi miễn phí. Sau này có thể có thêm một gói trả phí với vài điều dễ thương hơn, nhưng việc lưu giữ và cùng nhau ngắm bé lớn thì luôn dành cho cả nhà.",
          "en": "The whole family uses Cubi for free. A paid tier with a few lovelier extras may come later, but keeping moments and watching the baby grow together is always there for the family.",
          "fr": "Toute la famille utilise Cubi gratuitement. Une formule payante avec quelques extras plus jolis viendra peut-être plus tard, mais garder les instants et voir bébé grandir ensemble restera toujours accessible.",
          "de": "Die ganze Familie nutzt Cubi kostenlos. Später kommt vielleicht ein bezahltes Angebot mit ein paar schöneren Extras dazu — Momente bewahren und das Baby gemeinsam wachsen sehen bleibt der Familie aber immer erhalten."
        }
      },
      {
        "q": {
          "vi": "Ông bà có cần lập tài khoản không?",
          "en": "Do grandparents need an account?",
          "fr": "Les grands-parents doivent-ils créer un compte ?",
          "de": "Brauchen Großeltern ein Konto?"
        },
        "a": {
          "vi": "Không cần đâu. Ông bà chỉ cần mở mã hoặc link mẹ gửi là vào xem bé được ngay, không tài khoản, không mật khẩu, nhẹ nhàng thôi nhé.",
          "en": "Not at all. Grandparents just open the code or link you send and they can see the baby right away — no account, no password, kept simple.",
          "fr": "Pas du tout. Les grands-parents ouvrent simplement le code ou le lien que vous envoyez et voient bébé aussitôt — sans compte, sans mot de passe, tout simplement.",
          "de": "Überhaupt nicht. Die Großeltern öffnen einfach den Code oder Link, den du schickst, und sehen das Baby sofort — ohne Konto, ohne Passwort, ganz einfach."
        }
      },
      {
        "q": {
          "vi": "Ông bà tham gia bằng cách nào?",
          "en": "How does the family join?",
          "fr": "Comment la famille rejoint-elle ?",
          "de": "Wie kommt die Familie dazu?"
        },
        "a": {
          "vi": "Mẹ gửi cho ông bà một mã hoặc một đường link qua Zalo, tin nhắn, cách nào cũng được. Ông bà mở ra, làm theo vài bước thật đơn giản, là cùng xem bé với cả nhà.",
          "en": "You send grandparents a code or a link over Zalo, messages, however you like. They open it, follow a few simple steps, and they are watching the baby with the rest of the family.",
          "fr": "Vous envoyez aux grands-parents un code ou un lien par messagerie, comme vous voulez. Ils l'ouvrent, suivent quelques étapes simples, et les voilà à regarder bébé avec le reste de la famille.",
          "de": "Du schickst den Großeltern einen Code oder Link — per Nachricht, wie es dir am liebsten ist. Sie öffnen ihn, folgen ein paar einfachen Schritten und schauen dem Baby mit der übrigen Familie zu."
        }
      },
      {
        "q": {
          "vi": "Cubi có phải chỉ riêng cho nhà mình không?",
          "en": "Is Cubi just for our family?",
          "fr": "Cubi est-il réservé à notre famille ?",
          "de": "Ist Cubi nur für unsere Familie?"
        },
        "a": {
          "vi": "Đúng vậy. Chỉ những người mẹ mời mới thấy được bé. Không có người lạ, không có bảng tin công khai, đây là một góc riêng chỉ của cả nhà.",
          "en": "Yes. Only the people you invite can see the baby. No strangers, no public feed — this is a private corner just for the family.",
          "fr": "Oui. Seules les personnes que vous invitez peuvent voir bébé. Aucun inconnu, aucun fil public — c'est un coin privé, rien que pour la famille.",
          "de": "Ja. Nur die Menschen, die ihr einladet, sehen das Baby. Keine Fremden, kein öffentlicher Feed — eine private Ecke nur für die Familie."
        }
      },
      {
        "q": {
          "vi": "Cả nhà ở xa nhau có dùng được không?",
          "en": "Does it work when the family is far apart?",
          "fr": "Est-ce que ça marche quand la famille est loin ?",
          "de": "Funktioniert das auch, wenn die Familie weit weg wohnt?"
        },
        "a": {
          "vi": "Được chứ, đó chính là điều Cubi làm tốt nhất. Ông bà ở quê, người thân ở xa đều thấy ảnh mới nhất của bé ngay trên màn hình chính mỗi ngày, gần gũi như đang ở bên cạnh.",
          "en": "Yes — that is what Cubi does best. Grandparents and family far away all see the baby's latest photo right on the home screen each day, close as if they were beside you.",
          "fr": "Oui — c'est justement ce que Cubi fait de mieux. Les grands-parents et les proches éloignés voient chaque jour la dernière photo du bébé sur leur écran d'accueil, comme s'ils étaient à côté de vous.",
          "de": "Ja — genau dafür ist Cubi da. Großeltern und Angehörige in der Ferne sehen jeden Tag das neueste Foto des Babys direkt auf dem Homescreen, so nah, als wären sie bei euch."
        }
      },
      {
        "q": {
          "vi": "Cubi dùng được trên iPhone và Android chứ?",
          "en": "Does Cubi work on iPhone and Android?",
          "fr": "Cubi fonctionne-t-il sur iPhone et Android ?",
          "de": "Läuft Cubi auf iPhone und Android?"
        },
        "a": {
          "vi": "Cả hai đều dùng được, và widget cũng hiện trên màn hình chính của cả hai. Trong nhà ai dùng máy gì cũng cùng ngắm bé được nhé.",
          "en": "Both work, and the widget shows on the home screen of each. Whatever phone someone in the family uses, they can watch the baby too.",
          "fr": "Les deux fonctionnent, et le widget s'affiche sur l'écran d'accueil de chacun. Quel que soit le téléphone d'un membre de la famille, il peut lui aussi voir bébé.",
          "de": "Beides läuft, und das Widget erscheint auf beiden Homescreens. Egal, welches Handy jemand in der Familie hat — mitschauen kann er trotzdem."
        }
      }
    ],
    "finalCta": {
      "title": {
        "vi": "Đưa bé về gần cả nhà, từ hôm nay",
        "en": "Bring the baby close to the whole family, starting today",
        "fr": "Rapprochez bébé de toute la famille, dès aujourd'hui",
        "de": "Hol das Baby ab heute näher zur ganzen Familie"
      },
      "sub": {
        "vi": "Hôm nay bé đã khác hôm qua, và ông bà ở xa đang ngóng từng tấm ảnh cháu. Tải Cubi, lưu lại khoảnh khắc đầu tiên của bé, rồi mời cả nhà cùng xem nhé.",
        "en": "Today's baby is already different from yesterday's, and family far away is longing for each new photo. Download Cubi, keep the baby's first moment, and invite the whole family to watch.",
        "fr": "Le bébé d'aujourd'hui n'est déjà plus celui d'hier, et les proches éloignés attendent chaque nouvelle photo. Téléchargez Cubi, gardez son premier instant, et invitez toute la famille à le voir grandir.",
        "de": "Das Baby von heute ist schon nicht mehr das von gestern, und die Familie in der Ferne wartet auf jedes neue Foto. Lade Cubi herunter, halte den ersten Moment fest und lade die ganze Familie zum Zusehen ein."
      },
      "cta": {
        "vi": "Tải Cubi ngay",
        "en": "Download Cubi",
        "fr": "Télécharger Cubi",
        "de": "Cubi herunterladen"
      }
    },
    "footerTagline": {
      "vi": "Cubi — bé lớn từng ngày, thương đầy vòng tay.",
      "en": "Cubi — tiny moments, kept forever.",
      "fr": "Cubi — les petits jours, gardés pour toujours.",
      "de": "Cubi — jeder Tag zählt, für immer erzählt."
    }
  },
  "terms": {
    "title": {
      "vi": "Điều khoản sử dụng",
      "en": "Terms of Service",
      "fr": "Conditions d'utilisation",
      "de": "Nutzungsbedingungen"
    },
    "intro": {
      "vi": "Cubi là một cuốn nhật ký riêng tư về bé, dành cho cả nhà. Đây là những điều khoản khi bố mẹ và người thân dùng Cubi trên cubi.family cùng ứng dụng iOS và Android. Cubi được làm ra tại Việt Nam. Khi bố mẹ mở Cubi lên và lưu khoảnh khắc đầu tiên, tức là cả nhà đã đồng ý với những điều khoản này. Hiệu lực từ ngày 9 tháng 6, 2026.",
      "en": "Cubi is a private diary of a child, kept for the whole family. These are the terms for using Cubi on cubi.family and the iOS and Android apps. Cubi is made in Vietnam. When you open Cubi and save your first moment, you agree to these terms. Effective June 9, 2026.",
      "fr": "Cubi est le journal privé d'un enfant, tenu pour toute la famille. Voici les conditions d'utilisation de Cubi sur cubi.family et dans les applications iOS et Android. Cubi est fait au Vietnam. En ouvrant Cubi et en enregistrant votre premier instant, vous acceptez ces conditions. En vigueur le 9 juin 2026.",
      "de": "Cubi ist das private Tagebuch eines Kindes, geführt für die ganze Familie. Dies sind die Bedingungen für die Nutzung von Cubi auf cubi.family sowie in den iOS- und Android-Apps. Cubi wird in Vietnam gemacht. Wenn du Cubi öffnest und deinen ersten Moment speicherst, stimmst du diesen Bedingungen zu. Gültig ab 9. Juni 2026."
    },
    "sections": [
      {
        "heading": {
          "vi": "1. Đồng ý với điều khoản",
          "en": "1. Accepting these terms",
          "fr": "1. Acceptation des conditions",
          "de": "1. Zustimmung zu diesen Bedingungen"
        },
        "body": {
          "vi": "Cubi là một không gian riêng để lưu lại quá trình lớn lên của bé: tấm ảnh, đoạn video, dòng chú thích, chia sẻ với những người mà bố mẹ mời vào. Cubi do đội ngũ Cubi vận hành, làm ra tại Việt Nam, với tên thương hiệu là Cubi.\n\nKhi bố mẹ và người thân dùng Cubi, dù là trên trang cubi.family hay trong ứng dụng iOS và Android, cả nhà đồng ý với những điều khoản này. Nếu có chỗ nào trong đây mà cả nhà chưa thấy thoải mái, bố mẹ cứ viết cho Cubi qua hello@cubi.family để cùng trao đổi nhé.\n\nĐiều khoản này đi cùng Chính sách quyền riêng tư của Cubi. Hai văn bản đọc cùng nhau sẽ cho cả nhà bức tranh đầy đủ.",
          "en": "Cubi is a quiet space to keep a child growing up: the photos, the videos, a line of caption, shared with the people you invite in. Cubi is run by the Cubi team, made in Vietnam, under the brand name Cubi.\n\nWhen you use Cubi, whether on cubi.family or in the iOS and Android apps, you agree to these terms. If anything here does not sit right with you, write to us at hello@cubi.family and we will talk it through.\n\nThese terms go hand in hand with the Cubi Privacy Policy. Read together, they give you the full picture.",
          "fr": "Cubi est un espace calme pour garder les jours où un enfant grandit : les photos, les vidéos, une ligne de légende, partagées avec les personnes que vous invitez. Cubi est édité par l'équipe Cubi, au Vietnam, sous la marque Cubi.\n\nEn utilisant Cubi, sur cubi.family comme dans les applications iOS et Android, vous acceptez ces conditions. Si quelque chose ici ne vous convient pas, écrivez-nous à hello@cubi.family et nous en parlerons.\n\nCes conditions vont de pair avec la politique de confidentialité de Cubi. Lues ensemble, elles donnent le tableau complet.",
          "de": "Cubi ist ein stiller Ort, um die Tage zu bewahren, an denen ein Kind wächst: die Fotos, die Videos, eine Zeile Text, geteilt mit den Menschen, die ihr einladet. Cubi wird vom Cubi-Team in Vietnam unter der Marke Cubi betrieben.\n\nWenn du Cubi nutzt — auf cubi.family oder in den iOS- und Android-Apps — stimmst du diesen Bedingungen zu. Wenn dir etwas davon nicht behagt, schreib uns an hello@cubi.family, dann sprechen wir darüber.\n\nDiese Bedingungen gehören mit der Datenschutzerklärung von Cubi zusammen. Zusammen gelesen ergeben sie das ganze Bild."
        }
      },
      {
        "heading": {
          "vi": "2. Ai dùng được Cubi và tài khoản",
          "en": "2. Who can use Cubi, and accounts",
          "fr": "2. Qui peut utiliser Cubi, et les comptes",
          "de": "2. Wer Cubi nutzen kann, und Konten"
        },
        "body": {
          "vi": "Cubi do bố mẹ và người lớn trong nhà dùng. Mọi thông tin về bé là do bố mẹ nhập vào và do bố mẹ quản lý. Cubi không phải là ứng dụng để trẻ dưới 13 tuổi tự dùng.\n\nCó hai vai trò trong một cuốn nhật ký:\n\n- Người giữ nhật ký (bố hoặc mẹ): tạo hồ sơ của bé, lưu khoảnh khắc, mời người thân vào, và chọn ai được xem những gì. Ở phiên bản này, mỗi bé có một người giữ nhật ký.\n- Người thân (ông bà, cô dì chú bác, cả nhà): vào bằng mã mời 7 ký tự hoặc đường link mời, không cần đăng ký. Người thân đăng nhập ẩn danh, chỉ xem là chính, có thể thả cảm xúc bằng biểu tượng. Nếu muốn giữ chỗ của mình qua nhiều thiết bị, người thân có thể nâng cấp lên một tài khoản sau này.\n\nBố mẹ đăng nhập bằng Apple, Google, hoặc email kèm mật khẩu. Mong bố mẹ giữ thông tin đăng nhập an toàn, và cho Cubi biết nếu thấy có người lạ vào nhật ký của mình nhé.",
          "en": "Cubi is used by parents and adults in the family. Everything about a child is entered and controlled by the parent. Cubi is not an app for children under 13 to operate on their own.\n\nThere are two roles in a diary:\n\n- The diary keeper (a parent): creates the child's profile, saves moments, invites family, and chooses who sees what. In this version, each child has one diary keeper.\n- Family (grandparents, aunts and uncles, the whole family): join with a 7-character invite code or an invite link, with no sign-up. Family sign in anonymously, are view-only, and can react with an emoji. To keep their place across devices, family can upgrade to an account later.\n\nParents sign in with Apple, Google, or email and password. Please keep your sign-in details safe, and tell us if you ever see someone you do not recognise in your diary.",
          "fr": "Cubi est utilisé par les parents et les adultes de la famille. Tout ce qui concerne un enfant est saisi et contrôlé par le parent. Cubi n'est pas une application destinée à être utilisée seule par des enfants de moins de 13 ans.\n\nUn journal comporte deux rôles :\n\n- Le tenant du journal (un parent) : crée le profil de l'enfant, enregistre les instants, invite la famille et choisit qui voit quoi. Dans cette version, chaque enfant a un seul tenant de journal.\n- La famille (grands-parents, tantes et oncles, toute la famille) : rejoint avec un code d'invitation de 7 caractères ou un lien, sans inscription. Les proches se connectent de façon anonyme, en lecture seule, et peuvent réagir avec un emoji. Pour retrouver leur place sur plusieurs appareils, ils peuvent créer un compte plus tard.\n\nLes parents se connectent avec Apple, Google, ou une adresse e-mail et un mot de passe. Gardez vos identifiants en lieu sûr et prévenez-nous si vous voyez une personne inconnue dans votre journal.",
          "de": "Cubi wird von Eltern und Erwachsenen in der Familie genutzt. Alles, was ein Kind betrifft, wird von den Eltern eingetragen und gesteuert. Cubi ist keine App, die Kinder unter 13 Jahren allein bedienen sollen.\n\nIn einem Tagebuch gibt es zwei Rollen:\n\n- Die tagebuchführende Person (ein Elternteil): legt das Profil des Kindes an, speichert Momente, lädt die Familie ein und entscheidet, wer was sieht. In dieser Version hat jedes Kind eine tagebuchführende Person.\n- Die Familie (Großeltern, Tanten und Onkel, die ganze Familie): kommt mit einem 7-stelligen Einladungscode oder einem Einladungslink dazu, ohne Anmeldung. Sie melden sich anonym an, sehen nur mit und können mit einem Emoji reagieren. Wer seinen Platz auf mehreren Geräten behalten will, kann später ein Konto anlegen.\n\nEltern melden sich mit Apple, Google oder E-Mail und Passwort an. Bewahre deine Zugangsdaten sicher auf und sag uns Bescheid, wenn du jemanden in deinem Tagebuch siehst, den du nicht kennst."
        }
      },
      {
        "heading": {
          "vi": "3. Nội dung của cả nhà và quyền cho Cubi",
          "en": "3. Your content, and the license you give Cubi",
          "fr": "3. Vos contenus et la licence accordée à Cubi",
          "de": "3. Deine Inhalte und die Lizenz, die du Cubi gibst"
        },
        "body": {
          "vi": "Những tấm ảnh, đoạn video và dòng chú thích trong nhật ký là của cả nhà. Cubi không nhận đó là của mình.\n\nĐể Cubi có thể giữ và hiển thị những khoảnh khắc ấy, bố mẹ cho Cubi một quyền giới hạn: lưu trữ, xử lý, nén ảnh, và hiển thị nội dung cho đúng những người mà bố mẹ đã mời, với đúng phạm vi mà bố mẹ đã chọn. Quyền này chỉ vừa đủ để Cubi chạy được dịch vụ, không hơn.\n\nCubi không dùng nội dung của cả nhà để quảng cáo, không bán nội dung cho ai, và không có bảng tin công khai. Khi bố mẹ gỡ một khoảnh khắc hoặc xóa tài khoản, quyền này cũng chấm dứt, trừ những bản sao kỹ thuật tạm thời cần thời gian ngắn để dọn khỏi hệ thống.",
          "en": "The photos, videos and captions in a diary belong to the family. Cubi does not claim them as ours.\n\nSo that Cubi can keep and show those moments, you give us one limited license: to store, process, compress, and display the content to exactly the people you invite, within exactly the scope you choose. This license is only as much as Cubi needs to run the service, no more.\n\nCubi does not use your content for advertising, does not sell it to anyone, and has no public feed. When you remove a moment or delete your account, this license ends too, apart from short-lived technical copies that take a little time to clear from our systems.",
          "fr": "Les photos, vidéos et légendes d'un journal appartiennent à la famille. Cubi ne les revendique pas.\n\nPour que Cubi puisse conserver et afficher ces instants, vous nous accordez une licence limitée : stocker, traiter, compresser et afficher les contenus exactement aux personnes que vous invitez, dans exactement la portée que vous choisissez. Cette licence se limite à ce dont Cubi a besoin pour faire fonctionner le service, rien de plus.\n\nCubi n'utilise pas vos contenus à des fins publicitaires, ne les vend à personne et n'a aucun fil public. Lorsque vous supprimez un instant ou votre compte, cette licence prend fin également, hormis de brèves copies techniques qui mettent un peu de temps à disparaître de nos systèmes.",
          "de": "Die Fotos, Videos und Texte in einem Tagebuch gehören der Familie. Cubi beansprucht sie nicht für sich.\n\nDamit Cubi diese Momente bewahren und zeigen kann, gibst du uns eine begrenzte Lizenz: die Inhalte zu speichern, zu verarbeiten, zu komprimieren und genau den Menschen zu zeigen, die du einlädst — in genau dem Umfang, den du wählst. Diese Lizenz reicht nur so weit, wie Cubi es für den Betrieb des Dienstes braucht, nicht weiter.\n\nCubi nutzt deine Inhalte nicht für Werbung, verkauft sie an niemanden und hat keinen öffentlichen Feed. Wenn du einen Moment entfernst oder dein Konto löschst, endet auch diese Lizenz — abgesehen von kurzlebigen technischen Kopien, die etwas Zeit brauchen, bis sie aus unseren Systemen verschwunden sind."
        }
      },
      {
        "heading": {
          "vi": "4. Dùng Cubi cho tử tế",
          "en": "4. Using Cubi kindly",
          "fr": "4. Utiliser Cubi avec respect",
          "de": "4. Cubi rücksichtsvoll nutzen"
        },
        "body": {
          "vi": "Cubi là chốn riêng của cả nhà, nên có vài điều mong mọi người cùng giữ:\n\n- Không lưu nội dung trái pháp luật, hoặc nội dung mà bố mẹ không có quyền chia sẻ.\n- Không tìm cách xem những khoảnh khắc chưa được chia sẻ với mình.\n- Tôn trọng các bé có hình ảnh trong nhật ký, kể cả khi đó không phải con của mình.\n- Không quấy rối người khác trong cùng cuốn nhật ký, và không tìm cách phá hay xâm nhập hệ thống của Cubi.\n\nNếu một cuốn nhật ký bị dùng sai vào những việc trên, Cubi có thể tạm dừng quyền truy cập để giữ an toàn cho cả nhà.",
          "en": "Cubi is a family's private place, so there are a few things we ask everyone to keep:\n\n- Do not upload unlawful content, or content you do not have the right to share.\n- Do not try to reach moments that were not shared with you.\n- Respect the children whose images appear in a diary, even when they are not your own.\n- Do not harass other people in the same diary, and do not try to break into or disrupt Cubi's systems.\n\nIf a diary is misused in these ways, Cubi may pause access to keep the family safe.",
          "fr": "Cubi est l'espace privé d'une famille ; nous demandons donc à chacun de respecter quelques règles :\n\n- Ne pas téléverser de contenus illicites, ni de contenus que vous n'avez pas le droit de partager.\n- Ne pas tenter d'accéder à des instants qui ne vous ont pas été partagés.\n- Respecter les enfants dont l'image apparaît dans un journal, même lorsqu'ils ne sont pas les vôtres.\n- Ne pas harceler les autres personnes présentes dans le même journal, et ne pas tenter de pénétrer ou de perturber les systèmes de Cubi.\n\nEn cas d'usage abusif, Cubi peut suspendre l'accès afin de protéger la famille.",
          "de": "Cubi ist der private Ort einer Familie. Deshalb bitten wir alle, ein paar Dinge einzuhalten:\n\n- Lade keine rechtswidrigen Inhalte hoch und nichts, was du nicht teilen darfst.\n- Versuche nicht, an Momente zu gelangen, die nicht mit dir geteilt wurden.\n- Respektiere die Kinder, deren Bilder in einem Tagebuch auftauchen, auch wenn es nicht deine eigenen sind.\n- Belästige keine anderen Menschen im selben Tagebuch und versuche nicht, in Cubis Systeme einzudringen oder sie zu stören.\n\nWird ein Tagebuch auf diese Weise missbraucht, kann Cubi den Zugang aussetzen, um die Familie zu schützen."
        }
      },
      {
        "heading": {
          "vi": "5. Giá dịch vụ",
          "en": "5. Pricing",
          "fr": "5. Tarifs",
          "de": "5. Preise"
        },
        "body": {
          "vi": "Hiện tại Cubi miễn phí cho cả nhà.\n\nSau này Cubi có thể giới thiệu một gói trả phí với thêm tính năng. Nếu điều đó xảy ra, Cubi sẽ báo trước cho bố mẹ, nói rõ điều gì miễn phí và điều gì trả phí, và sẽ không bất ngờ tính tiền những thứ bố mẹ đang dùng miễn phí mà không hỏi trước. Khi đó, việc thanh toán sẽ được xử lý qua cửa hàng ứng dụng nơi bố mẹ tải Cubi: trên iOS là qua App Store của Apple (theo Điều khoản và Điều kiện Dịch vụ Truyền thông của Apple), trên Android là qua Google Play (theo Điều khoản Dịch vụ của Google Play). Việc hoàn tiền do chính sách của cửa hàng tương ứng quyết định.",
          "en": "Cubi is currently free for the whole family.\n\nLater, Cubi may introduce a paid tier with more features. If that happens, we will tell you in advance, make clear what stays free and what is paid, and we will not suddenly charge you for something you use for free today without asking first. Any purchase is then processed through the app store you downloaded Cubi from: on iOS through the Apple App Store (under Apple's Apple Media Services Terms and Conditions), and on Android through Google Play (under the Google Play Terms of Service). Refunds are handled under the respective store's policy.",
          "fr": "Cubi est aujourd'hui gratuit pour toute la famille.\n\nPlus tard, Cubi pourra proposer une formule payante avec davantage de fonctions. Le cas échéant, nous vous préviendrons à l'avance, dirons clairement ce qui reste gratuit et ce qui devient payant, et nous ne vous facturerons pas soudainement, sans vous demander, quelque chose que vous utilisez gratuitement aujourd'hui. Tout achat est alors traité par la boutique depuis laquelle vous avez téléchargé Cubi : sur iOS via l'App Store d'Apple (selon les Conditions générales des services multimédias d'Apple) et sur Android via Google Play (selon les Conditions d'utilisation de Google Play). Les remboursements relèvent de la politique de la boutique concernée.",
          "de": "Cubi ist derzeit für die ganze Familie kostenlos.\n\nSpäter kann Cubi ein kostenpflichtiges Angebot mit mehr Funktionen einführen. Falls das geschieht, sagen wir es vorher, machen deutlich, was kostenlos bleibt und was Geld kostet, und stellen dir nichts plötzlich in Rechnung, was du heute kostenlos nutzt, ohne vorher zu fragen. Ein Kauf läuft dann über den App-Store, aus dem du Cubi geladen hast: unter iOS über den Apple App Store (nach Apples Apple Media Services Terms and Conditions), unter Android über Google Play (nach den Google-Play-Nutzungsbedingungen). Erstattungen richten sich nach den Regeln des jeweiligen Stores."
        }
      },
      {
        "heading": {
          "vi": "6. Quyền riêng tư",
          "en": "6. Privacy",
          "fr": "6. Confidentialité",
          "de": "6. Datenschutz"
        },
        "body": {
          "vi": "Cách Cubi giữ và xử lý thông tin của cả nhà được viết trong Chính sách quyền riêng tư riêng. Trong đó nói rõ Cubi thu thập những gì, ai là bên giúp Cubi lưu trữ và gửi thông báo, và bố mẹ có những lựa chọn nào.\n\nMột vài điều cả nhà có thể yên tâm: Cubi nén ảnh ở cạnh dài 1920px và không giữ ảnh gốc độ phân giải đầy đủ; thông tin vị trí GPS gắn trong ảnh được gỡ khỏi file lưu và chia sẻ; Cubi không dùng vị trí cho bất kỳ tính năng nào và không hiện bản đồ. Chi tiết đầy đủ nằm trong Chính sách quyền riêng tư nhé.",
          "en": "How Cubi keeps and handles your family's information is set out in a separate Privacy Policy. It explains what Cubi collects, who helps us store data and send notifications, and what choices you have.\n\nA few things you can rest easy about: Cubi compresses photos to a 1920px long edge and does not keep full-resolution originals; a photo's embedded GPS location metadata is stripped from the stored and shared file; and Cubi does not use location for any feature and shows no map. The full detail is in the Privacy Policy.",
          "fr": "La façon dont Cubi conserve et traite les informations de votre famille est décrite dans une politique de confidentialité distincte. Elle explique ce que Cubi collecte, qui nous aide à stocker les données et à envoyer les notifications, et quels choix vous avez.\n\nQuelques points rassurants : Cubi compresse les photos à 1920 px sur le grand côté et ne conserve pas les originaux en pleine résolution ; les métadonnées de localisation GPS intégrées à une photo sont retirées du fichier stocké et partagé ; et Cubi n'utilise la localisation pour aucune fonction et n'affiche aucune carte. Le détail complet figure dans la politique de confidentialité.",
          "de": "Wie Cubi die Informationen eurer Familie speichert und verarbeitet, steht in einer eigenen Datenschutzerklärung. Sie erklärt, was Cubi erhebt, wer uns beim Speichern von Daten und beim Versenden von Benachrichtigungen hilft und welche Wahl du hast.\n\nEin paar Dinge, bei denen du ruhig sein kannst: Cubi komprimiert Fotos auf eine lange Kante von 1920 px und behält keine Originale in voller Auflösung; die im Foto eingebetteten GPS-Standortdaten werden aus der gespeicherten und geteilten Datei entfernt; und Cubi nutzt für keine Funktion den Standort und zeigt keine Karte. Alle Einzelheiten stehen in der Datenschutzerklärung."
        }
      },
      {
        "heading": {
          "vi": "7. Dịch vụ và những thay đổi",
          "en": "7. Service availability and changes",
          "fr": "7. Disponibilité du service et évolutions",
          "de": "7. Verfügbarkeit und Änderungen des Dienstes"
        },
        "body": {
          "vi": "Cubi được cung cấp ở dạng hiện có. Cubi luôn cố gắng để dịch vụ chạy đều và những khoảnh khắc của cả nhà luôn ở đó, nhưng đôi lúc có thể cần tạm dừng để bảo trì, hoặc một tính năng có thể được thêm vào hay thay đổi để Cubi tốt hơn.\n\nMỗi khoảnh khắc, bố mẹ chọn ai được xem: Cả nhà, Chỉ một số người, hay Chỉ mình tôi. Với những điều thật riêng tư, chọn Chỉ mình tôi thì chỉ một mình bố mẹ nhìn thấy.",
          "en": "Cubi is provided on an as-is basis. We work to keep the service steady and your moments where you left them, but at times we may pause for maintenance, and a feature may be added or changed to make Cubi better.\n\nFor each moment, you choose who can see it: Everyone in the family, Only some people, or Only me. For the most private moments, choosing Only me keeps them for your eyes only.",
          "fr": "Cubi est fourni « en l'état ». Nous faisons en sorte que le service reste stable et que vos instants restent là où vous les avez laissés, mais il peut arriver que le service soit interrompu pour maintenance, et qu'une fonction soit ajoutée ou modifiée pour améliorer Cubi.\n\nPour chaque instant, vous choisissez qui peut le voir : Toute la famille, Certaines personnes, ou Moi seul. Pour les instants les plus intimes, l'option Moi seul les garde pour vous seul.",
          "de": "Cubi wird „wie besehen“ bereitgestellt. Wir arbeiten daran, dass der Dienst stabil bleibt und deine Momente dort liegen, wo du sie gelassen hast — dennoch kann es Wartungspausen geben, und Funktionen können hinzukommen oder sich ändern, um Cubi besser zu machen.\n\nFür jeden Moment entscheidest du, wer ihn sehen darf: Alle in der Familie, Nur bestimmte Personen oder Nur ich. Bei den privatesten Momenten bleibt es mit Nur ich bei deinen Augen allein."
        }
      },
      {
        "heading": {
          "vi": "8. Xóa tài khoản và chấm dứt",
          "en": "8. Account deletion and termination",
          "fr": "8. Suppression du compte et résiliation",
          "de": "8. Kontolöschung und Beendigung"
        },
        "body": {
          "vi": "Cả nhà luôn được rời đi khi muốn.\n\n- Bố mẹ có thể tự xóa tài khoản ngay trong ứng dụng, ở mục Cài đặt, hoặc viết cho Cubi qua hello@cubi.family. Xóa tài khoản của người giữ nhật ký sẽ gỡ tài khoản đó cùng những ảnh và video đã lưu.\n- Người thân có thể tự gỡ quyền truy cập của mình ngay trong ứng dụng. Việc này chỉ gỡ chỗ của người thân, không xóa cuốn nhật ký của bố mẹ.\n\nCubi có thể tạm dừng hoặc chấm dứt quyền truy cập nếu một cuốn nhật ký bị dùng sai theo phần Dùng Cubi cho tử tế, để bảo vệ các bé và những người khác.",
          "en": "You can always leave when you wish.\n\n- A parent can delete their account from inside the app, under Settings, or by writing to hello@cubi.family. Deleting a diary keeper's account removes that account along with the photos and videos saved to it.\n- Family can remove their own access from inside the app. This only removes the family member's place; it does not delete the parent's diary.\n\nCubi may suspend or end access if a diary is misused under the Using Cubi kindly section, in order to protect children and other people.",
          "fr": "Vous pouvez partir quand vous le souhaitez.\n\n- Un parent peut supprimer son compte depuis l'application, dans les Réglages, ou en écrivant à hello@cubi.family. La suppression du compte du tenant du journal efface ce compte ainsi que les photos et vidéos qui y sont enregistrées.\n- Un proche peut retirer son propre accès depuis l'application. Cela ne retire que sa place ; le journal du parent n'est pas supprimé.\n\nCubi peut suspendre ou mettre fin à un accès en cas d'usage abusif visé à la section « Utiliser Cubi avec respect », afin de protéger les enfants et les autres personnes.",
          "de": "Du kannst jederzeit gehen.\n\n- Ein Elternteil kann sein Konto in der App unter Einstellungen löschen oder eine Mail an hello@cubi.family schreiben. Wird das Konto der tagebuchführenden Person gelöscht, verschwinden damit auch die dort gespeicherten Fotos und Videos.\n- Familienmitglieder können ihren eigenen Zugang in der App entfernen. Damit geht nur ihr Platz verloren; das Tagebuch der Eltern bleibt bestehen.\n\nCubi kann den Zugang aussetzen oder beenden, wenn ein Tagebuch im Sinne des Abschnitts „Cubi rücksichtsvoll nutzen“ missbraucht wird — zum Schutz der Kinder und der anderen Beteiligten."
        }
      },
      {
        "heading": {
          "vi": "9. Tuyên bố và giới hạn trách nhiệm",
          "en": "9. Disclaimers and limit of liability",
          "fr": "9. Garanties et limitation de responsabilité",
          "de": "9. Haftungsausschluss und Haftungsgrenze"
        },
        "body": {
          "vi": "Cubi mong là nơi đáng tin để giữ những khoảnh khắc của bé, và sẽ chăm chút điều đó bằng sự cẩn thận hợp lý. Dù vậy, không một dịch vụ nào có thể hứa hoàn hảo tuyệt đối, nên Cubi cung cấp dịch vụ ở dạng hiện có, không kèm những cam kết vượt quá những gì pháp luật yêu cầu.\n\nCả nhà nên giữ thêm bản sao những tấm ảnh và video quý giá ở nơi khác nữa, để cho yên tâm.\n\nTrong phạm vi pháp luật cho phép, Cubi không chịu trách nhiệm cho những thiệt hại gián tiếp hay ngoài dự liệu. Phần này không lấy đi của cả nhà bất kỳ quyền nào mà pháp luật bảo vệ cho người tiêu dùng tại Việt Nam.",
          "en": "Cubi wants to be a place you can trust with your child's moments, and we tend to it with reasonable care. Even so, no service can promise to be flawless, so Cubi is provided on an as-is basis, without promises beyond what the law requires.\n\nPlease keep a second copy of your most precious photos and videos somewhere else too, for peace of mind.\n\nTo the extent the law allows, Cubi is not responsible for indirect or unforeseeable loss. Nothing here takes away any consumer rights the law gives you in Vietnam.",
          "fr": "Cubi veut être un endroit auquel vous pouvez confier les instants de votre enfant, et nous en prenons soin avec une diligence raisonnable. Aucun service ne peut pourtant se promettre parfait : Cubi est donc fourni « en l'état », sans garanties au-delà de ce qu'exige la loi.\n\nPar tranquillité d'esprit, gardez aussi une seconde copie de vos photos et vidéos les plus précieuses ailleurs.\n\nDans la mesure permise par la loi, Cubi n'est pas responsable des pertes indirectes ou imprévisibles. Rien ici ne retire les droits que la loi vietnamienne accorde aux consommateurs.",
          "de": "Cubi möchte ein Ort sein, dem du die Momente deines Kindes anvertrauen kannst, und wir kümmern uns mit angemessener Sorgfalt darum. Trotzdem kann kein Dienst versprechen, fehlerfrei zu sein: Cubi wird daher „wie besehen“ bereitgestellt, ohne Zusagen über das gesetzlich Vorgeschriebene hinaus.\n\nBewahre deine wertvollsten Fotos und Videos zur Sicherheit auch anderswo als zweite Kopie auf.\n\nSoweit das Gesetz es zulässt, haftet Cubi nicht für mittelbare oder unvorhersehbare Schäden. Nichts hiervon nimmt dir Verbraucherrechte, die dir das vietnamesische Recht gibt."
        }
      },
      {
        "heading": {
          "vi": "10. App Store của Apple",
          "en": "10. The Apple App Store",
          "fr": "10. L'App Store d'Apple",
          "de": "10. Der Apple App Store"
        },
        "body": {
          "vi": "Khi cả nhà tải Cubi từ App Store của Apple, có thêm vài điều áp dụng giữa cả nhà và Cubi, không phải với Apple. Cubi viết rõ ra đây cho minh bạch:\n\n- Điều khoản này chỉ giữa cả nhà và Cubi, không phải với Apple. Cubi, chứ không phải Apple, chịu trách nhiệm về ứng dụng Cubi và nội dung trong đó.\n- Phạm vi giấy phép: Cubi cấp cho cả nhà một giấy phép có giới hạn, không được chuyển nhượng, để dùng Cubi trên các thiết bị mang thương hiệu Apple mà cả nhà sở hữu hoặc quản lý, theo Quy tắc sử dụng nêu trong Điều khoản và Điều kiện Dịch vụ Truyền thông của Apple, bao gồm cả việc dùng qua Chia sẻ trong gia đình.\n- Bảo trì và hỗ trợ: Cubi là bên duy nhất lo việc bảo trì và hỗ trợ cho ứng dụng. Apple không có nghĩa vụ nào về bảo trì và hỗ trợ.\n- Bảo hành: Cubi là bên duy nhất chịu trách nhiệm về mọi bảo hành, dù được nêu rõ hay theo luật, trong phạm vi chưa được loại trừ hợp lệ. Nếu ứng dụng không đúng với bảo hành áp dụng, cả nhà có thể báo cho Apple, và Apple sẽ hoàn lại giá mua ứng dụng nếu có; ngoài việc đó, trong phạm vi pháp luật cho phép, Apple không có nghĩa vụ bảo hành nào khác.\n- Khiếu nại về sản phẩm: Cubi, chứ không phải Apple, chịu trách nhiệm xử lý khiếu nại của cả nhà hoặc của bên thứ ba liên quan đến ứng dụng, bao gồm khiếu nại về trách nhiệm sản phẩm, khiếu nại rằng ứng dụng không đáp ứng yêu cầu pháp lý, và khiếu nại theo luật bảo vệ người tiêu dùng hay quyền riêng tư.\n- Tuân thủ pháp luật: cả nhà xác nhận mình không ở một quốc gia đang chịu lệnh cấm vận của Chính phủ Hoa Kỳ hoặc bị xếp là quốc gia hỗ trợ khủng bố, và mình không nằm trong danh sách các bên bị cấm của Chính phủ Hoa Kỳ.\n- Quyền sở hữu trí tuệ: nếu có khiếu nại rằng ứng dụng Cubi xâm phạm quyền sở hữu trí tuệ của bên thứ ba, Cubi, chứ không phải Apple, là bên chịu trách nhiệm điều tra, bảo vệ, dàn xếp và giải quyết khiếu nại đó.\n- Điều khoản của bên thứ ba: khi dùng Cubi, cả nhà tuân thủ các điều khoản của bên thứ ba có liên quan.\n- Tên và liên hệ của nhà phát triển: nếu có thắc mắc hay khiếu nại về ứng dụng, cả nhà liên hệ Cubi qua hello@cubi.family.\n- Apple là bên thụ hưởng thứ ba: cả nhà đồng ý rằng Apple và các công ty con của Apple là bên thụ hưởng thứ ba của điều khoản này, và khi cả nhà chấp nhận điều khoản, Apple có quyền thực thi điều khoản này với cả nhà như một bên thụ hưởng thứ ba.",
          "en": "When you download Cubi from the Apple App Store, a few extra points apply between you and Cubi, not with Apple. We set them out here for clarity:\n\n- These terms are between you and Cubi only, and not with Apple. Cubi, not Apple, is responsible for the Cubi app and its content.\n- Scope of license: Cubi grants you a limited, non-transferable license to use Cubi on any Apple-branded products that you own or control, as permitted by the Usage Rules in Apple's Apple Media Services Terms and Conditions, including use through Family Sharing.\n- Maintenance and support: Cubi alone provides any maintenance and support for the app. Apple has no obligation whatsoever to furnish maintenance and support services.\n- Warranty: Cubi alone is responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. If the app fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any; beyond that, to the maximum extent the law allows, Apple has no other warranty obligation for the app.\n- Product claims: Cubi, not Apple, is responsible for addressing any claims by you or a third party relating to the app, including product liability claims, claims that the app fails to meet a legal or regulatory requirement, and claims under consumer protection or privacy law.\n- Legal compliance: you confirm you are not located in a country subject to a U.S. Government embargo or designated as supporting terrorism, and that you are not listed on any U.S. Government list of prohibited or restricted parties.\n- Intellectual property rights: if a third party claims the Cubi app infringes their intellectual property rights, Cubi, not Apple, is responsible for the investigation, defense, settlement, and discharge of that claim.\n- Third-party terms: when using Cubi, you comply with any applicable third-party terms of agreement.\n- Developer name and contact: for any question or claim about the app, contact Cubi at hello@cubi.family.\n- Apple as third-party beneficiary: you agree that Apple and Apple's subsidiaries are third-party beneficiaries of these terms, and that upon your acceptance, Apple has the right to enforce these terms against you as a third-party beneficiary.",
          "fr": "Lorsque vous téléchargez Cubi depuis l'App Store d'Apple, quelques points supplémentaires s'appliquent entre vous et Cubi, et non avec Apple. Nous les précisons ici :\n\n- Ces conditions lient uniquement vous et Cubi, et non Apple. C'est Cubi, et non Apple, qui est responsable de l'application Cubi et de son contenu.\n- Portée de la licence : Cubi vous accorde une licence limitée et non transférable d'utiliser Cubi sur tout produit de marque Apple que vous possédez ou contrôlez, dans les limites des Règles d'utilisation des Conditions générales des services multimédias d'Apple, y compris via le Partage familial.\n- Maintenance et assistance : Cubi seul assure la maintenance et l'assistance de l'application. Apple n'a aucune obligation de fournir des services de maintenance ou d'assistance.\n- Garantie : Cubi seul est responsable des garanties du produit, expresses ou implicites, dans la mesure où elles ne sont pas valablement exclues. Si l'application n'est pas conforme à une garantie applicable, vous pouvez en informer Apple, qui vous remboursera le prix d'achat éventuel ; au-delà, dans toute la mesure permise par la loi, Apple n'a aucune autre obligation de garantie concernant l'application.\n- Réclamations : c'est Cubi, et non Apple, qui répond de toute réclamation de votre part ou d'un tiers relative à l'application, y compris les réclamations en responsabilité du fait des produits, celles selon lesquelles l'application ne respecterait pas une exigence légale ou réglementaire, et celles fondées sur le droit de la consommation ou de la protection des données.\n- Conformité légale : vous confirmez ne pas être situé dans un pays faisant l'objet d'un embargo du gouvernement des États-Unis ou désigné comme soutenant le terrorisme, et ne figurer sur aucune liste de parties interdites ou restreintes du gouvernement des États-Unis.\n- Propriété intellectuelle : si un tiers affirme que l'application Cubi porte atteinte à ses droits de propriété intellectuelle, c'est Cubi, et non Apple, qui prend en charge l'examen, la défense, le règlement et l'exécution de cette réclamation.\n- Conditions de tiers : en utilisant Cubi, vous respectez les conditions applicables des tiers.\n- Nom et contact du développeur : pour toute question ou réclamation concernant l'application, écrivez à Cubi à hello@cubi.family.\n- Apple, tiers bénéficiaire : vous acceptez qu'Apple et ses filiales soient tiers bénéficiaires de ces conditions et que, dès votre acceptation, Apple ait le droit de les faire respecter à votre égard en cette qualité.",
          "de": "Wenn du Cubi aus dem Apple App Store lädst, gelten zusätzlich einige Punkte zwischen dir und Cubi — nicht mit Apple. Der Klarheit halber führen wir sie hier auf:\n\n- Diese Bedingungen bestehen allein zwischen dir und Cubi, nicht mit Apple. Für die Cubi-App und ihre Inhalte ist Cubi verantwortlich, nicht Apple.\n- Lizenzumfang: Cubi gewährt dir eine begrenzte, nicht übertragbare Lizenz, Cubi auf Produkten der Marke Apple zu nutzen, die du besitzt oder kontrollierst, im Rahmen der Nutzungsregeln in Apples Apple Media Services Terms and Conditions, einschließlich der Nutzung über die Familienfreigabe.\n- Wartung und Support: Wartung und Support für die App leistet allein Cubi. Apple ist in keiner Weise verpflichtet, Wartungs- oder Supportleistungen zu erbringen.\n- Gewährleistung: Für Produktgewährleistungen — ausdrücklich oder gesetzlich — ist allein Cubi verantwortlich, soweit sie nicht wirksam ausgeschlossen sind. Entspricht die App einer geltenden Gewährleistung nicht, kannst du Apple informieren; Apple erstattet dann einen etwaigen Kaufpreis. Darüber hinaus trifft Apple im größtmöglichen gesetzlich zulässigen Umfang keine weitere Gewährleistungspflicht für die App.\n- Ansprüche: Für Ansprüche von dir oder Dritten im Zusammenhang mit der App ist Cubi verantwortlich, nicht Apple — einschließlich Produkthaftungsansprüchen, Ansprüchen wegen Nichterfüllung gesetzlicher oder behördlicher Anforderungen sowie Ansprüchen nach Verbraucherschutz- oder Datenschutzrecht.\n- Rechtliche Vorgaben: Du bestätigst, dich nicht in einem Land aufzuhalten, das einem Embargo der US-Regierung unterliegt oder als Unterstützer des Terrorismus eingestuft ist, und auf keiner Liste verbotener oder eingeschränkter Parteien der US-Regierung zu stehen.\n- Rechte des geistigen Eigentums: Behauptet ein Dritter, die Cubi-App verletze seine Rechte des geistigen Eigentums, übernimmt Cubi und nicht Apple die Prüfung, Verteidigung, Beilegung und Erfüllung dieses Anspruchs.\n- Bedingungen Dritter: Bei der Nutzung von Cubi hältst du geltende Bedingungen Dritter ein.\n- Name und Kontakt des Entwicklers: Bei Fragen oder Ansprüchen zur App wende dich an Cubi unter hello@cubi.family.\n- Apple als begünstigter Dritter: Du stimmst zu, dass Apple und seine Tochtergesellschaften begünstigte Dritte dieser Bedingungen sind und dass Apple mit deiner Zustimmung das Recht hat, diese Bedingungen dir gegenüber als begünstigter Dritter durchzusetzen."
        }
      },
      {
        "heading": {
          "vi": "11. Google Play",
          "en": "11. Google Play",
          "fr": "11. Google Play",
          "de": "11. Google Play"
        },
        "body": {
          "vi": "Khi cả nhà tải Cubi từ Google Play, việc sử dụng cũng tuân theo Điều khoản Dịch vụ của Google Play. Điều khoản này là thỏa thuận giữa cả nhà và Cubi; Google không phải là một bên và không chịu trách nhiệm về ứng dụng Cubi hay nội dung trong đó. Cubi là bên duy nhất lo việc hỗ trợ, bảo hành và xử lý mọi khiếu nại liên quan đến ứng dụng.",
          "en": "When you download Cubi from Google Play, your use is also subject to the Google Play Terms of Service. These terms are an agreement between you and Cubi; Google is not a party and is not responsible for the Cubi app or its content. Cubi alone provides support, warranties, and the handling of any claims relating to the app.",
          "fr": "Lorsque vous téléchargez Cubi depuis Google Play, votre utilisation est également soumise aux Conditions d'utilisation de Google Play. Les présentes conditions constituent un accord entre vous et Cubi ; Google n'y est pas partie et n'est pas responsable de l'application Cubi ni de son contenu. Cubi seul assure l'assistance, les garanties et le traitement de toute réclamation relative à l'application.",
          "de": "Wenn du Cubi über Google Play lädst, gelten zusätzlich die Google-Play-Nutzungsbedingungen. Diese Bedingungen sind eine Vereinbarung zwischen dir und Cubi; Google ist nicht Vertragspartei und nicht für die Cubi-App oder ihre Inhalte verantwortlich. Support, Gewährleistung und die Bearbeitung von Ansprüchen zur App übernimmt allein Cubi."
        }
      },
      {
        "heading": {
          "vi": "12. Luật áp dụng và liên hệ",
          "en": "12. Governing law and contact",
          "fr": "12. Droit applicable et contact",
          "de": "12. Anwendbares Recht und Kontakt"
        },
        "body": {
          "vi": "Điều khoản này theo pháp luật Việt Nam, và Cubi được làm ra tại Việt Nam. Nếu có điều gì cần làm rõ, mong cả nhà cứ viết cho Cubi trước, để cùng tìm cách giải quyết một cách nhẹ nhàng.\n\nLiên hệ với Cubi qua hello@cubi.family nhé.",
          "en": "These terms are governed by the laws of Vietnam, and Cubi is made in Vietnam. If something needs sorting out, please write to us first so we can find a gentle way through it together.\n\nReach Cubi at hello@cubi.family.",
          "fr": "Ces conditions sont régies par le droit vietnamien, et Cubi est fait au Vietnam. Si quelque chose doit être réglé, écrivez-nous d'abord : nous chercherons ensemble une solution en douceur.\n\nContactez Cubi à hello@cubi.family.",
          "de": "Diese Bedingungen unterliegen vietnamesischem Recht, und Cubi wird in Vietnam gemacht. Wenn etwas zu klären ist, schreib uns bitte zuerst — dann finden wir gemeinsam einen ruhigen Weg.\n\nDu erreichst Cubi unter hello@cubi.family."
        }
      },
      {
        "heading": {
          "vi": "13. Khi điều khoản thay đổi",
          "en": "13. When these terms change",
          "fr": "13. Modification des présentes conditions",
          "de": "13. Wenn sich diese Bedingungen ändern"
        },
        "body": {
          "vi": "Theo thời gian Cubi có thể cập nhật điều khoản này, ví dụ khi thêm tính năng mới hoặc khi luật thay đổi. Khi có thay đổi đáng kể, Cubi sẽ báo cho cả nhà và cập nhật ngày hiệu lực ở đầu trang. Nếu cả nhà vẫn dùng Cubi sau khi thay đổi có hiệu lực, tức là cả nhà đồng ý với điều khoản mới. Nếu chưa thoải mái với thay đổi, bố mẹ luôn có thể xóa tài khoản theo phần ở trên.\n\nNgày hiệu lực: 9 tháng 6, 2026.",
          "en": "Over time we may update these terms, for example when we add a feature or when the law changes. When a change is meaningful, we will let you know and update the effective date at the top. If you keep using Cubi after a change takes effect, you agree to the new terms. If a change does not sit right with you, you can always delete your account as described above.\n\nEffective date: June 9, 2026.",
          "fr": "Avec le temps, nous pourrons mettre à jour ces conditions, par exemple lors de l'ajout d'une fonction ou d'un changement de la loi. Lorsqu'une modification est importante, nous vous en informerons et mettrons à jour la date d'entrée en vigueur en haut de page. Si vous continuez à utiliser Cubi après l'entrée en vigueur d'une modification, vous acceptez les nouvelles conditions. Si une modification ne vous convient pas, vous pouvez toujours supprimer votre compte comme indiqué ci-dessus.\n\nDate d'entrée en vigueur : 9 juin 2026.",
          "de": "Mit der Zeit können wir diese Bedingungen aktualisieren, etwa wenn eine Funktion dazukommt oder sich das Gesetz ändert. Bei wesentlichen Änderungen sagen wir Bescheid und aktualisieren das Datum oben. Nutzt du Cubi nach Inkrafttreten einer Änderung weiter, stimmst du den neuen Bedingungen zu. Passt dir eine Änderung nicht, kannst du dein Konto jederzeit wie oben beschrieben löschen.\n\nGültig ab: 9. Juni 2026."
        }
      }
    ]
  },
  "privacy": {
    "title": {
      "vi": "Chính sách bảo mật",
      "en": "Privacy Policy",
      "fr": "Politique de confidentialité",
      "de": "Datenschutzerklärung"
    },
    "intro": {
      "vi": "Cubi là cuốn nhật ký riêng tư về bé, dành cho cả nhà. Chính sách này nói rõ Cubi giữ những gì, dùng ra sao và ai có thể nhìn thấy những khoảnh khắc bố mẹ lưu lại, để cả nhà yên tâm. Chính sách áp dụng cho ứng dụng Cubi và trang cubi.family. Có hiệu lực từ ngày 9 tháng 6, 2026.",
      "en": "Cubi is a private baby diary for the whole family. This policy explains plainly what Cubi keeps, how we use it, and who can see the moments you save, so your family can feel at ease. It covers the Cubi app and the cubi.family website. Effective June 9, 2026.",
      "fr": "Cubi est un journal de bébé privé pour toute la famille. Cette politique explique simplement ce que Cubi conserve, comment nous l'utilisons et qui peut voir les instants que vous enregistrez, pour que votre famille soit tranquille. Elle couvre l'application Cubi et le site cubi.family. En vigueur le 9 juin 2026.",
      "de": "Cubi ist ein privates Babytagebuch für die ganze Familie. Diese Erklärung sagt in klaren Worten, was Cubi speichert, wie wir es nutzen und wer die Momente sehen kann, die du sicherst — damit deine Familie ruhig sein kann. Sie gilt für die Cubi-App und die Website cubi.family. Gültig ab 9. Juni 2026."
    },
    "sections": [
      {
        "heading": {
          "vi": "Cubi là ai",
          "en": "Who we are",
          "fr": "Qui nous sommes",
          "de": "Wer wir sind"
        },
        "body": {
          "vi": "Cubi là cuốn nhật ký riêng tư ghi lại quá trình bé lớn lên: ảnh, video, đôi dòng kể về một ngày của bé, chia sẻ trong vòng tay cả nhà. Cubi được làm tại Việt Nam, trên iOS (từ iOS 17.0) và Android.\n\n- Chính sách này áp dụng cho ứng dụng Cubi và trang cubi.family.\n- Ảnh và video được lưu trữ và phục vụ qua cdn.cubi.family.\n- Có gì cần hỏi, bố mẹ viết thư cho Cubi qua hello@cubi.family nhé.",
          "en": "Cubi is a private diary of a child's growing up: photos, videos, and a few words about the baby's day, shared inside your family. Cubi is made in Vietnam, for iOS (from iOS 17.0) and Android.\n\n- This policy covers the Cubi app and the cubi.family website.\n- Photos and videos are stored and served through cdn.cubi.family.\n- If you have a question, write to us at hello@cubi.family.",
          "fr": "Cubi est le journal privé d'un enfant qui grandit : photos, vidéos et quelques mots sur la journée du bébé, partagés au sein de votre famille. Cubi est fait au Vietnam, pour iOS (à partir d'iOS 17.0) et Android.\n\n- Cette politique couvre l'application Cubi et le site cubi.family.\n- Les photos et vidéos sont stockées et servies via cdn.cubi.family.\n- Pour toute question, écrivez-nous à hello@cubi.family.",
          "de": "Cubi ist das private Tagebuch eines heranwachsenden Kindes: Fotos, Videos und ein paar Worte zum Tag des Babys, geteilt innerhalb eurer Familie. Cubi wird in Vietnam gemacht, für iOS (ab iOS 17.0) und Android.\n\n- Diese Erklärung gilt für die Cubi-App und die Website cubi.family.\n- Fotos und Videos werden über cdn.cubi.family gespeichert und ausgeliefert.\n- Bei Fragen schreib uns an hello@cubi.family."
        }
      },
      {
        "heading": {
          "vi": "Cubi giữ những gì",
          "en": "What we collect",
          "fr": "Ce que nous collectons",
          "de": "Was wir erheben"
        },
        "body": {
          "vi": "Cubi chỉ giữ những gì cần để cuốn nhật ký chạy được. Cụ thể là:\n\n- Tài khoản của bố mẹ: email, tên hiển thị, và cách bố mẹ đăng nhập (Apple, Google, hay email và mật khẩu).\n- Hồ sơ của bé: tên bé, ngày sinh, giới tính (nếu bố mẹ muốn điền), ảnh đại diện (nếu có), và cách bố mẹ tự xưng với bé (mẹ, má, bố, ba…). Tuổi của bé được tính tự động từ ngày sinh, ví dụ \"6 tháng 12 ngày\".\n- Những gì bố mẹ lưu: ảnh, video và lời kể đi kèm mỗi khoảnh khắc.\n- Cảm xúc: các icon cảm xúc cả nhà thả cho mỗi khoảnh khắc (Cubi không có bình luận).\n- Vòng tay cả nhà: nhãn lời mời bố mẹ đặt (ví dụ \"Bà ngoại\"), tên thiết bị, thời điểm tham gia và lần ghé gần nhất của mỗi người.\n- Thiết bị: mã thông báo đẩy và múi giờ của thiết bị, để gửi thông báo và tính tuổi bé cho đúng.\n- Tùy chọn thông báo: bố mẹ bật hay tắt loại thông báo nào — phần này lưu ngay trên máy.\n- Số liệu dùng app và báo cáo sự cố, thu qua Firebase, để giữ Cubi chạy mượt và chỉnh lại khi có chỗ chưa ổn.\n\nVài điều Cubi muốn nói thật rõ:\n\n- Ảnh được nén lại (cạnh dài 1920px). Cubi không giữ bản gốc độ phân giải đầy đủ.\n- Vị trí (GPS) đôi khi gắn sẵn trong ảnh sẽ được gỡ khỏi tấm ảnh trước khi lưu và chia sẻ. Cubi không dùng vị trí cho bất kỳ tính năng nào và không có bản đồ.",
          "en": "Cubi keeps only what the diary needs to work. Specifically:\n\n- Your account: email, display name, and how you sign in (Apple, Google, or email and password).\n- The baby's profile: name, date of birth, gender (if you choose to add it), an avatar (if any), and the word you call yourself by (mẹ, má, bố, ba…). The baby's age is computed automatically from the date of birth, for example \"6 months 12 days\".\n- What you save: the photos, videos, and the caption with each moment.\n- Reactions: the emoji your family taps on a moment (Cubi has no comments).\n- Your family circle: the invite labels you set (such as \"Grandma\"), device name, when each person joined, and when they were last active.\n- Device: the push token and the device timezone, used to send notifications and show the right age.\n- Notification preferences: which notifications you turn on or off — this is stored on your device.\n- Usage and crash data, collected through Firebase, to keep Cubi running smoothly and to fix problems.\n\nA few things we want to say plainly:\n\n- Photos are compressed (long edge 1920px). Cubi does not keep full-resolution originals.\n- Location (GPS) data sometimes embedded in a photo is stripped from the image before it is stored and shared. Cubi does not use location for any feature, and there is no map.",
          "fr": "Cubi ne conserve que ce dont le journal a besoin pour fonctionner. Précisément :\n\n- Votre compte : e-mail, nom affiché et mode de connexion (Apple, Google, ou e-mail et mot de passe).\n- Le profil du bébé : prénom, date de naissance, sexe (si vous choisissez de l'indiquer), un avatar (le cas échéant) et le mot par lequel vous vous désignez (maman, papa, mamie…). L'âge du bébé est calculé automatiquement à partir de la date de naissance, par exemple « 6 mois 12 jours ».\n- Ce que vous enregistrez : les photos, les vidéos et la légende de chaque instant.\n- Les réactions : l'emoji que votre famille touche sur un instant (Cubi n'a pas de commentaires).\n- Votre cercle familial : les étiquettes d'invitation que vous définissez (comme « Mamie »), le nom de l'appareil, la date d'arrivée de chaque personne et sa dernière activité.\n- L'appareil : le jeton de notification et le fuseau horaire, utilisés pour envoyer les notifications et afficher le bon âge.\n- Vos préférences de notification : celles que vous activez ou désactivez — elles sont stockées sur votre appareil.\n- Des données d'usage et de plantage, collectées via Firebase, pour que Cubi reste fluide et pour corriger les problèmes.\n\nDeux choses que nous tenons à dire clairement :\n\n- Les photos sont compressées (grand côté 1920 px). Cubi ne conserve pas les originaux en pleine résolution.\n- Les données de localisation (GPS) parfois intégrées à une photo sont retirées de l'image avant son stockage et son partage. Cubi n'utilise la localisation pour aucune fonction, et il n'y a aucune carte.",
          "de": "Cubi speichert nur, was das Tagebuch zum Funktionieren braucht. Im Einzelnen:\n\n- Dein Konto: E-Mail, Anzeigename und die Art deiner Anmeldung (Apple, Google oder E-Mail und Passwort).\n- Das Profil des Babys: Name, Geburtsdatum, Geschlecht (wenn du es angeben willst), ein Avatar (falls vorhanden) und das Wort, mit dem du dich selbst nennst (Mama, Papa, Oma …). Das Alter des Babys wird automatisch aus dem Geburtsdatum berechnet, zum Beispiel „6 Monate 12 Tage“.\n- Was du sicherst: die Fotos, Videos und den Text zu jedem Moment.\n- Reaktionen: das Emoji, das deine Familie zu einem Moment antippt (Kommentare gibt es bei Cubi nicht).\n- Euer Familienkreis: die Einladungsnamen, die du vergibst (etwa „Oma“), der Gerätename, wann jemand dazugekommen ist und wann er zuletzt aktiv war.\n- Gerät: das Push-Token und die Zeitzone des Geräts, um Benachrichtigungen zu senden und das richtige Alter anzuzeigen.\n- Benachrichtigungseinstellungen: welche Benachrichtigungen du an- oder ausschaltest — sie bleiben auf deinem Gerät.\n- Nutzungs- und Absturzdaten, erhoben über Firebase, damit Cubi rund läuft und Probleme behoben werden.\n\nZwei Dinge sagen wir gern deutlich:\n\n- Fotos werden komprimiert (lange Kante 1920 px). Cubi behält keine Originale in voller Auflösung.\n- Standortdaten (GPS), die manchmal in einem Foto stecken, werden aus dem Bild entfernt, bevor es gespeichert und geteilt wird. Cubi nutzt den Standort für keine Funktion, und es gibt keine Karte."
        }
      },
      {
        "heading": {
          "vi": "Cubi dùng những thông tin này để làm gì",
          "en": "How we use it",
          "fr": "Comment nous l'utilisons",
          "de": "Wie wir sie nutzen"
        },
        "body": {
          "vi": "Mọi thông tin Cubi giữ đều phục vụ một việc: để cả nhà cùng dõi theo bé lớn lên.\n\n- Vận hành cuốn nhật ký: lưu khoảnh khắc, hiện dòng thời gian, tính tuổi bé.\n- Mang ảnh và widget đến với người nhà bố mẹ mời: ảnh mới nhất và tuổi bé hiện ngay trên màn hình chính và màn hình khóa của điện thoại, tự làm mới trong ngày.\n- Gửi những thông báo bố mẹ đã bật, ví dụ khi có khoảnh khắc mới.\n- Giữ dịch vụ chạy ổn định và chỉnh lại khi có chỗ chưa ổn, qua số liệu dùng app và báo cáo sự cố.\n\nCubi không dùng thông tin của bố mẹ cho quảng cáo, và Cubi không bán dữ liệu cá nhân. Ở đây không có bảng tin công khai, không người lạ, không người theo dõi.\n\nCubi có chia sẻ một số dữ liệu kỹ thuật với các đối tác vận hành để dịch vụ chạy được: số liệu sử dụng, báo cáo sự cố và mã định danh thiết bị được chia sẻ với Google Firebase để giữ Cubi ổn định và sửa lỗi. Đây là việc chia sẻ để vận hành dịch vụ, không phải bán dữ liệu, và không dùng cho quảng cáo.",
          "en": "Everything Cubi keeps serves one thing: helping your family watch the baby grow.\n\n- Running the diary: saving moments, showing the timeline, computing the baby's age.\n- Delivering photos and the widget to the family you invite: the latest photo and the baby's age appear right on the phone's home screen and lock screen, refreshing through the day.\n- Sending the notifications you have turned on, such as when there is a new moment.\n- Keeping the service stable and fixing problems, through usage and crash data.\n\nCubi does not use your information for advertising, and Cubi does not sell personal data. There is no public feed here, no strangers, no followers.\n\nCubi does share some technical data with the partners that run the service: usage statistics, crash reports, and device identifiers are shared with Google Firebase to keep Cubi stable and fix bugs. This is sharing to operate the service, not selling data, and never for advertising.",
          "fr": "Tout ce que Cubi conserve sert une seule chose : aider votre famille à voir bébé grandir.\n\n- Faire fonctionner le journal : enregistrer les instants, afficher la ligne du temps, calculer l'âge du bébé.\n- Livrer les photos et le widget à la famille que vous invitez : la dernière photo et l'âge du bébé s'affichent sur l'écran d'accueil et l'écran verrouillé du téléphone, et se rafraîchissent au fil de la journée.\n- Envoyer les notifications que vous avez activées, par exemple lorsqu'un nouvel instant arrive.\n- Garder le service stable et corriger les problèmes, grâce aux données d'usage et de plantage.\n\nCubi n'utilise pas vos informations à des fins publicitaires et ne vend pas de données personnelles. Il n'y a ici aucun fil public, aucun inconnu, aucun abonné.\n\nCubi partage néanmoins certaines données techniques avec les prestataires qui font tourner le service : statistiques d'usage, rapports de plantage et identifiants d'appareil sont transmis à Google Firebase pour maintenir Cubi stable et corriger les bogues. C'est un partage pour faire fonctionner le service, pas une vente de données, et jamais à des fins publicitaires.",
          "de": "Alles, was Cubi speichert, dient einer Sache: eurer Familie zu helfen, das Baby wachsen zu sehen.\n\n- Das Tagebuch betreiben: Momente sichern, die Zeitlinie zeigen, das Alter des Babys berechnen.\n- Fotos und Widget an die eingeladene Familie ausliefern: Das neueste Foto und das Alter des Babys erscheinen direkt auf dem Home- und Sperrbildschirm und werden im Lauf des Tages aktualisiert.\n- Die Benachrichtigungen senden, die du eingeschaltet hast — etwa bei einem neuen Moment.\n- Den Dienst stabil halten und Probleme beheben, mithilfe von Nutzungs- und Absturzdaten.\n\nCubi nutzt deine Informationen nicht für Werbung und verkauft keine persönlichen Daten. Es gibt hier keinen öffentlichen Feed, keine Fremden, keine Follower.\n\nEinige technische Daten teilt Cubi allerdings mit den Partnern, die den Dienst betreiben: Nutzungsstatistiken, Absturzberichte und Gerätekennungen gehen an Google Firebase, damit Cubi stabil bleibt und Fehler behoben werden. Das ist Weitergabe zum Betrieb des Dienstes — kein Datenverkauf und niemals Werbung."
        }
      },
      {
        "heading": {
          "vi": "Cơ sở pháp lý của việc xử lý",
          "en": "Our legal basis",
          "fr": "Notre base légale",
          "de": "Unsere Rechtsgrundlage"
        },
        "body": {
          "vi": "Cubi chỉ xử lý thông tin khi có lý do rõ ràng:\n\n- Để thực hiện thỏa thuận với bố mẹ — tức là chạy cuốn nhật ký mà bố mẹ đã chọn dùng.\n- Theo sự đồng ý của bố mẹ — ví dụ khi bố mẹ bật thông báo. Bố mẹ có thể rút lại bất cứ lúc nào.\n- Vì lợi ích hợp lý của Cubi — giữ dịch vụ an toàn, ổn định và được cải thiện, ở mức cân bằng với quyền riêng tư của cả nhà.",
          "en": "Cubi processes information only when there is a clear reason:\n\n- To perform our agreement with you — that is, to run the diary you chose to use.\n- With your consent — for example, when you turn on notifications. You can withdraw it at any time.\n- For Cubi's legitimate interests — keeping the service safe, stable, and improved, balanced against your family's privacy.",
          "fr": "Cubi ne traite des informations que lorsqu'il existe une raison claire :\n\n- Pour exécuter notre contrat avec vous — c'est-à-dire faire fonctionner le journal que vous avez choisi d'utiliser.\n- Avec votre consentement — par exemple lorsque vous activez les notifications. Vous pouvez le retirer à tout moment.\n- Pour les intérêts légitimes de Cubi — garder le service sûr, stable et amélioré, en tenant compte de la vie privée de votre famille.",
          "de": "Cubi verarbeitet Informationen nur, wenn es einen klaren Grund gibt:\n\n- Zur Erfüllung unseres Vertrags mit dir — also um das Tagebuch zu betreiben, für das du dich entschieden hast.\n- Mit deiner Einwilligung — etwa wenn du Benachrichtigungen einschaltest. Du kannst sie jederzeit widerrufen.\n- Aufgrund berechtigter Interessen von Cubi — den Dienst sicher, stabil und besser zu machen, abgewogen gegen die Privatsphäre eurer Familie."
        }
      },
      {
        "heading": {
          "vi": "Ai nhìn thấy khoảnh khắc của bé",
          "en": "Who can see your content",
          "fr": "Qui peut voir vos contenus",
          "de": "Wer deine Inhalte sehen kann"
        },
        "body": {
          "vi": "Chỉ những người nhà mà bố mẹ chủ nhật ký mời mới xem được. Không có gì hiện ra công khai.\n\n- Bố mẹ là người mở cuốn nhật ký, lưu khoảnh khắc và mời cả nhà bằng mã 7 ký tự hoặc đường liên kết. Người nhà tham gia mà không cần đăng ký, chỉ xem và thả cảm xúc. Nếu muốn giữ chỗ của mình khi đổi máy, người nhà có thể nâng lên tài khoản đầy đủ, hoàn toàn tùy chọn.\n- Mỗi khoảnh khắc có một phạm vi hiển thị do bố mẹ chọn: Cả nhà, Chỉ một số người, hay Chỉ mình tôi.\n- Với những khoảnh khắc thật riêng tư, chọn Chỉ mình tôi thì chỉ một mình bố mẹ nhìn thấy thôi nhé.",
          "en": "Only the family members the diary owner invites can see anything. Nothing is shown publicly.\n\n- The owner opens the diary, saves moments, and invites the family with a 7-character code or a link. Family members join with no sign-up; they view and react only. If they want to keep their place when changing devices, they can upgrade to a full account, entirely optional.\n- Each moment has a visibility scope the owner chooses: Everyone in the family, Only some people, or Only me.\n- For a truly private moment, choosing Only me keeps it for your eyes only.",
          "fr": "Seuls les membres de la famille invités par le propriétaire du journal voient quelque chose. Rien n'est affiché publiquement.\n\n- Le propriétaire ouvre le journal, enregistre les instants et invite la famille avec un code de 7 caractères ou un lien. Les proches rejoignent sans inscription ; ils consultent et réagissent, rien de plus. S'ils veulent conserver leur place en changeant d'appareil, ils peuvent créer un compte complet — c'est facultatif.\n- Chaque instant a une portée de visibilité choisie par le propriétaire : Toute la famille, Certaines personnes, ou Moi seul.\n- Pour un instant vraiment intime, l'option Moi seul le garde pour vous seul.",
          "de": "Nur die Familienmitglieder, die die tagebuchführende Person einlädt, sehen etwas. Nichts wird öffentlich gezeigt.\n\n- Die tagebuchführende Person legt das Tagebuch an, sichert Momente und lädt die Familie mit einem 7-stelligen Code oder einem Link ein. Die Familie kommt ohne Anmeldung dazu; sie schaut mit und reagiert, mehr nicht. Wer seinen Platz beim Gerätewechsel behalten möchte, kann ein vollständiges Konto anlegen — ganz freiwillig.\n- Jeder Moment hat eine Sichtbarkeit, die die tagebuchführende Person wählt: Alle in der Familie, Nur bestimmte Personen oder Nur ich.\n- Bei einem wirklich privaten Moment bleibt er mit Nur ich für deine Augen allein."
        }
      },
      {
        "heading": {
          "vi": "Những bên giúp Cubi vận hành",
          "en": "Service providers",
          "fr": "Prestataires de services",
          "de": "Dienstleister"
        },
        "body": {
          "vi": "Cubi nhờ vài đối tác đáng tin để chạy dịch vụ. Họ chỉ xử lý dữ liệu trong phạm vi giúp Cubi hoạt động, không dùng cho mục đích riêng:\n\n- Supabase — cơ sở dữ liệu và đăng nhập, đặt tại Singapore (ap-southeast-1).\n- Cloudflare R2 — lưu ảnh và video, phục vụ qua cdn.cubi.family.\n- Google Firebase — gửi thông báo đẩy (FCM), số liệu dùng app và báo cáo sự cố.\n- Apple — Đăng nhập bằng Apple và gửi thông báo qua APNs.\n- Google — Đăng nhập bằng Google.\n\nNếu bố mẹ chọn Đăng nhập bằng Apple và dùng tính năng ẩn email của Apple, Cubi sẽ nhận một địa chỉ chuyển tiếp riêng tư thay cho email thật của bố mẹ — và như thế là vừa đủ.",
          "en": "Cubi relies on a few trusted partners to run the service. They process data only to help Cubi work, not for their own purposes:\n\n- Supabase — database and authentication, hosted in Singapore (ap-southeast-1).\n- Cloudflare R2 — photo and video storage, served through cdn.cubi.family.\n- Google Firebase — push notifications (FCM), usage analytics, and crash reporting.\n- Apple — Sign in with Apple and push delivery via APNs.\n- Google — Sign in with Google.\n\nIf you choose Sign in with Apple and use Apple's hide-my-email feature, Cubi receives a private relay address instead of your real email — and that is all we need.",
          "fr": "Cubi s'appuie sur quelques partenaires de confiance pour faire fonctionner le service. Ils traitent les données uniquement pour permettre à Cubi de fonctionner, jamais pour leurs propres finalités :\n\n- Supabase — base de données et authentification, hébergées à Singapour (ap-southeast-1).\n- Cloudflare R2 — stockage des photos et vidéos, servies via cdn.cubi.family.\n- Google Firebase — notifications push (FCM), statistiques d'usage et rapports de plantage.\n- Apple — connexion avec Apple et distribution des notifications via APNs.\n- Google — connexion avec Google.\n\nSi vous choisissez la connexion avec Apple et l'option « Masquer mon adresse e-mail », Cubi reçoit une adresse relais privée plutôt que votre vraie adresse — et cela nous suffit.",
          "de": "Cubi stützt sich auf einige vertrauenswürdige Partner, um den Dienst zu betreiben. Sie verarbeiten Daten nur, damit Cubi funktioniert, nicht für eigene Zwecke:\n\n- Supabase — Datenbank und Authentifizierung, gehostet in Singapur (ap-southeast-1).\n- Cloudflare R2 — Speicher für Fotos und Videos, ausgeliefert über cdn.cubi.family.\n- Google Firebase — Push-Benachrichtigungen (FCM), Nutzungsstatistik und Absturzberichte.\n- Apple — Anmelden mit Apple und Push-Zustellung über APNs.\n- Google — Anmelden mit Google.\n\nWenn du dich mit Apple anmeldest und „E-Mail-Adresse verbergen“ nutzt, bekommt Cubi eine private Relay-Adresse statt deiner echten — und mehr brauchen wir nicht."
        }
      },
      {
        "heading": {
          "vi": "Dữ liệu được xử lý ở đâu",
          "en": "International data transfer",
          "fr": "Transfert international des données",
          "de": "Internationale Datenübermittlung"
        },
        "body": {
          "vi": "Vì Cubi dùng các dịch vụ đám mây ở trên, thông tin của bố mẹ và bé có thể được lưu trữ và xử lý bên ngoài Việt Nam, ví dụ tại Singapore. Dù ở đâu, Cubi vẫn giữ thông tin theo đúng chính sách này.",
          "en": "Because Cubi uses the cloud services above, your information may be stored and processed outside Vietnam, for example in Singapore. Wherever it is held, Cubi protects it under this policy.",
          "fr": "Parce que Cubi utilise les services cloud ci-dessus, vos informations peuvent être stockées et traitées hors du Vietnam, par exemple à Singapour. Où qu'elles se trouvent, Cubi les protège conformément à la présente politique.",
          "de": "Weil Cubi die oben genannten Cloud-Dienste nutzt, können deine Informationen außerhalb Vietnams gespeichert und verarbeitet werden, zum Beispiel in Singapur. Wo auch immer sie liegen: Cubi schützt sie nach dieser Erklärung."
        }
      },
      {
        "heading": {
          "vi": "Cubi giữ trong bao lâu, và xóa thế nào",
          "en": "Retention and deletion",
          "fr": "Conservation et suppression",
          "de": "Aufbewahrung und Löschung"
        },
        "body": {
          "vi": "Cubi giữ thông tin chừng nào tài khoản còn hoạt động, để cuốn nhật ký vẫn ở đó mỗi khi cả nhà mở ra.\n\n- Bố/mẹ chủ nhật ký có thể xóa tài khoản ngay trong ứng dụng, ở phần Cài đặt, hoặc viết thư cho Cubi qua hello@cubi.family.\n- Khi bố mẹ xóa tài khoản, Cubi gỡ tài khoản đó cùng ảnh và video đã lưu. Việc này không thể hoàn lại, nên bố mẹ cân nhắc kỹ nhé.\n- Người nhà tham gia bằng mã mời có thể tự rời khỏi vòng tay cả nhà bất cứ lúc nào. Việc này chỉ gỡ quyền xem của riêng họ, cuốn nhật ký của bố mẹ vẫn nguyên vẹn.\n- Một phần dữ liệu kỹ thuật có thể được lưu thêm ít lâu khi luật yêu cầu hoặc để giữ dịch vụ an toàn, rồi sẽ được xóa.",
          "en": "Cubi keeps your information while your account is active, so the diary is there each time your family opens it.\n\n- The diary owner can delete the account right in the app, under Settings, or by writing to hello@cubi.family.\n- When you delete your account, Cubi removes that account along with the photos and videos saved with it. This cannot be undone, so please consider it carefully.\n- A family member who joined with an invite code can remove their own access at any time. This only removes their own view; the owner's diary stays intact.\n- Some technical data may be retained a little longer where the law requires it or to keep the service safe, then deleted.",
          "fr": "Cubi conserve vos informations tant que votre compte est actif, pour que le journal soit là chaque fois que votre famille l'ouvre.\n\n- Le propriétaire du journal peut supprimer le compte directement dans l'application, dans les Réglages, ou en écrivant à hello@cubi.family.\n- Lorsque vous supprimez votre compte, Cubi efface ce compte ainsi que les photos et vidéos qui y sont enregistrées. C'est irréversible, réfléchissez-y bien.\n- Un proche entré avec un code d'invitation peut retirer son accès à tout moment. Cela ne retire que sa propre vue ; le journal du propriétaire reste intact.\n- Certaines données techniques peuvent être conservées un peu plus longtemps lorsque la loi l'exige ou pour la sécurité du service, puis sont supprimées.",
          "de": "Cubi bewahrt deine Informationen, solange dein Konto aktiv ist, damit das Tagebuch da ist, wann immer eure Familie es öffnet.\n\n- Die tagebuchführende Person kann das Konto direkt in der App unter Einstellungen löschen oder eine Mail an hello@cubi.family schreiben.\n- Wenn du dein Konto löschst, entfernt Cubi dieses Konto samt der dort gesicherten Fotos und Videos. Das lässt sich nicht rückgängig machen — überleg es dir also gut.\n- Ein Familienmitglied, das mit einem Einladungscode dazugekommen ist, kann seinen Zugang jederzeit entfernen. Damit geht nur die eigene Ansicht verloren; das Tagebuch bleibt bestehen.\n- Manche technischen Daten bleiben etwas länger, wo das Gesetz es verlangt oder es der Sicherheit des Dienstes dient, und werden dann gelöscht."
        }
      },
      {
        "heading": {
          "vi": "Thông tin của bé",
          "en": "Children's information",
          "fr": "Les informations concernant les enfants",
          "de": "Informationen über Kinder"
        },
        "body": {
          "vi": "Cubi do bố mẹ và người lớn trong nhà sử dụng. Mọi thông tin về bé — tên, ngày sinh, ảnh — đều do bố mẹ tự điền và tự quản.\n\n- Cubi không dành cho trẻ dưới 13 tuổi tự vận hành.\n- Bố mẹ là người quyết định lưu gì và mời ai vào xem, nên bố mẹ giữ phần trách nhiệm với những gì mình chia sẻ.\n- Nếu bố mẹ muốn gỡ thông tin của bé, chỉ cần xóa khoảnh khắc đó, hoặc xóa tài khoản như phần trên.\n\nCubi hướng tới người dùng là người lớn (bố mẹ và người thân), không phải là ứng dụng dành cho trẻ em tự dùng. Thông tin về bé là dữ liệu do bố mẹ — người có quyền của cha mẹ — cung cấp và đồng ý cho Cubi xử lý, để giữ và chia sẻ trong vòng tay cả nhà. Cubi tuân thủ các quy định về quyền riêng tư của trẻ em hiện hành, bao gồm COPPA (Hoa Kỳ) và GDPR (EU) ở những nơi áp dụng. Cubi không yêu cầu, không khuyến khích trẻ dưới 13 tuổi tự tạo tài khoản hay tự nhập thông tin.",
          "en": "Cubi is operated by parents and adults in the family. All information about a child — name, date of birth, photos — is entered and controlled by the parent.\n\n- Cubi is not directed to children under 13 to operate on their own.\n- The parent decides what to save and whom to invite, so the parent holds responsibility for what they share.\n- To remove a child's information, simply delete that moment, or delete the account as described above.\n\nCubi's audience is adults (parents and family); it is not an app for children to use on their own. Information about a child is data that the parent — the holder of parental authority — provides and consents to Cubi processing, to keep and share within the family circle. Cubi complies with applicable children's-privacy rules, including COPPA (US) and the GDPR (EU) where they apply. Cubi does not request or encourage children under 13 to create accounts or enter information themselves.",
          "fr": "Cubi est utilisé par les parents et les adultes de la famille. Toutes les informations relatives à un enfant — prénom, date de naissance, photos — sont saisies et contrôlées par le parent.\n\n- Cubi ne s'adresse pas aux enfants de moins de 13 ans pour un usage autonome.\n- C'est le parent qui décide de ce qui est enregistré et de qui est invité ; il est donc responsable de ce qu'il partage.\n- Pour retirer les informations d'un enfant, supprimez simplement l'instant concerné, ou le compte comme indiqué ci-dessus.\n\nLe public de Cubi, ce sont les adultes (parents et proches) ; ce n'est pas une application que les enfants utilisent seuls. Les informations concernant un enfant sont des données que le parent — titulaire de l'autorité parentale — fournit et dont il consent au traitement par Cubi, afin de les garder et de les partager dans le cercle familial. Cubi respecte les règles applicables en matière de vie privée des enfants, notamment la COPPA (États-Unis) et le RGPD (UE) lorsqu'ils s'appliquent. Cubi ne demande ni n'encourage les enfants de moins de 13 ans à créer un compte ou à saisir eux-mêmes des informations.",
          "de": "Cubi wird von Eltern und Erwachsenen in der Familie bedient. Alle Angaben zu einem Kind — Name, Geburtsdatum, Fotos — trägt der Elternteil ein und behält die Kontrolle darüber.\n\n- Cubi richtet sich nicht an Kinder unter 13 Jahren zur eigenständigen Nutzung.\n- Der Elternteil entscheidet, was gesichert und wer eingeladen wird, und trägt damit die Verantwortung für das Geteilte.\n- Um Angaben zu einem Kind zu entfernen, lösche einfach den betreffenden Moment oder das Konto wie oben beschrieben.\n\nCubis Publikum sind Erwachsene (Eltern und Familie); es ist keine App, die Kinder allein nutzen. Angaben zu einem Kind sind Daten, die der Elternteil — als Inhaber der elterlichen Sorge — bereitstellt und in deren Verarbeitung durch Cubi er einwilligt, um sie im Familienkreis zu bewahren und zu teilen. Cubi hält die geltenden Regeln zum Schutz von Kinderdaten ein, darunter COPPA (USA) und die DSGVO (EU), soweit sie anwendbar sind. Cubi fordert Kinder unter 13 Jahren nicht auf, selbst Konten anzulegen oder Angaben zu machen, und ermuntert sie auch nicht dazu."
        }
      },
      {
        "heading": {
          "vi": "Cubi giữ an toàn ra sao",
          "en": "Security",
          "fr": "Sécurité",
          "de": "Sicherheit"
        },
        "body": {
          "vi": "Cubi coi cuốn nhật ký của bé như một thứ riêng tư cần được nâng niu.\n\n- Mọi dữ liệu được mã hóa khi truyền đi (HTTPS).\n- Ảnh và video được tải lên qua đường liên kết có chữ ký, dùng một lần.\n- Việc truy cập dữ liệu được kiểm soát theo từng tài khoản và từng vòng tay cả nhà.\n\nCubi vẫn đang hoàn thiện từng ngày. Không hệ thống nào an toàn tuyệt đối, nên Cubi nói thật để bố mẹ biết, và Cubi sẽ tiếp tục làm cho chắc chắn hơn.",
          "en": "Cubi treats your baby's diary as something private, to be looked after with care.\n\n- All data is encrypted in transit (HTTPS).\n- Photos and videos are uploaded through signed, single-use URLs.\n- Access to data is controlled per account and per family circle.\n\nCubi keeps being refined every day. No system is perfectly secure, so we tell you honestly, and we will keep making it sturdier over time.",
          "fr": "Cubi considère le journal de votre bébé comme quelque chose d'intime, à protéger avec soin.\n\n- Toutes les données sont chiffrées en transit (HTTPS).\n- Les photos et vidéos sont téléversées via des URL signées à usage unique.\n- L'accès aux données est contrôlé par compte et par cercle familial.\n\nCubi s'améliore chaque jour. Aucun système n'est parfaitement sûr : nous vous le disons honnêtement, et nous continuerons à le renforcer avec le temps.",
          "de": "Cubi behandelt das Tagebuch deines Babys als etwas Privates, das sorgfältig gehütet gehört.\n\n- Alle Daten sind auf dem Transportweg verschlüsselt (HTTPS).\n- Fotos und Videos werden über signierte Einweg-URLs hochgeladen.\n- Der Zugriff auf Daten ist pro Konto und pro Familienkreis geregelt.\n\nCubi wird jeden Tag weiter verfeinert. Kein System ist vollkommen sicher — das sagen wir ehrlich, und wir machen es mit der Zeit weiter robuster."
        }
      },
      {
        "heading": {
          "vi": "Quyền của bố mẹ",
          "en": "Your rights",
          "fr": "Vos droits",
          "de": "Deine Rechte"
        },
        "body": {
          "vi": "Cuốn nhật ký là của bố mẹ, và bố mẹ luôn nắm quyền với thông tin của mình.\n\n- Xem và sửa: bố mẹ có thể xem và chỉnh hồ sơ của bé cùng các khoảnh khắc ngay trong ứng dụng.\n- Xóa: bố mẹ có thể xóa từng khoảnh khắc, hoặc xóa cả tài khoản trong phần Cài đặt.\n- Rút lại đồng ý: bố mẹ có thể tắt thông báo bất cứ lúc nào trong phần Cài đặt.\n- Cần thêm gì, bố mẹ viết thư cho Cubi qua hello@cubi.family, Cubi sẽ giúp nhé.",
          "en": "The diary is yours, and you are always in control of your information.\n\n- Access and correct: you can view and edit the baby's profile and your moments right in the app.\n- Delete: you can delete individual moments, or delete the whole account under Settings.\n- Withdraw consent: you can turn off notifications at any time under Settings.\n- For anything else, write to us at hello@cubi.family and we will help.",
          "fr": "Le journal est le vôtre, et vous gardez toujours la main sur vos informations.\n\n- Accès et rectification : vous pouvez consulter et modifier le profil du bébé et vos instants directement dans l'application.\n- Suppression : vous pouvez supprimer un instant, ou l'ensemble du compte dans les Réglages.\n- Retrait du consentement : vous pouvez désactiver les notifications à tout moment dans les Réglages.\n- Pour tout le reste, écrivez-nous à hello@cubi.family et nous vous aiderons.",
          "de": "Das Tagebuch gehört dir, und du behältst jederzeit die Kontrolle über deine Informationen.\n\n- Auskunft und Berichtigung: Du kannst das Profil des Babys und deine Momente direkt in der App ansehen und ändern.\n- Löschung: Du kannst einzelne Momente löschen oder das ganze Konto unter Einstellungen.\n- Widerruf der Einwilligung: Du kannst Benachrichtigungen jederzeit unter Einstellungen ausschalten.\n- Für alles andere schreib uns an hello@cubi.family — wir helfen gern."
        }
      },
      {
        "heading": {
          "vi": "Phí dịch vụ",
          "en": "Pricing",
          "fr": "Tarifs",
          "de": "Preise"
        },
        "body": {
          "vi": "Hiện tại Cubi miễn phí. Về sau có thể có một gói trả phí, và nếu vậy Cubi sẽ báo trước rõ ràng. Việc có gói trả phí không làm thay đổi cách Cubi tôn trọng quyền riêng tư của cả nhà.",
          "en": "Cubi is currently free. A paid tier may be introduced later, and if so we will tell you clearly in advance. Adding a paid tier does not change how Cubi respects your family's privacy.",
          "fr": "Cubi est actuellement gratuit. Une formule payante pourra être introduite plus tard ; le cas échéant, nous vous préviendrons clairement à l'avance. L'ajout d'une formule payante ne change rien au respect de la vie privée de votre famille.",
          "de": "Cubi ist derzeit kostenlos. Später kann ein kostenpflichtiges Angebot dazukommen; dann sagen wir es vorher deutlich. Ein solches Angebot ändert nichts daran, wie Cubi die Privatsphäre eurer Familie achtet."
        }
      },
      {
        "heading": {
          "vi": "Liên hệ",
          "en": "Contact",
          "fr": "Contact",
          "de": "Kontakt"
        },
        "body": {
          "vi": "Có điều gì băn khoăn về quyền riêng tư, hay muốn nhờ Cubi giúp với thông tin của mình, bố mẹ cứ viết thư cho Cubi nhé.\n\n- Email: hello@cubi.family\n- Web: cubi.family",
          "en": "If anything about privacy is on your mind, or you would like our help with your information, please write to us.\n\n- Email: hello@cubi.family\n- Web: cubi.family",
          "fr": "Si un point sur la confidentialité vous préoccupe, ou si vous souhaitez notre aide au sujet de vos informations, écrivez-nous.\n\n- E-mail : hello@cubi.family\n- Web : cubi.family",
          "de": "Wenn dich etwas beim Datenschutz beschäftigt oder du Hilfe zu deinen Informationen brauchst, schreib uns.\n\n- E-Mail: hello@cubi.family\n- Web: cubi.family"
        }
      },
      {
        "heading": {
          "vi": "Khi chính sách thay đổi",
          "en": "Changes to this policy",
          "fr": "Modifications de cette politique",
          "de": "Änderungen dieser Erklärung"
        },
        "body": {
          "vi": "Cubi lớn lên cùng các bé, nên đôi lúc chính sách này cần được cập nhật. Khi có thay đổi đáng kể, Cubi sẽ báo trong ứng dụng hoặc qua email, và luôn ghi rõ ngày hiệu lực mới.\n\n- Ngày hiệu lực hiện tại: 9 tháng 6, 2026.",
          "en": "Cubi grows alongside the babies it holds, so this policy will sometimes need updating. When there is a meaningful change, we will let you know in the app or by email, and we will always show the new effective date.\n\n- Current effective date: June 9, 2026.",
          "fr": "Cubi grandit en même temps que les bébés qu'il accompagne : cette politique devra donc parfois être mise à jour. En cas de changement important, nous vous préviendrons dans l'application ou par e-mail, et nous indiquerons toujours la nouvelle date d'entrée en vigueur.\n\n- Date d'entrée en vigueur actuelle : 9 juin 2026.",
          "de": "Cubi wächst mit den Babys, die es begleitet — deshalb wird diese Erklärung manchmal aktualisiert. Bei wesentlichen Änderungen sagen wir in der App oder per E-Mail Bescheid und nennen immer das neue Gültigkeitsdatum.\n\n- Aktuell gültig ab: 9. Juni 2026."
        }
      }
    ]
  },
  "support": {
    "intro": {
      "vi": "Cubi là cuốn nhật ký riêng để cả nhà cùng giữ những khoảnh khắc bé lớn lên mỗi ngày. Có gì còn băn khoăn, bố mẹ viết cho một người thật ở hello@cubi.family, nhà mình luôn đọc và trả lời nhé.",
      "en": "Cubi is a private diary where the whole family keeps the small moments of a child growing up. Whenever something is unclear, write to a real person at hello@cubi.family — we read every message and write back.",
      "fr": "Cubi est un journal privé où toute la famille garde les petits instants d'un enfant qui grandit. Dès que quelque chose n'est pas clair, écrivez à une vraie personne à hello@cubi.family — nous lisons chaque message et nous répondons.",
      "de": "Cubi ist ein privates Tagebuch, in dem die ganze Familie die kleinen Momente eines heranwachsenden Kindes bewahrt. Wenn etwas unklar ist, schreib einem echten Menschen an hello@cubi.family — wir lesen jede Nachricht und antworten."
    },
    "faq": [
      {
        "q": {
          "vi": "Ông bà tham gia bằng mã mời hay đường link như thế nào",
          "en": "How do grandparents join with an invite code or link",
          "fr": "Comment les grands-parents rejoignent-ils avec un code ou un lien d'invitation",
          "de": "Wie kommen Großeltern mit einem Einladungscode oder -link dazu"
        },
        "a": {
          "vi": "Bố mẹ gửi cho ông bà mã mời 7 ký tự hoặc đường link mời. Ông bà mở Cubi, nhập mã (hoặc bấm vào link), thế là vào xem được dòng thời gian của bé ngay, không cần đăng ký gì cả. Mỗi mã mời dành cho một người, nên cả nhà mỗi người nhận một mã riêng nhé.",
          "en": "The owner sends grandparents a 7-character invite code or an invite link. They open Cubi, enter the code (or tap the link), and they're in — looking at the baby's timeline right away, with no sign-up at all. Each invite is for one person, so everyone in the family gets their own code.",
          "fr": "Le propriétaire envoie aux grands-parents un code d'invitation de 7 caractères ou un lien. Ils ouvrent Cubi, saisissent le code (ou touchent le lien) et les voilà entrés — devant la ligne du temps du bébé, sans aucune inscription. Chaque invitation est destinée à une seule personne : chacun dans la famille reçoit son propre code.",
          "de": "Die tagebuchführende Person schickt den Großeltern einen 7-stelligen Einladungscode oder einen Link. Sie öffnen Cubi, geben den Code ein (oder tippen auf den Link) und sind drin — direkt bei der Zeitlinie des Babys, ganz ohne Anmeldung. Jede Einladung gilt für eine Person, also bekommt jeder in der Familie seinen eigenen Code."
        }
      },
      {
        "q": {
          "vi": "Người xem có cần lập tài khoản không",
          "en": "Do viewers need to create an account",
          "fr": "Les proches doivent-ils créer un compte",
          "de": "Müssen Mitlesende ein Konto anlegen"
        },
        "a": {
          "vi": "Không cần. Ông bà, cô dì chú bác chỉ cần mã mời là vào xem được, không phải đăng ký, không phải nhớ mật khẩu. Cubi tự ghi nhớ chỗ của mỗi người trên máy. Nếu muốn giữ chỗ khi đổi sang điện thoại khác, người xem có thể liên kết với tài khoản Apple hoặc Google sau, hoàn toàn tùy ý nhé.",
          "en": "No. Grandparents, aunts and uncles only need the invite code — no sign-up, no password to remember. Cubi remembers each person's place on their device. If someone wants to keep their place when switching to a new phone, they can optionally link an Apple or Google account later.",
          "fr": "Non. Les grands-parents, les tantes et les oncles n'ont besoin que du code d'invitation — sans inscription, sans mot de passe à retenir. Cubi garde la place de chacun sur son appareil. Pour conserver sa place en changeant de téléphone, il est possible de relier ensuite un compte Apple ou Google, si on le souhaite.",
          "de": "Nein. Großeltern, Tanten und Onkel brauchen nur den Einladungscode — keine Anmeldung, kein Passwort zum Merken. Cubi behält den Platz jeder Person auf ihrem Gerät. Wer seinen Platz beim Wechsel auf ein neues Handy behalten möchte, kann später freiwillig ein Apple- oder Google-Konto verknüpfen."
        }
      },
      {
        "q": {
          "vi": "Bấm link mời mà không mở được app thì làm sao",
          "en": "The invite link won't open the app — what do I do",
          "fr": "Le lien d'invitation n'ouvre pas l'application — que faire",
          "de": "Der Einladungslink öffnet die App nicht — was tun"
        },
        "a": {
          "vi": "Thường là vì link được mở bên trong Zalo hay Facebook (trình duyệt trong ứng dụng), chỗ đó chưa mở thẳng được Cubi. Bố mẹ bấm nút ba chấm ở góc rồi chọn \"Mở trong Safari\" (hoặc Chrome), hoặc sao chép link rồi dán vào trình duyệt. Nếu vẫn chưa được, bố mẹ mở Cubi trước rồi nhập tay mã 7 ký tự là vào được nhé.",
          "en": "This usually happens when the link opens inside Zalo or Facebook (their in-app browser), which can't open Cubi directly. Tap the three-dot menu in the corner and choose \"Open in Safari\" (or Chrome), or copy the link and paste it into a browser. If it still won't open, open Cubi first and type the 7-character code by hand.",
          "fr": "Cela arrive généralement lorsque le lien s'ouvre dans Zalo ou Facebook (leur navigateur intégré), qui ne peut pas lancer Cubi directement. Touchez le menu à trois points dans le coin et choisissez « Ouvrir dans Safari » (ou Chrome), ou copiez le lien et collez-le dans un navigateur. Si cela ne fonctionne toujours pas, ouvrez d'abord Cubi et saisissez le code de 7 caractères à la main.",
          "de": "Das passiert meist, wenn der Link in Zalo oder Facebook aufgeht (deren eingebauter Browser), der Cubi nicht direkt starten kann. Tippe oben in der Ecke auf das Drei-Punkte-Menü und wähle „In Safari öffnen“ (oder Chrome), oder kopiere den Link und füge ihn in einen Browser ein. Klappt es weiterhin nicht, öffne zuerst Cubi und tippe den 7-stelligen Code von Hand ein."
        }
      },
      {
        "q": {
          "vi": "Làm sao thêm widget Cubi lên màn hình chính iPhone",
          "en": "How do I add the Cubi widget to my iPhone home screen",
          "fr": "Comment ajouter le widget Cubi à l'écran d'accueil de mon iPhone",
          "de": "Wie füge ich das Cubi-Widget zum iPhone-Homescreen hinzu"
        },
        "a": {
          "vi": "Bố mẹ chạm và giữ vào chỗ trống trên màn hình chính cho các biểu tượng rung lên, bấm dấu cộng ở góc trên, tìm Cubi trong danh sách, chọn cỡ widget rồi bấm \"Thêm widget\". Widget sẽ hiện ảnh mới nhất của bé cùng tuổi của bé tính tự động, ví dụ \"6 tháng 12 ngày\". Widget màn hình khóa cũng thêm theo cách tương tự, từ phần tùy chỉnh màn hình khóa nhé.",
          "en": "Touch and hold an empty spot on the home screen until the icons jiggle, tap the plus button at the top, find Cubi in the list, pick a widget size, then tap \"Add Widget\". The widget shows your baby's latest photo with their age computed automatically, for example \"6 months 12 days\". The lock-screen widget is added the same way, from the lock-screen customize panel.",
          "fr": "Appuyez longuement sur une zone vide de l'écran d'accueil jusqu'à ce que les icônes frémissent, touchez le bouton plus en haut, trouvez Cubi dans la liste, choisissez une taille de widget, puis touchez « Ajouter le widget ». Le widget affiche la dernière photo de votre bébé avec son âge calculé automatiquement, par exemple « 6 mois 12 jours ». Le widget de l'écran verrouillé s'ajoute de la même façon, depuis le panneau de personnalisation de l'écran verrouillé.",
          "de": "Halte eine freie Stelle auf dem Homescreen gedrückt, bis die Symbole wackeln, tippe oben auf das Plus, suche Cubi in der Liste, wähle eine Widget-Größe und tippe auf „Widget hinzufügen“. Das Widget zeigt das neueste Foto deines Babys samt automatisch berechnetem Alter, zum Beispiel „6 Monate 12 Tage“. Das Sperrbildschirm-Widget fügst du genauso hinzu, über die Anpassungsansicht des Sperrbildschirms."
        }
      },
      {
        "q": {
          "vi": "Widget chưa hiện ảnh mới của bé thì sao",
          "en": "The widget isn't showing the baby's latest photo",
          "fr": "Le widget n'affiche pas la dernière photo du bébé",
          "de": "Das Widget zeigt nicht das neueste Foto des Babys"
        },
        "a": {
          "vi": "Widget tự làm mới trong ngày, nên đôi khi ảnh mới hiện chậm một chút. Bố mẹ thử mở Cubi lên một lần để app đồng bộ, xem máy có mạng không, và để Cubi được phép làm mới ở chế độ nền (Cài đặt iPhone, mục Cubi, bật \"Làm mới ứng dụng nền\"). Tuổi của bé trên widget luôn tính theo ngày sinh nên vẫn cập nhật mỗi ngày nhé.",
          "en": "The widget refreshes through the day, so a new photo can take a little while to appear. Open Cubi once so it can sync, check that the phone has a connection, and let Cubi refresh in the background (iPhone Settings, Cubi, turn on \"Background App Refresh\"). The baby's age on the widget is always computed from the date of birth, so it updates each day.",
          "fr": "Le widget se rafraîchit au fil de la journée : une nouvelle photo peut mettre un moment à apparaître. Ouvrez Cubi une fois pour lancer la synchronisation, vérifiez que le téléphone a du réseau, et autorisez l'actualisation en arrière-plan (Réglages de l'iPhone, Cubi, activez « Actualisation en arrière-plan »). L'âge affiché sur le widget est toujours calculé à partir de la date de naissance : il se met à jour chaque jour.",
          "de": "Das Widget aktualisiert sich im Lauf des Tages, ein neues Foto kann also einen Moment brauchen. Öffne Cubi einmal, damit es synchronisieren kann, prüfe die Internetverbindung und erlaube die Aktualisierung im Hintergrund (iPhone-Einstellungen, Cubi, „Hintergrundaktualisierung“ einschalten). Das Alter im Widget wird immer aus dem Geburtsdatum berechnet und ändert sich damit jeden Tag."
        }
      },
      {
        "q": {
          "vi": "Cubi có trên Android không",
          "en": "Is Cubi available on Android",
          "fr": "Cubi est-il disponible sur Android",
          "de": "Gibt es Cubi für Android"
        },
        "a": {
          "vi": "Có, Cubi dùng được trên cả iPhone và điện thoại Android, và cả hai đều có widget màn hình chính để cả nhà thấy bé mỗi ngày nhé.",
          "en": "Yes, Cubi works on both iPhone and Android, and both have a home-screen widget so the whole family sees the baby every day.",
          "fr": "Oui, Cubi fonctionne sur iPhone comme sur Android, et les deux ont un widget d'écran d'accueil pour que toute la famille voie bébé chaque jour.",
          "de": "Ja, Cubi läuft auf iPhone und Android, und beide haben ein Homescreen-Widget, damit die ganze Familie das Baby jeden Tag sieht."
        }
      },
      {
        "q": {
          "vi": "Cubi có miễn phí không",
          "en": "Is Cubi free",
          "fr": "Cubi est-il gratuit",
          "de": "Ist Cubi kostenlos"
        },
        "a": {
          "vi": "Hiện tại Cubi miễn phí cho cả nhà. Sau này có thể có thêm gói trả phí, nhưng nhà mình sẽ báo trước rõ ràng, không thu phí bất ngờ nhé.",
          "en": "Cubi is currently free for the whole family. A paid tier may be introduced later, but we'll tell you clearly in advance — nothing unexpected.",
          "fr": "Cubi est aujourd'hui gratuit pour toute la famille. Une formule payante pourra arriver plus tard, mais nous vous préviendrons clairement à l'avance — aucune surprise.",
          "de": "Cubi ist derzeit für die ganze Familie kostenlos. Später kann ein kostenpflichtiges Angebot dazukommen, aber wir sagen es vorher deutlich — keine Überraschungen."
        }
      },
      {
        "q": {
          "vi": "Làm sao chọn ai được xem một khoảnh khắc",
          "en": "How do I control who sees a moment",
          "fr": "Comment choisir qui voit un instant",
          "de": "Wie bestimme ich, wer einen Moment sieht"
        },
        "a": {
          "vi": "Khi lưu một khoảnh khắc, bố mẹ chọn phạm vi xem: \"Cả nhà\", \"Chỉ một số người\", hay \"Chỉ mình tôi\". Mỗi khoảnh khắc đặt riêng được, nên ảnh nào muốn để dành riêng vẫn giữ kín; muốn riêng tư tuyệt đối thì chọn \"Chỉ mình tôi\", chỉ một mình bố mẹ thấy thôi nhé.",
          "en": "When you save a moment, you choose who can see it: \"Whole family\", \"Only some people\", or \"Only me\". Each moment is set on its own, so anything you want to keep private stays private; for a truly private moment, choose \"Only me\" and it is for your eyes only.",
          "fr": "Au moment d'enregistrer un instant, vous choisissez qui peut le voir : « Toute la famille », « Certaines personnes » ou « Moi seul ». Chaque instant se règle séparément : ce que vous voulez garder pour vous le reste. Pour un instant vraiment intime, choisissez « Moi seul » et il n'est visible que par vous.",
          "de": "Wenn du einen Moment sicherst, wählst du, wer ihn sehen darf: „Ganze Familie“, „Nur bestimmte Personen“ oder „Nur ich“. Jeder Moment wird einzeln eingestellt, sodass privat bleibt, was privat bleiben soll; bei einem wirklich privaten Moment wähle „Nur ich“ — dann sieht ihn niemand außer dir."
        }
      },
      {
        "q": {
          "vi": "Làm sao xóa tài khoản và chuyện gì xảy ra với ảnh của bé",
          "en": "How do I delete my account and what happens to my baby's photos",
          "fr": "Comment supprimer mon compte, et qu'advient-il des photos de mon bébé",
          "de": "Wie lösche ich mein Konto, und was passiert mit den Fotos meines Babys"
        },
        "a": {
          "vi": "Bố mẹ là chủ nhật ký có thể xóa tài khoản ngay trong app (phần Cài đặt), hoặc viết cho nhà mình ở hello@cubi.family. Khi xóa tài khoản chủ, toàn bộ tài khoản cùng ảnh và video đã lưu sẽ được gỡ đi. Nếu là người xem muốn rời đi, người xem chỉ cần gỡ quyền xem của mình, việc đó không ảnh hưởng tới cuốn nhật ký của bố mẹ nhé.",
          "en": "As the diary owner you can delete your account right inside the app (Settings), or email us at hello@cubi.family. Deleting an owner account removes the account along with the photos and videos you saved. If you're a viewer who wants to leave, you simply remove your own access — that does not affect the owner's diary.",
          "fr": "En tant que propriétaire du journal, vous pouvez supprimer votre compte directement dans l'application (Réglages) ou nous écrire à hello@cubi.family. La suppression d'un compte propriétaire efface le compte ainsi que les photos et vidéos que vous avez enregistrées. Si vous êtes un proche qui souhaite partir, il vous suffit de retirer votre propre accès — cela n'affecte pas le journal du propriétaire.",
          "de": "Als tagebuchführende Person kannst du dein Konto direkt in der App löschen (Einstellungen) oder uns an hello@cubi.family schreiben. Damit verschwinden das Konto und die von dir gesicherten Fotos und Videos. Wenn du nur mitliest und gehen möchtest, entfernst du einfach deinen eigenen Zugang — das Tagebuch der Eltern bleibt davon unberührt."
        }
      },
      {
        "q": {
          "vi": "Làm sao bật hoặc tắt thông báo",
          "en": "How do I turn notifications on or off",
          "fr": "Comment activer ou désactiver les notifications",
          "de": "Wie schalte ich Benachrichtigungen ein oder aus"
        },
        "a": {
          "vi": "Bố mẹ chỉnh thông báo ngay trong Cubi ở phần Cài đặt, chọn loại nào muốn nhận. Nếu muốn tắt hẳn, bố mẹ vào Cài đặt iPhone, tìm Cubi rồi tắt thông báo. Lựa chọn của bố mẹ được lưu trên máy nên lần sau mở lên vẫn giữ nguyên nhé.",
          "en": "Adjust notifications inside Cubi under Settings, choosing which kinds you want to receive. To turn them off entirely, open iPhone Settings, find Cubi, and switch notifications off. Your choices are stored on the device, so they stay as you set them.",
          "fr": "Réglez les notifications dans Cubi, sous Réglages, en choisissant celles que vous voulez recevoir. Pour tout désactiver, ouvrez les Réglages de l'iPhone, trouvez Cubi et coupez les notifications. Vos choix sont enregistrés sur l'appareil : ils restent tels que vous les avez définis.",
          "de": "Stell die Benachrichtigungen in Cubi unter Einstellungen ein und wähle, welche du bekommen willst. Um sie ganz auszuschalten, öffne die iPhone-Einstellungen, suche Cubi und schalte Mitteilungen aus. Deine Einstellungen liegen auf dem Gerät und bleiben so, wie du sie gesetzt hast."
        }
      },
      {
        "q": {
          "vi": "Làm sao mời thêm hoặc gỡ một người trong nhà",
          "en": "How do I invite or remove a family member",
          "fr": "Comment inviter ou retirer un membre de la famille",
          "de": "Wie lade ich jemanden ein oder entferne ihn wieder"
        },
        "a": {
          "vi": "Trong phần quản lý cả nhà, bố mẹ tạo một mã mời mới (đặt tên gợi nhớ như \"Bà ngoại\") rồi gửi cho người đó. Khi muốn gỡ ai khỏi danh sách xem, bố mẹ mở đúng người đó rồi bỏ quyền xem; từ đó họ không còn thấy dòng thời gian của bé nữa. Mọi thứ nằm trong tay bố mẹ, thêm hay bớt lúc nào cũng được nhé.",
          "en": "In the family-circle section, create a new invite code (give it a friendly label like \"Grandma\") and send it to that person. To remove someone, open their entry and revoke their access; from then on they no longer see the baby's timeline. It's all in your hands — add or remove anyone, anytime.",
          "fr": "Dans la section du cercle familial, créez un nouveau code d'invitation (donnez-lui une étiquette parlante comme « Mamie ») et envoyez-le à la personne concernée. Pour retirer quelqu'un, ouvrez sa fiche et révoquez son accès ; il ne voit alors plus la ligne du temps du bébé. Tout est entre vos mains — ajoutez ou retirez qui vous voulez, quand vous voulez.",
          "de": "Lege im Familienkreis einen neuen Einladungscode an (gib ihm einen sprechenden Namen wie „Oma“) und schick ihn der Person. Um jemanden zu entfernen, öffne seinen Eintrag und entziehe den Zugang; ab dann sieht er die Zeitlinie des Babys nicht mehr. Alles liegt in deiner Hand — jederzeit jemanden hinzufügen oder entfernen."
        }
      },
      {
        "q": {
          "vi": "Lỡ mất quyền xem rồi, làm sao vào lại được",
          "en": "I lost my access — how do I get back in",
          "fr": "J'ai perdu mon accès — comment revenir",
          "de": "Ich habe meinen Zugang verloren — wie komme ich zurück"
        },
        "a": {
          "vi": "Nếu là người xem đổi điện thoại hoặc lỡ xóa app mà chưa liên kết tài khoản, chỗ xem cũ có thể không còn. Người xem nhắn cho chủ nhật ký xin một mã mời mới rồi nhập lại là vào được. Lần này, người xem nên liên kết với tài khoản Apple hoặc Google để giữ chỗ cho những lần sau nhé. Là chủ nhật ký, bố mẹ đăng nhập lại bằng đúng cách đã dùng (Apple, Google, hay email) là thấy lại đầy đủ.",
          "en": "If you're a viewer who switched phones or removed the app without linking an account, your old place may be gone. Ask the diary owner for a fresh invite code and enter it again to return. This time, link an Apple or Google account so your place is kept for next time. As an owner, sign back in the same way you used before (Apple, Google, or email) and everything is there again.",
          "fr": "Si vous êtes un proche ayant changé de téléphone ou supprimé l'application sans relier de compte, votre ancienne place peut avoir disparu. Demandez un nouveau code d'invitation au propriétaire du journal et saisissez-le pour revenir. Cette fois, reliez un compte Apple ou Google afin de conserver votre place. En tant que propriétaire, reconnectez-vous comme avant (Apple, Google ou e-mail) et tout est de nouveau là.",
          "de": "Wenn du nur mitliest und das Handy gewechselt oder die App ohne verknüpftes Konto gelöscht hast, ist dein alter Platz womöglich weg. Bitte die tagebuchführende Person um einen neuen Einladungscode und gib ihn erneut ein. Verknüpfe diesmal ein Apple- oder Google-Konto, damit dein Platz erhalten bleibt. Als tagebuchführende Person meldest du dich einfach wie zuvor an (Apple, Google oder E-Mail) — dann ist alles wieder da."
        }
      }
    ],
    "contact": {
      "vi": "Còn điều gì chưa rõ hay cần nhà mình giúp một tay, bố mẹ viết cho một người thật ở hello@cubi.family, nhà mình luôn ở đây nhé.",
      "en": "If anything is still unclear or you'd like a hand, write to a real person at hello@cubi.family — we're always here.",
      "fr": "S'il reste quoi que ce soit d'obscur ou si vous avez besoin d'un coup de main, écrivez à une vraie personne à hello@cubi.family — nous sommes toujours là.",
      "de": "Wenn noch etwas unklar ist oder du Hilfe brauchst, schreib einem echten Menschen an hello@cubi.family — wir sind da."
    }
  },
  "delete": {
    "title": {
      "vi": "Xóa tài khoản",
      "en": "Account deletion",
      "fr": "Supprimer le compte",
      "de": "Konto löschen"
    },
    "intro": {
      "vi": "Bố mẹ có thể yêu cầu xóa tài khoản Cubi và toàn bộ dữ liệu đi kèm bất cứ lúc nào, không cần cài lại ứng dụng. Cần giúp một tay, bố mẹ viết cho Cubi tại hello@cubi.family nhé.",
      "en": "You can request deletion of your Cubi account and all associated data at any time, without reinstalling the app. Need a hand? Write to us at hello@cubi.family.",
      "fr": "Vous pouvez demander la suppression de votre compte Cubi et de toutes les données associées à tout moment, sans réinstaller l'application. Besoin d'aide ? Écrivez-nous à hello@cubi.family.",
      "de": "Du kannst jederzeit die Löschung deines Cubi-Kontos und aller zugehörigen Daten verlangen, ohne die App neu zu installieren. Brauchst du Hilfe? Schreib uns an hello@cubi.family."
    },
    "sections": [
      {
        "heading": {
          "vi": "Cách 1 — Trong ứng dụng (nhanh nhất)",
          "en": "Option 1 — In the app (fastest)",
          "fr": "Option 1 — Dans l'application (le plus rapide)",
          "de": "Weg 1 — In der App (am schnellsten)"
        },
        "body": {
          "vi": "Mở Cubi, vào Cài đặt, chọn Xóa tài khoản, rồi làm theo bước xác nhận.",
          "en": "Open Cubi, go to Settings, choose Delete account, then follow the confirmation steps.",
          "fr": "Ouvrez Cubi, allez dans Réglages, choisissez Supprimer le compte, puis suivez les étapes de confirmation.",
          "de": "Öffne Cubi, geh zu Einstellungen, wähle Konto löschen und folge den Bestätigungsschritten."
        }
      },
      {
        "heading": {
          "vi": "Cách 2 — Qua email",
          "en": "Option 2 — By email",
          "fr": "Option 2 — Par e-mail",
          "de": "Weg 2 — Per E-Mail"
        },
        "body": {
          "vi": "Viết cho Cubi tại hello@cubi.family từ địa chỉ email gắn với tài khoản, tiêu đề \"Xóa tài khoản\". Cubi có thể hỏi thêm một bước để xác minh đúng là chủ tài khoản.",
          "en": "Write to Cubi at hello@cubi.family from the email address linked to your account, with the subject \"Delete account\". We may ask one verification step to confirm you are the account holder.",
          "fr": "Écrivez à Cubi à hello@cubi.family depuis l'adresse e-mail liée à votre compte, avec pour objet « Supprimer le compte ». Nous pourrons demander une vérification pour confirmer que vous êtes bien le titulaire du compte.",
          "de": "Schreib an hello@cubi.family von der E-Mail-Adresse, die mit deinem Konto verknüpft ist, mit dem Betreff „Konto löschen“. Wir fragen eventuell einen Bestätigungsschritt ab, um sicherzugehen, dass du der Kontoinhaber bist."
        }
      },
      {
        "heading": {
          "vi": "Những gì sẽ bị xóa",
          "en": "What gets deleted",
          "fr": "Ce qui est supprimé",
          "de": "Was gelöscht wird"
        },
        "body": {
          "vi": "Tài khoản của bố mẹ (email, tên hiển thị, cách đăng nhập), hồ sơ của bé (tên, ngày sinh, giới tính, ảnh đại diện, cách bố mẹ tự xưng), toàn bộ ảnh, video và lời kể đã lưu, các icon cảm xúc, danh sách lời mời và thông tin vòng tay cả nhà, cùng mã thông báo đẩy.",
          "en": "Your account (email, display name, sign-in method), the baby's profile (name, date of birth, gender, avatar, the word you call yourself by), all saved photos, videos and captions, emoji reactions, your invite list and family-circle details, and your push token.",
          "fr": "Votre compte (e-mail, nom affiché, mode de connexion), le profil du bébé (prénom, date de naissance, sexe, avatar, le mot par lequel vous vous désignez), toutes les photos, vidéos et légendes enregistrées, les réactions emoji, votre liste d'invitations et les détails du cercle familial, ainsi que votre jeton de notification.",
          "de": "Dein Konto (E-Mail, Anzeigename, Anmeldeart), das Profil des Babys (Name, Geburtsdatum, Geschlecht, Avatar, das Wort, mit dem du dich selbst nennst), alle gesicherten Fotos, Videos und Texte, Emoji-Reaktionen, deine Einladungsliste samt Angaben zum Familienkreis sowie dein Push-Token."
        }
      },
      {
        "heading": {
          "vi": "Thời gian",
          "en": "When",
          "fr": "Dans quels délais",
          "de": "Wann"
        },
        "body": {
          "vi": "Cubi xóa vĩnh viễn dữ liệu khỏi hệ thống và cơ sở dữ liệu trong vòng 30 ngày kể từ khi yêu cầu được xác nhận. Một phần nhỏ dữ liệu kỹ thuật (ví dụ bản ghi nhật ký, sao lưu) có thể được giữ thêm ít lâu khi luật yêu cầu hoặc để chống gian lận và giữ an toàn, rồi cũng sẽ được xóa.",
          "en": "Cubi permanently deletes your data from our systems and databases within 30 days of a confirmed request. A small amount of technical data (for example logs and backups) may be kept a little longer where the law requires it or to prevent fraud and keep the service safe, then deleted too.",
          "fr": "Cubi supprime définitivement vos données de nos systèmes et bases de données dans les 30 jours suivant une demande confirmée. Une petite quantité de données techniques (journaux et sauvegardes, par exemple) peut être conservée un peu plus longtemps lorsque la loi l'exige ou pour prévenir la fraude et sécuriser le service, avant d'être supprimée à son tour.",
          "de": "Cubi löscht deine Daten innerhalb von 30 Tagen nach einer bestätigten Anfrage endgültig aus unseren Systemen und Datenbanken. Eine kleine Menge technischer Daten (etwa Protokolle und Sicherungen) kann etwas länger bleiben, wo das Gesetz es verlangt oder es Betrug verhindert und den Dienst sicher hält — danach wird auch sie gelöscht."
        }
      },
      {
        "heading": {
          "vi": "Người thân (người xem)",
          "en": "Family members (viewers)",
          "fr": "Les proches (accès en lecture)",
          "de": "Familienmitglieder (Mitlesende)"
        },
        "body": {
          "vi": "Người tham gia bằng mã mời có thể tự gỡ quyền xem của mình trong ứng dụng, hoặc nhờ chủ nhật ký gỡ. Việc này chỉ xóa chỗ của người đó, không ảnh hưởng tới cuốn nhật ký của bố mẹ.",
          "en": "Anyone who joined with an invite code can remove their own access in the app, or ask the diary owner to remove it. This only deletes that person's place; it does not affect the parent's diary.",
          "fr": "Toute personne entrée avec un code d'invitation peut retirer son propre accès dans l'application, ou demander au propriétaire du journal de le retirer. Cela ne supprime que sa place ; le journal du parent n'est pas affecté.",
          "de": "Wer mit einem Einladungscode dazugekommen ist, kann seinen Zugang in der App selbst entfernen oder die tagebuchführende Person darum bitten. Damit verschwindet nur der Platz dieser Person; das Tagebuch der Eltern bleibt unberührt."
        }
      }
    ]
  }
};
