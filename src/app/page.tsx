"use client"

import Image from "next/image";
import {  useEffect, useState } from "react";
import { useBeforeunload } from 'react-beforeunload';

const images = ["/manja1.gif", "/maanja2.gif", "/couple-forgive-me.gif", "/peach-goma-phone.gif"]
const text = ["Do you love me ?", "Soch le ache se! ", "Ek aur baar Soch le! 😣", "Manja na! Kitna bhav khaegi 😭"]
const subText = ["~naa jaa meri desi look pe", "itte jaldi nhi mtt bol 🙄", "kyu aisa kr rahi hai 😣", "bht glt baat hai 😭"]


export default function Home() {
  const [no, setNo] = useState(0)
  const [yes, setYes] = useState(false)

  const updateNo = () => {
    if (no === 3) {
      changeButtonPosition();
      return
    }
    let updatedNo = no + 1
    setNo(updatedNo)
  }

  const changeButtonPosition = () => {
    if (no !== 3) return
    let b = document.getElementById("no-btn");

    var i = Math.floor(Math.random() * (window.innerWidth-40)) + 1;
    var j = Math.floor(Math.random() * (window.innerHeight-40)) + 1;

    if (b) {
      b.style.display = "block";
      b.style.position = "absolute"
      b.style.left = i + "px";
      b.style.top = j + "px";
    };
  }


  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <>
        {
          yes ? <>
            <Image src={"/love-you.gif"} alt="my gif" height={300} width={300} />
            <h1 className="font-bold mt-6">Mujhe pta thaaaaaa 🤗</h1>
            <p className="mt-2">~mai tera hi hu</p>
          </> :
            <>
              <Image src={images[no]} alt="my gif" height={200} width={200} />
              <h1 className="font-bold mt-6">{text[no]}</h1>
              <p className="mt-2">{subText[no]}</p>

              <div className="flex-row m-10">
                <button className=" border-black rounded-sm bg-slate-50 w-20 h-8 shadow-lg mr-10" onClick={() => setYes(true)}>Yes</button>
                <button id="no-btn" className="rounded-sm bg-slate-50 w-20 h-8 shadow-lg"
                 onClick={updateNo} onMouseEnter={changeButtonPosition} onTouchStart={changeButtonPosition}>No</button>
              </div>
            </>
        }

        <div className="absolute bottom-10 flex flex-row">
         <Image src={"/instagram.svg"} alt="instagram" height={20} width={20}></Image>  <span className="font-bold ml-2">@mrbibhashwa</span>
        </div>
      </>
    </div>
  );
}
