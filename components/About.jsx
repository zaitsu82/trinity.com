import { FadeInBottom } from "@/components/Wapper";

export function About(){
    return (
        <div className="text-center">
            <FadeInBottom>
                <div className="relative w-full h-screen bg-about-img bg-cover bg-center flex flex-col items-center justify-center">
                    <FadeInBottom>
                        <h1 className="font-bold md:text-4xl text-white font-noto-serif">TRINITY</h1>
                    </FadeInBottom>
                    <FadeInBottom>
                        <div className="mt-20 px-4 md:px-20">
                            <p className="text-white">
                                Trinityは、三人の創業者が結集し、それぞれの専門知識や経験を融合させ、協力して新たな価値を創造する会社です。私たちは、トリニティの精神に基づき、調和と連携を大切にし、お客様のニーズに応える革新的なソリューションを提供しています。
                            </p>
                        </div>
                    </FadeInBottom>
                </div>
            </FadeInBottom>
        </div>
    );
}