import type { SiteContent } from "./types";

/**
 * Bilingual site content (Vietnamese primary, English mirror).
 * Marketing = emotional storytelling; legal docs kept accurate + complete for
 * BOTH App Store and Google Play (incl. web-reachable account deletion).
 * Effective date: 2026-06-09.
 */
export const siteContent: SiteContent = {
  "marketing": {
    "tagline": {
      "chosen": {
        "vi": "Bé lớn từng ngày, thương đầy vòng tay.",
        "en": "Tiny moments, kept forever."
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
        "en": "A baby diary for the whole family"
      },
      "headline": {
        "vi": "Cùng nhìn bé lớn lên mỗi ngày",
        "en": "Watch the baby grow, together"
      },
      "sub": {
        "vi": "Cubi giữ lại những khoảnh khắc bé cười, bé tập đi, đôi bàn tay nhỏ xíu, rồi đưa bé về ngay màn hình của cả nhà mỗi ngày. Hôm nay bé đã khác hôm qua, và ông bà ở xa vẫn thấy cháu lớn lên từng chút một.",
        "en": "Cubi keeps the little moments — the first smile, the tiny hand — and brings the baby's latest photo to the home screen each day. Today's baby is already different from yesterday's, and even the family far away watches the little one grow."
      },
      "subShort": {
        "vi": "Cubi giữ lại từng ngày bé lớn, rồi đưa bé về ngay màn hình của cả nhà — để ông bà ở xa vẫn thấy cháu mỗi ngày.",
        "en": "Cubi keeps every day your baby grows and brings them to the whole family's home screen — so faraway grandparents see the little one each day."
      },
      "primaryCta": {
        "vi": "Tải Cubi",
        "en": "Download Cubi"
      },
      "secondaryCta": {
        "vi": "Xem Cubi hoạt động thế nào",
        "en": "See how Cubi works"
      }
    },
    "problem": {
      "title": {
        "vi": "Bé lớn nhanh quá, mà ông bà thì ở xa",
        "en": "The baby grows so fast, and family is far away"
      },
      "body": {
        "vi": "Tấm ảnh bé cười nằm lẫn trong hàng nghìn tấm khác, đoạn video bé tập đi trôi mất giữa những dòng tin ồn ào. Ông bà ở quê ngóng từng tấm ảnh cháu, người thân ở xa chỉ thỉnh thoảng mới thấy bé một lần. Cubi là một nơi yên tĩnh, ấm áp, chỉ dành cho cả nhà, nơi từng ngày bé thơ được giữ lại trước khi trôi qua, và ai thương bé cũng được nhìn thấy.",
        "en": "The photo of that first smile gets buried under thousands of others, the video of those first steps drifts away in noisy feeds. Grandparents wait for each new photo, family far away sees the baby only now and then. Cubi is one quiet, warm place just for the family — where these small days are kept before they slip past, and everyone who loves the little one gets to see."
      }
    },
    "features": [
      {
        "icon": "journal",
        "title": {
          "vi": "Cuốn nhật ký lớn cùng bé",
          "en": "A diary that grows with the baby"
        },
        "body": {
          "vi": "Mỗi tấm ảnh, mỗi đoạn video ngắn, mỗi dòng mẹ viết là một trang trong nhật ký của bé. Mẹ lưu lại khoảnh khắc bé cười, bé lẫy, bé gọi tiếng đầu tiên, để theo thời gian những trang ấy thành cả một câu chuyện bé thơ cho cả nhà mở lại.",
          "en": "Each photo, each short video, each line you write becomes a page in the baby's diary. Keep the first laugh, the first roll, the first word — and over time those pages become a whole story of the early days the family can open again."
        }
      },
      {
        "icon": "widget",
        "title": {
          "vi": "Bé trên màn hình chính, suốt cả ngày",
          "en": "The baby on the home screen, all day"
        },
        "body": {
          "vi": "Widget trên màn hình chính hiện tấm ảnh mới nhất của bé cùng số tuổi của bé, và lặng lẽ đổi theo thời gian trong ngày. Mẹ mở điện thoại lên là thấy bé, ông bà ở xa mở máy lên cũng thấy cháu, trên cả iPhone và Android.",
          "en": "The home-screen widget shows the baby's latest photo and the baby's age, quietly changing through the day. Open your phone and the baby is there; grandparents far away open theirs and the little one is there too — on both iPhone and Android."
        }
      },
      {
        "icon": "invite",
        "title": {
          "vi": "Mời cả nhà bằng một mã",
          "en": "Invite the whole family with one code"
        },
        "body": {
          "vi": "Gửi một mã hoặc một đường link, ông bà cô dì chú bác chỉ cần mở ra là cùng xem bé lớn. Không cần lập tài khoản, không cần mật khẩu, không có gì rườm rà, ông bà ngại công nghệ cũng vào được nhẹ nhàng nhé.",
          "en": "Share a code or a link, and grandparents, aunts, and uncles just open it to watch the baby grow. No account, no password, nothing complicated — even the family who finds phones fiddly can come in gently."
        }
      },
      {
        "icon": "reaction",
        "title": {
          "vi": "Một trái tim, thay cho lời bình",
          "en": "A heart, instead of a reply"
        },
        "body": {
          "vi": "Cả nhà thả một emoji khi thấy bé đáng yêu, chỉ vậy thôi. Không có ô bình luận, không có áp lực phải trả lời. Một trái tim của bà ngoại đôi khi đã đủ ấm cho cả ngày của mẹ rồi.",
          "en": "The family taps a single emoji when the baby melts their heart — that's all. There are no comments, no pressure to reply. One heart from grandma is sometimes warm enough for the whole day."
        }
      },
      {
        "icon": "privacy",
        "title": {
          "vi": "Bé chỉ thuộc về cả nhà",
          "en": "The baby belongs to the family alone"
        },
        "body": {
          "vi": "Không có bảng tin công khai, không người lạ, không người theo dõi, không quảng cáo. Mẹ chọn ai được nhìn thấy từng khoảnh khắc của bé. Đây là một góc riêng, yên tĩnh, chỉ của những người thương bé thật lòng.",
          "en": "No public feed, no strangers, no followers, no ads. You choose who sees each moment of the baby. This is a quiet, private corner just for the people who truly love the little one."
        }
      },
      {
        "icon": "age",
        "title": {
          "vi": "Tuổi của bé tự hiện lên",
          "en": "The baby's age appears on its own"
        },
        "body": {
          "vi": "Bé được sáu tháng mười hai ngày, Cubi tự tính và hiện tuổi của bé, không cần mẹ nhớ. Mỗi khoảnh khắc xếp theo một dòng thời gian dịu dàng, để cả nhà thấy bé lớn lên từng chút một.",
          "en": "Six months and twelve days old — Cubi works out the baby's age and shows it on its own, so you never have to count. Each moment sits along a gentle timeline, so the family can see the little one growing bit by bit."
        }
      },
      {
        "icon": "film",
        "title": {
          "vi": "Kỉ niệm thành thước phim có nhạc",
          "en": "Memories become a little film"
        },
        "body": {
          "vi": "Chọn 5–30 ảnh trong nhật ký và một mẫu phim. Cubi ghép thành video có nhạc để bố mẹ lưu về máy hoặc gửi cho cả nhà.",
          "en": "Pick 5–30 diary photos and a style. Cubi turns them into a keepsake video with music to save or share with the family."
        }
      },
      {
        "icon": "family",
        "title": {
          "vi": "Một nhà, mấy bé cũng vừa",
          "en": "One family, every little one"
        },
        "body": {
          "vi": "Theo dõi nhiều bé trong một dòng nhật ký gọn gàng. Mỗi mã mời có thể mở đúng nhật ký của một hoặc nhiều bé cho người thân.",
          "en": "Follow more than one child in one calm timeline. Each invitation can open exactly one or several children's diaries for family."
        }
      },
      {
        "icon": "measure",
        "title": {
          "vi": "Theo dõi hành trình lớn lên",
          "en": "Follow every growing step"
        },
        "body": {
          "vi": "Lưu cân nặng, chiều cao và những điều bé đang thích bên cạnh ảnh, video và các cột mốc tuổi của bé.",
          "en": "Keep height, weight and the things your child loves beside their photos, videos and age milestones."
        }
      }
    ],
    "howItWorks": [
      {
        "title": {
          "vi": "Mẹ lưu một khoảnh khắc",
          "en": "Mom keeps a moment"
        },
        "body": {
          "vi": "Một tấm ảnh bé cười, một đoạn video ngắn, một dòng mẹ muốn nhớ, mẹ lưu lại trong vài giây thôi.",
          "en": "A photo of the baby smiling, a short video, a line worth remembering — keep it in just a few seconds."
        }
      },
      {
        "title": {
          "vi": "Mời cả nhà cùng vào",
          "en": "Invite the whole family in"
        },
        "body": {
          "vi": "Gửi mã hoặc link cho ông bà, người thân ở xa. Mọi người mở ra là vào được, không cần tài khoản nhé.",
          "en": "Send a code or link to grandparents and family far away. They open it and they are in — no account needed."
        }
      },
      {
        "title": {
          "vi": "Cả nhà cùng nhìn bé lớn",
          "en": "The family watches the baby grow"
        },
        "body": {
          "vi": "Ảnh mới nhất của bé hiện ngay trên màn hình chính của cả nhà, đổi theo từng ngày. Bé ở xa mà như ở rất gần.",
          "en": "The baby's latest photo shows right on everyone's home screen, changing day by day. The baby feels close, however far apart you are."
        }
      }
    ],
    "philosophy": {
      "eyebrow": {
        "vi": "Vì sao có Cubi",
        "en": "Why Cubi exists"
      },
      "title": {
        "vi": "Một góc yên tĩnh, không phải một bảng tin",
        "en": "A quiet space, not a feed"
      },
      "body": {
        "vi": "Cubi sinh ra cho những ngày bé lớn quá nhanh, và cho những người thương bé ở quá xa. Ở đây không có lượt thích để chạy theo, không có bình luận để phải trả lời, chỉ có một trái tim nhỏ gửi cho bé. Cubi lùi lại thật khẽ, để cả nhà cảm thấy thân thuộc và riêng tư, chứ không thấy mình đang bị nhìn ngó. Tất cả những gì còn lại, là bé và những người thương bé.",
        "en": "Cubi was made for days when the baby grows too fast, and for the people who love the little one from too far away. There are no likes to chase, no comments to answer — just one small heart sent to the baby. Cubi steps back quietly, so the family feels close and private, never watched. What is left is simply the baby, and the people who love them."
      },
      "pullQuote": {
        "vi": "Bé ở xa mà như ở rất gần.",
        "en": "Far away, yet close enough to hold."
      }
    },
    "audience": {
      "title": {
        "vi": "Dành cho cả nhà thương bé",
        "en": "For the whole family who loves the baby"
      },
      "parents": {
        "vi": "Bố mẹ trẻ muốn giữ lại từng ngày bé lớn ở một nơi ấm áp, riêng tư, thay vì để ảnh của bé trôi đi giữa những dòng tin ồn ào.",
        "en": "Young parents who want to keep every day of the baby growing up somewhere warm and private — instead of letting the baby's photos drift away in noisy feeds."
      },
      "family": {
        "vi": "Ông bà, cô dì chú bác ở xa, ngóng từng tấm ảnh cháu. Chỉ cần mở Cubi là thấy bé lớn lên mỗi ngày, gần gũi như đang ở ngay bên cạnh.",
        "en": "Grandparents, aunts, and uncles far away, longing for each photo of the little one. They open Cubi and there the baby is, growing each day, close as if right beside them."
      }
    },
    "privacy": {
      "title": {
        "vi": "Bé chỉ thuộc về cả nhà",
        "en": "The baby belongs to the family alone"
      },
      "body": {
        "vi": "Những khoảnh khắc của bé là của riêng cả nhà, không phải để ai cũng xem. Mẹ chọn ai được nhìn thấy bé, và chỉ những người mẹ mời mới vào được. Cubi giữ góc riêng ấy yên tĩnh và ấm áp, để mẹ thấy an tâm mỗi lần lưu lại một khoảnh khắc của bé.",
        "en": "The baby's moments are the family's alone, not for everyone to see. You choose who gets to see the baby, and only the people you invite can come in. Cubi keeps that private corner quiet and warm, so you feel at ease every time you keep a moment of the little one."
      },
      "bullets": [
        {
          "vi": "Không có bảng tin công khai, không người lạ, không người theo dõi.",
          "en": "No public feed, no strangers, no followers."
        },
        {
          "vi": "Không quảng cáo xen vào khoảnh khắc của bé.",
          "en": "No ads in the baby's moments."
        },
        {
          "vi": "Mẹ chọn ai được nhìn thấy từng khoảnh khắc của bé.",
          "en": "You choose who sees each of the baby's moments."
        },
        {
          "vi": "Bé chỉ thuộc về những người thương bé thật lòng.",
          "en": "The baby belongs only to the people who truly love them."
        },
        {
          "vi": "Làm tại Việt Nam, cho cả nhà người Việt.",
          "en": "Made in Vietnam, for Vietnamese families."
        }
      ]
    },
    "faq": [
      {
        "q": {
          "vi": "Cubi có miễn phí không?",
          "en": "Is Cubi free?"
        },
        "a": {
          "vi": "Cả nhà dùng Cubi miễn phí. Sau này có thể có thêm một gói trả phí với vài điều dễ thương hơn, nhưng việc lưu giữ và cùng nhau ngắm bé lớn thì luôn dành cho cả nhà.",
          "en": "The whole family uses Cubi for free. A paid tier with a few lovelier extras may come later, but keeping moments and watching the baby grow together is always there for the family."
        }
      },
      {
        "q": {
          "vi": "Ông bà có cần lập tài khoản không?",
          "en": "Do grandparents need an account?"
        },
        "a": {
          "vi": "Không cần đâu. Ông bà chỉ cần mở mã hoặc link mẹ gửi là vào xem bé được ngay, không tài khoản, không mật khẩu, nhẹ nhàng thôi nhé.",
          "en": "Not at all. Grandparents just open the code or link you send and they can see the baby right away — no account, no password, kept simple."
        }
      },
      {
        "q": {
          "vi": "Ông bà tham gia bằng cách nào?",
          "en": "How does the family join?"
        },
        "a": {
          "vi": "Mẹ gửi cho ông bà một mã hoặc một đường link qua Zalo, tin nhắn, cách nào cũng được. Ông bà mở ra, làm theo vài bước thật đơn giản, là cùng xem bé với cả nhà.",
          "en": "You send grandparents a code or a link over Zalo, messages, however you like. They open it, follow a few simple steps, and they are watching the baby with the rest of the family."
        }
      },
      {
        "q": {
          "vi": "Cubi có phải chỉ riêng cho nhà mình không?",
          "en": "Is Cubi just for our family?"
        },
        "a": {
          "vi": "Đúng vậy. Chỉ những người mẹ mời mới thấy được bé. Không có người lạ, không có bảng tin công khai, đây là một góc riêng chỉ của cả nhà.",
          "en": "Yes. Only the people you invite can see the baby. No strangers, no public feed — this is a private corner just for the family."
        }
      },
      {
        "q": {
          "vi": "Cả nhà ở xa nhau có dùng được không?",
          "en": "Does it work when the family is far apart?"
        },
        "a": {
          "vi": "Được chứ, đó chính là điều Cubi làm tốt nhất. Ông bà ở quê, người thân ở xa đều thấy ảnh mới nhất của bé ngay trên màn hình chính mỗi ngày, gần gũi như đang ở bên cạnh.",
          "en": "Yes — that is what Cubi does best. Grandparents and family far away all see the baby's latest photo right on the home screen each day, close as if they were beside you."
        }
      },
      {
        "q": {
          "vi": "Cubi dùng được trên iPhone và Android chứ?",
          "en": "Does Cubi work on iPhone and Android?"
        },
        "a": {
          "vi": "Cả hai đều dùng được, và widget cũng hiện trên màn hình chính của cả hai. Trong nhà ai dùng máy gì cũng cùng ngắm bé được nhé.",
          "en": "Both work, and the widget shows on the home screen of each. Whatever phone someone in the family uses, they can watch the baby too."
        }
      }
    ],
    "finalCta": {
      "title": {
        "vi": "Đưa bé về gần cả nhà, từ hôm nay",
        "en": "Bring the baby close to the whole family, starting today"
      },
      "sub": {
        "vi": "Hôm nay bé đã khác hôm qua, và ông bà ở xa đang ngóng từng tấm ảnh cháu. Tải Cubi, lưu lại khoảnh khắc đầu tiên của bé, rồi mời cả nhà cùng xem nhé.",
        "en": "Today's baby is already different from yesterday's, and family far away is longing for each new photo. Download Cubi, keep the baby's first moment, and invite the whole family to watch."
      },
      "cta": {
        "vi": "Tải Cubi ngay",
        "en": "Download Cubi"
      }
    },
    "footerTagline": {
      "vi": "Cubi — bé lớn từng ngày, thương đầy vòng tay.",
      "en": "Cubi — tiny moments, kept forever."
    }
  },
  "terms": {
    "title": {
      "vi": "Điều khoản sử dụng",
      "en": "Terms of Service"
    },
    "intro": {
      "vi": "Cubi là một cuốn nhật ký riêng tư về bé, dành cho cả nhà. Đây là những điều khoản khi bố mẹ và người thân dùng Cubi trên cubi.family cùng ứng dụng iOS và Android. Cubi được làm ra tại Việt Nam. Khi bố mẹ mở Cubi lên và lưu khoảnh khắc đầu tiên, tức là cả nhà đã đồng ý với những điều khoản này. Hiệu lực từ ngày 9 tháng 6, 2026.",
      "en": "Cubi is a private diary of a child, kept for the whole family. These are the terms for using Cubi on cubi.family and the iOS and Android apps. Cubi is made in Vietnam. When you open Cubi and save your first moment, you agree to these terms. Effective June 9, 2026."
    },
    "sections": [
      {
        "heading": {
          "vi": "1. Đồng ý với điều khoản",
          "en": "1. Accepting these terms"
        },
        "body": {
          "vi": "Cubi là một không gian riêng để lưu lại quá trình lớn lên của bé: tấm ảnh, đoạn video, dòng chú thích, chia sẻ với những người mà bố mẹ mời vào. Cubi do đội ngũ Cubi vận hành, làm ra tại Việt Nam, với tên thương hiệu là Cubi.\n\nKhi bố mẹ và người thân dùng Cubi, dù là trên trang cubi.family hay trong ứng dụng iOS và Android, cả nhà đồng ý với những điều khoản này. Nếu có chỗ nào trong đây mà cả nhà chưa thấy thoải mái, bố mẹ cứ viết cho Cubi qua hello@cubi.family để cùng trao đổi nhé.\n\nĐiều khoản này đi cùng Chính sách quyền riêng tư của Cubi. Hai văn bản đọc cùng nhau sẽ cho cả nhà bức tranh đầy đủ.",
          "en": "Cubi is a quiet space to keep a child growing up: the photos, the videos, a line of caption, shared with the people you invite in. Cubi is run by the Cubi team, made in Vietnam, under the brand name Cubi.\n\nWhen you use Cubi, whether on cubi.family or in the iOS and Android apps, you agree to these terms. If anything here does not sit right with you, write to us at hello@cubi.family and we will talk it through.\n\nThese terms go hand in hand with the Cubi Privacy Policy. Read together, they give you the full picture."
        }
      },
      {
        "heading": {
          "vi": "2. Ai dùng được Cubi và tài khoản",
          "en": "2. Who can use Cubi, and accounts"
        },
        "body": {
          "vi": "Cubi do bố mẹ và người lớn trong nhà dùng. Mọi thông tin về bé là do bố mẹ nhập vào và do bố mẹ quản lý. Cubi không phải là ứng dụng để trẻ dưới 13 tuổi tự dùng.\n\nCó hai vai trò trong một cuốn nhật ký:\n\n- Người giữ nhật ký (bố hoặc mẹ): tạo hồ sơ của bé, lưu khoảnh khắc, mời người thân vào, và chọn ai được xem những gì. Ở phiên bản này, mỗi bé có một người giữ nhật ký.\n- Người thân (ông bà, cô dì chú bác, cả nhà): vào bằng mã mời 7 ký tự hoặc đường link mời, không cần đăng ký. Người thân đăng nhập ẩn danh, chỉ xem là chính, có thể thả cảm xúc bằng biểu tượng. Nếu muốn giữ chỗ của mình qua nhiều thiết bị, người thân có thể nâng cấp lên một tài khoản sau này.\n\nBố mẹ đăng nhập bằng Apple, Google, hoặc email kèm mật khẩu. Mong bố mẹ giữ thông tin đăng nhập an toàn, và cho Cubi biết nếu thấy có người lạ vào nhật ký của mình nhé.",
          "en": "Cubi is used by parents and adults in the family. Everything about a child is entered and controlled by the parent. Cubi is not an app for children under 13 to operate on their own.\n\nThere are two roles in a diary:\n\n- The diary keeper (a parent): creates the child's profile, saves moments, invites family, and chooses who sees what. In this version, each child has one diary keeper.\n- Family (grandparents, aunts and uncles, the whole family): join with a 7-character invite code or an invite link, with no sign-up. Family sign in anonymously, are view-only, and can react with an emoji. To keep their place across devices, family can upgrade to an account later.\n\nParents sign in with Apple, Google, or email and password. Please keep your sign-in details safe, and tell us if you ever see someone you do not recognise in your diary."
        }
      },
      {
        "heading": {
          "vi": "3. Nội dung của cả nhà và quyền cho Cubi",
          "en": "3. Your content, and the license you give Cubi"
        },
        "body": {
          "vi": "Những tấm ảnh, đoạn video và dòng chú thích trong nhật ký là của cả nhà. Cubi không nhận đó là của mình.\n\nĐể Cubi có thể giữ và hiển thị những khoảnh khắc ấy, bố mẹ cho Cubi một quyền giới hạn: lưu trữ, xử lý, nén ảnh, và hiển thị nội dung cho đúng những người mà bố mẹ đã mời, với đúng phạm vi mà bố mẹ đã chọn. Quyền này chỉ vừa đủ để Cubi chạy được dịch vụ, không hơn.\n\nCubi không dùng nội dung của cả nhà để quảng cáo, không bán nội dung cho ai, và không có bảng tin công khai. Khi bố mẹ gỡ một khoảnh khắc hoặc xóa tài khoản, quyền này cũng chấm dứt, trừ những bản sao kỹ thuật tạm thời cần thời gian ngắn để dọn khỏi hệ thống.",
          "en": "The photos, videos and captions in a diary belong to the family. Cubi does not claim them as ours.\n\nSo that Cubi can keep and show those moments, you give us one limited license: to store, process, compress, and display the content to exactly the people you invite, within exactly the scope you choose. This license is only as much as Cubi needs to run the service, no more.\n\nCubi does not use your content for advertising, does not sell it to anyone, and has no public feed. When you remove a moment or delete your account, this license ends too, apart from short-lived technical copies that take a little time to clear from our systems."
        }
      },
      {
        "heading": {
          "vi": "4. Dùng Cubi cho tử tế",
          "en": "4. Using Cubi kindly"
        },
        "body": {
          "vi": "Cubi là chốn riêng của cả nhà, nên có vài điều mong mọi người cùng giữ:\n\n- Không lưu nội dung trái pháp luật, hoặc nội dung mà bố mẹ không có quyền chia sẻ.\n- Không tìm cách xem những khoảnh khắc chưa được chia sẻ với mình.\n- Tôn trọng các bé có hình ảnh trong nhật ký, kể cả khi đó không phải con của mình.\n- Không quấy rối người khác trong cùng cuốn nhật ký, và không tìm cách phá hay xâm nhập hệ thống của Cubi.\n\nNếu một cuốn nhật ký bị dùng sai vào những việc trên, Cubi có thể tạm dừng quyền truy cập để giữ an toàn cho cả nhà.",
          "en": "Cubi is a family's private place, so there are a few things we ask everyone to keep:\n\n- Do not upload unlawful content, or content you do not have the right to share.\n- Do not try to reach moments that were not shared with you.\n- Respect the children whose images appear in a diary, even when they are not your own.\n- Do not harass other people in the same diary, and do not try to break into or disrupt Cubi's systems.\n\nIf a diary is misused in these ways, Cubi may pause access to keep the family safe."
        }
      },
      {
        "heading": {
          "vi": "5. Giá dịch vụ",
          "en": "5. Pricing"
        },
        "body": {
          "vi": "Hiện tại Cubi miễn phí cho cả nhà.\n\nSau này Cubi có thể giới thiệu một gói trả phí với thêm tính năng. Nếu điều đó xảy ra, Cubi sẽ báo trước cho bố mẹ, nói rõ điều gì miễn phí và điều gì trả phí, và sẽ không bất ngờ tính tiền những thứ bố mẹ đang dùng miễn phí mà không hỏi trước. Khi đó, việc thanh toán sẽ được xử lý qua cửa hàng ứng dụng nơi bố mẹ tải Cubi: trên iOS là qua App Store của Apple (theo Điều khoản và Điều kiện Dịch vụ Truyền thông của Apple), trên Android là qua Google Play (theo Điều khoản Dịch vụ của Google Play). Việc hoàn tiền do chính sách của cửa hàng tương ứng quyết định.",
          "en": "Cubi is currently free for the whole family.\n\nLater, Cubi may introduce a paid tier with more features. If that happens, we will tell you in advance, make clear what stays free and what is paid, and we will not suddenly charge you for something you use for free today without asking first. Any purchase is then processed through the app store you downloaded Cubi from: on iOS through the Apple App Store (under Apple's Apple Media Services Terms and Conditions), and on Android through Google Play (under the Google Play Terms of Service). Refunds are handled under the respective store's policy."
        }
      },
      {
        "heading": {
          "vi": "6. Quyền riêng tư",
          "en": "6. Privacy"
        },
        "body": {
          "vi": "Cách Cubi giữ và xử lý thông tin của cả nhà được viết trong Chính sách quyền riêng tư riêng. Trong đó nói rõ Cubi thu thập những gì, ai là bên giúp Cubi lưu trữ và gửi thông báo, và bố mẹ có những lựa chọn nào.\n\nMột vài điều cả nhà có thể yên tâm: Cubi nén ảnh ở cạnh dài 1920px và không giữ ảnh gốc độ phân giải đầy đủ; thông tin vị trí GPS gắn trong ảnh được gỡ khỏi file lưu và chia sẻ; Cubi không dùng vị trí cho bất kỳ tính năng nào và không hiện bản đồ. Chi tiết đầy đủ nằm trong Chính sách quyền riêng tư nhé.",
          "en": "How Cubi keeps and handles your family's information is set out in a separate Privacy Policy. It explains what Cubi collects, who helps us store data and send notifications, and what choices you have.\n\nA few things you can rest easy about: Cubi compresses photos to a 1920px long edge and does not keep full-resolution originals; a photo's embedded GPS location metadata is stripped from the stored and shared file; and Cubi does not use location for any feature and shows no map. The full detail is in the Privacy Policy."
        }
      },
      {
        "heading": {
          "vi": "7. Dịch vụ và những thay đổi",
          "en": "7. Service availability and changes"
        },
        "body": {
          "vi": "Cubi được cung cấp ở dạng hiện có. Cubi luôn cố gắng để dịch vụ chạy đều và những khoảnh khắc của cả nhà luôn ở đó, nhưng đôi lúc có thể cần tạm dừng để bảo trì, hoặc một tính năng có thể được thêm vào hay thay đổi để Cubi tốt hơn.\n\nMỗi khoảnh khắc, bố mẹ chọn ai được xem: Cả nhà, Chỉ một số người, hay Chỉ mình tôi. Với những điều thật riêng tư, chọn Chỉ mình tôi thì chỉ một mình bố mẹ nhìn thấy.",
          "en": "Cubi is provided on an as-is basis. We work to keep the service steady and your moments where you left them, but at times we may pause for maintenance, and a feature may be added or changed to make Cubi better.\n\nFor each moment, you choose who can see it: Everyone in the family, Only some people, or Only me. For the most private moments, choosing Only me keeps them for your eyes only."
        }
      },
      {
        "heading": {
          "vi": "8. Xóa tài khoản và chấm dứt",
          "en": "8. Account deletion and termination"
        },
        "body": {
          "vi": "Cả nhà luôn được rời đi khi muốn.\n\n- Bố mẹ có thể tự xóa tài khoản ngay trong ứng dụng, ở mục Cài đặt, hoặc viết cho Cubi qua hello@cubi.family. Xóa tài khoản của người giữ nhật ký sẽ gỡ tài khoản đó cùng những ảnh và video đã lưu.\n- Người thân có thể tự gỡ quyền truy cập của mình ngay trong ứng dụng. Việc này chỉ gỡ chỗ của người thân, không xóa cuốn nhật ký của bố mẹ.\n\nCubi có thể tạm dừng hoặc chấm dứt quyền truy cập nếu một cuốn nhật ký bị dùng sai theo phần Dùng Cubi cho tử tế, để bảo vệ các bé và những người khác.",
          "en": "You can always leave when you wish.\n\n- A parent can delete their account from inside the app, under Settings, or by writing to hello@cubi.family. Deleting a diary keeper's account removes that account along with the photos and videos saved to it.\n- Family can remove their own access from inside the app. This only removes the family member's place; it does not delete the parent's diary.\n\nCubi may suspend or end access if a diary is misused under the Using Cubi kindly section, in order to protect children and other people."
        }
      },
      {
        "heading": {
          "vi": "9. Tuyên bố và giới hạn trách nhiệm",
          "en": "9. Disclaimers and limit of liability"
        },
        "body": {
          "vi": "Cubi mong là nơi đáng tin để giữ những khoảnh khắc của bé, và sẽ chăm chút điều đó bằng sự cẩn thận hợp lý. Dù vậy, không một dịch vụ nào có thể hứa hoàn hảo tuyệt đối, nên Cubi cung cấp dịch vụ ở dạng hiện có, không kèm những cam kết vượt quá những gì pháp luật yêu cầu.\n\nCả nhà nên giữ thêm bản sao những tấm ảnh và video quý giá ở nơi khác nữa, để cho yên tâm.\n\nTrong phạm vi pháp luật cho phép, Cubi không chịu trách nhiệm cho những thiệt hại gián tiếp hay ngoài dự liệu. Phần này không lấy đi của cả nhà bất kỳ quyền nào mà pháp luật bảo vệ cho người tiêu dùng tại Việt Nam.",
          "en": "Cubi wants to be a place you can trust with your child's moments, and we tend to it with reasonable care. Even so, no service can promise to be flawless, so Cubi is provided on an as-is basis, without promises beyond what the law requires.\n\nPlease keep a second copy of your most precious photos and videos somewhere else too, for peace of mind.\n\nTo the extent the law allows, Cubi is not responsible for indirect or unforeseeable loss. Nothing here takes away any consumer rights the law gives you in Vietnam."
        }
      },
      {
        "heading": {
          "vi": "10. App Store của Apple",
          "en": "10. The Apple App Store"
        },
        "body": {
          "vi": "Khi cả nhà tải Cubi từ App Store của Apple, có thêm vài điều áp dụng giữa cả nhà và Cubi, không phải với Apple. Cubi viết rõ ra đây cho minh bạch:\n\n- Điều khoản này chỉ giữa cả nhà và Cubi, không phải với Apple. Cubi, chứ không phải Apple, chịu trách nhiệm về ứng dụng Cubi và nội dung trong đó.\n- Phạm vi giấy phép: Cubi cấp cho cả nhà một giấy phép có giới hạn, không được chuyển nhượng, để dùng Cubi trên các thiết bị mang thương hiệu Apple mà cả nhà sở hữu hoặc quản lý, theo Quy tắc sử dụng nêu trong Điều khoản và Điều kiện Dịch vụ Truyền thông của Apple, bao gồm cả việc dùng qua Chia sẻ trong gia đình.\n- Bảo trì và hỗ trợ: Cubi là bên duy nhất lo việc bảo trì và hỗ trợ cho ứng dụng. Apple không có nghĩa vụ nào về bảo trì và hỗ trợ.\n- Bảo hành: Cubi là bên duy nhất chịu trách nhiệm về mọi bảo hành, dù được nêu rõ hay theo luật, trong phạm vi chưa được loại trừ hợp lệ. Nếu ứng dụng không đúng với bảo hành áp dụng, cả nhà có thể báo cho Apple, và Apple sẽ hoàn lại giá mua ứng dụng nếu có; ngoài việc đó, trong phạm vi pháp luật cho phép, Apple không có nghĩa vụ bảo hành nào khác.\n- Khiếu nại về sản phẩm: Cubi, chứ không phải Apple, chịu trách nhiệm xử lý khiếu nại của cả nhà hoặc của bên thứ ba liên quan đến ứng dụng, bao gồm khiếu nại về trách nhiệm sản phẩm, khiếu nại rằng ứng dụng không đáp ứng yêu cầu pháp lý, và khiếu nại theo luật bảo vệ người tiêu dùng hay quyền riêng tư.\n- Tuân thủ pháp luật: cả nhà xác nhận mình không ở một quốc gia đang chịu lệnh cấm vận của Chính phủ Hoa Kỳ hoặc bị xếp là quốc gia hỗ trợ khủng bố, và mình không nằm trong danh sách các bên bị cấm của Chính phủ Hoa Kỳ.\n- Quyền sở hữu trí tuệ: nếu có khiếu nại rằng ứng dụng Cubi xâm phạm quyền sở hữu trí tuệ của bên thứ ba, Cubi, chứ không phải Apple, là bên chịu trách nhiệm điều tra, bảo vệ, dàn xếp và giải quyết khiếu nại đó.\n- Điều khoản của bên thứ ba: khi dùng Cubi, cả nhà tuân thủ các điều khoản của bên thứ ba có liên quan.\n- Tên và liên hệ của nhà phát triển: nếu có thắc mắc hay khiếu nại về ứng dụng, cả nhà liên hệ Cubi qua hello@cubi.family.\n- Apple là bên thụ hưởng thứ ba: cả nhà đồng ý rằng Apple và các công ty con của Apple là bên thụ hưởng thứ ba của điều khoản này, và khi cả nhà chấp nhận điều khoản, Apple có quyền thực thi điều khoản này với cả nhà như một bên thụ hưởng thứ ba.",
          "en": "When you download Cubi from the Apple App Store, a few extra points apply between you and Cubi, not with Apple. We set them out here for clarity:\n\n- These terms are between you and Cubi only, and not with Apple. Cubi, not Apple, is responsible for the Cubi app and its content.\n- Scope of license: Cubi grants you a limited, non-transferable license to use Cubi on any Apple-branded products that you own or control, as permitted by the Usage Rules in Apple's Apple Media Services Terms and Conditions, including use through Family Sharing.\n- Maintenance and support: Cubi alone provides any maintenance and support for the app. Apple has no obligation whatsoever to furnish maintenance and support services.\n- Warranty: Cubi alone is responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. If the app fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any; beyond that, to the maximum extent the law allows, Apple has no other warranty obligation for the app.\n- Product claims: Cubi, not Apple, is responsible for addressing any claims by you or a third party relating to the app, including product liability claims, claims that the app fails to meet a legal or regulatory requirement, and claims under consumer protection or privacy law.\n- Legal compliance: you confirm you are not located in a country subject to a U.S. Government embargo or designated as supporting terrorism, and that you are not listed on any U.S. Government list of prohibited or restricted parties.\n- Intellectual property rights: if a third party claims the Cubi app infringes their intellectual property rights, Cubi, not Apple, is responsible for the investigation, defense, settlement, and discharge of that claim.\n- Third-party terms: when using Cubi, you comply with any applicable third-party terms of agreement.\n- Developer name and contact: for any question or claim about the app, contact Cubi at hello@cubi.family.\n- Apple as third-party beneficiary: you agree that Apple and Apple's subsidiaries are third-party beneficiaries of these terms, and that upon your acceptance, Apple has the right to enforce these terms against you as a third-party beneficiary."
        }
      },
      {
        "heading": {
          "vi": "11. Google Play",
          "en": "11. Google Play"
        },
        "body": {
          "vi": "Khi cả nhà tải Cubi từ Google Play, việc sử dụng cũng tuân theo Điều khoản Dịch vụ của Google Play. Điều khoản này là thỏa thuận giữa cả nhà và Cubi; Google không phải là một bên và không chịu trách nhiệm về ứng dụng Cubi hay nội dung trong đó. Cubi là bên duy nhất lo việc hỗ trợ, bảo hành và xử lý mọi khiếu nại liên quan đến ứng dụng.",
          "en": "When you download Cubi from Google Play, your use is also subject to the Google Play Terms of Service. These terms are an agreement between you and Cubi; Google is not a party and is not responsible for the Cubi app or its content. Cubi alone provides support, warranties, and the handling of any claims relating to the app."
        }
      },
      {
        "heading": {
          "vi": "12. Luật áp dụng và liên hệ",
          "en": "12. Governing law and contact"
        },
        "body": {
          "vi": "Điều khoản này theo pháp luật Việt Nam, và Cubi được làm ra tại Việt Nam. Nếu có điều gì cần làm rõ, mong cả nhà cứ viết cho Cubi trước, để cùng tìm cách giải quyết một cách nhẹ nhàng.\n\nLiên hệ với Cubi qua hello@cubi.family nhé.",
          "en": "These terms are governed by the laws of Vietnam, and Cubi is made in Vietnam. If something needs sorting out, please write to us first so we can find a gentle way through it together.\n\nReach Cubi at hello@cubi.family."
        }
      },
      {
        "heading": {
          "vi": "13. Khi điều khoản thay đổi",
          "en": "13. When these terms change"
        },
        "body": {
          "vi": "Theo thời gian Cubi có thể cập nhật điều khoản này, ví dụ khi thêm tính năng mới hoặc khi luật thay đổi. Khi có thay đổi đáng kể, Cubi sẽ báo cho cả nhà và cập nhật ngày hiệu lực ở đầu trang. Nếu cả nhà vẫn dùng Cubi sau khi thay đổi có hiệu lực, tức là cả nhà đồng ý với điều khoản mới. Nếu chưa thoải mái với thay đổi, bố mẹ luôn có thể xóa tài khoản theo phần ở trên.\n\nNgày hiệu lực: 9 tháng 6, 2026.",
          "en": "Over time we may update these terms, for example when we add a feature or when the law changes. When a change is meaningful, we will let you know and update the effective date at the top. If you keep using Cubi after a change takes effect, you agree to the new terms. If a change does not sit right with you, you can always delete your account as described above.\n\nEffective date: June 9, 2026."
        }
      }
    ]
  },
  "privacy": {
    "title": {
      "vi": "Chính sách bảo mật",
      "en": "Privacy Policy"
    },
    "intro": {
      "vi": "Cubi là cuốn nhật ký riêng tư về bé, dành cho cả nhà. Chính sách này nói rõ Cubi giữ những gì, dùng ra sao và ai có thể nhìn thấy những khoảnh khắc bố mẹ lưu lại, để cả nhà yên tâm. Chính sách áp dụng cho ứng dụng Cubi và trang cubi.family. Có hiệu lực từ ngày 9 tháng 6, 2026.",
      "en": "Cubi is a private baby diary for the whole family. This policy explains plainly what Cubi keeps, how we use it, and who can see the moments you save, so your family can feel at ease. It covers the Cubi app and the cubi.family website. Effective June 9, 2026."
    },
    "sections": [
      {
        "heading": {
          "vi": "Cubi là ai",
          "en": "Who we are"
        },
        "body": {
          "vi": "Cubi là cuốn nhật ký riêng tư ghi lại quá trình bé lớn lên: ảnh, video, đôi dòng kể về một ngày của bé, chia sẻ trong vòng tay cả nhà. Cubi được làm tại Việt Nam, trên iOS (từ iOS 17.0) và Android.\n\n- Chính sách này áp dụng cho ứng dụng Cubi và trang cubi.family.\n- Ảnh và video được lưu trữ và phục vụ qua cdn.cubi.family.\n- Có gì cần hỏi, bố mẹ viết thư cho Cubi qua hello@cubi.family nhé.",
          "en": "Cubi is a private diary of a child's growing up: photos, videos, and a few words about the baby's day, shared inside your family. Cubi is made in Vietnam, for iOS (from iOS 17.0) and Android.\n\n- This policy covers the Cubi app and the cubi.family website.\n- Photos and videos are stored and served through cdn.cubi.family.\n- If you have a question, write to us at hello@cubi.family."
        }
      },
      {
        "heading": {
          "vi": "Cubi giữ những gì",
          "en": "What we collect"
        },
        "body": {
          "vi": "Cubi chỉ giữ những gì cần để cuốn nhật ký chạy được. Cụ thể là:\n\n- Tài khoản của bố mẹ: email, tên hiển thị, và cách bố mẹ đăng nhập (Apple, Google, hay email và mật khẩu).\n- Hồ sơ của bé: tên bé, ngày sinh, giới tính (nếu bố mẹ muốn điền), ảnh đại diện (nếu có), và cách bố mẹ tự xưng với bé (mẹ, má, bố, ba…). Tuổi của bé được tính tự động từ ngày sinh, ví dụ \"6 tháng 12 ngày\".\n- Những gì bố mẹ lưu: ảnh, video và lời kể đi kèm mỗi khoảnh khắc.\n- Cảm xúc: các icon cảm xúc cả nhà thả cho mỗi khoảnh khắc (Cubi không có bình luận).\n- Vòng tay cả nhà: nhãn lời mời bố mẹ đặt (ví dụ \"Bà ngoại\"), tên thiết bị, thời điểm tham gia và lần ghé gần nhất của mỗi người.\n- Thiết bị: mã thông báo đẩy và múi giờ của thiết bị, để gửi thông báo và tính tuổi bé cho đúng.\n- Tùy chọn thông báo: bố mẹ bật hay tắt loại thông báo nào — phần này lưu ngay trên máy.\n- Số liệu dùng app và báo cáo sự cố, thu qua Firebase, để giữ Cubi chạy mượt và chỉnh lại khi có chỗ chưa ổn.\n\nVài điều Cubi muốn nói thật rõ:\n\n- Ảnh được nén lại (cạnh dài 1920px). Cubi không giữ bản gốc độ phân giải đầy đủ.\n- Vị trí (GPS) đôi khi gắn sẵn trong ảnh sẽ được gỡ khỏi tấm ảnh trước khi lưu và chia sẻ. Cubi không dùng vị trí cho bất kỳ tính năng nào và không có bản đồ.",
          "en": "Cubi keeps only what the diary needs to work. Specifically:\n\n- Your account: email, display name, and how you sign in (Apple, Google, or email and password).\n- The baby's profile: name, date of birth, gender (if you choose to add it), an avatar (if any), and the word you call yourself by (mẹ, má, bố, ba…). The baby's age is computed automatically from the date of birth, for example \"6 months 12 days\".\n- What you save: the photos, videos, and the caption with each moment.\n- Reactions: the emoji your family taps on a moment (Cubi has no comments).\n- Your family circle: the invite labels you set (such as \"Grandma\"), device name, when each person joined, and when they were last active.\n- Device: the push token and the device timezone, used to send notifications and show the right age.\n- Notification preferences: which notifications you turn on or off — this is stored on your device.\n- Usage and crash data, collected through Firebase, to keep Cubi running smoothly and to fix problems.\n\nA few things we want to say plainly:\n\n- Photos are compressed (long edge 1920px). Cubi does not keep full-resolution originals.\n- Location (GPS) data sometimes embedded in a photo is stripped from the image before it is stored and shared. Cubi does not use location for any feature, and there is no map."
        }
      },
      {
        "heading": {
          "vi": "Cubi dùng những thông tin này để làm gì",
          "en": "How we use it"
        },
        "body": {
          "vi": "Mọi thông tin Cubi giữ đều phục vụ một việc: để cả nhà cùng dõi theo bé lớn lên.\n\n- Vận hành cuốn nhật ký: lưu khoảnh khắc, hiện dòng thời gian, tính tuổi bé.\n- Mang ảnh và widget đến với người nhà bố mẹ mời: ảnh mới nhất và tuổi bé hiện ngay trên màn hình chính và màn hình khóa của điện thoại, tự làm mới trong ngày.\n- Gửi những thông báo bố mẹ đã bật, ví dụ khi có khoảnh khắc mới.\n- Giữ dịch vụ chạy ổn định và chỉnh lại khi có chỗ chưa ổn, qua số liệu dùng app và báo cáo sự cố.\n\nCubi không dùng thông tin của bố mẹ cho quảng cáo, và Cubi không bán dữ liệu cá nhân. Ở đây không có bảng tin công khai, không người lạ, không người theo dõi.\n\nCubi có chia sẻ một số dữ liệu kỹ thuật với các đối tác vận hành để dịch vụ chạy được: số liệu sử dụng, báo cáo sự cố và mã định danh thiết bị được chia sẻ với Google Firebase để giữ Cubi ổn định và sửa lỗi. Đây là việc chia sẻ để vận hành dịch vụ, không phải bán dữ liệu, và không dùng cho quảng cáo.",
          "en": "Everything Cubi keeps serves one thing: helping your family watch the baby grow.\n\n- Running the diary: saving moments, showing the timeline, computing the baby's age.\n- Delivering photos and the widget to the family you invite: the latest photo and the baby's age appear right on the phone's home screen and lock screen, refreshing through the day.\n- Sending the notifications you have turned on, such as when there is a new moment.\n- Keeping the service stable and fixing problems, through usage and crash data.\n\nCubi does not use your information for advertising, and Cubi does not sell personal data. There is no public feed here, no strangers, no followers.\n\nCubi does share some technical data with the partners that run the service: usage statistics, crash reports, and device identifiers are shared with Google Firebase to keep Cubi stable and fix bugs. This is sharing to operate the service, not selling data, and never for advertising."
        }
      },
      {
        "heading": {
          "vi": "Cơ sở pháp lý của việc xử lý",
          "en": "Our legal basis"
        },
        "body": {
          "vi": "Cubi chỉ xử lý thông tin khi có lý do rõ ràng:\n\n- Để thực hiện thỏa thuận với bố mẹ — tức là chạy cuốn nhật ký mà bố mẹ đã chọn dùng.\n- Theo sự đồng ý của bố mẹ — ví dụ khi bố mẹ bật thông báo. Bố mẹ có thể rút lại bất cứ lúc nào.\n- Vì lợi ích hợp lý của Cubi — giữ dịch vụ an toàn, ổn định và được cải thiện, ở mức cân bằng với quyền riêng tư của cả nhà.",
          "en": "Cubi processes information only when there is a clear reason:\n\n- To perform our agreement with you — that is, to run the diary you chose to use.\n- With your consent — for example, when you turn on notifications. You can withdraw it at any time.\n- For Cubi's legitimate interests — keeping the service safe, stable, and improved, balanced against your family's privacy."
        }
      },
      {
        "heading": {
          "vi": "Ai nhìn thấy khoảnh khắc của bé",
          "en": "Who can see your content"
        },
        "body": {
          "vi": "Chỉ những người nhà mà bố mẹ chủ nhật ký mời mới xem được. Không có gì hiện ra công khai.\n\n- Bố mẹ là người mở cuốn nhật ký, lưu khoảnh khắc và mời cả nhà bằng mã 7 ký tự hoặc đường liên kết. Người nhà tham gia mà không cần đăng ký, chỉ xem và thả cảm xúc. Nếu muốn giữ chỗ của mình khi đổi máy, người nhà có thể nâng lên tài khoản đầy đủ, hoàn toàn tùy chọn.\n- Mỗi khoảnh khắc có một phạm vi hiển thị do bố mẹ chọn: Cả nhà, Chỉ một số người, hay Chỉ mình tôi.\n- Với những khoảnh khắc thật riêng tư, chọn Chỉ mình tôi thì chỉ một mình bố mẹ nhìn thấy thôi nhé.",
          "en": "Only the family members the diary owner invites can see anything. Nothing is shown publicly.\n\n- The owner opens the diary, saves moments, and invites the family with a 7-character code or a link. Family members join with no sign-up; they view and react only. If they want to keep their place when changing devices, they can upgrade to a full account, entirely optional.\n- Each moment has a visibility scope the owner chooses: Everyone in the family, Only some people, or Only me.\n- For a truly private moment, choosing Only me keeps it for your eyes only."
        }
      },
      {
        "heading": {
          "vi": "Những bên giúp Cubi vận hành",
          "en": "Service providers"
        },
        "body": {
          "vi": "Cubi nhờ vài đối tác đáng tin để chạy dịch vụ. Họ chỉ xử lý dữ liệu trong phạm vi giúp Cubi hoạt động, không dùng cho mục đích riêng:\n\n- Supabase — cơ sở dữ liệu và đăng nhập, đặt tại Singapore (ap-southeast-1).\n- Cloudflare R2 — lưu ảnh và video, phục vụ qua cdn.cubi.family.\n- Google Firebase — gửi thông báo đẩy (FCM), số liệu dùng app và báo cáo sự cố.\n- Apple — Đăng nhập bằng Apple và gửi thông báo qua APNs.\n- Google — Đăng nhập bằng Google.\n\nNếu bố mẹ chọn Đăng nhập bằng Apple và dùng tính năng ẩn email của Apple, Cubi sẽ nhận một địa chỉ chuyển tiếp riêng tư thay cho email thật của bố mẹ — và như thế là vừa đủ.",
          "en": "Cubi relies on a few trusted partners to run the service. They process data only to help Cubi work, not for their own purposes:\n\n- Supabase — database and authentication, hosted in Singapore (ap-southeast-1).\n- Cloudflare R2 — photo and video storage, served through cdn.cubi.family.\n- Google Firebase — push notifications (FCM), usage analytics, and crash reporting.\n- Apple — Sign in with Apple and push delivery via APNs.\n- Google — Sign in with Google.\n\nIf you choose Sign in with Apple and use Apple's hide-my-email feature, Cubi receives a private relay address instead of your real email — and that is all we need."
        }
      },
      {
        "heading": {
          "vi": "Dữ liệu được xử lý ở đâu",
          "en": "International data transfer"
        },
        "body": {
          "vi": "Vì Cubi dùng các dịch vụ đám mây ở trên, thông tin của bố mẹ và bé có thể được lưu trữ và xử lý bên ngoài Việt Nam, ví dụ tại Singapore. Dù ở đâu, Cubi vẫn giữ thông tin theo đúng chính sách này.",
          "en": "Because Cubi uses the cloud services above, your information may be stored and processed outside Vietnam, for example in Singapore. Wherever it is held, Cubi protects it under this policy."
        }
      },
      {
        "heading": {
          "vi": "Cubi giữ trong bao lâu, và xóa thế nào",
          "en": "Retention and deletion"
        },
        "body": {
          "vi": "Cubi giữ thông tin chừng nào tài khoản còn hoạt động, để cuốn nhật ký vẫn ở đó mỗi khi cả nhà mở ra.\n\n- Bố/mẹ chủ nhật ký có thể xóa tài khoản ngay trong ứng dụng, ở phần Cài đặt, hoặc viết thư cho Cubi qua hello@cubi.family.\n- Khi bố mẹ xóa tài khoản, Cubi gỡ tài khoản đó cùng ảnh và video đã lưu. Việc này không thể hoàn lại, nên bố mẹ cân nhắc kỹ nhé.\n- Người nhà tham gia bằng mã mời có thể tự rời khỏi vòng tay cả nhà bất cứ lúc nào. Việc này chỉ gỡ quyền xem của riêng họ, cuốn nhật ký của bố mẹ vẫn nguyên vẹn.\n- Một phần dữ liệu kỹ thuật có thể được lưu thêm ít lâu khi luật yêu cầu hoặc để giữ dịch vụ an toàn, rồi sẽ được xóa.",
          "en": "Cubi keeps your information while your account is active, so the diary is there each time your family opens it.\n\n- The diary owner can delete the account right in the app, under Settings, or by writing to hello@cubi.family.\n- When you delete your account, Cubi removes that account along with the photos and videos saved with it. This cannot be undone, so please consider it carefully.\n- A family member who joined with an invite code can remove their own access at any time. This only removes their own view; the owner's diary stays intact.\n- Some technical data may be retained a little longer where the law requires it or to keep the service safe, then deleted."
        }
      },
      {
        "heading": {
          "vi": "Thông tin của bé",
          "en": "Children's information"
        },
        "body": {
          "vi": "Cubi do bố mẹ và người lớn trong nhà sử dụng. Mọi thông tin về bé — tên, ngày sinh, ảnh — đều do bố mẹ tự điền và tự quản.\n\n- Cubi không dành cho trẻ dưới 13 tuổi tự vận hành.\n- Bố mẹ là người quyết định lưu gì và mời ai vào xem, nên bố mẹ giữ phần trách nhiệm với những gì mình chia sẻ.\n- Nếu bố mẹ muốn gỡ thông tin của bé, chỉ cần xóa khoảnh khắc đó, hoặc xóa tài khoản như phần trên.\n\nCubi hướng tới người dùng là người lớn (bố mẹ và người thân), không phải là ứng dụng dành cho trẻ em tự dùng. Thông tin về bé là dữ liệu do bố mẹ — người có quyền của cha mẹ — cung cấp và đồng ý cho Cubi xử lý, để giữ và chia sẻ trong vòng tay cả nhà. Cubi tuân thủ các quy định về quyền riêng tư của trẻ em hiện hành, bao gồm COPPA (Hoa Kỳ) và GDPR (EU) ở những nơi áp dụng. Cubi không yêu cầu, không khuyến khích trẻ dưới 13 tuổi tự tạo tài khoản hay tự nhập thông tin.",
          "en": "Cubi is operated by parents and adults in the family. All information about a child — name, date of birth, photos — is entered and controlled by the parent.\n\n- Cubi is not directed to children under 13 to operate on their own.\n- The parent decides what to save and whom to invite, so the parent holds responsibility for what they share.\n- To remove a child's information, simply delete that moment, or delete the account as described above.\n\nCubi's audience is adults (parents and family); it is not an app for children to use on their own. Information about a child is data that the parent — the holder of parental authority — provides and consents to Cubi processing, to keep and share within the family circle. Cubi complies with applicable children's-privacy rules, including COPPA (US) and the GDPR (EU) where they apply. Cubi does not request or encourage children under 13 to create accounts or enter information themselves."
        }
      },
      {
        "heading": {
          "vi": "Cubi giữ an toàn ra sao",
          "en": "Security"
        },
        "body": {
          "vi": "Cubi coi cuốn nhật ký của bé như một thứ riêng tư cần được nâng niu.\n\n- Mọi dữ liệu được mã hóa khi truyền đi (HTTPS).\n- Ảnh và video được tải lên qua đường liên kết có chữ ký, dùng một lần.\n- Việc truy cập dữ liệu được kiểm soát theo từng tài khoản và từng vòng tay cả nhà.\n\nCubi vẫn đang hoàn thiện từng ngày. Không hệ thống nào an toàn tuyệt đối, nên Cubi nói thật để bố mẹ biết, và Cubi sẽ tiếp tục làm cho chắc chắn hơn.",
          "en": "Cubi treats your baby's diary as something private, to be looked after with care.\n\n- All data is encrypted in transit (HTTPS).\n- Photos and videos are uploaded through signed, single-use URLs.\n- Access to data is controlled per account and per family circle.\n\nCubi keeps being refined every day. No system is perfectly secure, so we tell you honestly, and we will keep making it sturdier over time."
        }
      },
      {
        "heading": {
          "vi": "Quyền của bố mẹ",
          "en": "Your rights"
        },
        "body": {
          "vi": "Cuốn nhật ký là của bố mẹ, và bố mẹ luôn nắm quyền với thông tin của mình.\n\n- Xem và sửa: bố mẹ có thể xem và chỉnh hồ sơ của bé cùng các khoảnh khắc ngay trong ứng dụng.\n- Xóa: bố mẹ có thể xóa từng khoảnh khắc, hoặc xóa cả tài khoản trong phần Cài đặt.\n- Rút lại đồng ý: bố mẹ có thể tắt thông báo bất cứ lúc nào trong phần Cài đặt.\n- Cần thêm gì, bố mẹ viết thư cho Cubi qua hello@cubi.family, Cubi sẽ giúp nhé.",
          "en": "The diary is yours, and you are always in control of your information.\n\n- Access and correct: you can view and edit the baby's profile and your moments right in the app.\n- Delete: you can delete individual moments, or delete the whole account under Settings.\n- Withdraw consent: you can turn off notifications at any time under Settings.\n- For anything else, write to us at hello@cubi.family and we will help."
        }
      },
      {
        "heading": {
          "vi": "Phí dịch vụ",
          "en": "Pricing"
        },
        "body": {
          "vi": "Hiện tại Cubi miễn phí. Về sau có thể có một gói trả phí, và nếu vậy Cubi sẽ báo trước rõ ràng. Việc có gói trả phí không làm thay đổi cách Cubi tôn trọng quyền riêng tư của cả nhà.",
          "en": "Cubi is currently free. A paid tier may be introduced later, and if so we will tell you clearly in advance. Adding a paid tier does not change how Cubi respects your family's privacy."
        }
      },
      {
        "heading": {
          "vi": "Liên hệ",
          "en": "Contact"
        },
        "body": {
          "vi": "Có điều gì băn khoăn về quyền riêng tư, hay muốn nhờ Cubi giúp với thông tin của mình, bố mẹ cứ viết thư cho Cubi nhé.\n\n- Email: hello@cubi.family\n- Web: cubi.family",
          "en": "If anything about privacy is on your mind, or you would like our help with your information, please write to us.\n\n- Email: hello@cubi.family\n- Web: cubi.family"
        }
      },
      {
        "heading": {
          "vi": "Khi chính sách thay đổi",
          "en": "Changes to this policy"
        },
        "body": {
          "vi": "Cubi lớn lên cùng các bé, nên đôi lúc chính sách này cần được cập nhật. Khi có thay đổi đáng kể, Cubi sẽ báo trong ứng dụng hoặc qua email, và luôn ghi rõ ngày hiệu lực mới.\n\n- Ngày hiệu lực hiện tại: 9 tháng 6, 2026.",
          "en": "Cubi grows alongside the babies it holds, so this policy will sometimes need updating. When there is a meaningful change, we will let you know in the app or by email, and we will always show the new effective date.\n\n- Current effective date: June 9, 2026."
        }
      }
    ]
  },
  "support": {
    "intro": {
      "vi": "Cubi là cuốn nhật ký riêng để cả nhà cùng giữ những khoảnh khắc bé lớn lên mỗi ngày. Có gì còn băn khoăn, bố mẹ viết cho một người thật ở hello@cubi.family, nhà mình luôn đọc và trả lời nhé.",
      "en": "Cubi is a private diary where the whole family keeps the small moments of a child growing up. Whenever something is unclear, write to a real person at hello@cubi.family — we read every message and write back."
    },
    "faq": [
      {
        "q": {
          "vi": "Ông bà tham gia bằng mã mời hay đường link như thế nào",
          "en": "How do grandparents join with an invite code or link"
        },
        "a": {
          "vi": "Bố mẹ gửi cho ông bà mã mời 7 ký tự hoặc đường link mời. Ông bà mở Cubi, nhập mã (hoặc bấm vào link), thế là vào xem được dòng thời gian của bé ngay, không cần đăng ký gì cả. Mỗi mã mời dành cho một người, nên cả nhà mỗi người nhận một mã riêng nhé.",
          "en": "The owner sends grandparents a 7-character invite code or an invite link. They open Cubi, enter the code (or tap the link), and they're in — looking at the baby's timeline right away, with no sign-up at all. Each invite is for one person, so everyone in the family gets their own code."
        }
      },
      {
        "q": {
          "vi": "Người xem có cần lập tài khoản không",
          "en": "Do viewers need to create an account"
        },
        "a": {
          "vi": "Không cần. Ông bà, cô dì chú bác chỉ cần mã mời là vào xem được, không phải đăng ký, không phải nhớ mật khẩu. Cubi tự ghi nhớ chỗ của mỗi người trên máy. Nếu muốn giữ chỗ khi đổi sang điện thoại khác, người xem có thể liên kết với tài khoản Apple hoặc Google sau, hoàn toàn tùy ý nhé.",
          "en": "No. Grandparents, aunts and uncles only need the invite code — no sign-up, no password to remember. Cubi remembers each person's place on their device. If someone wants to keep their place when switching to a new phone, they can optionally link an Apple or Google account later."
        }
      },
      {
        "q": {
          "vi": "Bấm link mời mà không mở được app thì làm sao",
          "en": "The invite link won't open the app — what do I do"
        },
        "a": {
          "vi": "Thường là vì link được mở bên trong Zalo hay Facebook (trình duyệt trong ứng dụng), chỗ đó chưa mở thẳng được Cubi. Bố mẹ bấm nút ba chấm ở góc rồi chọn \"Mở trong Safari\" (hoặc Chrome), hoặc sao chép link rồi dán vào trình duyệt. Nếu vẫn chưa được, bố mẹ mở Cubi trước rồi nhập tay mã 7 ký tự là vào được nhé.",
          "en": "This usually happens when the link opens inside Zalo or Facebook (their in-app browser), which can't open Cubi directly. Tap the three-dot menu in the corner and choose \"Open in Safari\" (or Chrome), or copy the link and paste it into a browser. If it still won't open, open Cubi first and type the 7-character code by hand."
        }
      },
      {
        "q": {
          "vi": "Làm sao thêm widget Cubi lên màn hình chính iPhone",
          "en": "How do I add the Cubi widget to my iPhone home screen"
        },
        "a": {
          "vi": "Bố mẹ chạm và giữ vào chỗ trống trên màn hình chính cho các biểu tượng rung lên, bấm dấu cộng ở góc trên, tìm Cubi trong danh sách, chọn cỡ widget rồi bấm \"Thêm widget\". Widget sẽ hiện ảnh mới nhất của bé cùng tuổi của bé tính tự động, ví dụ \"6 tháng 12 ngày\". Widget màn hình khóa cũng thêm theo cách tương tự, từ phần tùy chỉnh màn hình khóa nhé.",
          "en": "Touch and hold an empty spot on the home screen until the icons jiggle, tap the plus button at the top, find Cubi in the list, pick a widget size, then tap \"Add Widget\". The widget shows your baby's latest photo with their age computed automatically, for example \"6 months 12 days\". The lock-screen widget is added the same way, from the lock-screen customize panel."
        }
      },
      {
        "q": {
          "vi": "Widget chưa hiện ảnh mới của bé thì sao",
          "en": "The widget isn't showing the baby's latest photo"
        },
        "a": {
          "vi": "Widget tự làm mới trong ngày, nên đôi khi ảnh mới hiện chậm một chút. Bố mẹ thử mở Cubi lên một lần để app đồng bộ, xem máy có mạng không, và để Cubi được phép làm mới ở chế độ nền (Cài đặt iPhone, mục Cubi, bật \"Làm mới ứng dụng nền\"). Tuổi của bé trên widget luôn tính theo ngày sinh nên vẫn cập nhật mỗi ngày nhé.",
          "en": "The widget refreshes through the day, so a new photo can take a little while to appear. Open Cubi once so it can sync, check that the phone has a connection, and let Cubi refresh in the background (iPhone Settings, Cubi, turn on \"Background App Refresh\"). The baby's age on the widget is always computed from the date of birth, so it updates each day."
        }
      },
      {
        "q": {
          "vi": "Cubi có trên Android không",
          "en": "Is Cubi available on Android"
        },
        "a": {
          "vi": "Có, Cubi dùng được trên cả iPhone và điện thoại Android, và cả hai đều có widget màn hình chính để cả nhà thấy bé mỗi ngày nhé.",
          "en": "Yes, Cubi works on both iPhone and Android, and both have a home-screen widget so the whole family sees the baby every day."
        }
      },
      {
        "q": {
          "vi": "Cubi có miễn phí không",
          "en": "Is Cubi free"
        },
        "a": {
          "vi": "Hiện tại Cubi miễn phí cho cả nhà. Sau này có thể có thêm gói trả phí, nhưng nhà mình sẽ báo trước rõ ràng, không thu phí bất ngờ nhé.",
          "en": "Cubi is currently free for the whole family. A paid tier may be introduced later, but we'll tell you clearly in advance — nothing unexpected."
        }
      },
      {
        "q": {
          "vi": "Làm sao chọn ai được xem một khoảnh khắc",
          "en": "How do I control who sees a moment"
        },
        "a": {
          "vi": "Khi lưu một khoảnh khắc, bố mẹ chọn phạm vi xem: \"Cả nhà\", \"Chỉ một số người\", hay \"Chỉ mình tôi\". Mỗi khoảnh khắc đặt riêng được, nên ảnh nào muốn để dành riêng vẫn giữ kín; muốn riêng tư tuyệt đối thì chọn \"Chỉ mình tôi\", chỉ một mình bố mẹ thấy thôi nhé.",
          "en": "When you save a moment, you choose who can see it: \"Whole family\", \"Only some people\", or \"Only me\". Each moment is set on its own, so anything you want to keep private stays private; for a truly private moment, choose \"Only me\" and it is for your eyes only."
        }
      },
      {
        "q": {
          "vi": "Làm sao xóa tài khoản và chuyện gì xảy ra với ảnh của bé",
          "en": "How do I delete my account and what happens to my baby's photos"
        },
        "a": {
          "vi": "Bố mẹ là chủ nhật ký có thể xóa tài khoản ngay trong app (phần Cài đặt), hoặc viết cho nhà mình ở hello@cubi.family. Khi xóa tài khoản chủ, toàn bộ tài khoản cùng ảnh và video đã lưu sẽ được gỡ đi. Nếu là người xem muốn rời đi, người xem chỉ cần gỡ quyền xem của mình, việc đó không ảnh hưởng tới cuốn nhật ký của bố mẹ nhé.",
          "en": "As the diary owner you can delete your account right inside the app (Settings), or email us at hello@cubi.family. Deleting an owner account removes the account along with the photos and videos you saved. If you're a viewer who wants to leave, you simply remove your own access — that does not affect the owner's diary."
        }
      },
      {
        "q": {
          "vi": "Làm sao bật hoặc tắt thông báo",
          "en": "How do I turn notifications on or off"
        },
        "a": {
          "vi": "Bố mẹ chỉnh thông báo ngay trong Cubi ở phần Cài đặt, chọn loại nào muốn nhận. Nếu muốn tắt hẳn, bố mẹ vào Cài đặt iPhone, tìm Cubi rồi tắt thông báo. Lựa chọn của bố mẹ được lưu trên máy nên lần sau mở lên vẫn giữ nguyên nhé.",
          "en": "Adjust notifications inside Cubi under Settings, choosing which kinds you want to receive. To turn them off entirely, open iPhone Settings, find Cubi, and switch notifications off. Your choices are stored on the device, so they stay as you set them."
        }
      },
      {
        "q": {
          "vi": "Làm sao mời thêm hoặc gỡ một người trong nhà",
          "en": "How do I invite or remove a family member"
        },
        "a": {
          "vi": "Trong phần quản lý cả nhà, bố mẹ tạo một mã mời mới (đặt tên gợi nhớ như \"Bà ngoại\") rồi gửi cho người đó. Khi muốn gỡ ai khỏi danh sách xem, bố mẹ mở đúng người đó rồi bỏ quyền xem; từ đó họ không còn thấy dòng thời gian của bé nữa. Mọi thứ nằm trong tay bố mẹ, thêm hay bớt lúc nào cũng được nhé.",
          "en": "In the family-circle section, create a new invite code (give it a friendly label like \"Grandma\") and send it to that person. To remove someone, open their entry and revoke their access; from then on they no longer see the baby's timeline. It's all in your hands — add or remove anyone, anytime."
        }
      },
      {
        "q": {
          "vi": "Lỡ mất quyền xem rồi, làm sao vào lại được",
          "en": "I lost my access — how do I get back in"
        },
        "a": {
          "vi": "Nếu là người xem đổi điện thoại hoặc lỡ xóa app mà chưa liên kết tài khoản, chỗ xem cũ có thể không còn. Người xem nhắn cho chủ nhật ký xin một mã mời mới rồi nhập lại là vào được. Lần này, người xem nên liên kết với tài khoản Apple hoặc Google để giữ chỗ cho những lần sau nhé. Là chủ nhật ký, bố mẹ đăng nhập lại bằng đúng cách đã dùng (Apple, Google, hay email) là thấy lại đầy đủ.",
          "en": "If you're a viewer who switched phones or removed the app without linking an account, your old place may be gone. Ask the diary owner for a fresh invite code and enter it again to return. This time, link an Apple or Google account so your place is kept for next time. As an owner, sign back in the same way you used before (Apple, Google, or email) and everything is there again."
        }
      }
    ],
    "contact": {
      "vi": "Còn điều gì chưa rõ hay cần nhà mình giúp một tay, bố mẹ viết cho một người thật ở hello@cubi.family, nhà mình luôn ở đây nhé.",
      "en": "If anything is still unclear or you'd like a hand, write to a real person at hello@cubi.family — we're always here."
    }
  },
  "delete": {
    "title": {
      "vi": "Xóa tài khoản",
      "en": "Account deletion"
    },
    "intro": {
      "vi": "Bố mẹ có thể yêu cầu xóa tài khoản Cubi và toàn bộ dữ liệu đi kèm bất cứ lúc nào, không cần cài lại ứng dụng. Cần giúp một tay, bố mẹ viết cho Cubi tại hello@cubi.family nhé.",
      "en": "You can request deletion of your Cubi account and all associated data at any time, without reinstalling the app. Need a hand? Write to us at hello@cubi.family."
    },
    "sections": [
      {
        "heading": {
          "vi": "Cách 1 — Trong ứng dụng (nhanh nhất)",
          "en": "Option 1 — In the app (fastest)"
        },
        "body": {
          "vi": "Mở Cubi, vào Cài đặt, chọn Xóa tài khoản, rồi làm theo bước xác nhận.",
          "en": "Open Cubi, go to Settings, choose Delete account, then follow the confirmation steps."
        }
      },
      {
        "heading": {
          "vi": "Cách 2 — Qua email",
          "en": "Option 2 — By email"
        },
        "body": {
          "vi": "Viết cho Cubi tại hello@cubi.family từ địa chỉ email gắn với tài khoản, tiêu đề \"Xóa tài khoản\". Cubi có thể hỏi thêm một bước để xác minh đúng là chủ tài khoản.",
          "en": "Write to Cubi at hello@cubi.family from the email address linked to your account, with the subject \"Delete account\". We may ask one verification step to confirm you are the account holder."
        }
      },
      {
        "heading": {
          "vi": "Những gì sẽ bị xóa",
          "en": "What gets deleted"
        },
        "body": {
          "vi": "Tài khoản của bố mẹ (email, tên hiển thị, cách đăng nhập), hồ sơ của bé (tên, ngày sinh, giới tính, ảnh đại diện, cách bố mẹ tự xưng), toàn bộ ảnh, video và lời kể đã lưu, các icon cảm xúc, danh sách lời mời và thông tin vòng tay cả nhà, cùng mã thông báo đẩy.",
          "en": "Your account (email, display name, sign-in method), the baby's profile (name, date of birth, gender, avatar, the word you call yourself by), all saved photos, videos and captions, emoji reactions, your invite list and family-circle details, and your push token."
        }
      },
      {
        "heading": {
          "vi": "Thời gian",
          "en": "When"
        },
        "body": {
          "vi": "Cubi xóa vĩnh viễn dữ liệu khỏi hệ thống và cơ sở dữ liệu trong vòng 30 ngày kể từ khi yêu cầu được xác nhận. Một phần nhỏ dữ liệu kỹ thuật (ví dụ bản ghi nhật ký, sao lưu) có thể được giữ thêm ít lâu khi luật yêu cầu hoặc để chống gian lận và giữ an toàn, rồi cũng sẽ được xóa.",
          "en": "Cubi permanently deletes your data from our systems and databases within 30 days of a confirmed request. A small amount of technical data (for example logs and backups) may be kept a little longer where the law requires it or to prevent fraud and keep the service safe, then deleted too."
        }
      },
      {
        "heading": {
          "vi": "Người thân (người xem)",
          "en": "Family members (viewers)"
        },
        "body": {
          "vi": "Người tham gia bằng mã mời có thể tự gỡ quyền xem của mình trong ứng dụng, hoặc nhờ chủ nhật ký gỡ. Việc này chỉ xóa chỗ của người đó, không ảnh hưởng tới cuốn nhật ký của bố mẹ.",
          "en": "Anyone who joined with an invite code can remove their own access in the app, or ask the diary owner to remove it. This only deletes that person's place; it does not affect the parent's diary."
        }
      }
    ]
  }
};
