import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import products from "@/data/productsData";

export default function PreloadModels() {
  useEffect(() => {
    products.forEach(({ modelPath }) => {
      if (modelPath) useGLTF.preload(modelPath);
    });
  }, []);
  return null;
}
