import React from "react";

const Navbar = () => {
  return (
    // navbar container
    <div className="h-[200px] px-[16px] py-2 w-full  max-[877px]:h-[140px]  max-[877px]:border-b  max-[877px]:py-5">
      {/* navbar upper */}
      <div className="flex w-full max-[1255px]:justify-between pt-5 ">
        <div className="flex w-[63%] max-[1420px]:w-[60%] max-[1255px]:w-auto">
          <img className="max-[1230px]:h-[60px]" src="assets/Group.png" alt="logo-img" />
          <div className="flex w-[63%] items-center relative max-[1255px]:w-auto">
            <input
              className="w-full px-[25px] py-[12px] bg-[#F9FAFB] rounded-md"
              type="search"
              placeholder="reaseach on prodeuc"
            />
            <img
              className="h-5 absolute left-[82%]"
              src="assets/search-lg.png"
              alt="search-icon"
            />
          </div>
        </div>
        <div className=" flex w-[37%] max-[1420px]:w-[40%] items-center gap-x-5 max-[1255px]:w-auto">
          <ul className="flex gap-x-5 max-[1255px]:hidden ">
            <li className="flex gap-x-2 items-center">
              <img src="assets/icon.png" alt="inspire-icon" className="h-4" />
              Inspirations
            </li>
            <li className="flex gap-x-2 items-center whitespace-nowrap">
              <img src="assets/heart.png" alt="heart-icon" />
              Mes favoris
              <span className="bg-[#CAD2D566] rounded-[50%] text-[12px] px-[8px] py-[2px]">
                24
              </span>
            </li>
          </ul>
          <button className="bg-[#0093D0] flex border-[#007AAD] border text-[#FFFFFF] px-[20px] py-[12px] max-[609px]:hidden">
            <img src="assets/shopping-cart-01.png" alt="btn-img" />
            Panier
          </button>
          <img src="assets/Avatar.png" alt="profile-img" className="max-[609px]:hidden"/>
          <div className="flex items-center gap-x-1 max-[609px]:hidden">
            <h6>FR</h6>
            <img className="h-2" src="assets/chevron-down.png" alt="select-language" />
          </div>
        </div>
      </div>
      {/* bottom navbar */}
      <div className="flex items-center py-7 w-full  max-[877px]:hidden">
        <ul className="max-[1492px]:text-[13px] flex gap-x-10 justify-center w-full overflow-x-auto max-[1475px]:gap-x-4 max-[1211px]:text-[12px] max-lg:gap-x-2">
            <li className="text-[#0093D0]">Art de la table</li>
            <li>Mobilier</li>
            <li>Nappage</li>
            <li>Matériel de salle</li>
            <li>Cuisine</li>
            <li>Barbecue</li>
            <li>Tente</li>
            <li>Chauffage</li>
            <li>Podium - Piste de danse</li>
            <li>Son et lumière</li>
            <li>Packs</li>
            <li>Consommables</li>
        </ul>
        <span className="block absolute top-[11rem] left-0 w-full h-0.5 bg-[#E5E7EB]"></span>
      </div>
    </div>
  );
};

export default Navbar;
