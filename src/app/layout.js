import { Inter, Playfair_Display, Roboto_Slab, Lato } from "next/font/google";
import ThemeRegistry from "./components/ThemeRegistry/ThemeRegistry";
import MUIProvider from "./components/MUIProvider";

const inter = Inter({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400", "500"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Port Marine Solutions",
  description:
    "Your trusted partner in mechanical and marine engineering solutions in East Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${playfairDisplay.className} ${robotoSlab.className} ${lato.className}`}
      >
        <ThemeRegistry>
          <MUIProvider>{children}</MUIProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
