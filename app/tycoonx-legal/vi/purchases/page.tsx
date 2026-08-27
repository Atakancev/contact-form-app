const sections = [
  {
    title: "Các loại sản phẩm",
    body: [
      "Diamonds là tiền tệ ảo trong game. Diamonds đã mua không hết hạn chỉ vì thời gian trôi qua, chỉ được sử dụng trong TycoonX và không thể đổi thành tiền mặt từ CK-Labs, trừ khi pháp luật bắt buộc yêu cầu khác.",
      "30-Day VIP là quyền lợi mua một lần, không tự gia hạn, kéo dài 30 ngày liên tiếp kể từ khi được kích hoạt hoặc được cung cấp cho tài khoản, trừ khi màn hình mua hàng nêu rõ khác đi.",
      "Lifetime VIP là quyền lợi mua một lần chỉ có thể được mở bán trong các đợt khuyến mại giới hạn do CK-Labs lựa chọn. Đây không phải sản phẩm luôn có sẵn. CK-Labs có thể kết thúc hoặc ngừng một đợt bán và có thể quyết định không bao giờ mở bán Lifetime VIP trở lại, tùy thuộc pháp luật áp dụng và bất kỳ đề nghị cụ thể nào đã được đưa ra cho người tiêu dùng.",
      "Việc kết thúc một đợt bán Lifetime VIP chỉ ảnh hưởng đến khả năng mua trong tương lai và không tự động hủy hoặc rút ngắn một giao dịch hợp lệ đã hoàn tất. Việc chỉ mở màn hình mua, thêm sản phẩm vào giỏ, bắt đầu checkout hoặc ở trạng thái thanh toán đang chờ trước khi đợt bán đóng không tự nó giữ chỗ Lifetime VIP hoặc khóa mức giá cũ. Nếu nhà cung cấp được phép sau đó xác nhận một giao dịch hợp lệ theo quy tắc của họ, CK-Labs sẽ thực hiện giao dịch đã được nhà cung cấp xác nhận theo ưu đãi áp dụng và pháp luật bắt buộc.",
      "Lifetime VIP được dự kiến duy trì trong vòng đời vận hành thương mại của Dịch vụ TycoonX đối với tài khoản đã mua và không phải là lời hứa rằng TycoonX sẽ hoạt động mãi mãi. Ý nghĩa của vòng đời thương mại và tính chất có thời hạn của ưu đãi phải được hiển thị rõ tại hoặc ngay trước checkout.",
    ],
  },
  {
    title: "Mua hàng qua Apple App Store",
    body: [
      "Apple xử lý các giao dịch được thực hiện qua Apple In-App Purchase và vận hành quy trình yêu cầu hoàn tiền của App Store. CK-Labs có thể điều tra vấn đề cấp quyền và quyền lợi nhưng không kiểm soát quyết định hoàn tiền của Apple.",
      "Diamonds đã mua được dự kiến là in-app purchase dạng consumable. Lifetime VIP được dự kiến là giao dịch non-consumable và có thể khôi phục khi còn hợp lệ. 30-Day VIP mua một lần được dự kiến là quyền lợi không gia hạn, với CK-Labs duy trì trạng thái quyền lợi có thẩm quyền của tài khoản khi cần.",
      "Giao dịch mà Apple vẫn báo là đang chờ không tạo quyền lợi trả phí TycoonX cho đến khi Apple báo giao dịch đã hoàn tất và hợp lệ. Nếu Apple sau đó hoàn tất một giao dịch đang chờ đã được nhà cung cấp chấp thuận, TycoonX có thể cấp quyền lợi tương ứng tại thời điểm đó, kể cả khi chương trình khuyến mại ban đầu đã kết thúc, nếu giao dịch Apple hợp lệ gắn với ưu đãi đó.",
      "Nếu Apple hoàn tiền, thu hồi, đảo ngược hoặc vô hiệu giao dịch, CK-Labs có thể thu hồi hoặc điều chỉnh quyền lợi TycoonX hay giá trị ảo tương ứng để giao dịch đã hoàn tiền không được giữ lại hai lần.",
    ],
  },
  {
    title: "Mua hàng qua Google Play",
    body: [
      "Google xử lý giao dịch theo cơ chế thanh toán Google Play áp dụng và cung cấp thông tin giao dịch hoặc đơn hàng dùng để xác thực việc mua.",
      "Khi chính sách Google Play yêu cầu dùng Google Play Billing cho hàng hóa hoặc dịch vụ kỹ thuật số trong ứng dụng, TycoonX sẽ dùng hệ thống đó trừ khi một chương trình khu vực, quy tắc nền tảng hoặc luật áp dụng cho phép phương thức khác.",
      "Lifetime VIP được dự kiến dùng sản phẩm Google Play non-consumable mua một lần để giao dịch hợp lệ vẫn gắn với Google Account đã mua. 30-Day VIP mua một lần phải được cấu hình sao cho không âm thầm tạo khoản thu định kỳ và, nếu cho phép mua lại, cấu hình sản phẩm không được chặn vĩnh viễn một giao dịch 30-Day VIP hợp lệ sau này.",
      "Giao dịch Google Play ở trạng thái PENDING không tạo quyền lợi trả phí TycoonX. Quyền lợi chỉ được cấp sau khi Google báo trạng thái PURCHASED hợp lệ đã hoàn tất và việc xác minh bắt buộc thành công. Nếu giao dịch đang chờ sau đó trở thành giao dịch mua hợp lệ đã hoàn tất, TycoonX có thể cấp quyền lợi tại thời điểm đó, kể cả khi giao dịch hoàn tất sau khi một chương trình có thời hạn đã đóng nhưng giao dịch được nhà cung cấp xác nhận hợp lệ thuộc chương trình đó.",
      "Google có thể trực tiếp xử lý yêu cầu hoàn tiền đủ điều kiện. CK-Labs cũng có thể xử lý một số khoản hoàn Google Play đủ điều kiện bằng công cụ dành cho nhà phát triển của Google, tùy thuộc quy tắc Google, chính sách CK-Labs và pháp luật áp dụng.",
      "Nếu Google hoàn tiền, đảo ngược, chargeback, hủy hoặc vô hiệu giao dịch, CK-Labs có thể thu hồi hoặc điều chỉnh quyền lợi hoặc giá trị ảo tương ứng.",
    ],
  },
  {
    title: "Cửa hàng web TycoonX do Xsolla hỗ trợ",
    body: [
      "Các giao dịch tại cửa hàng web TycoonX chính thức có thể được Xsolla xử lý. Tùy cách bố trí checkout áp dụng, một công ty thuộc tập đoàn Xsolla có thể đóng vai trò merchant of record.",
      "Khi Xsolla là merchant of record, pháp nhân Xsolla hiển thị tại checkout hoặc trên biên lai có thể chịu trách nhiệm theo điều khoản áp dụng của mình đối với xử lý thanh toán, thuế giao dịch hoặc VAT, sàng lọc gian lận, hoàn tiền, tranh chấp thanh toán và chargeback.",
      "Pháp nhân Xsolla cụ thể, phương thức thanh toán, giá, thuế, chính sách hoàn tiền và thông tin mua hàng bắt buộc theo luật được xác định bởi checkout và biên lai của giao dịch. Điều khoản và chính sách hoàn tiền Xsolla dành riêng cho giao dịch đó áp dụng cùng với pháp luật người tiêu dùng bắt buộc.",
      "CK-Labs vẫn chịu trách nhiệm cấp quyền lợi TycoonX tương ứng sau khi nhận được xác nhận hợp lệ về thanh toán thành công. Việc quay lại từ checkout, hiển thị thông báo thành công phía client hoặc tạo đơn hàng không tự nó buộc CK-Labs cấp giá trị trả phí trước khi nhận được xác nhận hợp lệ từ nhà cung cấp.",
      "Nếu một giao dịch Xsolla hợp lệ được xác nhận sau do chậm xử lý, CK-Labs có thể cấp quyền lợi tương ứng tại thời điểm xác nhận theo giao dịch được nhà cung cấp xác nhận và ưu đãi áp dụng. Nếu Xsolla hoàn tiền, đảo ngược, hủy, chargeback hoặc vô hiệu giao dịch, CK-Labs có thể thu hồi hoặc điều chỉnh quyền lợi TycoonX hay giá trị ảo tương ứng.",
    ],
  },
  {
    title: "Giá, giá theo khu vực và thay đổi giá trong tương lai",
    body: [
      "CK-Labs có thể thay đổi giá, kích thước gói, số lượng Diamonds, giá VIP, giá khu vực, loại tiền tệ, tình trạng cung cấp và ưu đãi khuyến mại cho các giao dịch trong tương lai. Giá hiện tại không phải là lời hứa rằng cùng sản phẩm, số lượng, mức giảm hoặc giá sẽ tiếp tục có sau này.",
      "Giá có thể khác nhau giữa Apple App Store, Google Play, cửa hàng web TycoonX chính thức, quốc gia, khu vực, tiền tệ và các đợt khuyến mại riêng biệt. Hệ thống giá nền tảng, thuế, VAT, quy đổi tiền tệ, biến động ngoại hối, thông lệ định giá địa phương hoặc quy tắc nhà cung cấp thanh toán cũng có thể làm thay đổi giá địa phương.",
      "Tổng giá cuối cùng và tiền tệ mà checkout áp dụng hiển thị trước khi người dùng xác nhận giao dịch là giá điều chỉnh giao dịch đó, tùy thuộc việc sửa lỗi giá hiển nhiên khi luật cho phép. Việc mở trang sản phẩm, vào checkout hoặc nhìn thấy giá cache/cũ trước khi xác nhận không tự nó khóa mức giá đó cho giao dịch tương lai. Hồ sơ giao dịch đã được nhà cung cấp xác nhận và thông tin checkout có giá trị ràng buộc pháp lý của đơn hàng hoàn tất sẽ kiểm soát, tùy thuộc pháp luật bắt buộc.",
      "Đối với người tiêu dùng tại Đức và nơi khác khi được yêu cầu, thuế bắt buộc và các thành phần giá không thể tránh phải được bao gồm hoặc hiển thị theo luật công bố giá áp dụng.",
      "Giao dịch mua một lần đã hoàn tất không bị định giá lại hồi tố chỉ vì CK-Labs thay đổi giá sau đó. Việc giảm giá sau này không tự động tạo quyền hoàn tiền, tín dụng, hoàn một phần, khớp giá, thêm Diamonds hoặc thêm thời gian VIP; việc tăng giá sau này cũng không tạo thêm khoản thu cho giao dịch mua một lần đã hoàn tất, trừ khi pháp luật bắt buộc yêu cầu khác.",
      "Lifetime VIP có thể được bán với giá khác nhau trong các đợt khuyến mại thực sự khác nhau. Việc mua trong một đợt không tạo quyền hưởng giá khuyến mại thấp hơn sau này, và một đợt bán tương lai không buộc CK-Labs phải khớp mức giá trước đó.",
      "Tuyên bố khuyến mại, bộ đếm ngược, giá gạch ngang, số tiền tiết kiệm được nêu, tuyên bố có thời hạn và các tuyên bố khác về lợi thế giá phải phản ánh ưu đãi thực tế và không được gây hiểu lầm. Nếu một khu vực pháp lý yêu cầu quy tắc riêng về giá tham chiếu, công bố giảm giá hoặc lịch sử giá cho sản phẩm/ưu đãi cụ thể, hoạt động tiếp thị và checkout tương ứng phải tuân thủ quy tắc đó.",
      "Nếu CK-Labs sau này giới thiệu gói đăng ký hoặc sản phẩm khác có khoản thu định kỳ, các quy tắc về thay đổi giá, thông báo, đồng ý, hủy hoặc gia hạn áp dụng cho sản phẩm định kỳ đó sẽ được áp dụng riêng. Các quy tắc thay đổi giá mua một lần ở trên không cho phép khoản thu định kỳ không được công bố.",
    ],
  },
  {
    title: "Thông tin checkout và xác nhận thanh toán",
    body: [
      "Trước khi người tiêu dùng đặt đơn hàng có thanh toán, checkout áp dụng phải trình bày rõ ràng và đúng vị trí các thông tin tiền hợp đồng mà luật yêu cầu. Tùy giao dịch, thông tin này có thể gồm đặc điểm chính của sản phẩm, tổng giá bao gồm thuế và khoản phí bắt buộc, thời hạn hoặc điều kiện chấm dứt, thông tin cung cấp, chức năng quan trọng, thông tin tương thích hoặc khả năng tương tác, và danh tính thương nhân ký hợp đồng.",
      "Nếu luật Đức áp dụng cho checkout trực tuyến làm phát sinh nghĩa vụ thanh toán, bước đặt hàng phải làm rõ nghĩa vụ thanh toán theo cách luật yêu cầu. CK-Labs sẽ không dựa vào câu chữ bị che giấu, dịch vụ trả phí được chọn sẵn hoặc nút đặt hàng cuối cùng mơ hồ để tạo nghĩa vụ thanh toán.",
      "Nếu giá được cá nhân hóa dựa trên quyết định tự động và pháp luật áp dụng yêu cầu công bố điều đó, checkout hoặc ưu đãi áp dụng phải nêu rõ trước khi đặt hàng. Định giá thông thường theo quốc gia, storefront, tiền tệ, thuế hoặc giá khu vực áp dụng chung không được coi là giá cá nhân hóa chỉ vì giá khác nhau giữa các khu vực.",
    ],
  },
  {
    title: "Chức năng rút khỏi hợp đồng điện tử theo luật Đức",
    body: [
      "Kể từ ngày 19 tháng 6, 2026, luật Đức yêu cầu có chức năng rút khỏi hợp đồng điện tử đối với một số hợp đồng từ xa được giao kết qua giao diện người dùng trực tuyến trong thời gian quyền rút khỏi hợp đồng theo luật định còn hiệu lực. Khi yêu cầu này áp dụng cho giao dịch TycoonX và CK-Labs là thương nhân ký hợp đồng chịu trách nhiệm cho giao diện, CK-Labs phải cung cấp chức năng rút khỏi hợp đồng có nhãn rõ ràng, luôn sẵn có, dễ thấy và quy trình xác nhận theo luật.",
      "Khi Apple, Google, Xsolla hoặc nhà cung cấp khác là thương nhân ký hợp đồng hoặc kiểm soát giao diện mua và quy trình rút khỏi hợp đồng liên quan, luồng rút khỏi hợp đồng hoặc hoàn tiền phù hợp pháp luật của nhà cung cấp có thể là kênh áp dụng. CK-Labs sẽ không dùng việc phân bổ vai trò này để loại bỏ một quyền rút khỏi hợp đồng bắt buộc.",
      "Việc gửi yêu cầu rút qua chức năng rút khỏi hợp đồng điện tử bắt buộc phải được xác nhận trên phương tiện lưu trữ bền vững khi pháp luật yêu cầu. Kênh điện tử này không loại bỏ bất kỳ phương thức hợp pháp nào khác mà người tiêu dùng có thể dùng để thực hiện quyền rút khỏi hợp đồng.",
    ],
  },
  {
    title: "Khôi phục và phục hồi trên nhiều thiết bị",
    body: [
      "Lifetime VIP phải có thể khôi phục hoặc phục hồi sau khi xác minh trong thời gian quyền lợi còn hợp lệ. 30-Day VIP hợp lệ phải được khôi phục từ hồ sơ tài khoản hoặc máy chủ có thẩm quyền khi cần.",
      "Diamonds là giao dịch consumable và không được khôi phục như một giao dịch mua thứ hai sau khi đã tiêu dùng. Số dư tài khoản TycoonX hiện tại được bảo toàn thông qua trạng thái tài khoản/máy chủ TycoonX khi áp dụng. Hoạt động khôi phục không bao giờ tạo giá trị trả phí trùng lặp.",
      "Việc xóa tài khoản TycoonX có thể xóa vĩnh viễn hồ sơ và trạng thái gameplay, nhưng không nhất thiết hủy hoặc xóa một giao dịch Apple, Google, Xsolla hay nhà cung cấp thanh toán khác còn hợp lệ. Khi Lifetime VIP hợp lệ hoặc quyền lợi có thể khôi phục khác vẫn gắn với người mua, CK-Labs có thể yêu cầu bằng chứng hợp lý rằng cùng người mua kiểm soát tài khoản nền tảng hoặc thanh toán liên quan trước khi gắn quyền lợi đó với tài khoản TycoonX đủ điều kiện.",
      "Khôi phục quyền lợi trả phí sau khi xóa tài khoản không tạo lại tiến trình chơi đã xóa, Diamonds đã tiêu, kho vật phẩm, lịch sử xã hội hoặc tài sản đã chuyển, trừ khi pháp luật áp dụng yêu cầu khác.",
    ],
  },
  {
    title: "Vấn đề cấp quyền",
    body: [
      "Nếu bạn bị tính tiền nhưng nội dung đã mua chưa xuất hiện, hãy xác nhận đang dùng đúng tài khoản TycoonX, dùng Restore Purchases khi phù hợp, dành thời gian hợp lý để giao dịch nhà cung cấp đang chờ hoàn tất, và liên hệ TycoonX Support kèm thông tin đơn hàng hoặc giao dịch nếu vấn đề vẫn còn.",
      "CK-Labs có thể xác thực giao dịch với Apple, Google, Xsolla hoặc nhà cung cấp áp dụng trước khi cấp, khôi phục, thay đổi hoặc hoàn một quyền lợi.",
      "Giao dịch đang chờ không giữ chỗ cho quyền lợi thứ hai và không tạo cấp quyền trùng. Nếu nhà cung cấp sau đó xác nhận giao dịch đang chờ đã trở thành giao dịch mua hợp lệ hoàn tất, CK-Labs sẽ đối chiếu với giao dịch có thẩm quyền và trạng thái quyền lợi hiện có.",
    ],
  },
  {
    title: "Lỗi hiển nhiên, thanh toán thất bại và cấp quyền trùng lặp",
    body: [
      "Nếu checkout, danh mục, tiền tệ, thuế, sản phẩm, số lượng hoặc cấu hình quyền lợi có lỗi hiển nhiên, CK-Labs hoặc nhà cung cấp thanh toán áp dụng có thể sửa lỗi cho giao dịch tương lai và, khi pháp luật cho phép, hủy một giao dịch sai chưa được thực hiện và hoàn số tiền thực tế đã thanh toán thay vì cấp giá trị ngoài ý định. Các quyền bắt buộc và hợp đồng đã có hiệu lực vẫn do pháp luật áp dụng điều chỉnh.",
      "Ảnh chụp màn hình, hiển thị cache cũ, client bị thao túng, phiên bản ứng dụng lỗi thời, nguồn không chính thức hoặc lỗi hiển thị phía client không thay thế hồ sơ checkout hợp lệ cuối cùng hay hồ sơ đáng tin cậy có thẩm quyền của máy chủ và nhà cung cấp thanh toán.",
      "Quyền lợi hoặc giá trị ảo bị cấp trùng do thử lại, webhook phát lại, thông báo cửa hàng trùng, race condition, bug, lỗi khôi phục, thông tin đăng nhập bị xâm phạm hoặc lỗi kỹ thuật khác có thể bị xóa hoặc hợp nhất để người dùng nhận đúng giá trị hợp lệ thực tế đã mua.",
      "Nếu thanh toán đang chờ, bị từ chối, đảo ngược, hủy, không vượt qua kiểm tra gian lận hoặc chưa bao giờ được xác nhận, CK-Labs có thể trì hoãn hoặc không cấp quyền lợi tương ứng cho đến khi giao dịch hợp lệ và thành công được xác nhận.",
    ],
  },
  {
    title: "Khuyến mại, phiếu giảm giá và lạm dụng ưu đãi",
    body: [
      "Khuyến mại có thể bị giới hạn theo thời gian, quốc gia, nền tảng, tài khoản, lịch sử mua, điều kiện đủ, số lượng, số lần đổi hoặc điều kiện khác được nêu rõ. Trừ khi ưu đãi nêu khác đi, khuyến mại không được cộng dồn và không tạo quyền hưởng khuyến mại trong tương lai.",
      "Người dùng không được khai thác lỗi kỹ thuật, đổi phiếu trùng, thao túng thông tin khu vực hoặc danh tính, lạm dụng mua tự động, quay vòng hoàn tiền, tạo hàng loạt tài khoản hoặc dùng phương pháp khác để nhận giá trị khuyến mại vượt quá đề nghị thực tế.",
      "Nếu khuyến mại hoặc giảm giá được nhận thông qua gian lận, lạm dụng kỹ thuật, đổi trùng hoặc phương thức không hợp lệ khác, CK-Labs có thể từ chối giao dịch, chỉ thu hồi phần giá trị khuyến mại không hợp lệ hoặc hoàn tiền và đảo ngược giao dịch bị ảnh hưởng khi pháp luật cho phép. Giá trị hợp pháp đã mua không liên quan sẽ không bị xóa chỉ vì một khuyến mại khác không hợp lệ.",
      "Tín dụng thiện chí tự nguyện, gia hạn miễn phí, hoàn tiền theo quyết định, bonus hoặc bồi hoàn được cấp vượt quá nghĩa vụ pháp lý bắt buộc không tự nó là sự thừa nhận trách nhiệm và không tạo lời hứa rằng cùng biện pháp khắc phục sẽ được cung cấp trong trường hợp khác.",
    ],
  },
  {
    title: "Hoàn tiền, đảo ngược giao dịch và chargeback",
    body: [
      "Hoàn tiền hoặc đảo ngược thanh toán không cho phép người dùng giữ cả tiền đã được trả lại và giá trị kỹ thuật số trả phí tương ứng.",
      "Nếu thanh toán được hoàn, đảo ngược, chargeback, hủy hoặc được xác định không hợp lệ sau khi giá trị đã được ghi có, CK-Labs có thể, tùy pháp luật áp dụng, thu hồi quyền lợi liên quan, xóa Diamonds hoặc giá trị ảo chưa dùng, đảo ngược giao dịch trong game không hợp lệ liên quan trực tiếp, áp dụng điều chỉnh số dư tương đương khi giá trị đã hoàn đã được tiêu hoặc chuyển, hoặc tạm hạn chế chức năng mua/kinh tế trong khi tranh chấp thanh toán được điều tra.",
      "CK-Labs sẽ không dùng các điều chỉnh này để xóa giá trị hợp pháp đã mua không liên quan, trừ khi hợp lý cần thiết để đảo ngược một giao dịch không hợp lệ cụ thể hoặc pháp luật cho phép khác đi.",
      "Hoàn tiền thông thường được xử lý qua kênh thanh toán đã xử lý giao dịch và, khi nhà cung cấp yêu cầu, về phương thức thanh toán ban đầu. Thời điểm phê duyệt hoàn tiền và thời điểm tiền thực tế xuất hiện có thể khác nhau. CK-Labs không kiểm soát thời gian quyết toán bên thứ ba, chênh lệch quy đổi tiền tệ, phí ngân hàng, phí tổ chức phát hành thẻ hoặc biến động tỷ giá, tùy thuộc quy tắc nhà cung cấp và pháp luật bắt buộc.",
      "Khi Apple, Google, Xsolla hoặc nhà cung cấp khác là thương nhân ký hợp đồng hoặc đơn vị phát hành biên lai giao dịch/chứng từ thuế, nhà cung cấp đó kiểm soát hình thức và quy trình sửa biên lai hoặc hóa đơn của mình. CK-Labs có thể hỗ trợ quyền lợi TycoonX và nhận diện giao dịch nhưng không thể hứa sửa hoặc phát hành lại chứng từ thanh toán/thuế của thương nhân bên thứ ba. Khi chính CK-Labs có nghĩa vụ pháp lý phát hành biên lai, hóa đơn, credit note hoặc chứng từ khác, pháp luật áp dụng sẽ điều chỉnh.",
    ],
  },
  {
    title: "Giao dịch trái phép hoặc gian lận",
    body: [
      "Người dùng nên sớm báo cáo giao dịch bị nghi trái phép cho nhà cung cấp thanh toán liên quan và TycoonX Support.",
      "CK-Labs có thể điều tra biên lai, mã giao dịch, hồ sơ quyền lợi, log máy chủ, hoạt động tài khoản, thông tin thiết bị/session, sự kiện từ nhà cung cấp thanh toán và hồ sơ bảo mật liên quan để ngăn gian lận và cấp trùng.",
      "Biên lai gian lận, client bị thao túng, lạm dụng thanh toán, cố ý báo cáo gian lận sai, lạm dụng chargeback hoặc cố giữ lại giá trị kỹ thuật số đã được hoàn tiền có thể dẫn đến điều chỉnh quyền lợi, hạn chế mua hàng, đình chỉ hoặc chấm dứt tài khoản theo Điều khoản TycoonX và pháp luật áp dụng.",
    ],
  },
  {
    title: "Quyền rút khỏi hợp đồng tại EU và Đức",
    body: [
      "Không nội dung nào trong Chính sách này loại trừ các quyền theo luật định mà pháp luật không cho phép từ bỏ. Đối với người tiêu dùng tại Đức, các Điều 327 và tiếp theo của BGB có thể áp dụng cho nội dung và dịch vụ kỹ thuật số trả phí.",
      "Đối với nội dung kỹ thuật số được cung cấp ngay như gói Diamonds, quyền rút khỏi hợp đồng theo luật định chỉ có thể chấm dứt sau khi bắt đầu cung cấp nếu mọi yêu cầu pháp lý được đáp ứng, bao gồm mọi sự đồng ý rõ ràng theo từng giao dịch cần thiết cho việc thực hiện sớm, xác nhận về việc mất quyền rút và xác nhận hợp đồng. Việc chấp nhận Điều khoản chung không nhằm thay thế một sự đồng ý riêng khi luật yêu cầu.",
      "30-Day VIP được cung cấp trong một khoảng thời gian. Việc kích hoạt ngay không tự động loại bỏ mọi quyền rút khỏi hợp đồng theo luật chỉ vì quyền truy cập đã bắt đầu. Khi luật áp dụng cho phép thực hiện sớm, checkout có thể yêu cầu đề nghị rõ ràng của người tiêu dùng về việc đó, và bất kỳ khoản tiền nào phải trả sau một lần rút hợp lệ chỉ được xác định theo mức luật cho phép.",
      "Lifetime VIP cũng là quyền lợi được cung cấp theo thời gian. Giá mua một lần và tính không gia hạn không tự nó loại bỏ quyền rút khỏi hợp đồng theo luật hoặc biện pháp khắc phục bắt buộc đối với dịch vụ kỹ thuật số. Yêu cầu thực hiện sớm, hết quyền rút, thanh toán theo tỷ lệ sau khi rút hoặc hậu quả khác chỉ áp dụng khi yêu cầu pháp lý đối với giao dịch đó được đáp ứng.",
      "CK-Labs sẽ không dùng một điều khoản chung kiểu “không hoàn tiền” hoặc “từ bỏ mọi quyền rút” cho Diamonds, 30-Day VIP và Lifetime VIP vì cách xử lý pháp lý của các sản phẩm này có thể khác nhau.",
    ],
  },
  {
    title: "Cập nhật bắt buộc và phiên bản được hỗ trợ",
    body: [
      "Nội dung TycoonX trả phí không bao gồm lời hứa rằng mọi phiên bản ứng dụng lịch sử, thiết bị, hệ điều hành, API hoặc tích hợp nền tảng sẽ được hỗ trợ vô thời hạn.",
      "Khi pháp luật Đức về sản phẩm kỹ thuật số áp dụng, CK-Labs sẽ cung cấp và thông báo cho người tiêu dùng về các bản cập nhật cần thiết để sản phẩm kỹ thuật số trả phí liên quan tiếp tục phù hợp trong khoảng thời gian pháp luật yêu cầu, bao gồm các bản cập nhật bảo mật cần thiết.",
      "Nếu bản cập nhật bắt buộc đã được cung cấp và người dùng được thông báo rõ về việc bản cập nhật có sẵn cùng hậu quả của việc không cài đặt, việc không cài trong thời gian hợp lý có thể ảnh hưởng đến khiếu nại về sự không phù hợp chỉ do thiếu bản cập nhật đó trong phạm vi pháp luật áp dụng cho phép. Điều này chỉ áp dụng khi CK-Labs đã cung cấp hướng dẫn cài đặt đầy đủ và không loại bỏ quyền liên quan đến lỗi khác không liên quan, không cung cấp hoặc quyền lợi không hợp lệ.",
      "Quyền lợi trả phí hợp lệ phải tiếp tục gắn với người mua và được công nhận trên các phiên bản được hỗ trợ khi điều khoản sản phẩm, quy tắc nền tảng hoặc pháp luật bắt buộc yêu cầu. Việc yêu cầu cập nhật không phải là căn cứ để nhân đôi giao dịch, xóa Lifetime VIP hợp lệ có thể khôi phục hoặc né biện pháp khắc phục vẫn phải cung cấp theo luật.",
    ],
  },
  {
    title: "Truy cập đa nền tảng, Family Sharing và hồ sơ quyền lợi trùng",
    body: [
      "Giao dịch hợp lệ chỉ có thể được công nhận trên thiết bị hoặc nền tảng TycoonX được hỗ trợ khác khi TycoonX hỗ trợ quyền truy cập đó và quy tắc cửa hàng, nhà cung cấp thanh toán, quốc gia và nền tảng áp dụng cho phép. Việc công nhận đa nền tảng tự nó không tạo giao dịch mới hoặc quyền lợi trả phí bổ sung.",
      "Cùng giao dịch nền tảng không được nhân lên thông qua restore, migration tài khoản, sử dụng đa thiết bị, liên kết đa nền tảng, webhook thử lại hoặc hồ sơ nhà cung cấp trùng. Trừ khi một ưu đãi cụ thể nêu rõ khác đi, việc công nhận cùng Lifetime VIP nhiều lần không tạo nhiều quyền lợi Lifetime VIP, và công nhận cùng 30-Day VIP nhiều lần không kéo dài thời hạn hợp lệ ban đầu.",
      "Các giao dịch hợp lệ được hoàn tất riêng biệt và không phải trùng vẫn là các giao dịch riêng. CK-Labs có thể hợp nhất hồ sơ quyền lợi kỹ thuật mà không hủy một giao dịch hợp lệ riêng biệt hoặc loại bỏ quyền hoàn tiền, bảo hành hay biện pháp khắc phục bắt buộc khác.",
      "Apple Family Sharing chỉ áp dụng khi CK-Labs đã bật cho In-App Purchase đủ điều kiện liên quan và Apple báo giao dịch có thể chia sẻ. Nếu Family Sharing được cung cấp, quyền truy cập của thành viên gia đình phụ thuộc vào quyền được chia sẻ hợp lệ của người mua ban đầu và có thể chấm dứt nếu Apple báo việc chia sẻ hoặc quyền nền tảng đã kết thúc, bị thu hồi hoặc hoàn tiền. Quyền truy cập được chia sẻ không tạo giao dịch hoặc quyền hoàn tiền riêng cho từng thành viên gia đình vượt quá quy tắc Apple và pháp luật bắt buộc.",
      "Nếu TycoonX không hiển thị rõ sản phẩm Apple hỗ trợ Family Sharing, giao dịch không bao gồm cam kết về Family Sharing.",
    ],
  },
  {
    title: "Ngừng dịch vụ",
    body: [
      "Nếu TycoonX bị ngừng vĩnh viễn, quyền truy cập trực tuyến vào tài khoản, Diamonds, VIP, vật phẩm ảo và dữ liệu game cũng có thể kết thúc. Vật phẩm ảo không tự động trở thành quyền đổi tiền mặt chỉ vì Dịch vụ đóng.",
      "Lifetime VIP gắn với vòng đời vận hành thương mại của TycoonX đối với tài khoản đã mua, không phải tuổi thọ sinh học của người dùng và không phải lời hứa không giới hạn rằng Dịch vụ sẽ tồn tại mãi mãi. Các quyền bắt buộc về hoàn tiền, giảm giá, chấm dứt, bảo hành hoặc biện pháp khắc phục người tiêu dùng khác vẫn được giữ nguyên.",
    ],
  },
];

export default function VietnameseTycoonXPurchaseRefundPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="vi">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · Tiếng Việt</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Mua hàng & Hoàn tiền</h1>
          <p className="text-zinc-500 text-sm">Cập nhật lần cuối: 27 tháng 8, 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            Chính sách này áp dụng cho Diamonds, 30-Day VIP mua một lần, Lifetime VIP mở bán có thời hạn, thay đổi giá, giao dịch Apple App Store, Google Play và cửa hàng web TycoonX chính thức do Xsolla hỗ trợ. Chính sách bổ sung cho Điều khoản Dịch vụ và không làm giảm các quyền bắt buộc của người tiêu dùng.
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
          <h2 className="text-white font-semibold mb-3">Pháp lý & hỗ trợ</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">TycoonX do CK-Labs vận hành. Đối với vấn đề cấp quyền, câu hỏi về giao dịch, nghi ngờ gian lận hoặc tranh chấp quyền lợi, hãy dùng TycoonX Support hoặc gửi email cho chúng tôi.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-terms-of-service" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Điều khoản Dịch vụ</a>
            <a href="/tyconx-privacy-policy" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Chính sách Quyền riêng tư</a>
            <a href="/tyconx-support" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">TycoonX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
          </div>
        </section>
      </div>
    </main>
  );
}
