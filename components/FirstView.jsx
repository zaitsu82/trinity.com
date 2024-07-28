import { FadeInBottom } from "@/components/Wapper";

export function FirstViwe(){
    return (
        <section className="relative w-full h-screen">
            <FadeInBottom>
                <div className="bg-first-view absolute inset-0 bg-cover bg-center">
                    <FadeInBottom>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="font-bold text-4xl md:text-4xl font-noto-serif">営業力×ITで理想を実現する</h1>
                        </div>
                    </FadeInBottom>
                </div>
            </FadeInBottom>
      </section>
    );
}