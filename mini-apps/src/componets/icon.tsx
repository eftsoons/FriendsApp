import icons from "../icon";

export type Icon = keyof typeof icons;

export default (iconname: Icon) => {
  return (
    <span className="icon">
      {String.fromCharCode(parseInt(icons[iconname], 16))}
    </span>
  );
};
