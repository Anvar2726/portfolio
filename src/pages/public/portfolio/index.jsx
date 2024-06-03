import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import linkedin from "../../../assets/images/linkedin-512.png";
import instagram from "../../../assets/images/instagram-512.png";
import telegram from "../../../assets/images/telegram-512.png";
import github from "../../../assets/images/github.png";
import tel from "../../../assets/images/telephone.png";

import "./style.scss";
import PortfolioProjectCard from "../../../components/card/portfolio-project";
import request from "../../../server/request";
import { BASE } from "../../../consts";
const PortfolioUIPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await request(`users/${userId}`);
      setUser(data);
      const {
        data: { data: skill },
      } = await request(`skills?user=${userId}&limit=50`);
      setSkills(skill);
    };
    getUser();
  }, [userId]);
  console.log(skills);
  return (
    <Fragment>
      <header className="portfolio-header">
        <div className="container">
          <nav className="portfolio-header__nav">
            <Link className="portfolio-header__logo"> {user?.firstName}</Link>
            <div className="portfolio-header__box">
              <a href="#home">Home</a>
              <a href="#about">About me</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </div>
      </header>
      <main className="portfolio-home__main">
        {/* Home */}
        <section id="home" className="portfolio-home">
          <div className="container portfolio-home__box">
            <div>
              <h2 className="portfolio-home__intro">Hello, i’m</h2>
              <h1 className="portfolio-home__title">
                {user?.firstName} {user?.lastName}
              </h1>
              <p className="portfolio-home__text">
                {user?.fields?.map((el) => (
                  <span key={el}>{el},</span>
                ))}
              </p>
              <div className="portfolio-home__socials">
                <a href="https://linkedin.com" target="_blank">
                  <img src={linkedin} alt="linkedin" width={30} />
                </a>
                <a
                  href={`https://instagram.com/${user?.instagram}`}
                  target="_blank"
                >
                  <img src={instagram} alt="instagram" width={30} />
                </a>
                <a href={`https://t.me/${user?.telegram}`} target="_blank">
                  <img src={telegram} alt="telegram" width={30} />
                </a>
                <a href={`https://github.com/${user?.github}`} target="_blank">
                  <img src={github} alt="github" width={30} />
                </a>
              </div>
              <a href="#about" className="portfolio-home__btn">
                About me
              </a>
              <a href="#about" className="portfolio-home__btn">
                Projects
              </a>
            </div>
            <div>
              <img
                className="portfolio-home__img"
                src={`${BASE}upload/${user?.photo}`}
                alt=""
              />
            </div>
          </div>
        </section>

        {/* about */}
        <section id="about" className="portfolio-home__about">
          <div className="container">
            <div className="portfolio-home__about-box">
              <h2 className="portfolio-home__about__title">About me</h2>
              <p className="portfolio-home__about__info">{user?.info}</p>

              <div className="portfolio-home__education">
                <h2 className="portfolio-home__education__title">Education:</h2>
                <h3 className="portfolio-home__education__level">
                  {" "}
                  Bachelor(level)
                </h3>
                <h3 className="portfolio-home__education__name">
                  Tashkent technical university (eduction name)
                </h3>
                <p className="portfolio-home__education__date">start - end</p>
              </div>

              <div className="portfolio-home__experience">
                <h2 className="portfolio-home__experience__title">
                  Experience:
                </h2>
                <h3 className="portfolio-home__experience__level">
                  {" "}
                  Frontend dev(work)
                </h3>
                <h3 className="portfolio-home__experience__name">
                  {" "}
                  Tashkent technical university(company name)
                </h3>
                <p className="portfolio-home__experience__desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime accusantium corrupti reiciendis similique vero
                  praesentium mollitia, illum repellat eum. (desc)
                </p>
                <p className="portfolio-home__experience__date">start - end</p>
              </div>

              <h2 className="portfolio-home__skills__title">Skills:</h2>
              <div className="portfolio-home__skills">
                {skills?.map((el) => (
                  <span key={el._id}>{el.name}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* projects */}
        <section id="projects" className="portfolio-projects">
          <div className="container">
            <h1 className="portfolio-projects__title">Projects</h1>
            <p className="portfolio-projects__text">
              I have worked on many projects over the course of being a Web
              Developer, here are a few of my live, real-world projects
            </p>
            <div className="portfolio-projects__row">
              <PortfolioProjectCard />
              <PortfolioProjectCard />
              <PortfolioProjectCard />
              <PortfolioProjectCard />
            </div>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="portfolio-contact">
          <h1 className="portfolio-contact__title">Contact with me</h1>
          <div className="container portfolio-contact__container">
            <div>
              <p className="portfolio-contact__text">
                Satisfied with me? Please contact me
              </p>
              <div className="portfolio-home__socials">
                <a href="https://linkedin.com" target="_blank">
                  <img src={linkedin} alt="linkedin" width={30} />
                </a>
                <a
                  href={`https://instagram.com/${user?.instagram}`}
                  target="_blank"
                >
                  <img src={instagram} alt="instagram" width={30} />
                </a>
                <a href={`https://t.me/${user?.telegram}`} target="_blank">
                  <img src={telegram} alt="telegram" width={30} />
                </a>
                <a href={`https://github.com/${user?.github}`} target="_blank">
                  <img src={github} alt="github" width={30} />
                </a>
              </div>
            </div>
            <form className="portfolio-contact__form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" cols="30" rows="10"></textarea>
              <button type="submit" className="portfolio-contact__btn">
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="portfolio-footer">
        <div className="container portfolio-footer__container">
          <div>
            <div className="portfolio-home__socials">
              <a href="https://linkedin.com" target="_blank">
                <img src={linkedin} alt="linkedin" width={30} />
              </a>
              <a
                href={`https://instagram.com/${user?.instagram}`}
                target="_blank"
              >
                <img src={instagram} alt="instagram" width={30} />
              </a>
              <a href={`https://t.me/${user?.telegram}`} target="_blank">
                <img src={telegram} alt="telegram" width={30} />
              </a>
              <a href={`https://github.com/${user?.github}`} target="_blank">
                <img src={github} alt="github" width={30} />
              </a>
            </div>
            <p className="portfolio-footer__text">© 2024 All rights reserved</p>
          </div>
          <a className="portfolio-footer__tel" href="tel:12345678">
            <img src={tel} width={30} alt="" /> My phone: +1234678
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default PortfolioUIPage;
