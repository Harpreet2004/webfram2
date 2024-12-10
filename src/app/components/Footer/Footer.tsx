import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" py-8 border-t border-[#39393930]">
        <div className="flex px-4 items-center gap-[28px]  justify-between max-[752px]:flex-col">
          <div className="flex gap-8 max-[700px]:flex-col">
            <div className="flex items-center gap-8">
              <img src="assets/Group.png" alt="Logo" className="w-32 h-auto" />
              <div>
                <h3 className="font-bold">INFOS PRATIQUES</h3>
                <ul className="mt-4">
                  <li className="text-gray-800">À propos</li>
                  <li className="text-gray-800">Livraisons & Reprises</li>
                  <li className="text-gray-800">Mode d’emploi</li>
                  <li className="text-gray-800">F.A.Q</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-gray-800 font-bold">LÉGAL</h3>
              <ul className="mt-4">
                <li className="text-gray-800">Mentions légales</li>
                <li className="text-gray-800">CGU</li>
                <li className="text-gray-800">CGV</li>
                <li className="text-gray-800">Politique de confidentialité</li>
              </ul>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-gray-800 font-bold">MON COMPTE</h3>
              <ul className="mt-4">
                <li className="text-gray-800">Accéder à mon compte</li>
                <li className="text-gray-800">Ma liste d’envie</li>
                <li className="text-gray-800">Créer un compte</li>
                <li className="text-gray-800">Mot de passe oublié</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col text-center pr-5">
            <h3 className="mb-2 text-[#393939] font-bold">NOUS SUIVRE</h3>
            <div className="flex gap-[10px]">
              <a href="#" className="border p-2 rounded-md">
                <img src="assets/twitter.png" alt="twitter-icon" />
              </a>
              <a href="#" className="border p-2 rounded-md">
                <img src="assets/instagram.png" alt="instagram-icon" />
              </a>
              <a href="#" className="border p-2 rounded-md">
                <img src="assets/linkedin-in.png" alt="linked-icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
