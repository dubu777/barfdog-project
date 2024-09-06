import { paginationWrapper, progressBar, bulletContainer, bulletText } from "./SurveyPagination.css";

interface SurveyPaginationProps {
  currentSection: number;
  totalSections: number;
  sectionTitles: string[];
}

export default function SurveyPagination({
  currentSection,
  totalSections,
  sectionTitles,
}: SurveyPaginationProps) {
  const progressPercentage = ((currentSection - 1) / (totalSections - 1)) * 100;

  const getBulletStatus = (index: number) => {
    if (index < currentSection) {
      return "completed";
    } else if (index === currentSection) {
      return "active";
    } else {
      return "inactive";
    }
  };

  return (
    <section className={paginationWrapper}>
      <div className={progressBar} style={{ width: `${progressPercentage}%`, transition: 'width 0.4s ease' }} />
      {sectionTitles.map((title, index) => (
        <div key={index} className={bulletContainer({ status: getBulletStatus(index + 1) })}>
          <span className={bulletText({status: getBulletStatus(index + 1)})}>{title}</span>
        </div>
      ))}
    </section>
  );
}
