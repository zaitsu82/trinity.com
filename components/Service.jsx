import { FadeInBottom } from "@/components/Wapper";

export function Service() {
    return (
        <div className="text-center p-6 h-screen flex flex-col space-y-20">
            <FadeInBottom>
                <h3 className="font-bold text-2xl mb-6">事業内容</h3>
            </FadeInBottom>
            <FadeInBottom>
                <div className="flex flex-col md:flex-row w-full">
                    <div className="md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
                        <img src="business.png" alt="business" className="w-80 h-80 object-cover" />
                    </div>
                    <div className="md:w-1/2 flex items-center justify-center">
                        <div className="text-center">
                            <p className="font-bold text-2xl mb-6">営業代行</p>
                            <div className="flex flex-col space-y-8">
                                <div className="flex items-center">
                                    <div className="ml-6">
                                        <p>モバイルイベント・モバイル買取・コールセンター業務</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInBottom>
            <FadeInBottom>
                <div className="flex flex-col md:flex-row w-full">
                    <div className="md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
                        <img src="programing.png" alt="programming" className="w-80 h-80 object-cover" />
                    </div>
                    <div className="md:w-1/2 flex items-center justify-center">
                        <div className="text-center">
                            <p className="font-bold text-2xl mb-6">システムエンジニアリングサービス</p>
                            <div className="flex flex-col space-y-8">
                                <div className="flex items-center">
                                    <div className="ml-6">
                                        <p>業務系システム開発・WEB系システム開発・保守・運用業務</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInBottom>
        </div>
    );
}