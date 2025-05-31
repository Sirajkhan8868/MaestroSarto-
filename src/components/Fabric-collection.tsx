import mensuit from "../assets/images/men-suit.jpg";
import womansuit from "../assets/images/woman-suit.jpg";

export default function FabricCollection() {
    return (
        <div className="min-h-screen bg-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-12 tracking-[0.2em]">
                    FABRIC COLLECTION
                </h1>

                {/* Description */}
                <p className="text-center text-gray-700 text-lg leading-relaxed max-w-6xl mx-auto mb-20">
                    We exclusively offer some of the finest and internationally renowned fabric houses from Switzerland, UK and
                    Italy under one roof. House of Tailors is the name to reckon with. We strive hard to exceed our customer's
                    expectations and this is possible only because we pay close attention to the texture, versatility, and beauty
                    of the fabrics.
                </p>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 items-center justify-items-center">
                    <div className="flex flex-col items-center text-center">
                        <div className="text-2xl md:text-3xl font-light tracking-[0.3em] text-gray-900 mb-2">HUDDERSFIELD</div>
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mb-2"></div>
                        <div className="text-sm tracking-[0.2em] text-gray-600">FINE WORSTEDS</div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4">
                            <div className="flex items-center justify-center mb-2">
                                <div className="w-8 h-px bg-gray-400"></div>
                                <div className="mx-2 w-4 h-4 border border-gray-400 rotate-45"></div>
                                <div className="w-8 h-px bg-gray-400"></div>
                            </div>
                            <div className="text-xl md:text-2xl font-serif text-gray-900 tracking-wider">
                                VITALE BARBERIS CANONICO
                            </div>
                            <div className="flex items-center justify-center mt-2">
                                <div className="text-sm text-gray-600">✗</div>
                                <div className="mx-4 text-2xl font-serif text-gray-900">1663</div>
                                <div className="text-sm text-gray-600">✗</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-2">
                            <div className="text-lg tracking-[0.15em] text-gray-900 mb-1">LANIFICIO</div>
                            <div className="text-2xl md:text-3xl font-light tracking-[0.3em] text-gray-900 mb-1">F.LLI CERRUTI</div>
                            <div className="text-sm tracking-[0.2em] text-gray-600">DAL 1881</div>
                        </div>
                        <div className="w-8 h-8 text-yellow-600">
                            <svg viewBox="0 0 32 32" fill="currentColor">
                                <path d="M16 2l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
                            DRAGO<sup className="text-sm">®</sup>
                        </div>
                        <div className="text-sm tracking-[0.2em] text-red-500">LANIFICIO IN BIELLA</div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="text-4xl md:text-5xl font-thin italic text-gray-900 mb-2">AM</div>
                        <div className="text-sm tracking-[0.2em] text-gray-600 mb-1">TESSITURA MONTI</div>
                        <div className="text-xs tracking-[0.1em] text-gray-500">DAL 1911</div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-2">
                            <div className="w-12 h-8 mx-auto mb-2 relative">
                                <div className="absolute inset-0 border-2 border-gray-900"></div>
                                <div className="absolute top-1 left-1 right-1 bottom-1 bg-gray-900"></div>
                                <div className="absolute top-2 left-2 right-2 bottom-2 bg-white"></div>
                                <div className="absolute top-3 left-3 w-2 h-1 bg-gray-900"></div>
                            </div>
                            <div className="text-xl md:text-2xl font-bold tracking-[0.2em] text-gray-900 mb-1">HOLLAND & SHERRY</div>
                            <div className="w-20 h-px bg-gray-400 mx-auto mb-1"></div>
                            <div className="text-xs tracking-[0.1em] text-gray-600">THE FINEST CLOTHS IN THE WORLD</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-2">
                            <div className="w-12 h-12 mx-auto mb-2 border-2 border-gray-900 flex items-center justify-center">
                                <div className="text-xs font-bold text-gray-900">⚜</div>
                            </div>
                            <div className="text-2xl md:text-3xl font-bold tracking-[0.3em] text-gray-900 mb-1">DORMEUIL</div>
                            <div className="text-xs text-gray-600">1842 PARIS</div>
                            <div className="text-xs tracking-[0.1em] text-gray-600">ETHICAL CLOTH</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-2">
                            <div className="text-xs text-gray-600 mb-1">👑</div>
                            <div className="text-xs tracking-[0.1em] text-gray-600 mb-1">1865</div>
                            <div className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-gray-900">REDA</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Images */}
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
