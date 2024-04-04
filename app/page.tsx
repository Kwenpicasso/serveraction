import Image from "next/image";
import { ProfileForm } from "./component/Myform";

export default function Home() {
  return (
   <div className="w-full h-full flex justify-center items-center">
     <ProfileForm/>
   </div>
  );
}
