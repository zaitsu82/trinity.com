import { FadeInBottom } from "@/components/Wapper";

export function Service(){
    return (
        <div className="text-center p-20">
            <FadeInBottom>
                <h3 className="font-bold">事業内容</h3>
                <ul>
                    <li>営業代行  モバイルイベント営業・モバイル買取・コールセンター業務</li>
                    <li>システムエンジニアリングサービス  業務系システム開発・WEB系システム開発・保守・運用業務</li>
                </ul>
            </FadeInBottom>
        </div>
    );
}