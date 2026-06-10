import { Compass, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const destinationTemplateHtml = `
    <!-- rts Destinations area start -->
    <section class="rts-destination-area rts-section-gap">
        <div class="container">
            <div class="section-title-area center-style">
                <p class="sub-title d-flex align-items-center justify-content-center gap-2 wow fadeInUp" data-wow-delay="0.2s">Destinations</p>
                <h2 class="section-title text-uppercase wow fadeInUp" data-wow-delay="0.4s">Where Will You Go Next?</h2>
                <p class="desc wow fadeInUp" data-wow-delay="0.6s">From romantic escapes to adventure-packed holidays find the <br> perfect destination for your dream trip.</p>
            </div>
            <div class="section-inner mt--60">
                <div class="row g-5">
                    <div class="col-lg-6 col-md-12">
                        <div class="destination-wrapper-4 radius-10 image-transform wow fadeInRight" data-wow-delay="0.2s">
                            <div class="image-area image-transform">
                                <a href="/destination/namibie"><img class="hover-image" src="/assets/images/destination/21.webp" alt=""></a>
                            </div>
                            <div class="content-area">
                                <p>10 Tours</p>
                                <h4 class="title text-uppercase"><a href="/destination/namibie">Namibie</a></h4>
                                <a href="/destination/namibie" class="rts-btn text-btn with-arrow">Explore Now <i class="fa-regular fa-arrow-up up-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="destination-wrapper-4 radius-10 image-transform wow fadeInRight" data-wow-delay="0.4s">
                            <div class="image-area image-transform">
                                <a href="/destination/zambie"><img class="hover-image" src="/assets/images/destination/22.webp" alt=""></a>
                            </div>
                            <div class="content-area">
                                <p>3 Tours</p>
                                <h4 class="title text-uppercase"><a href="/destination/zambie">Zambie</a></h4>
                                <a href="/destination/zambie" class="rts-btn text-btn with-arrow">Explore Now <i class="fa-regular fa-arrow-up up-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="destination-wrapper-4 radius-10 image-transform wow fadeInRight" data-wow-delay="0.6s">
                            <div class="image-area image-transform">
                                <a href="/destination/mozambique"><img class="hover-image" src="/assets/images/destination/23.webp" alt=""></a>
                            </div>
                            <div class="content-area">
                                <p>2 Tours</p>
                                <h4 class="title text-uppercase"><a href="/destination/mozambique">Mozambique</a></h4>
                                <a href="/destination/mozambique" class="rts-btn text-btn with-arrow">Explore Now <i class="fa-regular fa-arrow-up up-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="destination-wrapper-4 radius-10 image-transform wow fadeInLeft" data-wow-delay="1.2s">
                            <div class="image-area image-transform">
                                <a href="/destination/zimbabwe"><img class="hover-image" src="/assets/images/destination/24.webp" alt=""></a>
                            </div>
                            <div class="content-area">
                                <p>8 Tours</p>
                                <h4 class="title text-uppercase"><a href="/destination/zimbabwe">Zimbabwe</a></h4>
                                <a href="/destination/zimbabwe" class="rts-btn text-btn with-arrow">Explore Now <i class="fa-regular fa-arrow-up up-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 order-change">
                        <div class="destination-wrapper-4 radius-10 image-transform wow fadeInLeft" data-wow-delay="1s">
                            <div class="image-area image-transform">
                                <a href="/destination/botswana"><img class="hover-image" src="/assets/images/destination/25.webp" alt=""></a>
                            </div>
                            <div class="content-area">
                                <p>10 Tours</p>
                                <h4 class="title text-uppercase"><a href="/destination/botswana">Botswana</a></h4>
                                <a href="/destination/botswana" class="rts-btn text-btn with-arrow">Explore Now <i class="fa-regular fa-arrow-up up-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="destination-wrapper-4 radius-10 image-transform wow fadeInLeft" data-wow-delay=".8s">
                            <div class="image-area image-transform">
                                <a href="/destination/rwanda"><img class="hover-image" src="/assets/images/destination/26.webp" alt=""></a>
                            </div>
                            <div class="content-area">
                                <p>5 Tours</p>
                                <h4 class="title text-uppercase"><a href="/destination/rwanda">Rwanda</a></h4>
                                <a href="/destination/rwanda" class="rts-btn text-btn with-arrow">Explore Now <i class="fa-regular fa-arrow-up up-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- rts Destinations area end -->

    <!-- rts faq area start -->
    <section class="rts-faq-area">
        <div class="container">
            <div class="section-inner">
                <div class="row g-5">
                    <div class="col-lg-4">
                        <div class="image-area overflow-hidden radius-10 wow zoomIn" data-wow-delay="0.4s">
                            <img class="wow scaleIn" data-wow-delay="0.4s" src="/assets/images/about/03.webp" alt="">
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="faq-content">
                            <div class="section-title-area">
                                <h2 class="section-title mb-0">Have questions?</h2>
                            </div>

                            <div class="accordion-faq-one mt--60">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Do I need any kayaking experience?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Our studio provides a wide range of creative services, including design, branding, web development, graphic design, and video production.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Is kayaking safe for non-swimmers?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Our studio provides a wide range of creative services, including design, branding, web development, graphic design, and video production.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                What should I bring on a kayaking trip?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Our studio provides a wide range of creative services, including design, branding, web development, graphic design, and video production.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                What happens if the weather is bad?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Our studio provides a wide range of creative services, including design, branding, web development, graphic design, and video production.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- rts faq area end -->
`;

export default function DestinationPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-forest px-6 pb-24 pt-40 text-ivory lg:pb-32 lg:pt-52">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/destination/48.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/80" />
        <div className="container-x relative">
          <div className="pt-20">
            <Link
            href="/"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold transition hover:text-ivory"
          >
            <span aria-hidden="true" className="opacity-60">
              &larr;
            </span>
            Accueil
          </Link>
          </div>
          <p className="eyebrow mt-6 text-gold">Nos destinations</p>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl text-white">
            L'Afrique <br />en six chapitres.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
            De l'infini mineral namibien aux eaux turquoise du Mozambique,
            chaque destination est un univers a part, compose sur mesure par
            nos specialistes du continent.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-ivory/70">
            <span className="text-lg flex items-center gap-2">
              <Compass className="size-4 text-gold" /> 6 pays signature
            </span>
            <span className="text-lg flex items-center gap-2">
              <MapPin className="size-4 text-gold" /> +120 lodges selectionnes
            </span>
          </div>
        </div>
      </section>

      <div dangerouslySetInnerHTML={{ __html: destinationTemplateHtml }} />
    </main>
  );
}
