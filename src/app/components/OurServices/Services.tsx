import React from "react";

const Services = () => {
    return (
        <>
            <div className="h-[800px] pb-[12rem] bg-gradient-to-b from-pink-100 to-white w-full flex flex-col justify-center items-center text-center max-[1456px]:h-[900px] max-[1332px]:h-[1400px] max-[1300px]:pb-0">
                <h2 className="text-2xl font-bold text-gray-800">
                    On s’occupe de <span className="text-[#5CD2DD]">tout</span>
                </h2>
                <p className="text-[#9C9C9C]">
                    Office ipsum you must be muted. It meeting commitment busy pain.
                </p>

                <div className="flex justify-center items-center gap-8 mt-8 max-[540px]:flex-col">
                    <div className="text-center">
                        <div className="h-px w-8 bg-gray-300 mt-2"></div>
                        <img src="assets/cart.png" alt="Icon" className="mx-auto" />
                        <h3 className="font-semibold text-[#393939]">Livraison & Reprise</h3>
                        <p className="text-[#9C9C9C]">Selon vos besoins</p>
                    </div>
                    <div className="text-center">
                        <div className="h-px w-8 bg-gray-300 mt-2"></div>
                        <img src="assets/dish.png" alt="Icon" className="mx-auto" />
                        <h3 className="font-semibold text-[#393939]">Nettoyage</h3>
                        <p className="text-[#9C9C9C]">Selon vos besoins</p>
                    </div>
                    <div className="text-center">
                        <div className="h-px w-8 bg-gray-300 mt-2"></div>
                        <img src="assets/cart-2.png" alt="Icon" className="mx-auto" />
                        <h3 className="font-semibold text-[#393939]">Commande Illimitée</h3>
                        <p className="text-[#9C9C9C]">Tout est possible</p>
                    </div>
                    <div className="text-center">
                        <img src="assets/delivery.png" alt="Icon" className="mx-auto" />
                        <h3 className="font-semibold text-[#393939]">
                            Transport & Enlèvement
                        </h3>
                        <p className="text-[#9C9C9C]">On s’occupe de tout.</p>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full pt-20 gap-[20px] max-[1332px]:flex-col">
                    <div className="w-[47%] flex justify-center max-[1332px]:w-auto">
                        <img className="w-full rounded-2xl" src="assets/desk.png" alt="services-img" />
                    </div>
                    <div className="w-[50%] bg-pink-100 px-[30px] py-[64px] flex justify-start items-start flex-col rounded-2xl max-[1456px]:w-[40%] max-[1332px]:w-auto">
                        <h2 className="text-3xl font-bold text-gray-800">
                            S'inscrire & économiser <span className="text-[#5CD2DD]">10%</span>
                        </h2>
                        <p className="text-[#BDA2B0] mt-2 text-left">Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.</p>

                        <div className="mt-4 flex gap-2 w-full">
                            <input type="email" placeholder="john@doe.com" className="w-[77%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 " />
                            <button className="bg-[#5CD2DD] text-white px-4 py-2 rounded-md">
                                S'INSCRIRE 
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Services;
