import { HashtagItem } from "../";
import { useFeedbackItemsContext } from "../../lib/hooks";

function HashtagList() {
  const { companyList, handleSelectCompany } = useFeedbackItemsContext();

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
