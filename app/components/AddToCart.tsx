"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface productCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
}

const AddToCart = ({
  currency,
  description,
  image,
  name,
  price,
}: productCart) => {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: "asdasd",
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
