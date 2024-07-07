const Tab = ({
  label,
  onClick,
  isActive,
}: {
  label: string;
  onClick: () => void;
  isActive: boolean;
}) => (
  <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
    {label}
  </div>
);

export default Tab;
