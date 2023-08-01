import pointInsertionSrc from "../assets/chapters/01_Point_Insertion.jpg";
import redLetterDaySrc from "../assets/chapters/02_Red_Letter_Day.jpg";
import routeKanalSrc from "../assets/chapters/03_Route_Kanal.jpg";
import waterHazardSrc from "../assets/chapters/04_Water_Hazard.jpg";
import blackMesaEastSrc from "../assets/chapters/05_Black_Mesa_East.jpg";
import ravenholmSrc from "../assets/chapters/06_We_Dont_Go_To_Ravenholm.jpg";
import highwaySrc from "../assets/chapters/07_Highway_17.jpg";
import sandtrapsSrc from "../assets/chapters/08_Sandtraps.jpg";
import novaProspectSrc from "../assets/chapters/09_Nova_Prospekt.jpg";
import entanglementSrc from "../assets/chapters/09A_Entanglement.jpg";
import anticitizenOneSrc from "../assets/chapters/10_Anticitizen_One.jpg";
import followFreemanSrc from "../assets/chapters/11_Follow_Freeman.jpg";
import ourBenefactorsSrc from "../assets/chapters/12_Our_Benefactors.jpg";
import darkEnergySrc from "../assets/chapters/13_Dark_Energy.jpg";

const missionImagesMap = {
  pointInsertion: pointInsertionSrc,
  redLetterDay: redLetterDaySrc,
  routeKanal: routeKanalSrc,
  waterHazard: waterHazardSrc,
  blackMesaEast: blackMesaEastSrc,
  ravenholm: ravenholmSrc,
  highway: highwaySrc,
  sandtraps: sandtrapsSrc,
  novaProspect: novaProspectSrc,
  entaglement: entanglementSrc,
  anticitizenOne: anticitizenOneSrc,
  followFreeman: followFreemanSrc,
  ourBenefactors: ourBenefactorsSrc,
  darkEnergy: darkEnergySrc,
};

export default missionImagesMap;

export type MissionImageType = keyof typeof missionImagesMap;
