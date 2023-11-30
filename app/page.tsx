"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';


const formSchema = z.object({
  IIN: z.string(),
  password: z.string(),
});

export default function Home() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      IIN: '', // Make sure to match the field name with your schema
      password: '', // Make sure to match the field name with your schema
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("IIN: " + values.IIN, "Password" + values.password);
    
  }

  // @ts-ignore
  // @ts-ignore
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      <div className="text-5xl mt-20">Авторизация</div>


      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Label htmlFor="IIN">ИИН</Label>
        <Input
          type="text"
          placeholder="ИИН"
          {...form.register('IIN')} // Use form.register for field registration
        />

        <Label htmlFor="password" className="mt-5">Пароль</Label>
        <Input
          type="password"
          placeholder="Пароль"
          {...form.register('password')} // Use form.register for field registration
        />

        <div className="flex justify-center mt-5">
          <Button type="submit">Войти</Button>
        </div>
      </form>
    </div>
  );
}


// "use client"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import * as z from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// const formSchema = z.object({
//   IIN: z.string().length(12),
//   password: z.string()
// });


// export default function Home() {
//   // 1. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//     },
//   })

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values)
//   }
//   return (
//     <div className="flex justify-center items-center flex-col gap-10">
//       <div className="text-[80px]">Login</div>
//       <Input />
//       <Button>Log in</Button>
//       <div className="text-[80px]">Password</div>
//     </div>
//   )
// }
