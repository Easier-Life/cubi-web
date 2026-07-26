import type { Bilingual } from "@/lib/i18n";

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
 * search results. hreflang pairs the two through `slug.vi` / `slug.en`.
 */
export interface Guide {
  id: string;
  slug: Bilingual;
  title: Bilingual;
  /** Meta description + the card blurb on the index. */
  description: Bilingual;
  /** ISO date, used for `dateModified` and the sitemap. */
  updated: string;
  intro: Bilingual;
  sections: { heading: Bilingual; body: Bilingual }[];
  faq: { q: Bilingual; a: Bilingual }[];
}

export const guides: Guide[] = [
  {
    id: "share-with-grandparents",
    slug: {
      vi: "gui-anh-con-cho-ong-ba-o-xa",
      en: "share-baby-photos-with-grandparents",
    },
    title: {
      vi: "Gửi ảnh con cho ông bà ở xa: 5 cách và ưu nhược điểm",
      en: "Sharing baby photos with faraway grandparents: 5 ways compared",
    },
    description: {
      vi: "So sánh Zalo, Facebook, Google Photos, album chia sẻ iCloud và app nhật ký riêng — cách nào hợp với ông bà không rành công nghệ nhất.",
      en: "Zalo, Facebook, Google Photos, iCloud Shared Albums and a private diary app compared — which suits grandparents who find phones fiddly.",
    },
    updated: "2026-07-26",
    intro: {
      vi: "Bé lớn từng ngày, mà ông bà thì ở xa. Dưới đây là năm cách bố mẹ Việt hay dùng để gửi ảnh con về cho ông bà, kèm ưu nhược điểm thật của từng cách. Không có cách nào đúng cho mọi nhà — điều quan trọng là chọn cách mà ông bà mở lên được mà không cần ai chỉ.",
      en: "Babies grow every day, and grandparents live far away. Here are five ways Vietnamese parents share photos home, with the honest trade-offs of each. None is right for every family — what matters is picking the one grandparents can open without being taught.",
    },
    sections: [
      {
        heading: { vi: "1. Gửi qua Zalo", en: "1. Send it over Zalo" },
        body: {
          vi: "Đây là cách phổ biến nhất ở Việt Nam, vì gần như ông bà nào cũng đã có Zalo và đã biết dùng.\n\n- Ưu: không phải cài thêm gì, ông bà đã quen, gửi là thấy ngay.\n- Nhược: ảnh trôi rất nhanh giữa những tin nhắn khác. Vài tháng sau muốn tìm lại tấm ảnh bé cười hôm ấy thì phải cuộn rất lâu. Ảnh gửi qua khung chat thường được nén lại, và nếu ông bà đổi điện thoại thì lịch sử ảnh có thể không còn.\n\nHợp khi: cả nhà chỉ cần khoe nhanh vài tấm trong ngày, không đặt nặng chuyện lưu giữ lâu dài.",
          en: "This is the default in Vietnam, because nearly every grandparent already has Zalo and already knows how to use it.\n\n- Upside: nothing new to install, they already know it, and they see the photo immediately.\n- Downside: photos drift away between other messages fast. Months later, finding that one photo means scrolling a very long way. Photos sent through a chat window are usually compressed, and if a grandparent changes phone the history may not follow.\n\nGood when: you just want to show a few photos today, and long-term keeping is not the point.",
        },
      },
      {
        heading: { vi: "2. Đăng lên Facebook", en: "2. Post to Facebook" },
        body: {
          vi: "Nhiều bố mẹ đăng ảnh con lên Facebook cho cả họ cùng xem.\n\n- Ưu: người thân vào xem dễ, có chỗ để mọi người bình luận chúc mừng.\n- Nhược: đây là không gian bán công khai. Ảnh của bé có thể lọt ra ngoài vòng gia đình tùy cài đặt, thuật toán quyết định ai thấy gì, và giữa những khoảnh khắc của bé sẽ có quảng cáo. Nhiều bố mẹ về sau thấy không thoải mái khi con lớn lên với một dấu vết công khai từ lúc còn đỏ hỏn.\n\nHợp khi: bố mẹ thoải mái với việc chia sẻ rộng và đã kiểm soát kỹ phần cài đặt riêng tư.",
          en: "Plenty of parents post to Facebook so the whole extended family can see.\n\n- Upside: relatives find it easily, and there is room for everyone to comment.\n- Downside: it is a semi-public space. Depending on your settings the photos can travel beyond the family, an algorithm decides who sees what, and ads sit between your child's moments. Many parents later feel uneasy that their child grew up with a public trail from birth.\n\nGood when: you are comfortable sharing broadly and have your privacy settings well in hand.",
        },
      },
      {
        heading: { vi: "3. Album chia sẻ trên Google Photos", en: "3. A Google Photos shared album" },
        body: {
          vi: "Tạo một album chia sẻ rồi gửi link cho ông bà.\n\n- Ưu: giữ ảnh gọn một nơi, chất lượng tốt, tìm lại theo ngày tháng dễ.\n- Nhược: để xem thuận tiện và để thả cảm xúc thì ông bà thường cần có tài khoản Google và biết đăng nhập. Giao diện có nhiều thứ ngoài ảnh của cháu, nên người lớn tuổi dễ bấm nhầm. Dung lượng miễn phí cũng có giới hạn.\n\nHợp khi: bố mẹ muốn một kho ảnh chỉn chu và ông bà tương đối rành điện thoại.",
          en: "Create a shared album and send grandparents the link.\n\n- Upside: everything in one tidy place, good quality, easy to find by date.\n- Downside: to view comfortably and to react, grandparents usually need a Google account and need to know how to sign in. The interface holds a lot more than their grandchild's photos, so it is easy for an older person to tap the wrong thing. Free storage is capped.\n\nGood when: you want a proper archive and grandparents are reasonably confident with phones.",
        },
      },
      {
        heading: { vi: "4. Album chia sẻ của iCloud", en: "4. iCloud Shared Albums" },
        body: {
          vi: "Nếu cả nhà đều dùng iPhone thì đây là cách gọn nhất trong hệ Apple.\n\n- Ưu: gắn sẵn trong ứng dụng Ảnh, không phải cài gì thêm, ảnh mới tự về máy ông bà.\n- Nhược: chỉ mượt khi mọi người đều dùng thiết bị Apple. Người thân dùng Android sẽ khó tham gia. Trong nhà Việt, chuyện mỗi người một hệ máy là rất bình thường.\n\nHợp khi: cả nhà đều dùng iPhone hoặc iPad.",
          en: "If everyone in the family is on iPhone, this is the neatest option inside Apple's world.\n\n- Upside: built into the Photos app, nothing to install, new photos arrive on their device by themselves.\n- Downside: it only flows well when everyone is on Apple hardware. Relatives on Android struggle to take part — and mixed households are completely normal in Vietnam.\n\nGood when: the whole family is on iPhone or iPad.",
        },
      },
      {
        heading: {
          vi: "5. Một cuốn nhật ký riêng cho cả nhà",
          en: "5. A private family diary app",
        },
        body: {
          vi: "Đây là cách Cubi làm. Bố mẹ lưu khoảnh khắc vào một cuốn nhật ký riêng, mời ông bà bằng một mã hoặc một đường link, và ảnh mới nhất của bé tự hiện lên widget ở màn hình chính máy ông bà.\n\n- Ưu: ông bà không cần lập tài khoản, không cần mật khẩu — mở link hoặc nhập mã là vào. Không có bảng tin công khai, không người lạ, không quảng cáo. Mỗi khoảnh khắc gắn sẵn tuổi của bé hôm ấy, nên vài năm sau mở lại vẫn biết đó là lúc bé mấy tháng. Ông bà không cần nhớ mở app, vì ảnh tự hiện ngay màn hình chính.\n- Nhược: cả nhà phải cài thêm một ứng dụng nữa. Và vì đây là không gian riêng, nó không thay thế được chỗ để khoe rộng với bạn bè như mạng xã hội.\n\nHợp khi: bố mẹ muốn giữ lại hành trình lớn lên của con một cách lâu dài và riêng tư, mà ông bà vẫn xem được dễ dàng.",
          en: "This is what Cubi does. Parents keep moments in a private diary, invite grandparents with a code or a link, and the baby's latest photo appears on a home-screen widget on the grandparents' phone.\n\n- Upside: grandparents need no account and no password — open the link or type the code and they are in. There is no public feed, no strangers, no ads. Every moment carries the baby's age that day, so years later you still know how old they were. And nobody has to remember to open an app, because the photo is already on the home screen.\n- Downside: it is one more app for the family to install. And because it is a private space, it does not replace social media for showing friends.\n\nGood when: you want your child's growing-up kept for the long run and kept private, while grandparents can still see it easily.",
        },
      },
      {
        heading: { vi: "Vậy nên chọn cách nào?", en: "So which should you choose?" },
        body: {
          vi: "Một cách chọn nhanh:\n\n- Ông bà chỉ cần thấy ảnh hôm nay, không cần lưu lâu: Zalo là đủ.\n- Cả nhà đều dùng iPhone: album chia sẻ iCloud.\n- Muốn một kho ảnh chỉn chu, ông bà rành máy: Google Photos.\n- Muốn giữ lại cả hành trình, riêng tư, và ông bà mở lên được mà không cần ai chỉ: một cuốn nhật ký riêng như Cubi.\n\nNhiều nhà dùng hai cách song song cũng không sao: gửi nhanh vài tấm qua Zalo trong ngày, còn nơi lưu giữ lâu dài thì để riêng một chỗ.",
          en: "A quick way to decide:\n\n- Grandparents just need today's photo, nothing kept: Zalo is enough.\n- Everyone is on iPhone: iCloud Shared Albums.\n- You want a tidy archive and grandparents are confident: Google Photos.\n- You want the whole journey kept, kept private, and openable without being taught: a private diary like Cubi.\n\nPlenty of families run two in parallel: a few quick photos over Zalo today, and a separate place for what they mean to keep.",
        },
      },
    ],
    faq: [
      {
        q: {
          vi: "Ông bà không rành công nghệ thì nên dùng cách nào?",
          en: "Which option is best for grandparents who find phones hard?",
        },
        a: {
          vi: "Cách ít bước nhất là cách không bắt ông bà đăng nhập. Zalo hợp vì ông bà đã quen sẵn; còn nếu muốn ảnh tự hiện mà ông bà không phải mở gì cả, hãy chọn ứng dụng có widget màn hình chính và cho phép tham gia bằng mã mời, không cần tài khoản.",
          en: "The fewest steps means not asking them to sign in at all. Zalo works because they already know it; if you want photos to appear without them opening anything, choose an app with a home-screen widget that lets people join by invite code rather than an account.",
        },
      },
      {
        q: {
          vi: "Gửi ảnh con qua nhóm chat có bị giảm chất lượng không?",
          en: "Do photos lose quality when sent in a group chat?",
        },
        a: {
          vi: "Thường là có. Hầu hết ứng dụng nhắn tin nén ảnh lại để gửi cho nhanh và nhẹ. Nếu bố mẹ muốn giữ ảnh gốc rõ nét, nên lưu bản chính ở một nơi khác ngoài khung chat.",
          en: "Usually yes. Most messaging apps compress photos so they send quickly. If you want to keep the sharp version, keep an original somewhere other than the chat window.",
        },
      },
    ],
  },

  {
    id: "photo-widget",
    slug: {
      vi: "widget-anh-con-man-hinh-chinh",
      en: "baby-photo-widget-home-screen",
    },
    title: {
      vi: "Widget ảnh con trên màn hình chính: cách cài trên iPhone và Android",
      en: "A baby photo widget on the home screen: iPhone and Android",
    },
    description: {
      vi: "Hướng dẫn từng bước đặt widget ảnh con lên màn hình chính iPhone và Android, để mở máy lên là thấy bé — kể cả với ông bà không rành công nghệ.",
      en: "Step-by-step: put a baby photo widget on an iPhone or Android home screen, so the little one is there every time the phone lights up.",
    },
    updated: "2026-07-26",
    intro: {
      vi: "Widget là ô nội dung nằm ngay trên màn hình chính, cạnh các biểu tượng ứng dụng. Với ông bà, đây là cách xem ảnh cháu nhẹ nhàng nhất: không phải nhớ mở app nào, chỉ cần mở khóa điện thoại là thấy cháu. Dưới đây là cách đặt widget trên cả hai hệ.",
      en: "A widget is a panel that lives on the home screen, next to the app icons. For grandparents it is the gentlest way to see a grandchild: no app to remember, just unlock the phone and there they are. Here is how to add one on both platforms.",
    },
    sections: [
      {
        heading: { vi: "Trên iPhone (iOS 17 trở lên)", en: "On iPhone (iOS 17 or later)" },
        body: {
          vi: "- Chạm và giữ vào một khoảng trống trên màn hình chính cho đến khi các biểu tượng rung lên.\n- Chạm dấu cộng ở góc trên bên trái.\n- Kéo xuống tìm tên ứng dụng trong danh sách, hoặc gõ tên vào ô tìm kiếm.\n- Vuốt ngang để chọn cỡ widget muốn dùng, rồi chạm \"Thêm Widget\".\n- Kéo widget tới chỗ mong muốn, rồi chạm \"Xong\" ở góc trên bên phải.\n\nMẹo cho ông bà: đặt widget ở màn hình chính đầu tiên, cỡ vừa hoặc lớn, để không phải vuốt tìm.",
          en: "- Touch and hold an empty part of the home screen until the icons jiggle.\n- Tap the plus button at the top left.\n- Scroll to find the app in the list, or type its name in the search box.\n- Swipe sideways to pick the widget size you want, then tap \"Add Widget\".\n- Drag it where you want it, then tap \"Done\" at the top right.\n\nTip for grandparents: put it on the very first home screen, in the medium or large size, so there is nothing to swipe for.",
        },
      },
      {
        heading: { vi: "Trên Android", en: "On Android" },
        body: {
          vi: "Các bước có thể khác đôi chút tùy hãng máy (Samsung, Xiaomi, OPPO…), nhưng nhìn chung là:\n\n- Chạm và giữ vào khoảng trống trên màn hình chính.\n- Chọn mục \"Widget\" (một số máy ghi là \"Tiện ích\").\n- Tìm tên ứng dụng trong danh sách.\n- Chạm giữ widget rồi kéo thả vào chỗ trống trên màn hình chính.\n\nMột số dòng máy Xiaomi và OPPO yêu cầu bật thêm quyền trước khi ứng dụng được phép tự thêm widget. Nếu chạm nút \"thêm widget\" trong app mà không thấy gì xảy ra, hãy thêm thủ công theo các bước trên.",
          en: "Steps vary a little by manufacturer (Samsung, Xiaomi, OPPO…), but broadly:\n\n- Touch and hold an empty part of the home screen.\n- Choose \"Widgets\".\n- Find the app in the list.\n- Press and hold its widget, then drag it onto a free spot.\n\nSome Xiaomi and OPPO phones need an extra permission before an app may place a widget for you. If tapping \"add widget\" inside an app appears to do nothing, add it by hand using the steps above.",
        },
      },
      {
        heading: {
          vi: "Widget ảnh có tốn pin không?",
          en: "Does a photo widget drain the battery?",
        },
        body: {
          vi: "Rất ít. Widget không chạy liên tục như một ứng dụng đang mở; hệ điều hành chỉ đánh thức nó theo lịch để làm mới nội dung. Ảnh cũng đã được nén sẵn trước khi tải về, nên phần lớn thời gian widget chỉ đứng yên hiển thị.",
          en: "Very little. A widget does not run continuously the way an open app does; the operating system wakes it on a schedule to refresh. Photos are already compressed before download, so most of the time the widget simply sits there showing what it has.",
        },
      },
      {
        heading: {
          vi: "Widget của Cubi hiện gì?",
          en: "What does the Cubi widget show?",
        },
        body: {
          vi: "Cubi hiện tấm ảnh mới nhất mà bố mẹ đã chọn cho widget, kèm tuổi của bé tính đến hôm đó — ví dụ \"3 tháng 5 ngày tuổi\". Nội dung tự đổi trong ngày, nên ông bà mở máy lúc nào cũng có thể thấy điều mới. Widget có trên cả iPhone và Android, và người thân được mời cũng thấy được widget như bố mẹ.",
          en: "Cubi shows the latest photo the parents marked for the widget, with the baby's age on that day — for example \"3 months 5 days old\". It changes through the day, so there is often something new when the phone lights up. The widget works on both iPhone and Android, and invited family see it just as the parents do.",
        },
      },
    ],
    faq: [
      {
        q: {
          vi: "Ông bà có cần tài khoản để thấy widget không?",
          en: "Do grandparents need an account to get the widget?",
        },
        a: {
          vi: "Với Cubi thì không. Ông bà vào bằng mã mời 7 ký tự hoặc đường link bố mẹ gửi, rồi đặt widget lên màn hình chính như bình thường.",
          en: "Not with Cubi. Grandparents join with the 7-character invite code or the link you send, then add the widget to their home screen as usual.",
        },
      },
      {
        q: {
          vi: "Widget bao lâu mới cập nhật ảnh mới?",
          en: "How often does the widget refresh?",
        },
        a: {
          vi: "Hệ điều hành quyết định thời điểm làm mới widget, nên ảnh mới thường xuất hiện sau một khoảng ngắn chứ không tức thì. Mở ứng dụng lên một lần sẽ giúp widget cập nhật ngay.",
          en: "The operating system decides when widgets refresh, so a new photo usually appears after a short delay rather than instantly. Opening the app once nudges it to update straight away.",
        },
      },
    ],
  },

  {
    id: "where-to-keep-photos",
    slug: {
      vi: "luu-anh-con-o-dau-an-toan",
      en: "where-to-keep-baby-photos-safely",
    },
    title: {
      vi: "Lưu ảnh con ở đâu cho riêng tư và an toàn?",
      en: "Where should you keep your child's photos?",
    },
    description: {
      vi: "Những điều nên cân nhắc trước khi chọn nơi lưu ảnh con: ai xem được, ảnh có bị nén không, dữ liệu vị trí trong ảnh, và cách xóa khi muốn dừng.",
      en: "What to weigh before choosing where your child's photos live: who can see them, compression, location data hidden in photos, and how to delete it all.",
    },
    updated: "2026-07-26",
    intro: {
      vi: "Ảnh của con là thứ bố mẹ muốn giữ lâu nhất, nhưng cũng là thứ nhạy cảm nhất. Trước khi chọn một nơi để lưu, có vài câu hỏi đáng hỏi — bất kể bố mẹ chọn dịch vụ nào.",
      en: "Your child's photos are what you most want to keep, and also the most sensitive thing you hold. Before choosing where they live, a few questions are worth asking — whatever service you end up with.",
    },
    sections: [
      {
        heading: { vi: "Ai thực sự xem được?", en: "Who can actually see them?" },
        body: {
          vi: "Câu hỏi đầu tiên và quan trọng nhất. Hãy phân biệt ba mức:\n\n- Công khai: bất kỳ ai có link, hoặc bất kỳ ai trên mạng, đều xem được.\n- Bán công khai: bạn bè của bạn bè, hoặc do thuật toán quyết định.\n- Riêng tư: chỉ những người bố mẹ chủ động mời.\n\nNhiều dịch vụ mặc định ở mức bán công khai. Nếu chọn nơi lưu ảnh con, nên ưu tiên nơi mà mặc định là riêng tư và bố mẹ là người quyết định từng lần chia sẻ.",
          en: "The first and most important question. There are three levels:\n\n- Public: anyone with the link, or anyone on the internet.\n- Semi-public: friends of friends, or whatever an algorithm decides.\n- Private: only the people you actively invite.\n\nPlenty of services default to semi-public. For a child's photos, prefer somewhere private by default, where you decide each time.",
        },
      },
      {
        heading: {
          vi: "Ảnh có bị nén không, và nén tới đâu?",
          en: "Are photos compressed, and how far?",
        },
        body: {
          vi: "Gần như dịch vụ nào cũng nén ảnh ở mức nào đó để tiết kiệm dung lượng và tải nhanh. Điều đáng quan tâm là mức nén có được nói rõ không.\n\nVí dụ, Cubi nén ảnh về cạnh dài 1920px và không giữ bản gốc độ phân giải đầy đủ — điều này được ghi rõ trong chính sách quyền riêng tư. Nếu bố mẹ muốn giữ file gốc chất lượng cao nhất (để in ảnh, làm album giấy), nên giữ thêm một bản sao ở nơi khác, ví dụ ổ cứng ngoài hoặc dịch vụ sao lưu ảnh gốc.",
          en: "Almost every service compresses to some degree, to save space and load quickly. What matters is whether they say so plainly.\n\nCubi, for example, compresses to a 1920px long edge and does not keep full-resolution originals — that is stated in its privacy policy. If you want the highest-quality originals (for printing, or a paper album), keep a second copy elsewhere, such as an external drive or a service that stores originals.",
        },
      },
      {
        heading: {
          vi: "Trong ảnh có sẵn thông tin vị trí",
          en: "Photos carry hidden location data",
        },
        body: {
          vi: "Điện thoại thường gắn tọa độ GPS vào file ảnh khi chụp. Nghĩa là một tấm ảnh bé chơi trước nhà có thể mang theo địa chỉ nhà mình mà bố mẹ không để ý.\n\nTrước khi chia sẻ ảnh con ra ngoài, đáng để kiểm tra xem dịch vụ có gỡ dữ liệu này không. Cubi gỡ thông tin GPS khỏi file ảnh được lưu và chia sẻ, và không dùng vị trí cho bất kỳ tính năng nào. Nếu dùng dịch vụ khác, bố mẹ có thể tự tắt gắn vị trí trong phần cài đặt máy ảnh của điện thoại.",
          en: "Phones usually write GPS coordinates into a photo file. That means a picture of your child in front of your house can carry your home address without you noticing.\n\nBefore sharing a child's photos, it is worth checking whether the service strips this. Cubi removes GPS data from the stored and shared image file, and does not use location for any feature. With other services, you can turn location tagging off in your phone's camera settings.",
        },
      },
      {
        heading: {
          vi: "Có xóa được hết không, và mất bao lâu?",
          en: "Can you delete everything, and how long does it take?",
        },
        body: {
          vi: "Một nơi lưu ảnh tử tế phải cho bố mẹ đường ra rõ ràng: xóa được tài khoản ngay trong ứng dụng, xóa cả ảnh và video đã lưu, và nói rõ mất bao lâu thì dữ liệu biến mất khỏi hệ thống.\n\nNếu một dịch vụ không nói rõ chuyện này, hoặc bắt phải viết thư xin xóa rồi chờ vô thời hạn, đó là dấu hiệu đáng cân nhắc.",
          en: "A decent home for photos gives you a clear way out: delete the account from inside the app, delete the photos and videos with it, and say plainly how long it takes to disappear from their systems.\n\nIf a service is vague about this, or makes you write in and wait indefinitely, treat that as a signal.",
        },
      },
      {
        heading: {
          vi: "Nguyên tắc an toàn: luôn có bản sao thứ hai",
          en: "One safety rule: always keep a second copy",
        },
        body: {
          vi: "Dù chọn dịch vụ nào, đừng để những tấm ảnh quý nhất chỉ tồn tại ở một nơi. Dịch vụ có thể đóng cửa, tài khoản có thể mất, điện thoại có thể hỏng.\n\nMột cách đơn giản: mỗi vài tháng, chép những ảnh quan trọng nhất của con sang một ổ cứng ngoài hoặc một dịch vụ sao lưu khác. Mất mười lăm phút, nhưng yên tâm được nhiều năm.",
          en: "Whatever you choose, do not let the most precious photos exist in only one place. Services close, accounts get lost, phones break.\n\nA simple habit: every few months, copy your child's most important photos to an external drive or a second backup service. Fifteen minutes of work for years of peace of mind.",
        },
      },
    ],
    faq: [
      {
        q: {
          vi: "Có nên đăng ảnh con lên mạng xã hội không?",
          en: "Should I post my child's photos on social media?",
        },
        a: {
          vi: "Đây là lựa chọn riêng của mỗi nhà. Điều đáng cân nhắc là con sẽ lớn lên và có thể không muốn hình ảnh lúc nhỏ của mình còn ở đó. Nhiều bố mẹ chọn cách giữ ảnh con trong một không gian riêng chỉ có người thân, và chỉ chia sẻ rộng khi thật sự muốn.",
          en: "That is each family's own call. What is worth weighing is that your child will grow up and may not want those pictures still there. Many parents keep their child's photos in a private space for family only, and share widely only when they truly mean to.",
        },
      },
      {
        q: {
          vi: "Ảnh của bé lưu ở đâu khi dùng Cubi?",
          en: "Where are photos stored when using Cubi?",
        },
        a: {
          vi: "Ảnh và video được lưu trên Cloudflare R2 và phục vụ qua cdn.cubi.family; cơ sở dữ liệu và đăng nhập chạy trên Supabase đặt tại Singapore. Chi tiết đầy đủ nằm trong chính sách quyền riêng tư của Cubi.",
          en: "Photos and videos are stored on Cloudflare R2 and served through cdn.cubi.family; the database and authentication run on Supabase hosted in Singapore. The full detail is in Cubi's privacy policy.",
        },
      },
    ],
  },
];

export function guideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug.vi === slug || g.slug.en === slug);
}
