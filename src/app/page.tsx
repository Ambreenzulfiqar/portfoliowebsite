import Header from "@/components/header";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    
<h1 className="text-center p-5 text-4xl font-bold">Welcome To My Portfolio</h1>
<h2 className="text-center p-5 text-4xl font-medium">I'm Ambreen Zulfiqar,A Front End Developer</h2>
<p className="text-center px-10">I'm a dedicated web developer specializing in crafting dynamic, responsive, and engaging websites. With a keen eye for detail and a commitment to quality, I aim to deliver user-centered digital experiences that not only look great but also perform efficiently.
Welcome to my portfolio! Here, you can explore my projects, learn about my experience, and see how I bring creative ideas to life through code. </p>
      <div className="flex justify-center items-center">
      <Image src={"/image/laptop-girl.jpg" } alt="laptop girl" height={300} width={500}/>
      
              
      
        

    </div>
      
    </div>
  );
}
