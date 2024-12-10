import React from "react";

const Hero = () => {
    return (
        <>
            {/* hero container */}
            <div className=" px-[16px] h-[800px] max-[1000px]:h-[900px] pt-4 max-[768px]:h-[1200px] max-[490px]:h-[1400px] ">
                <h6 className="mb-4">Home Art de la table</h6>
                <div className="flex h-[500px] max-[768px]:flex-col max-[768px]:h-[750px]">
                    {/* left container */}
                    <div className="bg-[#F8F6F4] w-[50%] max-[768px]:w-auto">
                        <div className="flex justify-center items-center relative">
                            <div className="absolute top-[4%] left-[2%] flex flex-col gap-[5px]">
                                <img className="rounded" src="assets/Table-ronde-165cm-Festi-2.png" alt="table-small-icon" />
                                <img className="rounded" src="assets/Table-ronde-165cm-Festi-2.png" alt="table-small-icon" />
                                <img className="rounded" src="assets/Table-ronde-165cm-Festi-2.png" alt="table-small-icon" />
                                <img className="rounded" src="assets/Table-ronde-165cm-Festi-2.png" alt="table-small-icon" />
                            </div>
                            <img
                                className="h-[77vh] max-[1000px]:h-[54vh] max-[1000px]:pt-20 flex justify-center items-center"
                                src="assets/Location-Cheese-big-picture-1.png"
                                alt="product-img"
                            />
                        </div>
                    </div>
                    {/* right container */}
                    <div className="w-[50%] px-[1.2rem] flex justify-between flex-col max-[768px]:w-auto">
                        {/* top container */}
                        <div>
                            <div className="flex justify-between items-center">
                                <h2 className="text-[2rem] text-[#111928] max-[1261px]:text-[1.6rem] ">Cheese – appareil à raclette 1/2 roue</h2>
                                <img className="h-7 items-center max-[1261px]:h-4" src="assets/vector.png" alt="heart-icon" />
                            </div>
                            <div>
                                <h3 className="border-b-[0.5px] border-[#9C9C9C] text-[#111928] text-[27px] max-[1000px]:text-lg">39,50€ <span className="max-[997px]:text-[10px] text-[#9C9C9C] text-[14px] text-center">/pièce</span></h3>
                                <div className="flex justify-between py-5 border-b-[0.5px] border-[#9C9C9C]">
                                    <div className="flex max-[1000px]:text-[14px] gap-2">
                                        <img src="assets/Capa_1.png" alt="scale-img" className="max-[1000px]:h-4"/>
                                        <h4>20 <sup>cm</sup></h4>
                                        <img src="assets/Page-1.png" alt="page-img" className="max-[1000px]:h-4"/>
                                        <h4>50 <sup>cm</sup></h4>
                                    </div>
                                        <h4 className="max-[1000px]:text-[14px]">RÉF : VABGN5</h4>
                                </div>
                                <div>
                                    <ul  className="text-[#5D5D5D] py-[16px] max-[1000px]:text-[14px]">
                                        <li>Location appareil à raclette - Raclette traditionnelle 1/2 roue</li>
                                        <li>Réglable en hauteur</li>
                                        <li>Appareil à raclette professionnel</li>
                                        <li>Boîtier de chauffe horizontal réglable en hauteur</li>
                                    </ul>
                                    <ul className="text-[#5D5D5D] max-[1000px]:text-[14px]">
                                        <li>220V</li>
                                        <li>900W</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* bottom container */}
                        <div className="flex border-t pt-3 gap-[10px] max-[995px]:flex-col max-[995px]:justify-center  max-[995px]:items-center">
                            <div className="flex py-[10px] px-[10px] gap-10 max-[1000px]:gap-3 max-[995px]:gap-8 rounded-md border border-[#00000021] justify-center items-center">
                                <img src="assets/minus.png" alt="minus-img" />
                                <h3>1</h3>
                                <img src="assets/plus.png" alt="plus-img" />
                            </div>
                            <div className=" max-[995px]:py-5 rounded-md text-[#ffffff] bg-[#5CD2DD] flex justify-center items-center w-5/6 max-[995px]:h-[2rem]">
                                Ajouter au panier
                            </div>
                        </div>
                    </div>

                    {/* new bottom container */}
                    
                </div>
                <div className="flex pt-[35px] max-[768px]:flex-col max-[768px]:gap-10 max-[490px]:pt-20">
                        {/* left b con */}
                        <div className="w-[50%] flex justify-center flex-col gap-[15px] max-[768px]:w-auto">
                            <h2>Description produit</h2>
                            <p className="text-[13px] leading-2 pr-14">Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".</p>
                        </div>
                        {/* right b con */}
                        <div className="w-[50%] max-[768px]:w-auto">
                            <div className="flex justify-between py-[15px] px-[20px] bg-[#FBF9F899] items-center">
                                <h2>Livraisons</h2>
                                <img className="flex justify-center items-center " src="assets/plus.png" alt="plus-icon" />
                            </div>
                            <div className="flex justify-between py-[15px] px-[20px] bg-[#FBF9F899]  items-center">
                                <h2>Questions</h2>
                                <img src="assets/plus.png" alt="plus-icon" />
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Hero;
