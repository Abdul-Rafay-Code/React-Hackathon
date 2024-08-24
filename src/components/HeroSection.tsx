import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat md:h-screen"
      style={{
        backgroundImage: `url('https://miro.medium.com/v2/resize:fit:1200/1*XUrSasLtkB0VoXcLEMfJKg.jpeg')`,
        backgroundSize: "cover", // Ensure the image covers the entire section
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Ensure the image does not repeat
        backgroundAttachment: "fixed", // Optional: keeps the image fixed while scrolling
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container h-full flex flex-col items-center justify-center px-4 md:px-6 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Welcome to Our Hotel
        </h1>
        <p className="mt-4 max-w-[600px] text-lg md:text-xl">
          Experience the finest hospitality and luxurious amenities at our
          premier hotel. Indulge in our world-class dining, rejuvenating spa,
          and breathtaking views.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex h-10 border border-black items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Explore Ours
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
