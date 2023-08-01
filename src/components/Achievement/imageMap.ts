import locked from "../../assets/achievements/Type=Locked.png";

import putCanInTrash from "../../assets/achievements/put_canintrash.png";
import hitCancopWithCan from "../../assets/achievements/hit_cancop_withcan.png";
import escapeApartmentRaid from "../../assets/achievements/escape_apartmentraid.png";
import breakMiniTeleporter from "../../assets/achievements/break_miniteleporter.png";
import getCrowbar from "../../assets/achievements/get_crowbar.png";
import findAllLambdas from "../../assets/achievements/find_alllambdas.png";
import killBarnaclesWithBarrel from "../../assets/achievements/kill_barnacleswithbarrel.png";
import getAirboat from "../../assets/achievements/get_airboat.png";
import getAirboatGun from "../../assets/achievements/get_airboatgun.png";
import killChopper from "../../assets/achievements/kill_chopper.png";
import findVortigauntCave from "../../assets/achievements/find_vortigauntcave.png";
import makeABasket from "../../assets/achievements/makeabasket.png";
import getGravityGun from "../../assets/achievements/get_gravitygun.png";
import findHevFaceplate from "../../assets/achievements/find_hevfaceplate.png";
import killEnemyWithToilet from "../../assets/achievements/kill_enemy_withtoilet.png";
import beatCemetry from "../../assets/achievements/beat_cemetery.png";
import beatRavenholmNoWeapons from "../../assets/achievements/beat_ravenholm_noweapons.png";
import killEnemiesWithCrane from "../../assets/achievements/kill_enemies_withcrane.png";
import pinSoldierToBillboard from "../../assets/achievements/pin_soldier_tobillboard.png";
import killOdessaGunship from "../../assets/achievements/kill_odessagunship.png";
import killThreeGunships from "../../assets/achievements/kill_threegunships.png";
import beatDontTouchSand from "../../assets/achievements/beat_donttouchsand.png";
import killEnemiesWithAntlions from "../../assets/achievements/kill_enemies_withantlions.png";
import killEnemiesWithManhack from "../../assets/achievements/kill_enemies_withmanhack.png";
import beatTurrentStandoff2 from "../../assets/achievements/beat_turretstandoff2.png";
import beatToxicTunnel from "../../assets/achievements/beat_toxictunnel.png";
import beatPlazaStandoff from "../../assets/achievements/beat_plazastandoff.png";
import followFreeman from "../../assets/achievements/followfreeman.png";
import killAllSnipers from "../../assets/achievements/kill_allc1709snipers.png";
import beatSupressionDevice from "../../assets/achievements/beat_supressiondevice.png";
import beatStriderStandoff from "../../assets/achievements/beat_c1713striderstandoff.png";
import disintegrateSoldiers from "../../assets/achievements/disintegrate_soldiersinfield.png";
import beatGame from "../../assets/achievements/beat_game.png";

const imageMap = {
  locked: locked, // for locked achievements

  putCanInTrash: putCanInTrash,
  hitCancopWithCan: hitCancopWithCan,
  escapeApartmentRaid: escapeApartmentRaid,
  breakMiniTeleporter: breakMiniTeleporter,
  getCrowbar: getCrowbar,
  findAllLambdas: findAllLambdas,
  killBarnaclesWithBarrel: killBarnaclesWithBarrel,
  getAirboat: getAirboat,
  getAirboatGun: getAirboatGun,
  killChopper: killChopper,
  findVortigauntCave: findVortigauntCave,
  makeABasket: makeABasket,
  getGravityGun: getGravityGun,
  findHevFaceplate: findHevFaceplate,
  killEnemyWithToilet: killEnemyWithToilet,
  beatCemetry: beatCemetry,
  beatRavenholmNoWeapons: beatRavenholmNoWeapons,
  killEnemiesWithCrane: killEnemiesWithCrane,
  pinSoldierToBillboard: pinSoldierToBillboard,
  killOdessaGunship: killOdessaGunship,
  killThreeGunships: killThreeGunships,
  beatDontTouchSand: beatDontTouchSand,
  killEnemiesWithAntlions: killEnemiesWithAntlions,
  killEnemiesWithManhack: killEnemiesWithManhack,
  beatTurrentStandoff2: beatTurrentStandoff2,
  beatToxicTunnel: beatToxicTunnel,
  beatPlazaStandoff: beatPlazaStandoff,
  followFreeman: followFreeman,
  killAllSnipers: killAllSnipers,
  beatSupressionDevice: beatSupressionDevice,
  beatStriderStandoff: beatStriderStandoff,
  disintegrateSoldiers: disintegrateSoldiers,
  beatGame: beatGame,
};

export default imageMap;

export type ImageMapType = keyof typeof imageMap;
