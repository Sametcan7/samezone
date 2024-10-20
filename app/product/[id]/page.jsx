"use client";
import Product from "@/samezone/pages/product";
import EvaluationScoreStar from "@/samezone/ui/evaluationScoreStar";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  return (
    <>
      <Product />
    </>
  );
}
