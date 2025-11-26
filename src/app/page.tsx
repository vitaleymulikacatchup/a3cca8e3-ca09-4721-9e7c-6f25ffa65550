"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Coffee, Heart, Instagram, Facebook, Leaf } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="small"
      background="fluid"
      cardStyle="glass-depth"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Львівська Кав'ярня"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175022642-tqdzog2a.jpg"
          logoAlt="Львівська Кав'ярня Logo"
          button={{
            text: "Замовити",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Львівська Кав'ярня"
          description="Локальна кав'ярня з автентичною атмосферою, якісною кавою та українським гостинством"
          tag="Місцева кав'ярня"
          tagIcon={Coffee}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175023788-0mfm6al4.jpg",
              imageAlt: "Cappuccino espresso coffee drink"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175024896-giem6qdp.jpg",
              imageAlt: "Cozy café atmosphere"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175026093-9qco5rmu.jpg",
              imageAlt: "Coffee beans roasting"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175027170-4iblvtqk.jpg",
              imageAlt: "Barista preparing coffee"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175028160-374zsi98.jpg",
              imageAlt: "Ukrainian coffee service"
            }
          ]}
          buttons={[
            {
              text: "Меню",
              href: "feature"
            },
            {
              text: "Контакти",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Про нас"
          description="Ми – невеликий сімейний бізнес, який вірить у якість і гостинність. Із 2015 року ми подаємо найкращу каву з місцевих обсмажень, свіжу випічку від українських пекарів та теплу атмосферу, де кожен гість почувається як вдома."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Наше меню"
          description="Відкрийте для себе вибір кави та закусок, які ми готуємо з любов'ю кожен день"
          tag="Спеціалізація"
          tagIcon={Leaf}
          features={[
            {
              title: "Капучино",
              description: "Класичний італійський напиток з ідеальним балансом еспресо, гарячого молока та піни. Кожна чашка готується мастацтвом нашого баристи.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175029689-xw6wy18t.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              title: "Еспресо",
              description: "Насичена, крістальна кава, яка розкриває всі нюанси смаку. Виготовлюється з найкращих зерен місцевого обсмажувача.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175030722-dww6viii.jpg",
              imageAlt: "Double espresso shot"
            },
            {
              title: "Свіжа випічка",
              description: "Маслані круасани та сирні погачки від місцевої пекарні. Подаємо гарячими прямо з духовки.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175031850-jwbqwca1.jpg",
              imageAlt: "Fresh pastries and croissants"
            },
            {
              title: "Атмосфера",
              description: "Затишний простір з книжками, місцевим мистецтвом та тихою музикою – ідеальне місце для роботи або відпочинку.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175032969-gobumync.jpg",
              imageAlt: "Cozy café interior"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          buttons={[
            {
              text: "Переглянути весь каталог",
              href: "#"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Відгуки наших гостей"
          description="Читайте, що кажуть про нас постійні відвідувачі та нові гості"
          tag="Відгуки"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Ольга С.",
              role: "Дизайнер",
              company: "Місцева креативна студія",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175034053-35lffilf.jpg",
              imageAlt: "Ольга, дизайнер"
            },
            {
              id: "2",
              name: "Максим П.",
              role: "Журналіст",
              company: "Місцева газета",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175035135-v9gpo6z1.jpg",
              imageAlt: "Максим, журналіст"
            },
            {
              id: "3",
              name: "Анна К.",
              role: "Вчителька",
              company: "Школа №5",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175036128-20smk7xn.jpg",
              imageAlt: "Анна, вчителька"
            },
            {
              id: "4",
              name: "Сергій М.",
              role: "Розробник",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175037357-34p9w7qu.jpg",
              imageAlt: "Сергій, розробник"
            },
            {
              id: "5",
              name: "Марія В.",
              role: "Фрилансер",
              company: "Творча робота",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175038880-054wizhb.jpg",
              imageAlt: "Марія, фрилансер"
            },
            {
              id: "6",
              name: "Іван Т.",
              role: "Бізнесмен",
              company: "Місцевий бізнес",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175040068-suxwf5xi.jpg",
              imageAlt: "Іван, бізнесмен"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="opacity"
          textboxLayout="default"
          uniformGridCustomHeightClasses="min-h-95 2xl:min-h-105"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Наші партнери"
          description="Працюємо з найкращими місцевими постачальниками та виробниками"
          tag="Партнери"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175042699-3g6tu15u.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175043852-praj1ltr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175045012-uip2adfh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175046447-82p86z2w.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175047507-gva779gu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175048627-fpv6yw2e.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175049694-d65n550i.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Напишіть нам"
          description="Маєте питання? Хочете зараховуватись на подію? Или просто хочете поговорити про каву? Дайте нам знати!"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Ваше ім'я",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Ваша електронна пошта",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Ваше повідомлення...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175041428-c7ius9ur.jpg"
          imageAlt="Українська кав'ярня інтер'єр"
          mediaPosition="right"
          buttonText="Відправити"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Львівська Кав'ярня"
          copyrightText="© Львівська Кав'ярня, 2025. Усі права захищені."
          columns={[
            {
              title: "Про нас",
              items: [
                {
                  label: "Історія",
                  href: "about"
                },
                {
                  label: "Контакти",
                  href: "contact"
                }
              ]
            },
            {
              title: "Меню",
              items: [
                {
                  label: "Гарячі напитки",
                  href: "#"
                },
                {
                  label: "Холодні напитки",
                  href: "#"
                }
              ]
            },
            {
              title: "Інформація",
              items: [
                {
                  label: "Години роботи",
                  href: "#"
                },
                {
                  label: "Доставка",
                  href: "#"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}