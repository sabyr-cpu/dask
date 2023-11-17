"use client";

import Navbar from "@/components/navbar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
export default function Notifications() {
  const [data, setData] = useState([
    {
      title: "You didn\'t complete your homework",
      by: "Sardarbek Kuanyshbek",
      short: "Congratulations, you won 600 free spins",
      long: "Dear John Doe, you didn\`t complete your homework, I am dissapointed. I would never believe, that those macaroni would be so hot, that my knees would drive crazy truck, without being interested in bunny holding IPhone Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatem aliquam blanditiis fugit obcaecati repudiandae ut. минус вайб короче...",
      time_passed: "8h",
      isread: false,
    },
    {
      title: "Return my pen please!",
      by: "Gestapo Valverde",
      short: "Hello, u tek mai pen riturn or i...",
      long: "u nou vat i do? pliz return i nid pen or i kent du homvork ;(",
      time_passed: "3h 32mins",
      isread: true
    },
  ]);
  function handleDelete(i) {
    let newdata = [...data]
      newdata.splice(i, 1)
      setData(newdata)
  }
  function handleRead(i) {
    let newdata = [...data]

    newdata[i].isread = true

    setData(newdata)
  }
  return (
    <>
      <Navbar />
      <div className="ml-[256px] flex flex-col gap-5 p-8">
        {data.map((v, k) => (
          <>
            <Dialog>
              <DialogTrigger asChild>
                <Card onClick={() => handleRead(k)} className="flex justify-between cursor-pointer">
                  <CardHeader className="space-y-3">
                    <Button variant="link" className="p-0 m-0 h-auto">
                      <CardTitle className={v.isread ? null : "font-bold"}>
                        {v.title}
                      </CardTitle>
                    </Button>
                    <CardDescription className={v.isread ? null : "font-bold"}>
                      By: {v.by}
                      <br />
                      {v.short}
                    </CardDescription>
                  </CardHeader>
                  <Button variant="outline" className="m-6">
                    Read...
                  </Button>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <div className="bold">
                  {v.title}
                </div>
                <hr />
                <div>
                  {v.long}
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit" variant="destructive" onClick={() => handleDelete(k)}>Delete</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        ))}
      </div>
    </>
  );
}
