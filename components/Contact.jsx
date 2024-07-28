import { useState } from 'react';
import { FadeInBottom } from "@/components/Wapper";

export function Contact() {
    // フォームの状態
    const [formData, setFormData] = useState({
        name: '',
        kana: '',
        postalCode: '',
        address: '',
        building: '',
        phone: '',
        email: '',
        emailConfirm: '',
        inquiry: ''
    });

    // エラーメッセージの状態
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); // 送信中の状態

    // 入力フィールドの変更を処理
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // バリデーションチェック
    const validate = () => {
        const errors = {};

        // 必須項目のチェック
        if (!formData.name) errors.name = 'お名前は必須です。';
        else if (!/^[^\x01-\x7E\xA1-\xDF]+$/.test(formData.name)) errors.name = 'お名前は全角文字で入力してください。';

        if (!formData.kana) errors.kana = 'フリガナは必須です。';
        else if (!/^[ァ-ヶー\s]+$/.test(formData.kana)) errors.kana = 'フリガナは全角カタカナで入力してください。';

        if (!formData.postalCode) {
            errors.postalCode = '郵便番号は必須です。';
        } else if (!/^\d{3}-\d{4}$/.test(formData.postalCode)) {
            errors.postalCode = '郵便番号は半角数字で「000-0000」の形式で入力してください。';
        }

        if (!formData.address) errors.address = '県・市区町村は必須です。';
        if (!formData.building) errors.building = '番地・建物名は必須です。';

        if (!formData.phone) {
            errors.phone = '電話番号は必須です。';
        } else if (!/^\d{10,12}$/.test(formData.phone)) {
            errors.phone = '電話番号は半角数字で10桁から12桁の形式で入力してください。';
        }

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'メールアドレスが無効です。';
        if (formData.email !== formData.emailConfirm) errors.emailConfirm = 'メールアドレスが一致しません。';
        if (!formData.inquiry) errors.inquiry = 'ご用件は必須です。';

        return errors;
    };

    // フォームの送信処理
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            alert('入力エラーがあります。');
            return;
        }

        setIsSubmitting(true); // 送信中フラグを立てる

        try {
            const response = await fetch('/api/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('メール送信に失敗しました。');

            const result = await response.json();
            console.log(result);
            alert('メールが送信されました。');
            // フォームのリセット
            setFormData({
                name: '',
                kana: '',
                postalCode: '',
                address: '',
                building: '',
                phone: '',
                email: '',
                emailConfirm: '',
                inquiry: ''
            });
        } catch (error) {
            console.error(error);
            alert('メール送信中にエラーが発生しました。');
        } finally {
            setIsSubmitting(false); // 送信中フラグを下げる
        }
    };

    // フォームのバリデーション状態をチェック
    const isFormValid = Object.keys(validate()).length === 0;

    return (
        <div className="text-center p-20">
            <FadeInBottom>
                <h4 className="font-bold text-2xl mb-8">お問い合わせ</h4>
                <form className="max-w-3xl mx-auto space-y-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <label className="text-left mb-2 font-medium flex-1">お名前</label>
                            {errors.name && <p className="text-red-500 text-sm flex-none ml-4">{errors.name}</p>}
                        </div>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='田中太郎'
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <label className="text-left mb-2 font-medium flex-1">フリガナ</label>
                            {errors.kana && <p className="text-red-500 text-sm flex-none ml-4">{errors.kana}</p>}
                        </div>
                        <input
                            type='text'
                            name='kana'
                            value={formData.kana}
                            onChange={handleChange}
                            placeholder='タナカタロウ'
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <label className="text-left mb-2 font-medium flex-1">郵便番号</label>
                            {errors.postalCode && <p className="text-red-500 text-sm flex-none ml-4">{errors.postalCode}</p>}
                        </div>
                        <input
                            type='text'
                            name='postalCode'
                            value={formData.postalCode}
                            onChange={handleChange}
                            placeholder='000-0000'
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <label className="text-left mb-2 font-medium flex-1">県・市区町村</label>
                            {errors.address && <p className="text-red-500 text-sm flex-none ml-4">{errors.address}</p>}
                        </div>
                        <input
                            type='text'
                            name='address'
                            value={formData.address}
                            onChange={handleChange}
                            placeholder='県・市区町村'
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <label className="text-left mb-2 font-medium flex-1">番地・建物名</label>
                            {errors.building && <p className="text-red-500 text-sm flex-none ml-4">{errors.building}</p>}
                        </div>
                        <input
                            type='text'
                            name='building'
                            value={formData.building}
                            onChange={handleChange}
                            placeholder='番地・建物名'
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <label className="text-left mb-2 font-medium flex-1">電話番号</label>
                            {errors.phone && <p className="text-red-500 text-sm flex-none ml-4">{errors.phone}</p>}
                        </div>
                        <input
                            type='text'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='00000000000'
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <label className="text-left mb-2 font-medium flex-1">メールアドレス</label>
                            {errors.email && <p className="text-red-500 text-sm flex-none ml-4">{errors.email}</p>}
                        </div>
                        <input
                            type='text'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='example@trinity.com'
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <label className="text-left mb-2 font-medium flex-1">メールアドレス（確認用）</label>
                            {errors.emailConfirm && <p className="text-red-500 text-sm flex-none ml-4">{errors.emailConfirm}</p>}
                        </div>
                        <input
                            type='text'
                            name='emailConfirm'
                            value={formData.emailConfirm}
                            onChange={handleChange}
                            placeholder='example@trinity.com（確認用）'
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <label className="text-left mb-2 font-medium flex-1">ご用件</label>
                            {errors.inquiry && <p className="text-red-500 text-sm flex-none ml-4">{errors.inquiry}</p>}
                        </div>
                        <input
                            type='text'
                            name='inquiry'
                            value={formData.inquiry}
                            onChange={handleChange}
                            placeholder='ご用件'
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type='submit'
                            className={`py-3 px-6 rounded-lg ${isFormValid ? 'bg-purple-500 text-white hover:bg-purple-600' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
                            disabled={isSubmitting} // 送信中はボタンを無効化
                        >
                            {isSubmitting ? '送信中...' : '送信'}
                        </button>
                    </div>
                </form>
            </FadeInBottom>
        </div>
    );
}
