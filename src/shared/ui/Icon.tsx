type IconProps = {
  name: string;
  className: string;
};

export default function Icon({ name, className }: IconProps) {
  return (
    <svg className={className}>
      <use xlinkHref={`/icons/sprite.svg#icon-${name}`}></use>
    </svg>
  );
}
