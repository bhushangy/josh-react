import ScreenSaver from "../../../../components/ScreenSaver";

async function Color({ params }) {
  const { color = "red" } = await params;
  console.log(params)
  return <ScreenSaver color={color} />;
}

export default Color;
