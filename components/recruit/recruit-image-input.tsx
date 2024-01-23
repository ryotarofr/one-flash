"use client"

import { useState } from "react"
import { Input } from "../ui/input";
import { Icons } from "../shared/icons";
import { Button } from "../ui/button";

export const RecruitImageInput = () => {
  const [imageCount, setImageCount] = useState(0)

  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < imageCount; i++) {
      inputs.push(
        <div className="flex items-center">
          <Input
            key={i}
            type="file"
            accept="image/*"
          />
          <Button variant="outline" onClick={(e) => { e.preventDefault(); setImageCount(imageCount - 1); }}>
            <Icons.trash color="#ff3888" />
          </Button>
        </div>
      );
    }
    return inputs;
  };
  return (
    <div>
      {renderInputs()}
      <Button variant="outline" onClick={(e) => { e.preventDefault(); setImageCount(imageCount + 1); }}>
        <Icons.addFile className="px-1" />
        追加
      </Button>
    </div>
  )
}