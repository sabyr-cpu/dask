"use client";
import { Avatar } from "@/components/ui/avatar";
import Navbar from "@/components/navbar";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Select from 'react-select';

export default function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [dayTable, setDayTable] = useState(true);

  useEffect(() => {
    console.log(dayTable);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRoomChange = (event) => {
    setRoom(event.target.value);
  };
  const [selectedOption, setSelectedOption] = useState({ value: "day", label: "день" });

  // Options for the select
  const options = [
    { value: "day", label: "день" },
    { value: "week", label: "неделю" },
  ];

  // Handle change in selection
  const handleChange = (selectedOption) => {
    console.log(setSelectedOption)
    setSelectedOption(selectedOption);
    
    // You can perform other actions here if needed
  };

  const [date, setDate] = React.useState<Date>();
  return (
    <div>
      <Navbar />
      <div className="ml-[256px]">
        <div className="p-8">
          <div className="text-5xl font-bold flex items-center justify-center gap-6">
            Расписание
          </div>
          <div className="flex justify-center mt-8 gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Выбрать день</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <hr className="mt-5" />
          {selectedOption.value === 'day' ? (
            <div className="flex flex-col gap-5 mt-5">
              <Card className="flex justify-between">
                <div>
                  <CardHeader>
                    <CardTitle>Математика</CardTitle>
                    <CardDescription>
                      Учитель Математики | 125 кабинет
                    </CardDescription>
                  </CardHeader>
                  <CardContent>Тема урока: Интегралы</CardContent>
                </div>
                <div className="text-2xl rounded-tr-lg rounded-br-lg p-16">
                  8:30-9:55
                </div>
              </Card>
              <Card className="flex justify-between">
                <div>
                  <CardHeader>
                    <CardTitle>Английский язык</CardTitle>
                    <CardDescription>
                      Учитель английского | 156 кабинет
                    </CardDescription>
                  </CardHeader>
                  <CardContent>Тема урока: Types of essay</CardContent>
                </div>
                <div className="text-2xl rounded-tr-lg rounded-br-lg p-16">
                  10:15-11:40
                </div>
              </Card>
              <Card className="flex justify-between">
                <div>
                  <CardHeader>
                    <CardTitle>Информатика</CardTitle>
                    <CardDescription>
                      Учитель информатики | 252 кабинет
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    Тема урока: Поколения языков программирования
                  </CardContent>
                </div>
                <div className="text-2xl rounded-tr-lg rounded-br-lg p-16">
                  11:50-13:20
                </div>
              </Card>
              <Card className="flex justify-between">
                <div>
                  <CardHeader>
                    <CardTitle>Физика</CardTitle>
                    <CardDescription>
                      Учитель физики | 332 кабинет
                    </CardDescription>
                  </CardHeader>
                  <CardContent>Тема урока: Законы Кеплера</CardContent>
                </div>
                <div className="text-2xl rounded-tr-lg rounded-br-lg p-16">
                  13:50-15:15
                </div>
              </Card>
              <Card className="flex justify-between">
                <div>
                  <CardHeader>
                    <CardTitle>Кураторский час</CardTitle>
                    <CardDescription>
                      Куратор класса | 324 кабинет
                    </CardDescription>
                  </CardHeader>
                  <CardContent>Тема урока: Подготовка к концерту</CardContent>
                </div>
                <div className="text-2xl rounded-tr-lg rounded-br-lg p-16">
                  15:20-16:00
                </div>
              </Card>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-1/5">
                    Добавить занятие
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Добавить занятие</SheetTitle>
                    <SheetDescription>
                      Вы можете добавить новое занятие в свое расписание.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Занятие
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Описание
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        className="col-span-3"
                      />
                      <Label htmlFor="name" className="text-right">
                        Ведущий
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Место
                      </Label>
                      <Input
                        id="room"
                        value={room}
                        onChange={handleRoomChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Время
                      </Label>
                      <Input
                        id="room"
                        value={room}
                        onChange={handleRoomChange}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button>Сохранить</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <Card></Card>
          )}
        </div>
      </div>
    </div>
  );
}
