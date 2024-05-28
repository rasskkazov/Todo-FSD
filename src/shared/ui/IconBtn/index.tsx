import * as classes from "./IconBtn.module.scss";

export const IconBtn = ({
  Icon,
  onClick,
}: {
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
}) => {
  return (
    <button className={classes.iconBtn} onClick={onClick}>
      <Icon />
    </button>
  );
};
