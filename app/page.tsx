import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { WhatItDoes } from "@/components/WhatItDoes";
import { DecisionFlow } from "@/components/DecisionFlow";
import { CoreModules } from "@/components/CoreModules";
import { FitsYourStack } from "@/components/FitsYourStack";
import { BuiltByOperators } from "@/components/BuiltByOperators";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <WhatItDoes />
      <DecisionFlow />
      <CoreModules />
      <FitsYourStack />
      <BuiltByOperators />
      <Contact />
    </>
  );
}
