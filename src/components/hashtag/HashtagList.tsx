import { HashtagItem } from "../";

type HashtagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};

function HashtagList({ companyList, handleSelectCompany }: HashtagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={handleSelectCompany}
        />
      ))}
    </ul>
  );
}
export default HashtagList;
