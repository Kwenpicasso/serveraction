
import { ProfileForm } from "./component/Myform";
import prisma from "./db";
import { Button } from "@/components/ui/button";
import { edit } from "./actions/action";




async function getData() {
  const data = await prisma.user.findMany({
      select: {
          username: true,
          id:true,
          password:true,
      } 
  }); 
  return data;
}
export default async function Home() {
  const data = await getData();
  
  return (
   <div className="w-full h-full flex justify-center items-center flex-col">
     <ProfileForm/>
     <div className="w-[50%] mx-auto h-[600px]">
  {data.map((item) => (
 <form key={item.id} action={edit}>
  <input type="hidden"  value={item.id} name="inputid"/>
   <input type="text" defaultValue={item.username} name="inputone"/>
   <input type="text" defaultValue={item.password} name="password"/>
   <Button type="submit">edit</Button>
 </form>
  ))}
    </div>
   </div>
  );
}
