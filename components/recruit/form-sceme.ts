import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const formSchema = z.object({
  name_kanji: z.string().min(2, {
    message: "2文字以上の名前にしてください。",
  }),
  name_kana: z.string().min(2, {
    message: "2文字以上の名前にしてください。",
  }),
  x_account: z.string().min(2, {
    message: "有効なXアカウントを入力してください",
  }),
  instagram_account: z.string().min(2, {
    message: "有効なinstagramアカウントを入力してください",
  }),
  email: z.string().email({
    message: "有効なメールアドレスを入力してください。",
  }),
  phone: z.string().regex(phoneRegex, {
    message: "有効な電話番号を入力してください。",
  }),
  stature: z.string().min(0, {
    message: "身長を入力してください。",
  }),
  weight: z.string().min(0, {
    message: "体重を入力してください。",
  }),
  transportation: z.string().min(0).refine(value => value === 'car' || value === 'public transportation', {
    message: "移動手段を選択してください。",
  }),
  nearest_station: z.string().min(0, {
    message: "最寄り駅を入力してください。",
  }),
  self_introduction: z.string().min(0, {
    message: "紹介文を書いてください。",
  }),
  picture_id: z.string().min(0, {
    message: "写真を選択してください。",
  }),
})
