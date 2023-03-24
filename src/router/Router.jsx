import { Routes, Route } from "react-router-dom";
import { Intro } from "../pages/Intro";
import { Ren1 } from "../pages/Ren1";
import { Ren2 } from "../pages/Ren2";
import { Explor1 } from "../pages/Explor1";

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
      <Route path="/relwars" element={<RelWars />} />
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
