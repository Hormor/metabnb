import React from "react";
import chevronIcon from "../assets/chevron.svg";
import metamask from "../assets/metamask.png";
import walletConnect from "../assets/wallet-connect.png";
import cancel from "../assets/x.svg";

export default function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-slate-500/70 flex justify-center items-center px-4 sm:px-0">
      <div className="w-full sm:w-[600px] rounded-2xl bg-white">
        <div className="flex justify-between">
          <h1 className="px-6 py-8 text-[#333333] text-xl  sm:text-2xl font-bold">
            Connect Wallet
          </h1>
          <button onClick={() => onClose(false)}>
            <img src={cancel} alt="Cancel" className="mr-7" />
          </button>
        </div>
        <hr />
        <div className="p-4 sm:p-8">
          <p className="text-[#333333] text-sm sm:text-base">
            Choose your preferred wallet:
          </p>
          <button className="flex items-center mt-4 px-5 py-3 w-full border border-[#CFD8DC] rounded-xl hover:bg-[#F8F9FA] ">
            <img src={metamask} alt="Metamask" className="mr-4 h-6 sm:h-auto" />
            <span className="sm:text-lg font-sora font-semibold">Metamask</span>
            <img src={chevronIcon} alt="Chevron Icon" className="ml-auto" />
          </button>
          <button className="flex items-center mt-4 px-5 py-3 w-full border border-[#CFD8DC] rounded-xl hover:bg-[#F8F9FA]">
            <img
              src={walletConnect}
              alt="WalletConnect"
              className="mr-4 h-6 sm:h-auto"
            />
            <span className="sm:text-lg font-sora font-semibold">
              WalletConnect
            </span>
            <img src={chevronIcon} alt="Chevron Icon" className="ml-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}
