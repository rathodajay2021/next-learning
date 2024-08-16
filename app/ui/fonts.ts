import { Inter, Roboto, Dancing_Script, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const dancing_script = Dancing_Script({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap"
});
