import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Client } from "./components/clients";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Client/>
    </>
  );
}
