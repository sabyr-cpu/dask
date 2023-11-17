"use client"

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
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
export default function Schedule() {
  const [data, setData] = useState([
    {
      taskName: "Решить 20 - 36",
      subject: "Математика",
      additionalInfo: "I got new forgees on the js",
      done: false,
    },
    {
      taskName: "Решить 20 - 36",
      subject: "Математика",
      additionalInfo: "I got new forgees on the js",
      done: false,
    },
  ]);

  function allTasks() {
    console.log('nige')
    return (
      <>
        {data.map((v) => {
          (<Card className="flex justify-between">
            <CardHeader className="space-y-3">
              <Button variant="link" className="p-0 m-0 h-auto">
                <CardTitle>{v.taskName}</CardTitle>
              </Button>
              <CardDescription>
                <Badge variant="secondary">{v.subject}</Badge> |{" "}
                <Badge variant="destructive">{v.done ? 'Сделано': 'Не сделано'}</Badge>
              </CardDescription>
            </CardHeader>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="m-6">
                  Подробнее
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[600px]">
                <DialogHeader>
                  <DialogTitle className="text-3xl">
                    {v.taskName}
                  </DialogTitle>
                  <DialogDescription>
                    <CardDescription>
                      <Badge variant="secondary">Math</Badge> |{" "}
                      <Badge variant="destructive">Not Done</Badge>
                    </CardDescription>
                  </DialogDescription>
                </DialogHeader>
                <p>
                  {v.additionalInfo}
                </p>
                <DialogFooter>
                  <Button type="submit" variant="secondary">
                    Закрыть
                  </Button>
                  <Button
                    type="submit"
                    className="bg-green-500 hover:bg-green-400 text-white"
                  >
                    Отметить сделанным
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Card>)
        })}
      </>
    );
  }
  function handleCompletion(taskID) {
    console.log(taskID)
    let i = taskID
    let newdata = [...data]
    newdata[i].done = !newdata[i].done
    console.log('datachanged: ', newdata)
    setData(newdata)
  }
  return (
    <>
      <Navbar />
      <div className="ml-[256px] flex flex-col gap-5 p-8">
      {data.map((v, k) => {
          return (<><Card className="flex justify-between">
            <CardHeader className="space-y-3">
              <Button variant="link" className="p-0 m-0 h-auto">
                <CardTitle>{v.taskName}</CardTitle>
              </Button>
              <CardDescription>
                <Badge variant="secondary">{v.subject}</Badge> |{" "}
                <Badge variant="destructive" className={v.done ? "bg-green-500 hover:bg-green-400" : null}>{v.done ? 'Сделано': 'Не сделано'}</Badge>
              </CardDescription>
            </CardHeader>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="m-6">
                  Подробнее
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[600px]">
                <DialogHeader>
                  <DialogTitle className="text-3xl">
                    {v.taskName}
                  </DialogTitle>
                  <DialogDescription>
                    <CardDescription>
                      <Badge variant="secondary">{v.subject}</Badge> |{" "}
                      <Badge variant="destructive" className={v.done ? "bg-green-500 hover:bg-green-400" : null}>{v.done ? 'Сделано': 'Не сделано'}</Badge>
                    </CardDescription>
                  </DialogDescription>
                </DialogHeader>
                <p>
                  {v.additionalInfo}
                </p>
                <DialogFooter>
                  <Button type="submit" variant="secondary">
                    Закрыть
                  </Button>
                  <Button
                    type="submit"
                    className={v.done ? "bg-red-500 hover:bg-red-400" : "bg-green-500 hover:bg-green-400"}
                    onClick={()=>{handleCompletion(k)}}
                  >
                    {v.done ? "Отменить сдачу" : "Отметить сделанным"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Card></>)
        })}
      </div>
    </>
  );
}
