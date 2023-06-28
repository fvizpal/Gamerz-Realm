import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const NewsWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          See whats happening ...
        </Typography>
        {/* <Typography color={medium}>Create Ad</Typography> */}
      </FlexBetween>

      <FlexBetween>
        <Typography color={main}>News updates</Typography>
        {/* <Typography color={medium}>mikacosmetics.com</Typography> */}
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        GTA 6 to release in 2024, expected to be the biggest release of gaming history
      </Typography>
      <Typography color={medium} m="0.5rem 0">
        Ubisoft to focus on mobile gaming industry, intends to make AAA games for mobile phones
      </Typography>
      <Typography color={medium} m="0.5rem 0">
        Microsoft dealing to acquire Activision gaming studio, Sony denies right to their consoles
      </Typography>
      <Typography color={medium} m="0.5rem 0">
        Rockstar games' parent company Take-two Interactive teases release of a new game title
      </Typography>
    </WidgetWrapper>
  );
};

export default NewsWidget;
