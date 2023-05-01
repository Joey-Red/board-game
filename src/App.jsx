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
      <div className="flex flex-col gap-4 mr-4">
        <Card cardType="monster" />
        <Card cardType="loot" />
        <Card cardType="tree" />
      </div>
      <div className="justify-center h-full items-center flex">
        <div className="flex border-8 rounded">
          {/* Tile container */}
          {/* <div id="start" className="tile"></div> */}
          <img className="absolute h-[4rem]" src={ogre} alt="" />
          <img className="absolute h-[3rem]" src={imp} alt="" />
          <div className="row-1">
            <div
              id="1"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
            <div
              id="2"
              className="tile tile-black flex justify-center items-center"
            >
              <img className="h-[2rem]" src={chest} alt="" />
            </div>
            <div id="3" className="tile tile-green"></div>
            <div
              id="4"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
            <div
              id="5"
              className="tile tile-black flex justify-center items-center"
            >
              <img className="h-[2rem]" src={chest} alt="" />
            </div>
            <div id="6" className="tile tile-green"></div>
            <div
              id="7"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
            <div
              id="8"
              className="tile tile-black flex justify-center items-center"
            >
              <img className="h-[2rem]" src={chest} alt="" />
            </div>
            <div id="9" className="tile tile-green"></div>
            <div
              id="10"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
          </div>
          <div className="row-2">
            <div
              id="11"
              className="tile tile-black flex justify-center items-center"
            >
              <img className="h-[2rem]" src={chest} alt="" />
            </div>
            <div id="12" className="tile tile-green"></div>
            <div
              id="13"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
            <div
              id="14"
              className="tile tile-black flex justify-center items-center"
            >
              <img className="h-[2rem]" src={chest} alt="" />
            </div>
            <div id="15" className="tile tile-green"></div>
            <div
              id="16"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
            <div
              id="17"
              className="tile tile-black flex justify-center items-center"
            >
              <img className="h-[2rem]" src={chest} alt="" />
            </div>
            <div id="18" className="tile tile-green"></div>
            <div
              id="19"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
            <div
              id="20"
              className="tile tile-black flex justify-center items-center"
            >
              <img className="h-[2rem]" src={chest} alt="" />
            </div>
          </div>
          <div className="row-3">
            <div id="21" className="tile tile-green"></div>
            <div
              id="22"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
            <div
              id="23"
              className="tile tile-black flex justify-center items-center"
            >
              <img className="h-[2rem]" src={chest} alt="" />
            </div>
            <div id="24" className="tile tile-green"></div>
            <div
              id="25"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
            <div
              id="26"
              className="tile tile-black flex justify-center items-center"
            >
              <img className="h-[2rem]" src={chest} alt="" />
            </div>
            <div id="27" className="tile tile-green"></div>
            <div
              id="28"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
            <div
              id="29"
              className="tile tile-black flex justify-center items-center"
            >
              <img className="h-[2rem]" src={chest} alt="" />
            </div>
            <div id="30" className="tile tile-green"></div>
          </div>
          <div className="row-4">
            <div
              id="40"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
            <div
              id="42"
              className="tile tile-black flex justify-center items-center"
            >
              <img className="h-[2rem]" src={chest} alt="" />
            </div>
            <div id="43" className="tile tile-green"></div>
            <div
              id="44"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
            <div
              id="45"
              className="tile tile-black flex justify-center items-center"
            >
              <img className="h-[2rem]" src={chest} alt="" />
            </div>
            <div id="46" className="tile tile-green"></div>
            <div
              id="47"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
            <div
              id="48"
              className="tile tile-black flex justify-center items-center"
            >
              <img className="h-[2rem]" src={chest} alt="" />
            </div>
            <div id="49" className="tile tile-green"></div>
            <div
              id="50"
              className="tile tile-red flex justify-center items-center"
            >
              <img className="h-[3rem]" src={knight} alt="" />
            </div>
          </div>

          {/* <div id="end" className="tile"></div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
