'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';

import { FEATURED_PRODUCTS } from '@/lib/constants';
import { CustomerLayout } from '@/components/layout/customer-layout';
import { Button } from '@/components/ui/button';
import { ButtonGradient } from '@/components/ui/button-gradient';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Sample cart items
const initialCartItems = [
  { product: FEATURED_PRODUCTS[0], quantity: 1 },
  { product: FEATURED_PRODUCTS[2], quantity: 2 },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      (item.product.discountPrice || item.product.price) * item.quantity,
    0
  );
  const shippingCost = subtotal > 100 ? 0 : 10;
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shippingCost - discount;

  // Update quantity
  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };

  // Remove item
  const removeItem = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Apply coupon
  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'DISCOUNT10') {
      setCouponApplied(true);
    }
  };

  return (
    <CustomerLayout>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#122B5F]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium">Shopping Cart</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-[#122B5F] mb-8">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex justify-center items-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <ShoppingCart className="h-10 w-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven&apos;t added any products to your cart yet.
            </p>
            <Link href="/shop">
              <ButtonGradient variant="blue" size="lg">
                Continue Shopping
              </ButtonGradient>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="hidden sm:grid sm:grid-cols-12 text-sm font-medium text-gray-500 bg-gray-50 p-4">
                  <div className="sm:col-span-6">Product</div>
                  <div className="sm:col-span-2 text-center">Price</div>
                  <div className="sm:col-span-2 text-center">Quantity</div>
                  <div className="sm:col-span-2 text-right">Subtotal</div>
                </div>

                {cartItems.map((item, index) => (
                  <div key={index} className="border-t first:border-t-0">
                    <div className="grid sm:grid-cols-12 py-6 px-4 gap-4 items-center">
                      {/* Product */}
                      <div className="sm:col-span-6 flex items-center gap-4">
                        <div className="relative h-20 w-20 flex-shrink-0 rounded overflow-hidden border">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            <Link
                              href={`/products/${item.product.id}`}
                              className="hover:text-[#122B5F]"
                            >
                              {item.product.name}
                            </Link>
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.product.category}
                          </p>
                          <button
                            onClick={() => removeItem(index)}
                            className="text-sm text-red-600 hover:text-red-800 flex items-center mt-2 sm:hidden"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="sm:col-span-2 text-center">
                        <div className="sm:hidden text-sm text-gray-500 mb-1">
                          Price:
                        </div>
                        <div className="font-medium">
                          ${item.product.discountPrice || item.product.price}
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="sm:col-span-2 flex justify-center">
                        <div className="sm:hidden text-sm text-gray-500 mb-1">
                          Quantity:
                        </div>
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(index, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(index, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="sm:col-span-2 text-right">
                        <div className="sm:hidden text-sm text-gray-500 mb-1">
                          Subtotal:
                        </div>
                        <div className="font-medium text-[#122B5F]">
                          $
                          {(
                            (item.product.discountPrice || item.product.price) *
                            item.quantity
                          ).toFixed(2)}
                        </div>
                        <button
                          onClick={() => removeItem(index)}
                          className="text-sm text-red-600 hover:text-red-800 hidden sm:inline-flex items-center mt-2"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-gray-50 p-4 flex flex-wrap justify-between items-center gap-4">
                  <Link href="/shop">
                    <Button variant="ghost" className="gap-2">
                      <ChevronRight className="h-4 w-4 rotate-180" />
                      Continue Shopping
                    </Button>
                  </Link>

                  <Button variant="outline" onClick={() => setCartItems([])}>
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span>
                        {shippingCost === 0
                          ? 'Free'
                          : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Discount (10%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-lg text-[#122B5F]">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <div className="pt-2">
                    <div className="flex gap-2 mb-4">
                      <Input
                        placeholder="Coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        onClick={applyCoupon}
                        disabled={couponApplied}
                      >
                        Apply
                      </Button>
                    </div>

                    {couponApplied && (
                      <div className="text-sm text-green-600 mb-4">
                        Coupon DISCOUNT10 applied successfully!
                      </div>
                    )}

                    <Link href="/checkout">
                      <ButtonGradient variant="blue" className="w-full">
                        Proceed to Checkout
                      </ButtonGradient>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </CustomerLayout>
  );
}
