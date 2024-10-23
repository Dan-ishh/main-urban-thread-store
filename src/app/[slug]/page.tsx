import React, { Suspense } from "react";
import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import Reviews from "@/components/Reviews";
import Skeleton from "@/components/Skeleton";
import DOMPurify from "dompurify";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  console.log("inside");
  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky h-max top-20">
        <ProductImages items={product.media?.items} />
      </div>

      {/* DES */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1
          className="text-4xl font-medium
        "
        >
          {product.name}
        </h1>
        <div
          className="text-gray-800"
          dangerouslySetInnerHTML={{
            __html: product.description!,
          }}
        >
          {/* {product.description} */}
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        {/* <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$45</h3>
          <h2 className="font-medium text-2xl">$35</h2>
        </div> */}
        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl">₹ {product.price?.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ₹ {product.price?.price}
            </h3>
            <h2 className="font-medium text-2xl">
              ₹ {product.price?.discountedPrice}
            </h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100"></div>
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <Add
            productId={product._id!}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )}
        {product.additionalInfoSections &&
          product.additionalInfoSections.length > 0 && (
            <div className="h-[2px] bg-gray-100"></div>
          )}

        {product.additionalInfoSections?.map((section: any) => {
          console.log("section", section);
          return (
            <div className="text-sm" key={section.title}>
              <h4 className="font-medium mb-4">{section.title}</h4>
              <p
              // dangerouslySetInnerHTML={{
              //   __html: section?.description,
              // }}
              >
                {section.description}
              </p>
            </div>
          );
        })}
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}

        <Suspense fallback={<Skeleton />}>
          <Reviews productId={product._id!} />
        </Suspense>
      </div>
    </div>
  );
};

export default SinglePage;
