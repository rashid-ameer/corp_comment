type HashtagItemProps = {
  company: string;
  onSelectCompany: (company: string) => void;
};

function HashtagItem({ company, onSelectCompany }: HashtagItemProps) {
  return (
    <li>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
}
export default HashtagItem;
