import { Button } from "@/components/ui/button";
import { edit, remove } from "../actions/action";
import prisma from "../db";
import { ProfileForm } from "./Myform";
import Delete from "./Delete";





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
export default async function First() {
  const data = await getData();
  
  return (
   <div className="w-full h-full flex justify-center items-center flex-col">
     <ProfileForm/>
     <div className=" w-full md:w-[50%] mx-auto h-[600px]">
  {data.map((item) => (
 <form key={item.id} action={edit} className="w-full mt-3 mx-auto flex justify-center items-center ">
  <input type="hidden"  value={item.id} name="inputid" />
   <input type="text" defaultValue={item.username} name="inputone" className="bg-transparent w-full "/>
   <input type="text" defaultValue={item.password} name="password" className="bg-transparent"/>
   <Button type="submit" className="mr-2">Edit</Button>
  <Delete/>
 </form>
  ))}
    </div>
   </div>
  );
}
