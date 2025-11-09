"use client";
import { useEffect } from "react";
export default function Index() {
  useEffect(() => {
    // ruta relativa para respetar el basePath en GitHub Pages
    window.location.replace("./es/");
  }, []);
  return null;
}
