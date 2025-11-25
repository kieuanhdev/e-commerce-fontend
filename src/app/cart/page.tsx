'use client'

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { ArrowRight, Trash2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { parse } from "path";
import { useState } from "react";
import Image from "next/image";

const steps = [
    {
        id: 1,
        title: "Shopping Cart",
    },
    {
        id: 2,
        title: "Shipping Address",
    },
    {
        id: 3,
        title: "Payment Method",
    }
]

const cartItems = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        shortDescription: "A timeless white t-shirt for everyday wear.",
        description:
            "This classic white t-shirt is made from 100% organic cotton, providing comfort and durability. Perfect for casual outings or layering under jackets.",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/1g.png",
            purple: "/products/1p.png",
            green: "/products/1gr.png",
        },
        quantity: 1,
        selectedSize: "m",
        selectedColor: "gray",
    },
    {
        id: 2,
        name: "Classic White T-Shirt",
        shortDescription: "A timeless white t-shirt for everyday wear.",
        description:
            "This classic white t-shirt is made from 100% organic cotton, providing comfort and durability. Perfect for casual outings or layering under jackets.",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/2g.png",
            purple: "/products/2p.png",
            green: "/products/2gr.png",
        },
        quantity: 1,
        selectedSize: "m",
        selectedColor: "gray",
    },
    {
        id: 3,
        name: "Classic White T-Shirt",
        shortDescription: "A timeless white t-shirt for everyday wear.",
        description:
            "This classic white t-shirt is made from 100% organic cotton, providing comfort and durability. Perfect for casual outings or layering under jackets.",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/3b.png",
            purple: "/products/3bl.png",
            green: "/products/3gr.png",
        },
        quantity: 1,
        selectedSize: "m",
        selectedColor: "gray",
    },
]

const CartPage = () => {


    const searchParams = useSearchParams();
    const router = useRouter();
    const activeStep = parseInt(searchParams.get("step") || "1");
    const [shippingForm, setShippingForm] = useState();

    return (
        <div className='flex flex-col gap-8 items-center justify-center mt-12'>
            {/* TITLE */}
            <h1 className='text-2xl font-medium'>Shopping Cart</h1>
            {/* STEPS */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {steps.map(step => (
                    <div key={step.id} className={`flex items-center gap-2 border-b-2 pb-4 ${activeStep === step.id ? "border-gray-800" : "border-gray-200"}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${activeStep === step.id ? "bg-gray-800 " : "bg-gray-200 "}`}>
                            <span className='font-medium'>{step.id}</span>
                        </div>
                        <p className={`text-sm font-medium ${activeStep === step.id ? "text-gray-800" : "text-gray-400"}`}>{step.title}</p>
                    </div>
                ))}
            </div>
            {/* STEPS & DETAIL */}
            <div className="w-full flex flex-col lg:flex-row gap-16">
                {/* STEPS */}
                <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 flex flex-col gap-8 rounded-lg">
                    {activeStep === 1 ? (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between">
                                {/* IMAGE AND DETAILS */}
                                <div className="flex gap-8">
                                    {/* IMAGE */}
                                    <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                                        <Image
                                            src={item.images[item.selectedColor as keyof typeof item.images]}
                                            alt={item.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    {/* DETAILS */}
                                    <div className="flex flex-col justify-between ">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-medium">{item.name}</p>
                                            <p className="text-sx text-gray-500">Quantity: {item.quantity}</p>
                                            <p className="text-sx text-gray-500">Size: {item.selectedSize.toUpperCase()}</p>
                                            <p className="text-sx text-gray-500">Color: {item.selectedColor}</p>
                                        </div>
                                        <p className="font-medium pt-2">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                {/* DELETE BUTTON */}
                                    <button className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer">
                                        <Trash2 className="w-3 h-3" />
                                    </button>
                            </div>

                        ))
                    )
                        : activeStep === 2 ? <ShippingForm />
                            : activeStep === 3 && shippingForm ? (<PaymentForm />) :
                                <p className="text-sm text-gray-500">
                                    Please fill in your shipping form to continue.
                                </p>

                    }
                </div>
                {/* DETAILS */}
                <div className="w-full lg:w-5/12 shadow-lg border  border-gray-100 p-8 flex flex-col gap-8 rounded-lg h-max">
                    <h2 className="font-semibold">Cart Details</h2>
                    <div className="flex justify-between gap-4 text-sm">
                        <p className="text-gray-500">Subtotal</p>
                        <p className="font-medium">
                            $
                            {
                                cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
                            }
                        </p>
                    </div>
                    <div className="flex justify-between  text-sm">
                        <p className="text-gray-500">Discount(10%)</p>
                        <p className="font-medium">
                            $ 10
                        </p>
                    </div>
                    <div className="flex justify-between  text-sm">
                        <p className="text-gray-500">Shipping Fee</p>
                        <p className="font-medium">
                            $10
                        </p>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between text-sm">
                        <p className="text-gray-800 font-semibold">Total</p>
                        <p className="font-medium">
                            $
                            {
                                cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
                            }
                        </p>
                    </div>
                    {activeStep == 1 && <button onClick={() => router.push("/cart?step=2", { scroll: false })} className="w-full bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
                        Continue
                        <ArrowRight className="w-3 h-3" />
                    </button>}
                </div>
            </div>
        </div >
    )
}

export default CartPage