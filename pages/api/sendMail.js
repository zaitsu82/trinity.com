import nodemailer from "nodemailer";

export default async function sendGmail(req, res) {
    // Nodemailerのトランスポーターを作成
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // TLSが使用される場合はfalse
        auth: {
            user: process.env.GMAILUSER,
            pass: process.env.GMAILPASSWORD,
        },
    });

    // メールのデータ
    const toHostMailData = {
        from: req.body.email,
        to: process.env.GMAILUSER, // 送信先
        subject: `【お問合せ】${req.body.name}様より`, // タイトル
        text: `
        名前: ${req.body.name}
        フリガナ: ${req.body.kana}
        郵便番号: ${req.body.postalCode}
        住所: ${req.body.address}
        番地・建物名: ${req.body.building}
        電話番号: ${req.body.phone}
        メールアドレス: ${req.body.email}
        メールアドレス（確認用）: ${req.body.emailConfirm}
        ご用件: ${req.body.inquiry}
        `,
        html: `
        <p>【名前】</p>
        <p>${req.body.name}</p>
        <p>【フリガナ】</p>
        <p>${req.body.kana}</p>
        <p>【郵便番号】</p>
        <p>${req.body.postalCode}</p>
        <p>【住所】</p>
        <p>${req.body.address}</p>
        <p>【番地・建物名】</p>
        <p>${req.body.building}</p>
        <p>【電話番号】</p>
        <p>${req.body.phone}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
        <p>【メールアドレス（確認用）】</p>
        <p>${req.body.emailConfirm}</p>
        <p>【ご用件】</p>
        <p>${req.body.inquiry}</p>
        `,
    };

    try {
        // メール送信
        const info = await transporter.sendMail(toHostMailData);
        console.log('メール送信成功:', info);
        res.status(200).json({ message: "メール送信成功" });
    } catch (err) {
        console.error('メール送信エラー:', err);
        res.status(500).json({ message: "メール送信失敗", error: err.message });
    }
}
