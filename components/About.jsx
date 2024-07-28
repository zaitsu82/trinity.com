import { FadeInBottom } from "@/components/Wapper";

export function About(){
    return (
        <div className="text-center p-20">
            <FadeInBottom>
                <h1 className="font-bold md:text-4xl font-noto-serif">私たちについて</h1>
                <div>
                    <p>Trinityは、三人の創業者が結集し、それぞれの専門知識や経験を融合させ、協力して新たな価値を創造する会社です。私たちは、トリニティの精神に基づき、調和と連携を大切にし、お客様のニーズに応える革新的なソリューションを提供しています。</p>
                </div>
            </FadeInBottom>
        </div>
    );
}