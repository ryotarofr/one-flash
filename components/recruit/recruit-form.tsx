"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Label } from "../ui/label"
import { RecruitImageInput } from "./recruit-image-input"
import { formSchema } from "./form-sceme"
import { recruitFormData } from "./recruit-form-data"

type ValidNames = "name_kanji" | "name_kana" | "x_account" | "instagram_account" | "email" | "phone" | "stature" | "weight" | "transportation" | "nearest_station" | "self_introduction" | "picture_id";



export function InputForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_kanji: '',
      name_kana: '',
      x_account: '',
      instagram_account: '',
      email: '',
      phone: '',
      stature: '',
      weight: '',
      transportation: '',
      nearest_station: '',
      self_introduction: '',
      picture_id: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post('http://0.0.0.0/api/student', values);
      console.log('POSTリクエスト成功:', response.data);
    } catch (error) {
      console.error('POSTリクエストエラー:', error);
    }
    console.log(values)
  }

  return (
    <div className="min-w-[276px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {recruitFormData.map((data, index) => (
            <FormField
              key={index}
              control={form.control}
              name={data.name as ValidNames}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{data.label}</FormLabel>
                  <FormControl>
                    <Input required placeholder={data.placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <FormField
            control={form.control}
            name="transportation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>移動手段</FormLabel>
                <FormMessage />
                {/* 車、電車、バスの3つのチェックボックス */}
                <br />
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="car" id="option-one" />
                    <Label htmlFor="option-one">車</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="public-transportation" id="option-two" />
                    <Label htmlFor="option-two">電車・バス</Label>
                  </div>
                </RadioGroup>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="picture_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>写真(複数枚選択可)</FormLabel>
                <FormControl>
                  {/* ファイルを複数選択するための入力フィールド */}
                  <Input
                    type="file"
                    accept="image/*" // 画像ファイルのみ許可
                    multiple // 複数選択を有効にする
                  />
                </FormControl>
                <RecruitImageInput />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button variant="outline" size="lg" type="submit" className=" bg-pink-50 border border-pink-500">送信</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
