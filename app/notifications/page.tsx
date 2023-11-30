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
      title: "Ты не сделал домашнюю работу",
      by: "Учитель математики",
      short: "Сильно отстаешь от программы",
      long: "Не делая домашнюю работу, ты все сильнее и сильнее отстаешь от программы. Соберись и возьмись за учебу.",
      time_passed: "8 часов назад",
      isread: false,
    },
    {
      title: "К сожалению нет",
      by: "СД",
      short: "Привет калайсын",
      long: "Привет калайсын, да круто вчера потанцевали,но встретиться не сможем, я занят",
      time_passed: "3 часа 22 минуты назад",
      isread: true
    },
  ]);
  function handleDelete(i: number) {
    let newdata = [...data]
      newdata.splice(i, 1)
      setData(newdata)
  }
  function handleRead(i: number) {
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
                      <CardTitle className={v.isread ? undefined : "font-bold"}>
                        {v.title}
                      </CardTitle>
                    </Button>
                    <CardDescription className={v.isread ? undefined : "font-bold"}>
                      От: {v.by}
                      <br />
                      {v.short}
                    </CardDescription>
                  </CardHeader>
                  <Button variant="outline" className="m-6">
                    Подробнее
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
                    <Button type="submit" variant="destructive" onClick={() => handleDelete(k)}>Удалить</Button>
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
