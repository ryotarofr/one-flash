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
import { Textarea } from "../ui/textarea"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Label } from "../ui/label"
import { RecruitImageInput } from "./recruit-image-input"
import { formSchema } from "./form-sceme"


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
            name="x_account"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Xアカウント</FormLabel>
                <FormControl>
                  <Input required placeholder="son_goku_000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instagram_account"
            render={({ field }) => (
              <FormItem>
                <FormLabel>instagramアカウント</FormLabel>
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
            name="stature"
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
            name="nearest_station"
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
            name="self_introduction"
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
                {/* 選択された画像のプレビューを表示（あれば） */}
                {form.watch('picture_id') && typeof form.watch('picture_id') !== 'string' && (
                  <div>
                    {Array.from(form.watch('picture_id')).map((file, index) => (
                      <img
                        key={index}
                        // src={URL.createObjectURL(file)}
                        src={URL.createObjectURL(file as unknown as Blob)}
                        alt={`プレビュー${index + 1}`}
                        className="mt-2 max-w-full"
                      />
                    ))}
                  </div>
                )}
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
