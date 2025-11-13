import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/utils";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tom Davidov - Software Engineer",
    short_name: "Tom Davidov",
    description: "Professional portfolio of Tom Davidov",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1220",
    theme_color: "#3B82F6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

