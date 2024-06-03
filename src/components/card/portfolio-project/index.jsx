
import github from "../../../assets/images/github.png";

import "./style.scss"
const PortfolioProjectCard = () => {
  return (
    <div className="project-card">
        <div className="project-card__img">
            <img src={github} alt={"description"} />
        </div>
        <div className="project-card__box">
            <h2 className="project-card__title">Title (title) </h2>
            <p className="project-card__desc">Lorem ipsum dolor sit amet. (desc) </p>
            <a href="#" target="_blank" className="project-card__link"> View portfolio</a>
        </div>
    </div>
  )
}

export default PortfolioProjectCard