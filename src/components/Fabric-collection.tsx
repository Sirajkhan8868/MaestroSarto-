import Huddersfield from "../assets/images/Huddersfield.jpg";
import vitale from "../assets/images/Vitale.png";
import Lanificio from "../assets/images/Lanificio.png";
import drago from "../assets/images/drago.png";
import womansuit from "../assets/images/woman-suit.jpg";
import mensuit from "../assets/images/men-suit.jpg";
import Tessitura from "../assets/images/Tessitura.webp";
import Holland from "../assets/images/Holland.png";
import DORMAUIL from "../assets/images/DORMEUIL.webp";
import Reda from "../assets/images/Reda.webp";

export default function FabricCollection() {
    return (
        <div className="min-h-screen bg-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl md:text-4xl font-light text-center text-gray-900 mb-6">
                    FABRIC COLLECTION
                </h1>

                {/* Description */}
                <p className="text-center text-gray-600 text-lg leading-relaxed max-w-7xl mx-auto mb-10">
                    We exclusively offer some of the finest and internationally renowned fabric houses from Switzerland, UK and
                    Italy under one roof. Maestro Sarto is the name to reckon with. We strive hard to exceed our customer's
                    expectations and this is possible only because we pay close attention to the texture, versatility, and beauty
                    of the fabrics.
                </p>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 items-center justify-items-center">

                    {/* Huddersfield */}
                    <div className="flex flex-col items-center text-center">
                        <img src={Huddersfield} alt="Huddersfield Fabric" className="max-w-full h-auto" />
                    </div>

                    {/* Vitale Barberis Canonico */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4">
                            <div className="flex items-center justify-center mb-2">
                                <div className="w-8 h-px bg-gray-400"></div>
                                <div className="mx-2 w-4 h-4 border border-gray-400 rotate-45"></div>
                                <div className="w-8 h-px bg-gray-400"></div>
                            </div>
                            <img src={vitale} alt="Vitale Barberis Canonico" className="max-w-full h-auto mb-2" />
                        </div>
                    </div>

                    {/* Lanificio */}
                    <div className="flex flex-col items-center text-center">
                        <img src={Lanificio} alt="Lanificio Fabric" className="max-w-full h-auto" />
                    </div>

                    {/* Drago */}
                    <div className="flex flex-col items-center text-center">
                        <img src={drago} alt="Drago Fabric" className="max-w-full h-auto mb-2" />
                    </div>

                    {/* Row 2 */}
                   <div className="flex flex-col items-center text-center">
                        <img src={Tessitura} alt="Tessiture Fabric" className="max-w-full h-auto mb-2" />
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img src={Holland} alt="Holland Fabric" className="max-w-full h-auto mb-2" />
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img src={DORMAUIL} alt="Dormauil Fabric" className="max-w-full h-auto mb-2" />
                    </div>

                   <div className="flex flex-col items-center text-center">
                        <img src={Reda} alt="Reda Fabric" className="max-w-full h-auto mb-2" />
                    </div>
                </div>
            </div>

            {/* Images */}
            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 px-4">
                <img
                    src={womansuit}
                    alt="Women's Suit"
                    className="w-[740px] h-[700px] rounded-md object-cover"
                />
                <img
                    src={mensuit}
                    alt="Men's Suit"
                    className="w-[740px] h-[700px] rounded-md object-cover"
                />
            </div>
        </div>
    );
}
