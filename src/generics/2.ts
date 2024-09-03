type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type name_color = Pick<AllType, "name" | "color">;
type position_weight = Pick<AllType, "position" | "weight">;

function compare(top: name_color, bottom: position_weight): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
