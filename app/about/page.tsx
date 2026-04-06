import { Container } from "@/components/container";
import { Header } from "@/components/sections/about/header";
import { WhyAndWho } from "@/components/sections/about/why-and-who";
import { HowWeWork } from "@/components/sections/about/how-we-work";
import CoreValues from "@/components/sections/about/core-values";

export default function AboutPage() {
  return (
    <>
      <Header />
      <HowWeWork />
      <WhyAndWho />
      <CoreValues />
    </>
  );
}
