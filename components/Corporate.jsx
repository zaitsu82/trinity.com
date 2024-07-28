import { FadeInBottom } from "@/components/Wapper";

export function Corporate() {
    return (
        <div className="text-center p-20">
            <FadeInBottom>
                <h2 className="font-bold text-2xl mb-6">企業情報</h2>
                <div className="inline-block min-w-full overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left bg-gray-100">項目</th>
                                <th className="border border-gray-300 px-4 py-2 text-left bg-gray-100">詳細</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-semibold">代表取締役社長</td>
                                <td className="border border-gray-300 px-4 py-2">高橋 杏太</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-semibold">所在地</td>
                                <td className="border border-gray-300 px-4 py-2">未設定</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-semibold">設立日</td>
                                <td className="border border-gray-300 px-4 py-2">未設</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-semibold">資本金</td>
                                <td className="border border-gray-300 px-4 py-2">未設定</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-semibold">事業内容</td>
                                <td className="border border-gray-300 px-4 py-2">営業代行・システムエンジニアリングサービス</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-semibold">主要取引先</td>
                                <td className="border border-gray-300 px-4 py-2">未設定</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-semibold">取引銀行</td>
                                <td className="border border-gray-300 px-4 py-2">未設定</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </FadeInBottom>
        </div>
    );
}