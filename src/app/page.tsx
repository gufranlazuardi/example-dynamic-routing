"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="mx-auto h-screen gap-[1rem] flex flex-col items-center justify-center">
      <Input
        type="text"
        value={inputValue}
        placeholder="Isi disini bang"
        onChange={(e) => setInputValue(e.target.value)}
        className="w-fit"
      />
      <Link href={`/detail/${inputValue}`}>
        <Button>Submit</Button>
      </Link>
    </div>
  );
}
