import image1 from "../assets/hobbies/image1.jpg";
import image2 from "../assets/hobbies/image2.jpg";
import image3 from "../assets/hobbies/image3.jpg";
import image4 from "../assets/hobbies/image4.jpg";
import image5 from "../assets/hobbies/image5.jpg";
import image6 from "../assets/hobbies/image6.jpg";

const hobbyPhotos = [
  { src: image1, alt: "A favourite moment from my travels", placement: "md:col-span-5 md:row-span-2" },
  { src: image2, alt: "A personal photo from an outing", placement: "md:col-span-3" },
  { src: image3, alt: "A memory captured while travelling", placement: "md:col-span-4 md:row-span-2" },
  { src: image4, alt: "A delicious cooking moment", placement: "md:col-span-3" },
  { src: image5, alt: "A snapshot from a special day", placement: "md:col-span-4" },
  { src: image6, alt: "Another travel memory", placement: "md:col-span-5" },
];

function Hobbies() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F9F0E0] pb-16 pt-28 text-[#252321] sm:pt-32">
      <div className="mx-auto max-w-screen-xl px-5 sm:px-8 lg:px-12">
        <header className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.24em] text-[#CC3A63] sm:text-sm">
            PERSONAL REEL
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            APART FROM TECH
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#625a57] italic sm:text-xl">
            A little glimpse into the things I enjoy beyond technology.
          </p>
          <p className="mt-3 text-base leading-7 text-[#A2AB73] italic sm:text-lg">
            I love cooking and travelling.
          </p>
          <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#CC3A63] to-[#A2AB73]" />
        </header>

        <section className="mt-12 sm:mt-14" aria-label="Personal photo gallery">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:auto-rows-[10.5rem] md:grid-cols-12 lg:auto-rows-[12rem] lg:gap-5">
            {hobbyPhotos.map((photo, index) => (
              <figure
                key={photo.src}
                className={`group relative min-w-0 overflow-hidden rounded-2xl bg-[#e8d9ce] shadow-[0_12px_28px_rgba(91,65,60,0.14)] ${photo.placement} ${index === 0 || index === 2 ? "aspect-[3/4] md:aspect-auto" : "aspect-[4/5] md:aspect-auto"}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#252321]/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </figure>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Hobbies;
