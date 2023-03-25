import { Routes, Route } from "react-router-dom";
import { Intro } from "../pages/Intro";
import { Ren1 } from "../pages/Ren1";
import { Ren2 } from "../pages/Ren2";
import { Explor1 } from "../pages/Explor1";
import { Explor2 } from "../pages/Explor2";
import { Discuss1 } from "../pages/Discuss1";
import { Ref } from "../pages/Ref";
import { RelWar } from "../pages/RelWar";
import { Discuss2 } from "../pages/Discuss2";
import { SciRev } from "../pages/SciRev";
import { Colonial } from "../pages/Colonial";
import { Discuss3 } from "../pages/Discuss3";
import { Slave } from "../pages/Slave";
import { Enlighten } from "../pages/Enlighten";
import { Discuss4 } from "../pages/Discuss4";
import { FrRev1 } from "../pages/FrRev1";
import { FrRev2 } from "../pages/FrRev2";
import { Discuss5 } from "../pages/Discuss5";
import { Revs19c } from "../pages/Revs19c";
import { IndRev } from "../pages/IndRev";
import { Isms } from "../pages/Isms";
import { Discuss6 } from "../pages/Discuss6";
import { Nationalism } from "../pages/Nationalism";
import { Imperial1 } from "../pages/Imperial1";
import { Discuss7 } from "../pages/Discuss7";
import { Imperial2 } from "../pages/Imperial2";
import { WWI } from "../pages/WWI";
import { Discuss8 } from "../pages/Discuss8";
import { WW1Conseq } from "../pages/WW1Conseq";
import { InterWar1 } from "../pages/InterWar1";
import { Discuss9 } from "../pages/Discuss9";
import { InterWar2 } from "../pages/InterWar2";
import { WWII } from "../pages/WWII";
import { Discuss10 } from "../pages/Discuss10";
import { Discuss11 } from "../pages/Discuss11";
import { Discuss12 } from "../pages/Discuss12";
import { Holocaust } from "../pages/Holocaust";
import { ColdWar1 } from "../pages/ColdWar1";
import { ColdWar2 } from "../pages/ColdWar2";
import { Decolonize1 } from "../pages/Decolonize1";
import { Decolonize2 } from "../pages/Decolonize2";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/renaissance1" element={<Ren1 />} />
      <Route path="/renaissance2" element={<Ren2 />} />
      <Route path="/exploration1" element={<Explor1 />} />
      <Route path="/exploration2" element={<Explor2 />} />
      <Route path="/discussion1" element={<Discuss1 />} />
      <Route path="/reformation" element={<Ref />} />
      <Route path="/relwars" element={<RelWar />} />
      <Route path="/discussion2" element={<Discuss2 />} />
      <Route path="/scirev" element={<SciRev />} />
      <Route path="/colonialism" element={<Colonial />} />
      <Route path="/discussion3" element={<Discuss3 />} />
      <Route path="/slavetrade" element={<Slave />} />
      <Route path="/enlightenment" element={<Enlighten />} />
      <Route path="/discussion4" element={<Discuss4 />} />
      <Route path="/fr-rev1" element={<FrRev1 />} />
      <Route path="/fr-rev2" element={<FrRev2 />} />
      <Route path="/discussion5" element={<Discuss5 />} />
      <Route path="/19c-revs" element={<Revs19c />} />
      <Route path="/ind-rev" element={<IndRev />} />
      <Route path="/isms" element={<Isms />} />
      <Route path="/discussion6" element={<Discuss6 />} />
      <Route path="/nationalism" element={<Nationalism />} />
      <Route path="/imperialism1" element={<Imperial1 />} />
      <Route path="/discussion7" element={<Discuss7 />} />
      <Route path="/imperialism2" element={<Imperial2 />} />
      <Route path="/wwi" element={<WWI />} />
      <Route path="/discussion8" element={<Discuss8 />} />
      <Route path="/wwi-consequences" element={<WW1Conseq />} />
      <Route path="/interwar1" element={<InterWar1 />} />
      <Route path="/discussion9" element={<Discuss9 />} />
      <Route path="/interwar2" element={<InterWar2 />} />
      <Route path="/wwii" element={<WWII />} />
      <Route path="/discussion10" element={<Discuss10 />} />
      <Route path="/holocaust" element={<Holocaust />} />
      <Route path="/coldwar1" element={<ColdWar1 />} />
      <Route path="/coldwar2" element={<ColdWar2 />} />
      <Route path="/discussion11" element={<Discuss11 />} />
      <Route path="/decolonization1" element={<Decolonize1 />} />
      <Route path="/decolonization2" element={<Decolonize2 />} />
      <Route path="/discussion12" element={<Discuss12 />} />
    </Routes>
  );
}
