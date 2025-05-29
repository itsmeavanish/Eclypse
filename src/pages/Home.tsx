import { type JSX } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "../components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
export const Home = (): JSX.Element => {
  // Size options data
  const sizeOptions = [
    { id: 1, size: "XS" },
    { id: 2, size: "S" },
    { id: 3, size: "M", selected: true },
    { id: 4, size: "L" },
    { id: 5, size: "XL" },
  ];

  // Product thumbnails data
  const productThumbnails = [
    {
      id: 1,
      src: "https://c.animaapp.com/mb91au9rhWKL3a/img/frame-12.png",
      alt: "Product thumbnail 1",
    },
    {
      id: 2,
      src: "https://c.animaapp.com/mb91au9rhWKL3a/img/frame-11.png",
      alt: "Product thumbnail 2",
    },
    {
      id: 3,
      src: "https://c.animaapp.com/mb91au9rhWKL3a/img/frame-13.png",
      alt: "Product thumbnail 3",
    },
  ];

  // Gallery images data

  // Accordion items data
  const accordionItems = [
    { id: "size-fit", title: "Size & Fit" },
    { id: "delivery-returns", title: "Delivery & Returns" },
    { id: "how-made", title: "How This Was Made" },
  ];

  return (
    
      <div className="bg-[#070707] overflow-hidden min-w-full h-[5336px] relative">
        
        
        {/* Hero Section */}
        <img
          className="absolute w-[383px] h-[129px] top-[140px] left-24"
          alt="Hero header"
          src="https://c.animaapp.com/mb91au9rhWKL3a/img/hero-header.png"
        />

        <img
          className="absolute w-[1339px] h-[530px] top-[283px] left-24"
          alt="Hero"
          src="https://c.animaapp.com/mb91au9rhWKL3a/img/hero-mp4.png"
        />

        <div className="absolute w-[53px] h-[18px] top-[239px] left-[1339px]">
          <div className="absolute top-0 left-[19px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[14.6px] tracking-[-0.29px] leading-[normal]">
            2025
          </div>

          <div className="absolute w-[11px] h-[11px] top-1 left-0 bg-[url(https://c.animaapp.com/mb91au9rhWKL3a/img/group.png)] bg-[100%_100%]" />
        </div>

        {/* Brand Philosophy Section */}
        <div className="absolute w-[800px] top-[1066px] left-[50px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-5xl tracking-[-0.96px] leading-[normal]">
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </div>

        {/* Learn More Link */}
        <div className="absolute w-[312px] h-[41px] top-[1320px] left-[50px]">
          <div className="absolute top-px left-0 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#e3e3e3] text-2xl tracking-[-0.48px] leading-[normal]">
            Learn more about Eclypse
          </div>

          <Separator className="w-[301px] absolute top-10 left-0" />

          <img
            className="absolute w-[39px] h-[39px] top-0 left-[273px]"
            alt="Arrow right"
            src="https://c.animaapp.com/mb91au9rhWKL3a/img/arrow-right.svg"
          />
        </div>

        {/* Gallery Section */}
        <img
          className="absolute w-[883px] h-[489px] top-[1510px] left-[50px] object-cover"
          alt="Frame"
          src="https://c.animaapp.com/mb91au9rhWKL3a/img/frame-3.png"
        />

        <div className="absolute w-[424px] h-[489px] top-[1510px] left-[964px] rounded-[5px] bg-[url(https://c.animaapp.com/mb91au9rhWKL3a/img/frame-18-2.png)] bg-cover" />

        <div className="absolute w-[424px] h-[397px] top-[2027px] left-[50px] rounded-[5px] bg-[url(https://c.animaapp.com/mb91au9rhWKL3a/img/frame-18.png)] bg-cover" />

        <div className="absolute w-[424px] h-[397px] top-[2027px] left-[509px] rounded-[5px] bg-[url(https://c.animaapp.com/mb91au9rhWKL3a/img/frame-18-1.png)] bg-cover" />

       <div
  className="relative top-[2027px] left-[964px] rounded-[5px] overflow-hidden group"
  style={{
    width: "424px",
    height: "397px",
    borderRadius: "5px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }}
>
  {/* Default image */}
  <img
    src="https://c.animaapp.com/mb91au9rhWKL3a/img/frame-19.png"
    alt="Default"
    className="w-full h-full object-cover absolute group-hover:opacity-0"
  />

  {/* Hover image */}
  <img
    src="https://c.animaapp.com/mb91au9rhWKL3a/img/hero-header.png"
    alt="Hover"
    className="w-3/4 h-3/4 object-contain absolute group-hover:opacity-100 opacity-0"
  />
</div>




        {/* Product Title */}
        <div className="absolute w-[800px] top-[2607px] left-[43px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-5xl tracking-[-0.96px] leading-[normal]">
          Silhouette No. 1 – Vermilion
        </div>

        {/* Product Section */}
        <Card className="absolute w-[1440px] h-[912px] top-[2850px] -left-px bg-[#f6f6f6] rounded-none border-none">
          <CardContent className="p-0">
            <div className="absolute w-[539px] top-[53px] left-[736px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-[15px] tracking-[-0.30px] leading-[normal]">
              A tailored composition in motion. Cut from structured wool with a
              sculpted shoulder and softened hem, this piece captures presence
              without force. Worn here in the stillness of a city in motion.
            </div>

            {/* Product Thumbnails */}
            <div className="flex absolute top-[153px] left-[736px] gap-6">
              {productThumbnails.map((thumbnail) => (
                <img
                  key={thumbnail.id}
                  className="w-52 h-[199px] object-cover"
                  alt={thumbnail.alt}
                  src={thumbnail.src}
                />
              ))}
            </div>

            <Separator className="w-[654px] absolute top-[401px] left-[736px]" />

            {/* Price Section */}
            <div className="absolute top-[455px] left-[736px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#111111] text-4xl tracking-[-0.72px] leading-[normal]">
              ₹ 7,999
            </div>

            <div className="absolute top-[473px] left-[864px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#767676] text-[15px] tracking-[-0.30px] leading-[normal] whitespace-nowrap">
              MRP incl. of all taxes
            </div>

            {/* Size Selection */}
            <div className="absolute top-[537px] left-[736px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-xl tracking-[-0.40px] leading-[normal] whitespace-nowrap">
              Please select a size
            </div>

            <div className="absolute top-[540px] left-[933px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-[15px] tracking-[-0.30px] underline whitespace-nowrap leading-[normal]">
              Size chart
            </div>

            <div className="flex absolute top-[604px] left-[736px] gap-[32px]">
              {sizeOptions.map((option) => (
                <div
                  key={option.id}
                  className={`flex h-[49px] items-center justify-center px-[31px] py-[15px] bg-[#d9d9d9] rounded ${
                    option.size === "XS" || option.size === "S"
                      ? "w-[83px]"
                      : "w-[82px]"
                  }`}
                >
                  <div
                    className={`text-center relative w-fit mt-[-0.50px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[15px] tracking-[-0.30px] leading-[normal] whitespace-nowrap ${
                      option.selected ? "text-[#f6f6f6]" : "text-[#767676]"
                    }`}
                  >
                    {option.size}
                  </div>
                </div>
              ))}
            </div>

            <Separator className="w-[654px] absolute top-[706px] left-[736px]" />

            {/* Action Buttons */}
            <div className="inline-flex items-center gap-8 absolute top-[792px] left-[736px]">
              <Button
                variant="outline"
                className="w-[196px] h-[66px] rounded-[8.71px] border-2 border-solid border-[#c2c2c2] bg-transparent"
              >
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#0d0d0d] text-[19.3px] tracking-[-0.39px]">
                  Add to Cart
                </span>
              </Button>

              <Button className="w-[428px] h-[66px] bg-black rounded-[8.71px]" onClick={()=>window.location.href="/purchase"}>
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[19.3px] tracking-[-0.39px]" >
                  Buy
                </span>
              </Button>
            </div>

            {/* Product Image */}
            <img
              className="absolute w-[703px] h-[912px] top-0 left-px object-cover"
              alt="Product"
              src="https://c.animaapp.com/mb91au9rhWKL3a/img/rectangle-2.png"
            />
          </CardContent>
        </Card>

        {/* Accordion Section */}
        <div className="absolute w-[1342px] h-[348px] top-[3941px] left-[50px]">
          <Accordion type="single" collapsible className="w-full">
            {accordionItems.map((item, index) => (
              <AccordionItem key={item.id} value={item.id} className="border-0">
                <AccordionTrigger className="py-6 [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px] bg-black ">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  {/* Content would go here */}
                </AccordionContent>
                {index < accordionItems.length - 1 && (
                  <Separator className="w-[1342px]" />
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Separator className="w-[1342px] absolute top-[4329px] left-[50px]" />

        {/* Testimonial Section */}
        <div className="absolute w-[1341px] h-[412px] top-[4483px] left-[50px]">
          <img
            className="absolute w-[126px] h-[126px] top-[97px] left-[1205px]"
            alt="Customer avatar"
            src="https://c.animaapp.com/mb91au9rhWKL3a/img/ellipse-3.png"
          />

          <img
            className="absolute w-[69px] h-[69px] top-[253px] left-[1233px]"
            alt="Ellipse"
            src="https://c.animaapp.com/mb91au9rhWKL3a/img/ellipse-4.png"
          />

          <img
            className="absolute w-[69px] h-[69px] top-[343px] left-[1233px]"
            alt="Ellipse"
            src="https://c.animaapp.com/mb91au9rhWKL3a/img/ellipse-5.png"
          />

          <div className="absolute top-[304px] left-[82px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#c3c3c3] text-2xl tracking-[0] leading-9 whitespace-nowrap">
            Random Woman
          </div>

          <div className="absolute top-[352px] left-[84px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-neutral-600 text-base tracking-[0] leading-6 whitespace-nowrap">
            NY, USA
          </div>

          <div className="absolute w-[750px] top-28 left-[84px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d1d1d1] text-5xl tracking-[0] leading-[52.3px]">
            Understated, but unforgettable. It feels like it was made for me
          </div>

          <div className="absolute top-[92px] left-4 [font-family:'Coolvetica-Regular',Helvetica] text-[#f6f6f6] text-[118.8px] leading-[normal] font-normal tracking-[0]">
            &quot;
          </div>

          <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[5.12px] leading-[normal] whitespace-nowrap">
            OUR CUSTOMERS
          </div>

          <img
            className="absolute w-4 h-7 top-[146px] left-[1138px]"
            alt="Vector"
            src="https://c.animaapp.com/mb91au9rhWKL3a/img/vector-2.svg"
          />
        </div>

        <Separator className="w-[1342px] absolute top-[4995px] left-[50px]" />

        {/* Footer */}
        <footer className="flex w-[1340px] items-end gap-6 p-6 absolute top-[5067px] left-[50px] bg-[#090808]">
          <div className="inline-flex flex-col items-start gap-[67px] relative flex-[0_0_auto]">
            <div className="gap-2 inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-[32px] tracking-[-1.28px] leading-8 whitespace-nowrap">
                Eclypse
              </div>

              <img
                className="relative w-[7.07px] h-[7.07px] mt-[-0.62px] mr-[-0.62px]"
                alt="Vector"
                src="https://c.animaapp.com/mb91au9rhWKL3a/img/vector-1.svg"
              />
            </div>

            <div className="flex-col gap-1 inline-flex items-start relative flex-[0_0_auto]">
              <div className="gap-4 inline-flex items-start relative flex-[0_0_auto]">
                <div className="[font-family:'Neue_Montreal-Medium',Helvetica] text-sm tracking-[0] leading-[19.6px] relative w-fit mt-[-1.00px] font-medium text-[#d3d5d8] whitespace-nowrap">
                  Home
                </div>

                <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Degular_Demo-Regular',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] whitespace-nowrap font-normal tracking-[0]">
                  /
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                  About
                </div>

                <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Degular_Demo-Regular',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] whitespace-nowrap font-normal tracking-[0]">
                  /
                </div>

                <div className="mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap relative w-fit font-medium" >
                  Buy
                </div>

                <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Inter',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] whitespace-nowrap font-normal tracking-[0]">
                  /
                </div>
              </div>

              <div className="gap-4 inline-flex items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                  Our Customers
                </div>

                <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Inter',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] whitespace-nowrap font-normal tracking-[0]">
                  /
                </div>
              </div>

              <div className="gap-4 inline-flex items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                  Contacts
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-end gap-8 relative flex-1 self-stretch grow">
            <div className="flex-col gap-2 inline-flex items-start relative flex-[0_0_auto]">
              <div className="opacity-60 [font-family:'Inter',Helvetica] text-[10px] tracking-[1.50px] leading-[13px] relative w-fit mt-[-1.00px] font-medium text-[#d3d5d8] whitespace-nowrap">
                CONTACT
              </div>

              <div className="relative w-fit [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-xl tracking-[-0.40px] leading-[24.0px] whitespace-nowrap">
                +91 123-456-7890
              </div>
            </div>

            <div className="flex-col gap-2 inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] opacity-60 [font-family:'Inter',Helvetica] font-medium text-[#d3d5d8] text-[10px] tracking-[1.50px] leading-[13px] whitespace-nowrap">
                EMAIL
              </div>

              <div className="relative w-fit [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                eclypse@gmail.com
              </div>
            </div>
          </div>

          <div className="relative flex-1 self-stretch grow" />

          <div className="flex flex-col items-end justify-between relative flex-1 self-stretch grow">
            <div className="relative w-10 h-10 bg-white rounded-[20px]">
              <img
                className="absolute w-[13px] h-[15px] top-3 left-[13px]"
                alt="Vector"
                src="https://c.animaapp.com/mb91au9rhWKL3a/img/vector-3.svg"
              />
            </div>

            <div className="relative w-fit opacity-60 [font-family:'Neue_Machina-Regular',Helvetica] font-normal text-[#d3d5d8] text-[10px] tracking-[0] leading-[13px] whitespace-nowrap">
              <span className="[font-family:'Neue_Machina-Regular',Helvetica] font-normal text-[#d3d5d8] text-[10px] tracking-[0] leading-[13px]">
                ©
              </span>

              <span className="font-family:'Degular_Demo-Medium',Helvetica] font-medium">
                {" "}
                Eclypse 2025
              </span>
            </div>
          </div>
        </footer>

        {/* Navigation */}
        
      </div>
  );
};
