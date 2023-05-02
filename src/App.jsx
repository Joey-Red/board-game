import chest from "./assets/chest_golden.png";
import knight from "./assets/monster_dark_knight.png";
import ogre from "./assets/chars/monster_ogre.png";
import imp from "./assets/chars/monster_imp.png";
import necromancer from "./assets/chars/monster_necromancer.png";
import elf from "./assets/chars/npc_elf.png";
import greenKnight from "./assets/chars/npc_knight_green.png";
import merchant from "./assets/chars/npc_merchant.png";
import wizard from "./assets/chars/npc_wizzard.png";
import wrestler from "./assets/chars/npc_wrestler.png";
import Card from "./Card";

function App() {
  return (
    <div className="h-screen bg-neutral-900 flex justify-center items-center">
      <div className="justify-center h-3/4 items-center grid-container">
        <div
          id="space-start"
          className="tile flex justify-center items-center bg-white"
        >
          {/* <img className="h-[3rem]" src={knight} alt="" /> */}
          <p>-></p>
        </div>
        <div
          id="space-1"
          className="tile tile-red flex justify-center items-center"
        >
          <img className="h-[3rem]" src={knight} alt="" />
        </div>
        <div
          id="space-2"
          className="tile tile-black flex justify-center items-center"
        >
          <img className="h-[2rem]" src={chest} alt="" />
        </div>
        <div id="space-3" className="tile tile-green"></div>
        <div
          id="space-4"
          className="tile tile-red flex justify-center items-center"
        >
          <img className="h-[3rem]" src={knight} alt="" />
        </div>
        <div
          id="space-5"
          className="tile tile-black flex justify-center items-center"
        >
          <img className="h-[2rem]" src={chest} alt="" />
        </div>
        <div id="space-6" className="tile tile-green"></div>
        <div
          id="space-7"
          className="tile tile-red flex justify-center items-center"
        >
          <img className="h-[3rem]" src={knight} alt="" />
        </div>
        <div
          id="space-8"
          className="tile tile-black flex justify-center items-center"
        >
          <img className="h-[2rem]" src={chest} alt="" />
        </div>
        <div id="space-9" className="tile tile-green"></div>
        <div
          id="space-10"
          className="tile tile-red flex justify-center items-center"
        >
          <img className="h-[3rem]" src={knight} alt="" />
        </div>
        <div
          id="space-11"
          className="tile tile-black flex justify-center items-center"
        >
          <img className="h-[2rem]" src={chest} alt="" />
        </div>

        <div id="space-12" className="tile tile-green"></div>
        <div
          id="space-13"
          className="tile tile-red flex justify-center items-center"
        >
          <img className="h-[3rem]" src={knight} alt="" />
        </div>
        <div
          id="space-14"
          className="tile tile-black flex justify-center items-center"
        >
          <img className="h-[2rem]" src={chest} alt="" />
        </div>
        <div id="space-15" className="tile tile-green"></div>
        <div
          id="space-16"
          className="tile tile-red flex justify-center items-center"
        >
          <img className="h-[3rem]" src={knight} alt="" />
        </div>
        <div
          id="space-17"
          className="tile tile-black flex justify-center items-center"
        >
          <img className="h-[2rem]" src={chest} alt="" />
        </div>
        <div id="space-18" className="tile tile-green"></div>
        <div
          id="space-19"
          className="tile tile-red flex justify-center items-center"
        >
          <img className="h-[3rem]" src={knight} alt="" />
        </div>
        <div
          id="space-20"
          className="tile tile-black flex justify-center items-center"
        >
          <img className="h-[2rem]" src={chest} alt="" />
        </div>
        {/* <div className="row-2"></div> */}
        <div id="space-21" className="tile tile-green"></div>
        <div
          id="space-22"
          className="tile tile-red flex justify-center items-center"
        >
          <img className="h-[3rem]" src={knight} alt="" />
        </div>
        <div
          id="space-23"
          className="tile tile-black flex justify-center items-center"
        >
          <img className="h-[2rem]" src={chest} alt="" />
        </div>
        <div id="space-24" className="tile tile-green"></div>
        <div
          id="space-25"
          className="tile tile-red flex justify-center items-center"
        >
          <img className="h-[3rem]" src={knight} alt="" />
        </div>
        <div
          id="space-26"
          className="tile tile-black flex justify-center items-center"
        >
          <img className="h-[2rem]" src={chest} alt="" />
        </div>
        <div id="space-27" className="tile tile-green"></div>
        <div
          id="space-28"
          className="tile tile-red flex justify-center items-center"
        >
          <img className="h-[3rem]" src={knight} alt="" />
        </div>
        <div
          id="space-29"
          className="tile tile-black flex justify-center items-center"
        >
          <img className="h-[2rem]" src={chest} alt="" />
        </div>
        <div id="space-30" className="tile tile-green"></div>
        <div
          id="space-31"
          className="tile tile-red flex justify-center items-center"
        >
          <img className="h-[3rem]" src={knight} alt="" />
        </div>
        <div
          id="space-32"
          className="tile tile-black flex justify-center items-center"
        >
          <img className="h-[2rem]" src={chest} alt="" />
        </div>
        <div id="space-33" className="tile tile-green"></div>
        <div
          id="space-34"
          className="tile tile-red flex justify-center items-center"
        >
          <img className="h-[3rem]" src={knight} alt="" />
        </div>
        <div
          id="space-35"
          className="tile tile-black flex justify-center items-center"
        >
          <img className="h-[2rem]" src={chest} alt="" />
        </div>
        <div id="space-36" className="tile tile-green"></div>
        <div
          id="space-37"
          className="tile tile-red flex justify-center items-center"
        >
          <img className="h-[3rem]" src={knight} alt="" />
        </div>
        <div
          id="space-38"
          className="tile tile-black flex justify-center items-center"
        >
          <img className="h-[2rem]" src={chest} alt="" />
        </div>
        <div id="space-39" className="tile tile-green"></div>
        <div
          id="center"
          className="bg-white h-full w-full border-2 border-black flex justify-center items-center flex-col"
        >
          <h1
            id="title"
            className="text-3xl mb-3 font-bold tracking-widest text-white bg-red-900 p-4 border-8 rounded border-white"
          >
            BOARD GAME TITLE OMG
          </h1>
          <div className="flex gap-4">
            <Card cardType="loot" />
            <Card cardType="tree" />
            <Card cardType="monster" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
