import React, { useState, useEffect } from 'react'
import { useUSDCPay } from '../hooks/PayUSDC';
import { PublicKey } from '@solana/web3.js';
import { useCashApp } from '../hooks/Pay';
import { useWallet } from "@solana/wallet-adapter-react";
import GenQR from './transaction/GenQR';
import TransactionQRModal from './transaction/TransactionQRModal';
import { Dropdown } from "flowbite-react";
import wallet from '../wallet/wallet';
import * as bs58 from "bs58";
import {
  Commitment,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
//import wallet from "../wba-wallet.json"
import {
  getOrCreateAssociatedTokenAccount,
  transfer,
  getAccount,
  mintTo,
} from "@solana/spl-token";
const Pricing = ({ pricing }) => {
  //
  const keypair = Keypair.fromSecretKey(bs58.decode(wallet));
  const commitment = "confirmed";
  const connection = new Connection("https://api.devnet.solana.com", commitment);

  const mint = new PublicKey("Go1cRvBxpUiwfig4ShR7XWC3C9g3GbZYfFeUN2jLYgQF");

  // Recipient address
  const to = new PublicKey("44n5CYX18L6p4VxVECE9ZNYrAGB9GKD477b78kPNq5Su");

  //
  const [transactionQRModalOpen, setTransactionQRModalOpen] = useState(false);
  const [qrCode, setQrCode] = useState(false);
  const { connected, userPublickey } = useWallet();
  const { doTransaction, amount, setAmount } = useCashApp();
  const { publicKey, userAddress } = useCashApp();
  const [userPubkey, setUserPubkey] = useState(
    "11111111111111111111111111111111"
  );
  const [toPubkey, setToPubkey] = useState("11111111111111111111111111111111");
  const { createTransaction } = useUSDCPay();

  useEffect(() => {
    if (connected) {
      setUserPubkey(publicKey.toString());
      setToPubkey(new PublicKey("2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767"))
    }
  }, [connected]);

  const pay = () => {
    const txResponce = createTransaction(userPubkey, toPubkey, amount);
    const txData = txResponce;
    setTimeout(()=>{
      transferNFT()
    },[3000])
  };

  const transferNFT = async () => {
    const form = new PublicKey("9ZyYXZa5rh7xxM4H4ZBxRQh8ruY5ZhWpSvd6rBZ82eK2")

    const to_account = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      to
    );

    const txhash = transfer(
      connection,
      keypair,
      form,
      to_account.address,
      keypair.publicKey,
      1
    );

    console.log("Success ! Check", txhash);
  }
  return (
    <>
      <section class="text-gray-400 bg-black body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Pricing</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>

          </div>
          <div class="flex flex-wrap justify-center -m-4">
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">BUY</h2>
                <h1 class="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">{pricing} USDC</h1>

                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Full Access
                </p>

                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Lifetime Ownership
                </p>


                <button onClick={() => pay()} class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 my-5 w-full focus:outline-none hover:bg-gray-700 rounded">Buy Now
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <button class="mt-5 flex items-center text-white bg-gray-800 border-0 py-2 px-4 my-5 w-full focus:outline-none hover:bg-gray-700 rounded">Buy with QR
                  <div class="ml-10 flex w-1/3 text-2xl items-center justify-center px-4 py-2 space-x-2 border border-gray-800 rounded-md text-gray-800">
                    {/* <Action setModalOpen={setNewTransactionModalOpen} /> */}

                    <GenQR
                      setModalOpen={setTransactionQRModalOpen}
                      userAddress={userAddress}
                      setQrCode={setQrCode}
                    />
                    <TransactionQRModal
                      modalOpen={transactionQRModalOpen}
                      setModalOpen={setTransactionQRModalOpen}
                      userAddress={toPubkey}
                      myKey={publicKey}
                      setQrCode={setQrCode}
                    />
                  </div>
                </button>
                <p class="text-xs text-gray-400 mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing