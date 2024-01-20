"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { Textarea } from "./ui/textarea"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  name_kanji: z.string().min(2, {
    message: "2文字以上の名前にしてください。",
  }),
  name_kana: z.string().min(2, {
    message: "2文字以上の名前にしてください。",
  }),
  sns_account: z.string().min(2, {
    message: "有効なSNSアカウントを入力してください",
  }),
  email: z.string().email({
    message: "有効なメールアドレスを入力してください。"
  }),
  phone: z.string().regex(phoneRegex, {
    message: "有効な電話番号を入力してください。"
  }),
  height: z.string().regex(phoneRegex, {
    message: "身長を入力してください。"
  }),
  weight: z.string().regex(phoneRegex, {
    message: "体重を入力してください。"
  }),
  traffic_method: z.string().regex(phoneRegex, {
    message: "交通手段にチェックを入れてください。"
  }),
  closest_station: z.string().regex(phoneRegex, {
    message: "最寄り駅を入力してください。"
  }),
  description: z.string().min(0, {
    message: "紹介文を書いて下さい",
  }),
  car: z.string().min(0, {
    message: "",
  }),
  train: z.string().min(0, {
    message: "紹介文を書いて下さい",
  }),
  bus: z.string().min(0, {
    message: "紹介文を書いて下さい",
  }),
})

export function InputForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_kanji: '',
      name_kana: '',
      sns_account: '',
      email: '',
      phone: '',
      height: '',
      weight: '',
      traffic_method: '',
      closest_station: '',
      description: '',
      car: '',
      train: '',
      bus: '',
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
          <FormField
            control={form.control}
            name="name_kanji"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ユーザーネーム(氏名)</FormLabel>
                <FormControl>
                  <Input required placeholder="孫 悟空" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name_kana"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ユーザーネーム(フリガナ)</FormLabel>
                <FormControl>
                  <Input required placeholder="son goku" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sns_account"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SNSアカウント</FormLabel>
                <FormControl>
                  <Input required placeholder="son_goku_000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormControl>
                  <Input required placeholder="son@goku.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>電話番号</FormLabel>
                <FormControl>
                  <Input required placeholder="080-1234-5678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>身長(cm)</FormLabel>
                <FormControl>
                  <Input required placeholder="175" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>体重(kg)</FormLabel>
                <FormControl>
                  <Input required placeholder="62" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="traffic_method"
            render={({ field }) => (
              <FormItem>
                <FormLabel>交通手段</FormLabel>
                <FormMessage />
                {/* 車、電車、バスの3つのチェックボックス */}
                <br />
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">車</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">電車・バス</Label>
                  </div>
                </RadioGroup>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="closest_station"
            render={({ field }) => (
              <FormItem>
                <FormLabel>最寄駅</FormLabel>
                <FormControl>
                  <Input required placeholder="東京駅" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>自己紹介</FormLabel>
                <FormControl>
                  <Textarea required placeholder="紹介文を書いて下さい" {...field} />
                </FormControl>
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
