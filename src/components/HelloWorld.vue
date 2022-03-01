<template>
  <div class="hello">
    <section id="hero-static" class="hero-static d-flex align-items-center">
    <div class="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
      <h2>Welcome to <span>Ecopeat</span></h2>
      <p>Our innovative thinking helps us overcome new challenges in an ever increasing world of demands for new products, growing solutions and reliability of supply.</p>
      <img src="assets/img/logo.png"/>
      <br/>
      <a href="#about" class="btn-get-started scrollto">+91 99446 70855</a>
      <br/>
      <div class="d-flex">
        <a href="#" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-envelope-fill"></i><span>ecopeat.in@gmail.com</span></a>
      </div>
    </div>
  </section>
    <section id="featured-services" class="featured-services">
      <div class="container">

        <div class="row gy-4">

          <div class="col-xl-3 col-md-3 d-flex" data-aos="zoom-out">
            <div class="service-item position-relative">
              <div class="icon"><i class="bi bi-activity icon"></i></div>
              <h4><a href="" class="stretched-link">Ecopeat Block</a></h4>
              <p><img src="../assets/products/ecopeat-block.jpg" class="img-fluid animated"></p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-xl-3 col-md-3 d-flex" data-aos="zoom-out" data-aos-delay="200">
            <div class="service-item position-relative">
              <div class="icon"><i class="bi bi-bounding-box-circles icon"></i></div>
              <h4><a href="" class="stretched-link">Ecopeat Brick</a></h4>
              <p><img src="../assets/products/ecopeat-bricks.jpg" class="img-fluid animated"></p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-xl-3 col-md-3 d-flex" data-aos="zoom-out" data-aos-delay="400">
            <div class="service-item position-relative">
              <div class="icon"><i class="bi bi-calendar4-week icon"></i></div>
              <h4><a href="" class="stretched-link">Ecopeat Fibre</a></h4>
              <p><img src="../assets/products/eco-peat-fibre.jpg" class="img-fluid animated"></p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-xl-3 col-md-3 d-flex" data-aos="zoom-out" data-aos-delay="600">
            <div class="service-item position-relative">
              <div class="icon"><i class="bi bi-broadcast icon"></i></div>
              <h4><a href="" class="stretched-link">Coconut Oil</a></h4>
              <p><img src="../assets/products/coconut-oil.jpeg" class="img-fluid animated"></p>
            </div>
          </div><!-- End Service Item -->

        </div>

      </div>
    </section><!-- End Featured Services Section -->

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>About Us</h2>
          <p>We are one of the largest exporters of Coco Peat from South India. Our office is based at Tuticorin and supplying units are located in the coconut triangle of Southern Tamilnadu. The company has gained goodwill and a credible position in the International Market. We have always been a part of exporter of eco-friendly products in the country and we are geared to fulfill your requirements at a reasonable price. The company has grown steadily over the years, to become a reputed name in the coir industry. We stand poised on the verge of greater growth in the new millennium. We are registered with the Coir Board, India. We have a team of qualified export specialists who are trained to monitor your cargo through every stage of the export activity by sea . We have built up our own export network in India and we are in a position to source and fulfill customer requirements. We pay strict attention to Quality Standards and on-time Delivery and Service.</p>
        </div>

    </div>
  </section>
  <section id="services" class="services">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Our Services</h2>
          <p>We are pioneers in this industry and market leaders. Indian Cocopeat products are often referred to as the benchmark for other producers. </p>
        </div>

        <div class="row gy-5">

          <div v-for="(service, index) in services_img" :key="index" class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="service-item">
              <div class="img">
                <img v-bind:src="service.image" class="img-fluid" alt="">
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="portfolio" class="portfolio" data-aos="fade-up">

      <div class="container">

        <div class="section-header">
          <h2>Gallery</h2>
          <p>Hello</p>
        </div>

      </div>

      <div  class="container-fluid" data-aos="fade-up" data-aos-delay="200">

        <div  class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">
          <div class="row g-0 portfolio-container">

            <div v-for="(item, index) in gallery" :key="index" class="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-books">
              <img v-bind:src="item.image" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{ item.title }}</h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      gallery: [
      {
        id: 1,
        title: 'coconut',
        image: [require("../assets/portfolio/1.jpeg")],
      },
      {
        id: 2,
        title: 'Mushroom Cultivation',
        image: [require("../assets/portfolio/6.jpg")],
      },
      {
        id: 3,
        title: 'Coconut',
        image: [require("../assets/portfolio/3.jpeg")],
      },
      {
        id: 4,
        title: 'Planting berries',
        image: [require("../assets/portfolio/4.jpeg")],
      },
      {
        id: 5,
        title: 'Rose Cultivation',
        image: [require("../assets/portfolio/5.jpeg")],
      },
      {
        id: 6,
        title: 'Grapes',
        image: [require("../assets/portfolio/8.png")],
      },
      {
        id: 7,
        title: 'tomato',
        image: [require("../assets/portfolio/6.jpeg")],
      },
      {
        id: 8,
        title: 'Coconut',
        image: [require("../assets/portfolio/2.jpeg")],
      }
    ],
    services_img: [
      {
        image: [require("../assets/portfolio/a1.jpeg")],
        head: 'head',
        title: 'test'
      },
      {
        image: [require("../assets/portfolio/a2.jpeg")],
        head: 'head',
        title: 'test'
      },
      {
        image: [require("../assets/portfolio/a3.jpeg")],
        head: 'head',
        title: 'test'
      },
      {
        image: [require("../assets/portfolio/a4.jpeg")],
        head: 'head',
        title: 'test'
      },
      {
        image: [require("../assets/portfolio/a5.jpeg")],
        head: 'head',
        title: 'test'
      },
      {
        image: [require("../assets/portfolio/a6.jpeg")],
        head: 'head',
        title: 'test'
      }
    ]
    }
  }
}
</script>

