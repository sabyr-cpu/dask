import Navbar from "@/components/navbar";
import Image from "next/image";
// привет диас, я ща постараюсь нобайын келтирип хоть что то сделать ||   ок бро әнәс адай бешбармак с рыбой махамбет исатай || <3
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Profile() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center mt-20">
        <Tabs defaultValue="account" className="w-[400px] ml-[250px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Данные профиля</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription>
                  Данные вашего аккаунта.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">ИИН</Label>
                  <Input id="name" defaultValue="070820028070" disabled/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Пароль</Label>
                  <Input id="username" defaultValue="********" disabled/>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Выйти с аккаунта</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
