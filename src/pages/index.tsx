import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import NumberIncrement from "@/components/NumbersIncrement/NumberIncrement";
import NumbersIncrement from "@/components/NumbersIncrement/NumbersIncrement";
import PositionRelative from "@/components/PositionRelative/PositionRelative";

const inter = Inter({ subsets: ["latin"] });

import Carousel from '../components/Carousel/Carousel';
import NavMenu from "@/components/NavMenu/NavMenu";

const HomePage = () => {
  const images = ['/BA.png', '/BA2.png', '/i3.png', '/i4.png'];

  return (
    <> 
    <Carousel images={images} />
      <NavBar />
      <PositionRelative />
      {/* <div className="positionRelative">
        <NumbersIncrement />
      </div> */}
    </>
  );
};

export default HomePage;

