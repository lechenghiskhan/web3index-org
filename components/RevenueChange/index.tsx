import Box from "../Box";
import { filterCssFromProps } from "../../lib/utils";

const RevenueChange = ({ percentChange, ...props }) => {
  return (
    <Box
      css={{ display: "flex", alignItems: "center", ...props?.css }}
      {...filterCssFromProps(props)}
    >
      <Box
        css={{
          fontSize: "$1",
          width: "0",
          height: "0",
          borderStyle: "solid",
          borderWidth: "0 4px 6px 4px",
          borderColor: `transparent transparent #26B38D transparent`,
          mr: "$1",
        }}
      />
      <Box css={{ color: "#26B38D" }}>{percentChange}%</Box>
    </Box>
  );
};

export default RevenueChange;
